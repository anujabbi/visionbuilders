import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.visionbuilders.org',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
