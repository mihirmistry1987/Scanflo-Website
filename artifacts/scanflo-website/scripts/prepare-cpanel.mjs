import assert from "node:assert/strict";
import { access, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const githubOnly = [
  "404.html",
  "CNAME",
  ".nojekyll",
  "spa-redirect.js",
  "spa-restore.js",
];
const profiles = {
  godaddy: { guide: "GODADDY.md", readme: "README-GODADDY.txt" },
  hostinger: { guide: "HOSTINGER.md", readme: "README-HOSTINGER.txt" },
};

export async function prepareCpanel(source, destination, provider = "godaddy") {
  const profile = profiles[provider];
  assert.ok(profile, "Unsupported hosting provider");
  // Check inputs before replacing only the generated output directory.
  await access(path.join(source, "index.html"));
  const htaccess = await readFile(
    path.join(root, "deploy/cpanel.htaccess"),
    "utf8",
  );
  const instructions = await readFile(
    path.join(root, "docs", profile.guide),
    "utf8",
  );
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  await cp(source, destination, { recursive: true });
  for (const name of githubOnly)
    await rm(path.join(destination, name), { force: true });
  const index = path.join(destination, "index.html");
  const html = (await readFile(index, "utf8")).replace(
    /\s*<script\b[^>]*\bsrc=["']\/spa-restore\.js["'][^>]*>\s*<\/script>/g,
    "",
  );
  assert.ok(
    !html.includes("spa-restore.js"),
    "GitHub-only route restoration remains in HTML",
  );
  await writeFile(index, html);
  await writeFile(path.join(destination, ".htaccess"), htaccess);
  await writeFile(path.join(destination, profile.readme), instructions);
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const destination = path.join(root, "release/scanflo-godaddy");
  await prepareCpanel(path.join(root, "dist/public"), destination);
  console.log(`GoDaddy upload files prepared at ${destination}`);
  console.log(
    "Upload these contents, including .htaccess, directly into the domain's document root.",
  );
}
