# Design Brief

## Tone
Luxury boutique meets handmade craftsmanship. Refined minimalism with deliberate warmth, gallery-like curation, unhurried premium aesthetic.

## Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| Primary (terracotta) | `0.58 0.18 35` | Premium action, warmth, heritage |
| Secondary (sage) | `0.64 0.13 150` | Natural, calming support, accents |
| Accent (cream) | `0.95 0.08 90` | Highlights, interactive touches |
| Muted (beige) | `0.88 0.06 85` | Section dividers, soft backgrounds |
| Destructive (warm red) | `0.55 0.18 25` | Actions, warm-toned alerts |
| Background | `0.99 0.02 90` | Off-white with warmth |
| Foreground | `0.2 0 0` | Deep charcoal, readable |

## Typography
- **Display**: Fraunces (editorial serif, premium, elegant)
- **Body**: DM Sans (warm, approachable, refined)
- **Mono**: JetBrains Mono (product specs, details)

## Structural Zones

| Zone | Background | Border | Purpose |
|------|-----------|--------|---------|
| Header | `bg-background` | `border-muted` | Navigation, sticky, warm cream |
| Hero | `bg-background` | None | Clean entry, breathing room |
| Content cards | `bg-card` | `border-border` | Product tiles, minimal lift |
| Section alt | `bg-muted/10` | None | Rhythm, warm beige rhythm |
| Footer | `bg-muted/5` | `border-t border-muted` | Closing, soft warm grounding |

## Shape Language
- **Radius**: `0.625rem` (soft, approachable, not rigid)
- **Spacing**: Generous vertical rhythm, card padding 1.5rem–2rem
- **Shadows**: Subtle lift via `shadow-elevated` on hover, never harsh

## Component Patterns
- **Product cards**: `hover-lift` class for interactive feedback
- **CTAs**: Primary color (`bg-primary text-primary-foreground`) with `transition-smooth`
- **Forms**: Warm input (`bg-input border-border`) with focus ring in primary
- **Navigation**: Semantic tokens, hover underline in secondary

## Motion
- **Transition default**: `0.3s cubic-bezier(0.4, 0, 0.2, 1)` (smooth deceleration)
- **Keyframes**: `fade-in` (0.4s), `slide-up` (0.5s), `float` (3s ambient)
- **Philosophy**: Animations support storytelling, never distract

## Aesthetic
Minimal but warm. Editorial imagery drives emotional connection. No dark mode. Whitespace is content. Every interaction whispers. Premium without pretension.

## Responsive
Mobile-first (`sm:`, `md:`, `lg:` breakpoints). Generous gutters on mobile, expanding to 2rem padding on desktop. Touch targets ≥44px.

## Differentiation
Warm earthy palette (not cool blues). Serif display font (editorial heritage). Generous breathing space. Handmade product imagery drives aesthetic. Soft rounded corners and subtle shadows create approachability.
