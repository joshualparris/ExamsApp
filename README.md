# CSU Exam Supervisor Dubbo - Quick Reference

This is a personal, mobile-first quick-reference web application for CSU exam-supervisor work in Dubbo, NSW. It is designed to surface common procedures, contacts and emergency guidance quickly during exam supervision.

> **Disclaimer:** This is a personal quick-reference tool, **not** an official Charles Sturt University application or publication. Always follow the current exam-specific instructions, approved alternative exam arrangements, CSU Exams team/host directions and Emergency Wardens where they are more specific or have changed.

## Content status and source hierarchy

The app content was re-checked on **27 August 2026**.

Current CSU Policy Library documents and current CSU public webpages are treated as the highest-authority sources. The On-Campus Supervisor Handbook and supervisor training are used for operational detail. Where sources do not fully agree, or a local Dubbo process is not documented, the app tells the supervisor to confirm with the host/Exams team rather than guessing.

The in-app **About / Sources** page links to the current official sources, including:

- Assessment – Conduct of Coursework Assessment and Examinations Procedure
- Assessment Flexibility Procedure
- Charles Sturt emergency guidance
- Current Students – Exams
- Current Students – Technical exam help
- Student Central

Operational sources also include the CSU On-Campus Supervisor Handbook supplied for supervisor work and CSU exam-supervisor training notes from 27 August 2026.

## Features

- **Mobile-first design** — optimised for quick use on a phone.
- **Fast search** — surface procedures with simple keywords such as `sick`, `fire` or `late`.
- **Emergency screen** — prominent access to emergency procedures and relevant contacts.
- **Contacts screen** — keeps exam-day/support contact details separate from procedures.
- **Source transparency** — the About / Sources page records the authority hierarchy and fact-check date.
- **PWA/service worker** — the root page is pre-cached and successful GET requests are cached as they are visited.

### Offline behaviour

The service worker uses a **network-first, cache-fallback** strategy.

- `/` is pre-cached during service-worker installation.
- Successful GET responses are cached after they are requested.
- Previously cached pages/assets can be served when the network is unavailable.
- A navigation request with no cached match falls back to the cached root page when possible.

Do **not** assume every never-visited route/resource is available offline after only loading the home page once. If offline use matters on exam day, open the key screens while online beforehand.

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Vitest
- Playwright
- Vercel

## Data architecture

Reference content is kept in typed data files rather than embedded across UI components:

- `src/data/procedures.ts`
- `src/data/contacts.ts`

The source hierarchy and official reference links are surfaced in:

- `src/app/about/page.tsx`

When CSU provides changed procedures or contact information, update the relevant typed data/source material, re-check it against the current CSU authority, run the tests, and redeploy.

## Commands

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open `http://localhost:3000`.

### Lint

```bash
npm run lint
```

### Unit/component tests

```bash
npm run test
```

Vitest is used for the regular test suite.

### End-to-end tests

```bash
npm run test:e2e
```

Playwright is used for browser-level end-to-end coverage.

### Production build

```bash
npm run build
```

### Start a production build locally

```bash
npm run start
```

## Deployment

The app is designed for deployment on Vercel. If the repository is connected to a Vercel project with main-branch production deployment enabled, pushing `main` triggers the configured build/deployment workflow.

Because this is an operational quick-reference tool, a successful deployment does not replace content verification: current CSU instructions remain authoritative.
