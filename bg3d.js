// ============================================================
// bg3d.js — Three.js 全ページ3D背景 v4 (Epic edition)
//   章 (セクション) ごとに景色そのものが変わる:
//   ・絵画風の立体山岳地形 (章ごとに山の高さが劇的に変化)
//   ・Hobbies: 無数のランタンが立ちのぼる
//   ・Gallery: 霧が晴れ高峰の上へ + オーロラ + 実際の写真が額縁で浮かぶ
//   ・Games/Studio: 巨大な幾何構造体が回る
//   ・婚活: 花吹雪の嵐 + ローズの巨大月
//   ・Contact: 夜明け — 地平線が輝き星が消える
// ============================================================
(function () {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;
  const isMobile = matchMedia("(max-width: 768px)").matches;

  const THREE_CDN = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

  function loadThree() {
    return new Promise((resolve, reject) => {
      if (window.THREE) return resolve(window.THREE);
      const s = document.createElement("script");
      s.src = THREE_CDN;
      s.crossOrigin = "anonymous";
      s.onload = () => (window.THREE ? resolve(window.THREE) : reject(new Error("no THREE")));
      s.onerror = () => reject(new Error("three load failed"));
      document.head.appendChild(s);
    });
  }

  // ---- パレット ----
  const GOLD    = { r: 0.831, g: 0.686, b: 0.478 };
  const GOLD_HI = { r: 0.945, g: 0.851, b: 0.659 };
  const ROSE    = { r: 0.910, g: 0.706, b: 0.722 };
  const LILAC   = { r: 0.788, g: 0.722, b: 0.890 };
  const DLILAC  = { r: 0.640, g: 0.580, b: 0.840 };
  const CHAMP   = { r: 0.945, g: 0.878, b: 0.761 };
  const IVORY   = { r: 0.973, g: 0.941, b: 0.863 };
  const WHITE   = { r: 1, g: 1, b: 1 };

  // ---- 章ごとの世界設定 ----
  const CH = {
    hero:     { label: "01 / Home",     tint: GOLD,    hi: GOLD_HI, moon: WHITE, glowC: GOLD,
                fog: { r: 0.071, g: 0.047, b: 0.102 },
                camY: 6.2, petal: 0.3, dust: 1.0, bokeh: 1.0, star: 0.9, amp: 1.0,
                glow: 0.45, aurora: 0, lantern: 0.25, tech: 0, photos: 0, moonS: 30, moonY: 30, fogD: 0.015 },
    hobbies:  { label: "02 / Hobbies",  tint: CHAMP,   hi: GOLD_HI, moon: WHITE, glowC: CHAMP,
                fog: { r: 0.086, g: 0.058, b: 0.094 },
                camY: 5.6, petal: 0.4, dust: 1.3, bokeh: 1.5, star: 0.8, amp: 0.8,
                glow: 0.7, aurora: 0, lantern: 1, tech: 0, photos: 0, moonS: 28, moonY: 30, fogD: 0.016 },
    gallery:  { label: "03 / Gallery",  tint: GOLD_HI, hi: IVORY,   moon: WHITE, glowC: GOLD_HI,
                fog: { r: 0.059, g: 0.047, b: 0.110 },
                camY: 12, petal: 0.2, dust: 0.7, bokeh: 0.7, star: 1.3, amp: 1.75,
                glow: 0.5, aurora: 1, lantern: 0.1, tech: 0, photos: 1, moonS: 34, moonY: 36, fogD: 0.009 },
    games:    { label: "04 / Games",    tint: LILAC,   hi: LILAC,   moon: LILAC, glowC: LILAC,
                fog: { r: 0.055, g: 0.049, b: 0.122 },
                camY: 7, petal: 0.15, dust: 2.2, bokeh: 1.0, star: 1.0, amp: 1.3,
                glow: 0.85, aurora: 0.2, lantern: 0, tech: 1, photos: 0, moonS: 30, moonY: 32, fogD: 0.013 },
    dev:      { label: "05 / Studio",   tint: DLILAC,  hi: LILAC,   moon: WHITE, glowC: LILAC,
                fog: { r: 0.053, g: 0.047, b: 0.114 },
                camY: 7.6, petal: 0.1, dust: 1.4, bokeh: 0.9, star: 1.1, amp: 1.05,
                glow: 0.5, aurora: 0.1, lantern: 0, tech: 0.6, photos: 0, moonS: 30, moonY: 30, fogD: 0.013 },
    career:   { label: "06 / Career",   tint: GOLD,    hi: CHAMP,   moon: WHITE, glowC: GOLD,
                fog: { r: 0.075, g: 0.051, b: 0.098 },
                camY: 6, petal: 0.25, dust: 1.0, bokeh: 1.0, star: 0.9, amp: 0.95,
                glow: 0.6, aurora: 0, lantern: 0.4, tech: 0, photos: 0, moonS: 30, moonY: 30, fogD: 0.014 },
    konkatsu: { label: "07 / Bonus", tint: ROSE,    hi: ROSE,    moon: ROSE, glowC: ROSE,
                fog: { r: 0.096, g: 0.047, b: 0.083 },
                camY: 4.7, petal: 4, dust: 0.8, bokeh: 1.3, star: 0.7, amp: 0.65,
                glow: 1.0, aurora: 0, lantern: 0.2, tech: 0, photos: 0, moonS: 46, moonY: 26, fogD: 0.018 },
    contact:  { label: "08 / Friend",   tint: IVORY,   hi: IVORY,   moon: { r: 1, g: 0.96, b: 0.88 }, glowC: IVORY,
                fog: { r: 0.102, g: 0.075, b: 0.106 },
                camY: 5.4, petal: 0.4, dust: 0.5, bokeh: 1.0, star: 0.12, amp: 0.5,
                glow: 1.5, aurora: 0, lantern: 0.5, tech: 0, photos: 0, moonS: 62, moonY: 13, fogD: 0.0105 },
  };
  CH["contact-final"] = CH.contact;
  const NUMS = ["camY", "petal", "dust", "bokeh", "star", "amp", "glow", "aurora", "lantern", "tech", "photos", "moonS", "moonY", "fogD"];
  const COLS = ["tint", "hi", "moon", "glowC", "fog"];

  // ---- noise ----
  function makeNoise(seed) {
    function hash(x, y) {
      let h = (x * 374761393 + y * 668265263 + seed * 144269504) | 0;
      h = (h ^ (h >> 13)) * 1274126177;
      return (((h ^ (h >> 16)) >>> 0) / 4294967295) * 2 - 1;
    }
    const lerp = (a, b, t) => a + (b - a) * t;
    const fade = (t) => t * t * (3 - 2 * t);
    function n2(x, y) {
      const xi = Math.floor(x), yi = Math.floor(y);
      const xf = x - xi, yf = y - yi;
      return lerp(
        lerp(hash(xi, yi), hash(xi + 1, yi), fade(xf)),
        lerp(hash(xi, yi + 1), hash(xi + 1, yi + 1), fade(xf)),
        fade(yf)
      );
    }
    return function fbm(x, y) {
      let v = 0, amp = 1, f = 1, tot = 0;
      for (let o = 0; o < 4; o++) { v += n2(x * f, y * f) * amp; tot += amp; amp *= 0.5; f *= 2.15; }
      return v / tot;
    };
  }

  function glowTexture(THREE, inner, outer) {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, inner);
    grad.addColorStop(0.35, outer);
    grad.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }

  function petalTexture(THREE) {
    const c = document.createElement("canvas");
    c.width = 64; c.height = 64;
    const g = c.getContext("2d");
    g.translate(32, 32);
    const grad = g.createRadialGradient(0, -4, 2, 0, 0, 28);
    grad.addColorStop(0, "rgba(255,226,228,0.95)");
    grad.addColorStop(0.5, "rgba(232,180,184,0.55)");
    grad.addColorStop(1, "rgba(192,128,135,0)");
    g.fillStyle = grad;
    g.beginPath();
    g.moveTo(0, -26);
    g.bezierCurveTo(16, -14, 14, 10, 0, 24);
    g.bezierCurveTo(-14, 10, -16, -14, 0, -26);
    g.fill();
    return new THREE.CanvasTexture(c);
  }

  function auroraTexture(THREE) {
    const c = document.createElement("canvas");
    c.width = 512; c.height = 128;
    const g = c.getContext("2d");
    for (let i = 0; i < 26; i++) {
      const x = Math.random() * 512, w = 8 + Math.random() * 30;
      const grad = g.createLinearGradient(0, 0, 0, 128);
      const cols = ["241,217,168", "232,180,184", "201,184,227", "248,240,220"];
      const col = cols[i % 4];
      grad.addColorStop(0, `rgba(${col},0)`);
      grad.addColorStop(0.35, `rgba(${col},${0.10 + Math.random() * 0.14})`);
      grad.addColorStop(1, `rgba(${col},0)`);
      g.fillStyle = grad;
      g.fillRect(x, 0, w, 128);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = THREE.RepeatWrapping;
    return tex;
  }

  function init(THREE) {
    const canvas = document.createElement("canvas");
    canvas.id = "bg3d-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(innerWidth, innerHeight);

    const frontCanvas = document.createElement("canvas");
    frontCanvas.id = "bg3d-front";
    frontCanvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(frontCanvas);
    const renderer2 = new THREE.WebGLRenderer({ canvas: frontCanvas, alpha: true, antialias: false, powerPreference: "low-power" });
    renderer2.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
    renderer2.setSize(innerWidth, innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x120c1a, 0.015);
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 600);
    camera.position.set(0, 6, 0);

    // ============ 星空 ============
    const starCount = isMobile ? 350 : 800;
    const sgeo = new THREE.BufferGeometry();
    const spos = new Float32Array(starCount * 3);
    const scol = new Float32Array(starCount * 3);
    const spal = [GOLD_HI, ROSE, LILAC, { r: 0.95, g: 0.93, b: 0.9 }];
    for (let i = 0; i < starCount; i++) {
      const r = 160 + Math.random() * 180;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(Math.random() * 0.92);
      spos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      spos[i * 3 + 1] = Math.abs(r * Math.cos(ph)) - 8;
      spos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
      const c = spal[(Math.random() * spal.length) | 0];
      const b = 0.35 + Math.random() * 0.55;
      scol[i * 3] = c.r * b; scol[i * 3 + 1] = c.g * b; scol[i * 3 + 2] = c.b * b;
    }
    sgeo.setAttribute("position", new THREE.BufferAttribute(spos, 3));
    sgeo.setAttribute("color", new THREE.BufferAttribute(scol, 3));
    const stars = new THREE.Points(sgeo, new THREE.PointsMaterial({
      size: 1.5, vertexColors: true, transparent: true, opacity: 0.9,
      map: glowTexture(THREE, "rgba(255,250,240,1)", "rgba(255,235,215,0.35)"),
      depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, fog: false,
    }));
    scene.add(stars);

    // ============ 月 / 夜明けの太陽 ============
    const moon = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(THREE, "rgba(255,240,222,1)", "rgba(232,180,184,0.4)"),
      transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    }));
    scene.add(moon);
    const moonHalo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(THREE, "rgba(241,217,168,0.35)", "rgba(232,180,184,0.12)"),
      transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    }));
    scene.add(moonHalo);

    // ============ 地平線の光 ============
    const horizon = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(THREE, "rgba(255,235,205,0.85)", "rgba(212,175,122,0.30)"),
      transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    }));
    horizon.scale.set(520, 150, 1);
    scene.add(horizon);

    // ============ 絵画風の立体地形 ============
    const fbm = makeNoise(7);
    const T_D = 120, T_W = 240, SEG_X = isMobile ? 56 : 84, SEG_Z = isMobile ? 30 : 44;
    const T_N = 3, SPAN = T_D * T_N;
    // 高さで色を塗る (絵画のグラデーション)
    const RAMP = [
      [0.00, 0.078, 0.051, 0.122], // 谷底: 深い紫
      [0.30, 0.165, 0.102, 0.208], // 山裾
      [0.60, 0.353, 0.220, 0.267], // 中腹: 暖かい影
      [0.82, 0.647, 0.455, 0.310], // 高所: 茜
      [1.00, 0.910, 0.757, 0.533], // 頂: 金
    ];
    function rampColor(t) {
      for (let i = 1; i < RAMP.length; i++) {
        if (t <= RAMP[i][0]) {
          const [t0, r0, g0, b0] = RAMP[i - 1];
          const [t1, r1, g1, b1] = RAMP[i];
          const k = (t - t0) / (t1 - t0);
          return [r0 + (r1 - r0) * k, g0 + (g1 - g0) * k, b0 + (b1 - b0) * k];
        }
      }
      return [0.91, 0.76, 0.53];
    }
    function heightAt(wx, wz) {
      const mT = Math.min(1, Math.max(0, (Math.abs(wx) - 9) / 30));
      const mask = 0.06 + 1.9 * mT * mT * (3 - 2 * mT);
      const n = fbm(wx * 0.024, wz * 0.024) * 0.5 + 0.5;
      return Math.pow(n, 1.35) * 17 * mask - 1.6;
    }
    const tiles = [];
    function buildTile(z0) {
      const geo = new THREE.PlaneGeometry(T_W, T_D, SEG_X, SEG_Z);
      geo.rotateX(-Math.PI / 2);
      const pos = geo.attributes.position;
      const col = new Float32Array(pos.count * 3);
      const glintPts = [];
      for (let i = 0; i < pos.count; i++) {
        const wx = pos.getX(i), wz = pos.getZ(i) + z0;
        const h = heightAt(wx, wz);
        pos.setY(i, h);
        const t = Math.min(1, Math.max(0, (h + 1.6) / 17));
        const v = 1 + fbm(wx * 0.2, wz * 0.2) * 0.12; // 筆致のむら
        const [r, g, b] = rampColor(t);
        col[i * 3] = r * v; col[i * 3 + 1] = g * v; col[i * 3 + 2] = b * v;
        if (h > 11 && Math.random() < 0.06) glintPts.push(wx, h + 0.4, pos.getZ(i));
      }
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true }));
      mesh.position.z = z0;
      scene.add(mesh);
      const glints = new THREE.Points(
        new THREE.BufferGeometry().setAttribute("position",
          new THREE.BufferAttribute(new Float32Array(glintPts), 3)),
        new THREE.PointsMaterial({
          color: 0xf1d9a8, size: 1.0, transparent: true, opacity: 0.8,
          map: glowTexture(THREE, "rgba(255,240,210,1)", "rgba(241,217,168,0.3)"),
          depthWrite: false, blending: THREE.AdditiveBlending,
        })
      );
      glints.position.z = z0;
      scene.add(glints);
      tiles.push({ mesh, glints, z: z0 });
    }
    for (let i = 0; i < T_N; i++) buildTile(-i * T_D);

    // ============ オーロラ (Gallery) ============
    const auroraTex = auroraTexture(THREE);
    const auroras = [];
    for (let i = 0; i < 2; i++) {
      const p = new THREE.Mesh(
        new THREE.PlaneGeometry(260, 60),
        new THREE.MeshBasicMaterial({
          map: auroraTex, transparent: true, opacity: 0,
          depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
        })
      );
      p.position.y = 44 + i * 12;
      scene.add(p);
      auroras.push(p);
    }

    // ============ ランタン (Hobbies) ============
    const lanterns = [];
    const LAN_N = isMobile ? 12 : 26;
    for (let i = 0; i < LAN_N; i++) {
      const l = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTexture(THREE, "rgba(255,214,150,1)", "rgba(230,150,90,0.35)"),
        transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      const s = 0.5 + Math.random() * 1.0;
      l.scale.set(s, s * 1.25, 1);
      l.userData = {
        bx: (Math.random() - 0.5) * 55,
        y: Math.random() * 26,
        z: -(Math.random() * SPAN),
        rise: 0.012 + Math.random() * 0.02,
        sway: 0.3 + Math.random() * 0.6,
        ph: Math.random() * Math.PI * 2,
      };
      scene.add(l);
      lanterns.push(l);
    }

    // ============ 幾何構造体 (Games / Studio) ============
    const techs = [];
    const TECH_N = isMobile ? 3 : 6;
    for (let i = 0; i < TECH_N; i++) {
      const geo = i % 3 === 0
        ? new THREE.TorusGeometry(6 + Math.random() * 4, 0.12, 8, 48)
        : new THREE.IcosahedronGeometry(3 + Math.random() * 4, 1);
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        color: 0xc9b8e3, wireframe: true, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      }));
      m.userData = {
        bx: (i % 2 ? 1 : -1) * (14 + Math.random() * 14),
        by: 9 + Math.random() * 10,
        z: -(Math.random() * SPAN),
        rx: 0.002 + Math.random() * 0.004,
        ry: 0.003 + Math.random() * 0.005,
      };
      scene.add(m);
      techs.push(m);
    }

    // ============ 浮遊する写真 (Gallery — 実際のスナップ) ============
    const photos = [];
    fetch("gallery-manifest.json")
      .then((r) => r.json())
      .then((man) => {
        const items = (man.items || []).slice();
        for (let i = items.length - 1; i > 0; i--) {
          const j = (Math.random() * (i + 1)) | 0;
          [items[i], items[j]] = [items[j], items[i]];
        }
        const picks = items.slice(0, isMobile ? 6 : 10);
        const loader = new THREE.TextureLoader();
        picks.forEach((it, i) => {
          loader.load(encodeURI("/" + it.thumb), (tex) => {
            tex.minFilter = THREE.LinearFilter;
            const photo = new THREE.Mesh(
              new THREE.PlaneGeometry(4.6, 3.3),
              new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false })
            );
            const frame = new THREE.Mesh(
              new THREE.PlaneGeometry(4.95, 3.65),
              new THREE.MeshBasicMaterial({ color: 0xd4af7a, transparent: true, opacity: 0, depthWrite: false })
            );
            frame.position.z = -0.03;
            photo.add(frame);
            photo.userData = {
              bx: (i % 2 ? 1 : -1) * (7 + Math.random() * 9),
              by: 8 + Math.random() * 7,
              z: -((i / picks.length) * SPAN + Math.random() * 14),
              ph: Math.random() * Math.PI * 2,
              rz: (Math.random() - 0.5) * 0.16,
              frame,
            };
            photo.rotation.z = photo.userData.rz;
            scene.add(photo);
            photos.push(photo);
          });
        });
      })
      .catch(() => {});

    // ============ ボケ玉 ============
    const bokehs = [];
    const bokehPal = [
      ["rgba(241,217,168,0.9)", "rgba(212,175,122,0.25)"],
      ["rgba(232,180,184,0.9)", "rgba(192,128,135,0.22)"],
      ["rgba(201,184,227,0.8)", "rgba(150,130,190,0.18)"],
    ];
    const BOKEH_N = isMobile ? 10 : 20;
    for (let i = 0; i < BOKEH_N; i++) {
      const pal = bokehPal[i % 3];
      const b = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTexture(THREE, pal[0], pal[1]),
        transparent: true, opacity: 0.05 + Math.random() * 0.08,
        depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      const s = 7 + Math.random() * 16;
      b.scale.set(s, s, 1);
      b.userData = {
        bx: (Math.random() - 0.5) * 70, by: 4 + Math.random() * 22,
        z: -(Math.random() * SPAN), ph: Math.random() * Math.PI * 2,
        sp: 0.08 + Math.random() * 0.2, baseO: b.material.opacity,
      };
      if (i % 3 === 2) b.layers.set(1);
      scene.add(b);
      bokehs.push(b);
    }

    // ============ 泡 (上昇微光) ============
    const dustN = isMobile ? 90 : 190;
    const dgeo = new THREE.BufferGeometry();
    const dpos0 = new Float32Array(dustN * 3);
    const dvel = new Float32Array(dustN);
    for (let i = 0; i < dustN; i++) {
      dpos0[i * 3] = (Math.random() - 0.5) * 60;
      dpos0[i * 3 + 1] = Math.random() * 24;
      dpos0[i * 3 + 2] = -(Math.random() * SPAN);
      dvel[i] = 0.008 + Math.random() * 0.02;
    }
    dgeo.setAttribute("position", new THREE.BufferAttribute(dpos0, 3));
    const dust = new THREE.Points(dgeo, new THREE.PointsMaterial({
      color: 0xf1d9a8, size: 0.7, transparent: true, opacity: 0.8,
      map: glowTexture(THREE, "rgba(255,244,220,1)", "rgba(241,217,168,0.35)"),
      depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
    }));
    scene.add(dust);

    // ============ 花びら ============
    const petalTex = petalTexture(THREE);
    const petals = [];
    const PETAL_N = isMobile ? 16 : 40;
    for (let i = 0; i < PETAL_N; i++) {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(0.55, 0.75),
        new THREE.MeshBasicMaterial({
          map: petalTex, transparent: true, opacity: 0,
          depthWrite: false, side: THREE.DoubleSide,
        })
      );
      m.userData = {
        bx: (Math.random() - 0.5) * 46, y: 2 + Math.random() * 16,
        z: -(Math.random() * SPAN),
        fall: 0.006 + Math.random() * 0.014,
        sway: 0.4 + Math.random() * 0.8, ph: Math.random() * Math.PI * 2,
        rx: Math.random() * 0.02 - 0.01, rz: Math.random() * 0.03 - 0.015,
        baseO: 0.35 + Math.random() * 0.4,
      };
      if (i % 2 === 0) m.layers.set(1);
      scene.add(m);
      petals.push(m);
    }

    // ---- 2D パーティクルを置換 ----
    const oldCanvas = document.getElementById("particles-canvas");
    if (oldCanvas) oldCanvas.style.display = "none";
    const oldStardust = document.getElementById("bg-stardust");
    if (oldStardust) oldStardust.style.display = "none";
    document.body.classList.add("bg3d-on");

    // ============ 章の追跡 ============
    const clone = (c) => JSON.parse(JSON.stringify(c));
    let target = CH.hero;
    const cur = clone(CH.hero);
    let kick = 0;
    let burst = 0; // 花吹雪バースト (婚活アンロック時)
    addEventListener("konny-burst", () => { burst = 1; kick = 1; });

    const hud = document.createElement("div");
    hud.className = "chapter-hud";
    hud.setAttribute("aria-hidden", "true");
    document.body.appendChild(hud);

    function setChapter(id) {
      const ch = CH[id];
      if (!ch || document.body.dataset.chapter === id) return;
      document.body.dataset.chapter = id;
      target = ch;
      kick = 1;
      hud.textContent = ch.label;
      hud.classList.remove("show");
      void hud.offsetWidth;
      hud.classList.add("show");
    }

    const secIO = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting);
      if (vis.length) {
        vis.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const el = vis[0].target;
        setChapter(el.dataset.scene || el.id);
      }
    }, { rootMargin: "-35% 0px -45% 0px", threshold: 0 });

    function watchSections() {
      document.querySelectorAll("main section[id]:not(.bg3d-watched), .interlude[data-scene]:not(.bg3d-watched)").forEach((s) => {
        s.classList.add("bg3d-watched");
        secIO.observe(s);
      });
    }
    watchSections();
    const rootEl = document.getElementById("root");
    if (rootEl) {
      let tId = null;
      new MutationObserver(() => {
        clearTimeout(tId);
        tId = setTimeout(watchSections, 200);
      }).observe(rootEl, { childList: true, subtree: true });
    }

    // ---- 入力 ----
    let mx = 0, my = 0;
    addEventListener("mousemove", (e) => {
      mx = e.clientX / innerWidth - 0.5;
      my = e.clientY / innerHeight - 0.5;
    }, { passive: true });
    addEventListener("resize", () => {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      renderer2.setSize(innerWidth, innerHeight);
    });
    let running = true;
    document.addEventListener("visibilitychange", () => { running = !document.hidden; });

    // ---- ループ ----
    const JOURNEY = 260;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const E = 0.03;
    let camZ = 0, t = 0, smx = 0, smy = 0;
    const look = new THREE.Vector3();

    function tick() {
      requestAnimationFrame(tick);
      if (!running) return;
      t += 0.016;

      const max = document.documentElement.scrollHeight - innerHeight;
      const prog = max > 0 ? clamp(scrollY / max, 0, 1) : 0;

      kick *= 0.95;
      burst *= 0.988;
      if (kick > 0.003) {
        camera.fov = 55 + kick * 9;
        camera.updateProjectionMatrix();
      } else if (camera.fov !== 55) {
        camera.fov = 55;
        camera.updateProjectionMatrix();
      }
      camZ += (-prog * JOURNEY - camZ) * (0.04 + kick * 0.05);

      // 章パラメータ遷移
      for (const k of NUMS) cur[k] += (target[k] - cur[k]) * E;
      for (const k of COLS) {
        cur[k].r += (target[k].r - cur[k].r) * E;
        cur[k].g += (target[k].g - cur[k].g) * E;
        cur[k].b += (target[k].b - cur[k].b) * E;
      }
      scene.fog.color.setRGB(cur.fog.r, cur.fog.g, cur.fog.b);
      scene.fog.density = cur.fogD;

      smx += (mx - smx) * 0.04;
      smy += (my - smy) * 0.04;

      camera.position.z = camZ;
      camera.position.x = Math.sin(camZ * 0.016) * 5 + smx * 2.5;
      camera.position.y = cur.camY + Math.sin(camZ * 0.011) * 1.6 - smy * 1.6;
      look.set(
        Math.sin((camZ - 34) * 0.016) * 5,
        cur.camY - 0.9 + Math.sin(t * 0.25) * 0.35,
        camZ - 46
      );
      camera.lookAt(look);
      camera.rotation.z += Math.sin(camZ * 0.01 + t * 0.05) * 0.015;

      // 遠景
      stars.position.z = camZ;
      stars.rotation.y = t * 0.003;
      stars.material.opacity = 0.9 * cur.star;
      moon.scale.set(cur.moonS, cur.moonS, 1);
      moonHalo.scale.set(cur.moonS * 2.6, cur.moonS * 2.6, 1);
      moon.position.set(-30 + smx * -4, cur.moonY, camZ - 140);
      moonHalo.position.copy(moon.position);
      moonHalo.position.z -= 1;
      moon.material.color.setRGB(cur.moon.r, cur.moon.g, cur.moon.b);
      moonHalo.material.color.setRGB(cur.moon.r, cur.moon.g, cur.moon.b);
      moon.material.opacity = 0.72 + Math.sin(t * 0.6) * 0.1;
      moonHalo.material.opacity = 0.4 + Math.sin(t * 0.45 + 1) * 0.08;

      // 地平線の光 (夜明け)
      horizon.position.set(0, 4, camZ - 240);
      horizon.material.color.setRGB(cur.glowC.r, cur.glowC.g, cur.glowC.b);
      horizon.material.opacity = 0.32 * cur.glow + Math.sin(t * 0.5) * 0.02;

      // 地形: 章ごとに山の高さが変わる + リサイクル
      for (const tl of tiles) {
        if (tl.z > camZ + T_D * 0.7) {
          tl.z -= SPAN;
          tl.mesh.position.z = tl.z;
          tl.glints.position.z = tl.z;
        }
        tl.mesh.scale.y = cur.amp;
        tl.glints.scale.y = cur.amp;
        tl.glints.material.opacity = 0.8 * Math.min(1, cur.amp);
        tl.glints.material.color.setRGB(cur.hi.r, cur.hi.g, cur.hi.b);
      }

      // オーロラ
      auroraTex.offset.x = t * 0.008;
      auroras.forEach((a, i) => {
        a.position.z = camZ - 170 - i * 40;
        a.position.x = Math.sin(t * 0.05 + i) * 12;
        a.material.opacity = cur.aurora * (0.16 + 0.06 * Math.sin(t * 0.4 + i * 2));
      });

      // ランタン
      for (const l of lanterns) {
        const u = l.userData;
        u.y += u.rise * (0.3 + cur.lantern);
        if (u.y > 30) u.y = 0;
        let z = u.z;
        while (z > camZ + 6) z -= SPAN;
        while (z < camZ - SPAN + 6) z += SPAN;
        u.z = z;
        l.position.set(u.bx + Math.sin(t * u.sway + u.ph) * 1.8, u.y, z);
        l.material.opacity = cur.lantern * (0.55 + 0.3 * Math.sin(t * 1.3 + u.ph));
      }

      // 幾何構造体
      for (const m of techs) {
        const u = m.userData;
        let z = u.z;
        while (z > camZ + 10) z -= SPAN;
        while (z < camZ - SPAN + 10) z += SPAN;
        u.z = z;
        m.position.set(u.bx, u.by, z);
        m.rotation.x += u.rx;
        m.rotation.y += u.ry;
        m.material.opacity = cur.tech * 0.32;
        m.material.color.setRGB(cur.tint.r, cur.tint.g, cur.tint.b);
      }

      // 浮遊写真
      for (const p of photos) {
        const u = p.userData;
        let z = u.z;
        while (z > camZ + 8) z -= SPAN;
        while (z < camZ - SPAN + 8) z += SPAN;
        u.z = z;
        p.position.set(
          u.bx + Math.sin(t * 0.3 + u.ph) * 0.8,
          u.by + Math.sin(t * 0.4 + u.ph * 2) * 0.7,
          z
        );
        p.rotation.y = Math.sin(t * 0.2 + u.ph) * 0.18;
        p.material.opacity = cur.photos * 0.95;
        u.frame.material.opacity = cur.photos * 0.85;
      }

      // ボケ玉
      for (const b of bokehs) {
        const u = b.userData;
        let z = u.z;
        while (z > camZ + 8) z -= SPAN;
        while (z < camZ - SPAN + 8) z += SPAN;
        u.z = z;
        b.position.set(
          u.bx + Math.sin(t * u.sp + u.ph) * 2.5,
          u.by + Math.sin(t * u.sp * 0.6 + u.ph * 2) * 1.5,
          z
        );
        b.material.opacity = u.baseO * cur.bokeh * (0.7 + 0.3 * Math.sin(t * u.sp * 1.4 + u.ph));
      }

      // 泡
      const dp = dust.geometry.attributes.position;
      for (let i = 0; i < dustN; i++) {
        let y = dp.getY(i) + dvel[i] * cur.dust;
        if (y > 26) y = 0;
        dp.setY(i, y);
        let z = dp.getZ(i);
        if (z > camZ + 6) dp.setZ(i, z - SPAN);
        else if (z < camZ - SPAN + 6) dp.setZ(i, z + SPAN);
      }
      dp.needsUpdate = true;
      dust.material.color.setRGB(cur.hi.r, cur.hi.g, cur.hi.b);

      // 花びら
      for (const p of petals) {
        const u = p.userData;
        u.y -= u.fall * (0.5 + (cur.petal + burst * 3) * 0.8);
        if (u.y < 0.5) u.y = 18 + Math.random() * 4;
        let z = u.z;
        while (z > camZ + 6) z -= SPAN;
        while (z < camZ - SPAN + 6) z += SPAN;
        u.z = z;
        p.position.set(u.bx + Math.sin(t * u.sway + u.ph) * 2.2, u.y, z);
        p.rotation.x += u.rx;
        p.rotation.z += u.rz;
        p.rotation.y = Math.sin(t * u.sway * 0.7 + u.ph) * 0.8;
        p.material.opacity = Math.min(1, u.baseO * (cur.petal + burst * 4));
      }

      camera.layers.set(0);
      renderer.render(scene, camera);
      camera.layers.set(1);
      renderer2.render(scene, camera);
      camera.layers.set(0);
    }
    tick();
  }

  function start() {
    loadThree().then(init).catch(() => {});
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
