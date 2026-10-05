---
name: Scanflo static hosting requirements
description: User's migration constraints and intended hosting model.
---

Scanflo is intended for free standalone GitHub Pages hosting at www.knifegatevalveindia.com. Do not change the site's design, content, or brand styling as part of this migration.

**Why:** The user wants to stop paying for Replit hosting without redesigning the site.

**How to apply:** Keep the export self-contained and independent of the API server, database, workspace libraries, and required Replit build variables. Keep the live host and DNS untouched until the user explicitly asks to switch them.

Use one clearly marked public enquiry-service setting. A blank setting must open a mailto draft to info@scanengg.com and must not claim that the enquiry was sent.

**Why:** The user requested a working external submission path with an honest blank-setting fallback, not a fake success message.

**How to apply:** Preserve entered details on failure or fallback; show success/reset only after the external service confirms acceptance. No private credentials in frontend code.
