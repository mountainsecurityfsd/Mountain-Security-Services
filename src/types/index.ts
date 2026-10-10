export type Language = 'en' | 'ur';

export type PageRoute = 
  | 'home' 
  | 'directory' 
  | 'hire-staff' 
  | 'careers' 
  | 'about' 
  | 'contact' 
  | 'service-detail'
  | 'privacy-policy';

export interface WorkforceCategory {
  id: string;
  categoryNumber: string;
  name: string;
  nameUrdu: string;
  badge: string;
  badgeUrdu: string;
  description: string;
  descriptionUrdu: string;
  fullOverview: string;
  imageUrl: string;
  icon: string; // Lucide icon name or Material icon
  division: 'Security' | 'Logistics' | 'Workforce' | 'Industrial';
  licensingSpec: string;
  vettingSpec: string;
  deploymentRounds: string;
  tags: string[];
  responsibilities: string[];
  idealEnvironments: string[];
  verificationStandards: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface RequisitionFormData {
  companyName: string;
  ntnNumber?: string;
  industrySector: string;
  contactName: string;
  officialDesignation: string;
  contactPhone: string;
  officialEmail: string;
  categories: string[];
  workerCount: number;
  deploymentLocation: string;
  shiftSchedule: string;
  experienceLevel: string;
  operationalNotes?: string;
}

export interface WorkerRegistrationFormData {
  fullName: string;
  cnicNumber: string;
  phone: string;
  whatsappPhone: string;
  category: string;
  experienceYears: string;
  cityDistrict: string;
  hasPoliceClearance: boolean;
  hasWeaponLicense: boolean;
  medicalFitnessConfirmed: boolean;
  additionalSkills?: string;
}

export interface QuickCallbackFormData {
  name: string;
  phone: string;
  service: string;
}
