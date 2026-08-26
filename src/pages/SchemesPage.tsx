import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { SchemeCard } from '../components/SchemeCard';
import { SchemeDetailModal } from '../components/SchemeDetailModal';
import { VoiceSearchModal } from '../components/VoiceSearchModal';
import { SearchInput } from '../components/SearchInput';
import { SchemeCategory, Scheme } from '../types';
import { CATEGORY_THEMES } from '../utils/categoryColors';
import { CATEGORY_NAMES } from '../utils/schemeLocalizer';
import { 
  Search, 
  Filter, 
  X, 
  Mic, 
  RotateCcw, 
  Layers, 
  SlidersHorizontal, 
  Grid, 
  List, 
  ChevronDown,
  Sparkles
} from 'lucide-react';

export const SchemesPage: React.FC = () => {
  const { 
    schemes, 
    selectedSchemeForDetail, 
    setSelectedSchemeForDetail, 
    language,
    t, 
    logSearchQuery,
    trackAnalyticsEvent
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [selectedOccupation, setSelectedOccupation] = useState<string>('All');
  const [selectedMinistry, setSelectedMinistry] = useState<string>('All');
  const [maxIncomeLakhs, setMaxIncomeLakhs] = useState<number>(10);
  const [userAge, setUserAge] = useState<number>(0); // 0 = any age
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const categories: SchemeCategory[] = [
    'Agriculture',
    'Students',
    'Health',
    'Women',
    'Housing',
    'Business',
    'Employment',
    'Senior Citizens',
  ];

  const ministries = useMemo(() => {
    const list = Array.from(new Set(schemes.map((s) => s.ministry))).filter(Boolean);
    return ['All', ...list.sort()];
  }, [schemes]);

  // Filtering Logic
  const filteredSchemes = useMemo(() => {
    return schemes.filter((scheme) => {
      // 1. Text Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameMatch = scheme.name.toLowerCase().includes(q);
        const descMatch = scheme.short_description.toLowerCase().includes(q) || scheme.full_description.toLowerCase().includes(q);
        const minMatch = scheme.ministry.toLowerCase().includes(q);
        const kwMatch = scheme.keywords.some((k) => k.toLowerCase().includes(q));
        if (!nameMatch && !descMatch && !minMatch && !kwMatch) return false;
      }

      // 2. Category Filter
      if (selectedCategory !== 'All' && scheme.category !== selectedCategory) {
        return false;
      }

      // 3. Ministry Filter
      if (selectedMinistry !== 'All' && scheme.ministry !== selectedMinistry) {
        return false;
      }

      // 4. Gender Filter
      if (selectedGender !== 'All') {
        const sg = scheme.eligibility.gender ? scheme.eligibility.gender.toLowerCase() : '';
        if (selectedGender === 'Female' && sg.includes('male') && !sg.includes('female') && !sg.includes('all')) return false;
        if (selectedGender === 'Male' && sg.includes('female') && !sg.includes('male') && !sg.includes('all')) return false;
      }

      // 5. Occupation Filter
      if (selectedOccupation !== 'All') {
        const occ = scheme.eligibility.occupation ? scheme.eligibility.occupation.toLowerCase() : '';
        const desc = (scheme.short_description + ' ' + scheme.full_description).toLowerCase();
        const sel = selectedOccupation.toLowerCase();
        if (!occ.includes(sel) && !desc.includes(sel) && scheme.category.toLowerCase() !== sel) {
          return false;
        }
      }

      // 6. Max Income Filter
      if (maxIncomeLakhs < 10) {
        const inc = scheme.eligibility.income_limit ? scheme.eligibility.income_limit.toLowerCase() : '';
        if (inc.includes('2.5 lakh') && maxIncomeLakhs < 2.5) return false;
        if (inc.includes('1.5 lakh') && maxIncomeLakhs < 1.5) return false;
        if (inc.includes('3.5 lakh') && maxIncomeLakhs < 3.5) return false;
        if (inc.includes('4.5 lakh') && maxIncomeLakhs < 4.5) return false;
        if (inc.includes('8 lakh') && maxIncomeLakhs < 8.0) return false;
      }

      // 7. Age Filter
      if (userAge > 0) {
        const ageReq = scheme.eligibility.age_limit ? scheme.eligibility.age_limit.toLowerCase() : '';
        if (ageReq.includes('60') && (ageReq.includes('above') || ageReq.includes('+')) && userAge < 60) return false;
        if (ageReq.includes('18 to 70') && (userAge < 18 || userAge > 70)) return false;
        if (ageReq.includes('21 to 24') && (userAge < 21 || userAge > 24)) return false;
        if (ageReq.includes('15 to 35') && (userAge < 15 || userAge > 35)) return false;
      }

      return true;
    });
  }, [
    schemes,
    searchQuery,
    selectedCategory,
    selectedMinistry,
    selectedGender,
    selectedOccupation,
    maxIncomeLakhs,
    userAge,
  ]);

  // Suggested for You Logic:
  // Dynamically selects top 3 schemes based on currently selected category and filters
  const suggestedSchemes = useMemo(() => {
    if (selectedCategory !== 'All') {
      // Find schemes matching the selected category
      let matches = schemes.filter((s) => s.category === selectedCategory);

      // If gender filter is active, refine matches
      if (selectedGender !== 'All') {
        const genderLower = selectedGender.toLowerCase();
        const genderMatches = matches.filter((s) => {
          const g = (s.eligibility.gender || '').toLowerCase();
          return g.includes(genderLower) || g.includes('all');
        });
        if (genderMatches.length > 0) matches = genderMatches;
      }

      // If we have at least 3, return top 3
      if (matches.length >= 3) {
        return matches.slice(0, 3);
      }

      // Otherwise, add related schemes from adjacent categories
      const relatedCategoryMap: Record<string, SchemeCategory[]> = {
        Agriculture: ['Business', 'Employment'],
        Students: ['Employment', 'Health'],
        Health: ['Senior Citizens', 'Women'],
        Women: ['Health', 'Business', 'Housing'],
        Housing: ['Health', 'Senior Citizens'],
        Business: ['Employment', 'Agriculture'],
        Employment: ['Students', 'Business'],
        'Senior Citizens': ['Health', 'Housing'],
      };

      const fallbackCategories = relatedCategoryMap[selectedCategory] || ['Agriculture', 'Health', 'Students'];
      const extra = schemes.filter(
        (s) => fallbackCategories.includes(s.category) && !matches.some((m) => m.id === s.id)
      );

      return [...matches, ...extra].slice(0, 3);
    }

    // Default 'All' category: Pick top popular flagship schemes across major categories
    const featuredIds = ['pm-kisan', 'ab-pmjay', 'pm-ujjwala', 'pm-mudra', 'pm-internship', 'sukanya-samriddhi'];
    const featured = schemes.filter((s) => featuredIds.includes(s.id));
    if (featured.length >= 3) {
      return featured.slice(0, 3);
    }
    return schemes.slice(0, 3);
  }, [schemes, selectedCategory, selectedGender]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedState('All');
    setSelectedGender('All');
    setSelectedOccupation('All');
    setSelectedMinistry('All');
    setMaxIncomeLakhs(10);
    setUserAge(0);
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== 'All' ||
    selectedGender !== 'All' ||
    selectedOccupation !== 'All' ||
    selectedMinistry !== 'All' ||
    maxIncomeLakhs < 10 ||
    userAge > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white font-serif">
            {t('allSchemes')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-semibold">
            Explore 100+ authentic central government schemes with real-time filters and criteria search.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 px-3 py-1.5 rounded-full border border-emerald-300 dark:border-emerald-700">
            Showing {filteredSchemes.length} of {schemes.length} Schemes
          </span>
        </div>
      </div>

      {/* Top Search & Filter Toolbar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Main Search Input with Web Speech API */}
          <div className="flex-1 w-full">
            <SearchInput
              value={searchQuery}
              onChange={(val) => {
                setSearchQuery(val);
                if (val.length > 2) {
                  logSearchQuery(val, filteredSchemes.length, selectedCategory);
                }
              }}
              onOpenVoiceModal={() => setShowVoiceModal(true)}
              placeholder={t('searchPlaceholder')}
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setShowFilterDrawer(!showFilterDrawer)}
              className={`flex-1 sm:flex-none px-4 py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                hasActiveFilters
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-emerald-700 text-white border-emerald-600 hover:bg-emerald-800'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {hasActiveFilters && '• Active'}</span>
            </button>
          </div>
        </div>

        {/* Quick Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => {
              setSelectedCategory('All');
              trackAnalyticsEvent('category_selected', { category: 'All' });
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors border ${
              selectedCategory === 'All'
                ? 'bg-slate-900 text-white border-slate-800 dark:bg-white dark:text-slate-900'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            {t('allCategories')} ({schemes.length})
          </button>

          {categories.map((cat) => {
            const isSel = selectedCategory === cat;
            const theme = CATEGORY_THEMES[cat];
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  trackAnalyticsEvent('category_selected', { category: cat });
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors border ${
                  isSel
                    ? `${theme.iconBg} border-transparent shadow-sm`
                    : `${theme.bgLight} ${theme.bgDark} ${theme.border} ${theme.text}`
                }`}
              >
                {CATEGORY_NAMES[language]?.[cat] || cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* FILTER DRAWER / PANEL */}
      {showFilterDrawer && (
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-slide-down">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-base">
              <Filter className="w-5 h-5 text-emerald-600" />
              <span>Filter Schemes by Profile Parameters</span>
            </div>

            <button
              onClick={resetFilters}
              className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('clearFilters')}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gender Filter */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                {t('filterByGender')}
              </label>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white"
              >
                <option value="All">{t('allGenders')}</option>
                <option value="Female">Female / Women</option>
                <option value="Male">Male / Open</option>
              </select>
            </div>

            {/* Occupation Filter */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                {t('filterByOccupation')}
              </label>
              <select
                value={selectedOccupation}
                onChange={(e) => setSelectedOccupation(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white"
              >
                <option value="All">{t('allOccupations')}</option>
                <option value="Farmer">Farmer / Agriculture</option>
                <option value="Student">Student / Learner</option>
                <option value="Artisan">Artisan / Craftsperson</option>
                <option value="Street Vendor">Street Vendor</option>
                <option value="Unorganised">Unorganised Worker / Gig</option>
                <option value="Business">Small Business / MSME</option>
              </select>
            </div>

            {/* Ministry Filter */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                {t('filterByMinistry')}
              </label>
              <select
                value={selectedMinistry}
                onChange={(e) => setSelectedMinistry(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white truncate"
              >
                {ministries.map((min) => (
                  <option key={min} value={min}>
                    {min === 'All' ? t('allMinistries') : min}
                  </option>
                ))}
              </select>
            </div>

            {/* Income Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                <span>Max Income</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                  {maxIncomeLakhs < 10 ? `≤ ₹${maxIncomeLakhs} Lakhs` : 'Any Income'}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                step={0.5}
                value={maxIncomeLakhs}
                onChange={(e) => setMaxIncomeLakhs(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {/* SUGGESTED FOR YOU SECTION */}
      {suggestedSchemes.length > 0 && (
        <div className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 dark:from-amber-950/30 dark:via-emerald-950/30 dark:to-teal-950/30 border border-amber-200/80 dark:border-amber-800/40 rounded-3xl p-6 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/50 dark:border-amber-800/30 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-black text-slate-900 dark:text-white font-serif">
                    {t('suggestedForYou')}
                  </h2>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200 px-2.5 py-0.5 rounded-full border border-amber-300 dark:border-amber-700">
                    {selectedCategory === 'All'
                      ? t('allCategories')
                      : `${CATEGORY_NAMES[language]?.[selectedCategory as SchemeCategory] || selectedCategory}`}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                  {t('suggestedSubtitle')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {suggestedSchemes.map((scheme) => (
              <SchemeCard key={`suggested-${scheme.id}`} scheme={scheme} searchQuery="" />
            ))}
          </div>
        </div>
      )}

      {/* SCHEME RESULTS GRID */}
      {filteredSchemes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} searchQuery={searchQuery} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center mx-auto text-2xl font-bold">
            🔍
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            No Schemes Found Matching Criteria
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Try resetting your active filters or searching for alternative keywords like "farmer", "loan", "health", or "pension".
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* SCHEME DETAIL MODAL */}
      {selectedSchemeForDetail && (
        <SchemeDetailModal
          scheme={selectedSchemeForDetail}
          onClose={() => setSelectedSchemeForDetail(null)}
        />
      )}

      {/* VOICE SEARCH MODAL */}
      {showVoiceModal && (
        <VoiceSearchModal
          onQueryRecognized={(query) => {
            setSearchQuery(query);
            logSearchQuery(query, filteredSchemes.length);
          }}
          onClose={() => setShowVoiceModal(false)}
        />
      )}

    </div>
  );
};
