import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static",
  build: {
    inlineStylesheets: "always"
  },
  adapter: cloudflare({
    imageService: "passthrough"
  }),
  devToolbar: {
    enabled: false
  }
});
