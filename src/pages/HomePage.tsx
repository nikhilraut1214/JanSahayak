import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CategoryCard } from '../components/CategoryCard';
import { SchemeCard } from '../components/SchemeCard';
import { VoiceSearchModal } from '../components/VoiceSearchModal';
import { SearchInput } from '../components/SearchInput';
import { SchemeCategory } from '../types';
import { 
  Search, 
  Mic, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  BarChart2, 
  ShieldCheck, 
  Layers, 
  Users, 
  Building2, 
  Award,
  History,
  Clock,
  Trash2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    schemes, 
    setActiveTab, 
    language, 
    t, 
    logSearchQuery, 
    recentSearches, 
    clearRecentSearches 
  } = useApp();
  const [searchInput, setSearchInput] = useState('');
  const [showVoiceModal, setShowVoiceModal] = useState(false);

  // Group schemes by category to display counts
  const categoryCounts: Record<SchemeCategory, number> = {
    Agriculture: schemes.filter((s) => s.category === 'Agriculture').length,
    Students: schemes.filter((s) => s.category === 'Students').length,
    Health: schemes.filter((s) => s.category === 'Health').length,
    Women: schemes.filter((s) => s.category === 'Women').length,
    Housing: schemes.filter((s) => s.category === 'Housing').length,
    Business: schemes.filter((s) => s.category === 'Business').length,
    Employment: schemes.filter((s) => s.category === 'Employment').length,
    'Senior Citizens': schemes.filter((s) => s.category === 'Senior Citizens').length,
  };

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

  // Trending Flagship Schemes
  const trendingIds = ['pm-kisan', 'ab-pmjay', 'sukanya-samriddhi', 'pmay-gramin', 'pm-vishwakarma', 'pm-internship-scheme'];
  const trendingSchemes = schemes.filter((s) => trendingIds.includes(s.id));

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      logSearchQuery(searchInput, schemes.length);
      setActiveTab('schemes');
    }
  };

  const handleQuickKeywordClick = (keyword: string) => {
    setSearchInput(keyword);
    logSearchQuery(keyword, schemes.length);
    setActiveTab('schemes');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/50">
        
        {/* Subtle decorative background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold tracking-wide shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>
              {language === 'hi' 
                ? 'भारतीय नागरिकों के लिए एआई-सहायता प्राप्त सरकारी योजना पोर्टल' 
                : language === 'mr' 
                ? 'भारतीय नागरिकांसाठी एआय-सहाय्यित सरकारी योजना पोर्टल' 
                : 'AI-Assisted Government Scheme Portal for Indian Citizens'}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight leading-tight">
              {language === 'hi' ? (
                <>हर उस सरकारी योजना को खोजें जिसके आप <span className="text-amber-400 underline decoration-emerald-500 decoration-wavy">योग्य हैं</span></>
              ) : language === 'mr' ? (
                <>तुम्ही ज्या योजनेसाठी <span className="text-amber-400 underline decoration-emerald-500 decoration-wavy">पात्र आहात</span> त्या सर्व योजना शोधा</>
              ) : (
                <>Discover Every Scheme You Are <span className="text-amber-400 underline decoration-emerald-500 decoration-wavy">Eligible For</span></>
              )}
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed">
              {language === 'hi'
                ? 'अपनी आय, व्यवसाय, राज्य और पारिवारिक पृष्ठभूमि के अनुसार वित्तीय सहायता, सब्सिडी, पेंशन, आवास अनुदान और छात्रवृत्ति खोजें।'
                : language === 'mr'
                ? 'तुमचे उत्पन्न, व्यवसाय आणि कौटुंबिक पार्श्वभूमीनुसार आर्थिक मदत, सबसिडी, पेन्शन, गृहनिर्माण अनुदान आणि शिष्यवृत्ती शोधा.'
                : 'Find financial support, subsidies, pensions, housing grants, and scholarships tailored to your income, occupation, and family background.'}
            </p>
          </div>

          {/* Main Search Bar */}
          <div className="max-w-3xl mx-auto">
            <SearchInput
              value={searchInput}
              onChange={setSearchInput}
              onSearch={(query) => {
                setActiveTab('schemes');
              }}
              onOpenVoiceModal={() => setShowVoiceModal(true)}
              placeholder={t('searchPlaceholder')}
              size="large"
            />

            {/* Quick Trending Keywords */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-300">
              <span className="text-amber-400 font-bold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                {language === 'hi' ? 'लोकप्रिय खोज:' : language === 'mr' ? 'लोकप्रिय शोध:' : 'Popular Searches:'}
              </span>
              {(language === 'hi'
                ? ['किसान', 'आयुष्मान कार्ड', 'राशन', 'सुकन्या', 'आवास योजना', 'पीएम-मुद्रा', 'छात्रवृत्ति', 'पेंशन']
                : language === 'mr'
                ? ['शेतकरी', 'आयुष्मान कार्ड', 'रेशन', 'सुकन्या', 'घरकुल योजना', 'पीएम-मुद्रा', 'शिष्यवृत्ती', 'पेन्शन']
                : ['Kisan', 'Ayushman Card', 'Ration', 'Sukanya', 'Housing Grant', 'PM-Mudra', 'Scholarship', 'Pension']
              ).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleQuickKeywordClick(tag)}
                  className="bg-slate-800/80 hover:bg-emerald-900/60 border border-slate-700/60 px-2.5 py-1 rounded-lg transition-colors text-slate-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Stat Counters */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">{schemes.length}</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">{t('statSchemesCount')}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400">8</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">{t('statCategoriesCount')}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-sky-400">30+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">{t('statMinistriesCount')}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 text-center">
              <div className="text-2xl sm:text-3xl font-black font-mono text-rose-400">140+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">{t('statCitizensBenefited')}</div>
            </div>
          </div>

        </div>
      </section>

      {/* RECENT SEARCHES SECTION */}
      {recentSearches && recentSearches.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                <History className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider font-serif">
                    {t('recentSearchesTitle')}
                  </h2>
                  <span className="text-[10px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {recentSearches.slice(0, 5).length} items
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-0.5">
                  {t('recentSearchesSubtitle')}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {recentSearches.slice(0, 5).map((term, idx) => (
                <button
                  key={`recent-${term}-${idx}`}
                  onClick={() => handleQuickKeywordClick(term)}
                  className="group flex items-center gap-1.5 bg-slate-100 hover:bg-emerald-600 dark:bg-slate-800/90 dark:hover:bg-emerald-600 text-slate-900 hover:text-white dark:text-slate-200 dark:hover:text-white border border-slate-300/80 dark:border-slate-700/80 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs hover:shadow-md active:scale-95"
                >
                  <Clock className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  <span>{term}</span>
                </button>
              ))}

              <button
                onClick={clearRecentSearches}
                title={t('clearRecentSearches')}
                className="p-2 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-colors ml-1"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY EXPLORER GRID */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              {language === 'hi' ? 'कल्याणकारी क्षेत्र' : language === 'mr' ? 'कल्याणकारी क्षेत्र' : 'Color-Coded Sector Index'}
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              {language === 'hi' ? 'श्रेणी अनुसार सरकारी योजनाएं खोजें' : language === 'mr' ? 'वर्गानुसार सरकारी योजना शोधा' : 'Browse Schemes by Welfare Category'}
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('schemes')}
            className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 min-h-[40px]"
          >
            <span>{language === 'hi' ? 'सभी योजनाएं देखें' : language === 'mr' ? 'सर्व योजना पहा' : 'View All Schemes'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {categories.map((cat) => (
            <CategoryCard
              key={cat}
              category={cat}
              count={categoryCounts[cat] || 0}
              onClick={() => {
                logSearchQuery(cat, categoryCounts[cat] || 0, cat);
                setActiveTab('schemes');
              }}
            />
          ))}
        </div>
      </section>

      {/* WIZARD CALLOUT PROMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-600/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3 py-1 rounded-full text-xs font-extrabold uppercase">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'hi' ? 'स्मार्ट पात्रता इंजन' : language === 'mr' ? 'स्मार्ट पात्रता इंजिन' : 'Smart Eligibility Engine'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-serif leading-tight">
              {language === 'hi' ? 'समझ नहीं आ रहा कि कौन सी योजनाएं आपके लिए हैं?' : language === 'mr' ? 'कोणत्या योजना तुमच्यासाठी आहेत हे समजले नाही?' : 'Not Sure Which Schemes Apply to You?'}
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {language === 'hi'
                ? 'हमारा 2-मिनट का 6-चरणीय पात्रता विजार्ड का उपयोग करें। हमारा स्वचालित नियम इंजन आपकी आयु, आय, राज्य और व्यवसाय की जांच करके आपको सही योजनाएं दिखाता है।'
                : language === 'mr'
                ? 'आमचा २ मिनिटांचा ६-टप्प्यांचा पात्रता विजार्ड वापरा. आमचे स्वयंचलित नियम इंजिन तुमचे वय, उत्पन्न, राज्य आणि व्यवसायाची तपासणी करून तुम्हाला योग्य योजना दाखवते.'
                : 'Take our 2-minute 6-Step Eligibility Wizard. Our automated rule engine checks your age, income, state, and occupation against all 100+ schemes and ranks your matches instantly.'}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('wizard')}
            className="px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-xl transition-all shrink-0 flex items-center gap-2 hover:scale-105"
          >
            <span>{language === 'hi' ? 'पात्रता विजार्ड शुरू करें' : language === 'mr' ? 'पात्रता विजार्ड सुरू करा' : 'Start Eligibility Wizard'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* TRENDING SCHEMES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              {language === 'hi' ? 'प्रमुख जन कल्याण' : language === 'mr' ? 'प्रमुख जन कल्याण' : 'High Impact Welfare'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              {language === 'hi' ? 'लोकप्रिय केंद्र सरकार की योजनाएं' : language === 'mr' ? 'लोकप्रिय केंद्र सरकार योजना' : 'Trending Central Government Schemes'}
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('schemes')}
            className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>
              {language === 'hi'
                ? `संपूर्ण पुस्तकालय देखें (${schemes.length})`
                : language === 'mr'
                ? `सर्व योजना पहा (${schemes.length})`
                : `Explore Entire Library (${schemes.length})`}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </section>

      {/* VOICE SEARCH MODAL */}
      {showVoiceModal && (
        <VoiceSearchModal
          onQueryRecognized={(query) => {
            setSearchInput(query);
            logSearchQuery(query, schemes.length);
            setActiveTab('schemes');
          }}
          onClose={() => setShowVoiceModal(false)}
        />
      )}

    </div>
  );
};
