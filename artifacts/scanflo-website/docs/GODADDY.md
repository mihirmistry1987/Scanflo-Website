# Scanflo — GoDaddy cPanel setup

This is the prebuilt website for www.knifegatevalveindia.com. It does not
require Node.js, npm, a database, a Replit account, or secret keys on GoDaddy.
Do not upload the Replit project or run npm in cPanel.

The site is prepared for a domain root, not a subfolder such as /scanflo/.
Its design and enquiry behavior are unchanged.

## 1. Back up and select the correct directory

Keep the existing Replit website running during the move.
Back up any existing GoDaddy website files and its .htaccess before replacing
anything. Save the current website DNS records for rollback.

In GoDaddy: My Products > Web Hosting > Manage > cPanel Admin.
In cPanel, open Domains and confirm this domain's Document Root.
The primary domain normally uses public_html; an addon domain may use a
different directory. Use the actual directory shown for this domain.
Do not replace files belonging to another domain, delete mail folders, or
remove .well-known.

## 2. Upload and extract the ZIP

Open cPanel File Manager and enter the document root identified above.
Choose Settings > Show Hidden Files (dotfiles).
Upload scanflo-godaddy-cpanel.zip, select it, and choose Extract.

The directory must directly contain:

    index.html
    .htaccess
    assets/
    images/
    fonts/
    robots.txt
    sitemap.xml

There must NOT be an extra scanflo-godaddy folder between the document root
and index.html. The ZIP is already arranged correctly for direct extraction.
Confirm .htaccess was extracted; it makes direct links and refreshes work.
After successful extraction, delete the uploaded ZIP from the server.
README-GODADDY.txt can also be removed from the server after reading.
Do not open index.html from your computer to test; use a web server.

If there is an existing website here, back it up first and do not combine
unrelated WordPress/application rewrite rules with this site's .htaccess.
The supplied file replaces this domain's rewrite rules only.

## 3. Test the GoDaddy copy before the public switch

Find the hosting IP in GoDaddy's Web Hosting dashboard.
Use a GoDaddy-provided domain preview if available, or ask GoDaddy support
to help preview this domain on the new server. A local hosts-file override
for both knifegatevalveindia.com and www.knifegatevalveindia.com is another
option; it changes only your computer, not public DNS.

A /~username or other subdirectory preview may not load this site's root-
relative assets correctly. Use a domain-root preview instead.
Remove any local hosts-file overrides when testing is finished.

Check the homepage, images, navigation, mobile layout, product pages, and
/contact. Open /contact and a product page directly, then refresh them.
A missing image or JavaScript file should return a real 404, not index.html.

The contact form currently opens an email draft to info@scanengg.com.
The visitor still needs to send that email; opening a draft is not delivery.
Automatic external delivery requires configuring the public Formspree
endpoint in the source and rebuilding. Never put a private key in the site.

## 4. Switch DNS only when ready

Use the GoDaddy hosting account's actual server IP, not the Replit IP.
For the root domain, update the existing @ A record to that hosting IP.
For www, update its existing record to the same server, either with an A
record pointing to that IP or a CNAME pointing to the root domain.
Do not create conflicting A and CNAME records for the same name.
Review any existing website AAAA records so they do not route IPv6 visitors
back to the old host.

Preserve MX and email-related TXT records (SPF, DKIM, DMARC), plus unrelated
subdomains and verification records. Do not change nameservers merely to
move this website; edit records at whichever provider hosts authoritative DNS.

Confirm GoDaddy has a valid SSL certificate covering both the root domain
and www. Configure HTTPS redirection only after the certificate works.
This package deliberately does not force HTTPS or a canonical hostname
before the hosting, DNS, and certificate are ready.

## 5. Verify before stopping Replit hosting

After DNS updates have propagated, check both domain names from another
device/network without local hosts-file overrides. Confirm HTTPS has no
certificate warnings, every page and image loads, direct links refresh,
and the enquiry form behaves as described above.

Only then stop the old Replit deployment. Keep the source project and backup;
do not delete them. If the new host fails during the switch, restore the old
website DNS records while resolving the problem.

## Future updates

On a computer with the standalone source and Node.js installed:

    npm ci
    npm test
    npm run prepare:cpanel

The resulting release/scanflo-godaddy directory contains the upload files.
ZIP its CONTENTS, including .htaccess, not the enclosing directory.
No Node.js installation or build commands are needed on GoDaddy itself.

Official GoDaddy help:
- Upload files: https://www.godaddy.com/help/upload-files-using-my-web-hosting-cpanel-file-manager-3239
- Document root: https://www.godaddy.com/help/my-website-isnt-displaying-1593
- Hosting IP: https://www.godaddy.com/help/what-is-my-websites-ip-address-in-my-web-hosting-cpanel-account-16112
