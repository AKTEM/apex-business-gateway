# Add "Clients We Have Served" Section

A new creative, animated section showcasing the sectors Akilina has served, plus a continuously scrolling logo carousel with manual navigation arrows.

## Placement
Insert after `<WhyChooseAkilina />` and before `<About />` in `src/App.tsx`.

## Section Structure

**1. Header block** (matches existing section style)
- Red accent bar + uppercase kicker: "Trusted Partners"
- H2: "Clients We Have Served"
- Short intro paragraph

**2. Sector cards** (5 cards in a responsive grid: 1 col mobile → 2 → 3 → 5)
Each card has a Lucide icon, sector title, and one-line description:
- Energy & Renewables — Zap icon — solar, power generation, clean energy
- Chemicals & Additives — FlaskConical icon — industrial chemicals, specialty additives, raw materials
- Pharmaceuticals — Pill icon — regulated pharma imports, NAFDAC-coordinated clearance
- Technology & Equipment — Cpu icon — hardware, appliances, industrial equipment
- Investment & Trading — TrendingUp icon — international commodity and trading firms

Cards animate in on scroll (using existing `useInView` hook), with brand-red icon glow and hover lift.

**3. Logo carousel** (the highlight)
- 5 placeholder client logos in a single horizontal straight-line row
- Continuous auto-scroll animation (CSS keyframe marquee, ~25s linear infinite loop)
- Logos duplicated in the track so the loop is seamless
- Pause on hover
- Two circular directional arrow buttons (left/right) floating over the rail; clicking nudges the track by one logo width (toggles autoplay off briefly)
- Subtle gradient fade masks on the left/right edges so logos elegantly fade in/out
- Each placeholder logo = a clean rounded card with a monogram + faux company name in muted brand-styled typography (no fake real brands)

## Visual Treatment
- Background: light gray / dark `brand-dark-3` to differentiate from neighboring sections
- Floating soft red blur orb in background corner for depth (consistent with site)
- Carousel rail: white/dark cards with subtle border, grayscale logos that color up slightly on hover
- Use existing animation utilities (`fade-up`, `float`, `border-glow`) where natural; add one new `marquee` keyframe in `tailwind.config.js`

## Files to Create / Edit

```text
src/components/ClientsServed.tsx      NEW — section + sector cards + logo carousel
src/App.tsx                           edit — mount <ClientsServed /> after WhyChooseAkilina
tailwind.config.js                    edit — add `marquee` keyframe + animation
```

No backend, no new dependencies (icons via `lucide-react` already used; logos are inline SVG placeholders).

## Technical Notes
- Marquee implemented as a flex track with `animate-marquee` translating `-50%` on X; track contains the logo list rendered twice for seamless looping.
- Arrows use `useRef` on the track and apply a temporary `transform: translateX(±offset)` with a CSS transition while the marquee animation is paused, then resumes.
- All colors via existing `brand-*` tokens — no hardcoded hex in the component.
- Fully responsive; carousel height ~120px, sector cards stack cleanly on mobile.
