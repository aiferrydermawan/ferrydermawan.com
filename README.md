# Ferry Dermawan - Personal Website

Personal website and blog built with Next.js, featuring blog posts and short articles about web development, AWS, and DevOps.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 15.3.2 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Content**: Markdown files with frontmatter
- **Comments**: Giscus
- **Deployment**: Vercel (or your preferred platform)

## Features

- 📝 Blog posts and short articles
- 🌓 Dark/Light theme toggle
- 💬 Giscus comments integration
- 🗺️ Auto-generated sitemap
- 📱 Responsive design
- ⚡ Fast performance with Next.js

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ferrydermawan
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run generate-sitemap` - Generate sitemap.xml file

## Project Structure

```
src/
├── components/      # React components (navbar, footer, layout, etc.)
├── content/         # Markdown content files
│   ├── blog/       # Blog posts
│   └── shorts/     # Short articles
├── contexts/        # React contexts (theme, etc.)
├── lib/            # Utility functions
│   ├── posts.ts    # Post fetching and parsing
│   └── sitemap.ts  # Sitemap generation
├── pages/          # Next.js pages
│   ├── blog/       # Blog pages
│   └── shorts/     # Shorts pages
└── styles/         # Global styles
```

## Adding New Content

### Blog Posts

Create a new markdown file in `src/content/blog/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
description: "Post description"
---

Your content here...
```

### Short Articles

Create a new markdown file in `src/content/shorts/` with the same frontmatter format.

## Generating Sitemap

To generate or update the sitemap:

```bash
npm run generate-sitemap
```

This will create/update `public/sitemap.xml` with all your pages and posts.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Giscus Documentation](https://giscus.app)

## License

Private project - All rights reserved.
