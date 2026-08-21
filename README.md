# Neil Chakrabarty Consulting — website

Static, dependency-free site package. No build step: open `index.html`, or serve
the folder from any static host (GitHub Pages, Netlify, Cloudflare Pages, S3).

```
index.html        Entry point — meta, favicons, stylesheet, screen manifest
styles.css        The whole design library in one file (tokens, base, utilities)
components/       core · forms · layout · content — the design system
screens/          About · Services · CaseStudies · CaseStudy · Contact · App
assets/           Logo SVGs and favicons
.nojekyll         Lets GitHub Pages serve the folder verbatim
```

## Deploy to GitHub Pages

Commit this folder, then in **Settings → Pages** choose the branch and either
`/ (root)` (if these files sit at the repository root) or `/docs` (rename the
folder to `docs`).

## How it renders

Screens are React components compiled in the browser by Babel standalone —
fine for a prototype or a small brochure site, and it means there is no
toolchain to maintain. **Before this carries real traffic**, precompile: run the
JSX through esbuild or Vite and drop the Babel script. Everything else (CSS,
assets, markup) is already production-shaped.

## Responsive

Type and air are fluid via `clamp()`; column counts fold through `.cols`,
`.split`, `.svc-row`, `.site-nav` and `.cta-row` container queries in
`styles.css`. Checked at 390, 768 and 1280.

## Before it goes live

- Every client name, quote, figure and case study is a **placeholder**.
- No photography: `ImageSlot` marks each position and names what belongs there.
- Archivo loads from Google Fonts. Self-host if you would rather not call out.
- The contact form has no backend — wire `onSubmit` in `screens/Contact.jsx`.
