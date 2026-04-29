// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter Tight',
      cssVariable: '--font-inter-tight',
    },
  ],
});
