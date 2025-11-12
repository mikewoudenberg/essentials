import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://essentials.xebia.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    build: {
      cssCodeSplit: false, // Single CSS file for better caching
    },
  },
});
