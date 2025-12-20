// Type definitions

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  category: "residential" | "commercial" | "specialized";
}

export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export type HeroState = "default" | "sofa" | "commercial" | "residential" | "tank" | "carpet";

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
}

export interface BookingFormData {
  service: string;
  propertyType: "home" | "office";
  preferredDate: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  notes?: string;
}

// Service Page Types
export type ServiceCategory = "residential" | "commercial" | "specialized" | "moving";

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServicePricingTier {
  name: string;
  price: string;
  unit: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePage {
  // Basic Info
  slug: string;
  category: ServiceCategory;
  title: string;
  tagline: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Hero
  heroImage: string;
  heroVideo?: string;

  // Content Sections
  intro: string;
  benefits: ServiceBenefit[];
  process: ServiceProcessStep[];
  pricing?: ServicePricingTier[];
  faqs: ServiceFAQ[];

  // Cross-linking
  relatedServices: string[];
}
