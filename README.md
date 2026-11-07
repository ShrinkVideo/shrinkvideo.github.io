# ShrinkVideo — Free Online Video Compressor (No Watermark, Zero Upload)

**100% Client-Side Online Video Compressor — Shrink MP4, MOV & WebM Without Losing Quality, Zero Cloud Uploads.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-shrinkvideo.github.io-1B1A55?style=for-the-badge&logo=googlechrome&logoColor=white)](https://shrinkvideo.github.io/)
[![Astro 5.x](https://img.shields.io/badge/Astro-5.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![FFmpeg.wasm](https://img.shields.io/badge/FFmpeg.wasm-0.12.x-535C91?style=for-the-badge&logo=webassembly&logoColor=white)](https://ffmpegwasm.netlify.app/)
[![MIT License](https://img.shields.io/badge/License-MIT-9290C3?style=for-the-badge)](./LICENSE)
[![Support the Developer](https://img.shields.io/badge/Support_Developer-Buy_Me_a_Coffee-070F2B?style=for-the-badge&logo=gumroad&logoColor=white)](https://kisharadilshan.gumroad.com/coffee)

---

## Overview

**ShrinkVideo** ([https://shrinkvideo.github.io/](https://shrinkvideo.github.io/)) is a privacy-first, client-side WebAssembly video compressor built with **Astro** and **`@ffmpeg/ffmpeg`**. Users can drop MP4, iPhone MOV, WebM, and MKV files directly into their browser to reduce file size by up to **85%** without watermarks, server queues, or cloud uploads.

---

## Key Features

- **Zero Cloud Uploads (100% Local RAM):** Videos are transcoded directly inside the user's browser memory using `@ffmpeg/ffmpeg` WebAssembly with an automatic hardware-accelerated stream fallback. Confidential footage never leaves the device.
- **Smart CRF Quality Mode & Exact Target MB Mode:**
  - **Without Losing Quality (Smart CRF 24):** Perceptually lossless H.264/AAC compression that shrinks video files up to 60%.
  - **Maximum Compression (CRF 30):** High-efficiency encoding for up to 85% size reduction.
  - **Exact Target File Size Mode (Bitrate Calculator):** Automatically calculates exact video + audio bitrates based on video duration for 1-click presets (`8MB Discord`, `25MB Email / Gmail`, `50MB`, `100MB`, or custom MB).
- **8-Language Internationalization (i18n):** Complete localized routes and UI translations for English (`/`), Spanish (`/es/`), Portuguese (`/pt/`), German (`/de/`), French (`/fr/`), Japanese (`/ja/`), Chinese (`/zh/`), and Russian (`/ru/`).
- **Deep Cosmic Indigo & Periwinkle Theme System:** Light Mode default with 1-click Dark Mode persistence and an ultra-minimal icon-only mobile navbar (`48x48px` touch targets on `< 768px`).
- **GSC-Ready Dual Sitemap Architecture:** Emits both a flat W3C `<urlset>` at `/sitemap.xml` (with `xhtml:link` hreflang annotations) and `/sitemap-index.xml` via `@astrojs/sitemap`, declared together in `robots.txt` for instant Google Search Console indexing.
- **Offline-Ready Progressive Web App (PWA):** Installable via `manifest.webmanifest`, maskable icons (`favicon.svg`, `icon-192.png`, `icon-512.png`), and an offline-first Service Worker (`sw.js`) that caches HTML, CSS, JS, and FFmpeg WebAssembly core assets.

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Astro 5.x](https://astro.build/) | Static output (`output: 'static'`) & zero-JS-by-default Islands Architecture |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + CSS Custom Variables | Responsive cosmic indigo & periwinkle theme tokens |
| **Video Engine** | `@ffmpeg/ffmpeg` & `@ffmpeg/util` | Client-side H.264 / AAC CRF & target-bitrate video transcoding in WebAssembly |
| **Offline PWA** | Web App Manifest + Service Worker (`sw.js`) | Offline caching for app shell, localized routes, and WASM core binaries |
| **SEO & Schema** | Flat `sitemap.xml.ts` + `@astrojs/sitemap` + JSON-LD | `WebApplication`, `HowTo`, `FAQPage`, & `BreadcrumbList` (Zero fake ratings) |
| **Analytics** | Google Tag Manager (`GTM-WGNKVMWP`) & GA4 (`G-JPTL1LGR11`) | Privacy-conscious telemetry & conversion tracking |

---

## Color Palette Specification

| Token Name | Hex Code | Role in UI |
| :--- | :--- | :--- |
| **Deep Cosmic Navy** | `#070F2B` | Primary dark background, primary light-mode typography, button active hover |
| **Royal Indigo Night** | `#1B1A55` | Primary action buttons, brand header accents, active mode pills, dark workspace surface |
| **Slate Sapphire Blue** | `#535C91` | Secondary accents, borders in dark mode, progress bar mid-gradient, secondary text |
| **Soft Lavender Periwinkle** | `#9290C3` | Dashed dropzone border, dark-mode primary action button, subtle highlights |
| **Clean Lavender Alabaster** | `#F5F5FA` | Default light-mode primary background and dark-mode primary typography |

---

## Quick Start & Deployment

### 1. Clone & Install

```bash
git clone https://github.com/shrinkvideo/shrinkvideo.github.io.git
cd shrinkvideo.github.io
npm install
```

### 2. Local Development Server

```bash
npm run dev
```

Open `http://localhost:4321/` in your browser.

### 3. Production Static Build

```bash
npm run build
npm run preview
```

The static output is generated in `dist/` complete with `dist/sitemap.xml`, `dist/sitemap-index.xml`, `dist/robots.txt`, `dist/manifest.webmanifest`, `dist/sw.js`, and `dist/.nojekyll`.

### 4. Automated GitHub Pages Deployment

Pushing to the `main` branch automatically triggers `.github/workflows/deploy.yml`, which builds the project using `withastro/action@v3` on Node 22 and deploys the static `dist/` bundle to GitHub Pages via `actions/deploy-pages@v4`.

---

## Support the Developer

If **ShrinkVideo** saved you time, bandwidth, or cloud subscription costs, consider supporting ongoing open-source development:

- **[Buy Me a Coffee on Gumroad](https://kisharadilshan.gumroad.com/coffee)**

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
Copyright © 2026 **Kishara Dilshan (ShrinkVideo)**.
