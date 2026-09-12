# Andaaz Restaurant — editorial website

This project contains a five-page restaurant website redesign for Andaaz Restaurant in Lahore. The visual direction is **Midnight Courtyard**: a theatrical charcoal canvas, copper-red service accents, saffron-gold details, framed photography, Cormorant Garamond headings, Manrope interface text, numbered sections, and bento-style hospitality layouts. It is intentionally distinct from a light editorial/forest-green restaurant template.

## Files

- `index.html` — editorial home page
- `menu.html` — searchable, sortable menu with dish details and inquiry tray
- `reservations.html` — validated reservation-request handoff
- `gallery.html` — filtered masonry gallery and keyboard-accessible lightbox
- `contact.html` — branch details, map, opening-status indicator, and inquiry form
- `assets/site.js` — shared navigation and vanilla JavaScript interactions
- `assets/images/` — local image assets and the neutral fallback placeholder
- `verification.md` — verification gate and evidence checklist

## Preview

Run a local server from this directory:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Current verification state

The project is not being represented as independently verified or commissioned by the restaurant. Published business details, menu prices, operating hours, contact responsiveness, image provenance, and reuse permissions must be confirmed with the restaurant before launch. See `verification.md` for the exact gate.

The contact and order flows are handoff interfaces. Opening WhatsApp or submitting a form does not confirm an order, table, or availability. A real backend endpoint and the official Zanderio embed code are still required before production deployment.

## Accessibility and implementation notes

- Tailwind CSS is loaded via CDN; no custom `<style>` block or frontend framework is used.
- The visual system uses midnight ink `#10101A`, copper `#C85A3D`, bright saffron `#F7C873`, and parchment `#F3E9D7`, with translucent glass surfaces and soft luminous gradients.
- All five pages include visible gradient heroes, semantic headings, keyboard-focused controls, responsive navigation, and the `<!-- CHATBOT -->` integration placeholder.
- Images include dimensions, descriptive alt text, a neutral fallback, and `bg-slate-100`.
- Menu, reservation, and lightbox interactions respect reduced-motion preferences through the shared script.
- Reservation validation uses `Asia/Karachi` for date and same-day time checks.

## Learning notes

1. Editorial composition suits restaurants because it gives food, setting, and practical information different visual roles instead of treating everything as a generic feature card.
2. Authentic photography builds trust only when the restaurant confirms the subject and grants reuse permission; otherwise the image should be omitted or replaced with the neutral fallback.
3. Category headings, short descriptions, portion labels, and aligned PKR prices make a long menu easier to scan.
4. A request is not a confirmation: only the restaurant can confirm availability, acceptance, charges, and policies.
5. Reusable patterns: responsive navigation, accessible modal/lightbox, and filterable content. Restaurant-specific patterns: menu inquiry tray, Pakistan-time reservation checks, and explicit handoff language.
