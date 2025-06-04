---
title: "Essential PM2 Commands on Ubuntu: Manage Node.js Apps Like a Pro"
description: "Master PM2 with this complete list of commands on Ubuntu. Learn how to start, stop, reload, monitor, and auto-restart your Node.js applications with ease using PM2."
date: "2025-04-13"
tags: ["ubuntu"]
---

### 🚀 **Basic Process Management**

| **Command**                                            | **Description**                                    |
| ------------------------------------------------------ | -------------------------------------------------- |
| `pm2 start app.js`                                     | Start a Node.js application                        |
| `pm2 start app.js --name my-app`                       | Start the app with a custom process name           |
| `pm2 list`                                             | List all running processes managed by PM2          |
| `pm2 show <id or name>` or `pm2 describe <id or name>` | Show detailed information about a specific process |
| `pm2 restart <id or name>`                             | Restart a specific process                         |
| `pm2 reload <id or name>`                              | Gracefully reload a process (zero downtime)        |
| `pm2 stop <id or name>`                                | Stop a specific process                            |
| `pm2 delete <id or name>`                              | Delete a process from the PM2 process list         |
| `pm2 delete all`                                       | Remove all processes from PM2 management           |


---

### 🔁 **Startup & Auto-Restart**

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `pm2 startup`   | Generate and configure PM2 to launch on system boot      |
| `pm2 save`      | Save current process list for automatic reload on reboot |
| `pm2 resurrect` | Restore processes saved via `pm2 save`                   |

---

### 📈 **Monitoring & Logs**

| **Command**             | **Description**                                     |
| ----------------------- | --------------------------------------------------- |
| `pm2 monit`             | Launch PM2's real-time process monitoring dashboard |
| `pm2 logs`              | Show logs for all processes                         |
| `pm2 logs <id or name>` | Show logs for a specific process                    |
| `pm2 flush`             | Clear all logs                                      |
| `pm2 reloadLogs`        | Reload logs in real-time                            |

---

### 🛠️ **Miscellaneous**

| **Command**                      | **Description**                                   |
| -------------------------------- | ------------------------------------------------- |
| `pm2 env <id or name>`           | Show environment variables for a specific process |
| `pm2 reload ecosystem.config.js` | Reload all apps defined in an ecosystem file      |
| `pm2 start ecosystem.config.js`  | Start all apps from an ecosystem file             |


