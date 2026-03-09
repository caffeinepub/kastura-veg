# Kastura Veg

## Current State
Full restaurant website with: Navbar, Hero, HighlightsBar, MenuSection, AboutSection, ReviewsSection, ContactSection (reservation form), Footer, FloatingButtons. Swiggy link appears in the footer and menu section footnote only.

## Requested Changes (Diff)

### Add
- New `OrderOnlineSection` component with a prominent CTA banner to order via Swiggy, linking to Swiggy's search/restaurant page. Should be visually distinct and placed between MenuSection and AboutSection.
- Add "Order Online" nav link to the Navbar (desktop and mobile menus).

### Modify
- `App.tsx`: import and render `OrderOnlineSection` between `MenuSection` and `AboutSection`.
- `Navbar.tsx`: Add "Order Online" to the `navLinks` array pointing to `#order`.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/frontend/src/components/OrderOnlineSection.tsx` — a visually bold section with Swiggy ordering CTA, food delivery illustration/icons, and a direct link to Swiggy.
2. Update `App.tsx` to include the new section.
3. Update `Navbar.tsx` navLinks to include the Order Online link.
