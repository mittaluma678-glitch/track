---
name: NutriTrack
colors:
  surface: '#101413'
  surface-dim: '#101413'
  surface-bright: '#363a39'
  surface-container-lowest: '#0b0f0e'
  surface-container-low: '#181c1b'
  surface-container: '#1c201f'
  surface-container-high: '#272b2a'
  surface-container-highest: '#323634'
  on-surface: '#e0e3e1'
  on-surface-variant: '#c2cab0'
  inverse-surface: '#e0e3e1'
  inverse-on-surface: '#2d3130'
  outline: '#8c947c'
  outline-variant: '#424936'
  surface-tint: '#98da27'
  primary: '#ccff80'
  on-primary: '#213600'
  primary-container: '#a3e635'
  on-primary-container: '#416400'
  inverse-primary: '#446900'
  secondary: '#45dfa4'
  on-secondary: '#003825'
  secondary-container: '#00bd85'
  on-secondary-container: '#00452e'
  tertiary: '#ffecd9'
  on-tertiary: '#472a00'
  tertiary-container: '#ffc989'
  on-tertiary-container: '#805000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b2f746'
  primary-fixed-dim: '#98da27'
  on-primary-fixed: '#121f00'
  on-primary-fixed-variant: '#334f00'
  secondary-fixed: '#68fcbf'
  secondary-fixed-dim: '#45dfa4'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#101413'
  on-background: '#e0e3e1'
  surface-variant: '#323634'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '800'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.4rem
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.75rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-performance wellness environment engineered specifically for university and hostel students balancing academic stress, irregular schedules, and budget constraints. The identity rejects sterile clinical tracking in favor of a vibrant, low-fatigue dark interface that feels like a focused digital sanctuary during late-night study sessions or early morning routines.

The aesthetic fuses modern dark minimalism with targeted tactical glassmorphism and luminescent data accents. Deep moss-charcoal canvas layers prevent eye strain, while concentrated hits of bio-luminescent lime, emerald, and energetic amber celebrate small daily wins without judgment. The visual tone balances nutritional precision with an approachable, collegiate optimism—empowering students to build micro-habits rather than obsess over punitive metrics.

## Colors

The palette employs an organic dark hierarchy derived from nocturnal forest tones, paired with energetic bio-fluorescent indicators:

- **Canvas & Surface Tiering:**
  - Base Canvas (`#0B0F0E`): Ultra-deep charcoal with cold green undertones; prevents OLED battery drain and night-time glare.
  - Surface Card (`#18211E`): Grounded secondary background for primary dashboard tiles.
  - Elevated Surface (`#1F2C27`): Tertiary layer for interactive modules, modals, and hover projections.
  - Structural Stroke (`#273832`): Subtle perimeter border framing elements against low-light contrast falloff.

- **Data & Accent System:**
  - Primary Lime (`#A3E635`): High-energy caloric balance, core action triggers, and habit completions.
  - Emerald / Teal (`#34D399`): Recovery metrics, water intake, and sustainable long-term streaks.
  - Solar Amber (`#F59E0B`): Micronutrient alerts, pending tasks, fasting windows, and high-burn study sessions.
  - Sky Cyan (`#38BDF8`): Hydration tracking and mental wellness check-ins.

- **Typography & Content Hierarchy:**
  - High-Emphasis Content (`#F5F7F6`): Crisp porcelain off-white, free of blinding pure-white glare.
  - Medium-Emphasis Content (`#A7B3AE`): Soft sage-grey ensuring legible metadata without pulling focal weight.
  - Low-Emphasis & Disabled (`#4E5F57`): Subdued moss tone for placeholders, inactive tracks, and inactive days.

## Typography

Typography relies on **Plus Jakarta Sans** across all roles to achieve a contemporary, rounded grotesque feel that balances geometric discipline with friendly approachability.

- **Numerics and Macros:** Metric readouts and calorie counts utilize tabular figures (`font-feature-settings: "tnum"`) with bold weights (700/800) to maintain uniform width during real-time streak counting and budget tallies.
- **Labels & Badges:** `label-md` and `label-sm` employ uppercase transformations paired with generous tracking (+0.04em to +0.06em) to provide high-legibility status markers even at small scale on mobile viewports.
- **Hierarchy Management:** Never use heavy font weights for large paragraphs; long-form dietary notes and recommendations must remain at `body-md` regular weight to preserve effortless scanning.

## Layout & Spacing

The layout is built on a responsive 12-column dynamic fluid grid for desktop and tablet screens, transitioning to an ergonomic single-column card flow on mobile devices.

