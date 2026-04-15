---
title: "How to Securely Git Clone a GitHub Repository to AWS EC2 with SSH Deploy Keys"
description: "A complete, SEO-friendly guide to securely git clone GitHub repositories to AWS EC2 using read-only SSH deploy keys, proper ~/.ssh/config setup, and production deployment best practices."
date: "2025-08-09"
tags: ["aws", "github", "git", "devops"]
---

If you are looking for a secure way to **git clone a GitHub repository to EC2** for production, the best approach is to use **read-only SSH deploy keys**. In this guide, the scenario uses **two different repositories on one AWS EC2 instance** (example: **englishnesia** and **studiku**) with a clean and auditable setup.

Since GitHub allows **one deploy key per repository**, you need **two SSH key pairs** and two `Host` aliases in `~/.ssh/config`. With this pattern, Git automatically uses the correct key for each repo, reduces credential leakage risk, and keeps deployments consistent.

You can still manage branches such as **`main`** and **`dev`** in each repository (`fetch`, `checkout`, or `git worktree`). If your instance is not ready yet, start with [how to create an EC2 instance on AWS](/blog/create-aws-ec2-instance).

---

## Table of contents

* Why use deploy keys to clone to EC2?
* What is an SSH deploy key in GitHub for EC2?
* Two repos on one EC2: keys and Host aliases
* Step-by-step: set up keys and clone two repositories
* How to manage `main` and `dev` branches (per repo) + git worktree option
* Production security best practices on EC2
* Conclusion

---

## Why use deploy keys to clone to EC2?

Many setups still use **tokens in URLs**, store **PATs in `.env`**, or rely on **one personal SSH key** for multiple servers. In real production environments, this is risky because:

* A compromised server inherits the GitHub access scope of that credential
* It becomes harder to audit who can pull or push
* A leaked token can affect **multiple repositories**

**Best recommendation:** use a **read-only SSH deploy key per repository** to follow the *least privilege* principle without embedding personal GitHub account credentials on the server.

---

## What is an SSH deploy key in GitHub for EC2?

A **deploy key** is an SSH key pair added in **Settings → Deploy keys** for **one specific repository**.

* It can be **read-only**
* It does not replace user account login for other repositories
* It is ideal for **EC2** servers that only need `git pull` / clone

If you have many repositories and a large team, consider a **GitHub App** or a **CI/CD** pipeline. For cloning a few repositories on EC2 servers, deploy keys are still one of the simplest and safest options.

---

## Two repos on one EC2: keys and Host aliases

| GitHub repo | Key file on EC2 | `Host` alias (example) |
|----------------|-------------------|---------------------------|
| `YOUR_USERNAME/englishnesia` | `~/.ssh/github_englishnesia` | `github.com-englishnesia` |
| `YOUR_USERNAME/studiku` | `~/.ssh/github_studiku` | `github.com-studiku` |

**Important:** the **first** public key must only be registered to **englishnesia**; the **second** public key must only be registered to **studiku**. Do not swap them, or GitHub will reject access / route to the wrong repository.

Both blocks use `HostName github.com` and `User git`; the only differences are **`IdentityFile`** and the **`Host`** alias name so each clone URL uses the right identity:

* `git@github.com-englishnesia:USER/englishnesia.git`
* `git@github.com-studiku:USER/studiku.git`

---

## Step-by-step: set up keys and clone two repositories

### 1. Log in to EC2

```bash
ssh -i external.pem ubuntu@IP-EC2
```

Use a **non-root** user (for example `ubuntu` or `deploy`).

---

### 2. Create an SSH key for the first repo (englishnesia)

```bash
ssh-keygen -t ed25519 -C "deploy-englishnesia" -f ~/.ssh/github_englishnesia -N ""
```

---

### 3. Create an SSH key for the second repo (studiku)

```bash
ssh-keygen -t ed25519 -C "deploy-studiku" -f ~/.ssh/github_studiku -N ""
```

Generated files in `~/.ssh/`:

* `github_englishnesia` + `.pub`
* `github_studiku` + `.pub`

---

### 4. Set file permissions

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/github_englishnesia ~/.ssh/github_studiku
chmod 644 ~/.ssh/github_englishnesia.pub ~/.ssh/github_studiku.pub
```

---

### 5. Add public keys in GitHub (twice, one per repo)

```bash
echo "=== Pubkey untuk repo englishnesia ==="
cat ~/.ssh/github_englishnesia.pub
echo "=== Pubkey untuk repo studiku ==="
cat ~/.ssh/github_studiku.pub
```

For **each** repository: open **Settings → Deploy keys → Add deploy key**, paste the matching public key, and use titles such as `EC2 — englishnesia` and `EC2 — studiku`. Keep it **read-only** unless write access is truly required.

![Screenshot of GitHub Deploy Keys page](https://ik.imagekit.io/n1hqrcegw/articles/secure-git-clone-github-ec2-complete-guide/image-01.webp)
*Screenshot: Add deploy key form in GitHub repository settings.*

---

### 6. Use one `~/.ssh/config` file for two Hosts

```bash
nano ~/.ssh/config
```

```bash
Host github.com-englishnesia
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_englishnesia
    IdentitiesOnly yes

Host github.com-studiku
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_studiku
    IdentitiesOnly yes
