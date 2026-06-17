#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""写真/ 以下の画像から Web 表示用サムネイルを 写真/_thumbs/ に生成する。"""
from __future__ import annotations

import hashlib
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent
PHOTO = ROOT / "写真"
THUMB_ROOT = PHOTO / "_thumbs"
MAX_DIM = 960
QUALITY = 82
EXT = {".jpg", ".jpeg", ".jfif", ".png", ".webp"}


def thumb_path_for(src: Path) -> Path:
    rel = src.relative_to(PHOTO)
    return THUMB_ROOT / rel.with_suffix(".jpg")


def resize_to_web(im: Image.Image) -> Image.Image:
    im = ImageOps.exif_transpose(im)
    if im.mode in ("RGBA", "P"):
        bg = Image.new("RGB", im.size, (8, 4, 13))
        if im.mode == "P":
            im = im.convert("RGBA")
        if im.mode == "RGBA":
            bg.paste(im, mask=im.split()[3])
            im = bg
        else:
            im = im.convert("RGB")
    else:
        im = im.convert("RGB")
    w, h = im.size
    scale = min(1.0, MAX_DIM / max(w, h))
    if scale < 1.0:
        im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
    return im


def main() -> int:
    if not PHOTO.is_dir():
        print("missing:", PHOTO, file=sys.stderr)
        return 1
    done = skipped = errors = 0
    for path in sorted(PHOTO.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in EXT:
            continue
        try:
            rel = path.relative_to(PHOTO)
        except ValueError:
            continue
        if rel.parts[0] == "_thumbs":
            continue
        if len(rel.parts) < 2:
            continue
        out = thumb_path_for(path)
        try:
            src_mtime = path.stat().st_mtime
            if out.exists() and out.stat().st_mtime >= src_mtime:
                skipped += 1
                continue
            out.parent.mkdir(parents=True, exist_ok=True)
            with Image.open(path) as im:
                im = resize_to_web(im)
                im.save(out, "JPEG", quality=QUALITY, optimize=True, progressive=True)
            done += 1
            if done % 50 == 0:
                print(done, "thumbs...", flush=True)
        except Exception as e:
            errors += 1
            print("ERR", path, e, file=sys.stderr)
    print(f"thumbs written: {done} | skipped: {skipped} | errors: {errors}")
    return 0 if errors == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
