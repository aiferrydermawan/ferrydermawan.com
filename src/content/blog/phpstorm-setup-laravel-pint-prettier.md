---
title: "How to Set Up PhpStorm for Laravel Development with Pint and Prettier"
description: "Learn how to configure PhpStorm for Laravel development, including Laravel Pint for code style and Prettier for frontend formatting. Optimize your workflow with this setup guide."
date: "2024-11-09"
tags: ["laravel"]
---

PhpStorm is a powerful IDE for Laravel development. With the right setup, you can automate code formatting using **Laravel Pint** for PHP and **Prettier** for frontend files (like JavaScript, CSS, and Blade). This guide walks you through configuring both tools to run automatically on save.

---

## Step 0: Install and Configure Pint & Prettier

First, install **Laravel Pint** as a development dependency:

```bash
composer require laravel/pint --dev
```

Then, create a `pint.json` file at the root of your project (optional, but recommended for custom rules):

```json
{
  "preset": "laravel",
  "exclude": [
    "vendor",
    "node_modules"
  ]
}
```

Next, install **Prettier** and its plugins for Tailwind CSS and Blade:

```bash
npm install -D prettier prettier-plugin-tailwindcss @shufo/prettier-plugin-blade
```

Create a `.prettierrc` file at the root of your project:

```json
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "plugins": [
    "prettier-plugin-tailwindcss",
    "@shufo/prettier-plugin-blade"
  ]
}
```

You are now ready to continue with PhpStorm setup.

---

## Step 1: Open Your Laravel Project in PhpStorm

Ensure that your Laravel project has Pint and Prettier already installed.

![Image 1](https://ik.imagekit.io/n1hqrcegw/articles/tingkatkan-produktivitas-phpstorm-laravel-pint-prettier/Screenshot-1.webp?updatedAt=1733060511724)

---

## Step 2: Open Settings → Actions on Save

Go to `Preferences` (or `Settings` on Windows/Linux) → **Actions on Save**.

![Image 2](https://ik.imagekit.io/n1hqrcegw/articles/tingkatkan-produktivitas-phpstorm-laravel-pint-prettier/Screenshot-2.webp?updatedAt=1733060511724)

---

## Step 3: Configure Reformat Code (Uncheck PHP)

Enable **Reformat Code**, but uncheck **PHP** to avoid conflict with Pint.

![Image 3](https://ik.imagekit.io/n1hqrcegw/articles/tingkatkan-produktivitas-phpstorm-laravel-pint-prettier/Screenshot-3.webp?updatedAt=1733060511724)

---

## Step 4: Add a Custom File Watcher for Laravel Pint

Go to `Settings → Tools → File Watchers`, then click the **+** icon to add a new watcher.

![Image 4](https://ik.imagekit.io/n1hqrcegw/articles/tingkatkan-produktivitas-phpstorm-laravel-pint-prettier/Screenshot-4.webp?updatedAt=1733060511724)

Use the following configuration:

```
Name: Pint
File type: PHP
Program: $ProjectFileDir$/vendor/bin/pint
Arguments: $FileRelativePath$
Output paths to refresh: $FileRelativePath$
Working directory: $ProjectFileDir$
```

Under **Advanced Options**, only check:

* *Trigger the watcher on external changes*

![Image 5](https://ik.imagekit.io/n1hqrcegw/articles/tingkatkan-produktivitas-phpstorm-laravel-pint-prettier/Screenshot-5.webp?updatedAt=1733060511724)

---

## Step 5: Enable Prettier Integration

Check the box for **Run Prettier** and click **Configure**.

![Image 6](https://ik.imagekit.io/n1hqrcegw/articles/tingkatkan-produktivitas-phpstorm-laravel-pint-prettier/Screenshot-6.webp?updatedAt=1733060511724)

Enable **Automatic Prettier configuration**.
Add `*.blade.php` to the list of files that Prettier should process.

![Image 7](https://ik.imagekit.io/n1hqrcegw/articles/tingkatkan-produktivitas-phpstorm-laravel-pint-prettier/Screenshot-7.webp?updatedAt=1733060511724)

Make sure Prettier appears with its version number under **Actions on Save** to confirm it’s working.

![Image 8](https://ik.imagekit.io/n1hqrcegw/articles/tingkatkan-produktivitas-phpstorm-laravel-pint-prettier/Screenshot-8.webp?updatedAt=1733060511724)

---

## Conclusion

With Laravel Pint and Prettier configured in PhpStorm, your code stays clean and consistent every time you save. This setup ensures a smooth development workflow, especially when collaborating in a team environment. You can also explore additional automation like PHPStan or ESLint integration for more robust quality checks.


