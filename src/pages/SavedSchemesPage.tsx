import React from 'react';
import { useApp } from '../context/AppContext';
import { SchemeCard } from '../components/SchemeCard';
import { SchemeDetailModal } from '../components/SchemeDetailModal';
import { Bookmark, Printer, Trash2, ShieldCheck } from 'lucide-react';

export const SavedSchemesPage: React.FC = () => {
  const { 
    schemes, 
    savedSchemeIds, 
    clearSavedSchemes, 
    selectedSchemeForDetail, 
    setSelectedSchemeForDetail, 
    t 
  } = useApp();

  const savedSchemes = schemes.filter((s) => savedSchemeIds.includes(s.id));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white font-serif flex items-center gap-2">
            <Bookmark className="w-8 h-8 text-emerald-600" />
            <span>{t('savedSchemes')}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
            Your bookmarked schemes saved in browser local storage.
          </p>
        </div>

        {savedSchemes.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Checklist</span>
            </button>

            <button
              onClick={clearSavedSchemes}
              className="px-4 py-2 rounded-xl bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 text-xs font-bold hover:bg-rose-200 flex items-center gap-1.5"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Bookmarks</span>
            </button>
          </div>
        )}
      </div>

      {/* Bookmarked Grid */}
      {savedSchemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
          <Bookmark className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            No Bookmarked Schemes Yet
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Click the bookmark icon on any scheme card across the portal to save schemes here for offline reference.
          </p>
        </div>
      )}

      {/* SCHEME DETAIL MODAL */}
      {selectedSchemeForDetail && (
        <SchemeDetailModal
          scheme={selectedSchemeForDetail}
          onClose={() => setSelectedSchemeForDetail(null)}
        />
      )}

    </div>
  );
};
