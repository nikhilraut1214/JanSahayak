import { SchemeCategory, AccentColor } from '../types';

export interface CategoryTheme {
  name: SchemeCategory;
  bgLight: string;
  bgDark: string;
  badgeBg: string;
  badgeText: string;
  border: string;
  text: string;
  accent: string;
  iconBg: string;
  colorName: string;
}

export interface AccentPalette {
  id: AccentColor;
  nameKey: string;
  labelEn: string;
  badgeBg: string;
  badgeText: string;
  border: string;
  accent: string;
  iconBg: string;
  swatchBg: string;
  ring: string;
}

export const ACCENT_PALETTES: Record<AccentColor, AccentPalette> = {
  emerald: {
    id: 'emerald',
    nameKey: 'accentEmerald',
    labelEn: 'Emerald Green',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/80',
    badgeText: 'text-emerald-900 dark:text-emerald-100',
    border: 'border-emerald-400 dark:border-emerald-600',
    accent: 'bg-emerald-600 text-white hover:bg-emerald-700',
    iconBg: 'bg-emerald-600 text-white',
    swatchBg: 'bg-emerald-600',
    ring: 'ring-emerald-500',
  },
  indigo: {
    id: 'indigo',
    nameKey: 'accentIndigo',
    labelEn: 'Royal Indigo',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/80',
    badgeText: 'text-indigo-900 dark:text-indigo-100',
    border: 'border-indigo-400 dark:border-indigo-600',
    accent: 'bg-indigo-600 text-white hover:bg-indigo-700',
    iconBg: 'bg-indigo-600 text-white',
    swatchBg: 'bg-indigo-600',
    ring: 'ring-indigo-500',
  },
  sky: {
    id: 'sky',
    nameKey: 'accentSky',
    labelEn: 'Sky Blue',
    badgeBg: 'bg-sky-100 dark:bg-sky-950/80',
    badgeText: 'text-sky-900 dark:text-sky-100',
    border: 'border-sky-400 dark:border-sky-600',
    accent: 'bg-sky-600 text-white hover:bg-sky-700',
    iconBg: 'bg-sky-600 text-white',
    swatchBg: 'bg-sky-500',
    ring: 'ring-sky-500',
  },
  purple: {
    id: 'purple',
    nameKey: 'accentPurple',
    labelEn: 'Vibrant Purple',
    badgeBg: 'bg-purple-100 dark:bg-purple-950/80',
    badgeText: 'text-purple-900 dark:text-purple-100',
    border: 'border-purple-400 dark:border-purple-600',
    accent: 'bg-purple-600 text-white hover:bg-purple-700',
    iconBg: 'bg-purple-600 text-white',
    swatchBg: 'bg-purple-600',
    ring: 'ring-purple-500',
  },
  amber: {
    id: 'amber',
    nameKey: 'accentAmber',
    labelEn: 'Sunset Gold',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/80',
    badgeText: 'text-amber-950 dark:text-amber-100',
    border: 'border-amber-400 dark:border-amber-600',
    accent: 'bg-amber-600 text-white hover:bg-amber-700',
    iconBg: 'bg-amber-600 text-white',
    swatchBg: 'bg-amber-500',
    ring: 'ring-amber-500',
  },
  rose: {
    id: 'rose',
    nameKey: 'accentRose',
    labelEn: 'Rose Crimson',
    badgeBg: 'bg-rose-100 dark:bg-rose-950/80',
    badgeText: 'text-rose-900 dark:text-rose-100',
    border: 'border-rose-400 dark:border-rose-600',
    accent: 'bg-rose-600 text-white hover:bg-rose-700',
    iconBg: 'bg-rose-600 text-white',
    swatchBg: 'bg-rose-600',
    ring: 'ring-rose-500',
  },
};

