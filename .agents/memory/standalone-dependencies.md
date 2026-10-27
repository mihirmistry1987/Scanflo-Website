---
name: Standalone dependency checks
description: Non-obvious migration failures observed when installing the exported frontend outside the workspace.
---

Verify portable exports outside the monorepo with independently installed dependencies and hosting variables unset.

**Why:** A workspace build passed while the independently resolved Rollup 4.64.0 spent several minutes in tree-shaking/garbage collection. Rollup 4.60.3 built the same source in about five seconds. The standalone pin is intentional; reassess it with a clean isolated build when upgrading.

**How to apply:** Do not remove dependency pins merely because the workspace build succeeds. Check the standalone install and build rather than relying on existing workspace symlinks.

Exported npm lockfiles must use externally accessible npm URLs while retaining integrity hashes and cross-platform optional packages.

**Why:** Lockfiles generated inside Replit can contain an internal package-firewall host that GitHub runners and ordinary computers cannot reach.

**How to apply:** Normalize both registry origins and proxy-specific path prefixes, then verify every tarball URL against its package name and version. A passing install through the managed proxy is not proof that exported URLs are valid public npm addresses. Never bypass the managed registry/firewall for workspace package installations.

Validate GitHub Pages routing against a static server that returns the real 404.html with HTTP 404 for unknown paths, not against Vite's automatic SPA fallback.

**Why:** Development/preview rewrites can make clean deep links appear to work without ever exercising the GitHub Pages redirect and restoration scripts.

**How to apply:** Check direct deep links and refreshes with query strings and hashes, verify the clean URL is restored before the app routes, and confirm unknown paths render the application's not-found screen without a redirect loop.

Audit the workspace and standalone npm dependency graph separately when fixing security findings.

**Why:** A clean pnpm audit does not cover the independent frontend npm lockfile, and workspace overrides do not protect an exported npm installation.

**How to apply:** Preserve equivalent security constraints where needed in both package-manager configurations, regenerate the portable npm lockfile, audit both graphs, and verify a fresh standalone install. Keep the workspace's release-age safeguard enabled.
