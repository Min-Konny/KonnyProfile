# こにー / Konny — VRChat Profile

## ローカルで開く URL（重要）

| やり方 | コマンド | URL |
|--------|----------|-----|
| **開発（推奨）** | `npm install` → `npm run dev` | **http://localhost:5173** |
| **本番ビルド確認** | `npm start` | **http://localhost:8080** |
| Python 配信 | `python serve.py` | **http://localhost:8080** |

> 以前お伝えした `python -m http.server 8080`（プロジェクト直下）も動きますが、**最新版は上の 5173 か `npm start` の 8080** を使ってください。

## ファイル構成

- `index.html` … エントリ（Vite）
- `src/main.jsx` … React アプリ本体
- `style.css` … スタイル
- `effects.js` … 背景パーティクル等
- `image-slot.js` … 画像スロット
- `assets/` … アバター・favicon・OGP 画像
- `写真/` … ギャラリー（11 フォルダ + `_thumbs` / `_web`）
- `gallery-manifest.json` … 全枚リスト
- `featured.json` … お気に入りピン留め（パス配列）
- `site.config.json` … OGP 用サイト URL（デプロイ前に編集）

## 開発

```bash
npm install
npm run dev
```

**http://localhost:5173** を開きます（ポート **5173** です。8080 ではありません）。

## ローカル確認（ポート 8080）

```bash
npm start
# または
python serve.py
```

**http://localhost:8080** — `npm run build` 済みの `dist/` を配信します。

ルート直下の `python -m http.server 8080` は Babel フォールバック用です。`npm run sync` で `bundle.jsx` が `src/main.jsx` と同期されます。

## 本番ビルド

```bash
npm run build
npm run preview   # dist/ をローカル確認
```

Vercel は `vercel.json` により `npm run build` → `dist/` を自動デプロイします。

## 写真を増やしたあと

```bash
python update_gallery.py
```

個別に実行する場合:

```bash
python generate_thumbnails.py
python generate_gallery_manifest.py
```

VR の PNG を JPG にする場合:

```bash
python convert_photos_to_jpg.py --folder VR
python update_gallery.py
```

趣味タブ用の中間解像度:

```bash
python optimize_hobby_web.py
```

アバター・favicon・OGP:

```bash
python optimize_assets.py
```

## お気に入り写真

`featured.json` の `paths` に `gallery-manifest.json` と同じパス形式で追加します。

## デプロイ前チェック

1. `site.config.json` の `url` を本番ドメインに更新
2. `npm run build` が通ること
3. 写真フォルダがリポジトリ／ホスティングに含まれること（容量に注意）

## レガシー

`bundle.jsx` は旧 Babel 実行用の残骸です。新規開発は `src/main.jsx` を編集してください。
