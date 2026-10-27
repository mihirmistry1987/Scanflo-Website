import path from "node:path";
import { fileURLToPath } from "node:url";
import { prepareCpanel } from "./prepare-cpanel.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const destination = path.join(root, "release/scanflo-hostinger");
await prepareCpanel(path.join(root, "dist/public"), destination, "hostinger");
console.log(`Hostinger upload files prepared at ${destination}`);
console.log(
  "Upload these contents, including .htaccess, directly into your website's public_html folder.",
);
