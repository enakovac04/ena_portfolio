import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://enakovac04.github.io',        // your GitHub user page
  base: '/ena_portfolio',                      // your repo name
  outDir: './docs',                            // where GitHub Pages will read files
  integrations: [mdx(), sitemap(), tailwind()]
});
