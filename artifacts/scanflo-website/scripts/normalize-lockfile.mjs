import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export function normalizeTarballUrl(resolved) {
  const url = new URL(resolved);
  if (!["registry.npmjs.org", "package-firewall.replit.internal"].includes(url.hostname)) {
    throw new Error(`Standalone packages require public npm tarballs, not ${url.hostname}`);
  }
  // The managed registry adds /npm/ before the actual package path.
  // Preserve /npm/-/npm-VERSION.tgz, which is the canonical npm package itself.
  const pathname = url.pathname.startsWith("/npm/") && !url.pathname.startsWith("/npm/-/")
    ? url.pathname.slice(4)
    : url.pathname;
  return `https://registry.npmjs.org${pathname}`;
}

export async function normalizeLockfile(root) {
  const filename = path.join(root, "package-lock.json");
  const lock = JSON.parse(await readFile(filename, "utf8"));
  for (const entry of Object.values(lock.packages)) {
    if (entry.resolved) entry.resolved = normalizeTarballUrl(entry.resolved);
  }
  await writeFile(filename, JSON.stringify(lock, null, 2) + "\n");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await normalizeLockfile(fileURLToPath(new URL("../", import.meta.url)));
  console.log("Standalone lockfile uses canonical public npm tarball URLs.");
}
