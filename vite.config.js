import { defineConfig } from 'vite'

// GitHub Pages Configuration
// --------------------------
// For Organization/User Pages (e.g., Clutch-City-AppWorks.github.io):
//   - Repository must be named: Clutch-City-AppWorks.github.io
//   - Set base to '/' (root)
//   - Site will be available at: https://clutch-city-appworks.github.io/
//
// For Project Pages (e.g., LottoLedger-support as a project site):
//   - Repository can have any name (e.g., LottoLedger-support)
//   - Set base to '/repository-name/' (e.g., '/LottoLedger-support/')
//   - Site will be available at: https://clutch-city-appworks.github.io/LottoLedger-support/
//
// Base Path Configuration:
// You can override the base path using the VITE_BASE environment variable:
//   - For org site: export VITE_BASE=/ (or rename repo to Clutch-City-AppWorks.github.io)
//   - For project site: export VITE_BASE=/LottoLedger-support/
//   - In GitHub Actions: Set as environment variable in workflow
//
// Default: Assumes project page with current repository name
const base = process.env.VITE_BASE || '/LottoLedger-support/'

export default defineConfig({
  base: base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate source maps for easier debugging
    sourcemap: true
  }
})
