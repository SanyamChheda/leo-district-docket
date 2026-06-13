# Leo District 3231 A2 Schooling Portal 2026–27

A production-ready Next.js 15 App Router project built with TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Reusable dynamic docket pages
- Data-driven architecture
- Global search across docket names, headings, and content
- Responsive mobile-first design
- Elegant glassmorphism UI
- Sticky navbar with responsive mobile menu
- Framer Motion animations and page transitions
- Accessible semantic markup

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Start production locally:
   ```bash
   npm start
   ```

## Deployment

This project is ready for deployment on Vercel. Use the default Next.js settings and ensure the root directory is selected.

## Content updates

- Add or update docket content in `src/data/*.ts`
- Each docket page renders content automatically
- Sections and navigation items are generated from data

## Project structure

- `src/app` - App Router pages and layout
- `src/components` - UI components
- `src/data` - Docket content files
- `src/lib` - Utility functions
- `src/types` - TypeScript interfaces
- `src/hooks` - reusable client hooks
- `src/styles` - global CSS
