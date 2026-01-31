import { defineConfig } from 'vite'

// Base URL configuration for GitHub Pages deployment:
// 
// For ORGANIZATION sites (e.g., https://Clutch-City-AppWorks.github.io/):
//   - The repository MUST be named: Clutch-City-AppWorks.github.io
//   - Set base to '/' (root of the domain)
//   - The site will be accessible at: https://Clutch-City-AppWorks.github.io/
//
// For PROJECT sites (e.g., https://Clutch-City-AppWorks.github.io/LottoLedger-support/):
//   - The repository can have any name (e.g., LottoLedger-support)
//   - Set base to '/LottoLedger-support/' (repository name)
//   - The site will be accessible at: https://Clutch-City-AppWorks.github.io/LottoLedger-support/
//
// The VITE_BASE environment variable allows you to override the base URL:
//   - For local development: VITE_BASE=/ npm run dev
//   - For production build: VITE_BASE=/LottoLedger-support/ npm run build
//
// Default is '/' assuming an organization site setup.

export default defineConfig({
  base: process.env.VITE_BASE || '/',
})
