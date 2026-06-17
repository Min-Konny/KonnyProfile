#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""趣味タブ用の中間解像度画像を 写真/_web/ に生成する。"""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent
PHOTO = ROOT / "写真"
WEB_ROOT = PHOTO / "_web"
MAX_DIM = 1200
QUALITY = 85

HOBBY_PHOTOS = [
    "写真/シーシャ/IMG_4477.jpg",
    "写真/スノボ/IMG_3997.jpg",
    "写真/ポーカー/IMG_0762.jpg",
    "写真/脱出ゲーム/IMG_0496.JPG",
    "写真/フットサル/IMG_3424.jpg",
    "写真/アート/IMG_4528.jpg",
]


def web_path(src_rel: str) -> Path:
    rel = Path(src_rel.removeprefix("写真/"))
    return WEB_ROOT / rel.with_suffix(".jpg")


def main() -> int:
    done = 0
    for rel in HOBBY_PHOTOS:
        src = ROOT / Path(*rel.split("/"))
        if not src.is_file():
            # case-insensitive fallback
            parent = ROOT / Path(rel).parent
            name = Path(rel).name
            found = None
            if parent.is_dir():
                for f in parent.iterdir():
                    if f.name.lower() == name.lower():
                        found = f
                        break
            src = found or src
        if not src.is_file():
            print("skip missing:", rel, file=sys.stderr)
            continue
        out = web_path(rel)
        try:
            src_mtime = src.stat().st_mtime
            if out.exists() and out.stat().st_mtime >= src_mtime:
                continue
            out.parent.mkdir(parents=True, exist_ok=True)
            with Image.open(src) as im:
                im = ImageOps.exif_transpose(im)
                im = im.convert("RGB")
                w, h = im.size
                scale = min(1.0, MAX_DIM / max(w, h))
                if scale < 1.0:
                    im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
                im.save(out, "JPEG", quality=QUALITY, optimize=True, progressive=True)
            done += 1
            print("wrote", out.relative_to(ROOT))
        except Exception as e:
            print("ERR", rel, e, file=sys.stderr)
    print("hobby web:", done, "files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
