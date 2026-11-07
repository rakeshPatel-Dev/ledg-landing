# Ledg Landing Page — Completion Plan

**Status:** Live-app launch wired, hero and spaces bento aligned; hardening in progress  
**Last updated:** November 6, 2026  
**Scope:** Marketing landing page for Ledg, a private personal finance companion.

---

## 1. Goal

Ship a calm, premium marketing site that makes Ledg feel like a real product and sends visitors into the live web app.

The page should:

- Explain Ledg in one clear sentence.
- Show the product with real app screenshots, not abstract mockups.
- Make the value tangible: track fast, understand the month, plan gently, stay private.
- Convert visitors into people who open the live app, sign in or create an account, and start tracking.
- Feel intentional in both light and dark mode, on mobile first.

The reference point is [expenseai.com](https://expenseai.com/): editorial type, a bold product-color stage, a numbered feature tour, and a long, useful footer. Ledg keeps that structure but uses its own voice, palette, and product story.

---

## 2. Non-goals

- No authenticated app experience inside the landing page.
- No waitlist or email capture. The app is live.
- No blog, changelog, help center, or legal pages yet.
- No pricing page or checkout.
- No CMS. Copy and screenshots are versioned in the repo.
- No analytics or marketing cookies until a privacy decision is made.

---

## 3. Stack and conventions

| Area       | Choice                                                            |
| ---------- | ----------------------------------------------------------------- |
| Framework  | Next.js 16.4.5, App Router                                        |
| Language   | TypeScript                                                        |
| Styling    | Tailwind CSS 4, CSS custom properties                             |
| Components | shadcn/ui, Radix primitives                                       |
| Icons      | Lucide React only                                                 |
| Fonts      | Bricolage Grotesque (display), Inter (body/UI)                    |
| Theme      | `next-themes`, default `system`, light and dark both designed     |
| Motion     | CSS, limited to hero entrance, marquee, accordion, hover feedback |
| Toasts     | Not used. The waitlist and its Sonner dependency were removed.    |
| Route      | Single static `/` route                                           |

Design rules live in [`docs/DESIGN.md`](docs/DESIGN.md). Where the landing page intentionally extends them:

- Bricolage Grotesque is the marketing display face. Inter remains the app/UI face.
- The numbered `01_Track` labels replace generic all-caps eyebrows.
- Dark mode is a designed palette, not an inversion.
- Motion is functional, not decorative, and respects `prefers-reduced-motion`.

### App link configuration

Every launch CTA reads from one place:

```ts
// src/config/site.ts
export const siteConfig = {
  appUrl: "https://ledg.rakeshpatel.me",
  appLabel: "Sign up",
  // ...
};
```

`appLink` points at `appUrl` with no `target`, so every header, hero, section, and footer app link stays in the same tab. Change `appUrl` once and every CTA, JSON-LD, and metadata link follows.

The app opens on its sign-in/sign-up screen. After authentication the visitor continues into the live product at the same URL. Landing copy reflects that flow rather than implying instant anonymous use.

---

## 4. Page architecture

| #   | Section       | Anchor          | Job                                                |
| --- | ------------- | --------------- | -------------------------------------------------- |
| —   | Sticky header | —               | Navigate, switch theme, open the live app          |
| —   | Hero          | `#top`          | Promise, real hand-held product proof, primary CTA |
| —   | Spaces bento  | —               | Real spaces list, household members, and dues      |
| 01  | Track         | `#track`        | Five-second entry, search, spaces                  |
| 02  | Understand    | `#understand`   | Income, spending, trends, categories               |
| 03  | Plan          | `#plan`         | Budgets, dues, and monthly planning                |
| 04  | Intelligence  | `#intelligence` | Analytics, savings rate, recurring charges         |
| 05  | More          | `#privacy`      | Export, theme, motion, notifications               |
| —   | Questions     | `#faq`          | Objection handling                                 |
| —   | Footer        | —               | Tour links, company links, contact, social         |

Supporting UI:

- Mobile navigation sheet.
- Active-section tracking with `IntersectionObserver`.
- Theme toggle with system default and a manual override.
- Skip link and landmark structure.

---

## 5. Phase plan

### Phase 0 — Foundation ✅ Done

- Scaffold Next.js App Router project.
- Install Tailwind CSS 4, shadcn/ui, Lucide, and `next-themes`.
- Configure `components.json`, path aliases, ESLint, TypeScript.
- Read `docs/DESIGN.md` and extract tokens.
- Inventory real app screenshots in `public/app/`.

**Done when:** the project builds, lints, and typechecks cleanly.

---

### Phase 1 — Narrative and information architecture ✅ Done

- Study the reference site's pacing and section order.
- Write the page story:
  1. Your money, without the spreadsheet.
  2. Track it before it slips away.
  3. Understand where the month went.
  4. Give every rupee a job.
  5. A quieter kind of smart.
  6. Private by design.
  7. Loved by early users.
  8. Good questions, straight answers.
  9. Your money is ready when you are.
- Map every section to one product truth and one visual proof.
- Define the numbered tour labels (`01_Track` … `08_Get started`).

**Done when:** every section has a job, a headline, supporting copy, and a CTA or proof point.

---

### Phase 2 — Design system implementation ✅ Done

- Add Ledg tokens in `src/app/globals.css`:
  - Canvas `#F8F8F7`, surface white, ink `#111827`.
  - Emerald `#10B981`, deep green `#0B3D2C`, soft green surfaces.
  - Hairline borders, rounded cards, subtle shadows.
  - Dark equivalents for every semantic token.
- Add always-light surface tokens for white cards that sit on deep green:
  - `--paper-*` variables, re-scoped by `.surface-light`.
- Add product/chart accents as variables:
  - `--coffee-*`, `--chart-green`, `--chart-sky`, `--chart-amber`, `--chart-rose`.
- Add utilities: `container-page`, `section-space`, `link-underline`, `dot-field-*`, `marquee-*`, `hero-rise`, `skip-link`.
- Load Bricolage Grotesque and Inter with `next/font`.
- Set light/dark `themeColor` and `colorScheme` in the viewport export.
- Add button variants that match the design system: primary, secondary, ghost, destructive, plus `secondaryLight` and `brandOnDark` for the landing surfaces.

**Done when:** no component needs a raw hex value for theme or brand color.

---

### Phase 3 — Header, hero, and value strip ✅ Done

- Sticky header with logo, desktop nav, theme toggle, live-app CTA, mobile sheet.
- Transparent at the top; hairline and blur once scrolled.
- Hero:
  - “Now live on the web” pill.
  - Oversized Bricolage headline.
  - Calm supporting paragraph.
  - Primary “Open Ledg” CTA and secondary “Take the tour” CTA.
  - Trust row: private by design, works offline, web app live.
  - Deep-green product stage with real dashboard screenshot.
  - Savings-rate and coffee floating cards (desktop only).
- Static value strip below the hero.

**Done when:** the hero reads in under five seconds and the product is visible above the fold on desktop.

---

### Phase 4 — Product tour, sections 01–03 ✅ Done

- **01 Track**
  - Add-form phone screenshot.
  - Saved-to-Food toast.
  - Feature list: five-second entry, find anything, spaces.
  - ⌘K search bar.
- **02 Understand**
  - Income and expense cards.
  - Custom trend chart with income and expense lines.
  - Donut chart with category legend.
  - “Food is down 18%” insight card.
- **03 Plan**
  - Monthly budget progress rows.
  - Savings goal ring.
  - Dues card with net position.

**Done when:** each section pairs one claim with one concrete product view.

---

### Phase 5 — Trust and social proof, sections 04–06 ✅ Done

- **04 Intelligence**
  - Dark emerald panel.
  - “A quieter kind of smart.”
  - Coming-soon badge and preview search field.
- **05 Privacy**
  - Hairline feature grid: local-first, offline, export, multi-currency, undo, accessibility.
- **06 Loved**
  - Infinite testimonial marquee on desktop.
  - Pause/play control.
  - Horizontal scroll with snap on mobile.
  - Mixed light and deep-green cards.

**Done when:** the page answers “is this safe?” and “do real people use it?” before the FAQ.

---

### Phase 6 — FAQ and live app, sections 07–08 ✅ Done

- **07 Questions**
  - Seven-question accordion.
  - Sticky left column on desktop.
  - Direct contact link.
  - “When can I use it?” now says Ledg is live on the web and asks visitors to sign in or create an account.
- **08 Get started**
  - Deep-green conversion panel.
  - “Your money is ready when you are.”
  - “Open Ledg” primary CTA pointing at `siteConfig.appUrl`.
  - “Take the tour” secondary CTA.
  - Spaces phone screenshot and trust microcopy.
  - No form, no simulated submit, no `localStorage`.

**Done when:** a visitor can leave the landing page and reach the live app in one click.

---

### Phase 7 — Footer, metadata, and SEO ✅ Done

- Long footer with:
  - Brand summary and contact.
  - Numbered tour links.
  - Company and legal links.
  - Social links, “Open Ledg,” and back-to-top.
- Metadata:
  - Title template and description.
  - Canonical `https://ledg.app`.
  - Open Graph and Twitter metadata.
  - Robots directives.
  - JSON-LD `SoftwareApplication` schema with `operatingSystem: "Web"` and the live app URL.
- App icons.
- Open Graph and Twitter images:
  - `src/app/opengraph-image.png`
  - `src/app/twitter-image.png`
  - Matching alt text files.
  - Editable source at `src/assets/og-source.svg`.

**Outstanding:**

- [ ] Confirm `https://ledg.app` is the production canonical domain.
- [ ] Confirm `@ledg` on X and the `hello@ledg.app` mailbox are live.
- [ ] Replace `href="#"` placeholders for About, Blog, Changelog, and Terms when those pages exist.

---

### Phase 8 — QA, accessibility, and launch hardening 🔄 In progress

**Verified:**

- [x] `npm run lint`
- [x] `npx tsc --noEmit`
- [x] `npm run build` after the live-app refactor.
- [x] Desktop light and dark full-page review.
- [x] Mobile light section review.
- [x] Mobile menu open, navigate, and close.
- [x] FAQ expand and collapse.
- [x] Every desktop app CTA points to `https://ledg.rakeshpatel.me` in the same tab, with no `target` attribute.
- [x] Mobile menu CTA also points to the live app.
- [x] No `#waitlist` links remain.
- [x] The live app URL responds with the title “Ledg - Smart Spend.”
- [x] Theme and product colors audited: no raw hex values in components, only CSS variables.
- [x] No console or page errors during interaction tests.
- [x] Reduced-motion fallback in CSS.
- [x] Keyboard focus styles on interactive elements.
- [x] Semantic landmarks, skip link, and `aria-current` on active nav.
- [x] Sonner and the unused waitlist components removed.
- [x] Hero rebuilt as a centered composition on the plain page background; the rounded panel, grid, and glow were removed.
- [x] Hero hand/phone asset re-cut with a clean transparent background and no studio cast shadow.
- [x] Floating category, amount, and payment-method cards reviewed at 1440, 1024, 768, 390, and 320 in light and dark mode.
- [x] No horizontal overflow or console errors at 320, 390, 768, 1024, and 1440.
- [x] Nine app links with the shared `appLink` attributes; zero `#waitlist` links.

**Remaining:**

- [ ] Full keyboard-only pass: tab order, sheet focus trap, accordion, app links.
- [ ] Screen-reader pass on the marquee and decorative charts.
- [ ] Lighthouse performance, accessibility, best-practices, and SEO run.
- [ ] Automated accessibility scan (axe or equivalent).
- [ ] Test at 320px, 768px, 1024px, 1440px, and 1920px.
- [ ] Test Safari and Firefox, including `backdrop-filter` and sticky behavior.
- [ ] Test with JavaScript disabled where practical; confirm content still reads.
- [ ] Verify all images have meaningful alt text or are correctly decorative.
- [ ] Confirm no layout shift when fonts and screenshots load.
- [ ] Review dark mode on a real OLED display for banding and contrast.
- [ ] Confirm the OG image renders correctly in social previews.
- [ ] Remove or ignore the Next.js dev indicator in screenshots only; it is not part of the site.

**Definition of done:**

- No console errors in production build.
- No horizontal overflow at any supported width.
- All interactive elements reachable and operable by keyboard.
- Text contrast meets WCAG AA for body and UI text.
- Every app CTA opens the live app in the same tab.
- The page still communicates the product with motion disabled.

---

### Phase 9 — Deployment 🗓 Planned

- [ ] Choose host (Vercel is the default for Next.js).
- [ ] Connect the repository and set the production branch.
- [ ] Configure the `ledg.app` domain and HTTPS.
- [ ] Set preview deployments for pull requests.
- [ ] Add build checks: lint, typecheck, build.
- [ ] Verify metadata, OG image, and JSON-LD in the deployed HTML.
- [ ] Submit `sitemap.xml` and `robots.txt` if additional routes are added.
- [ ] Run a post-deploy smoke test on mobile and desktop.
- [ ] Confirm the production app URL in `src/config/site.ts` is still correct.

**Note:** the site is currently a single static route. A sitemap is optional until more pages exist, but adding one is harmless and useful for launch.

---

### Phase 10 — App link and launch configuration ✅ Done

- [x] Centralize the app URL and label in `src/config/site.ts`.
- [x] Export a shared `appLink` pointing at the live app.
- [x] Point header, hero, Track, Understand, Plan, Intelligence, FAQ, and footer CTAs at the live app.
- [x] Remove the waitlist section, form, Sonner toaster, and `localStorage` persistence.
- [x] Update FAQ and metadata from private beta to live web app.
- [x] Add copy for the sign-in/sign-up flow.
- [x] Verify the live app URL returns the Ledg app.
- [x] Replace section 08 with the live-app conversion panel.
- [x] Add Open Graph and Twitter images.
- [ ] Add optional click tracking for app CTAs once an analytics decision is made.
- [ ] Recheck the app URL after the production domain changes.

**Definition of done:** every launch CTA reaches the live app, and the URL only needs to change in one file.

---

### Phase 11 — Content and growth 🗓 Future

- [ ] Replace illustrative testimonials with approved real quotes.
- [ ] Add real company pages: About, Blog, Changelog, Terms.
- [ ] Add a privacy policy and security page.
- [ ] Add a changelog entry for the public launch.
- [ ] Decide on privacy-friendly analytics and disclose it.
- [ ] Add structured content for launch announcements.
- [ ] Consider a lightweight press kit with logo and screenshots.
- [ ] Revisit the OG image after a major brand or product change.

---

### Phase 12 — Reference-led hero and app-comp alignment ✅ Done

- [x] Rebuilt the hero as a centered headline, subcopy, and CTA pair over a real hand-held phone.
- [x] Added five floating category, amount, and payment-method cards with layered depth and a 3D tilt.
- [x] Composited the real dashboard into the phone and added a synthetic status bar.
- [x] Removed the rounded hero panel, grid, and glow so the composition sits directly on the page.
- [x] Re-cut the hand/phone asset to remove the studio background, cast shadow, and sleeve artifact.
- [x] Rebuilt buttons, cards, segmented controls, category tiles, settings rows, and Western amount grouping to match the live app.
- [x] Rebuilt sections 01–05 around real app screens and moved section 04 to detached bento insight cards.
- [x] Verified light and dark mode, 320–1440 widths, no overflow, no console errors, and the full app-link set.
- [x] `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass after the redesign.

---

### Phase 13 — Spaces bento ✅ Done

- [x] Replaced the three text columns with an asymmetric 3-tile bento on the stage band.
- [x] Rebuilt the large tile as the app's Spaces screen: search, add button, four real spaces, net saved, and the Goa Trip and Household budget bars.
- [x] Added a Household tile with the real owner/member list and a Dues tile with real receivables, payables, and net position.
- [x] Kept the mock presentational: no fake buttons, no status pills, and no invented features.
- [x] Verified 320–1440 in light and dark, no horizontal overflow, and no console errors.
- [x] `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

---

### Phase 14 — Button depth ✅ Done

- [x] Added layered depth treatments for primary, light, white-on-dark, and brand-on-dark buttons: subtle vertical gradient, inset top highlight, contact shadow, and ambient shadow.
- [x] Added a 2px hover lift and kept the existing 1px press-down/scale press state.
- [x] Applied depth to every landing CTA: header, hero, Track, Understand, Plan, Insights, FAQ, and the mobile sheet.
- [x] Removed the old `shadow-soft`/`shadow-sm` utilities that overrode the custom shadows.
- [x] Added a dedicated `whiteOnDark` variant so the Insights CTA keeps the white treatment in dark mode.
- [x] Verified 320/390/768/1024/1440 in light and dark, with visible focus rings, no horizontal overflow, and no console errors.
- [x] `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

---

### Phase 15 — Remove duplicate insight cards ✅ Done

- [x] Removed the three detached cards below the Insights panel; they repeated the savings-rate, quick-insight, and recurring modules already shown inside the panel.
- [x] Kept the panel as the single source for the section's real data.
- [x] Verified 320–1440 in light and dark, with no horizontal overflow and no console errors.
- [x] `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

---

### Phase 16 — Same-tab app links and CTA label ✅ Done

- [x] Removed `target="_blank"` and `rel="noreferrer"` from the shared `appLink`, so every app CTA continues in the same tab like a single website.
- [x] Removed the footer's `external` flags and the now-unused conditional `target`/`rel` attributes and arrows.
- [x] Switched CTA arrows from `ArrowUpRight` to `ArrowRight` across the header, hero, Track, Understand, Plan, Insights, FAQ, footer, and mobile sheet.
- [x] Kept `ArrowUpRight` only inside mock app UI and on `mailto:` links.
- [x] Set the global CTA label to “Sign up”; the footer keeps separate “Sign in” and “Sign up” links.
- [x] Verified 12 app links across 320/390/768/1024/1440 in light and dark: zero `target` attributes, zero popups, no horizontal overflow, and no console errors.
- [x] `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

---

### Phase 17 — Footer redesign ✅ Done

- [x] Replaced the generic three-column link grid with a closing chapter: brand statement, primary CTA, contact, and a numbered page index.
- [x] Moved the footer off `bg-night` so it no longer merges into the dark FAQ section: `bg-stage-soft` in light mode and `bg-surface` in dark mode.
- [x] Added a real index matching sections 01–07, including a new `#questions` anchor so “Questions” lands on the FAQ list rather than the section top.
- [x] Removed duplicate footer links: one Sign up CTA, one Sign in link, one email link, and Privacy/Terms/Back to top in the legal bar.
- [x] Hid the sticky header only when the footer reaches the header line on short screens, so it no longer covers the footer logo; desktop keeps the header visible at max scroll, and the header returns when scrolling back up.
- [x] Kept same-tab app links and `ArrowRight` CTA arrows.
- [x] Verified 320/390/768/1024/1440 in light and dark: no horizontal overflow, no console errors, and the `#questions` anchor lands below the sticky header.
- [x] `npm run lint`, `npx tsc --noEmit`, and `npm run build` pass.

---

### Phase 18 — Cleanup ✅ Done

- [x] Removed unused UI primitives: badge, dialog, input, label, separator, and textarea.
- [x] Pruned unused chart exports, button variants, and the unused Card `plain` variant.
- [x] Removed unused custom tokens, utilities, and the unused `appRoutes.signUp` entry.
- [x] Deleted default scaffold SVGs, two unused app screenshots, and local font files that `next/font` does not use.
- [x] Replaced the default Next.js favicon with the Ledg icon and replaced the scaffold README.
- [x] Verified 320/390/768/1024/1440 in light and dark: no overflow, no console errors, and footer/header behavior unchanged.
- [x] `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `npm run format:check` pass.

---

### Phase 19 — Vercel deployment readiness ✅ Done

- [x] Made `siteConfig.url` environment-aware through `NEXT_PUBLIC_SITE_URL`, with `https://ledg.app` as the fallback.
- [x] Added `robots.ts` and `sitemap.ts` driven by the same site URL.
- [x] Added `.env.example`, allowed it through `.gitignore`, and set the Node engine to `>=20.9.0`.
- [x] Added `vercel.json` with the Next.js preset and baseline security headers.
- [x] Disabled the `X-Powered-By` header and documented the Vercel import flow in the README.
- [x] Verified a production build with a Vercel-style URL: canonical, Open Graph, robots, and sitemap all follow `NEXT_PUBLIC_SITE_URL`; the fallback is `https://ledg.app`.
- [x] `/robots.txt` and `/sitemap.xml` build as static routes.
- [x] `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `npm run format:check` pass.

---

## 6. Current implementation map

| File                                              | Responsibility                                                               |
| ------------------------------------------------- | ---------------------------------------------------------------------------- |
| `src/app/page.tsx`                                | Section composition and JSON-LD                                              |
| `src/app/layout.tsx`                              | Fonts, metadata, viewport, theme provider                                    |
| `src/app/globals.css`                             | Tokens, dark mode, utilities, motion                                         |
| `src/app/robots.ts`                               | Static crawl rules and sitemap pointer                                       |
| `src/app/sitemap.ts`                              | Static single-page sitemap                                                   |
| `src/app/opengraph-image.png`                     | Social preview image                                                         |
| `src/app/twitter-image.png`                       | Twitter/X preview image                                                      |
| `src/config/site.ts`                              | Env-aware site URL, app URL, CTA label, contact, and routes                  |
| `src/components/landing/hero.tsx`                 | Centered hero, floating cards, hand/phone image                              |
| `src/components/landing/site-header.tsx`          | Sticky nav, mobile sheet, theme toggle, footer-aware hide                    |
| `src/components/landing/use-cases-section.tsx`    | Spaces bento: real spaces, household members, and dues                       |
| `src/components/landing/track-section.tsx`        | 01 Track                                                                     |
| `src/components/landing/understand-section.tsx`   | 02 Understand                                                                |
| `src/components/landing/plan-section.tsx`         | 03 Plan                                                                      |
| `src/components/landing/intelligence-section.tsx` | 04 Insights panel: income, expenses, savings, trend, observations, recurring |
| `src/components/landing/privacy-section.tsx`      | 05 More                                                                      |
| `src/components/landing/faq-section.tsx`          | Questions and live-app close; `#questions` sub-anchor                        |
| `src/components/landing/site-footer.tsx`          | Closing chapter: statement, CTA, page index, legal                           |
| `src/components/ui/button.tsx`                    | Button variants, including the landing depth treatments                      |
| `src/components/landing/charts.tsx`               | Trend chart, budget bar, and savings ring                                    |
| `src/components/landing/phone-frame.tsx`          | Reusable screenshot frame                                                    |
| `src/hooks/use-active-section.ts`                 | Active-section observer                                                      |
| `src/assets/og-source.svg`                        | Editable source for the social image                                         |

---

## 7. Assumptions to confirm

- The product name is **Ledg**, domain `ledg.app`, contact `hello@ledg.app`.
- The live web app is `https://ledg.rakeshpatel.me` for now and requires sign in or sign up.
- Ledg is a web app. Offline mode, bank sync, native apps, and multi-currency are not claimed.
- The first release is manual-entry, with CSV export and import.
- Real features only: income and expenses, five-second entry, shared spaces, monthly budgets, dues, analytics, and themes.
- Screenshots in `public/app/` are current enough to represent the product.
- There is no waitlist; the app is live.
- English-only copy for launch.
- Currency examples use rupees; confirm the primary launch market.
- Dark mode should follow the operating system by default, with a manual override.

---

## 8. Launch checklist

### Content

- [ ] Every claim is true for the current build.
- [ ] Testimonials are real and approved.
- [ ] Pricing language matches the actual plan.
- [ ] Contact and social links resolve.
- [ ] Legal pages exist or placeholder links are removed.
- [ ] Screenshots match the current app.
- [ ] Copy says sign in or create an account before tracking.
- [ ] No waitlist language remains anywhere.

### Engineering

- [ ] `npm run lint`
- [ ] `npx tsc --noEmit`
- [ ] `npm run build`
- [ ] Production smoke test on mobile and desktop.
- [ ] No console errors.
- [ ] No broken links.
- [ ] No horizontal overflow.
- [ ] Theme toggle works and persists.
- [ ] Mobile sheet works with keyboard and touch.
- [ ] FAQ accordion works with keyboard.
- [ ] Every app CTA points to `siteConfig.appUrl` and opens in the same tab.
- [ ] Metadata, canonical URL, and JSON-LD are correct in production HTML.
- [ ] OG and Twitter images render correctly in social previews.
- [ ] The app URL is still correct in `src/config/site.ts`.

### Accessibility

- [ ] Keyboard-only pass complete.
- [ ] Screen-reader pass complete.
- [ ] Focus is visible on every interactive element.
- [ ] Contrast meets WCAG AA.
- [ ] Motion respects `prefers-reduced-motion`.
- [ ] Decorative images are hidden from assistive tech.
- [ ] External app links are understandable out of context.

### Operations

- [ ] Domain and HTTPS configured.
- [ ] App URL and uptime monitored.
- [ ] Error tracking or uptime monitoring chosen.
- [ ] Analytics decision documented.
- [ ] Privacy policy published if any visitor data is collected.

---

## 9. Verification commands

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run dev
```

Manual checks after `npm run dev`:

1. Open `http://localhost:3000`.
2. Toggle light and dark mode.
3. Resize from 320px to 1920px.
4. Open the mobile menu, navigate to a section, and close it.
5. Expand and collapse every FAQ item.
6. Click every “Sign up” CTA and confirm it opens `https://ledg.rakeshpatel.me`.
7. Confirm the app shows sign in or sign up.
8. Reload and confirm the theme persists.
9. Navigate with the keyboard only.
10. Enable reduced motion and confirm the marquee stops.
11. Check the production build, not only the dev server.
12. Inspect the page head for `og:image` and `twitter:image`.

---

## 10. Next actions

1. Run the keyboard, screen-reader, Lighthouse, and axe passes.
2. Confirm the launch assumptions in section 7.
3. Replace placeholder company and legal links.
4. Confirm the production canonical domain and contact channels.
5. Deploy to a preview URL and review on real devices.
6. Recheck the live app URL after the production domain changes.
