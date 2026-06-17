#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""写真/ 直下のフォルダ別に画像を列挙し gallery-manifest.json を書き出す（11 分類 = フォルダ名）。"""
from __future__ import annotations

import hashlib
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PHOTO = ROOT / "写真"
OUT = ROOT / "gallery-manifest.json"

EXT = {".jpg", ".jpeg", ".jfif", ".png", ".webp"}

# 表示タブの並び（写真/ 直下のフォルダ名と一致）
GALLERY_FOLDER_ORDER = [
    "VR",
    "ご飯",
    "アート",
    "シーシャ",
    "スノボ",
    "フットサル",
    "ポーカー",
    "旅",
    "こにー",
    "犬",
    "脱出ゲーム",
]


def rel_posix(p: Path) -> str:
    return p.relative_to(ROOT).as_posix()


def skip_if_jpg_exists(path: Path) -> bool:
    """同名 .jpg がある PNG/WebP 等は manifest から除外（VR 変換後の重複防止）。"""
    if path.suffix.lower() not in {".png", ".webp", ".jfif", ".jpeg"}:
        return False
    jpg = path.with_suffix(".jpg")
    return jpg.is_file() and jpg != path


def main() -> int:
    if not PHOTO.is_dir():
        print("missing folder:", PHOTO, file=sys.stderr)
        return 1
    items: list[dict] = []
    for path in sorted(PHOTO.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in EXT:
            continue
        try:
            rel = path.relative_to(PHOTO)
        except ValueError:
            continue
        if rel.parts[0].startswith("_"):
            continue
        if skip_if_jpg_exists(path):
            continue
        parts = rel.parts
        if len(parts) < 2:
            continue
        category = parts[0]
        filename = parts[-1]
        web_path = rel_posix(path)
        slot_id = hashlib.sha256(web_path.encode("utf-8")).hexdigest()[:20]
        thumb_web = f"写真/_thumbs/{rel.with_suffix('.jpg').as_posix()}"
        thumb_path = ROOT / thumb_web
        entry: dict = {
            "id": slot_id,
            "path": web_path,
            "category": category,
            "file": filename,
        }
        if thumb_path.is_file():
            entry["thumb"] = thumb_web
        items.append(entry)
    payload = {
        "version": 2,
        "generated": datetime.now(timezone.utc).isoformat(),
        "count": len(items),
        "folderOrder": GALLERY_FOLDER_ORDER,
        "items": items,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print("wrote", OUT, "-", len(items), "images")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
