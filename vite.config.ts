import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), ViteAliases({
    prefix: "@/"
  })],
  resolve: {
    alias: [{ find: "@/", replacement: path.resolve(__dirname, "src/") }],
  },
});
