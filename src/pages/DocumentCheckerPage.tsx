import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { SchemeCard } from '../components/SchemeCard';
import { SchemeDetailModal } from '../components/SchemeDetailModal';
import { FileCheck, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const DocumentCheckerPage: React.FC = () => {
  const { 
    schemes, 
    userDocuments, 
    toggleUserDocument, 
    selectedSchemeForDetail, 
    setSelectedSchemeForDetail, 
    t 
  } = useApp();

  // Extract all unique required documents across all schemes
  const allMasterDocuments = useMemo(() => {
    const set = new Set<string>();
    schemes.forEach((s) => {
      s.required_documents.forEach((d) => set.add(d));
    });
    return Array.from(set).sort();
  }, [schemes]);

  // Compute readiness score for each scheme
  const schemesWithReadiness = useMemo(() => {
    return schemes.map((scheme) => {
      const total = scheme.required_documents.length;
      const owned = scheme.required_documents.filter((d) => userDocuments[d] === true).length;
      const pct = total > 0 ? Math.round((owned / total) * 100) : 100;
      return { scheme, total, owned, pct };
    }).sort((a, b) => b.pct - a.pct);
  }, [schemes, userDocuments]);

  const readySchemes = useMemo(() => schemesWithReadiness.filter((s) => s.pct === 100), [schemesWithReadiness]);
  const partialSchemes = useMemo(() => schemesWithReadiness.filter((s) => s.pct > 0 && s.pct < 100), [schemesWithReadiness]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white font-serif flex items-center gap-2">
          <FileCheck className="w-8 h-8 text-emerald-600" />
          <span>{t('documentChecker')}</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
          Check off the official certificates and IDs you possess to reveal which government schemes you are 100% document-ready to apply for.
        </p>
      </div>

      {/* Master Checklist Grid */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>Select Your Active Official Certificates & Identifiers</span>
          </div>
          <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-3 py-1 rounded-full">
            {Object.values(userDocuments).filter(Boolean).length} Documents Marked Ready
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {allMasterDocuments.map((doc) => {
            const isChecked = userDocuments[doc] === true;
            return (
              <label
                key={doc}
                className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                  isChecked
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-400 dark:border-emerald-700 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleUserDocument(doc)}
                  className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
                />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {doc}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Schemes Ready to Apply (100% Ready) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            <span>100% Document-Ready Schemes ({readySchemes.length})</span>
          </h2>
        </div>

        {readySchemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readySchemes.map(({ scheme }) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
            Check off documents above (e.g., Aadhaar Card, Income Certificate, Bank Passbook) to highlight 100% ready schemes.
          </div>
        )}
      </div>

      {/* Partial Schemes */}
      <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Partially Ready Schemes ({partialSchemes.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partialSchemes.map(({ scheme, owned, total, pct }) => (
            <div key={scheme.id} className="space-y-2">
              <div className="bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 text-xs font-bold px-3 py-1.5 rounded-t-xl flex justify-between">
                <span>Partially Ready ({owned}/{total} Docs)</span>
                <span className="font-mono">{pct}%</span>
              </div>
              <SchemeCard scheme={scheme} />
            </div>
          ))}
        </div>
      </div>

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
