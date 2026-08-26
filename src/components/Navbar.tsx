import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Globe, 
  Search, 
  Bookmark, 
  CheckSquare, 
  BarChart2, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Eye, 
  ShieldCheck, 
  HelpCircle, 
  Layers, 
  Home, 
  Sparkles,
  FileCheck,
  Palette
} from 'lucide-react';
import { Language, ThemeMode, FontSize, AccentColor } from '../types';
import { ACCENT_PALETTES } from '../utils/categoryColors';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    themeMode, 
    setThemeMode, 
    fontSize, 
    setFontSize, 
    accentColor,
    setAccentColor,
    activeTab, 
    setActiveTab, 
    savedSchemeIds, 
    compareSchemeIds,
    t 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('home'), icon: Home },
    { id: 'schemes', label: t('allSchemes'), icon: Layers },
    { id: 'wizard', label: t('eligibilityWizard'), icon: Sparkles, badge: 'Smart' },
    { id: 'compare', label: t('compareSchemes'), icon: BarChart2, count: compareSchemeIds.length },
    { id: 'saved', label: t('savedSchemes'), icon: Bookmark, count: savedSchemeIds.length },
    { id: 'documents', label: t('documentChecker'), icon: FileCheck },
    { id: 'faqs', label: t('faqsAndContact'), icon: HelpCircle },
    { id: 'admin', label: t('adminPanel'), icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-md transition-colors duration-200">
      {/* Top Utility Bar (Govt Portal Banner & Accessibility) */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
          {/* Emblem & Govt Seal */}
          <div className="flex items-center gap-2 font-medium shrink-0">
            <span className="inline-block w-4 h-4 rounded-full bg-amber-500 border border-amber-300 flex items-center justify-center font-bold text-[10px] text-slate-900">
              🇮🇳
            </span>
            <span className="tracking-wide text-[11px] sm:text-xs">{t('govtOfIndia')}</span>
            <span className="text-slate-500">|</span>
            <span className="text-amber-400 font-semibold text-[11px] sm:text-xs truncate">100+ Verified Central Schemes</span>
          </div>

          {/* Right Accessibility & Language Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4 overflow-x-auto scrollbar-none py-0.5">
            {/* Font Size Adjuster */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 shrink-0">
              <span className="text-[10px] text-slate-400 px-1 font-mono hidden sm:inline">Font:</span>
              <button
                onClick={() => setFontSize('sm')}
                className={`min-w-[28px] h-7 px-1.5 rounded text-xs font-bold flex items-center justify-center ${
                  fontSize === 'sm' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
                title="Small Font"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`min-w-[28px] h-7 px-1.5 rounded text-xs font-bold flex items-center justify-center ${
                  fontSize === 'md' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
                title="Normal Font"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`min-w-[28px] h-7 px-1.5 rounded text-xs font-bold flex items-center justify-center ${
                  fontSize === 'lg' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
                title="Large Font"
              >
                A+
              </button>
            </div>

            {/* Accent Theme Color Switcher */}
            <div className="hidden md:flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700 shrink-0 gap-1" title="Select Accent Theme Color">
              <Palette className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
              {(['emerald', 'indigo', 'sky', 'amber', 'purple', 'rose'] as AccentColor[]).map((col) => {
                const pal = ACCENT_PALETTES[col];
                return (
                  <button
                    key={col}
                    onClick={() => setAccentColor(col)}
                    className={`w-4 h-4 rounded-full transition-transform ${pal.swatchBg} ${
                      accentColor === col ? 'ring-2 ring-white scale-110 shadow-sm' : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    title={pal.labelEn}
                  />
                );
              })}
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 shrink-0">
              <button
                onClick={() => setThemeMode('light')}
                className={`w-7 h-7 rounded flex items-center justify-center ${themeMode === 'light' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                title="Light Mode"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setThemeMode('dark')}
                className={`w-7 h-7 rounded flex items-center justify-center ${themeMode === 'dark' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                title="Dark Mode"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setThemeMode('high-contrast')}
                className={`w-7 h-7 rounded flex items-center justify-center ${themeMode === 'high-contrast' ? 'bg-yellow-400 text-black' : 'text-slate-400 hover:text-white'}`}
                title="High Contrast Mode"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-800 rounded-lg px-2 h-8 border border-slate-700 shrink-0">
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-[11px] sm:text-xs text-slate-200 font-medium focus:outline-none cursor-pointer"
              >
                <option value="en" className="bg-slate-900 text-white">English</option>
                <option value="hi" className="bg-slate-900 text-white">हिन्दी (Hindi)</option>
                <option value="mr" className="bg-slate-900 text-white">मराठी (Marathi)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className={`border-b ${
        themeMode === 'high-contrast' 
          ? 'bg-black border-yellow-400 text-yellow-300' 
          : themeMode === 'dark' 
          ? 'bg-slate-900/95 border-slate-800 text-white backdrop-blur-md' 
          : 'bg-white/95 border-slate-200 text-slate-900 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo & Portal Branding */}
            <div 
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-900 text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-md group-hover:scale-105 transition-transform shrink-0">
                <span className="tracking-tighter">जन</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight font-serif text-emerald-800 dark:text-emerald-400">
                    {t('portalName')}
                  </h1>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-1.5 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-700 hidden sm:inline-block">
                    e-Gov Portal
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium line-clamp-1">
                  {t('portalTagline')}
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? themeMode === 'high-contrast'
                          ? 'bg-yellow-400 text-black font-bold'
                          : 'bg-emerald-700 text-white shadow-sm'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-extrabold bg-amber-400 text-slate-950 px-1.5 py-0.2 rounded-full uppercase">
                        {item.badge}
                      </span>
                    )}
                    {typeof item.count === 'number' && item.count > 0 && (
                      <span className={`text-xs px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-white text-emerald-800' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2 shadow-xl">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-sm ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
                  {typeof item.count === 'number' && item.count > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
