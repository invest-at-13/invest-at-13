// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://invest-at-13.sizuk-h-777.workers.dev',

  integrations: [
      mdx(),
      sitemap(),
	],

  adapter: cloudflare(),
});