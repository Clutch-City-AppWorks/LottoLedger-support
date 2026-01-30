# Support for LottoLedger

This repository (LottoLedger-ios) contains the public-facing support docs and issue tracker for the LottoLedger iOS project. The application source code and private development artifacts are kept in a separate private repository: [LottoLedger-ios (private)](https://github.com/ishirley34/LottoLedger-ios).

Purpose
- Provide a single, public place for users to ask questions, report problems, and get help.
- Triage and route issues to the private code/repo owners without exposing private code or data.
- Document how to get help, what information to include, and how to request private help when necessary.

Where to get help
- Public issues (preferred): Open an issue in this repository’s Issues tab: https://github.com/ishirley34/lottoledger-support/issues
- Email (private): If you must share logs or data that cannot be posted publicly, email hazzaadev@gmail.com (replace with our real support email) and reference the issue number (if any).
- For urgent security vulnerabilities: see the "Security / Vulnerability reports" section below.

How to open a useful support issue
Before opening an issue:
- Search existing issues to see if the problem has already been reported or resolved.
- Try to reproduce the problem on the latest released app version.

When opening an issue include:
1. Short, descriptive title (e.g., "Crash opening Purchase screen on iOS 17.1")
2. Steps to reproduce (exact taps, screens, or code paths)
3. Expected behavior vs. actual behavior
4. App version and build number (from the app's About or Settings)
5. Device model and OS version (e.g., iPhone 12, iOS 17.1)
6. Relevant account type / configuration (if applicable)
7. Minimal reproducible example, if possible
8. Screenshots, screen recordings, and logs (paste logs inline or attach as files)
9. Any network requests or API responses (redact secrets — see below)

Example issue body (copy/paste)
---
Title: Crash when tapping "Buy Ticket" on iPhone 12 / iOS 17.1

Body:
- App version: 2.4.0 (build 234)
- Device: iPhone 12, iOS 17.1
- Steps to reproduce:
  1. Launch app
  2. Sign in with test account
  3. Go to Buy > Select QuickPick > Tap "Buy Ticket"
- Expected: Purchase confirmation screen opens
- Actual: App crashes to home screen immediately after tapping
- Crash log: (paste relevant stack trace or attach file)
- Notes: Worked on app version 2.3.8

Privacy and sensitive data
- Do NOT include API keys, tokens, credit card numbers, passwords, or other secrets in public issues.
- Redact or sanitize logs and screenshots before posting.
- If you need to share sensitive logs or files, open a public issue describing the problem without secrets; maintainers will provide a secure way to share private data if required.

Security / Vulnerability reports
- Do NOT post security vulnerabilities in public issues.
- To report a security vulnerability, email security@lottoledger.example (replace with our real security contact) with:
  - Short description of the issue
  - Reproduction steps (or PoC), if possible
  - Your preferred secure contact method
- If you don’t receive an acknowledgement in 3 business days, follow up to ensure we received it.

What maintainers need from reporters
- A clear reproduction path is the fastest way to a fix.
- Include exact app version and device/OS details.
- If a network-related issue, include request/response bodies with any secrets redacted and timestamps.

Triage and response expectations
- We will acknowledge new public issues within 48 business hours.
- Triage labels we use: bug, support, question, enhancement, discussion, needs-info, security
- If an issue requires private data, we will request it privately and mark the public issue with `needs-info` (and redact any necessary details visible to the public).

How we use the public issue tracker
- Public issues are used for end-user support, bug reports, feature requests, and community discussion.
- We will not publish private source code, internal backlog items, or CI logs from the private repo in public issues.
- When linking between this support repo and the private code repo, some references (commits, PRs) will be redacted for users who do not have access.

Private support and escalation
- For private troubleshooting (sensitive logs, account details), open a public issue describing the problem (without private data) and request private support. We’ll respond with a secure intake method (email or private file transfer).
- For enterprise or paid-support customers, include your account/contact info so we can follow the agreed SLA.

Contributing to support content
- If you want to improve docs, FAQs, or troubleshooting guides in this repository, submit a pull request to this public repo.
- For code contributions, open a pull request in the private repo per the contributor guidance (if you have access), or request guidance via a public issue.

Labels and issue workflow (maintainers)
- Labels we commonly apply:
  - bug — confirmed bug
  - support — user help or configuration question
  - needs-info — we need more details from the reporter
  - enhancement — feature request
  - security — security-sensitive (do not discuss details publicly)
  - docs — documentation request
- Workflow:
  1. New issue created → auto/triage review
  2. Ask for more info if necessary (needs-info)
  3. Reproduce & assign to an owner
  4. Fix in private repo, create a public-friendly summary and close/resolve the issue

Common support topics & quick troubleshooting
- App crashes: include device, OS, app version, and crash log.
- Sync issues: include account type and timestamps.
- Purchase/payment problems: include payment method (no card numbers) and a screenshot of the error.
- Login/auth issues: include exact error text and the time you attempted the login.

Helpful links
- Private project repository (source code): [LottoLedger-ios (private)](https://github.com/ishirley34/LottoLedger-ios)
- Support issues (this repo): https://github.com/ishirley34/lottoledger-support/issues
- CONTRIBUTING (if maintained here): see this repository's CONTRIBUTING.md

Contact / maintainers
- Primary maintainers: LottoLedger Team (ishirley34)
- Public support issues: https://github.com/ishirley34/lottoledger-support/issues
- Private contact / escalation: support@lottoledger.example (replace with real address)
- Security reports: security@lottoledger.example (replace with real address)

Thanks for helping make LottoLedger better — we appreciate clear bug reports and thoughtful feedback.
