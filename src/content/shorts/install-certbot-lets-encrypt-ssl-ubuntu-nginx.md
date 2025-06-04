---
title: "How to Install Certbot Let’s Encrypt SSL on Ubuntu with NGINX"
description: "Learn how to install Certbot and enable free Let’s Encrypt SSL on your Ubuntu server with NGINX. This step-by-step guide covers Ubuntu 16.04, 18.04+, and includes automatic certificate renewal setup."
date: "2025-03-13"
tags: ["ubuntu", "nginx"]
---

A complete and beginner-friendly guide to install **Certbot Let’s Encrypt SSL** on **Ubuntu servers with NGINX**, enabling free **HTTPS encryption** with **automatic certificate renewal**.

---

## 📦 Installing Certbot on Ubuntu 16.04

For users running Ubuntu 16.04, execute the following commands:

```bash
apt-get update
sudo apt-get install certbot
sudo apt-get install python-certbot-nginx
```

---

## 📦 Installing Certbot on Ubuntu 18.04 and Later

For Ubuntu 18.04 or any newer version, run the following:

```bash
apt-get update
sudo apt-get install certbot
sudo apt-get install python3-certbot-nginx
```

---

## 🌐 Obtain a Let’s Encrypt SSL Certificate for NGINX

Once Certbot is installed, use this command to **automatically configure HTTPS for your domain**:

```bash
sudo certbot --nginx -d example.com
```

Replace `example.com` with your actual domain name.

---

## 🔁 Automatically Renew Let’s Encrypt SSL Certificates

To ensure your SSL certificates are **renewed automatically**, add a cron job as follows:

### Edit Crontab

```bash
crontab -e
```

### Add the Following Line

```bash
0 12 * * * /usr/bin/certbot renew --quiet
```

This command runs the renewal process **daily at 12:00 PM**.

---

## ✅ Conclusion

Your website is now secured with **free HTTPS using Let’s Encrypt**, and the SSL certificate will automatically renew without manual intervention.
