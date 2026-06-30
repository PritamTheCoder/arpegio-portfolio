# Writing blog posts

This is your single place to add blog posts. **To publish a post, add one `.mdx`
(or `.md`) file to this folder.** That's it — the list, the post page, the homepage
preview, the RSS feed, and the sitemap all update automatically on the next build.

## Frontmatter

Every post starts with a frontmatter block:

```mdx
---
title: "Your post title"
description: "One-sentence summary used for SEO and post previews."
pubDate: 2026-07-01
category: "Experiment Notes"        # one of the categories below
tags: ["mobilevit", "cytology"]      # optional
draft: false                          # true = hidden from the live site
---

Your content here. Markdown **works**, and because these are `.mdx` files you can
also use components, code blocks, images, etc.
```

## Categories (pick one)

- `Paper Breakdowns`
- `Experiment Notes`
- `Implementation Lessons`
- `AI Engineering`

To add or rename categories, edit `BLOG_CATEGORIES` in `src/content.config.ts`.

## Tips

- **Filename = URL slug.** `why-mobilevit.mdx` → `/blog/why-mobilevit`. Use lowercase
  hyphenated names.
- **Drafts:** set `draft: true` to keep a post out of the live site (it stays here so
  you can keep working on it).
- **Dates:** `pubDate` controls sort order (newest first) and the displayed date.
- **Code blocks** are syntax-highlighted automatically.
- **Images:** put them next to the post or in `src/assets/` and reference them; Astro
  optimizes them at build time.
