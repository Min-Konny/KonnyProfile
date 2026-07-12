import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

const root = resolve(dirname(fileURLToPath(import.meta.url)));

const STATIC_BLOCK =
  /<!-- KONNY_STATIC_BEGIN[\s\S]*?<!-- KONNY_STATIC_END -->\s*/;
const FALLBACK_HINT =
  /<script>\s*\(function \(\) \{[\s\S]*?static-fallback-hint[\s\S]*?\}\)\(\);\s*<\/script>\s*/;

function loadSiteConfig() {
  return JSON.parse(readFileSync(resolve(root, "site.config.json"), "utf8"));
}

function absUrl(base, path) {
  if (!path) return path;
  if (path.startsWith("http")) {
    return path.replace(/([^:])\/+/g, "$1/");
  }
  const root = base.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${root}${p}`.replace(/([^:])\/+/g, "$1/");
}

function injectSiteMeta(html, { absImages = false, ogPathOverride = null } = {}) {
  const site = loadSiteConfig();
  const base = site.url.replace(/\/$/, "");
  let out = html;

  out = out.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${site.description}" />`
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${site.title}" />`
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${site.description}" />`
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${site.title}" />`
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${site.description}" />`
  );
  out = out.replace(
    /<title>[^<]*<\/title>/,
    `<title>${site.title}</title>`
  );
  if (absImages) {
    const hashed = ogPathOverride || html.match(/\/assets\/og-image-[A-Za-z0-9_-]+\.jpg/)?.[0];
    const ogPath = hashed || site.ogImage || "/assets/og-image.jpg";
    const ogAbs = absUrl(base, ogPath);
    out = out.replace(/__KONNY_OG_IMAGE__/g, ogAbs);
    out = out.replace(/__KONNY_SITE_URL__/g, base);
    out = out.replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${ogAbs}" />`
    );
    out = out.replace(
      /<meta name="twitter:image" content="[^"]*" \/>/,
      `<meta name="twitter:image" content="${ogAbs}" />`
    );
  } else {
    const ogImage = absUrl(base, site.ogImage || "/assets/og-image.jpg");
    out = out.replace(/__KONNY_OG_IMAGE__/g, ogImage);
    out = out.replace(/__KONNY_SITE_URL__/g, base);
    out = out.replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${ogImage}" />`
    );
    out = out.replace(
      /<meta name="twitter:image" content="[^"]*" \/>/,
      `<meta name="twitter:image" content="${ogImage}" />`
    );
  }

  out = out.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${base}/" />`
  );

  if (!out.includes('rel="canonical"')) {
    out = out.replace(
      "</head>",
      `<link rel="canonical" href="${base}/" />\n</head>`
    );
  }

  return out;
}

/** Vite dev では style.css を link でも読む。build 時のみ main.jsx 経由に一本化 */
function konnyHtmlPrePlugin(command) {
  return {
    name: "konny-html-pre",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        let out = html.replace(STATIC_BLOCK, "").replace(FALLBACK_HINT, "");
        if (command === "build") {
          out = out.replace(
            '<link rel="stylesheet" href="style.css" />\n',
            ""
          );
        }
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

function konnyHtmlPostPlugin() {
  return {
    name: "konny-html-post",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return injectSiteMeta(html, { absImages: false });
      },
    },
    generateBundle(_, bundle) {
      const htmlAsset = bundle["index.html"];
      if (!htmlAsset || htmlAsset.type !== "asset") return;
      const ogKey = Object.keys(bundle).find((k) => /^assets\/og-image.*\.jpg$/.test(k));
      htmlAsset.source = injectSiteMeta(htmlAsset.source.toString(), {
        absImages: true,
        ogPathOverride: ogKey ? `/${ogKey}` : null,
      });
    },
  };
}

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    konnyHtmlPrePlugin(command),
    konnyHtmlPostPlugin(),
    viteStaticCopy({
      targets: [
        { src: "assets", dest: "assets" },
        { src: "gallery-manifest.json", dest: "." },
        { src: "site.config.json", dest: "." },
        // JS/CSS は build 時のみコピーする。
        // dev で含めると static-copy のミドルウェアが Vite の変換より先に
        // /style.css 等を素の MIME で返してしまい、main.jsx の
        // `import "../style.css"` が MIME エラーで死んで React が起動しない。
        ...(command === "build"
          ? [
              { src: "image-slot.js", dest: "." },
              { src: "effects.js", dest: "." },
              { src: "scrollfx.js", dest: "." },
              { src: "bg3d.js", dest: "." },
              { src: "style.css", dest: "." },
            ]
          : []),
        { src: "写真/_thumbs/**/*", dest: "写真/_thumbs" },
        { src: "写真/_web/**/*", dest: "写真/_web" },
      ],
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: false,
  },
}));
