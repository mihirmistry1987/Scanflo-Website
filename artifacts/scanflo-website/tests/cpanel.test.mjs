import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, access, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { prepareCpanel } from "../scripts/prepare-cpanel.mjs";

test("cPanel output preserves website files and replaces GitHub-only routing", async () => {
  const fixture = await mkdtemp(path.join(os.tmpdir(), "scanflo-cpanel-"));
  try {
    const source = path.join(fixture, "build");
    const output = path.join(fixture, "upload");
    await mkdir(path.join(source, "assets"), { recursive: true });
    await writeFile(path.join(source, "index.html"), '<div id="root"></div><script src="/spa-restore.js"></script><script type="module" src="/assets/site.js"></script>');
    await writeFile(path.join(source, "assets/site.js"), "console.log('site');");
    for (const name of ["404.html", "CNAME", ".nojekyll", "spa-redirect.js", "spa-restore.js"]) {
      await writeFile(path.join(source, name), "GitHub only");
    }
    await prepareCpanel(source, output);
    const html = await readFile(path.join(output, "index.html"), "utf8");
    assert.ok(html.includes('id="root"') && html.includes('src="/assets/site.js"'));
    assert.ok(!html.includes("spa-restore"));
    assert.equal(await readFile(path.join(output, "assets/site.js"), "utf8"), "console.log('site');");
    for (const name of ["404.html", "CNAME", ".nojekyll", "spa-redirect.js", "spa-restore.js"]) {
      await assert.rejects(access(path.join(output, name)), { code: "ENOENT" });
      await access(path.join(source, name)); // Original GitHub build remains untouched.
    }
    const htaccess = await readFile(path.join(output, ".htaccess"), "utf8");
    assert.match(htaccess, /DirectoryIndex index\.html/);
    assert.match(htaccess, /RewriteCond %\{REQUEST_FILENAME\} -f \[OR\]/);
    assert.match(htaccess, /RewriteRule \. \/index\.html \[L\]/);
    assert.match(htaccess, /RewriteRule \^\(\?:assets\|images\|fonts\)/);
    assert.ok(!htaccess.includes("[R="), "No premature hostname/HTTPS redirects");
    assert.match(await readFile(path.join(output, "README-GODADDY.txt"), "utf8"), /Preserve MX/);
    await writeFile(path.join(output, "obsolete.txt"), "old release");
    await prepareCpanel(source, output);
    await assert.rejects(access(path.join(output, "obsolete.txt")), { code: "ENOENT" });
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});
