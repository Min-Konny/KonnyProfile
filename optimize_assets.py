#!/usr/bin/env python3
"""assets/ 内の重い画像を Web 表示用に最適化 + favicon / OGP 画像を生成。"""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps, ImageDraw

ROOT = Path(__file__).resolve().parent / "assets"
BG = (8, 4, 13)


def to_rgb(im: Image.Image, bg=BG) -> Image.Image:
    if im.mode == "RGBA":
        base = Image.new("RGB", im.size, bg)
        base.paste(im, mask=im.split()[3])
        return base
    return im.convert("RGB")


def save_jpg(src: Path, out: Path, max_dim: int = 800, quality: int = 86) -> None:
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        im = to_rgb(im)
        w, h = im.size
        scale = min(1.0, max_dim / max(w, h))
        if scale < 1.0:
            im = im.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        out.parent.mkdir(parents=True, exist_ok=True)
        im.save(out, "JPEG", quality=quality, optimize=True, progressive=True)


def make_og(avatar: Path, out: Path) -> None:
    with Image.open(avatar) as src:
        src = ImageOps.exif_transpose(src)
        src = to_rgb(src)
    canvas = Image.new("RGB", (1200, 630), BG)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, 1199, 629), outline=(212, 175, 122), width=2)
    side = 420
    av = src.copy()
    av = ImageOps.fit(av, (side, side), Image.Resampling.LANCZOS)
    mask = Image.new("L", (side, side), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, side, side), fill=255)
    canvas.paste(av, (90, (630 - side) // 2), mask)
    out.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(out, "JPEG", quality=88, optimize=True, progressive=True)


def make_icons(avatar: Path) -> None:
    with Image.open(avatar) as src:
        src = ImageOps.exif_transpose(src)
        src = to_rgb(src)
    for size, name in ((32, "favicon-32.png"), (180, "apple-touch-icon.png")):
        icon = ImageOps.fit(src, (size, size), Image.Resampling.LANCZOS)
        mask = Image.new("L", (size, size), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, size, size), fill=255)
        out = ROOT / name
        icon_rgba = Image.new("RGBA", (size, size), (*BG, 255))
        icon_rgba.paste(icon, (0, 0), mask)
        icon_rgba.save(out)
    ico_imgs = [ImageOps.fit(src, (s, s), Image.Resampling.LANCZOS) for s in (16, 32, 48)]
    ico_imgs[0].save(
        ROOT / "favicon.ico",
        format="ICO",
        sizes=[(im.width, im.height) for im in ico_imgs],
        append_images=ico_imgs[1:],
    )


def main() -> int:
    avatar = ROOT / "avatar.jpg"
    if not avatar.is_file():
        print("missing avatar.jpg", file=sys.stderr)
        return 1

    alt_png = ROOT / "IMG_4982.png"
    if alt_png.is_file():
        save_jpg(alt_png, ROOT / "avatar-alt.jpg")
        print("wrote avatar-alt.jpg")

    make_og(avatar, ROOT / "og-image.jpg")
    print("wrote og-image.jpg")
    make_icons(avatar)
    print("wrote favicon.ico, favicon-32.png, apple-touch-icon.png")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
