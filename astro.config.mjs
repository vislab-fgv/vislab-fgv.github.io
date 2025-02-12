// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://vislab-fgv.github.io",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["pub-a4c8f95635834f02b84a1a6d9b4da9ec.r2.dev"],
    remotePatterns: [{ protocol: "https" }],
  },
});
