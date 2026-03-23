# Push to GitHub from Cursor

Your project is ready to push. Cursor has Git built in — you just need to **sign into GitHub** so it can authenticate. Follow one of these options.

---

## Option A — Sign in via Cursor (recommended)

1. **Open the Account menu**
   - Click the **person icon** (or your avatar) in the **bottom-left** of Cursor
   - Or: `Cmd + Shift + P` → type **"Sign in with GitHub"** → choose **Git: Sign in with GitHub**

2. **Authorize in the browser**
   - A browser window opens for GitHub
   - Sign in if needed, then click **Authorize** for Cursor

3. **Push from Source Control**
   - Click the **Source Control** icon in the left sidebar (branch icon)
   - Confirm you’re on branch **main**
   - Click the **⋯** menu → **Push** (or the cloud icon with up arrow)

---

## Option B — Push from the Command Palette

1. `Cmd + Shift + P` → type **"Git: Push"** → press Enter  
2. If prompted, choose **Sign in with GitHub** and complete the browser flow  
3. Push again after you’re signed in

---

## Option C — Use GitHub CLI (works for terminal too)

1. **Install GitHub CLI** (if needed):
   ```bash
   brew install gh
   ```

2. **Sign in**:
   ```bash
   gh auth login
   ```
   - Choose **GitHub.com** → **HTTPS** → **Yes** to authenticate via browser
   - After that, `git push` will work from any terminal, including Cursor’s

3. **Push**:
   ```bash
   cd "/Users/chandrateja/Downloads/Chandra Teja"
   git push -u origin main
   ```

---

## If "Sign in with GitHub" doesn’t appear

- Ensure the **Git** extension is enabled (it’s built into Cursor)
- Try: **Cursor → Settings** (or `Cmd + ,`) → search **"github"** → check **GitHub**–related extensions

---

## Remote URL

Your remote is set to:
```
https://github.com/tejachandra7/portfolio.git
```

If you prefer SSH and have keys set up:
```bash
git remote set-url origin git@github.com:tejachandra7/portfolio.git
```
