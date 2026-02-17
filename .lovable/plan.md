

# Homepage Enhancements Plan

## Summary
This plan covers 5 key improvements: adding FAQ and Testimonials sections, fixing bold floating icons, adding a WhatsApp button, fixing mobile font sizes, and improving vertical spacing.

---

## 1. Add Testimonials Section

A `Testimonials.tsx` component already exists but is **not used** in the homepage. It will be added to `App.tsx` in the `HomePage` component, placed after `Partnerships` and before `CTASection`.

The existing component is well-designed with star ratings, quote icons, and profile images. No changes needed to its design.

---

## 2. Create FAQ Section

A new `FAQ.tsx` component will be created with:
- **Background**: Navy-to-red gradient overlay with a low-opacity business image (matching the "Take Action Today" CTA section style)
- **Floating animated icons** at low opacity (matching existing pattern)
- **Grid pattern** overlay for visual depth
- **Accordion-style** FAQ items that expand/collapse on click
- **Scroll-triggered animations** (consistent with all other sections)
- **Content**: 6-8 common questions about BuildWell Africa's services (real estate, construction, import/export, partnerships, etc.)

Will be placed after Testimonials and before CTASection in the homepage.

---

## 3. Fix Bold Floating Icons

The Hero section has floating service icons (HardHat, Ship, Home, Landmark, Truck, Warehouse, Briefcase) with `opacity-10` and some with `opacity-8`. The issue is:
- `opacity-8` is not a valid Tailwind class (Tailwind uses `opacity-5`, `opacity-10`, etc.)
- Some icons appear too prominent on mobile

**Fix**: Change all floating icon opacities to `opacity-[0.06]` (matching the AboutUs section pattern) so they sit softly in the background.

---

## 4. Add WhatsApp Floating Button

A new `WhatsAppButton.tsx` component will be created:
- Fixed position at bottom-right corner of the screen
- Green WhatsApp-branded circular button
- WhatsApp SVG icon (since lucide-react doesn't have a WhatsApp icon)
- Links to `https://wa.me/PHONE_NUMBER` (placeholder for client's number)
- Subtle pulse animation to draw attention
- `z-50` to stay above all content
- Hover scale effect

Will be added to `App.tsx` at the root level (inside `BrowserRouter`, outside `Routes`) so it appears on all pages.

---

## 5. Fix Mobile Font Sizes

Multiple sections use `text-5xl md:text-6xl` for headings, which is too large on small screens (390px wide). Changes:

| Component | Current | Fixed |
|-----------|---------|-------|
| Hero h1 | `text-5xl md:text-6xl lg:text-7xl` | `text-3xl sm:text-4xl md:text-6xl lg:text-7xl` |
| AboutUs h2 | `text-5xl md:text-6xl` | `text-3xl sm:text-4xl md:text-6xl` |
| Services h2 | `text-5xl md:text-6xl` | `text-3xl sm:text-4xl md:text-6xl` |
| WhyChooseUs h2 | `text-5xl md:text-6xl` | `text-3xl sm:text-4xl md:text-6xl` |
| OurApproach h2 | `text-5xl md:text-6xl` | `text-3xl sm:text-4xl md:text-6xl` |
| Partnerships h2 | `text-5xl md:text-6xl` | `text-3xl sm:text-4xl md:text-6xl` |
| CTASection h2 | `text-5xl md:text-6xl lg:text-7xl` | `text-3xl sm:text-4xl md:text-6xl lg:text-7xl` |
| Contact h2 | `text-5xl md:text-6xl` | `text-3xl sm:text-4xl md:text-6xl` |

Sub-headings (`text-4xl`) will be reduced to `text-2xl md:text-4xl` on mobile.

---

## 6. Fix Vertical Spacing

- Reduce `mb-20` to `mb-12` on mobile for section headers
- Reduce `py-24` to `py-16 md:py-24` on sections for tighter mobile spacing
- Add proper `gap` values on mobile grid layouts
- Ensure floating icons are hidden on very small screens (`hidden sm:block`) to prevent overlap with text

---

## Technical Details

### Files to Create
- `src/components/FAQ.tsx` - New FAQ section with gradient background
- `src/components/WhatsAppButton.tsx` - Fixed floating WhatsApp button

### Files to Modify
- `src/App.tsx` - Add Testimonials, FAQ, WhatsAppButton imports and placement
- `src/components/Hero.tsx` - Fix icon opacities, reduce mobile font sizes, hide some floating icons on mobile
- `src/components/AboutUs.tsx` - Reduce mobile heading sizes and spacing
- `src/components/Services.tsx` - Reduce mobile heading sizes and spacing
- `src/components/WhyChooseUs.tsx` - Reduce mobile heading sizes and spacing
- `src/components/OurApproach.tsx` - Reduce mobile heading sizes and spacing
- `src/components/Partnerships.tsx` - Reduce mobile heading sizes and spacing
- `src/components/CTASection.tsx` - Reduce mobile heading sizes and spacing
- `src/components/Contact.tsx` - Reduce mobile heading sizes and spacing

### Homepage Section Order (after changes)
1. Hero
2. About Us
3. Services
4. Why Choose Us
5. Our Approach
6. Partnerships
7. **Testimonials** (added)
8. **FAQ** (added)
9. CTA Section
10. Contact
11. Footer

