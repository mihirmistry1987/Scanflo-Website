---
name: Static archive permissions
description: Why static deployment archives need explicit permission normalization and extraction checks.
---

Normalize only the public deployment copy to readable files (0644) and traversable directories (0755) before archiving.

**Why:** Five images retained owner-only 0600 permissions in a Scanflo ZIP. All five returned 403 on GoDaddy while the other images loaded. Local Apache checks passed because the local process could read files owned by the workspace user; those checks did not reproduce shared-host ownership boundaries.

**How to apply:** Test archive Unix mode metadata and actual permissions after fresh extraction, including fixtures with restricted source modes. Preserve source modes and bytes. Do not broadly chmod private data or use 0777. When overwriting an existing hosting upload, warn that retained old permissions may still need correction in cPanel.
