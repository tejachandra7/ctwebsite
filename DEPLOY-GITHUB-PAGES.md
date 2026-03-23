# Publish with **Git only** (GitHub Pages + GitHub Actions)

Your site is static after `npm run build`. **Git** holds the code; **GitHub** builds and hosts it when you push — no Vercel.

## What’s in this repo

| Item | Purpose |
|------|--------|
| `.github/workflows/deploy-github-pages.yml` | On every push to **`main`**: `npm ci` → `npm run build` → deploy `dist/` |
| Post-build step | Copies `index.html` → **`404.html`** so `/about` and case-study URLs work on refresh |
| `public/CNAME` | Tells GitHub Pages your custom domain is **`chandrateja.com`** (included in `dist/`). Remove this file if you only use `*.github.io` for now. |

---

## One-time setup (you do this in the browser)

### 1. Push this repo to GitHub

```bash
git add .github public/CNAME DEPLOY-GITHUB-PAGES.md
git commit -m "chore: GitHub Pages deploy workflow"
git push origin main
```

### 2. Turn on GitHub Pages

1. GitHub repo → **Settings** → **Pages**  
2. **Build and deployment** → **Source**: **GitHub Actions** (not “Deploy from a branch”).  
3. After the next successful workflow run, the site URL appears at the top of **Pages** and in the workflow summary.

### 3. Custom domain `chandrateja.com`

1. Still under **Settings** → **Pages** → **Custom domain** → enter `chandrateja.com` → Save.  
2. Enable **Enforce HTTPS** once DNS + certificate are ready.

### 4. DNS at your registrar (for `chandrateja.com`)

Point the domain to **GitHub Pages** (not Vercel). Common setup:

**Apex `chandrateja.com` — A records**

| Type | Name | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**Optional IPv6 (AAAA)** — same host `@`:

| Type | Name | Value |
|------|------|--------|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

**`www.chandrateja.com` (optional)**

| Type | Name | Value |
|------|------|--------|
| CNAME | `www` | `<your-github-username>.github.io` |

Use your **GitHub username** (or org name) in place of `<your-github-username>`.  
If the repo is a **project site** (`username.github.io/repo-name`), GitHub’s **Pages** settings will show the exact **CNAME** target for `www` — prefer that over guessing.

> Always check **Settings → Pages** for the latest DNS help text GitHub shows for your repo.

---

## If you use `https://username.github.io/repo-name/` (no custom domain yet)

Vite must know the subpath. In `vite.config.ts` set:

```ts
export default defineConfig({
  base: '/YOUR-REPO-NAME/',
  // ...rest
})
```

For **`https://chandrateja.com/`** at the root, keep **`base: '/'`** (default) — already correct.

---

## Ongoing

Every **`git push`** to **`main`** redeploys the site automatically.

---

## What I can’t do for you

- Create the GitHub repo or push with your credentials  
- Click **Settings → Pages** in your account  
- Change DNS at your registrar  

`vercel.json` / `netlify.toml` can stay in the repo unused, or you can delete them if you want zero mention of other hosts.
