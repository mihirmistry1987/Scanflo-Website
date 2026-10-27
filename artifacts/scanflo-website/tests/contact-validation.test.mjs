import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import assert from "node:assert/strict";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Exercise the actual form declaration without requiring a browser or duplicating its rules.
const source = readFileSync(new URL("../src/sections/Contact.tsx", import.meta.url), "utf8");
const declaration = source.match(/const formSchema = (z\.object\(\{[\s\S]*?\n\}\));/);
assert.ok(declaration, "Contact form schema declaration must be included in these tests");
const schema = vm.runInNewContext(declaration[1], { z });
const resolve = zodResolver(schema);
const options = { fields: {}, shouldUseNativeValidation: false };
const valid = {
  name: "Test Visitor",
  company: "Test Company",
  email: "visitor@example.com",
  phone: "1234567890",
  productInterest: "sa-series",
  message: "Knife gate valve enquiry with full requirements.",
};

test("Upgraded resolver accepts a complete enquiry without changing its values", async () => {
  const result = await resolve(valid, undefined, options);
  assert.deepEqual(result.errors, {});
  assert.deepEqual({ ...result.values }, valid);
});

test("Empty enquiry returns all six field errors with the existing messages", async () => {
  const result = await resolve(Object.fromEntries(Object.keys(valid).map(key => [key, ""])), undefined, options);
  assert.deepEqual(Object.keys(result.errors).sort(), Object.keys(valid).sort());
  assert.equal(result.errors.name.message, "Name is required");
  assert.equal(result.errors.company.message, "Company is required");
  assert.equal(result.errors.email.message, "Invalid email address");
  assert.equal(result.errors.phone.message, "Phone number is required");
  assert.equal(result.errors.productInterest.message, "Please select a product");
  assert.equal(result.errors.message.message, "Message must be at least 10 characters");
  assert.deepEqual(result.values, {});
});

test("Malformed email and incomplete requirements cannot produce submission values", async () => {
  const result = await resolve({ ...valid, email: "not-an-email", message: "short" }, undefined, options);
  assert.equal(result.errors.email.message, "Invalid email address");
  assert.equal(result.errors.message.message, "Message must be at least 10 characters");
  assert.deepEqual(result.values, {});
});
