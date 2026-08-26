import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, ExternalLink, Phone, Globe, HelpCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, setActiveTab } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About Portal */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                जन
              </div>
              <span className="text-xl font-bold text-white font-serif">{t('portalName')}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              JanSahayak is an automated e-Governance guidance portal built to assist Indian citizens in discovering welfare schemes, verifying eligibility criteria, and preparing application documents.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/50">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Verified Seed Data from myScheme & Ministry Portals</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Portal Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('schemes')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  • {t('allSchemes')}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('wizard')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  • {t('eligibilityWizard')}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('compare')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  • {t('compareSchemes')}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('documents')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  • {t('documentChecker')}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('faqs')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  • {t('faqsAndContact')}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('admin')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  • {t('adminPanel')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Government Portals */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
              Official Portals
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>myScheme Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>National Portal of India (india.gov.in)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>PM-KISAN Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Ayushman Bharat PM-JAY</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>National Scholarship Portal (NSP)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Emergency & Citizen Helplines */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-rose-500 pl-2">
              National Helplines
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-2 bg-slate-800 rounded-lg flex items-center justify-between">
                <span>National Emergency</span>
                <span className="font-bold text-amber-400">112</span>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg flex items-center justify-between">
                <span>Ayushman Bharat</span>
                <span className="font-bold text-amber-400">14555</span>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg flex items-center justify-between">
                <span>Kisan Call Centre</span>
                <span className="font-bold text-amber-400">1800-180-1551</span>
              </div>
              <div className="p-2 bg-slate-800 rounded-lg flex items-center justify-between">
                <span>Women Helpline</span>
                <span className="font-bold text-amber-400">181</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-400 space-y-2">
          <p className="max-w-4xl mx-auto italic">
            {t('disclaimer')}
          </p>
          <p className="text-slate-500">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
