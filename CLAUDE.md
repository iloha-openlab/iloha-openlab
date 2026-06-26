# Project Overview

Corporate website for ILOHA OpenLab LLC ("Engineering Open Ecosystems").
Astro-based static site with bilingual support (English primary, Japanese secondary),
deployed to GitHub Pages via GitHub Actions.

## Tech Stack

- Astro 5.18.1 (static output mode)
- TypeScript (strict mode via `astro/tsconfigs/strict`)
- Lychee (link checker)
- Playwright (visual regression tests)

## Key Commands

- `npm run dev`     : Start development server
- `npm run build`   : Build for production
- `npm run preview` : Preview production build
- `npm run lint:links` : Check for broken links in `dist/`

## Directory Structure

- `src/pages/`      : Page components — mirrored `en/` and `ja/` subdirectories
- `src/components/` : Shared components
- `src/layouts/`    : Layout templates (`BaseLayout.astro`)
- `src/i18n/`       : Custom i18n module (dictionary pattern, no external library)
- `src/content/`    : Astro Content Collections (news articles in Markdown)
- `public/`         : Static assets (images, favicon, CNAME)

## Internationalization (i18n)

- Default language: English (`en`) — root `/` redirects to `/en/`
- Secondary language: Japanese (`ja`)
- Approach: custom TypeScript dictionary pattern in `src/i18n/`
  - `src/i18n/index.ts` — `getDictionary(lang)` helper
  - `src/i18n/en.ts` / `src/i18n/ja.ts` — per-language string maps
  - `src/i18n/common.ts` — shared constants
- Pages are duplicated under `src/pages/en/` and `src/pages/ja/`; each page receives
  the appropriate dictionary at render time
- News content lives in `src/content/news/` with `.en.md` / `.ja.md` file suffixes
  and a `lang` frontmatter field

## Content Guidelines

- Write all code comments in English
- UI copy: English is the source of truth; Japanese is translated from English
- News article filenames: `YYYYMMDD-slug.{en,ja}.md`

## CI / Deployment

- **check.yml** — runs on push and PRs to `main`: builds the site, then checks all
  links with Lychee (fails on broken links)
- **deploy.yml** — runs on push to `main`: builds and deploys to GitHub Pages
- **update-snapshot.yml** — manual trigger only: regenerates Playwright visual
  snapshots and commits them back to the repo

## Notes

- `astro.config.mjs` sets `output: 'static'` and `site: 'https://iloha-openlab.com'`
- Custom domain is set via `public/CNAME` (`www.iloha-openlab.com`)
- No CSS framework — global styles in `src/styles/global.css`
- Playwright config does not yet have a committed `playwright.config.ts`; the
  `update-snapshot.yml` workflow drives it directly via `npx playwright test`
