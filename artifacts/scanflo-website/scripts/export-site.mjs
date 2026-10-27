import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { normalizeLockfile } from "./normalize-lockfile.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
await normalizeLockfile(root);
const destination = path.join(root, "release", "scanflo-website");
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const name of [
  "src", "public", "scripts", "tests", ".github", ".gitignore", "README.md",
  "package.json", "package-lock.json", "tsconfig.json", "vite.config.ts", "index.html", "components.json",
]) {
  await cp(path.join(root, name), path.join(destination, name), { recursive: true });
}
console.log(`Standalone repository prepared at ${destination}`);
console.log("Copy its contents (including .github) to a new GitHub repository.");
