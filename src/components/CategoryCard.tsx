import React from 'react';
import { SchemeCategory } from '../types';
import { CATEGORY_THEMES } from '../utils/categoryColors';
import { CATEGORY_NAMES } from '../utils/schemeLocalizer';
import { useApp } from '../context/AppContext';
import { 
  Sprout, 
  GraduationCap, 
  HeartPulse, 
  UserCheck, 
  Home, 
  Briefcase, 
  Users, 
  UserPlus 
} from 'lucide-react';

interface CategoryCardProps {
  category: SchemeCategory;
  count: number;
  isSelected?: boolean;
  onClick: () => void;
}

const CATEGORY_ICONS: Record<SchemeCategory, React.ElementType> = {
  Agriculture: Sprout,
  Students: GraduationCap,
  Health: HeartPulse,
  Women: UserCheck,
  Housing: Home,
  Business: Briefcase,
  Employment: Users,
  'Senior Citizens': UserPlus,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  count,
  isSelected,
  onClick,
}) => {
  const { language, t } = useApp();
  const theme = CATEGORY_THEMES[category];
  const Icon = CATEGORY_ICONS[category] || Sprout;

  const categoryName = CATEGORY_NAMES[language]?.[category] || category;

  const schemeUnitText = language === 'hi' ? 'योजनाएं' : language === 'mr' ? 'योजना' : count === 1 ? 'Scheme' : 'Schemes';

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer rounded-2xl p-3.5 sm:p-5 border transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-sm active:scale-95 hover:-translate-y-1 hover:shadow-xl ${
        theme.bgLight
      } ${theme.bgDark} ${theme.border} ${
        isSelected ? 'ring-2 ring-amber-400 scale-[1.02] shadow-xl' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className={`p-2.5 sm:p-3.5 rounded-xl ${theme.iconBg} group-hover:scale-110 transition-transform shrink-0`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full ${theme.badgeBg} ${theme.badgeText} shrink-0 shadow-xs`}>
          {count} {schemeUnitText}
        </span>
      </div>

      <div className="mt-3 sm:mt-4">
        <h3 className="font-bold text-base sm:text-lg leading-tight text-white">
          {categoryName}
        </h3>
        <p className="text-[11px] sm:text-xs text-white/95 mt-1.5 font-medium leading-relaxed line-clamp-2">
          {language === 'hi' 
            ? 'अनुदान, कल्याणकारी मदद और डीबीटी सहायता का अन्वेषण करें।'
            : language === 'mr'
            ? 'अनुदान, कल्याणकारी मदत आणि थेट लाभ हस्तांतरण शोधा.'
            : 'Explore grants, welfare, and direct benefit transfers.'}
        </p>
      </div>

      {/* Decorative accent bar */}
      <div className={`mt-3 sm:mt-4 h-1 sm:h-1.5 w-10 sm:w-12 rounded-full ${theme.iconBg}`} />
    </div>
  );
};
