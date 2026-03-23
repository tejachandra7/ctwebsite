# Deploy with Netlify + GitHub

Netlify **pulls** from your GitHub repo and deploys on every push. **You** push to GitHub; Netlify publishes the site.

---

## Flow

```
You push code → GitHub → Netlify sees the push → Builds (npm run build) → Publishes
```

---

## Step 1 — Get your code on GitHub

Your source code must be on GitHub first. If `git push` hasn’t worked:

**Option A: Upload via GitHub web**

1. Go to **https://github.com/tejachandra7/portfolio**
2. If the repo is empty: **"uploading an existing file"**
3. Open `/Users/chandrateja/Downloads/Chandra Teja` in Finder
4. Drag everything **except** `node_modules` and `dist`
5. Commit

**Option B: Use Cursor’s Source Control** (if Git auth works)

- Source Control → Commit all → Push

---

## Step 2 — Connect Netlify to GitHub

1. Go to **[netlify.com](https://netlify.com)** → Sign in (or create account)
2. **Add new site** → **Import an existing project**
3. **Connect to Git provider** → **GitHub**
4. Authorize Netlify if asked
5. Pick **tejachandra7/portfolio**
6. Netlify will use **`netlify.toml`**:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **SPA redirects** for `/about`, `/case-study/...` routes
7. Click **Deploy**

---

## Step 3 — Custom domain (chandrateja.com)

1. Netlify dashboard → **Site configuration** → **Domain management**
2. **Add custom domain** → `chandrateja.com`
3. Netlify shows the **DNS records** to add at your registrar — use those (they differ from Vercel/GitHub)

---

## Manual deploy (no Git)

If you can’t get the source on GitHub:

1. Netlify → **Add new site** → **Deploy manually**
2. Drag the **`dist`** folder (or unzipped contents of `portfolio-static-github-pages.zip`) onto the drop zone
3. Site goes live at `*.netlify.app`
4. You can add a custom domain later

This does **not** connect to GitHub; you’d need to upload again for updates.
