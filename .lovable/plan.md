# Meet the Team Section

Add a new "Meet the Team" subsection at the bottom of the About Us page (just before the Footer), featuring the 3 partners in a polished 3-column card grid that matches the existing premium glass-card aesthetic.

## What gets built

A new component `src/components/MeetTheTeam.tsx` rendered inside `src/pages/About.tsx` after `<AboutSection />`.

### Section structure
- Eyebrow label: "Our Leadership" (uppercase, primary color, tracked) — matches existing About section style
- Heading: "Meet the Team"
- Short intro line: "Experienced partners leading Tax Assist Solutions with deep expertise across tax, audit, and advisory."
- 3-column responsive grid (1 col on mobile, 2 on tablet, 3 on desktop)

### Each team card contains
- Square portrait placeholder at top (gradient background with a user-silhouette icon, ready for real photos later) with subtle border and rounded corners
- Name (e.g. "Temitope Omotayo")
- Credentials line, muted (e.g. "FCA, MBA, MSc.")
- Role badge ("Partner") using the brand red/blue gradient
- Short 2–3 line preview bio
- "Read full profile" button that opens a modal/dialog showing the full bio

### Full-profile dialog
Uses the existing shadcn `Dialog` component. Shows the larger portrait, name, credentials, role, and the complete bio text the user provided, formatted into readable paragraphs with comfortable line-height. Scrollable on mobile.

### Image placeholders
Each card uses a placeholder div sized as a 1:1 square (e.g. `aspect-square`) with:
- Gradient background using existing `--gradient-red-blue` token at low opacity
- Centered Lucide `User` icon
- A small caption "Photo coming soon"

The component will accept an optional `photo` field per team member so the user can later just drop image imports into the data array — no structural change needed.

### Animation & styling
- Reuse the `AnimatedCard` reveal pattern from `AboutSection.tsx` (framer-motion fade-up, staggered delay per card)
- `glass-card` styling, hover lift (`whileHover y: -8`)
- All colors via semantic tokens (no hardcoded hex)
- Font: existing Poppins from index.css

## Files

- **Create** `src/components/MeetTheTeam.tsx` — the section + dialog
- **Edit** `src/pages/About.tsx` — import and render `<MeetTheTeam />` between `<AboutSection />` and `<Footer />`

No routing changes, no new dependencies (Dialog and framer-motion already in project).
