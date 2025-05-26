// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://vislab-fgv.github.io",
  base: "/", // Deploying to root of GitHub Pages
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["files.visualdslab.com"],
    remotePatterns: [{ protocol: "https" }],
  },
});
