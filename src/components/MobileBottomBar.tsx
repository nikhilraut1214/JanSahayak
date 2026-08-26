import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Home, 
  Layers, 
  Sparkles, 
  Bookmark, 
  BarChart2,
  FileCheck,
  HelpCircle
} from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const { activeTab, setActiveTab, savedSchemeIds, compareSchemeIds, t } = useApp();

  const tabs = [
    { id: 'home', label: t('home'), icon: Home },
    { id: 'schemes', label: t('allSchemes'), icon: Layers },
    { id: 'wizard', label: 'Wizard', icon: Sparkles, badge: 'Smart' },
    { id: 'compare', label: 'Compare', icon: BarChart2, count: compareSchemeIds.length },
    { id: 'saved', label: 'Saved', icon: Bookmark, count: savedSchemeIds.length },
  ];

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-slate-300 xl:hidden px-2 py-1.5 shadow-2xl transition-all duration-200"
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-2.5 rounded-xl min-w-[56px] min-h-[48px] transition-all active:scale-95 ${
                isActive
                  ? 'text-amber-400 bg-slate-800/90 font-bold shadow-inner'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-amber-400' : ''}`} />
                {typeof tab.count === 'number' && tab.count > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-emerald-500 text-slate-950 font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-slate-900 shadow-xs">
                    {tab.count}
                  </span>
                )}
                {tab.badge && !isActive && (
                  <span className="absolute -top-1 -right-2 bg-amber-400 text-slate-950 font-black text-[8px] px-1 rounded-full uppercase">
                    •
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-1 tracking-tight leading-none ${isActive ? 'font-black text-amber-400' : 'font-semibold'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
