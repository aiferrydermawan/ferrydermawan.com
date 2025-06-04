---
title: "Essential Nginx Commands on Ubuntu: Complete Guide for Beginners"
description: "Learn the most important Nginx commands for Ubuntu, including how to start, stop, restart, and reload Nginx. Perfect for system admins and beginners managing Linux servers."
date: "2025-02-13"
tags: ["nginx", "ubuntu"]
---

### 🔧 **Service Management**

Use `sudo` if you're not logged in as root.

| Command                        | Description                                       |
| ------------------------------ | ------------------------------------------------- |
| `sudo systemctl start nginx`   | Start the Nginx service                           |
| `sudo systemctl stop nginx`    | Stop the Nginx service                            |
| `sudo systemctl restart nginx` | Restart Nginx and reload all configs              |
| `sudo systemctl reload nginx`  | Reload config without dropping active connections |
| `sudo systemctl status nginx`  | Check the current status of Nginx                 |
| `sudo systemctl enable nginx`  | Enable Nginx to start at boot                     |
| `sudo systemctl disable nginx` | Disable Nginx from auto-starting at boot          |

---

### ⚙️ **Configuration & Testing**

| Command                | Description                                 |
| ---------------------- | ------------------------------------------- |
| `sudo nginx -t`        | Test Nginx configuration for syntax errors  |
| `sudo nginx -s reload` | Reload Nginx via CLI                        |
| `sudo nginx -s stop`   | Stop Nginx via CLI                          |
| `sudo nginx -s quit`   | Gracefully shut down Nginx                  |
| `nginx -v`             | Show Nginx version                          |
| `nginx -V`             | Show version with build options and modules |

---

### 📁 **Default Configuration Paths (Ubuntu)**

| Path                          | Description                                                    |
| ----------------------------- | -------------------------------------------------------------- |
| `/etc/nginx/nginx.conf`       | Main Nginx config file                                         |
| `/etc/nginx/sites-available/` | Directory for available virtual host configs                   |
| `/etc/nginx/sites-enabled/`   | Directory for enabled sites (symlinked from `sites-available`) |
| `/var/www/html/`              | Default web root directory                                     |

---

### 🛠️ **Extra Tips**

* After editing the config:

  ```bash
  sudo nginx -t && sudo systemctl reload nginx
  ```

* To view logs:

  ```bash
  tail -f /var/log/nginx/access.log
  tail -f /var/log/nginx/error.log
  ```
