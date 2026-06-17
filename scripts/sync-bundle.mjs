#!/usr/bin/env node
/** src/bundle-entry.jsx → bundle.jsx（Babel / python -m http.server 用） */
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const entry = path.join(root, "src", "bundle-entry.jsx");
const outPath = path.join(root, "bundle.jsx");

const HOOKS =
  "const { useState, useEffect, useRef, useMemo, useCallback, lazy, Suspense, Fragment } = React;\n";

await esbuild.build({
  entryPoints: [entry],
  bundle: true,
  outfile: outPath,
  format: "iife",
  platform: "browser",
  jsx: "transform",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  external: ["react", "react-dom", "react-dom/client"],
  banner: { js: HOOKS },
  define: {
    "import.meta.env.DEV": "false",
  },
  loader: { ".js": "jsx" },
  legalComments: "none",
});

console.log("synced bundle.jsx ← src/bundle-entry.jsx");
