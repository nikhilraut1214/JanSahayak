import React from 'react';
import { Scheme } from '../types';
import { CATEGORY_THEMES } from '../utils/categoryColors';
import { CATEGORY_NAMES } from '../utils/schemeLocalizer';
import { useApp } from '../context/AppContext';
import { generateSchemePDF } from '../utils/pdfGenerator';
import { Bookmark, BookmarkCheck, ArrowRight, BarChart2, ShieldCheck, AlertTriangle, Download } from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  searchQuery?: string;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({ scheme, searchQuery }) => {
  const { 
    isSchemeSaved, 
    toggleSaveScheme, 
    compareSchemeIds, 
    toggleCompareScheme, 
    setSelectedSchemeForDetail,
    setActiveTab,
    language,
    t 
  } = useApp();

  const theme = CATEGORY_THEMES[scheme.category] || CATEGORY_THEMES['Agriculture'];
  const saved = isSchemeSaved(scheme.id);
  const isCompared = compareSchemeIds.includes(scheme.id);
  const localizedCategory = CATEGORY_NAMES[language]?.[scheme.category] || scheme.category;

  // Simple keyword highlighter
  const highlightText = (text: string) => {
    if (!searchQuery || !searchQuery.trim()) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} className="bg-amber-300 dark:bg-amber-600 text-slate-950 font-bold px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`group rounded-2xl border p-5 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md bg-white dark:bg-slate-900 ${theme.border} relative overflow-hidden`}>
      {/* Top Bar: Category Badge & Bookmark Button */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${theme.badgeBg} ${theme.badgeText}`}>
            {localizedCategory}
          </span>

          <div className="flex items-center gap-1">
            {/* Compare Button */}
            <button
              onClick={() => toggleCompareScheme(scheme.id)}
              className={`p-2 rounded-xl transition-colors border text-xs font-semibold flex items-center gap-1 ${
                isCompared
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'
              }`}
              title="Add to comparison table"
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isCompared ? 'Compared' : 'Compare'}</span>
            </button>

            {/* Bookmark Button */}
            <button
              onClick={() => toggleSaveScheme(scheme.id)}
              className={`p-2 rounded-xl transition-colors border ${
                saved
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700'
              }`}
              title={saved ? 'Remove bookmark' : 'Bookmark scheme'}
            >
              {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Scheme Name */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
          {highlightText(scheme.name)}
        </h3>

        {/* Ministry Name */}
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate">{scheme.ministry}</span>
        </p>

        {/* Short Description */}
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-3 line-clamp-2 leading-relaxed">
          {highlightText(scheme.short_description)}
        </p>

        {/* Key Eligibility Summary Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-semibold">
          {scheme.eligibility.gender && (
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700">
              👤 {scheme.eligibility.gender}
            </span>
          )}
          {scheme.eligibility.age_limit && (
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2.5 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-700 truncate max-w-[180px]">
              🎂 {scheme.eligibility.age_limit}
            </span>
          )}
        </div>

        {/* Volatile Rate Note Warning Badge */}
        {scheme.notes && (
          <div className="mt-3 text-[11px] text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-2 rounded-lg border border-amber-300 dark:border-amber-800/50 flex items-center gap-1.5 font-medium">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">{t('verifyOnSite')}</span>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
        <button
          onClick={() => {
            setSelectedSchemeForDetail(scheme);
          }}
          className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1 underline underline-offset-2"
        >
          <span>{t('viewDetails')}</span>
        </button>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              generateSchemePDF(scheme);
            }}
            className="p-2 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors flex items-center gap-1 text-xs font-bold"
            title={t('downloadSummary')}
          >
            <Download className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline">PDF</span>
          </button>

          <button
            onClick={() => {
              setSelectedSchemeForDetail(scheme);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${theme.accent}`}
          >
            <span>{t('checkEligibility')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
