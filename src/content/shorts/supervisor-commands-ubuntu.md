---
title: "Complete List of Supervisor Commands on Ubuntu for Process Management"
description: "Discover the most useful Supervisor commands on Ubuntu to manage background processes. Learn how to start, stop, reload, and monitor programs using supervisorctl effectively."
date: "2025-05-13"
tags: ["ubuntu"]
---

### 🔧 **Service Management (Ubuntu-based systems)**

| Command                             | Description                             |
| ----------------------------------- | --------------------------------------- |
| `sudo systemctl start supervisor`   | Start the Supervisor service            |
| `sudo systemctl stop supervisor`    | Stop the Supervisor service             |
| `sudo systemctl restart supervisor` | Restart Supervisor                      |
| `sudo systemctl status supervisor`  | Check the status of Supervisor          |
| `sudo systemctl enable supervisor`  | Enable Supervisor to run at boot        |
| `sudo systemctl disable supervisor` | Disable Supervisor from running at boot |

---

### ⚙️ **Supervisor CLI Commands**

These use the `supervisorctl` command:

| Command                                | Description                                          |
| -------------------------------------- | ---------------------------------------------------- |
| `sudo supervisorctl`                   | Enter Supervisor interactive mode                    |
| `sudo supervisorctl status`            | View the status of all managed processes             |
| `sudo supervisorctl start <program>`   | Start a specific program                             |
| `sudo supervisorctl stop <program>`    | Stop a specific program                              |
| `sudo supervisorctl restart <program>` | Restart a specific program                           |
| `sudo supervisorctl reread`            | Reread config files (does **not** apply changes yet) |
| `sudo supervisorctl update`            | Apply changes after `reread` (add/remove programs)   |
| `sudo supervisorctl reload`            | Restart Supervisor and all managed processes         |
| `sudo supervisorctl shutdown`          | Gracefully shut down Supervisor daemon               |

---

### 📁 **Supervisor Config Locations (Ubuntu)**

| Path                               | Description                                        |
| ---------------------------------- | -------------------------------------------------- |
| `/etc/supervisor/supervisord.conf` | Main Supervisor config file                        |
| `/etc/supervisor/conf.d/`          | Directory to store individual program config files |

---

### 🛠️ **Example Workflow After Adding a New Program**

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start your_program_name
```