export const CATEGORY_THEMES: Record<SchemeCategory, CategoryTheme> = {
  Agriculture: {
    name: 'Agriculture',
    bgLight: 'bg-[#065F46] hover:bg-[#047857] text-white shadow-md hover:shadow-xl',
    bgDark: 'dark:bg-emerald-950/90 dark:hover:bg-emerald-900',
    badgeBg: 'bg-white/20 border border-white/20',
    badgeText: 'text-white font-bold',
    border: 'border-emerald-300/30',
    text: 'text-white',
    accent: 'bg-[#059669] text-white hover:bg-[#10B981]',
    iconBg: 'bg-[#059669] text-white shadow-sm',
    colorName: 'green',
  },
  Students: {
    name: 'Students',
    bgLight: 'bg-[#0C4A6E] hover:bg-[#0369A1] text-white shadow-md hover:shadow-xl',
    bgDark: 'dark:bg-sky-950/90 dark:hover:bg-sky-900',
    badgeBg: 'bg-white/20 border border-white/20',
    badgeText: 'text-white font-bold',
    border: 'border-sky-300/30',
    text: 'text-white',
    accent: 'bg-[#0284C7] text-white hover:bg-[#38BDF8]',
    iconBg: 'bg-[#0284C7] text-white shadow-sm',
    colorName: 'blue',
  },
  Health: {
    name: 'Health',
    bgLight: 'bg-[#7F1D1D] hover:bg-[#991B1B] text-white shadow-md hover:shadow-xl',
    bgDark: 'dark:bg-red-950/90 dark:hover:bg-red-900',
    badgeBg: 'bg-white/20 border border-white/20',
    badgeText: 'text-white font-bold',
    border: 'border-red-300/30',
    text: 'text-white',
    accent: 'bg-[#DC2626] text-white hover:bg-[#EF4444]',
    iconBg: 'bg-[#DC2626] text-white shadow-sm',
    colorName: 'red',
  },
  Women: {
    name: 'Women',
    bgLight: 'bg-[#831843] hover:bg-[#9D174D] text-white shadow-md hover:shadow-xl',
    bgDark: 'dark:bg-pink-950/90 dark:hover:bg-pink-900',
    badgeBg: 'bg-white/20 border border-white/20',
    badgeText: 'text-white font-bold',
    border: 'border-pink-300/30',
    text: 'text-white',
    accent: 'bg-[#DB2777] text-white hover:bg-[#F472B6]',
    iconBg: 'bg-[#DB2777] text-white shadow-sm',
    colorName: 'pink',
  },
  Housing: {
    name: 'Housing',
    bgLight: 'bg-[#78350F] hover:bg-[#92400E] text-white shadow-md hover:shadow-xl',
    bgDark: 'dark:bg-amber-950/90 dark:hover:bg-amber-900',
    badgeBg: 'bg-white/20 border border-white/20',
    badgeText: 'text-white font-bold',
    border: 'border-amber-300/30',
    text: 'text-white',
    accent: 'bg-[#D97706] text-white hover:bg-[#F59E0B]',
    iconBg: 'bg-[#D97706] text-white shadow-sm',
    colorName: 'orange',
  },
  Business: {
    name: 'Business',
    bgLight: 'bg-[#581C87] hover:bg-[#6B21A8] text-white shadow-md hover:shadow-xl',
    bgDark: 'dark:bg-purple-950/90 dark:hover:bg-purple-900',
    badgeBg: 'bg-white/20 border border-white/20',
    badgeText: 'text-white font-bold',
    border: 'border-purple-300/30',
    text: 'text-white',
    accent: 'bg-[#9333EA] text-white hover:bg-[#A855F7]',
    iconBg: 'bg-[#9333EA] text-white shadow-sm',
    colorName: 'purple',
  },
  Employment: {
    name: 'Employment',
    bgLight: 'bg-[#3730A3] hover:bg-[#4338CA] text-white shadow-md hover:shadow-xl',
    bgDark: 'dark:bg-indigo-950/90 dark:hover:bg-indigo-900',
    badgeBg: 'bg-white/20 border border-white/20',
    badgeText: 'text-white font-bold',
    border: 'border-indigo-300/30',
    text: 'text-white',
    accent: 'bg-[#4F46E5] text-white hover:bg-[#6366F1]',
    iconBg: 'bg-[#4F46E5] text-white shadow-sm',
    colorName: 'indigo',
  },
  'Senior Citizens': {
    name: 'Senior Citizens',
    bgLight: 'bg-[#334155] hover:bg-[#475569] text-white shadow-md hover:shadow-xl',
    bgDark: 'dark:bg-slate-900/90 dark:hover:bg-slate-800',
    badgeBg: 'bg-white/20 border border-white/20',
    badgeText: 'text-white font-bold',
    border: 'border-slate-300/30',
    text: 'text-white',
    accent: 'bg-[#475569] text-white hover:bg-[#64748B]',
    iconBg: 'bg-[#475569] text-white shadow-sm',
    colorName: 'brown',
  },
};

export function getCategoryTheme(category: SchemeCategory, accentColor?: AccentColor): CategoryTheme {
  const baseTheme = CATEGORY_THEMES[category] || CATEGORY_THEMES['Agriculture'];
  if (!accentColor) return baseTheme;

  const palette = ACCENT_PALETTES[accentColor];
  if (!palette) return baseTheme;

  return {
    ...baseTheme,
    badgeBg: palette.badgeBg,
    badgeText: palette.badgeText,
  };
}