- **Grid Architecture:**
  - **Desktop (≥1024px):** 12 columns with `1.75rem` gutters and max-width containers centered at `1280px`. Left-hand persistent navigation rail; right-hand auxiliary telemetry pane for daily hydration and quick nutrient ingestion logs.
  - **Tablet (768px - 1023px):** 8 columns with `1.25rem` gutters; sidebar folds into an off-canvas drawer or top persistent action bar.
  - **Mobile (<768px):** 4 columns or pure single-stack module layouts with full-width horizontal-scroll macro rings and touch-first thumb zones. Outer safe margin of `1rem`.

- **Density & Padding:** 
  Component spacing employs an 8-point rhythmic step (`space-xs` through `space-xl`). Card internal padding standardizes on `1.25rem` to `1.5rem` to keep content dense yet distinct, catering to rapid hostel-room grocery logging and quick daily check-ins.

## Elevation & Depth

Visual depth is achieved through a combination of **tonal surface stepping**, **whisper-thin low-contrast outlines**, and **controlled luminescent light bleeding**. Heavy, muddy drop shadows are strictly avoided.

1. **Level 0 (Canvas Base):** Ground color `#0B0F0E`. Zero elevation, non-interactive foundation.
2. **Level 1 (Card & Module Layer):** Surface `#18211E` with a 1px uniform outline of `#273832`. No ambient shadow is applied by default, sustaining a tight, architectural appearance.
3. **Level 2 (Active & Floating Components):** Surface `#1F2C27`, outline of `#34D399` at 20% alpha, with an ambient shadow: `0 8px 24px -4px rgba(0, 0, 0, 0.5)`.
4. **Level 3 (Modals & Focus Flyouts):** Solid elevated fill `#1F2C27` backed by a 16px blur backdrop filter (`rgba(11, 15, 14, 0.75)`).
5. **Bioluminescent Glow:** Interactive milestones, completed habit rings, and current streak indicators cast a soft directional radiance: `0 0 20px -2px rgba(163, 230, 53, 0.25)`.

## Shapes

The design system employs a **Rounded** (Level 2) baseline curvature that balances ergonomic friendliness with clean dashboard precision.

- **Base Radii:** Default UI components (buttons, text inputs, checklist items) feature `0.5rem` (8px) corner curvature.
- **Card Containers (`rounded-lg`):** Main metric panels and modal dialogs use `1rem` (16px) corner rounding to soften card boundaries without sacrificing interior screen real estate.
- **Hero Modules (`rounded-xl`):** Primary daily overview cards and banner sections use `1.5rem` (24px) rounding.
- **Pills & Circular Badges:** Habit tags, dietary macro badges, progress rings, and floating action buttons (FABs) utilize a continuous pill curvature (`9999px`) to immediately convey tapability and organic liveliness.

## Components

### Buttons
- **Primary Action:** Solid background in `#A3E635` with charcoal text (`#0B0F0E`), font-weight 700. Hover applies subtle scaling (`scale(1.02)`) and activates the primary lime luminescent glow.
- **Secondary Action:** Transparent fill, `#273832` border, and crisp off-white text (`#F5F7F6`). Hover shifts the border to `#34D399` at 50% opacity and background to `#1F2C27`.
- **Tertiary / Ghost:** No border, text in `#A7B3AE`. Hover shifts text color to `#A3E635`.

### Progress Rings & Streak Badges
- **Glowing Rings:** Dual-layer circular SVG tracks. Background track uses `#1F2C27`; foreground fill uses smooth gradient stops (`#34D399` to `#A3E635`) terminated with rounded caps. Active streaks radiate a subtle drop-shadow filter matching the primary accent.
- **Streak Badges:** Pill-shaped enclosures with an amber flame or lightning glyph, `#F59E0B` text on top of an amber-tinted surface (`rgba(245, 158, 11, 0.1)`), bordered by a 1px ring (`rgba(245, 158, 11, 0.2)`).

### Habit Checklists
- Items render on `#18211E` horizontal cards. Checkbox target sits at a minimum 44x44px touch perimeter.
- Checked state transitions text to `#A7B3AE` with strike-through styling, while the checkbox fills with `#34D399` displaying a crisp dark micro-checkmark.

### Nutrition Data Pills
- Compact horizontally arranged capsules displaying macronutrient data (Protein, Carbs, Fats).
- Surface `#1F2C27` with 1px border `#273832`. Left-aligned color indicator micro-dot (Cyan for hydration, Lime for protein, Amber for carbs, Teal for healthy fats) followed by value in `#F5F7F6` and nutrient label in `#A7B3AE`.

### Input Fields & Search Bars
- Background `#18211E` with a 1px border of `#273832` and text in `#F5F7F6`. Placeholder text in `#4E5F57`.
- Focus state switches the border to `#A3E635` and casts a soft 2px focus halo (`rgba(163, 230, 53, 0.15)`), retaining input clarity without jarring screen shifts.