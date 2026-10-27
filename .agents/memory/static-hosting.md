---
name: Scanflo static hosting requirements
description: User's migration constraints and intended hosting model.
---

Scanflo is intended for self-managed static GoDaddy cPanel hosting at www.knifegatevalveindia.com. Do not change the site's design, content, or brand styling as part of hosting preparation.

**Why:** The user wants to manage GoDaddy hosting themselves and prioritizes preserving the existing design and functionality while making deployment and future updates easy for a non-programmer.

**How to apply:** Keep the export self-contained and independent of the API server, database, workspace libraries, and required Replit build variables. Keep the live host and DNS untouched until the user explicitly asks to switch them.

Explain the distinction between managing hosting and editing React content. Prefer clear upload/update instructions; do not imply that cPanel is a visual page editor.

**Why:** The user wants to manage hosting without programming expertise.

**How to apply:** Preserve the editable source separately from the static upload package and explain when updates need rebuilding outside the hosting server.

Use one clearly marked public enquiry-service setting. A blank setting must open a mailto draft to info@scanengg.com and must not claim that the enquiry was sent.

**Why:** The user requested a working external submission path with an honest blank-setting fallback, not a fake success message.

**How to apply:** Preserve entered details on failure or fallback; show success/reset only after the external service confirms acceptance. No private credentials in frontend code.
