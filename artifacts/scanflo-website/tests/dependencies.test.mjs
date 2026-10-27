import { readFileSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";
import { normalizeTarballUrl } from "../scripts/normalize-lockfile.mjs";

test("Managed registry prefix is removed for scoped and unscoped tarballs", () => {
  assert.equal(
    normalizeTarballUrl("http://package-firewall.replit.internal/npm/vite/-/vite-7.3.7.tgz"),
    "https://registry.npmjs.org/vite/-/vite-7.3.7.tgz",
  );
  assert.equal(
    normalizeTarballUrl("http://package-firewall.replit.internal/npm/@scope/package/-/package-1.2.3.tgz"),
    "https://registry.npmjs.org/@scope/package/-/package-1.2.3.tgz",
  );
  assert.equal(
    normalizeTarballUrl("https://registry.npmjs.org/npm/zod/-/zod-4.6.7.tgz"),
    "https://registry.npmjs.org/zod/-/zod-4.6.7.tgz",
  );
});

test("Canonical public URLs, including the npm package, are preserved", () => {
  for (const url of [
    "https://registry.npmjs.org/vite/-/vite-7.3.7.tgz",
    "https://registry.npmjs.org/npm/-/npm-11.0.0.tgz",
  ]) assert.equal(normalizeTarballUrl(url), url);
});

test("Every locked tarball has the canonical package and version path", () => {
  const lock = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"));
  for (const [location, entry] of Object.entries(lock.packages)) {
    if (!entry.resolved) continue;
    const name = entry.name || location.split("node_modules/").at(-1);
    const basename = name.split("/").at(-1);
    assert.equal(
      entry.resolved,
      `https://registry.npmjs.org/${name}/-/${basename}-${entry.version}.tgz`,
      `Nonportable tarball URL for ${location}`,
    );
  }
});
