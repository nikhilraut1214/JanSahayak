import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  limit, 
  deleteDoc, 
  doc, 
  getDocs,
  Firestore,
  serverTimestamp
} from 'firebase/firestore';
import { getAuth, signInAnonymously, Auth } from 'firebase/auth';
import { getAnalytics, logEvent, Analytics, isSupported } from 'firebase/analytics';
import firebaseConfigRaw from '../../firebase-applet-config.json';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;
let analytics: Analytics | null = null;
let isAnonymousAuthStarted = false;

try {
  const config = {
    apiKey: firebaseConfigRaw.apiKey,
    authDomain: firebaseConfigRaw.authDomain,
    projectId: firebaseConfigRaw.projectId,
    storageBucket: firebaseConfigRaw.storageBucket,
    messagingSenderId: firebaseConfigRaw.messagingSenderId,
    appId: firebaseConfigRaw.appId,
    measurementId: firebaseConfigRaw.measurementId || undefined
  };

  if (!getApps().length) {
    app = initializeApp(config);
  } else {
    app = getApp();
  }

  // Use specific Firestore database ID if provided
  if (firebaseConfigRaw.firestoreDatabaseId) {
    db = getFirestore(app, firebaseConfigRaw.firestoreDatabaseId);
  } else {
    db = getFirestore(app);
  }

  auth = getAuth(app);

  // Initialize analytics safely if supported
  if (typeof window !== 'undefined') {
    isSupported().then((supported) => {
      if (supported && app) {
        analytics = getAnalytics(app);
      }
    }).catch(() => {
      // Analytics unsupported in current container environment
    });
  }
} catch (error) {
  console.warn('Firebase initialization warning (app will use local fallback):', error);
}

// Silent background authentication helper (ensures security rules authorization without any UI login/signup)
export async function ensureSilentAuth(): Promise<boolean> {
  if (!auth) return false;
  if (auth.currentUser) return true;
  if (isAnonymousAuthStarted) return false;
  
  try {
    isAnonymousAuthStarted = true;
    await signInAnonymously(auth);
    return true;
  } catch (err) {
    console.warn('Silent anonymous auth fallback:', err);
    return false;
  } finally {
    isAnonymousAuthStarted = false;
  }
}

// Track Anonymous Visitor Analytics Events
export async function trackAnalyticsEvent(
  eventName: string,
  eventParams: Record<string, any> = {}
) {
  try {
    // 1. Log to Firebase Web Analytics if active
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
    }

    // 2. Persist event to Firestore for real-time Admin Panel telemetry
    if (db) {
      await ensureSilentAuth();
      const eventsRef = collection(db, 'analytics_events');
      await addDoc(eventsRef, {
        eventName,
        details: JSON.stringify(eventParams),
        page: eventParams.page || window.location.hash || 'home',
        query: eventParams.query || '',
        timestamp: new Date().toISOString(),
        createdAt: serverTimestamp()
      });
    }
  } catch (err) {
    // Non-blocking catch
  }
}

// Submit Anonymous Feedback to Firestore
export async function saveFeedbackToFirestore(feedbackData: {
  rating: number;
  message: string;
  category?: string;
  state?: string;
  page?: string;
  name?: string;
  mobile?: string;
  email?: string;
}): Promise<string | null> {
  if (!db) return null;
  try {
    await ensureSilentAuth();
    const fbRef = collection(db, 'feedback');
    const docRef = await addDoc(fbRef, {
      ...feedbackData,
      rating: Number(feedbackData.rating) || 5,
      message: String(feedbackData.message || '').substring(0, 2000),
      timestamp: new Date().toLocaleString(),
      createdAt: serverTimestamp()
    });
    
    // Also log analytics event
    trackAnalyticsEvent('feedback_submitted', {
      rating: feedbackData.rating,
      category: feedbackData.category || 'General'
    });

    return docRef.id;
  } catch (err) {
    console.warn('Firestore feedback submission error (fallback to local state):', err);
    return null;
  }
}

// Log Anonymous Search Query to Firestore
export async function saveSearchLogToFirestore(
  queryText: string,
  resultsCount: number,
  categoryFilter?: string
) {
  if (!db || !queryText.trim()) return;
  try {
    await ensureSilentAuth();
    const logsRef = collection(db, 'search_logs');
    await addDoc(logsRef, {
      query: queryText.trim(),
      resultsCount: Number(resultsCount) || 0,
      categoryFilter: categoryFilter || 'All',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      createdAt: serverTimestamp()
    });

    // Also log analytics event
    trackAnalyticsEvent('scheme_search', {
      query: queryText.trim(),
      resultsCount,
      categoryFilter
    });
  } catch (err) {
    // Non-blocking catch
  }
}

// Real-Time Listener for Admin Panel: Feedback
export function subscribeToFeedback(
  callback: (feedbacks: any[]) => void
): () => void {
  if (!db) {
    callback([]);
    return () => {};
  }

  ensureSilentAuth();
  const fbQuery = query(collection(db, 'feedback'), orderBy('createdAt', 'desc'), limit(100));
  
  const unsubscribe = onSnapshot(
    fbQuery,
    (snapshot) => {
      const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(items);
    },
    (error) => {
      console.warn('Feedback real-time stream warning:', error);
    }
  );

  return unsubscribe;
}

// Real-Time Listener for Admin Panel: Search Logs
export function subscribeToSearchLogs(
  callback: (logs: any[]) => void
): () => void {
  if (!db) {
    callback([]);
    return () => {};
  }

  ensureSilentAuth();
  const logsQuery = query(collection(db, 'search_logs'), orderBy('createdAt', 'desc'), limit(50));
  
  const unsubscribe = onSnapshot(
    logsQuery,
    (snapshot) => {
      const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(items);
    },
    (error) => {
      console.warn('Search logs real-time stream warning:', error);
    }
  );

  return unsubscribe;
}

// Real-Time Listener for Admin Panel: Analytics Events
export function subscribeToAnalyticsEvents(
  callback: (events: any[]) => void
): () => void {
  if (!db) {
    callback([]);
    return () => {};
  }

  ensureSilentAuth();
  const eventsQuery = query(collection(db, 'analytics_events'), orderBy('createdAt', 'desc'), limit(100));

  const unsubscribe = onSnapshot(
    eventsQuery,
    (snapshot) => {
      const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      callback(items);
    },
    (error) => {
      console.warn('Analytics events real-time stream warning:', error);
    }
  );

  return unsubscribe;
}

// Admin deletion helper for feedback
export async function deleteFeedbackFromFirestore(docId: string): Promise<boolean> {
  if (!db) return false;
  try {
    await ensureSilentAuth();
    await deleteDoc(doc(db, 'feedback', docId));
    return true;
  } catch (err) {
    console.warn('Delete feedback error:', err);
    return false;
  }
}

// Admin deletion helper for search log
export async function deleteSearchLogFromFirestore(docId: string): Promise<boolean> {
  if (!db) return false;
  try {
    await ensureSilentAuth();
    await deleteDoc(doc(db, 'search_logs', docId));
    return true;
  } catch (err) {
    console.warn('Delete search log error:', err);
    return false;
  }
}

export { db, auth, analytics };
