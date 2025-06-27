---
title: "How to Connect a GoDaddy Domain to a Linux VPS Server"
description: "Discover how to point your GoDaddy domain to a Linux VPS. This step-by-step guide covers DNS setup and server configuration to link your domain to your VPS."
date: "2025-02-09"
tags: ["ubuntu", "devops"]
---

If you’ve purchased a domain on GoDaddy and host your application on a VPS, pointing your domain to your server allows users to access your website easily. This guide shows you how to connect a GoDaddy domain to a Linux VPS (using Nginx as the web server).

---

## Step 1: Get Your VPS IP Address

Connect to your VPS using SSH and run the following command to find your public IP address:

```bash
curl ifconfig.me
```

This IP address will be used in your DNS settings on GoDaddy. Initially, your Laravel application or Nginx welcome page can be accessed via this IP in the browser, such as `http://123.456.789.123`.

Later, after DNS is properly set up, your site will be accessible using the domain name instead, such as `http://jadifullstack.id`.

![Image 1](https://ik.imagekit.io/n1hqrcegw/articles/cara-menghubungkan-domain-godaddy-ke-vps-linux-nginx/gambar-01.webp?updatedAt=1733743922149)

---

## Step 2: Access Your Domain Settings in GoDaddy

Log in to your [GoDaddy account](https://www.godaddy.com/) and navigate to **My Products**. Find the domain you want to configure and click **DNS** or **Manage DNS**.

![Image 2](https://ik.imagekit.io/n1hqrcegw/articles/cara-menghubungkan-domain-godaddy-ke-vps-linux-nginx/gambar-02.webp?updatedAt=1733743922149)

---

## Step 3: Set Up an A Record

In the DNS Management page:

* Find the **A Record** section
* Set **Host** to `@`
* Set **Points to** to your VPS IP address
* Set **TTL** to `600 seconds` (or default)
* Click **Save**

![Image 3](https://ik.imagekit.io/n1hqrcegw/articles/cara-menghubungkan-domain-godaddy-ke-vps-linux-nginx/gambar-03.webp?updatedAt=1733743922149)

Note: DNS propagation may take a few minutes up to 48 hours.

Once this is complete, your server will no longer need to be accessed by IP. Instead, you can use your domain (e.g., `jadifullstack.id`) to open your Laravel or Nginx site.

---

## Step 4: Verify It Works

If Nginx is correctly configured on your VPS (as explained in our [Laravel deployment guide](/blog/deploy-laravel-to-vps)), your Laravel site should now be accessible from your GoDaddy domain.

Initially: `http://123.456.789.123`
Now: `http://jadifullstack.id`

![Image 4](https://ik.imagekit.io/n1hqrcegw/articles/cara-menghubungkan-domain-godaddy-ke-vps-linux-nginx/gambar-04.webp?updatedAt=1733743922149)

---

## Conclusion

You've successfully pointed your GoDaddy domain to your VPS. Now, your server can be accessed through a human-readable domain name. For production, don’t forget to set up HTTPS using Let’s Encrypt and monitor your DNS settings for consistency.



