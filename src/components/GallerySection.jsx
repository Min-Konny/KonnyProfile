import { useState, useEffect, useRef, useMemo } from "react";
import {
  GALLERY_FOLDER_ORDER,
  GALLERY_PAGE_SIZES,
  shuffleArrayInPlace,
  editorialRole,
  galleryThumbSrc,
  galleryLightboxSrc,
  prefetchThumbs,
} from "../lib/gallery.js";

function GalleryThumb({ item, priority = false }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  const src = galleryThumbSrc(item);

  useEffect(() => {
    setLoaded(false);
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <div className={`gallery-thumb ${loaded ? "is-loaded" : ""}`}>
      {!loaded && <div className="gallery-thumb-skel" aria-hidden="true" />}
      <img
        ref={imgRef}
        src={src}
        alt=""
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function GalleryPager({ page, totalPages, total, pageSize, onPage }) {
  if (totalPages <= 0) {
    return (
      <div className="gallery-pager reveal">
        <span className="gallery-pager-meta">0 枚</span>
      </div>
    );
  }
  if (totalPages === 1) {
    return (
      <div className="gallery-pager reveal">
        <span className="gallery-pager-meta">
          {total === 0 ? "0 枚" : `1–${total} / ${total} 枚`}
        </span>
      </div>
    );
  }
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);
  let begin = Math.max(1, page - 2);
  let endP = Math.min(totalPages, begin + 4);
  if (endP - begin < 4) begin = Math.max(1, endP - 4);
  const nums = [];
  for (let i = begin; i <= endP; i++) nums.push(i);
  return (
    <div className="gallery-pager reveal">
      <button type="button" className="gp-btn" disabled={page <= 1} onClick={() => onPage(page - 1)}>
        前へ
      </button>
      <div className="gp-nums">
        {nums.map((n) => (
          <button
            key={n}
            type="button"
            className={`gp-num ${n === page ? "is-on" : ""}`}
            onClick={() => onPage(n)}
          >
            {n}
          </button>
        ))}
      </div>
      <button type="button" className="gp-btn" disabled={page >= totalPages} onClick={() => onPage(page + 1)}>
        次へ
      </button>
      <span className="gallery-pager-meta">
        {start}–{end} / {total} 枚 · {totalPages} ページ
      </span>
    </div>
  );
}

export function GallerySection() {
  const [manifest, setManifest] = useState(null);
  const [loadErr, setLoadErr] = useState(null);
  const [folder, setFolder] = useState("ALL");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(11);
  const [shuffleNonce, setShuffleNonce] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch("gallery-manifest.json")
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((j) => {
        if (cancelled) return;
        if (!j || !Array.isArray(j.items)) throw new Error("bad manifest");
        setManifest(j);
        setLoadErr(null);
      })
      .catch((e) => {
        if (!cancelled) {
          setLoadErr(e.message || "fetch failed");
          setManifest(null);
        }
      });
    return () => { cancelled = true; };
  }, []);

  const shuffledAllItems = useMemo(() => {
    if (!manifest?.items) return [];
    const a = manifest.items.slice();
    shuffleArrayInPlace(a);
    return a;
  }, [manifest, shuffleNonce]);

  const folderOrder = useMemo(() => {
    if (manifest?.folderOrder && Array.isArray(manifest.folderOrder)) return manifest.folderOrder;
    return GALLERY_FOLDER_ORDER;
  }, [manifest]);

  const counts = useMemo(() => {
    const c = {};
    if (!manifest?.items) return c;
    manifest.items.forEach((it) => {
      c[it.category] = (c[it.category] || 0) + 1;
    });
    return c;
  }, [manifest]);

  const itemsByCategory = useMemo(() => {
    const m = {};
    if (!manifest?.items) return m;
    for (const it of manifest.items) {
      if (!m[it.category]) m[it.category] = [];
      m[it.category].push(it);
    }
    for (const k of Object.keys(m)) {
      m[k].sort((a, b) => a.path.localeCompare(b.path, "ja"));
    }
    return m;
  }, [manifest]);

  const filtered = useMemo(() => {
    if (!manifest?.items) return [];
    if (folder === "ALL") return shuffledAllItems;
    return itemsByCategory[folder] || [];
  }, [manifest, folder, shuffledAllItems, itemsByCategory]);

  const totalPages = filtered.length === 0 ? 0 : Math.ceil(filtered.length / pageSize);
  const safePage = totalPages === 0 ? 1 : Math.min(Math.max(1, page), totalPages);
  const pageItems = useMemo(() => {
    if (totalPages === 0) return [];
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, safePage, pageSize, totalPages]);

  const lightboxItem = lightboxIdx != null ? filtered[lightboxIdx] : null;

  function openLightbox(it) {
    const idx = filtered.findIndex((x) => x.id === it.id);
    if (idx >= 0) setLightboxIdx(idx);
  }

  useEffect(() => {
    if (lightboxIdx == null) return;
    function onKey(e) {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setLightboxIdx((i) => (i > 0 ? i - 1 : filtered.length - 1));
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setLightboxIdx((i) => (i < filtered.length - 1 ? i + 1 : 0));
      }
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIdx, filtered.length]);

  useEffect(() => {
    if (pageItems.length) prefetchThumbs(pageItems, pageItems.length);
  }, [folder, safePage, pageItems]);

  useEffect(() => {
    setPage(1);
  }, [folder, pageSize]);

  useEffect(() => {
    if (totalPages > 0 && page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <section id="gallery">
      <div className="reveal">
        <div className="section-label">03 / Gallery — 写真でも遊ぶ</div>
        <h2 className="section-title">スナップの <em>棚</em></h2>
        <div className="section-subtitle">
          リアルとVRCの写真をジャンル別に。<strong>すべて</strong> は11枚ずつめくれます。クリックで拡大、<strong>↻ 並び替え</strong> で順番変更。
        </div>
      </div>

      {!loadErr && !manifest && (
        <p className="gallery-loading reveal">ギャラリー一覧を読み込み中…</p>
      )}

      {loadErr && (
        <div className="gallery-load-error reveal">
          <strong>ギャラリーを表示できませんでした。</strong><br/>
          通信や表示の都合の可能性があります。しばらくしてからページを更新するか、もう一度アクセスしてみてください。
        </div>
      )}

      {!loadErr && manifest && (
        <>
          <div className="gallery-toolbar gallery-toolbar-stack reveal">
            <div className="gallery-folder-tabs" role="tablist" aria-label="フォルダ">
              <button
                type="button"
                role="tab"
                aria-selected={folder === "ALL"}
                className={`gallery-folder-tab ${folder === "ALL" ? "is-on" : ""}`}
                onClick={() => {
                  setPage(1);
                  if (folder !== "ALL") setShuffleNonce((n) => n + 1);
                  setFolder("ALL");
                }}
              >
                <span className="gft-label">すべて</span>
                <span className="gft-count">{manifest.count}</span>
              </button>
              {folderOrder.map((name) => (
                <button
                  key={name}
                  type="button"
                  role="tab"
                  aria-selected={folder === name}
                  className={`gallery-folder-tab ${folder === name ? "is-on" : ""}`}
                  onClick={() => {
                    setPage(1);
                    setFolder(name);
                  }}
                  onMouseEnter={() => prefetchThumbs(itemsByCategory[name], pageSize)}
                  onFocus={() => prefetchThumbs(itemsByCategory[name], pageSize)}
                >
                  <span className="gft-label">{name}</span>
                  <span className="gft-count">{counts[name] ?? 0}</span>
                </button>
              ))}
            </div>
            <div className="gallery-filter-row">
              {folder === "ALL" && (
                <button
                  type="button"
                  className="gallery-shuffle-btn"
                  onClick={() => {
                    setShuffleNonce((n) => n + 1);
                    setPage(1);
                  }}
                >
                  ↻ 並び替え
                </button>
              )}
              <label className="gallery-cat-label">
                <span>1ページ</span>
                <select
                  className="gallery-cat-select"
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {GALLERY_PAGE_SIZES.map((n) => (
                    <option key={n} value={n}>{n} 枚</option>
                  ))}
                </select>
              </label>
              <div className="gt-meta gallery-toolbar-meta">
                この表示 {filtered.length} 枚 / 合計 {manifest.count} 枚
              </div>
            </div>
          </div>

          <GalleryPager
            page={safePage}
            totalPages={totalPages}
            total={filtered.length}
            pageSize={pageSize}
            onPage={setPage}
          />

          {filtered.length === 0 ? (
            <p className="gallery-empty reveal">このフォルダにはまだ写真がありません。ほかのタブも見てみてください。</p>
          ) : (
            <div
              className={folder === "ALL" ? "gallery-editorial" : "gallery-page-grid"}
            >
              {pageItems.map((it, i) => {
                const globalIdx = (safePage - 1) * pageSize + i + 1;
                return (
                <figure
                  key={it.id}
                  className={
                    folder === "ALL"
                      ? `g-card g-card-editorial ge-${editorialRole(i)}`
                      : "g-card g-card-compact"
                  }
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(it)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLightbox(it);
                    }
                  }}
                >
                  <span className="g-index" aria-hidden="true">{String(globalIdx).padStart(2, "0")}</span>
                  <GalleryThumb item={it} priority={i < 5} />
                  <figcaption>
                    <span className="g-label">{it.category}</span>
                    <span className="g-file">{it.file}</span>
                  </figcaption>
                </figure>
              );})}
            </div>
          )}

          {filtered.length > 0 && (
            <GalleryPager
              page={safePage}
              totalPages={totalPages}
              total={filtered.length}
              pageSize={pageSize}
              onPage={setPage}
            />
          )}
        </>
      )}
      {lightboxItem && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="写真プレビュー"
          onClick={() => setLightboxIdx(null)}
        >
          <button type="button" className="gallery-lightbox-close" aria-label="閉じる">×</button>
          <button
            type="button"
            className="gallery-lightbox-nav prev"
            aria-label="前の写真"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) => (i > 0 ? i - 1 : filtered.length - 1));
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-lightbox-nav next"
            aria-label="次の写真"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) => (i < filtered.length - 1 ? i + 1 : 0));
            }}
          >
            ›
          </button>
          <img
            className="gallery-lightbox-img"
            src={galleryLightboxSrc(lightboxItem.path)}
            alt={lightboxItem.file}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="gallery-lightbox-cap" onClick={(e) => e.stopPropagation()}>
            <span className="g-label">{lightboxItem.category}</span>
            <span className="g-file">{lightboxItem.file}</span>
            <span className="gallery-lightbox-pos">
              {lightboxIdx + 1} / {filtered.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
