import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// import { defineConfig, normalizePath } from "vite";
// import { createRequire } from "module";
// import { viteStaticCopy } from "vite-plugin-static-copy";

// const require = createRequire(import.meta.url);
// const pdfjsDistPath = path.dirname(require.resolve("pdfjs-dist/package.json"));
// const cMapsDir = normalizePath(path.join(pdfjsDistPath, "cmaps"));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: cMapsDir,
    //       dest: "",
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
