# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Facund Fortuny Pons (fortuny.dev). Single-page static site built with Astro 5. Deployed to Cloudflare Pages.

## Commands

- `npm run dev` — Start dev server at localhost:4321
- `npm run build` — Production build to `dist/`
- `npm run preview` — Serve production build locally

No testing or linting infrastructure is configured.

## Architecture

### Styling

**SASS + Astro scoped styles** — Global base styles (reset, `.container`, `.section`, `.footer`) in `src/css/style.scss`. Components use Astro's `<style>` blocks for scoped CSS, or `<style is:global>` when targeting pseudo-elements that can't be scoped. Flexbox grid is implemented per-component with plain CSS (no framework).

Color palette: primary mint `#CDF2E2`, secondary green `#59845C`.

### Data Flow

Site config lives in `src/config.ts` as a direct ESM export. Components import it with `import { siteConfig } from '../config'`.

### Key Components

- **Layout.astro** — Root HTML document wrapper with `<head>` (SEO meta, Google Fonts, favicon, manifest) and global SCSS import
- **Hero.astro** — Full-width hero with background image using `<Image>` from `astro:assets`
- **Header.astro** — Name/title overlay on hero with scoped styles
- **About.astro** — Bio section with photo and skills list
- **Experience.astro** — Experience section wrapper with work illustration
- **Timeline.astro** — Alternating left/right career timeline with `<style is:global>` for pseudo-elements and layout; collapses to simpler layout on mobile (481px breakpoint)
- **Footer.astro** — Social links with inline SVG icons

### Images

Uses `<Image>` from `astro:assets` for automatic optimization (WebP format, responsive widths). Images live in `src/images/` for build-time processing. Static assets (favicon, manifest) are in `public/`.
