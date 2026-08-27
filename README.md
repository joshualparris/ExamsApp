# CSU Exam Supervisor Dubbo - Quick Reference

This is a personal, mobile-first quick-reference web application designed for CSU exam supervisors in Dubbo, NSW. It provides immediate, offline-capable answers to common situations that occur during examination supervision.

**⚠️ DISCLAIMER:** This is a personal quick reference tool, NOT an official Charles Sturt University application. Always follow the current CSU instructions, exam-specific materials, host directions, and emergency wardens where they differ from this app.

## Features
- **Mobile-First Design:** Optimized for one-tap answers on smartphones.
- **Offline Capable:** Installs as a Progressive Web App (PWA). All core procedures and contact information remain available offline after the first load.
- **Fast Search:** Instantly surface relevant procedures with simple keywords (e.g., "sick", "fire", "late").
- **Emergency Action Screen:** Visually distinct, prominent access to life-threatening emergency procedures and Campus Security contacts.

## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React (Icons)
- Vitest (Testing)
- Vercel (Deployment)

## Data Architecture
To keep the UI components clean, all reference data is structured in typed files:
- `src/data/procedures.ts`
- `src/data/contacts.ts`

When CSU provides updated contact information (e.g., the local Dubbo Exam-Day Contact or Exam/Technical Hotline), update `src/data/contacts.ts` and redeploy.

## Commands

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing
```bash
npm run test
```
Tests are written with Vitest.

### Build
```bash
npm run build
```

## Deployment
This app is designed to be deployed as a static/serverless Next.js site on [Vercel](https://vercel.com).
Pushing to the `main` branch of this repository will automatically trigger a Vercel build and deployment if connected.
