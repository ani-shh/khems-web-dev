# Service Inner Pages - Implementation Plan

## Overview
This document outlines the plan for building SEO-friendly service detail pages for Khems Cleaning website.

---

## 1. Service Page Data Structure

Each service page will have the following content structure:

```typescript
interface ServicePage {
  // Basic Info
  slug: string;                    // URL slug (e.g., "house-cleaning")
  category: string;                // Category (residential, commercial, specialized, moving)
  title: string;                   // Page title (e.g., "House Cleaning")
  tagline: string;                 // Short tagline for hero

  // SEO
  metaTitle: string;               // SEO title (60 chars max)
  metaDescription: string;         // SEO description (160 chars max)
  keywords: string[];              // Target keywords

  // Hero Section
  heroImage: string;               // Hero background image
  heroVideo?: string;              // Optional hero video

  // Content Sections
  intro: string;                   // Introduction paragraph (2-3 sentences)

  benefits: {                      // 4-6 benefits
    title: string;
    description: string;
    icon: string;                  // Lucide icon name
  }[];

  process: {                       // 4-6 steps
    step: number;
    title: string;
    description: string;
  }[];

  pricing?: {                      // 2-3 tiers (optional)
    name: string;
    price: string;
    unit: string;
    features: string[];
    popular?: boolean;
  }[];

  faqs: {                          // 5-8 FAQs
    question: string;
    answer: string;
  }[];

  // Cross-linking
  relatedServices: string[];       // Array of related service slugs
}
```

---

## 2. URL Structure

### Route Pattern
```
/services/[slug]/
```

### All Service URLs (16 total)

**Residential Services:**
| Service | URL |
|---------|-----|
| House Cleaning | `/services/house-cleaning/` |
| Deep Cleaning | `/services/deep-cleaning/` |
| Kitchen Cleaning | `/services/kitchen-cleaning/` |
| Bathroom Cleaning | `/services/bathroom-cleaning/` |

**Commercial Services:**
| Service | URL |
|---------|-----|
| Office Cleaning | `/services/office-cleaning/` |
| Retail & Shop Cleaning | `/services/retail-shop-cleaning/` |
| Facility Management | `/services/facility-management/` |
| Industrial Cleaning | `/services/industrial-cleaning/` |

**Specialized Services:**
| Service | URL |
|---------|-----|
| Sofa Cleaning | `/services/sofa-cleaning/` |
| Carpet Cleaning | `/services/carpet-cleaning/` |
| Water Tank Cleaning | `/services/water-tank-cleaning/` |
| Marble Polishing | `/services/marble-polishing/` |

**Move In/Out Services:**
| Service | URL |
|---------|-----|
| Move-In Cleaning | `/services/move-in-cleaning/` |
| Move-Out Cleaning | `/services/move-out-cleaning/` |
| Post Construction Cleaning | `/services/post-construction-cleaning/` |
| Renovation Cleanup | `/services/renovation-cleanup/` |

---

## 3. Page Sections Layout

Each service page will have these sections (in order):

### 3.1 Hero Section
- Full-width background image/video
- Service title (H1)
- Tagline
- CTA button ("Book Now" / "Get Quote")
- Breadcrumb navigation

### 3.2 Introduction Section
- 2-3 paragraph introduction
- Key statistics (optional)
- Trust badges

### 3.3 Benefits Section
- Section title: "Why Choose Our [Service Name]"
- 4-6 benefit cards with icons
- Grid layout (2x3 or 3x2)

### 3.4 Process Section
- Section title: "How It Works"
- 4-6 numbered steps
- Timeline or step-by-step layout

### 3.5 Pricing Section (Optional)
- Section title: "Transparent Pricing"
- 2-3 pricing tiers
- Features comparison
- CTA buttons

### 3.6 FAQ Section
- Section title: "Frequently Asked Questions"
- 5-8 accordion items
- Schema markup for SEO

### 3.7 Related Services Section
- Section title: "Related Services"
- 3-4 service cards
- Links to other service pages

### 3.8 CTA Banner
- Final call-to-action
- Contact information
- Book now button

---

## 4. SEO Requirements

### Meta Tags (per page)
```html
<title>{metaTitle} | Khems Cleaning</title>
<meta name="description" content="{metaDescription}" />
<meta name="keywords" content="{keywords.join(', ')}" />
<link rel="canonical" href="https://khemscleaning.com/services/{slug}/" />
```

### Structured Data (JSON-LD)

**Service Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "House Cleaning Service",
  "description": "Professional house cleaning...",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Khems Cleaning",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    }
  },
  "areaServed": "Kathmandu Valley"
}
```

**FAQ Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does house cleaning take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard house cleaning..."
      }
    }
  ]
}
```

