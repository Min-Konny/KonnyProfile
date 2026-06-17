// ============================================================
// Gorgeous edition — bokeh + gold dust + scroll reveal
// ============================================================
(function () {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = matchMedia("(max-width: 768px)").matches;

  // ---- intro: 2回目以降はスキップ ----
  const intro = document.getElementById("intro");
  if (intro) {
    if (sessionStorage.getItem("konny-intro-seen")) {
      intro.remove();
    } else {
      intro.addEventListener("animationend", (e) => {
        if (e.animationName === "introOut") {
          sessionStorage.setItem("konny-intro-seen", "1");
          intro.remove();
        }
      });
    }
  }

  // ---- spawn stardust nodes (slow falling glints across the page) ----
  const sd = document.getElementById("bg-stardust");
  if (sd && !reducedMotion) {
    const N = isMobile ? 10 : 18;
    for (let i = 0; i < N; i++) {
      const s = document.createElement("span");
      s.style.left = (Math.random() * 100) + "%";
      const dur = 18 + Math.random() * 22;
      const delay = -Math.random() * dur;
      const scale = 0.5 + Math.random() * 1.5;
      s.style.transform = `scale(${scale})`;
      s.style.animationDuration = dur + "s";
      s.style.animationDelay = delay + "s";
      sd.appendChild(s);
    }
  }

  const canvas = document.getElementById("particles-canvas");
  if (!canvas || reducedMotion) {
    if (canvas) canvas.style.display = "none";
  } else {
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0, mouseX = -1000, mouseY = -1000;
    let mouseDirty = false;
    const dust = [];
    const bokeh = [];
    const DUST_COUNT = isMobile ? 28 : 55;
    const BOKEH_COUNT = isMobile ? 4 : 6;

    const PALETTE = [
      { h: 38,  s: 70, l: 78 },
      { h: 30,  s: 55, l: 65 },
      { h: 350, s: 55, l: 78 },
      { h: 280, s: 35, l: 80 },
    ];

    function resize() {
      W = canvas.width = window.innerWidth * devicePixelRatio;
      H = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX * devicePixelRatio;
      mouseY = e.clientY * devicePixelRatio;
      mouseDirty = true;
    }, { passive: true });

    for (let i = 0; i < DUST_COUNT; i++) {
      const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      dust.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18 * devicePixelRatio,
        vy: -(Math.random() * 0.22 + 0.05) * devicePixelRatio,
        r: (Math.random() * 1.2 + 0.4) * devicePixelRatio,
        h: c.h, s: c.s, l: c.l,
        phase: Math.random() * Math.PI * 2,
        tspd: 0.01 + Math.random() * 0.025,
      });
    }

    for (let i = 0; i < BOKEH_COUNT; i++) {
      const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      bokeh.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.08 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.05 * devicePixelRatio,
        r: (Math.random() * 80 + 60) * devicePixelRatio,
        h: c.h, s: c.s, l: c.l,
        a: 0.06 + Math.random() * 0.07,
      });
    }

    let t = 0;
    let running = true;
    document.addEventListener("visibilitychange", () => {
      running = !document.hidden;
    });

    function tick() {
      if (running) {
        t += 1;
        ctx.clearRect(0, 0, W, H);

        ctx.globalCompositeOperation = "lighter";
        for (const b of bokeh) {
          b.x += b.vx; b.y += b.vy;
          if (b.x < -b.r) b.x = W + b.r;
          if (b.x > W + b.r) b.x = -b.r;
          if (b.y < -b.r) b.y = H + b.r;
          if (b.y > H + b.r) b.y = -b.r;
          const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
          grad.addColorStop(0,   `hsla(${b.h}, ${b.s}%, ${b.l}%, ${b.a})`);
          grad.addColorStop(0.5, `hsla(${b.h}, ${b.s}%, ${b.l}%, ${b.a * 0.4})`);
          grad.addColorStop(1,   `hsla(${b.h}, ${b.s}%, ${b.l}%, 0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fill();
        }

        for (const p of dust) {
          if (mouseDirty) {
            const dx = mouseX - p.x, dy = mouseY - p.y;
            const d2 = dx * dx + dy * dy;
            const range = 160 * devicePixelRatio;
            if (d2 < range * range && d2 > 1) {
              const d = Math.sqrt(d2);
              p.vx += (dx / d) * 0.015;
              p.vy += (dy / d) * 0.015;
            }
          }
          p.vx *= 0.985; p.vy *= 0.985;
          p.x += p.vx; p.y += p.vy;

          if (p.y < -10) {
            p.y = H + 10;
            p.x = Math.random() * W;
          }
          if (p.x < 0) p.x = W;
          if (p.x > W) p.x = 0;

          const tw = 0.55 + 0.45 * Math.sin(t * p.tspd + p.phase);
          const r = p.r * (0.8 + 0.4 * tw);

          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6);
          glow.addColorStop(0,   `hsla(${p.h}, ${p.s}%, ${p.l}%, ${0.5 * tw})`);
          glow.addColorStop(0.3, `hsla(${p.h}, ${p.s}%, ${p.l}%, ${0.18 * tw})`);
          glow.addColorStop(1,   `hsla(${p.h}, ${p.s}%, ${p.l}%, 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.h}, ${p.s}%, ${Math.min(p.l + 10, 92)}%, ${tw})`;
          ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";
        mouseDirty = false;
      }
      requestAnimationFrame(tick);
    }
    tick();
  }

  // ---- Scroll reveal ----
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add("in-view");
    }
  }, { threshold: 0.12 });

  function observeReveal() {
    document.querySelectorAll(".reveal:not(.observed), .game-card:not(.observed)").forEach((el) => {
      el.classList.add("observed");
      io.observe(el);
    });
  }
  window.observeReveal = observeReveal;
  setTimeout(observeReveal, 100);
  setTimeout(observeReveal, 600);
})();
