// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    env: {
      schema: {
        PUBLIC_CLOUDINARY_CLOUD_NAME: envField.string({
          context: "server",
          access: "secret"
        })
      }
    }
  }
});