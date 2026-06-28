// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site URL — used for sitemap + canonical/OG tags.
export default defineConfig({
  site: 'https://mu-alpha-theta-ehs.org',
  integrations: [sitemap()],
});
