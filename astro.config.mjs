import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Keep the site set to the GitHub Pages URL (used for canonical/meta tags).
  site: 'https://enakovac04.github.io/ena_portfolio/',
  // Use a different base during dev vs production builds.
  // - Dev server expects absolute root paths ("/") so local dev works.
  // - Production build should use the `/ena_portfolio/` base so absolute asset
  //   URLs point to the correct subpath on GitHub Pages.
  base: process.env.NODE_ENV === 'production' ? '/ena_portfolio/' : '/',
  outDir: './docs',
  integrations: [mdx(), sitemap(), tailwind()],
});
