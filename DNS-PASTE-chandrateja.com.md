# DNS records for **chandrateja.com** (Vercel)

Use this **after** you have:

1. Pushed this repo to GitHub  
2. Imported the project on **Vercel** and completed a successful deploy  
3. In Vercel: **Project → Settings → Domains** → added **`chandrateja.com`** (and **`www.chandrateja.com`** if you want www)

> **Always compare with Vercel’s Domains UI.** If Vercel shows different values, use **theirs** (they occasionally update IPs or add a verification TXT).

---

## Option A — Root + www (most common)

Paste at your **registrar / DNS host** (where you manage DNS for `chandrateja.com`):

| Type  | Name / Host | Value / Points to        | TTL   |
|-------|----------------|---------------------------|-------|
| **A** | `@` *(or blank, or `chandrateja.com` — depends on provider)* | `76.76.21.21` | 3600 or Auto |
| **CNAME** | `www` | `cname.vercel-dns.com` | 3600 or Auto |

- **Remove** any old **A** or **AAAA** or **CNAME** for `@` / root that pointed to a previous host (only one apex setup should win).
- If your DNS provider does not allow **CNAME on www** next to an A on apex, follow what Vercel suggests in the dashboard (some use **CNAME flattening** / **ALIAS** for apex instead).

---

## TXT records (Vercel)

Vercel often asks for a **TXT** record to **prove you own the domain**. The **value is unique to your account and domain** — you cannot copy it from here. You must copy it from the Vercel UI.

### Where to get the exact TXT in Vercel

1. **Project → Settings → Domains**  
2. Click your domain (**chandrateja.com** or **www.chandrateja.com**) if it shows **Pending** / **Invalid** / **Configuration needed**.  
3. Expand **DNS** or **Learn more** — Vercel lists the records to add, including any **TXT**.

### Typical verification TXT (structure — your value will differ)

| Type | Name / Host *(at your DNS provider)* | Value *(copy from Vercel — example shape only)* |
|------|----------------------------------------|--------------------------------------------------|
| **TXT** | `_vercel` | Often looks like `vc-domain-verify=chandrateja.com,xxxxxxxx` *(your token is different)* |

**Host / Name field by provider:**

| Provider style | What to enter for the TXT **name** |
|----------------|-------------------------------------|
| Many (Cloudflare, Namecheap, etc.) | `_vercel` |
| Some append the domain automatically | `_vercel` only (not `_vercel.chandrateja.com` unless the UI asks for the full name) |
| If they want the **full hostname** | `_vercel.chandrateja.com` |

**Value:** paste the **entire** string Vercel shows (one line, no quotes unless your DNS UI requires them).

### If Vercel shows a second TXT (e.g. for `www`)

Sometimes **apex** and **www** each have their own line in the dashboard. Add **every** TXT record Vercel lists — same rules: match **Name** and **Value** exactly.

### Optional TXT (not required for the website)

- **SPF / DKIM** for email — only if you send mail from `@chandrateja.com` (Google Workspace, etc.). That is separate from Vercel; use what your email provider gives you.

---

## After saving DNS

- Wait **5–60 minutes** (sometimes up to 24–48 hours).  
- In Vercel → Domains, wait until the domain shows **Valid**.  
- Open `https://chandrateja.com` and test `/about` and `/case-study/onelern-assessments` (refresh each).

---

## If you use Netlify instead of Vercel

**Do not use the table above.** In Netlify: **Domain management → Add domain** and copy the records **Netlify shows** (they differ per site and often use a **CNAME** to `*.netlify.app` or their load balancer).

---

## What I cannot do for you

- Create your Vercel account or click **Import** on your repo  
- Add the domain inside Vercel (required before DNS fully works)  
- Log in to your domain registrar  

Your repo is already configured with **`vercel.json`** and **`DEPLOY.md`** for the deploy side.
