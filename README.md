# Move Scanflo to GitHub Pages

This folder is the complete Scanflo website: React source, product data, images,
logo, locally bundled Inter fonts, sitemap, and build tools. It needs **no API server, database, Replit account,
or Replit environment variables** to build or run.

Target address: **https://www.knifegatevalveindia.com**

GitHub Pages hosting is free with a **public** repository on GitHub Free. Your
domain registration still needs renewing, and Formspree has its own submission
limits. Do not turn off the old host until the replacement is working.

## 1. Get just the website

Use the supplied standalone source ZIP and unzip it on your computer. Its contents
belong at the root of the new repository (not inside another `scanflo-website`
folder). Include the hidden **`.github` folder**; it contains the deployment workflow.

Alternatively, from this workspace run:

```sh
pnpm --filter @workspace/scanflo-website run export
```

Copy the contents of `artifacts/scanflo-website/release/scanflo-website`.
That export excludes Replit configuration, the API server, database, dependencies,
and generated build files. All images used by the website are inside `src/assets`
or `public/images`; fonts and their license are in `public/fonts`.
No `attached_assets` folder is needed. The optional Google Maps embed remains
external, as it was before; it is not required for the site or enquiry form.

## 2. Create the repository and push the files

1. Sign in at https://github.com and choose **New repository**.
2. Name it `scanflo-website`, select **Public** for free hosting, and create it.
   Do not initialize it with a README (one is included already).
3. Install [GitHub Desktop](https://desktop.github.com/). Choose **File → Clone
   repository**, select the new repository, and clone it to your computer.
4. Copy the extracted website files into that local repository, including
   `.github`, `src`, `public`, `scripts`, `tests`, and `package.json`.
5. In GitHub Desktop enter a summary such as “Add Scanflo website”, click
   **Commit to main**, then **Push origin**. If necessary, rename the default
   branch to `main`.

Command-line alternative, from the extracted website folder:

```sh
git init
git add .
git commit -m "Add Scanflo website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/scanflo-website.git
git push -u origin main
```

Use your own GitHub username, not `YOUR-USERNAME`.

## 3. Enable Pages and configure the domain BEFORE changing DNS

1. Open the repository on GitHub → **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Under **Custom domain**, enter **www.knifegatevalveindia.com** and save it.
   A DNS check may fail until you complete step 4; that is expected.
4. Open **Actions → Deploy Scanflo to GitHub Pages**. If the initial run failed
   before Pages was enabled, click **Run workflow** on `main` (or rerun it).
5. Wait for both the `build` and `deploy` jobs to show green.

The workflow builds only the frontend and uploads `dist/public`. Every subsequent
push to `main` rebuilds and publishes it automatically. `public/CNAME` is included
in the output, but **you must still set Custom domain in GitHub Settings**;
Actions-based Pages does not configure the domain from CNAME alone.

Recommended: verify ownership in your GitHub account's **Settings → Pages**
using the TXT record GitHub gives you. Never add a wildcard DNS record.

## 4. Change the domain's website DNS records

Sign in to the registrar/DNS provider managing `knifegatevalveindia.com` and open
**DNS records**. First save a copy/screenshot of the current records.

Replace the old website's records at **`www` and `@` only**, then add:

| Type | Name / Host | Value / Target |
| --- | --- | --- |
| CNAME | `www` | `YOUR-USERNAME.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

`@` means the bare domain, `knifegatevalveindia.com`. If publishing from an
organization, use `YOUR-ORGANIZATION.github.io` for the CNAME instead.
Do **not** include `https://`, a repository name, or a path in that CNAME value.
Remove conflicting old `A`/`AAAA`/`CNAME` website records or forwarding rules
for these two names. If using Cloudflare, use DNS-only (not proxied) initially.

Optional IPv6: add these four `AAAA` records at `@` **alongside** the A records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**Do not delete MX records, mail-related CNAME records, SPF/DKIM/DMARC TXT
records, nameservers, or unrelated records.** They may be needed for email.
DNS changes can take up to 24 hours. With both `www` and the bare-domain records
set as above, GitHub redirects the bare domain to `www`.

Official DNS reference:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 5. Enable HTTPS and check the replacement

1. Return to **Settings → Pages** and wait for the DNS check/certificate to complete.
2. Tick **Enforce HTTPS**. The option may take up to 24 hours to become available.
3. Check the home page, product images, navigation, and contact page.
4. Open `https://www.knifegatevalveindia.com/products/mining` in a new tab and
   refresh it. Check another route with query parameters and a hash.
5. Check `/sitemap.xml` and `/robots.txt`.
6. Test the enquiry form using your own details; see step 6 below.
7. Only after these checks pass should you disable the old paid hosting.

Clean URLs use GitHub Pages' standard SPA technique: `404.html` temporarily
redirects a deep link through the root, then `spa-restore.js` restores the
original path, query, and hash before React loads. A temporary redirect/404 is
normal; it does not require a server. This is an SPA workaround, not server-side
rendering. Base path is `/` for the custom domain; testing at a repository
subpath such as `USERNAME.github.io/scanflo-website/` is not supported as-is.

## 6. Set up enquiries (one setting)

Until configured, **Send Inquiry opens a pre-filled email draft addressed to
info@scanengg.com**. It does not send email automatically or claim success.
The visitor must review and send the draft from an installed/configured email
app. If none opens, the site keeps the details and offers an email-draft link.

To enable direct submissions:

1. Create a form at https://formspree.io and set its recipient to
   **info@scanengg.com**. Complete the recipient-verification email.
2. Copy its public endpoint, in the format `https://formspree.io/f/FORM_ID`.
3. Open **`src/config/contact.ts`** in GitHub, click the pencil/edit button, and
   replace the empty quotes in the **one** setting:

   ```ts
   export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_ACTUAL_FORM_ID";
   ```

4. Commit the edit to `main` and wait for the Actions deployment to finish.
5. In Formspree, configure allowed domains/spam controls for
   `www.knifegatevalveindia.com`, check its plan limits, and send a test enquiry.

There is no private API key needed here. The endpoint is intentionally public.
Never paste passwords, private API keys, or tokens into website source code.
Visitor details are sent directly to Formspree when configured; review its
privacy terms and settings. Success is shown only after Formspree confirms
acceptance (not a guarantee that email has reached the inbox). Failures show an
error and preserve the form details for retrying.

## Optional: preview or build on your computer

Install [Node.js 22 LTS](https://nodejs.org/) (22.12 or newer). Open a terminal in
the website folder:

```sh
npm ci
npm run typecheck
npm test
npm run build
npm run verify:build
npm run serve
```

`npm run dev` starts development at http://localhost:5173. No environment
variables are required. `npm run build` creates `dist/public`, which can also
be uploaded to any static host. The included `package-lock.json` fixes the tested
dependency versions, and Actions uses `npm ci` to install those same versions.
Do not commit `node_modules`, `.env` files, or private credentials.