```

```bash
chmod 600 ~/.ssh/config
```

`IdentitiesOnly yes` prevents SSH from trying other keys, so connection to repo A does not accidentally use repo B's key.

![Screenshot example of ssh config file](https://ik.imagekit.io/n1hqrcegw/articles/secure-git-clone-github-ec2-complete-guide/image-02.webp)
*Screenshot: `~/.ssh/config` with two Host aliases for two different repositories.*

---

### 7. Test connection (optional)

```bash
ssh -T github.com-englishnesia
ssh -T github.com-studiku
```

---

### 8. Clone both repositories into `/var/www` (replace `YOUR_USERNAME`)

```bash
cd /var/www
git clone --branch main --single-branch git@github.com-englishnesia:YOUR_USERNAME/englishnesia.git englishnesia.id
git clone --branch dev --single-branch git@github.com-studiku:YOUR_USERNAME/studiku.git dev.englishnesia.id
```

With this setup, **englishnesia** is in `/var/www/englishnesia.id` (only `main`), and **studiku** is in `/var/www/dev.englishnesia.id` (only `dev`) based on your project naming convention, without storing PATs on the server.

---

## How to manage `main` and `dev` branches (per repo)

To keep deployments stable, use one working directory per main branch. This pattern makes rollback, auditing, and deployment automation much easier.

```bash
cd /var/www/englishnesia.id
git branch --show-current
# expected output: main
```

```bash
cd /var/www/dev.englishnesia.id
git branch --show-current
# expected output: dev
```

If one folder needs to switch branches later, run `git fetch origin` and then `git checkout <branch>`. For production, it is still safer to stay consistent: `englishnesia.id = main`, `dev.englishnesia.id = dev`.

---

## Production security best practices on EC2

### Restrict SSH access to the instance (Security Group)

Avoid open SSH access from `0.0.0.0/0`; restrict access with static IPs, VPN, or Session Manager whenever possible.

### Dedicated deployment user

```bash
sudo adduser deploy
```

Do not routinely clone as **root**.

### One key pair per repository

For **two repos**, use **two** deploy keys (two key pairs), aligned with GitHub's limitation and a smaller *blast radius*.

### Read-only deploy key

Enable write only if the server must **push** to GitHub.

### Minimize PAT usage on the server

If HTTPS is unavoidable, use a **fine-grained PAT** with minimum scope, but still prioritize SSH + deploy keys for cloning on EC2.

### Safe permissions for projects without file uploads

If your application does not need runtime upload/write access, keep source code **read-only** for the web server:

```bash
sudo chown -R deploy:www-data /var/www/englishnesia.id /var/www/dev.englishnesia.id
sudo find /var/www/englishnesia.id /var/www/dev.englishnesia.id -type d -exec chmod 755 {} \;
sudo find /var/www/englishnesia.id /var/www/dev.englishnesia.id -type f -exec chmod 644 {} \;
```

Key principles:

* Directories `755`, files `644`
* Avoid `777`
* Do not grant write permissions to the web server user unless absolutely necessary
* Sensitive files such as `.env` can be restricted further to `640`

## Conclusion

**The safest way to git clone GitHub repositories to AWS EC2** is: one deploy key per repository, strict SSH file permissions, and clear `Host` alias mapping in `~/.ssh/config`. This approach improves repository security, maintainability, and readiness for `main` and `dev` deployment workflows.

---

## Bonus: quick script — two repos (englishnesia & studiku)

```bash
# Kunci repo 1 & 2
ssh-keygen -t ed25519 -C "deploy-englishnesia" -f ~/.ssh/github_englishnesia -N ""
ssh-keygen -t ed25519 -C "deploy-studiku" -f ~/.ssh/github_studiku -N ""

chmod 700 ~/.ssh
chmod 600 ~/.ssh/github_englishnesia ~/.ssh/github_studiku
chmod 644 ~/.ssh/github_englishnesia.pub ~/.ssh/github_studiku.pub

cat ~/.ssh/github_englishnesia.pub
cat ~/.ssh/github_studiku.pub
# Daftarkan masing-masing di Settings → Deploy keys repo yang sesuai

cat >> ~/.ssh/config <<'EOF'
Host github.com-englishnesia
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_englishnesia
    IdentitiesOnly yes

Host github.com-studiku
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_studiku
    IdentitiesOnly yes
EOF

chmod 600 ~/.ssh/config

ssh -T github.com-englishnesia
ssh -T github.com-studiku

cd /var/www
git clone --branch main --single-branch git@github.com-englishnesia:YOUR_USERNAME/englishnesia.git englishnesia.id
git clone --branch dev --single-branch git@github.com-studiku:YOUR_USERNAME/studiku.git dev.englishnesia.id

# Hardening permission (tanpa fitur upload file)
sudo chown -R deploy:www-data /var/www/englishnesia.id /var/www/dev.englishnesia.id
sudo find /var/www/englishnesia.id /var/www/dev.englishnesia.id -type d -exec chmod 755 {} \;
sudo find /var/www/englishnesia.id /var/www/dev.englishnesia.id -type f -exec chmod 644 {} \;
```

Deployment from repository to VPS can continue with a similar pattern in [deploy Laravel to VPS](/blog/deploy-laravel-to-vps) if your stack uses Laravel.
