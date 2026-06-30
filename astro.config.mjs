import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'

// TODO: set this to your real production domain. It powers canonical URLs,
// the sitemap, and RSS. Keep it in sync with SITE_URL in src/consts.ts.
const SITE = 'https://pritam-thapa.example.com'

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [mdx(), sitemap(), icon()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
})
