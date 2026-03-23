# Deploy **chandrateja.com**

**Prefer git-only hosting?** Use **GitHub Pages** — see **`DEPLOY-GITHUB-PAGES.md`** (workflow already in `.github/workflows/`).

Otherwise this doc covers **Vercel** or **Netlify**: connect the git repo, then add your domain and DNS.

## What’s already configured

| Item | Purpose |
|------|--------|
| `vercel.json` | Vite build → `dist/`, SPA fallback so `/about` and case-study URLs work on refresh |
| `netlify.toml` | Same build + SPA redirect (`[[redirects]]`) for Netlify |

**Build:** `npm run build` → output **`dist/`**

---

## Step 1 — Push to GitHub

If the project isn’t on GitHub yet:

```bash
cd "/path/to/Chandra Teja"
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git branch -M main
git push -u origin main
```

---

## Step 2A — Deploy on **Vercel** (recommended)

1. Go to [vercel.com](https://vercel.com) → sign in → **Add New… → Project**.
2. **Import** your GitHub repository.
3. Vercel should detect **Vite** / use settings from `vercel.json`:
   - Build: `npm run build`
   - Output: `dist`
4. Click **Deploy**. You’ll get a `*.vercel.app` URL — test it first.
5. **Settings → Domains** → add:
   - `chandrateja.com`
   - (optional) `www.chandrateja.com`
6. Vercel will show the **DNS records** to add at your registrar (see Step 3).

---

## Step 2B — Deploy on **Netlify** instead

1. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
2. Connect GitHub and pick the repo.
3. Netlify reads **`netlify.toml`** (build `npm run build`, publish `dist`).
4. Deploy, then **Domain management** → add `chandrateja.com` (and `www` if you want).
5. Netlify shows **DNS** instructions for your registrar.

---

## Step 3 — DNS (you provide / apply at your registrar)

When the host shows you records, add them where **chandrateja.com** is registered (GoDaddy, Namecheap, Cloudflare DNS, Google Domains, etc.).

Typical patterns:

| Goal | Record type | Name | Value (example — **use what Vercel/Netlify shows**) |
|------|-------------|------|---------------------------------------------------|
| Apex `chandrateja.com` | **A** | `@` | IPs from host |
| Or apex via CNAME flattening | **ALIAS/ANAME** | `@` | As host instructs |
| `www.chandrateja.com` | **CNAME** | `www` | e.g. `cname.vercel-dns.com` or Netlify subdomain |

**Important:** Remove or avoid conflicting old **A/CNAME** records for the same names.

After DNS propagates (often 5–30 minutes, sometimes longer), HTTPS is usually issued automatically.

---

## Step 4 — Verify

- [ ] `https://chandrateja.com/` loads  
- [ ] `https://chandrateja.com/about` loads (hard refresh)  
- [ ] `https://chandrateja.com/case-study/onelern-assessments` loads (hard refresh)  
- [ ] Images under `/onelern-featured-work.png`, `/cysec-featured-work.png` load  

---

## Ongoing: auto-deploy from git

After the first setup, every push to the connected **production branch** (usually `main`) triggers a new deploy. No manual upload needed.

---

## When you’re ready with DNS

Send **screenshots or copy-paste** of what Vercel/Netlify asks for (record types + names + values), and your **registrar** name — we can double-check before you save.
