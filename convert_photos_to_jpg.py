#!/usr/bin/env python3
"""写真/ 以下の HEIC・PNG・WebP・TIFF・BMP を同じ場所に .jpg として書き出す（元ファイルは残す）。"""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps
from pillow_heif import register_heif_opener

register_heif_opener()

IN_EXT = {".heic", ".png", ".webp", ".tif", ".tiff", ".bmp"}
ROOT = Path(__file__).resolve().parent / "\u5199\u771f"


def to_rgb(im: Image.Image) -> Image.Image:
    if im.mode == "RGBA":
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[3])
        return bg
    if im.mode == "P":
        if "transparency" in im.info:
            im = im.convert("RGBA")
            return to_rgb(im)
        return im.convert("RGB")
    return im.convert("RGB")


def main() -> int:
    if not ROOT.is_dir():
        print("not found:", ROOT, file=sys.stderr)
        return 1
    done = 0
    skipped = 0
    errors: list[tuple[str, str]] = []
    for path in sorted(ROOT.rglob("*")):
        if not path.is_file():
            continue
        ext = path.suffix.lower()
        if ext in (".jpg", ".jpeg"):
            continue
        if ext not in IN_EXT:
            continue
        out = path.with_suffix(".jpg")
        try:
            src_mtime = path.stat().st_mtime
            if out.exists() and out.stat().st_mtime >= src_mtime:
                skipped += 1
                continue
            im = Image.open(path)
            im = ImageOps.exif_transpose(im)
            im = to_rgb(im)
            im.save(out, "JPEG", quality=92, optimize=True, progressive=True)
            done += 1
            if done % 40 == 0:
                print(done, "files...", flush=True)
        except Exception as e:
            errors.append((str(path), repr(e)))
    print("written:", done, "| skipped (already fresh):", skipped, "| errors:", len(errors))
    for p, e in errors[:30]:
        print("ERR", p, e)
    if len(errors) > 30:
        print("...", len(errors) - 30, "more errors")
    return 0 if not errors else 1


if __name__ == "__main__":
    raise SystemExit(main())
