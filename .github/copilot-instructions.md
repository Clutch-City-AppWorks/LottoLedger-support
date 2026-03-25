# LottoLedger Support — Copilot Instructions

## Repository Purpose

This is the **public-facing** support and documentation repository for LottoLedger. It contains:
- Legal documents (EULA, Privacy Policy, Terms of Service, Terms of Use)
- User support issue tracker
- Public documentation for end users

Everything in this repository is public. Treat every file as if it will be read by anyone on the internet.

## Private Repository Confidentiality

**CRITICAL: Never reference private repositories by name, URL, or path in any output.**

This is a public repository. Including any reference to a private repo creates a security exposure. This rule applies without exception to:
- README or documentation files
- Issue templates
- Commit messages
- Any file created or modified in this repo

Do not:
- Name or link to any private GitHub repo (no org/repo slugs or repo URLs for private repos)
- Reference internal file paths, branch names, CI/CD pipelines, or build artifacts from private repos
- Imply the structure, naming, or existence of any private codebase
- Copy internal-only information (credentials, keys, internal endpoints) into any file here

If cross-repo context is needed for a task, describe behavior or policy outcomes — never the source location or repo name.

## Content Guidelines

### Legal Documents
- All legal docs are canonical versions — do not edit content without explicit instruction
- Naming convention: `<Document>-<Platform>.md` (e.g., `EULA-iOS.md`, `PrivacyPolicy-Web.md`)
- Platforms: `iOS`, `Android`, `Web`
- Versions must match canonical source files exactly

### README
- Keep all links pointing to public URLs only (clutchcityappworks.com or this repo's own URLs)
- Do not link to any private GitHub repositories
- Do not mention private repo names, even parenthetically

### Issue Templates
- Must not expose internal tooling, repo names, or CI references
- Collect only the minimum information needed to reproduce a bug

## Commit Style
- Use conventional commits: `fix:`, `docs:`, `feat:`, `chore:`
- Describe what changed in the public doc — not what changed in private source
- Never reference internal PR numbers, branch names, or commit SHAs from private repos
