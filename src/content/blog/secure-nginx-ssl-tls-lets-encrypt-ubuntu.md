---
title: "How to Secure Nginx with SSL/TLS HTTPS Using Let’s Encrypt on Ubuntu"
description: "Learn how to secure your Nginx server with free SSL/TLS certificates from Let’s Encrypt on Ubuntu. Follow this guide to enable HTTPS and protect your website."
date: "2025-05-09"
tags: ["ubuntu", "devops"]
---

Enabling HTTPS on your website is crucial for security, SEO, and user trust. Thankfully, Let’s Encrypt offers free SSL/TLS certificates that are easy to set up on an Nginx server. In this tutorial, we’ll walk through how to secure your Nginx server using Let’s Encrypt on Ubuntu.

---

## Step 1: Check Your Website Before SSL

Before adding SSL, your website is likely still served over plain HTTP.

Example:
`http://jadifullstack.id`

![Image 1](https://ik.imagekit.io/n1hqrcegw/articles/cara-mengamankan-nginx-ssl-tls-https-lets-encrypt-ubuntu/gambar-01.webp?updatedAt=1733852578858)

---

## Step 2: Install Certbot and the Nginx Plugin

Make sure your system is up to date:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

Certbot is the tool that will communicate with Let’s Encrypt and configure Nginx automatically.

---

## Step 3: Request an SSL Certificate

Run the following command to request and install your SSL certificate:

```bash
sudo certbot --nginx -d jadifullstack.id
```

If successful, you'll see a confirmation message:

> "Successfully received certificate"

![Image 2](https://ik.imagekit.io/n1hqrcegw/articles/cara-mengamankan-nginx-ssl-tls-https-lets-encrypt-ubuntu/gambar-02.webp?updatedAt=1733852578858)

---

## Step 4: Verify HTTPS is Working

After a successful setup, your website will now be accessible via HTTPS.

Example:
`https://jadifullstack.id`

![Image 3](https://ik.imagekit.io/n1hqrcegw/articles/cara-mengamankan-nginx-ssl-tls-https-lets-encrypt-ubuntu/gambar-03.webp?updatedAt=1733852578858)

Check that your browser shows a secure padlock and that HTTP requests are redirected to HTTPS.

---

## Step 5: Enable Auto Renewal

Let’s Encrypt certificates expire every 90 days. Certbot makes it easy to auto-renew them.

You can verify the auto-renewal configuration with this command:

```bash
sudo certbot renew --dry-run
```

To schedule auto-renewal using `cron`, run:

```bash
crontab -e
```

Then add the following line to renew the certificate daily at noon:

```bash
0 12 * * * /usr/bin/certbot renew --quiet
```

![Image 4](https://ik.imagekit.io/n1hqrcegw/articles/cara-mengamankan-nginx-ssl-tls-https-lets-encrypt-ubuntu/gambar-04.webp?updatedAt=1733852578858)

---

## Conclusion

Now your Ubuntu VPS running Nginx is secured with HTTPS using a free SSL certificate from Let’s Encrypt. This simple setup improves trust, SEO ranking, and data protection. Always monitor your certificate expiration or use Certbot's auto-renewal to avoid disruptions.

Want to take it further? Consider setting up a redirect from HTTP to HTTPS or enabling HTTP/2 for better performance!


