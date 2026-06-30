# Abhijeet Pal — Portfolio

A personal engineering portfolio built as a single, fast, statically-rendered page. The design treats the site like a precise spec sheet — Geist Sans for editorial headings, Geist Mono for instrument-style labels, a light-first neutral palette, and one muted emerald accent reserved for "verified / live / healthy" signals.

**Stack:** Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS · Framer Motion · next-themes · Lucide · Geist font.

---

## Quick start

Prerequisites: **Node.js 18.18+** (developed on Node 22) and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build (also type-checks)
npm run start    # serve the production build
```

The home route, `sitemap.xml`, and `robots.txt` are all prerendered as static content.

---

## Editing your content

Almost everything you'll want to change lives in two files — no component edits required.

| What | Where |
| --- | --- |
| Name, role, URL, email, social links, résumé path, nav items | `src/constants/site.ts` |
| Experience, projects, skills, credentials | `src/constants/data.ts` |
| Hero headline / sub-line / status pill | `src/sections/hero.tsx` |
| About story + principles | `src/sections/about.tsx` |
| Résumé PDF (downloaded from the hero + contact) | `public/Abhijeet_Pal_Resume.pdf` |
| Social share image (1200×630) | `public/og.png` |
| Colors, fonts, motion tokens | `src/app/globals.css` + `tailwind.config.ts` |

> Before deploying, set `site.url` in `src/constants/site.ts` to your real domain. It drives the canonical URL, sitemap, robots, and OpenGraph tags.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # metadata, OG/Twitter, JSON-LD, fonts, theme provider, nav/footer
│   ├── page.tsx          # composes the section components
│   ├── globals.css       # design tokens (light/dark), base styles, reduced-motion, grid texture
│   ├── sitemap.ts        # generated sitemap.xml
│   └── robots.ts         # generated robots.txt
├── components/
│   ├── ui/button.tsx     # cva-based button variants (primary / outline / ghost)
│   ├── nav.tsx           # sticky, scroll-aware header
│   ├── footer.tsx        # footer with links
│   ├── reveal.tsx        # scroll-triggered reveal wrapper (respects reduced motion)
│   ├── section-label.tsx # monospace eyebrow used to annotate sections
│   ├── theme-provider.tsx# next-themes wrapper
│   └── theme-toggle.tsx  # light/dark toggle (hydration-safe)
├── sections/
│   ├── hero.tsx          # thesis statement + facts readout + CTAs (load animation)
│   ├── about.tsx         # how-I-work narrative + principles
│   ├── experience.tsx    # Problem / Owned / Did / Outcome per role
│   ├── projects.tsx      # case-study cards with highlights + decisions
│   ├── skills.tsx        # grouped skills + background/credentials
│   └── contact.tsx       # invitation + email + links
├── constants/            # site config + all content data
├── animations/variants.ts# shared Framer Motion variants
├── hooks/use-mounted.ts  # client-mounted guard for theme
├── types/index.ts        # shared TypeScript interfaces
└── utils/cn.ts           # className merge helper (clsx + tailwind-merge)
```

Each section is self-contained and data-driven, so adding a project or job is a data edit, not a layout change.

---

## Component documentation

**`<Reveal>`** — `src/components/reveal.tsx`
Wraps any block in a scroll-triggered fade-up. Props:
- `variants?: Variants` — override the motion (defaults to `fadeUp`).
- `delay?: number` — stagger sibling reveals (seconds).
- `once?: boolean` — animate only the first time it enters the viewport (default `true`).
When `prefers-reduced-motion` is set, it renders a plain `div` with no animation.

**`<SectionLabel>`** — the monospace eyebrow (`— EXPERIENCE`) that gives every section its spec-sheet identity. Pure presentational.

**`<Button>` / `buttonVariants`** — `src/components/ui/button.tsx`
A `class-variance-authority` button in the shadcn pattern. Variants: `primary`, `outline`, `ghost`; sizes: `default`, `sm`. `buttonVariants(...)` is exported so anchor/`Link` elements can borrow the styling without rendering a real `<button>` (used by the hero CTAs).

**`<Nav>`** — sticky header that stays transparent at the top and fades in a blurred, hairline-bordered background after a few pixels of scroll. Section links collapse on mobile, leaving the theme toggle.

**`<ThemeToggle>`** — light/dark switch built on `next-themes`. Uses `useMounted()` to avoid a hydration mismatch (the icon only renders after mount).

---

## Animation documentation

All motion is centralized in `src/animations/variants.ts` and applied through `<Reveal>` or the hero's local stagger.

| Variant | Use | Behaviour |
| --- | --- | --- |
| `fadeUp` | default reveal | opacity 0→1, y 16→0, custom ease `[0.22, 1, 0.36, 1]`, 0.6s |
| `fadeIn` | subtle reveals | opacity only |
| `stagger` | parent containers | sequences children ~0.08s apart |

Principles followed:
- **One orchestrated load**, then quiet. The hero runs a single staggered entrance; everything else reveals gently on scroll. No looping, parallax, or attention-grabbing effects.
- **Reduced motion is real.** `<Reveal>` and the hero both branch on `useReducedMotion()`, and `globals.css` neutralizes transitions/animations under the media query.
- **Hover is feedback, not decoration** — small color and 1–2px position shifts on links and the email CTA.

---

## Accessibility

- Semantic landmarks (`header` / `main` / `footer` / `section`), one `h1`, ordered headings.
- Visible keyboard focus rings on every interactive element (`:focus-visible` + ring offset).
- A "Skip to content" link as the first focusable element.
- Color choices target WCAG AA contrast in both themes; the accent is used for emphasis, never as the only signal.
- `prefers-reduced-motion` fully respected.

Run an audit with Lighthouse or `axe` after deploying; the structure is built to score in the high 90s / 100, but real numbers depend on your hosting and any images you add.

---

## SEO

Configured in `src/app/layout.tsx`:
- Title template, description, keywords, canonical URL.
- OpenGraph + Twitter `summary_large_image` cards (image at `/og.png`).
- `Person` JSON-LD structured data.
- `sitemap.xml` and `robots.txt` generated from `site.url`.

---

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the full Vercel walkthrough.

---

## Suggestions for future improvements

- **Dedicated case-study routes.** The data model (`Project.slug`) is already set up for `/projects/[slug]` pages. Promote the richest projects (AgentOS, the Equity assistant) to full case studies with architecture diagrams and screenshots.
- **Real project media.** Add screenshots or short screen-capture loops; wire them through `next/image` for automatic optimization.
- **Architecture diagrams.** A small inline SVG diagram for AgentOS (agents → adversarial verifier → report) would make the orchestration legible at a glance.
- **MDX writing.** A lightweight `/notes` or `/writing` section in MDX signals depth to recruiters and is good for SEO.
- **View-transition polish.** Adopt the View Transitions API for cross-section/route animation as it stabilizes.
- **Analytics.** Add privacy-friendly analytics (e.g. Vercel Analytics) to see what recruiters actually read.
- **Tests.** Add Playwright smoke tests (page renders, nav anchors resolve, theme toggle works) and wire them into CI.

---

## License

Personal project. Content and résumé © Abhijeet Pal. You're welcome to learn from the structure.
