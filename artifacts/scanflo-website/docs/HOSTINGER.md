# Scanflo — Hostinger upload instructions

This prebuilt package is for Hostinger Web Hosting managed through hPanel
(Apache/LiteSpeed hosting with .htaccess support), not Hostinger Website Builder.
It is prepared for the root of www.knifegatevalveindia.com, not a /scanflo/
subfolder. The existing design and contact form behavior are unchanged.

No Node.js, npm, database, API server, Replit variables, or secret keys are
needed on Hostinger. Do not upload node_modules or the entire Replit project.

## Upload

1. Keep the existing website running. Back up any existing Hostinger files,
   including .htaccess, before replacing them.
2. In hPanel, go to Websites, open this website's Dashboard, then File Manager.
   If the domain is not listed, add a PHP/HTML website to your Web Hosting plan
   first. Do not replace an unrelated WordPress or Website Builder site.
3. Open this website's public_html folder.
4. Upload scanflo-hostinger.zip and extract it directly into public_html.
   If Extract asks for a folder name, choose a temporary folder, then move
   ALL its contents (including .htaccess) up into public_html.
5. Confirm public_html directly contains index.html, .htaccess, assets/,
   images/, fonts/, sitemap.xml, and robots.txt. There must not be an extra
   scanflo-hostinger folder between public_html and index.html.
6. Show hidden files if necessary and confirm .htaccess is present.
   This file makes direct links such as /contact and product pages work.
   Do not combine unrelated WordPress rewrite rules with this file.
7. After extraction, remove the uploaded ZIP from the server.
   README-HOSTINGER.txt can also be removed from the server after reading.
   Do not remove mail folders, other websites' directories, or .well-known.

Do not test by opening index.html from your computer. Use the hosted website.

## Test before moving the live domain

Use Hostinger's domain-root preview if available, or a local hosts-file
override for the root domain and www pointing to the Hostinger server IP.
A subdirectory preview may not work because assets use domain-root paths.
Remove local hosts-file overrides after testing.

Check the homepage, images, mobile layout, product pages, and /contact.
Open /contact and a product page directly in the browser and refresh them.
Confirm missing images or JavaScript files return 404 rather than HTML.

The contact form currently opens a draft to info@scanengg.com in the visitor's
email application. The visitor must send that draft; opening it is not delivery.
Automatic external delivery requires configuring the public Formspree
endpoint in the source and rebuilding. Never put private API keys in the site.

## DNS and SSL — only when ready to switch

Uploading the files does not switch the live domain.
Record the old website DNS settings for rollback, and use the actual Hostinger
hosting IP shown in hPanel, not a Replit or GoDaddy hosting IP.

At the authoritative DNS provider, update the root domain's existing @ A record
to the Hostinger IP. For www, update its existing A record to the same IP or
use a CNAME to the root domain. Do not add conflicting A and CNAME records.
Review website AAAA records so IPv6 visitors are not sent to the old host.
Preserve MX and email-related TXT records (SPF, DKIM, DMARC), verification
records, and unrelated subdomains. Do not change nameservers unnecessarily.

Enable a valid SSL certificate covering both root and www through Hostinger.
Only force HTTPS after that certificate works. The included .htaccess does
not prematurely redirect to HTTPS or force www before DNS and SSL are ready.

Check both domain names from another device/network after DNS propagates.
Keep Replit hosting running until HTTPS, direct page links, images, and the
enquiry behavior are verified on Hostinger. Keep the source project and backup.
If the new host fails during the switch, restore the old website DNS records.

## Future updates

On a computer containing the standalone source and Node.js:

    npm ci
    npm test
    npm run prepare:hostinger

ZIP the CONTENTS of release/scanflo-hostinger, including .htaccess, and upload
again. No build commands are needed on Hostinger.

Official Hostinger instructions:
- https://www.hostinger.com/support/how-to-upload-a-website-from-backups/
- https://www.hostinger.com/support/1583613-how-to-extract-archives-using-the-file-manager-in-hostinger
