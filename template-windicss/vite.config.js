import { defineConfig } from "vite";
import voby from "voby-vite";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [
    voby(),
    WindiCSS({
      scan: {
        fileExtensions: ["html", "js", "jsx"],
      },
    }),
  ],
});
