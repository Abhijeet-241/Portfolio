# Deploying to Vercel

This is a standard Next.js 15 App Router project, so Vercel needs zero custom configuration. Two ways to ship it.

---

## Option A — Git + Vercel dashboard (recommended)

**1. Push to GitHub**

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/Abhijeet-241/<your-repo>.git
git push -u origin main
```

**2. Import the project**

- Go to [vercel.com/new](https://vercel.com/new) and import the repository.
- Vercel auto-detects Next.js. Leave the defaults:
  - **Framework Preset:** Next.js
  - **Build Command:** `next build`
  - **Install Command:** `npm install`
  - **Output:** managed by Vercel (do not set "Output Directory")
- No environment variables are required.
- Click **Deploy**. First build takes ~1–2 minutes.

**3. Point the site at its real domain**

After the first deploy you'll have a `*.vercel.app` URL (or your custom domain). Update it so canonical/OG/sitemap tags are correct:

```ts
// src/constants/site.ts
export const site = {
  // ...
  url: "https://your-domain.com", // <- set this
};
```

Commit and push — Vercel redeploys automatically on every push to `main`.

---

## Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment (follow the prompts)
vercel --prod   # promote to production
```

---

## Custom domain

In the Vercel project: **Settings → Domains → Add**, then point your DNS as instructed (an `A` record for an apex domain, or a `CNAME` to `cname.vercel-dns.com` for a subdomain). HTTPS is provisioned automatically. Remember to update `site.url` to match.

---

## Post-deploy checklist

- [ ] `site.url` matches the live domain.
- [ ] `/Abhijeet_Pal_Resume.pdf` opens (résumé buttons in hero + contact).
- [ ] Social preview renders — test at [opengraph.xyz](https://www.opengraph.xyz/) or by pasting the URL into Slack/LinkedIn. Replace `public/og.png` if you want a different card.
- [ ] `/sitemap.xml` and `/robots.txt` resolve.
- [ ] Run **Lighthouse** (Chrome DevTools → Lighthouse) on the deployed URL — not on `localhost` — for accurate Performance / Accessibility / Best Practices / SEO scores.
- [ ] Toggle light/dark and check a mobile width.

---

## Notes

- The project pins **Next.js 15.5.19** (a patched 15.x release). To move to Next 16 later, run `npm install next@16 eslint-config-next@16` and re-test the build.
- Builds run `next build`, which **type-checks** the project. ESLint is skipped during builds (`eslint.ignoreDuringBuilds`) to keep CI fast; run it locally if you add an ESLint config.
