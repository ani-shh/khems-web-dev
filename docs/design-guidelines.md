# Design Guidelines - Khems Cleaning Website

## Design Philosophy

### "Thumbtack Meets ServiceFM"

We're building a hybrid platform that combines:

1. **Thumbtack (B2C):** Visual interaction, clean layouts, search-centric UX
2. **ServiceFM (B2B):** Corporate reliability, detailed protocols, trust signals

---

## Inspirations

### Thumbtack (Primary)
- **URL:** https://www.thumbtack.com/
- **What to Copy:**
  - Pill-shaped search bar as hero focus
  - Card-based service grid
  - Clean whitespace
  - Subtle hover animations
  - Step-by-step booking flow

### ServiceFM (Secondary)
- **URL:** https://servicefm.com.au/
- **What to Copy:**
  - Commercial service content structure
  - Trust signals and certifications
  - Detailed service descriptions
  - Client logo sections

---

## Key UI Patterns

### 1. Generative Chat Hero
The homepage hero is NOT a static slider. It's an **intent-based interface**.

**How it works:**
- Central pill-shaped search bar
- User types query (e.g., "sofa cleaning")
- Content below dynamically updates based on keywords
- Smooth Framer Motion transitions between states

**States:**
| State | Trigger Keywords | Content Shown |
|-------|------------------|---------------|
| Default | (empty) | Popular Services grid |
| Sofa | sofa, couch, upholstery | Sofa cleaning card + pricing |
| Commercial | office, building, corporate | Contract benefits + client logos |
| Residential | home, house, apartment | Deep cleaning packages |
| Tank | water tank, overhead | Tank cleaning info |

### 2. Service Cards
- White background
- Rounded corners (16px)
- Soft shadow
- Icon + Title + Short description
- Hover lift effect
- Clear CTA

### 3. Booking Wizard
Multi-step form (NOT a long single form):
1. Select Service (icon grid)
2. Select Property Type (Home/Office)
3. Select Date
4. Contact Details

Each step = one screen with progress indicator.

### 4. Before/After Sliders
- Draggable comparison slider
- Shows transformation clearly
- Used in Portfolio page
- Mobile-friendly touch support

---

## Layout Principles

### Whitespace
- Generous padding around sections
- Cards should breathe
- Don't overcrowd

### Grid System
- 12-column grid on desktop
- Service cards: 4 per row (desktop), 2 (tablet), 1 (mobile)
- Max content width: 1280px
- Side padding: 16px (mobile), 24px (tablet), 32px (desktop)

### Visual Hierarchy
1. **Primary:** Hero search bar, main CTAs
2. **Secondary:** Section titles, service cards
3. **Tertiary:** Supporting text, footer links

---

## Imagery Guidelines

### Photography Style
- **Authentic:** Real Nepali staff in uniforms
- **Action shots:** People cleaning, working
- **Before/After:** Show transformation
- **Avoid:** Generic stock photos, Western faces

### Image Optimization
- Format: WebP (with JPEG fallback)
- Max width: 1920px for hero, 800px for cards
- Lazy loading for below-fold images
- Compress to <100KB per image

---

## Mobile-First Approach

### Priority on Mobile
1. Search/booking access
2. Phone number (tap to call)
3. Service overview
4. Trust signals

### Touch Targets
- Minimum 44x44px for buttons
- Adequate spacing between tap targets
- No hover-only interactions

### Performance
- Target: <3s load on 3G
- Critical CSS inlined
- Images lazy-loaded
- Minimal JavaScript

---

## Trust Signals

### Include These
- Years in business
- Number of clients served
- Client testimonials (with photos)
- Client logos (banks, NGOs, corporations)
- Certifications/training badges
- Google reviews widget
- Physical address + map

### Placement
- Hero section: Quick stats
- Below fold: Detailed testimonials
- Footer: Address, certifications

---

## Accessibility

### Requirements
- Color contrast: WCAG AA (4.5:1 minimum)
- Alt text on all images
- Keyboard navigable
- Focus states visible
- Semantic HTML

### Testing
- Screen reader compatible
- Works without JavaScript (basic content)
- Tested on actual mobile devices

---

## Competitor Differentiation

| Competitor | Their Weakness | Our Advantage |
|------------|----------------|---------------|
| Royal Cleaning | Outdated design | Modern, tech-forward |
| Namaste Nepal | Basic functionality | Interactive hero, smooth UX |
| Local sites | Stock photos | Authentic Nepali imagery |

**Goal:** Look like a tech startup, not a traditional cleaning company.

---

## Quick Reference

### Always Do
- Keep it clean and minimal
- Use the teal color for primary actions only
- Add subtle animations
- Test on mobile first
- Use authentic photography

### Never Do
- Dark mode or dark backgrounds
- Cluttered layouts
- Generic stock images
- Auto-playing videos
- Aggressive popups
