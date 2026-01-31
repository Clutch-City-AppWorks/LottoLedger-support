import { defineConfig } from 'vite'

// Base path configuration for GitHub Pages deployment
//
// IMPORTANT: Vite's `base` (and thus VITE_BASE) MUST end with a trailing slash (`/`)
//            for correct asset path resolution, for both organization and project sites.
//
// Organization sites (username.github.io):
//   - Repository MUST be named exactly: <username>.github.io or <orgname>.github.io
//   - Site deploys to the root: https://<username>.github.io/
//   - Set VITE_BASE to '/' (default, includes trailing slash)
//
// Project sites (username.github.io/repo-name):
//   - Any repository name
//   - Site deploys to: https://<username>.github.io/<repo-name>/
//   - Set VITE_BASE to '/<repo-name>/' in your workflow or .env file (note trailing slash)
//
// Usage:
//   - Default: base defaults to '/' for organization sites
//   - Override: Set VITE_BASE environment variable in workflow or locally
//   - Correct example: VITE_BASE=/my-repo/ npm run build
//   - Incorrect (missing trailing slash, may break asset paths): VITE_BASE=/my-repo npm run build

export default defineConfig({
  base: process.env.VITE_BASE || '/',
})
