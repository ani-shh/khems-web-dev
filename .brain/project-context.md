# Project Context: Khems Cleaning Website

**Last Updated:** December 9, 2025
**Project Status:** Homepage MVP Complete
**AI Instance:** Khems-Stark

---

## Project Overview

**Client:** Khems Cleaning
**Location:** Kathmandu, Nepal
**Industry:** Professional Cleaning Services (Residential & Commercial)
**Current Site:** https://khemscleaning.com/ (Legacy, needs replacement)
**Project Type:** Website Rebuild

---

## Project Vision

### "Thumbtack Meets ServiceFM"

A hybrid platform combining:
1. **Visual Interaction (B2C):** Thumbtack-inspired clean, whitespace-heavy, card-based layouts with search/chat centric UX
2. **Content Depth (B2B):** ServiceFM-style corporate reliability, detailed service protocols, trust signals

### Primary Goals
- Brand awareness
- High-end portfolio showcase
- Lead generation via modern, tech-forward interface
- Outclass competitors (Royal Cleaning, Namaste Nepal Cleaning)

---

## Technical Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Framework | Next.js (React) | SEO + Fast rendering |
| Styling | Tailwind CSS | Rapid "Thumbtack" layout implementation |
| Animation | Framer Motion | Smooth hero state transitions |
| Icons | Lucide React / Heroicons | Clean, thin line icons |

---

## Design System

### Vibe
Modern, Tech-Enabled, Trustworthy, Spotless

### Typography
- Sans-serif, geometric, friendly
- Options: Geist, Inter, or Circular

### Color Palette
- **Primary:** Brand Blue/Green (from Khems logo)
- **Backgrounds:** White (#FFFFFF), Soft grays (#F7F9FB)
- **Approach:** Light theme, Thumbtack-style clean look

### Component Style
- **Cards:** High border-radius, soft drop shadows, subtle hover lift
- **Imagery:** Authentic photography of Nepali staff (avoid stock)
- **Responsive:** Mobile-first, cards must stack perfectly

---

## Site Architecture

| Page | Route | Key Features |
|------|-------|--------------|
| Home | `/` | Generative Hero, Dynamic Service Grid, Trust Signals |
| About Us | `/about` | Company history, Team photos, Safety standards |
| Services Index | `/services` | Full catalog (SEO fallback) |
| Commercial | `/services/commercial` | Contracts, night shifts, facility management |
| Residential | `/services/residential` | Deep cleaning, moving in/out |
| Specialized | `/services/specialized` | Sofa, Carpet, Water Tank, Marble |
| Portfolio | `/portfolio` | Before/After image sliders |
| Contact/Book | `/book` | Multi-step wizard form |

---

## Core Feature: Generative Chat Hero

### The Concept
Intent-based interface replacing static slider. Central pill-shaped search bar that dynamically updates content below.

### States

**State A: Default (No Input)**
- Header: "Popular Services in Kathmandu"
- Grid: Top 4 static cards
  1. Residential Deep Cleaning
  2. Sofa & Carpet Shampooing
  3. Water Tank Cleaning
  4. Office/Corporate Support

**State B: Sofa/Upholstery Keywords**
- Trigger: `['sofa', 'couch', 'upholstery', 'fabric']`
- Shows: "Upholstery Restoration Services"
- Component: Sofa Cleaning Pricing Card + Before/After images
- CTA: "Get Sofa Quote"

**State C: Commercial Keywords**
- Trigger: `['office', 'commercial', 'building', 'corporate']`
- Shows: "Commercial Facility Solutions"
- Component: Annual Contract Benefits + Client Logos
- CTA: "Request Site Visit"

---

## Key Components

### 1. Booking Wizard (Thumbtack Style)
Step-by-step UI (not long form):
1. Select Service (Icons)
2. Select Property Type (Home vs Office)
3. Select Date Preference
4. Contact Details

### 2. Portfolio Slider
- Before/After image comparison
- Options: `react-compare-image` or custom CSS
- Use case: Dirty vs clean carpets

### 3. Footer (SEO Critical)
- Physical address (Kathmandu)
- Phone number
- Links to specific service pages

---

## SEO Strategy

### Target Keywords
- Cleaning services Kathmandu
- Sofa cleaning Nepal
- Office cleaners Lalitpur

### Local SEO
- Google Maps embed on Contact page

### Performance
- WebP images (optimize for Nepali mobile networks)
- Fast loading critical for target audience

---

## Competitor Analysis

| Competitor | Our Advantage |
|------------|---------------|
| Royal Cleaning | More modern, tech-savvy |
| Namaste Nepal Cleaning | Superior design, interaction |
| ServiceFM | Reference for commercial content structure |

---

## Development Phases

### Phase 1: Foundation ✅
- [x] Next.js project setup
- [x] Tailwind configuration
- [x] Design system implementation
- [x] Component library setup
- [x] Docker + Traefik deployment

### Phase 2: Core Pages (In Progress)
- [x] Homepage MVP (Hero, ServiceShowcase)
- [ ] Homepage completion (TrustSignals, CTABanner)
- [ ] Services pages
- [ ] About page

### Phase 3: Interactive Features
- [ ] Generative Chat Hero (keyword-based dynamic content)
- [ ] Booking wizard
- [ ] Before/After portfolio sliders
- [ ] Contact form integration

### Phase 4: Polish & Launch
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Content population (real photos, videos)
- [ ] Production deployment

---

## Important Decisions Log

| Date | Decision | Reasoning |
|------|----------|-----------|
| Dec 9, 2025 | Project initialized | Client requirement for modern website rebuild |
| Dec 9, 2025 | Docker + Traefik deployment | Server already running Traefik, easier than bare Nginx |
| Dec 9, 2025 | Thumbtack-style hero with search bar | Matches "Thumbtack meets ServiceFM" vision |
| Dec 9, 2025 | Video backgrounds on service cards | Instagram Reels-style engagement, modern UX |
| Dec 9, 2025 | Scroll-triggered hero image expansion | Creates engaging reveal animation |
| Dec 9, 2025 | Logo colors as subtle theme accents | Visual cohesion between brand and site |
| Dec 9, 2025 | Local video hosting | External CDNs block hotlinking, must self-host |
| Dec 9, 2025 | Userback for feedback | Easy user feedback collection during dev |
| Dec 10, 2025 | Header redesign: Thumbtack layout + ServiceFM content | Combines clean Thumbtack nav style with ServiceFM's menu structure (Home, About dropdown, Services dropdown, Our Work, News, Phone, Contact CTA) |
| Dec 10, 2025 | Hover-based nav dropdowns | Better UX than click-based, feels more natural for desktop |
| Dec 10, 2025 | Conversational typewriter placeholder | Primes users for AI-powered generative UX, shows human-like queries instead of keywords |
| Dec 10, 2025 | "Powered by Zunkiree AI" badge | Brand attribution for AI features, violet/purple color scheme for AI feel |

---

## Resources & References

### Design Inspiration
- [Thumbtack](https://www.thumbtack.com/) - B2C visual interaction
- [ServiceFM](https://servicefm.com.au/) - B2B content depth

### Current Site
- https://khemscleaning.com/

---

**Project brain initialized. Ready for development.**
