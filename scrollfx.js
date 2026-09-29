// ============================================================
// scrollfx.js — スクロール連動演出 (cinematic edition v3)
//   ・スクロールプログレスバー
//   ・ヒーローのスクラブ退場
//   ・幕間シーン (.interlude) のスクラブ制御 — 映像作品の場面
//   ・セクションは静かなフェードで入退場 (世界の邪魔をしない)
//   ・セクションタイトルの1文字ずつ出現 / スタガー出現
//   ・マーキーのスクロール速度連動スキュー
//   ・シネマバー / 自動再生
// prefers-reduced-motion では何もしない。
// ============================================================
(function () {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;
  const isMobile = matchMedia("(max-width: 768px)").matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const ease = (t) => t * t * (3 - 2 * t);

  // ---------- scroll progress bar ----------
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  // ---------- cinema bars ----------
  const cineTop = document.createElement("div");
  cineTop.className = "cinema-bar top";
  const cineBot = document.createElement("div");
  cineBot.className = "cinema-bar bottom";
  cineTop.setAttribute("aria-hidden", "true");
  cineBot.setAttribute("aria-hidden", "true");
  document.body.appendChild(cineTop);
  document.body.appendChild(cineBot);

  // ---------- 自動再生 ----------
  let autoplay = false;
  let autoSpeed = 0;
  const playBtn = document.createElement("button");
  playBtn.className = "autoplay-btn";
  playBtn.type = "button";
  playBtn.innerHTML = "&#9654;&nbsp; PLAY";
  playBtn.setAttribute("aria-label", "自動再生");
  document.body.appendChild(playBtn);
  function setAutoplay(on) {
    autoplay = on;
    playBtn.innerHTML = on ? "&#10073;&#10073;&nbsp; PAUSE" : "&#9654;&nbsp; PLAY";
    playBtn.classList.toggle("is-on", on);
    // 上映モード: ナビ等の UI を隠して映像に集中
    document.body.classList.toggle("autoplaying", on);
  }
  playBtn.addEventListener("click", () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (!autoplay && scrollY > max - 40) window.scrollTo({ top: 0, behavior: "auto" });
    setAutoplay(!autoplay);
  });
  addEventListener("wheel", () => autoplay && setAutoplay(false), { passive: true });
  addEventListener("touchmove", () => autoplay && setAutoplay(false), { passive: true });
  addEventListener("keydown", (e) => {
    if (autoplay && ["ArrowUp", "ArrowDown", "PageUp", "PageDown", " ", "Home", "End"].includes(e.key)) setAutoplay(false);
  });

  // ---------- section title char split ----------
  function splitTitle(title) {
    let ci = 0;
    function walk(node) {
      const kids = Array.from(node.childNodes);
      for (const child of kids) {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          for (const ch of Array.from(child.textContent)) {
            if (/\s/.test(ch)) {
              frag.appendChild(document.createTextNode(ch));
            } else {
              const s = document.createElement("span");
              s.className = "tchar";
              s.style.setProperty("--ci", ci++);
              s.textContent = ch;
              frag.appendChild(s);
            }
          }
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName === "EM") {
          child.classList.add("tchar-block");
          child.style.setProperty("--ci", ci);
          ci += Math.max(2, (Array.from(child.textContent).length * 0.6) | 0);
        }
      }
    }
    walk(title);
    title.classList.add("fx-split");
  }

  // ---------- 遅延ロード要素も拾う共通オブザーバ ----------
  const fxIO = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        fxIO.unobserve(e.target);
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });

  function staggerGroup(selector, step, cap) {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (el.classList.contains("fx-staggered")) return;
      el.classList.add("fx-staggered");
      el.style.transitionDelay = ((i % cap) * step) + "ms";
    });
  }

  function scan() {
    document.querySelectorAll(".section-title:not(.fx-split)").forEach(splitTitle);
    document.querySelectorAll(".proj-card:not(.fx-dir)").forEach((el, i) => {
      el.classList.add("fx-dir", i % 2 ? "fx-right" : "fx-left");
    });
    document.querySelectorAll(".timeline:not(.fx-dir)").forEach((el) => {
      el.classList.add("fx-dir", "fx-left");
    });
    document.querySelectorAll(".hobby-wrap:not(.fx-dir), .contact-card:not(.fx-dir), .konkatsu-gate:not(.fx-dir)").forEach((el) => {
      el.classList.add("fx-dir", "fx-zoom");
    });
    staggerGroup(".game-card", 90, 6);
    staggerGroup(".proj-card", 110, 4);
    staggerGroup(".hero-stats .stat", 120, 4);
    document
      .querySelectorAll(".gallery-editorial > *:not(.fx-item), .gallery-page-grid > *:not(.fx-item)")
      .forEach((el, i) => {
        el.classList.add("fx-item");
        el.style.transitionDelay = ((i % 8) * 70) + "ms";
        fxIO.observe(el);
      });
  }

  const root = document.getElementById("root");
  if (root) {
    let scanTimer = null;
    const mo = new MutationObserver(() => {
      clearTimeout(scanTimer);
      scanTimer = setTimeout(scan, 120);
    });
    mo.observe(root, { childList: true, subtree: true });
  }
  setTimeout(scan, 80);
  setTimeout(scan, 500);
  setTimeout(scan, 1500);

  // ---------- rAF ----------
  let lastY = window.scrollY;
  let vel = 0, skew = 0, cine = 0;

  function frame() {
    const y = window.scrollY;
    const vh = innerHeight;
    const doc = document.documentElement;
    const max = doc.scrollHeight - vh;

    // autoplay: 全編 ~120 秒。幕間タイトルの間はゆっくり流す
    if (autoplay) {
      const base = max / (120 * 60);
      const slow = window.__interludeHold ? 0.45 : 1.15;
      autoSpeed += (base * slow - autoSpeed) * 0.04;
      window.scrollBy(0, autoSpeed);
      if (y >= max - 2) setAutoplay(false);
    } else {
      autoSpeed = 0;
    }

    // progress bar
    bar.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1) : 0})`;

    // velocity → marquee skew & cinema bars
    vel += ((y - lastY) - vel) * 0.12;
    lastY = y;
    const targetSkew = clamp(vel * 0.35, -10, 10);
    skew += (targetSkew - skew) * 0.15;
    const marquee = document.querySelector(".marquee");
    if (marquee) {
      marquee.style.transform = Math.abs(skew) > 0.05 ? `skewX(${skew.toFixed(2)}deg)` : "";
    }
    const cineTarget = clamp(Math.abs(vel) / 34, 0, 1) * 0.9 + (autoplay ? 0.3 : 0);
    cine += (clamp(cineTarget, 0, 1) - cine) * 0.08;
    cineTop.style.transform = `scaleY(${cine.toFixed(3)})`;
    cineBot.style.transform = `scaleY(${cine.toFixed(3)})`;

    // Compact interludes remain readable throughout scrolling.
    document.querySelectorAll(".interlude").forEach((element) => {
      const rect = element.getBoundingClientRect();
      element.classList.toggle("on", rect.top < vh && rect.bottom > 0);
    });
    window.__interludeHold = false;

    // section title parallax
    if (!isMobile) {
      document.querySelectorAll(".section-title.fx-split").forEach((t) => {
        const r = t.getBoundingClientRect();
        if (r.bottom < -80 || r.top > vh + 80) return;
        const off = (r.top + r.height / 2 - vh / 2) * 0.06;
        t.style.setProperty("--plx", (-off).toFixed(1) + "px");
      });
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
