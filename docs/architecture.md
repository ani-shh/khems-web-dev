# Architecture - Khems Cleaning Website

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 16 | Static export, routing, SEO |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Utility-first CSS |
| Animation | Framer Motion | Smooth transitions |
| Icons | Lucide React | Consistent iconography |
| Deployment | Docker + Traefik | Containerized, auto-SSL |

---

## Directory Structure

```
khems-web-dev/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx        # Services index
│   │   │   ├── commercial/
│   │   │   │   └── page.tsx
│   │   │   ├── residential/
│   │   │   │   └── page.tsx
│   │   │   └── specialized/
│   │   │       └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   └── book/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/                 # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Modal.tsx
│   │   │
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Container.tsx
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ServiceGrid.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── TrustSignals.tsx
│   │   │   └── CTABanner.tsx
│   │   │
│   │   └── forms/              # Form components
│   │       ├── BookingWizard.tsx
│   │       ├── ContactForm.tsx
│   │       └── SearchBar.tsx
│   │
│   ├── lib/                    # Utilities
│   │   ├── constants.ts        # Site config, nav links
│   │   ├── utils.ts            # Helper functions
│   │   └── cn.ts               # classnames utility
│   │
│   ├── types/                  # TypeScript types
│   │   └── index.ts
│   │
│   ├── data/                   # Static data
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   └── portfolio.ts
│   │
│   └── styles/                 # Global styles
│       └── globals.css
│
├── public/                     # Static assets
│   ├── images/
│   │   ├── logo.svg
│   │   ├── services/
│   │   ├── portfolio/
│   │   └── team/
│   └── favicon.ico
│
├── docs/                       # Project documentation
│   ├── style-guide.md
│   ├── design-guidelines.md
│   ├── todo.md
│   ├── architecture.md
│   └── deployment.md
│
├── nginx/                      # Nginx configs
│   └── static.conf
│
├── .brain/                     # AI session state
│
├── docker-compose.dev.yml      # Dev deployment
├── docker-compose.yml          # Prod deployment
├── Dockerfile                  # Container build
├── deploy.sh                   # Deploy script
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json
```

---

## Site Map

```
/                           # Homepage
├── /about                  # About Us
├── /services               # Services Index
│   ├── /services/commercial      # Commercial cleaning
│   ├── /services/residential     # Residential cleaning
│   └── /services/specialized     # Specialized services
├── /portfolio              # Work portfolio
└── /book                   # Booking wizard
```

---

## Component Hierarchy

### Page Layout
```
RootLayout
├── Header
│   ├── Logo
│   ├── NavLinks
│   └── CTAButton
├── {Page Content}
└── Footer
    ├── ContactInfo
    ├── ServiceLinks
    └── SocialLinks
```

### Homepage
```
HomePage
├── Hero
│   ├── SearchBar
│   └── DynamicContent (based on search state)
├── ServiceGrid
│   └── ServiceCard (×4)
├── TrustSignals
├── Testimonials
│   └── TestimonialCard (×n)
└── CTABanner
```

### Booking Page
```
BookingPage
└── BookingWizard
    ├── Step1_ServiceSelect
    ├── Step2_PropertyType
    ├── Step3_DatePicker
    └── Step4_ContactForm
```

---

## Data Flow

### Static Data
```
src/data/*.ts → Components → Static HTML (at build time)
```

### Generative Hero State
```
User Input → Keyword Detection → State Update → UI Re-render
     ↓
SearchBar.tsx → useHeroState() hook → Hero.tsx
```

### Form Submission
```
User fills form → Validation → Submit to external service
                                    ↓
                          (Formspree / Custom API)
```

---

## Build & Deploy Flow

```
1. npm run build
   └── Next.js compiles to static HTML/CSS/JS in /out

2. docker compose build
   └── Creates nginx:alpine container with /out contents

3. docker compose up -d
   └── Starts container, Traefik routes traffic

4. Traefik handles:
   └── SSL termination (Let's Encrypt)
   └── HTTP → HTTPS redirect
   └── Domain routing
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout, fonts, metadata |
| `src/app/page.tsx` | Homepage |
| `src/lib/constants.ts` | Site config, nav links, keywords |
| `src/types/index.ts` | TypeScript interfaces |
| `src/data/services.ts` | Service data |
| `next.config.ts` | Static export settings |
| `deploy.sh` | Deployment automation |

---

## Environment Variables

Currently none required (static site).

Future additions:
```env
# If adding form submission
NEXT_PUBLIC_FORM_ENDPOINT=
NEXT_PUBLIC_GA_ID=
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Time to Interactive | <3.0s |
| Cumulative Layout Shift | <0.1 |
| Lighthouse Score | 90+ |
