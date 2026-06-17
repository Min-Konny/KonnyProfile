#!/usr/bin/env node
/** src/main.jsx → bundle.jsx（Babel / python -m http.server 用） */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcPath = path.join(root, "src", "main.jsx");
const outPath = path.join(root, "bundle.jsx");

let code = fs.readFileSync(srcPath, "utf8");

code = code.replace(/^import\s+.*?;\s*\n/gm, "");
code = code.replace(
  /if \(import\.meta\.env\?\.DEV\) \{\s*Object\.assign\(window,[\s\S]*?\}\s*\n/,
  ""
);
code = code.replace(
  /createRoot\(document\.getElementById\("root"\)\)\.render/,
  'ReactDOM.createRoot(document.getElementById("root")).render'
);

const hookLine = "const { useState, useEffect, useRef, useMemo, useCallback } = React;\n\n";
if (!code.includes(hookLine.trim())) {
  code = code.replace(
    /\/\/ Components\n/,
    `${hookLine}// Components\n`
  );
}

fs.writeFileSync(outPath, code, "utf8");
console.log("synced bundle.jsx ← src/main.jsx");
