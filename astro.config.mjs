import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    inlineScripts: true,
  },
});