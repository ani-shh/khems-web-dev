# Project Blueprint: Khems Cleaning Website Rebuild

## 1. Project Context & Objectives
**Client:** Khems Cleaning
**Location:** Kathmandu, Nepal
**Industry:** Professional Cleaning Services (Residential & Commercial)
**Current Site:** [khemscleaning.com](https://khemscleaning.com/) (Legacy, needs replacement)
**Primary Goal:** Brand awareness, high-end portfolio showcase, and lead generation via a modern, tech-forward interface.

### The Vision: "Thumbtack Meets ServiceFM"
We are building a hybrid platform:
1.  **Visual Interaction (B2C):** Inspired by [Thumbtack](https://www.thumbtack.com/). Clean, whitespace-heavy, card-based layouts, and a "Search/Chat" centric user experience.
2.  **Content Depth (B2B):** Inspired by [ServiceFM](https://servicefm.com.au/). Corporate reliability, detailed service protocols, and trust signals for office managers.

---

## 2. Design System & UI/UX Guidelines
* **Vibe:** Modern, Tech-Enabled, Trustworthy, Spotless.
* **Typography:** Sans-serif, geometric, friendly (e.g., *Geist*, *Inter*, or *Circular*).
* **Color Palette:**
    * **Primary:** Brand Blue/Green (derived from Khems logo).
    * **Backgrounds:** Heavily white (`#FFFFFF`) and soft grays (`#F7F9FB`) to mimic Thumbtack’s clean look. Avoid heavy dark themes.
* **Component Style:**
    * **Cards:** High border-radius, soft drop shadows, subtle hover lift effects.
    * **Imagery:** Authentic photography of Nepali staff in uniforms (avoid generic stock).
    * **Mobile-First:** The "Service Cards" must stack perfectly for mobile users.

---

## 3. Core Feature: The "Generative Chat Hero"
**Priority:** High
**Reference:** Thumbtack Homepage Hero.

Instead of a static slider, the homepage hero is an **Intent-Based Interface**.
* **The Input:** A central, pill-shaped chat/search bar.
    * *Placeholder:* "What needs cleaning? (e.g., 'Sofa in Baneshwor' or 'Office deep clean')"
* **The Logic:** The content *immediately below* the hero refreshes based on user input.

### Functional Logic for Developer:
Implement a state-based content renderer `(Input -> Keyword Analysis -> Component Render)`.

**State A: Default (No Input)**
* **Header:** "Popular Services in Kathmandu"
* **Grid:** Display top 4 static cards:
    1.  Residential Deep Cleaning
    2.  Sofa & Carpet Shampooing
    3.  Water Tank Cleaning
    4.  Office/Corporate Support

**State B: Input Detected (e.g., User types "dirty sofa")**
* **Logic:** Detect keywords `['sofa', 'couch', 'upholstery', 'fabric']`.
* **Dynamic Render:**
    * **Headline:** "Upholstery Restoration Services"
    * **Component:** Show specific "Sofa Cleaning Pricing Card" + "Before/After Sofa Image".
    * **CTA:** "Get Sofa Quote" (Pre-fills the booking form subject line).

**State C: Input Detected (e.g., User types "office" or "building")**
* **Logic:** Detect keywords `['office', 'commercial', 'building', 'corporate']`.
* **Dynamic Render:**
    * **Headline:** "Commercial Facility Solutions"
    * **Component:** Show "Annual Contract Benefits" + "Client Logos (Banks/NGOs)".
    * **CTA:** "Request Site Visit".

---

## 4. Site Architecture (Sitemap)

| Page | Route | Key Features |
| :--- | :--- | :--- |
| **Home** | `/` | Generative Hero, Dynamic Service Grid, Trust Signals, Quick Contact. |
| **About Us** | `/about` | Company history, Team photos, Safety/Chemical standards. |
| **Services (Index)** | `/services` | Full catalog of all services (SEO Fallback). |
| **— Commercial** | `/services/commercial` | Focus on contracts, night shifts, facility management. |
| **— Residential** | `/services/residential` | Focus on deep cleaning, moving in/out. |
| **— Specialized** | `/services/specialized` | Sofa, Carpet, Water Tank, Marble Polishing. |
| **Portfolio** | `/portfolio` | **Must Have:** Interactive "Before/After" image sliders. |
| **Contact/Book** | `/book` | Multi-step wizard form (not a long static form). |

---

## 5. Component Specifications

### A. The Booking Wizard (Thumbtack Style)
Do not use a standard contact form with 10 fields. Use a **Step-by-Step UI**:
1.  **Step 1:** Select Service (Icons).
2.  **Step 2:** Select Property Type (Home vs Office).
3.  **Step 3:** Select Date Preference.
4.  **Step 4:** Contact Details.

### B. The Portfolio Slider
* **Tech Requirement:** A "Before/After" image comparison component (e.g., using `react-compare-image` or custom CSS slider).
* **Usage:** Showcase dirty carpets vs. clean carpets.

### C. Footer
* **SEO:** Must list physical address (Kathmandu), Phone, and Links to specific service pages (essential for crawling since the Home is dynamic).

---

## 6. SEO & Content Strategy
* **Target Keywords:** Cleaning services Kathmandu, Sofa cleaning Nepal, Office cleaners Lalitpur.
* **Local SEO:** Embed Google Maps on the Contact page.
* **Performance:** Images must be optimized (WebP) to ensure the heavy visual focus doesn't slow down the site on Nepali mobile data networks.

## 7. Competitor Reference
* *Royal Cleaning / Namaste Nepal Cleaning:* We need to look significantly more modern and tech-savvy than these.
* *ServiceFM:* Use their structure for the text content on the `/commercial` page.

---

## 8. Technical Stack Recommendation (Preferred)
* **Framework:** Next.js (React) - for SEO and fast rendering.
* **Styling:** Tailwind CSS - for rapid implementation of the clean "Thumbtack" layout.
* **Animation:** Framer Motion - for the smooth transition when the Hero changes state.
* **Icons:** Lucide React or Heroicons (Clean, thin lines).