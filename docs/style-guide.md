# Style Guide - Khems Cleaning Website

## Brand Identity

**Vibe:** Modern, Tech-Enabled, Trustworthy, Spotless

---

## Colors

### Primary Palette
```css
--color-primary: #0D9488;       /* Teal - from Khems logo */
--color-primary-dark: #0F766E;  /* Darker teal for hover */
--color-primary-light: #14B8A6; /* Lighter teal for accents */
```

### Neutral Palette
```css
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;       /* Page backgrounds */
--color-gray-100: #F3F4F6;      /* Card backgrounds */
--color-gray-200: #E5E7EB;      /* Borders */
--color-gray-400: #9CA3AF;      /* Muted text */
--color-gray-600: #4B5563;      /* Secondary text */
--color-gray-900: #111827;      /* Primary text */
```

### Semantic Colors
```css
--color-success: #10B981;       /* Green - confirmations */
--color-warning: #F59E0B;       /* Amber - alerts */
--color-error: #EF4444;         /* Red - errors */
```

---

## Typography

### Font Family
- **Primary:** Inter (Google Fonts)
- **Fallback:** system-ui, -apple-system, sans-serif

### Font Sizes (Tailwind)
| Use Case | Class | Size |
|----------|-------|------|
| Hero Title | `text-4xl md:text-5xl lg:text-6xl` | 36px / 48px / 60px |
| Section Title | `text-3xl md:text-4xl` | 30px / 36px |
| Card Title | `text-xl md:text-2xl` | 20px / 24px |
| Body | `text-base` | 16px |
| Small | `text-sm` | 14px |
| Caption | `text-xs` | 12px |

### Font Weights
- **Bold:** `font-bold` (700) - Headlines
- **Semibold:** `font-semibold` (600) - Subheadings, buttons
- **Medium:** `font-medium` (500) - Labels, nav links
- **Regular:** `font-normal` (400) - Body text

---

## Spacing

### Consistent Scale (Tailwind)
| Token | Value | Use Case |
|-------|-------|----------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Icon gaps, inline spacing |
| `space-4` | 16px | Card padding, list gaps |
| `space-6` | 24px | Section gaps |
| `space-8` | 32px | Component spacing |
| `space-12` | 48px | Section padding |
| `space-16` | 64px | Large section gaps |
| `space-24` | 96px | Hero padding |

---

## Components

### Cards
```css
/* Base card style */
.card {
  background: white;
  border-radius: 16px;           /* rounded-2xl */
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);  /* shadow-sm */
  padding: 24px;                 /* p-6 */
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* shadow-md */
  transform: translateY(-2px);
}
```

**Tailwind:**
```html
<div class="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
```

### Buttons

**Primary Button:**
```html
<button class="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
  Book Now
</button>
```

**Secondary Button:**
```html
<button class="border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
  Learn More
</button>
```

### Input Fields
```html
<input class="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
```

---

## Shadows

| Level | Tailwind | Use Case |
|-------|----------|----------|
| None | `shadow-none` | Flat elements |
| Small | `shadow-sm` | Cards at rest |
| Medium | `shadow-md` | Cards on hover, dropdowns |
| Large | `shadow-lg` | Modals, popovers |

---

## Border Radius

| Size | Tailwind | Use Case |
|------|----------|----------|
| Small | `rounded-lg` (8px) | Input fields, small cards |
| Medium | `rounded-xl` (12px) | Buttons, tags |
| Large | `rounded-2xl` (16px) | Cards, containers |
| Full | `rounded-full` | Pills, avatars, CTAs |

---

## Icons

**Library:** Lucide React
**Style:** Thin line icons (stroke-width: 1.5-2)
**Sizes:**
- Small: 16px (`w-4 h-4`)
- Default: 20px (`w-5 h-5`)
- Large: 24px (`w-6 h-6`)
- Hero: 32px+ (`w-8 h-8`)

---

## Animation

**Library:** Framer Motion

### Standard Transitions
```javascript
// Fade in
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.3 }}

// Slide up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}

// Scale
whileHover={{ scale: 1.02 }}
transition={{ type: "spring", stiffness: 300 }}
```

### Timing
- **Fast:** 150ms - Hovers, toggles
- **Normal:** 300ms - Most transitions
- **Slow:** 500ms - Page transitions, hero changes

---

## Responsive Breakpoints

| Breakpoint | Min Width | Use Case |
|------------|-----------|----------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

**Mobile-first approach:** Design for mobile, enhance for larger screens.

---

## Do's and Don'ts

### Do
- Use plenty of whitespace
- Keep cards clean and minimal
- Use soft shadows
- Maintain consistent spacing
- Use teal sparingly for CTAs

### Don't
- Use dark backgrounds (keep it light)
- Overcrowd with elements
- Use harsh shadows
- Mix too many colors
- Use generic stock photos
