import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// Blog posts live as Markdown/MDX files in src/content/blog/.
// To publish a new post: drop a .mdx file in that folder with the frontmatter
// below. No code changes, no database. See src/content/blog/README.md.
export const BLOG_CATEGORIES = [
  'Paper Breakdowns',
  'Experiment Notes',
  'Implementation Lessons',
  'AI Engineering',
] as const

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    // Exclude the authoring guide (README) — it isn't a post.
    pattern: ['**/*.{md,mdx}', '!**/README.md'],
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(BLOG_CATEGORIES),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog }
