export const GALLERY_FOLDER_ORDER = [
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
];

export const GALLERY_PAGE_SIZES = [11, 22];
export const EDITORIAL_CYCLE = 11;

export function shuffleArrayInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

/** 11枚セット: 5列 → 2列 → 4列 */
export function editorialRole(index) {
  const pos = index % EDITORIAL_CYCLE;
  if (pos < 5) return "quint";
  if (pos < 7) return "duo";
  return "quad";
}

export function encPhotoPath(p) {
  return p.split("/").map((seg) => encodeURIComponent(seg)).join("/");
}

export function thumbPhotoPath(p) {
  if (!p || !p.startsWith("写真/")) return "";
  const parts = p.split("/");
  const file = parts[parts.length - 1].replace(/\.[^.]+$/i, ".jpg");
  return `写真/_thumbs/${parts.slice(1, -1).join("/")}/${file}`;
}

export function webPhotoPath(p) {
  if (!p || !p.startsWith("写真/")) return p;
  const parts = p.split("/");
  const file = parts[parts.length - 1].replace(/\.[^.]+$/i, ".jpg");
  return `写真/_web/${parts.slice(1, -1).join("/")}/${file}`;
}

export function galleryThumbSrc(it) {
  const t = it.thumb || thumbPhotoPath(it.path);
  return encPhotoPath(t || it.path);
}

export function galleryLightboxSrc(path) {
  return encPhotoPath(thumbPhotoPath(path));
}

export function prefetchThumbs(items, limit = 12) {
  if (!items?.length) return;
  items.slice(0, limit).forEach((it) => {
    const img = new Image();
    img.decoding = "async";
    img.src = galleryThumbSrc(it);
  });
}
