
export interface ServiceTier {
  id: string;
  name: string;
  price: string;
  setupFee?: string; // Added for setup/onboarding fees
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

export interface OnboardingFormData {
  companyName: string;
  contactName: string;
  title: string; // New required field
  email: string;
  phone: string; // Now required
  website?: string;
  goals: string;
  currentChallenges: string;
  additionalInfo?: string;
}

export type CurrentPage = 'landing' | 'planDetail' | 'onboarding' | 'onboardingSuccess';


export enum IndustryOptions {
  HOME_SERVICES = "Home Services (Plumbing, HVAC, Electrical, etc.)", // Made more specific
  PROFESSIONAL_SERVICES = "Professional Services (Consulting, Legal, etc.)",
  RETAIL_ECOMMERCE = "Retail / E-commerce", // Combined
  HEALTH_WELLNESS = "Health & Wellness", // Broadened
  OTHER = "Other",
}

export enum ChallengeOptions {
  NOT_ENOUGH_LEADS = "Not enough consistent leads", // Rephrased
  LOW_ONLINE_VISIBILITY = "Low online visibility / Can't find me on Google", // Rephrased
  INCONSISTENT_POSTING_SOCIAL_MEDIA = "Inconsistent social media / Don't know what to post", // Rephrased
  POOR_WEBSITE_PERFORMANCE = "My website isn't getting me business", // New
  MANAGING_MARKETING_TIME = "Don't have time for marketing", // Rephrased
  COMPETITORS_DOING_BETTER = "Competitors seem to be doing better online", // New
}

export interface AdditionalServiceItem {
  id: string;
  iconText: string;
  title: string;
  description: string;
  features?: string[]; // Added for bullet points
}