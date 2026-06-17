#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""サムネイル生成 → manifest 更新を一括実行。"""
from __future__ import annotations

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PY = sys.executable


def run(name: str) -> int:
    path = ROOT / name
    print("==>", name)
    return subprocess.call([PY, str(path)], cwd=ROOT)


def main() -> int:
    steps = [
        "optimize_hobby_web.py",
        "generate_thumbnails.py",
        "generate_gallery_manifest.py",
    ]
    code = 0
    for s in steps:
        code = run(s)
        if code != 0:
            return code
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
