
export interface ServiceTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features?: string[]; // Optional: for bullet points if any
  highlight?: string; // Optional: for "Most Popular Choice"
  tierGroup: string; // To group services e.g. "VISIBILITY ENGINE"
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  category: string; // e.g., Home Services
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadMagnetFormData {
  businessName: string;
  yourName: string;
  email: string;
  phoneNumber: string;
  industry: string;
  biggestChallenge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

// AddOnService interface removed

export enum IndustryOptions {
  HOME_SERVICES = "Home Services",
  PROFESSIONAL_SERVICES = "Professional Services",
  RETAIL = "Retail",
  HEALTHCARE = "Healthcare",
  OTHER = "Other",
}

export enum ChallengeOptions {
  INCONSISTENT_POSTING = "Inconsistent posting",
  POOR_ENGAGEMENT = "Poor engagement",
  NO_LEADS_SOCIAL = "No leads from social",
  MANAGING_PLATFORMS = "Managing multiple platforms",
  NO_TIME = "Don't have time",
}