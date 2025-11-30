import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.moezh.com",

  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  adapter: cloudflare(),
});
