# Add GitHub Pages Deployment Support

This PR adds comprehensive GitHub Pages deployment support for the LottoLedger-support repository, enabling automatic deployment of a Vite-based site to GitHub Pages.

## Changes Made

### 1. GitHub Actions Workflow (`.github/workflows/deploy-pages.yml`)
- ✅ Triggers automatically on push to `main` branch
- ✅ Uses `JamesIves/github-pages-deploy-action@v4` for deployment
- ✅ Builds Vite site and deploys `dist/` folder to `gh-pages` branch
- ✅ Uses `GITHUB_TOKEN` for authentication
- ✅ Includes Node.js setup, dependency installation, and build steps

### 2. Vite Configuration (`vite.config.js`)
- ✅ Base path configurable via `VITE_BASE` environment variable
- ✅ Defaults to `/` (suitable for organization sites)
- ✅ Comprehensive comments explaining:
  - Organization site setup (requires repo name: `Clutch-City-AppWorks.github.io`)
  - Project site setup (can use any repo name like `LottoLedger-support`)
  - How to override base URL for different deployment scenarios

### 3. Package Configuration (`package.json`)
- ✅ Added `build` script: `vite build`
- ✅ Added `predeploy` script: `npm run build` (runs before deploy)
- ✅ Added `deploy` script: `gh-pages -d dist`
- ✅ Added `gh-pages` as devDependency (v6.1.1)
- ✅ Added `vite` as devDependency (v5.0.0)
- ✅ Note: Dependencies NOT installed (as per requirements - maintainers should run `npm install`)

### 4. Documentation (`README.md`)
- ✅ Added "Publishing with GitHub Pages" section at end of file
- ✅ Explains automatic deployment workflow
- ✅ Explains manual deployment using npm scripts
- ✅ Documents base URL configuration for org vs project sites
- ✅ Provides custom domain setup guidance (without adding CNAME file)
- ✅ Includes troubleshooting tips

### 5. Additional Files
- ✅ Added `index.html` - Basic HTML entry point for Vite
- ✅ Added `main.js` - Minimal JavaScript entry point
- ✅ Added `.gitignore` - Excludes `node_modules/`, `dist/`, and other build artifacts

## Repository Owner Checklist

After merging this PR, repository owners **MUST** complete these manual steps:

### Critical: Repository Name Decision

- [ ] **OPTION A: Organization Site** (Recommended if this is the main support site)
  - [ ] Rename repository to: `Clutch-City-AppWorks.github.io`
  - [ ] Site will be accessible at: `https://Clutch-City-AppWorks.github.io/`
  - [ ] No changes needed to `vite.config.js` (already defaults to `base: '/'`)
  - [ ] This makes the site the organization's main GitHub Pages site

- [ ] **OPTION B: Project Site** (Keep current repository name)
  - [ ] Keep repository name as: `LottoLedger-support`
  - [ ] Site will be accessible at: `https://Clutch-City-AppWorks.github.io/LottoLedger-support/`
  - [ ] **MUST update** `vite.config.js` to set default base: `base: process.env.VITE_BASE || '/LottoLedger-support/',`
  - [ ] OR set `VITE_BASE=/LottoLedger-support/` in GitHub Actions workflow environment

### GitHub Pages Settings

- [ ] Navigate to **Settings** → **Pages**
- [ ] Under "Build and deployment":
  - [ ] Set **Source** to: "Deploy from a branch"
  - [ ] Set **Branch** to: `gh-pages`
  - [ ] Set **Folder** to: `/ (root)`
  - [ ] Click **Save**
- [ ] Note the published site URL displayed at the top

### Workflow Permissions

- [ ] Navigate to **Settings** → **Actions** → **General**
- [ ] Scroll to "Workflow permissions"
- [ ] Ensure "Read and write permissions" is selected
- [ ] OR ensure `GITHUB_TOKEN` has permissions to push to branches
- [ ] Click **Save**

### Initial Deployment

- [ ] Run `npm install` locally to install dependencies
- [ ] (Optional) Test build locally: `npm run build`
- [ ] (Optional) Test manual deployment: `npm run deploy`
- [ ] OR wait for automatic deployment after merging to `main`

### Post-Merge Verification

After the first workflow run:

- [ ] Go to **Actions** tab and verify the "Deploy to GitHub Pages" workflow succeeded
- [ ] Check the workflow logs if there are any errors
- [ ] Visit the published site URL (from Settings → Pages)
- [ ] Verify the site loads correctly

## Triggering the Workflow

The deployment workflow will trigger automatically on:
- ✅ Any push to the `main` branch (including this merge)
- ✅ Any pull request merge to `main`

To trigger manually:
1. Make any commit to `main` branch
2. Or use `npm run deploy` for manual deployment (after running `npm install`)

## Testing & Verification Steps

Before merging, maintainers can verify these changes:

1. **Validate workflow file syntax**:
   ```bash
   # The workflow file is valid YAML and follows GitHub Actions schema
   ```

2. **Validate Vite configuration**:
   ```bash
   npm install
   npm run build
   # Should create dist/ folder with built assets
   ```

3. **Test manual deployment** (optional):
   ```bash
   npm install
   npm run deploy
   # Should push to gh-pages branch
   ```

4. **Validate README documentation**:
   - Review the new "Publishing with GitHub Pages" section
   - Ensure instructions are clear and accurate

## Important Notes

⚠️ **Repository Name Matters**: 
- For organization sites, repo MUST be named `Clutch-City-AppWorks.github.io`
- For project sites, repo can have any name, but base URL must match

⚠️ **Dependencies Not Installed**: 
- This PR does NOT run `npm install`
- Maintainers should run `npm install` before building/deploying

⚠️ **No CNAME File**: 
- This PR does not include a CNAME file
- Add one to `public/CNAME` if using a custom domain

⚠️ **Workflow Permissions**: 
- Ensure GitHub Actions has permission to push to branches
- Check Settings → Actions → General → Workflow permissions

## Files Changed

```
.github/workflows/deploy-pages.yml  (new) - GitHub Actions deployment workflow
.gitignore                          (new) - Ignore build artifacts and dependencies  
README.md                        (modified) - Added GitHub Pages documentation
index.html                          (new) - Vite HTML entry point
main.js                             (new) - Vite JavaScript entry point
package.json                        (new) - NPM scripts and dependencies
vite.config.js                      (new) - Vite configuration with base URL setup
```

## Related Documentation

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Documentation](https://vitejs.dev/)
- [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

---

**After merging**, ensure you complete the repository owner checklist above for successful deployment.
