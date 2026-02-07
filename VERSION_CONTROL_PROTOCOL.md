# 🔄 VERSION CONTROL PROTOCOL
**MANDATORY FOR ALL CLAUDE SESSIONS**

---

## 📋 RULE: ALL FILE UPDATES MUST HAVE TIMESTAMPS & VERSION IDs

Every HTML file created or modified MUST include this header comment block:

```html
<!--
=============================================================================
FILE: [filename.html]
VERSION: [X.Y.Z]
LAST UPDATED: [YYYY-MM-DD HH:MM UTC]
UPDATED BY: Claude Session [Session ID or Date]
CHANGES: [Brief description of what changed]
=============================================================================
Previous Versions:
- v1.0.0 | 2026-02-06 23:30 UTC | Initial creation
- v1.1.0 | 2026-02-07 03:47 UTC | Added welcome modal
- v1.2.0 | 2026-02-07 04:15 UTC | Fixed Power image, added scrollability
=============================================================================
-->
```

---

## 🎯 VERSION NUMBERING SYSTEM

Use **Semantic Versioning (X.Y.Z)**:

**MAJOR (X):** Complete page restructure, navigation changes, major content rewrites
- Example: v1.0.0 → v2.0.0 (merged 5D Solutions + What We Demand into one page)

**MINOR (Y):** New features, new sections, significant content additions
- Example: v1.0.0 → v1.1.0 (added welcome modal)

**PATCH (Z):** Bug fixes, typo corrections, small tweaks, styling updates
- Example: v1.1.0 → v1.1.1 (fixed image size)

---

## 📅 TIMESTAMP FORMAT

**ALWAYS USE UTC TIME:**
```
YYYY-MM-DD HH:MM UTC
```

**Examples:**
```
2026-02-07 04:20 UTC
2026-02-07 15:45 UTC
```

**DO NOT USE:**
- Local time zones (confusing)
- Ambiguous formats like "Feb 7" without year
- Relative times like "today" or "2 hours ago"

---

## 📝 CHANGE DESCRIPTION FORMAT

**BE SPECIFIC:**
✅ GOOD:
- "Added welcome modal with Power image and 1:11 video"
- "Updated all date references from future to past tense"
- "Fixed modal scrollability on mobile (changed display: flex to block)"

❌ BAD:
- "Updated file"
- "Made changes"
- "Fixed stuff"

**INCLUDE:**
- What changed
- Why it changed (if not obvious)
- What triggered the change (user request, bug fix, etc.)

---

## 🔄 WHEN TO INCREMENT VERSION

**EVERY TIME YOU:**
1. Modify any HTML file
2. Add/remove sections
3. Fix bugs
4. Update content
5. Change styling
6. Update navigation
7. Add/remove images

**NO EXCEPTIONS.**

---

## 💾 BACKUP & ROLLBACK SYSTEM

### **Before Making Changes:**

1. **Create timestamped backup:**
```bash
cp index.html index_BACKUP_2026-02-07_04-20.html
```

2. **Document what you're about to change:**
```
Creating backup before: Removing "What Happens When You Sign" section
Backup file: index_BACKUP_2026-02-07_04-20.html
```

3. **Make changes**

4. **Update version number in file**

### **Rollback Process:**

If something breaks:
```bash
# Restore from backup
cp index_BACKUP_2026-02-07_04-20.html index.html

# Document the rollback
# Update version to previous + note rollback in comment
```

---

## 📂 BACKUP NAMING CONVENTION

**Format:**
```
[filename]_BACKUP_YYYY-MM-DD_HH-MM.html
```

**Examples:**
```
index_BACKUP_2026-02-07_04-20.html
crisis_BACKUP_2026-02-07_14-35.html
5D_Solutions_BACKUP_2026-02-08_09-15.html
```

**Store in:**
```
/mnt/user-data/outputs/backups/
```

---

## 🎯 CHANGELOG FILE

Maintain a **CHANGELOG.md** file tracking all major updates:

```markdown
# CHANGELOG - PHIERS Website

## [2026-02-07]

### Added
- Welcome modal to homepage (index.html v1.1.0)
- Donate page placeholder (donate.html v1.0.0)
- SIMPLE_MATH graphic to Receipts page (simple-math.html v1.0.1)

### Changed
- All date references updated to past tense (7 files)
- Images sized to 50% max-width with click-to-enlarge (5 files)
- Modal made scrollable on mobile (index.html v1.2.0)

### Fixed
- Power image corrected to Power_Concedes_Nothing_without_TEETH.png
- Hardcoded Trump-HSA link changed to relative (crisis.html v1.0.1)

### Removed
- Discord links from all pages (global update)
```

---

## ⚠️ CRITICAL RULES FOR FUTURE CLAUDES

1. **NEVER modify a file without adding version info**
2. **ALWAYS create a backup before major changes**
3. **ALWAYS increment version number**
4. **ALWAYS add UTC timestamp**
5. **ALWAYS describe what changed**
6. **CHECK existing version before incrementing** (don't reset to v1.0.0 if file already at v1.2.3)

---

## 📋 PRE-UPDATE CHECKLIST

Before modifying ANY HTML file:

☐ Check current version number in file
☐ Create backup with timestamp
☐ Determine if change is MAJOR, MINOR, or PATCH
☐ Increment version accordingly
☐ Add UTC timestamp
☐ Document changes in comment block
☐ Update CHANGELOG.md
☐ Test the changes
☐ Confirm backup exists before deleting old version

---

## 🚨 EMERGENCY ROLLBACK

If deployment breaks:

1. Check CHANGELOG.md for last working version
2. Find corresponding backup file
3. Restore backup
4. Document rollback in CHANGELOG
5. Investigate what broke
6. Fix and redeploy with new version

---

## 📊 VERSION HISTORY EXAMPLE

```html
<!--
=============================================================================
FILE: index.html
VERSION: v1.2.1
LAST UPDATED: 2026-02-07 04:20 UTC
UPDATED BY: Claude Session 2026-02-07
CHANGES: Fixed modal scrollability - changed .modal-overlay from display:flex 
         to display:block for mobile compatibility
=============================================================================
Previous Versions:
- v1.0.0 | 2026-02-06 08:00 UTC | Initial baseline from Will's v8.2
- v1.1.0 | 2026-02-07 02:30 UTC | Added welcome modal with video
- v1.2.0 | 2026-02-07 03:47 UTC | Added Power image to modal
- v1.2.1 | 2026-02-07 04:20 UTC | Fixed modal scrollability
=============================================================================
-->
<!DOCTYPE html>
<html lang="en">
...
```

---

## ✅ THIS PROTOCOL IS MANDATORY

**NO EXCEPTIONS.**

Every Claude session MUST follow this protocol.  
Every file update MUST have version info.  
Every major change MUST have a backup.

**Why?**
- Enables rollback if something breaks
- Tracks what changed and when
- Allows Will to see evolution of site
- Prevents "what version is this?" confusion
- Makes debugging easier
- Professional version control

---

**END OF VERSION CONTROL PROTOCOL**

*This document is MANDATORY reading for all future Claude sessions.*
