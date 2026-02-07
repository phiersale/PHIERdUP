# CHANGELOG - PHIERS Website
**All notable changes to the PHIERS Movement website**

---

## [2026-02-07] - Phase 1 Updates

### Added
- **Welcome Modal** (index.html v1.2.1)
  - Full onboarding modal with PHIERS logo
  - Power Concedes Nothing image (bright flag version)
  - "This isn't a protest. It's a cooperative intelligence project." tagline
  - 1:11 intro video
  - Explanatory text and CTAs
  - Closeable with X, background click, or Escape key
  - Shows on first visit only (sessionStorage)
  - Fully scrollable on mobile

- **Closeable Timestamp** (index.html v1.2.1)
  - Last Updated notice with X button
  - Session persistence
  - Smooth fade-out animation

- **Donate Page** (donate.html v1.0.0)
  - Placeholder "Coming Soon" message
  - Explanation of what donations fund
  - CTA to sign petition
  - "Back to Start Here" button

- **SIMPLE_MATH Graphic** (simple-math.html v1.0.2)
  - Added SIMPLE_MATH.png to Receipts page
  - 50% max-width with click-to-enlarge functionality

- **Version Control System**
  - VERSION_CONTROL_PROTOCOL.md created
  - Version headers added to all 25 HTML files
  - Semantic versioning implemented (X.Y.Z)
  - UTC timestamps on all files
  - Change descriptions in all file headers
  - This CHANGELOG.md file

### Changed

#### Date References (7 files updated)
- **crisis.html v1.0.2**
  - "December 31 Deadline" → "Congress Failed Dec 31"
  - "January 30-31 shutdown window" → "Late January Congressional failure"
  
- **about.html v1.0.2**
  - Updated timeline references to past tense
  
- **action.html v1.0.1**
  - Updated funding timeline from "through Jan 31" to "in early 2026"
  
- **healthcare-crisis-explained.html v1.0.2**
  - All dates updated to reflect Congress already failed
  
- **leverage.html v1.0.2**
  - Updated deadline language to past tense
  
- **why-change-required.html v1.0.2**
  - Updated failure framing from future to past
  - "When Congress Failed in December" (was "The Failure in December")

- **unions.html v1.0.1**
  - (No date changes needed - already in past tense)

#### Visual Hierarchy (index.html v1.2.1)
- MABAH Movement header: 4em (64px) - hero size
- Subtitle: 1.6em (26px)
- Section spacing increased to 56px
- Added visual dividers between major sections
- Mobile responsive scaling

#### Image Sizing (5 files updated)
All graphics now 50% max-width with click-to-enlarge:
- **crisis.html v1.0.2**
- **how-it-works.html v1.0.2**
- **buying-power.html v1.0.2**
- **leverage.html v1.0.2**
- **quickstart.html v1.0.2**

Click-to-enlarge functionality: onclick toggles between 50% and 100% width

### Fixed

- **Modal Scrollability** (index.html v1.2.1)
  - Changed `.modal-overlay` from `display: flex` to `display: block`
  - Added `overflow-y: auto`
  - Content now fully accessible on mobile devices
  - Modal starts at top with proper margin

- **Power Image** (index.html v1.2.1)
  - Corrected from LEVERAGE_Pwr_of_the_People.png to Power_Concedes_Nothing_without_TEETH.png
  - Using bright flag/fist background version for emotional impact
  - Positioned above video in modal

- **Hardcoded Links** (crisis.html v1.0.2)
  - Trump-HSA-Response.html link changed from absolute GitHub URL to relative link
  - Ensures links work regardless of deployment location

- **Tagline Placement** (index.html v1.2.1)
  - "This isn't a protest. It's a cooperative intelligence project." moved between Power image and video
  - Creates better narrative flow

### Removed

- **Discord Links** (global update across all files)
  - Removed all Discord references
  - Discord now only appears post-petition (not yet implemented)

---

## [2026-02-06] - Initial Baseline

### Added
- Initial 25 HTML pages from Will's v8.2 handoff
- All supporting pages and navigation
- Footer with full navigation
- Graphics and images
- Video embeds
- Orientation panel (closeable)

### Files Created (v1.0.0)
1. index.html
2. crisis.html
3. action.html
4. simple-math.html
5. 5D_Solutions.html
6. why-change-required.html
7. faq.html
8. about.html
9. how-it-works.html
10. leverage.html
11. buying-power.html
12. quickstart.html
13. media.html
14. resources.html
15. unions.html
16. healthcare-crisis-explained.html
17. congressional-authority.html
18. demand-guardrails.html
19. demand-jobs.html
20. demand-telehealth.html
21. demand-ubi.html
22. demand-universal-coverage.html
23. why-insurance-fails.html
24. real-stories.html

---

## [UPCOMING] - Phase 2 (Not Yet Implemented)

### Planned Changes

#### Navigation Restructure
- Rename: "Why Change Required" → "Why Congress Allows It"
- Merge: "5D Solutions" + "What We Demand" → "What Must Change"
- New navigation order: Start Here → What's Broken → Why Congress Allows It → What Must Change → Petition → Receipts → FAQ

#### Footer Simplification
- Remove: Survey, Fund Cascade, Join Team
- Keep only: Navigation links + About/Contact/Privacy/Accessibility

#### Homepage Simplification
- Remove: "What Happens When You Sign" section
- Shorten: "Why 3.5% = Guaranteed Change" to 2-3 sentences
- Keep: Identity, urgency, video, forward CTA

#### Progressive CTA Styling
- Low-contrast petition button on early pages (Start Here, What's Broken, Why Congress Allows It)
- High-contrast petition button only on late pages (What Must Change, Petition)

#### Page Framing
- Add top framing: "This page explains ___ so you understand why ___ matters."
- Add bottom forward link: Single "Continue to [Next Page] →" link

#### Terminal Petition Page
- Remove all navigation except logo
- Remove all CTAs except petition form
- Page becomes terminal (sign or leave)

---

## Version Numbering Guide

**MAJOR (X.0.0):** Complete restructure, navigation changes, page merges
**MINOR (X.Y.0):** New features, new sections, significant additions
**PATCH (X.Y.Z):** Bug fixes, typos, small tweaks, styling updates

---

**Last Updated:** 2026-02-07 04:25 UTC  
**Maintained By:** Claude Sessions + Will Mamdani
