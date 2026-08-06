# GHIC — GitHub Issue Intelligence

The official marketing website for GHIC, a premium AI-powered Developer Intelligence Platform that transforms GitHub issues into actionable engineering intelligence.

## Run & Operate

- `pnpm --filter @workspace/ghic run dev` — run the GHIC website (port 21709, preview at `/`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, at `/api`)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite, Tailwind CSS, Framer Motion, Recharts
- Icons: lucide-react + react-icons/si (custom SVG components for missing icons: SiSlack, SiMicrosoftteams, SiAzuredevops, LinkedInIcon)
- API: Express 5 (shared api-server artifact)

## Where things live

- `artifacts/ghic/src/pages/Home.tsx` — main page, imports all sections
- `artifacts/ghic/src/components/sections/` — one file per section (Navbar, Hero, SocialProof, LiveDemo, Features, AIPipeline, Dashboard, Integrations, Security, DeveloperExperience, Pricing, Testimonials, FAQ, CTABanner, Footer)
- `artifacts/ghic/src/index.css` — full dark-first theme (Electric Blue primary, near-black background)

## Architecture decisions

- Presentation-first site — no backend needed, all sections are static/animated React components
- Dark mode default — `dark` class applied to `<html>` on mount
- Custom SVG icon wrappers for brand icons missing from react-icons/si v5 (SiSlack, SiMicrosoftteams, SiAzuredevops, LinkedIn)
- Framer Motion for all scroll-triggered animations and micro-interactions

## Product

- Hero with animated AI particle network canvas background
- Live product demo (animated step-by-step AI issue processing simulation)
- Features grid (10 feature cards with hover glow)
- AI pipeline visualization (scroll-triggered sequential reveal)
- Dashboard showcase with Recharts (area, bar, pie charts)
- Enterprise integrations grid
- Security, developer experience (tabbed code blocks), pricing, testimonials, FAQ, footer

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- react-icons/si v5 is missing: SiMicrosoft, SiSlack, SiMicrosoftteams, SiAzuredevops, SiLinkedin — use custom SVG wrapper components instead
- Marquee animations need unique keys: use `key={\`marquee-\${i}\`}` not `key={i}` to avoid duplicate key warnings
- Google Fonts @import must be the VERY FIRST line in index.css

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
