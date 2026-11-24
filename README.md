# ThinkFISH website (Next.js)

Next.js 16 · App Router · TypeScript · statically generated · no client-side data fetching.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) to the production domain so canonicals, sitemap, Open Graph and JSON-LD use the right origin.

## SEO implementation

- **Metadata API** — per-page `title` / `description` (titles ≤ 61 chars, descriptions ≤ 156), title template, `metadataBase`, canonical URLs, robots + googleBot directives.
- **Social** — Open Graph + Twitter cards on every page, plus a generated 1200×630 share image (`app/opengraph-image.tsx`).
- **Structured data (JSON-LD)** — `Organization`, `WebSite`, `WebPage`/`AboutPage`/`ContactPage`/`CollectionPage`, `BreadcrumbList`, `Service`, `VideoObject`, `Person`.
- **Crawlability** — `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`, web manifest, branded 404 (noindex).
- **Semantic HTML** — one `<h1>` per page, landmark elements, labelled navs, `<address>`, skip link, descriptive link text, `rel="noopener"` on external links.
- **Performance** — fully static output, `next/image` (AVIF/WebP, explicit sizes), self-hosted variable fonts (no render-blocking Google Fonts request), no CLS from images, reduced-motion respected.
- **Hardening / headers** — HSTS, `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `poweredByHeader` off, long-lived immutable caching for static assets.
- **Progressive enhancement** — scroll-reveal animation only hides content when JS is running.

## Navigation & case studies

- `components/Nav.tsx` — mega-menu navigation driven by `MEGA` in `lib/site.ts` (titled columns, icon + description links, featured card). Panels are always in the DOM (crawlable), shown on hover/focus, Escape closes, accordion on mobile.
- `components/CaseStudies.tsx` — "Proof & credibility" section on the home page: numbered cards, count-up metrics (`CountUp.tsx`), hover fill-in, Problem/Approach/Outcome. Metrics are ThinkFISH's published program-wide figures; replace the Problem/Approach/Outcome copy with real client results as they are approved.

## Things to wire up before launch

- Set `NEXT_PUBLIC_CALENDLY_URL` to your Calendly event link — every "Book a call" CTA and the /contact page embed use it (falls back to /contact when unset).
- `components/RoiCalculator.tsx` uses an illustrative 2.5× lead multiplier — replace with your real assumptions.
- Set `GOOGLE_SITE_VERIFICATION` to emit the Search Console verification tag.
- Team/testimonial images are loaded from `www.thinkfish.co`; move them into `/public` for best performance.
- Legal text lives in `content/*.md` (copied from the current site, which still references "BMIG").
