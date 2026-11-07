# Ledg Landing

Marketing site for Ledg, a personal finance tracker for income, expenses,
monthly budgets, shared spaces, and dues.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- shadcn/ui and Radix UI
- Lucide React

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run format:check
```

## Configuration

App links, the CTA label, and contact details live in `src/config/site.ts`.
Change `appUrl` there to repoint every app link.

Set `NEXT_PUBLIC_SITE_URL` to the public production origin. It drives canonical
URLs, Open Graph metadata, robots, and the sitemap. The fallback is
`https://ledg.app`. See `.env.example`.

## Deploy on Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel. The Next.js preset is detected automatically.
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL, for example `https://ledg.app`.
4. Deploy.

The build command is `npm run build`. No other environment variables are
required. Deployment settings and security headers live in `vercel.json`.

## Docs

- `docs/DESIGN.md` — design system and visual rules
- `docs/phases.md` — build history and implementation map
