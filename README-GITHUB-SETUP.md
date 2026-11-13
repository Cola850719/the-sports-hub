# THE SPORTS HUB — beginner setup

## What is included
- `index.html` — page structure and content
- `style.css` — dark sports-media design and mobile layout
- `app.js` — sport cards, sample stories, mobile menu and demo form
- `manifest.json` + `sw.js` — basic PWA setup
- `assets/` — favicon and app icons

## Step 1 — Create your GitHub repository
1. Sign in at https://github.com
2. Click the **+** in the top-right, then **New repository**.
3. Repository name: `the-sports-hub`
4. Choose **Public** (required for the simplest free GitHub Pages setup).
5. Tick **Add a README file** if offered.
6. Click **Create repository**.

## Step 2 — Upload the website files
1. Open your new `the-sports-hub` repository.
2. Click **Add file** → **Upload files**.
3. Upload `index.html`, `style.css`, `app.js`, `manifest.json`, `sw.js`, and `README-GITHUB-SETUP.md`.
4. Open the `assets` folder on your computer and upload its contents into a repository folder named `assets`. If the folder does not exist in GitHub, use **Add file** → **Create new file**, name it `assets/.keep`, commit it, then upload the assets into that folder.
5. Click **Commit changes**.

## Step 3 — Turn on GitHub Pages
1. In the repository, click **Settings**.
2. In the left menu, click **Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**.
5. Click **Save**.
6. Wait a minute or two. Refresh the Pages settings screen; GitHub will show your website address. It will usually look like `https://YOUR-USERNAME.github.io/the-sports-hub/`.

## Step 4 — Test it
1. Open the Pages website address on your computer.
2. Open the same address on your phone.
3. Check the menu, sport cards, sections and membership button.
4. If an old version appears, refresh the page or clear the browser cache.

## Important before taking money
This is a front-end launch prototype. The email form is a demo and does not save addresses. The membership CTA is an enquiry link, not a checkout. Do not collect payment details on this site.

For real subscriptions, the next build stage is:
1. Supabase for secure user accounts and member records.
2. Stripe Checkout + Billing for recurring payments.
3. A secure server-side function/webhook to confirm payments and update membership access.
4. Protected premium content that checks the member's subscription status.

Never put Stripe secret keys or Supabase service-role keys in `app.js` or any public GitHub file. Only public/anon keys belong in browser code, with database security policies configured correctly.

## Free-to-start notes
GitHub Pages can host a public static site at no hosting charge within GitHub's terms and limits. Supabase and other services have free tiers, but limits and pricing can change. Stripe charges transaction fees when you take payments. A custom domain is optional and usually costs money.

## Current content note
The three sample editorial cards are content templates, not current sports news. Add researched, original content before publicly promoting the site as a live news service.
