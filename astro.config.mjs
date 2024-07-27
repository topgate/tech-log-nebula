import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const isDev = import.meta.env.DEV;

const siteSettings = isDev ? {} : {
  site: 'https://topgate.github.io',
  base: '/tech-log-nebula',
}

// https://astro.build/config
export default defineConfig({
  ...siteSettings,
  integrations: [tailwind()]
})
