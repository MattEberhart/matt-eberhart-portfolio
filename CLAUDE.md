# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm lint       # Run ESLint
pnpm start      # Start production server
```

No test suite is configured.

## Architecture

Single-page portfolio built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **shadcn/ui** components.

**Page structure** (`app/page.tsx`): One page composed of stacked section components rendered in order — `Navigation`, `Hero`, `About`, `Projects`, `Experience` (exported from `resume.tsx`), `Photos`, `Contact`, `Footer`.

**Component locations:**
- `components/` — page section components (`hero.tsx`, `navigation.tsx`, `about.tsx`, `projects.tsx`, `resume.tsx`, `photos.tsx`, `contact.tsx`, `footer.tsx`)
- `components/ui/` — shadcn/ui primitives (Badge, Button, Card, Dialog, etc.)
- `app/layout.tsx` — metadata, JSON-LD structured data (Person, WebSite, Organization, ProfessionalService schemas), Vercel Analytics
- `app/page.tsx` — project-level JSON-LD (SoftwareApplication schemas)
- `app/api/contact/route.ts` — POST handler using Resend to email `carlmattheweberhart@gmail.com`; requires `RESEND_API_KEY` env var

**Styling:** Tailwind CSS v4 with `tw-animate-css`. Dark mode is hard-coded (`<html className="dark">`). CSS variables for theming are defined in `app/globals.css`. A duplicate `styles/globals.css` exists but `app/globals.css` is the one imported by layout.

**Content is hardcoded** in components — no CMS or data files. To update resume entries, projects, or personal info, edit the relevant component directly.

**Key config notes:**
- `next.config.mjs` has `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`
- `NEXT_PUBLIC_BASE_URL` env var controls the canonical URL; falls back to `VERCEL_URL`, then `https://matteberhart.com`
- Resume PDF served as static file at `public/resume.pdf`
- Images in `public/images/` (project screenshots); personal photos in `public/` root
