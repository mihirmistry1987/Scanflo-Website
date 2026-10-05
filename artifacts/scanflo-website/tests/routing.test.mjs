import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import assert from "node:assert/strict";

const redirect = readFileSync(new URL("../public/spa-redirect.js", import.meta.url), "utf8");
const restore = readFileSync(new URL("../public/spa-restore.js", import.meta.url), "utf8");
const origin = "https://www.knifegatevalveindia.com";

for (const route of [
  "/products/mining",
  "/products/special?ref=quote&name=valve%20one#specifications",
  "/contact?message=A%26B%2FC%3Fhello#enquiry",
  "/design/actuator-options?category=manual",
  "/does-not-exist",
]) {
  test(`GitHub Pages round-trip preserves ${route}`, () => {
    const location = new URL(route, origin);
    let next;
    vm.runInNewContext(redirect, { window: { location: {
      pathname: location.pathname, search: location.search, hash: location.hash,
      replace: url => { next = url; },
    } }, encodeURIComponent });
    assert.ok(next.startsWith("/?__scanflo_path="));
    let restored;
    vm.runInNewContext(restore, { URLSearchParams, URL, window: {
      location: { search: new URL(next, origin).search, origin },
      history: { replaceState: (_state, _title, url) => { restored = url; } },
    } });
    assert.equal(restored, location.pathname + location.search + location.hash);
  });
}
test("Does not redirect root or normal homepage queries", () => {
  vm.runInNewContext(redirect, { window: { location: {
    pathname: "/", search: "", hash: "",
    replace: () => assert.fail("Redirect loop"),
  } }, encodeURIComponent });
  vm.runInNewContext(restore, { URLSearchParams, URL, window: {
    location: { search: "?ref=catalogue", origin },
    history: { replaceState: () => assert.fail("Normal query changed") },
  } });
});
for (const unsafe of ["//example.com", "/\\example.com", "https://example.com"]) {
  test(`Rejects external restoration target ${unsafe}`, () => {
    vm.runInNewContext(restore, { URLSearchParams, URL, window: {
      location: { search: `?__scanflo_path=${encodeURIComponent(unsafe)}`, origin },
      history: { replaceState: () => assert.fail("External target accepted") },
    } });
  });
}
