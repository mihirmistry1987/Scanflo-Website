---
name: Protected catalogue downloads
description: Security boundary for contact-gated brochure and document downloads.
---

Catalogue files offered after a form must not be shipped as public website assets. The server must validate the request and return the file bytes only from the protected endpoint.

**Why:** Hiding a public link with client state is not a gate; visitors can request the static URL directly or bypass browser validation.

**How to apply:** Keep gated documents in server-owned build assets, validate the full request with the shared API schema, and return the document only after successful validation.