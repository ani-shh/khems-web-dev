// Site-wide constants

export const SITE_CONFIG = {
  name: "Khems Cleaning",
  tagline: "Professional Cleaning Services in Kathmandu",
  phone: "+977 01-4542169",
  mobile: "+977 9801227494",
  email: "info@khemscleaning.com",
  address: "Kathmandu, Nepal",
  social: {
    facebook: "",
    instagram: "",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  isButton?: boolean;
  hasDropdown?: boolean;
  children?: Array<{ label: string; href: string; description?: string }>;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    hasDropdown: true,
    children: [
      { label: "Our Story", href: "/about", description: "Learn about Khems Cleaning" },
      { label: "Our Team", href: "/about#team", description: "Meet our professional staff" },
      { label: "Safety Standards", href: "/about#safety", description: "Our commitment to quality" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    children: [
      { label: "Residential Cleaning", href: "/services/residential", description: "Home deep cleaning services" },
      { label: "Commercial Cleaning", href: "/services/commercial", description: "Office & facility management" },
      { label: "Specialized Services", href: "/services/specialized", description: "Sofa, carpet, water tank" },
      { label: "Move In/Out", href: "/services/move-in-out", description: "Pre & post move cleaning" },
    ],
  },
  { label: "Our Work", href: "/portfolio" },
];

// Keywords for Generative Hero state detection
export const HERO_KEYWORDS = {
  sofa: ["sofa", "couch", "upholstery", "fabric", "cushion"],
  commercial: ["office", "commercial", "building", "corporate", "business", "company"],
  residential: ["home", "house", "apartment", "flat", "residential"],
  tank: ["tank", "water tank", "overhead"],
  carpet: ["carpet", "rug", "floor"],
} as const;
