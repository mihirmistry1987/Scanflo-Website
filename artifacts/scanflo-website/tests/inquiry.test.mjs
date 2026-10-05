import { readFileSync } from "node:fs";
import ts from "typescript";
import test from "node:test";
import assert from "node:assert/strict";

// Execute the real TypeScript implementation with Node; no extra test runner needed.
const source = readFileSync(new URL("../src/lib/inquiry.ts", import.meta.url), "utf8");
const js = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const { inquiryEmail, sendInquiry } = await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
const values = {
  name: "Test Visitor", company: "Test Company", email: "visitor@example.com",
  phone: "1234567890", productInterest: "mining", message: "A&B valve enquiry / test\nSecond line",
};
const endpoint = "https://formspree.io/f/testid";
test("Fallback prepares an email to sales containing all form fields", () => {
  const draft = new URL(inquiryEmail(values));
  assert.equal(draft.pathname, "info@scanengg.com");
  assert.equal(draft.searchParams.get("subject"), "Scanflo enquiry — Test Company");
  for (const value of Object.values(values)) assert.ok(draft.searchParams.get("body").includes(value));
});
test("Real service acceptance is required and all fields are submitted", async () => {
  await sendInquiry(endpoint, values, async (url, request) => {
    assert.equal(url, endpoint);
    assert.equal(request.method, "POST");
    assert.equal(request.headers.Accept, "application/json");
    const payload = JSON.parse(request.body);
    for (const [key, value] of Object.entries(values)) assert.equal(payload[key], value);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  });
});
test("Service validation error is surfaced", async () => {
  await assert.rejects(sendInquiry(endpoint, values, async () => new Response(
    JSON.stringify({ errors: [{ message: "Please verify the recipient." }] }), { status: 422 },
  )), /Please verify the recipient/);
});
test("HTTP failure or unconfirmed acceptance cannot claim success", async () => {
  for (const response of [
    new Response("Unavailable", { status: 503 }),
    new Response(JSON.stringify({ ok: false }), { status: 200 }),
    new Response("<html>Not a form service</html>", { status: 200 }),
  ]) await assert.rejects(sendInquiry(endpoint, values, async () => response), /could not accept/);
});
test("Network failure and timeout are explicit", async () => {
  await assert.rejects(sendInquiry(endpoint, values, async () => { throw new TypeError("Failed to fetch"); }), /Unable to reach/);
  await assert.rejects(sendInquiry(endpoint, values, async () => { throw new DOMException("Timeout", "AbortError"); }), /timed out/);
});
test("Invalid endpoint fails without sending visitor data", async () => {
  for (const invalid of ["", "http://formspree.io/f/test", "https://example.com/f/test"]) {
    await assert.rejects(sendInquiry(invalid, values, async () => assert.fail("Data leaked")), /not configured correctly/);
  }
});
