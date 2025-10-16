// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import db from '@astrojs/db';



// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: 'server',
  adapter: cloudflare()
});