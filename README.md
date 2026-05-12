# こにー / Konny — VRChat Profile

ファイル構成:
- index.html   … エントリポイント
- style.css    … スタイル
- bundle.jsx   … React コンポーネント（Babel でブラウザ実行）
- effects.js   … 背景パーティクル等
- image-slot.js… 画像ドロップスロット
- assets/      … 画像
- 写真/        … ギャラリー用（直下に **11 フォルダ** で分類）
- gallery-manifest.json … 全枚リスト（`写真/` の JPG 等を列挙。`generate_gallery_manifest.py` で生成）

## 写真を増やしたあと

ブラウザで一覧に反映するには、ルートで次を実行して `gallery-manifest.json` を更新します。

```bash
python generate_gallery_manifest.py
```

HEIC などを JPG にまとめて書き出す場合は `convert_photos_to_jpg.py` を使います（元ファイルは残ります）。

```bash
python convert_photos_to_jpg.py
```

## ローカルで開く

`file://` で直接開くと一部ブラウザで Babel/JSX が CORS で弾かれます。
プロジェクトのフォルダで以下のいずれかを実行してください:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

その後 http://localhost:8080/ をブラウザで開きます。

## Vercel にデプロイ

ビルド不要の静的サイトです。Vercel で GitHub リポジトリをインポートし、**Framework Preset: Other**、**Root Directory: `.`**、**Build Command: 空**、**Output Directory: 空（または `.`）** のままデプロイすれば動きます。ルートの `index.html` がそのまま配信されます。
