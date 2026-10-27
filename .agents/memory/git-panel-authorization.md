---
name: Git panel authorization
description: Distinguish Git transport, Git panel authorization, and deployment outcomes.
---

Treat command-line Git connectivity, the Git panel's authorization, and website deployment as separate outcomes.

**Why:** The Git panel has reported an inaccessible repository even while the same project's managed Git proxy successfully read remote branches and accepted a push. A workflow was triggered but failed, so successful synchronization also did not establish deployment success.

**How to apply:** Verify each outcome separately before claiming it is fixed. For a persistent panel authorization error, consult current Replit Git Providers reconnection instructions rather than rewriting Git history or replacing the secure proxy remote. Attaching a chat integration is not evidence that the Git panel's sign-in was refreshed.
