
Issue identified:
- The app code does not look like the reason the site fails to open.
- Routing is already set up correctly:
  - `src/App.tsx` uses `BrowserRouter`
  - `/` and `/article/:slug` routes exist
  - `public/.htaccess` has the right Apache SPA fallback for Hostinger
- Based on the earlier browser error (`ERR_CERT_COMMON_NAME_INVALID` with a `*.netlify.app` certificate), the likely problem is DNS/SSL, not React code.

Plan:
1. Confirm the hosting target
   - Decide whether `indianewsai.com` should point to Hostinger or to Lovable.
   - Right now it appears the domain is still resolving to an old Netlify setup or conflicting DNS.

2. Fix DNS records
   - Remove old Netlify-related DNS records.
   - If using Hostinger:
     - point root `@` to the Hostinger server IP
     - point `www` to the root domain or Hostinger’s recommended target
   - If using Lovable instead:
     - point `@` and `www` to `185.158.133.1`
     - add the required `_lovable` TXT verification record

3. Re-issue SSL
   - In Hostinger: install/reinstall free SSL after DNS is correct
   - In Lovable: SSL should auto-provision once the domain verifies
   - Wait for propagation if records were just changed

4. Verify deployment files
   - If staying on Hostinger, ensure `public_html` contains:
     - `index.html`
     - `assets/`
     - `.htaccess`
   - Do not keep the built app nested inside a `dist/` folder on the server

5. Re-test the live domain
   - Check homepage
   - Check a direct deep link like `/article/...`
   - Confirm the certificate now shows `indianewsai.com`, not Netlify

What I would implement/check once approved:
- Review the current deployment choice and update any project-side config if needed
- Help you switch cleanly to one hosting path only
- If you want Lovable hosting, I’ll guide the exact publish + custom-domain setup
- If you want Hostinger, I’ll guide the exact DNS cleanup and SSL reactivation flow

Technical notes:
- There is no immediate sign of a broken route in the React app.
- The `.htaccess` file is already correct for Apache SPA routing.
- The strongest indicator is the certificate mismatch, which almost always means the domain is pointing to the wrong host or to multiple hosts at once.

Fastest path to resolution:
- Use only one host
- Remove old DNS records from the other host
- Reinstall SSL on the chosen host
- Retest after propagation
