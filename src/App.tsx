import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ToastContainer } from './components/ToastContainer';
import { AnonymousFeedbackWidget } from './components/AnonymousFeedbackWidget';
import { HomePage } from './pages/HomePage';
import { SchemesPage } from './pages/SchemesPage';
import { EligibilityWizardPage } from './pages/EligibilityWizardPage';
import { ComparePage } from './pages/ComparePage';
import { SavedSchemesPage } from './pages/SavedSchemesPage';
import { DocumentCheckerPage } from './pages/DocumentCheckerPage';
import { FaqAndContactPage } from './pages/FaqAndContactPage';
import { AdminPanelPage } from './pages/AdminPanelPage';

const MainContent: React.FC = () => {
  const { activeTab, themeMode, fontSize } = useApp();

  const fontSizeClass =
    fontSize === 'sm' ? 'text-sm' : fontSize === 'lg' ? 'text-lg' : 'text-base';

  const themeClass =
    themeMode === 'high-contrast'
      ? 'bg-black text-yellow-300 font-mono'
      : themeMode === 'dark'
      ? 'bg-slate-950 text-slate-100'
      : 'bg-slate-50 text-slate-900';

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${fontSizeClass} ${themeClass}`}>
      <Navbar />

      <main className="flex-1 pb-20 xl:pb-0">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'schemes' && <SchemesPage />}
        {activeTab === 'wizard' && <EligibilityWizardPage />}
        {activeTab === 'compare' && <ComparePage />}
        {activeTab === 'saved' && <SavedSchemesPage />}
        {activeTab === 'documents' && <DocumentCheckerPage />}
        {activeTab === 'faqs' && <FaqAndContactPage />}
        {activeTab === 'admin' && <AdminPanelPage />}
      </main>

      <Footer />
      <MobileBottomBar />
      <AnonymousFeedbackWidget />
      <ToastContainer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
