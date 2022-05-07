import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";
import voby from "voby/vite";

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
