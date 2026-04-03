// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://invest-at-13.github.io',
	base: '/invest-at-13',
	integrations: [
		mdx(),
		sitemap(),
	],
});
