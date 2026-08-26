import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { evaluateSchemeEligibility } from '../utils/eligibilityEngine';
import { SchemeCard } from '../components/SchemeCard';
import { SchemeDetailModal } from '../components/SchemeDetailModal';
import { 
  Sparkles, 
  User, 
  Wallet, 
  Briefcase, 
  Users, 
  HeartHandshake, 
  CheckCircle2, 
  Check,
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Printer, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const EligibilityWizardPage: React.FC = () => {
  const { 
    schemes, 
    userProfile, 
    setUserProfile, 
    selectedSchemeForDetail, 
    setSelectedSchemeForDetail, 
    trackAnalyticsEvent,
    t 
  } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [resultsFilter, setResultsFilter] = useState<'all' | 'eligible' | 'possibly_eligible' | 'not_eligible'>('all');

  const indianStates = [
    'Maharashtra', 'Uttar Pradesh', 'Bihar', 'Rajasthan', 'Madhya Pradesh', 
    'West Bengal', 'Tamil Nadu', 'Karnataka', 'Gujarat', 'Andhra Pradesh', 
    'Odisha', 'Telangana', 'Kerala', 'Jharkhand', 'Assam', 'Punjab', 'Haryana', 
    'Chhattisgarh', 'Uttarakhand', 'Himachal Pradesh', 'Jammu & Kashmir', 'Delhi'
  ];

  // Evaluate every scheme against user profile
  const evaluationResults = useMemo(() => {
    return schemes.map((scheme) => evaluateSchemeEligibility(scheme, userProfile));
  }, [schemes, userProfile]);

  const eligibleList = useMemo(() => evaluationResults.filter((r) => r.status === 'eligible'), [evaluationResults]);
  const possiblyList = useMemo(() => evaluationResults.filter((r) => r.status === 'possibly_eligible'), [evaluationResults]);
  const ineligibleList = useMemo(() => evaluationResults.filter((r) => r.status === 'not_eligible'), [evaluationResults]);

  const displayedResults = useMemo(() => {
    if (resultsFilter === 'eligible') return eligibleList;
    if (resultsFilter === 'possibly_eligible') return possiblyList;
    if (resultsFilter === 'not_eligible') return ineligibleList;
    return evaluationResults;
  }, [evaluationResults, resultsFilter, eligibleList, possiblyList, ineligibleList]);

  const handlePrintResults = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Wizard Banner Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-700">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Rule-Based Eligibility Match Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif">
          {t('wizardTitle')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto font-medium">
          {t('wizardSubtitle')}
        </p>
      </div>

      {/* Visual Progress Stepper Tracker */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-5 print:hidden">
        
        {/* Progress Header & Stats Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-1">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-black font-mono">
                {currentStep === 6 ? 'RESULTS' : `STEP ${currentStep} OF 5`}
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                • {
                  [
                    { step: 1, label: t('step1') },
                    { step: 2, label: t('step2') },
                    { step: 3, label: t('step3') },
                    { step: 4, label: t('step4') },
                    { step: 5, label: t('step5') },
                    { step: 6, label: t('step6') },
                  ].find(s => s.step === currentStep)?.label
                }
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {currentStep === 6
                ? 'Eligibility Assessment Complete'
                : `Questionnaire Progress (${Math.round(((currentStep - 1) / 5) * 100)}% Completed)`}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs font-extrabold text-slate-900 dark:text-white font-mono">
                {Math.min(5, currentStep - 1)} / 5 {t('stepCompletedText')}
              </div>
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {Math.max(0, 5 - (currentStep - 1)) === 0 
                  ? 'All steps completed!' 
                  : `${Math.max(0, 5 - (currentStep - 1))} ${t('stepRemainingText')}`}
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center font-mono text-sm font-black text-emerald-700 dark:text-emerald-400 shadow-inner">
              {currentStep === 6 ? '100%' : `${Math.round(((currentStep - 1) / 5) * 100)}%`}
            </div>
          </div>
        </div>

        {/* Dynamic Smooth Animated Progress Bar */}
        <div className="relative w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-200 dark:border-slate-700/80">
          <div 
            className="h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 transition-all duration-500 ease-out rounded-full shadow-sm"
            style={{ width: `${currentStep === 6 ? 100 : Math.round(((currentStep - 1) / 5) * 100)}%` }}
          />
        </div>

        {/* 6-Node Visual Stepper Bar */}
        <div className="pt-2 relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
            {[
              { step: 1, label: t('step1'), icon: User },
              { step: 2, label: t('step2'), icon: Wallet },
              { step: 3, label: t('step3'), icon: Briefcase },
              { step: 4, label: t('step4'), icon: Users },
              { step: 5, label: t('step5'), icon: HeartHandshake },
              { step: 6, label: t('step6'), icon: Sparkles },
            ].map((item) => {
              const isCompleted = currentStep > item.step;
              const isCurrent = currentStep === item.step;
              const IconComp = item.icon;

              return (
                <button
                  key={item.step}
                  onClick={() => setCurrentStep(item.step)}
                  className={`p-3 rounded-2xl border transition-all flex flex-col items-center text-center gap-2 group ${
                    isCurrent
                      ? 'bg-emerald-700 text-white border-emerald-600 shadow-lg ring-2 ring-emerald-500/40'
                      : isCompleted
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/80 hover:bg-emerald-100 dark:hover:bg-emerald-900/40'
                      : 'bg-slate-100 dark:bg-slate-800/60 border-slate-300 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {/* Circle Icon Badge */}
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      isCurrent
                        ? 'bg-white/20 text-white shadow-inner'
                        : isCompleted
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 stroke-[3]" />
                    ) : (
                      <IconComp className="w-4 h-4" />
                    )}
                  </div>

                  {/* Label & Status */}
                  <div className="space-y-0.5 w-full">
                    <span className={`text-[10px] uppercase tracking-wider font-extrabold block ${
                      isCurrent ? 'text-emerald-200' : isCompleted ? 'text-emerald-800 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {item.step === 6 ? 'RESULTS' : `STEP ${item.step}`}
                    </span>
                    <h4 className={`text-xs font-bold leading-tight truncate px-1 ${
                      isCurrent ? 'text-white' : isCompleted ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {item.label}
                    </h4>
                  </div>

                  {/* Mini Status Pill */}
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950'
                      : isCompleted
                      ? 'bg-emerald-200 text-emerald-950 dark:bg-emerald-900 dark:text-emerald-200'
                      : 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                  }`}>
                    {isCurrent ? t('stepStatusActive') : isCompleted ? t('stepStatusCompleted') : t('stepStatusUpcoming')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* STEP 1: PERSONAL DETAILS */}
      {currentStep === 1 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <User className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Step 1: Personal Profile</h3>
              <p className="text-xs text-slate-500">Provide basic demographic details.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Age */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                {t('ageLabel')} ({userProfile.age} Years)
              </label>
              <input
                type="number"
                min={1}
                max={100}
                value={userProfile.age}
                onChange={(e) => setUserProfile({ ...userProfile, age: parseInt(e.target.value) || 18 })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                {t('genderLabel')}
              </label>
              <select
                value={userProfile.gender}
                onChange={(e) => setUserProfile({ ...userProfile, gender: e.target.value as any })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
            </div>

            {/* State */}
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                {t('stateLabel')}
              </label>
              <select
                value={userProfile.state}
                onChange={(e) => setUserProfile({ ...userProfile, state: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white"
              >
                {indianStates.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-6 py-3 rounded-xl bg-emerald-700 text-white font-bold text-sm hover:bg-emerald-800 flex items-center gap-2"
            >
              <span>{t('nextStep')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: INCOME & WEALTH */}
      {currentStep === 2 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <Wallet className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Step 2: Income & Financial Status</h3>
              <p className="text-xs text-slate-500">Determines eligibility for poverty line & income-capped subsidies.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Income Slider */}
            <div className="space-y-2 sm:col-span-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                <span>{t('incomeLabel')}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-base">
                  ₹{userProfile.annualIncomeLakhs} Lakhs / year ({userProfile.annualIncomeLakhs * 100000} INR)
                </span>
              </div>
              <input
                type="range"
                min={0.2}
                max={15}
                step={0.1}
                value={userProfile.annualIncomeLakhs}
                onChange={(e) => setUserProfile({ ...userProfile, annualIncomeLakhs: parseFloat(e.target.value) })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            {/* BPL Checkbox */}
            <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={userProfile.isBpl}
                onChange={(e) => setUserProfile({ ...userProfile, isBpl: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {t('isBplLabel')}
              </span>
            </label>

            {/* Pucca House Checkbox */}
            <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={userProfile.hasHouse}
                onChange={(e) => setUserProfile({ ...userProfile, hasHouse: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {t('hasHouseLabel')}
              </span>
            </label>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(1)}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('prevStep')}</span>
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="px-6 py-3 rounded-xl bg-emerald-700 text-white font-bold text-sm hover:bg-emerald-800 flex items-center gap-2"
            >
              <span>{t('nextStep')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: OCCUPATION & ROLE */}
      {currentStep === 3 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <Briefcase className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Step 3: Primary Occupation & Activity</h3>
              <p className="text-xs text-slate-500">Used for sector-specific benefits (Agri, MSME, Street Vendors, Artisans).</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Primary Occupation Select */}
            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
                {t('occupationLabel')}
              </label>
              <select
                value={userProfile.occupation}
                onChange={(e) => setUserProfile({ ...userProfile, occupation: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white"
              >
                <option value="Farmer">Farmer / Landholding Agriculturalist</option>
                <option value="Student">Student / Enrolled Candidate</option>
                <option value="Artisan">Artisan / Craftsperson (Vishwakarma Trade)</option>
                <option value="Street Vendor">Street Vendor / Urban Hawker</option>
                <option value="Unorganised Worker">Unorganised Worker / Labourer / Driver / Gig Worker</option>
                <option value="Self-Employed">Self-Employed / Small Business Owner</option>
                <option value="Unemployed">Unemployed Youth</option>
                <option value="Govt Employee">Government Employee / Pensioner</option>
              </select>
            </div>

            {/* Landholding Hectares */}
            {userProfile.occupation === 'Farmer' && (
              <div className="space-y-2 sm:col-span-2 bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <label className="text-xs font-bold text-emerald-900 dark:text-emerald-200 uppercase">
                  {t('landholdingLabel')}
                </label>
                <input
                  type="number"
                  step={0.1}
                  value={userProfile.landholdingHectares}
                  onChange={(e) => setUserProfile({ ...userProfile, landholdingHectares: parseFloat(e.target.value) || 0 })}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white"
                />
              </div>
            )}
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('prevStep')}</span>
            </button>
            <button
              onClick={() => setCurrentStep(4)}
              className="px-6 py-3 rounded-xl bg-emerald-700 text-white font-bold text-sm hover:bg-emerald-800 flex items-center gap-2"
            >
              <span>{t('nextStep')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: SOCIAL CATEGORY */}
      {currentStep === 4 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <Users className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Step 4: Social Category & Background</h3>
              <p className="text-xs text-slate-500">Evaluates eligibility for targeted welfare & scholarship programs.</p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">
              {t('socialCategoryLabel')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['General', 'SC', 'ST', 'OBC', 'Minority', 'EBC'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setUserProfile({ ...userProfile, socialCategory: cat as any })}
                  className={`p-4 rounded-2xl border text-sm font-bold transition-all ${
                    userProfile.socialCategory === cat
                      ? 'bg-emerald-700 text-white border-emerald-600 shadow-md'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(3)}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('prevStep')}</span>
            </button>
            <button
              onClick={() => setCurrentStep(5)}
              className="px-6 py-3 rounded-xl bg-emerald-700 text-white font-bold text-sm hover:bg-emerald-800 flex items-center gap-2"
            >
              <span>{t('nextStep')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: SPECIAL CONDITIONS */}
      {currentStep === 5 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
            <HeartHandshake className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Step 5: Special Conditions & Demographics</h3>
              <p className="text-xs text-slate-500">Unlocks specialized assistance for disability, maternity, girl child, or widow support.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={userProfile.isDisabled}
                onChange={(e) => setUserProfile({ ...userProfile, isDisabled: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {t('isDisabledLabel')}
              </span>
            </label>

            <label className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={userProfile.isGirlChildInFamily}
                onChange={(e) => setUserProfile({ ...userProfile, isGirlChildInFamily: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {t('isGirlChildLabel')}
              </span>
            </label>

            <label className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={userProfile.isPregnantOrLactating}
                onChange={(e) => setUserProfile({ ...userProfile, isPregnantOrLactating: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {t('isPregnantLabel')}
              </span>
            </label>

            <label className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 cursor-pointer">
              <input
                type="checkbox"
                checked={userProfile.isWidow}
                onChange={(e) => setUserProfile({ ...userProfile, isWidow: e.target.checked })}
                className="w-5 h-5 text-emerald-600 rounded"
              />
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {t('isWidowLabel')}
              </span>
            </label>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(4)}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('prevStep')}</span>
            </button>
            <button
              onClick={() => {
                setCurrentStep(6);
                trackAnalyticsEvent('eligibility_check', {
                  state: userProfile.state,
                  occupation: userProfile.occupation,
                  eligibleCount: eligibleList.length,
                  possiblyEligibleCount: possiblyList.length
                });
              }}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm shadow-lg flex items-center gap-2"
            >
              <span>{t('calculateResults')} ({schemes.length} Schemes)</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 6: ELIGIBILITY RESULTS */}
      {currentStep === 6 && (
        <div className="space-y-8 animate-fade-in">
          
          {/* Results Summary Bar */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-black font-serif">
                Eligibility Assessment Complete
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Found <strong className="text-emerald-400 font-mono text-base">{eligibleList.length}</strong> Fully Eligible schemes & <strong className="text-amber-400 font-mono text-base">{possiblyList.length}</strong> Possibly Eligible schemes.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 print:hidden">
              <button
                onClick={handlePrintResults}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 border border-slate-700"
              >
                <Printer className="w-4 h-4" />
                <span>Print Report</span>
              </button>
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Wizard</span>
              </button>
            </div>
          </div>

          {/* Results Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto print:hidden">
            <button
              onClick={() => setResultsFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap ${
                resultsFilter === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              All Assessed ({evaluationResults.length})
            </button>

            <button
              onClick={() => setResultsFilter('eligible')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 ${
                resultsFilter === 'eligible'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
              }`}
            >
              <span>{t('eligibleSchemes')}</span>
              <span className="bg-emerald-800 text-white text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                {eligibleList.length}
              </span>
            </button>

            <button
              onClick={() => setResultsFilter('possibly_eligible')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 ${
                resultsFilter === 'possibly_eligible'
                  ? 'bg-amber-600 text-slate-950'
                  : 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200'
              }`}
            >
              <span>{t('possiblyEligibleSchemes')}</span>
              <span className="bg-amber-800 text-white text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                {possiblyList.length}
              </span>
            </button>

            <button
              onClick={() => setResultsFilter('not_eligible')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 ${
                resultsFilter === 'not_eligible'
                  ? 'bg-rose-700 text-white'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
              }`}
            >
              <span>{t('notEligibleSchemes')}</span>
              <span className="bg-rose-800 text-white text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                {ineligibleList.length}
              </span>
            </button>
          </div>

          {/* Results Grid with Score & Plain Language Reason */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedResults.map(({ scheme, matchScore, status, primaryReason, matchedCriteria, missingCriteria }) => (
              <div key={scheme.id} className="relative group space-y-2">
                
                {/* Match Banner Header */}
                <div className={`p-3 rounded-t-2xl border-t border-x flex items-center justify-between text-xs font-bold ${
                  status === 'eligible'
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : status === 'possibly_eligible'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-rose-600 text-white border-rose-500'
                }`}>
                  <span className="uppercase tracking-wider">
                    {status === 'eligible' ? '✅ Eligible' : status === 'possibly_eligible' ? '⚠️ Possibly Eligible' : '❌ Not Eligible'}
                  </span>
                  <span className="font-mono text-sm">{matchScore}% Match Score</span>
                </div>

                {/* Scheme Card */}
                <SchemeCard scheme={scheme} />

                {/* Plain Language Reason & Criteria Breakdown */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-b-2xl border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                  <p className="font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Analysis:</strong> {primaryReason}
                  </p>

                  {matchedCriteria.length > 0 && (
                    <div className="space-y-1">
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 uppercase text-[10px]">
                        Matched Criteria:
                      </span>
                      <ul className="list-disc pl-4 space-y-0.5 text-slate-600 dark:text-slate-300">
                        {matchedCriteria.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {missingCriteria.length > 0 && (
                    <div className="space-y-1">
                      <span className="font-bold text-rose-700 dark:text-rose-400 uppercase text-[10px]">
                        Unmet Criteria / Reason:
                      </span>
                      <ul className="list-disc pl-4 space-y-0.5 text-rose-600 dark:text-rose-300">
                        {missingCriteria.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

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
