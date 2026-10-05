import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist/public");
const html = await readFile(path.join(output, "index.html"), "utf8");
assert.equal((await readFile(path.join(output, "CNAME"), "utf8")).trim(), "www.knifegatevalveindia.com");
for (const name of ["404.html", "spa-redirect.js", "spa-restore.js", "sitemap.xml", "robots.txt", ".nojekyll"]) {
  await access(path.join(output, name));
}
assert.ok(html.indexOf('src="/spa-restore.js"') >= 0, "Missing route restoration script");
assert.ok(!/replit\.com\/script|@replit|replit-dev-banner/.test(html), "Hosting-specific injected script found");
// Ensure all local image references used by the source made it into the output.
const { readdir } = await import("node:fs/promises");
async function files(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await files(file));
    else result.push(file);
  }
  return result;
}
let sources = "";
for (const file of await files(path.join(root, "src"))) {
  if (/\.(tsx?|css)$/.test(file)) sources += await readFile(file, "utf8");
}
const images = new Set([...sources.matchAll(/\/images\/[a-zA-Z0-9_.-]+/g)].map(match => match[0]));
for (const image of images) await access(path.join(output, image.slice(1)));
for (const weight of [300, 400, 500, 600, 700, 800, 900]) {
  await access(path.join(output, `fonts/inter-${weight}.ttf`));
}
const assetFiles = await files(path.join(output, "assets"));
assert.ok(assetFiles.some(file => /scanflo-logo.*\.png$/.test(file)), "Scanflo logo was not bundled");
console.log(`Static output verified: routing files, CNAME, sitemap, logo and ${images.size} referenced images.`);
