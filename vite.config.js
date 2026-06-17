import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

const STATIC_BLOCK =
  /<!-- KONNY_STATIC_BEGIN[\s\S]*?<!-- KONNY_STATIC_END -->\s*/;
const FALLBACK_HINT =
  /<script>\s*\(function \(\) \{[\s\S]*?static-fallback-hint[\s\S]*?\}\)\(\);\s*<\/script>\s*/;

/** Vite 利用時は Babel 静的フォールバックを外し、CSS は main.jsx 経由に一本化 */
function konnyHtmlPlugin() {
  return {
    name: "konny-html",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        let out = html.replace(STATIC_BLOCK, "").replace(FALLBACK_HINT, "");
        out = out.replace(
          '<link rel="stylesheet" href="style.css" />\n',
          ""
        );
        if (!out.includes("/src/main.jsx")) {
          out = out.replace(
            "</body>",
            '<script type="module" src="/src/main.jsx"></script>\n</body>'
          );
        }
        return out;
      },
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    konnyHtmlPlugin(),
    viteStaticCopy({
      targets: [
        { src: "assets", dest: "assets" },
        { src: "gallery-manifest.json", dest: "." },
        { src: "site.config.json", dest: "." },
        { src: "image-slot.js", dest: "." },
        { src: "effects.js", dest: "." },
        { src: "style.css", dest: "." },
        { src: "写真", dest: "写真" },
      ],
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
