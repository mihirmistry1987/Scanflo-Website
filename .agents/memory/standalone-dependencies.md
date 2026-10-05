---
name: Standalone dependency checks
description: Non-obvious migration failures observed when installing the exported frontend outside the workspace.
---

Verify portable exports outside the monorepo with independently installed dependencies and hosting variables unset.

**Why:** A workspace build passed while the independently resolved Rollup 4.64.0 spent several minutes in tree-shaking/garbage collection. Rollup 4.60.3 built the same source in about five seconds. The standalone pin is intentional; reassess it with a clean isolated build when upgrading.

**How to apply:** Do not remove dependency pins merely because the workspace build succeeds. Check the standalone install and build rather than relying on existing workspace symlinks.

Exported npm lockfiles must use externally accessible npm URLs while retaining integrity hashes and cross-platform optional packages.

**Why:** Lockfiles generated inside Replit can contain an internal package-firewall host that GitHub runners and ordinary computers cannot reach.

**How to apply:** Inspect registry hosts in generated export metadata. Normalize the exported metadata where needed; never bypass the managed registry/firewall for workspace package installations.
