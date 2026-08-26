export type SchemeCategory = 
  | 'Agriculture'
  | 'Students'
  | 'Health'
  | 'Women'
  | 'Housing'
  | 'Business'
  | 'Employment'
  | 'Senior Citizens';

export type Language = 'en' | 'hi' | 'mr';

export type ThemeMode = 'light' | 'dark' | 'high-contrast';

export type FontSize = 'sm' | 'md' | 'lg';

export type AccentColor = 'emerald' | 'indigo' | 'sky' | 'purple' | 'amber' | 'rose';

export interface SchemeEligibilityRequirements {
  age_limit?: string;
  income_limit?: string;
  gender?: string;
  occupation?: string;
  state?: string;
  exclusions?: string;
}

export interface Scheme {
  id: string;
  name: string;
  short_description: string;
  full_description: string;
  category: SchemeCategory;
  ministry: string;
  benefits: string[];
  eligibility: SchemeEligibilityRequirements;
  required_documents: string[];
  application_steps: string[];
  keywords: string[];
  official_website: string;
  apply_link: string;
  helpline: string;
  last_verified_date: string;
  source_url: string;
  notes?: string;
  viewsCount?: number;
}

export interface UserEligibilityProfile {
  age: number;
  gender: 'All' | 'Male' | 'Female' | 'Transgender';
  state: string;
  socialCategory: 'General' | 'SC' | 'ST' | 'OBC' | 'Minority' | 'EBC' | 'DNT';
  annualIncomeLakhs: number; // e.g. 1.5 = 1.5 Lakhs (150,000 INR)
  isBpl: boolean;
  occupation: string; // e.g. 'Farmer', 'Student', 'Artisan', 'Unorganised Worker', 'Street Vendor', 'Business Owner', 'Unemployed', 'Govt Employee'
  isDisabled: boolean;
  disabilityPercentage?: number;
  isGirlChildInFamily: boolean;
  girlChildAge?: number;
  isPregnantOrLactating: boolean;
  isWidow: boolean;
  landholdingHectares: number; // 0 for landless
  hasHouse: boolean; // whether owns a pucca house
  isSeniorCitizen: boolean;
  businessSector?: string;
  studentClassLevel?: string;
}

export type EligibilityStatus = 'eligible' | 'possibly_eligible' | 'not_eligible';

export interface EligibilityResult {
  scheme: Scheme;
  matchScore: number; // 0 - 100
  status: EligibilityStatus;
  primaryReason: string;
  matchedCriteria: string[];
  missingCriteria: string[];
}

export interface FeedbackSubmission {
  id: string;
  name: string;
  email: string;
  category: string;
  message: string;
  rating: number;
  timestamp: string;
}

export interface SearchLog {
  id: string;
  query: string;
  categoryFilter?: string;
  resultsCount: number;
  timestamp: string;
}

export interface UserDocumentState {
  [documentName: string]: boolean;
}
