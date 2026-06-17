#!/usr/bin/env python3
"""ビルド済み dist/ を http://localhost:8080 で配信する。"""
from __future__ import annotations

import http.server
import socketserver
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
PORT = 8080


def ensure_build() -> None:
    if (DIST / "index.html").is_file():
        return
    print("dist/ がありません。npm run build を実行します…", file=sys.stderr)
    subprocess.run(["npm", "run", "build"], cwd=ROOT, check=True, shell=sys.platform == "win32")


def main() -> None:
    ensure_build()
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"Serving {DIST} at http://localhost:{PORT}/  (Ctrl+C で停止)")
        httpd.serve_forever()


if __name__ == "__main__":
    import os

    os.chdir(DIST)
    main()