**Breadcrumb Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "/services/" },
    { "@type": "ListItem", "position": 3, "name": "House Cleaning" }
  ]
}
```

---

## 5. Content Guidelines

### SEO Title Format
```
{Service Name} in Kathmandu | Professional {Service Type} | Khems Cleaning
```
Example: "House Cleaning in Kathmandu | Professional Home Cleaning | Khems Cleaning"

### Meta Description Format
```
{Benefit} + {Service} + {Location} + {CTA}
```
Example: "Get spotless, professional house cleaning services in Kathmandu. Trained cleaners, eco-friendly products, 100% satisfaction guaranteed. Book today!"

### Target Keywords (per service)
- Primary: "{service} in Kathmandu"
- Secondary: "{service} Nepal", "professional {service}", "best {service} Kathmandu"
- Long-tail: "how much does {service} cost in Kathmandu"

### Content Length Guidelines
| Section | Word Count |
|---------|------------|
| Introduction | 100-150 words |
| Each Benefit | 30-50 words |
| Each Process Step | 30-50 words |
| Each FAQ Answer | 50-100 words |
| **Total per page** | **800-1200 words** |

---

## 6. Files to Create

### Data Files
| File | Purpose |
|------|---------|
| `/src/data/servicePages.ts` | All 16 service page content |
| `/src/types/service.ts` | TypeScript interfaces |

### Route Files
| File | Purpose |
|------|---------|
| `/src/app/services/[slug]/page.tsx` | Dynamic service page |
| `/src/app/services/page.tsx` | Services listing page |

### Component Files
| File | Purpose |
|------|---------|
| `/src/components/services/ServiceHero.tsx` | Hero section |
| `/src/components/services/ServiceIntro.tsx` | Introduction |
| `/src/components/services/ServiceBenefits.tsx` | Benefits grid |
| `/src/components/services/ServiceProcess.tsx` | Process steps |
| `/src/components/services/ServicePricing.tsx` | Pricing cards |
| `/src/components/services/ServiceFAQs.tsx` | FAQ accordion |
| `/src/components/services/RelatedServices.tsx` | Related services |
| `/src/components/services/ServiceCTA.tsx` | CTA banner |
| `/src/components/services/index.ts` | Barrel export |

---

## 7. Implementation Order

1. **Phase 1: Foundation**
   - Create TypeScript interfaces
   - Create servicePages.ts with 1 sample service (House Cleaning)
   - Create dynamic route /services/[slug]/page.tsx

2. **Phase 2: Components**
   - Build ServiceHero component
   - Build ServiceBenefits component
   - Build ServiceProcess component
   - Build ServicePricing component
   - Build ServiceFAQs component
   - Build RelatedServices component

3. **Phase 3: Content**
   - Generate content for all 16 services
   - Add SEO metadata
   - Add structured data (JSON-LD)

4. **Phase 4: Integration**
   - Update homepage service links
   - Create services listing page
   - Test all routes
   - Deploy

---

## 8. Service Content Template

Use this template when creating content for each service:

```typescript
{
  slug: "house-cleaning",
  category: "residential",
  title: "House Cleaning",
  tagline: "A spotless home, without lifting a finger",

  metaTitle: "House Cleaning Services in Kathmandu | Khems Cleaning",
  metaDescription: "Professional house cleaning services in Kathmandu. Trained cleaners, eco-friendly products, 100% satisfaction guaranteed. Book your cleaning today!",
  keywords: ["house cleaning Kathmandu", "home cleaning Nepal", "maid service Kathmandu"],

  heroImage: "/images/services/house-cleaning-hero.jpg",

  intro: "Coming home to a clean house is one of life's simple pleasures...",

  benefits: [
    {
      title: "Trained Professionals",
      description: "Our cleaners undergo rigorous training...",
      icon: "UserCheck"
    },
    // ... 4-6 benefits
  ],

  process: [
    {
      step: 1,
      title: "Book Online",
      description: "Choose your service and schedule..."
    },
    // ... 4-6 steps
  ],

  pricing: [
    {
      name: "Basic Clean",
      price: "Rs. 2,500",
      unit: "per session",
      features: ["Dusting", "Vacuuming", "Mopping"],
      popular: false
    },
    // ... 2-3 tiers
  ],

  faqs: [
    {
      question: "How long does a house cleaning session take?",
      answer: "A standard house cleaning takes 2-4 hours..."
    },
    // ... 5-8 FAQs
  ],

  relatedServices: ["deep-cleaning", "kitchen-cleaning", "bathroom-cleaning"]
}
```

---

## 9. Checklist

### Per Service Page
- [ ] Unique, keyword-rich title
- [ ] Meta description (under 160 chars)
- [ ] H1 tag with service name
- [ ] Introduction paragraph
- [ ] 4-6 benefits with icons
- [ ] 4-6 process steps
- [ ] Pricing information (if applicable)
- [ ] 5-8 FAQs
- [ ] Related services links
- [ ] CTA buttons
- [ ] Structured data (Service + FAQ + Breadcrumb)
- [ ] Hero image
- [ ] Mobile responsive

### Technical
- [ ] All routes working
- [ ] Static generation working (next build)
- [ ] No TypeScript errors
- [ ] Images optimized
- [ ] Page speed acceptable

---

*Last updated: December 2024*
