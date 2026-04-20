import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://roachroofingcompany.com",
  output: "hybrid",
  adapter: node({ mode: "standalone" }),
  integrations: [tailwind({ applyBaseStyles: false })],
});
