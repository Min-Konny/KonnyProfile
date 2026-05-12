// ============================================================
// こにー / Konny — VRC Profile (Gorgeous edition)
// Same content, soft champagne/rose palette
// ============================================================

const PROFILE = {
  name: "こにー",
  nameEn: "Konny",
  vrcId: "こにー（Konny）",
  twitter: "Konny0329s_VRC",
  discord: "Konny0329s",
  vrcUrl: "https://vrchat.com/home/user/usr_0ce3df70-b629-4444-83ce-9425840255e1",
  status: "online",
  intro: [
    "はじめまして、こにーです。",
    "綺麗なワールドでシーシャを吸うのが好き。",
    "多趣味なので、たぶんどこかで話が合います。お気軽にどうぞ。",
  ],
};

const STATS = [
  { label: "LANGUAGES", value: "日本語", unit: "/ENG" },
  { label: "PLATFORM", value: "PCVR", unit: "" },
];

// Soft palette — champagne / rose / lilac / amber
const PAL = {
  gold: "#d4af7a",
  goldHi: "#f1d9a8",
  rose: "#e8b4b8",
  roseDeep: "#c08087",
  lilac: "#c9b8e3",
  amber: "#e0bc7a",
  cream: "#f3ead6",
  blush: "#f1c8c0",
};

const GAMES = [
  { code: "LOL", name: "League of Legends", rank: "Challenger", years: "16", pct: 100,
    note: "❋ADCメイン\n❋超攻撃的なプレイスタイル",
    a1: PAL.goldHi, a2: PAL.lilac, tag: "MOBA" },
  { code: "TFT", name: "Teamfight Tactics", rank: "Grandmaster", years: "5", pct: 92,
    note: "❋オートチェスはやめられない。\n❋TFTもチャレンジャー行きたい。",
    a1: PAL.rose, a2: PAL.lilac, tag: "AUTO-CHESS" },
  { code: "L4D2", name: "Left 4 Dead 2", rank: "3,000+ hrs", years: "10+", pct: 100,
    note: "❋ゲーム人生はここから始まった。\n❋対戦モード以外やりません。",
    a1: PAL.amber, a2: PAL.blush, tag: "CO-OP FPS" },
  { code: "EFT", name: "Escape from Tarkov", rank: "60レベ", years: "4", pct: 80,
    note: "しょっちゅう生還、たまに全ロス。\nレイド組める人募集中。",
    a1: PAL.gold, a2: PAL.amber, tag: "EXTRACTION" },
  { code: "INC", name: "Incremental Games", rank: "廃人", years: "∞", pct: 100,
    note: "数字が増えるだけで嬉しい病。\nオススメのインクリ系あったら教えて。",
    a1: PAL.lilac, a2: PAL.rose, tag: "IDLE" },
  { code: "STEAM", name: "Steam 全般", rank: "500+ titles", years: "12", pct: 85,
    note: "セールでつい買う、積む、たまに掘り出し物。\nマルチで遊べるやつ募集中。",
    a1: PAL.goldHi, a2: PAL.rose, tag: "VARIETY" },
];

const RANKS = [
  { game: "LEAGUE OF LEGENDS", tier: "CHALLENGER", meta: "Solo / Duo — Peak",
    glyph: "challenger", c1: PAL.goldHi, c2: PAL.lilac },
  { game: "TEAMFIGHT TACTICS", tier: "GRANDMASTER", meta: "Ranked — Peak",
    glyph: "grandmaster", c1: PAL.rose, c2: PAL.amber },
  { game: "LEFT 4 DEAD 2", tier: "3,000 HRS", meta: "Playtime / Veteran",
    glyph: "skull", c1: PAL.amber, c2: PAL.goldHi },
];

const COACH_TIMELINE = [
  { title: "SCARZ — LoL / Wild Rift コーチ", alt: false,
    desc: "ヘッドコーチとして4年。LoL部門・Wild Rift部門を担当しました。" },
  { title: "LJL 出場", alt: true,
    desc: "LJLCSから勝ち上がってLJLに出場しました" },
  { title: "Wild Rift 日本 2位", alt: false },
  { title: "テレ東 e-sports high 出演", alt: true,
    desc: "テレ東「e-sports high」に30分×8回出演。" },
];

const PROJECTS = [
  { name: "Saori VTuber Site", url: "https://saori-vtuber-site.vercel.app/",
    role: "DESIGN + DEV", year: "2024", status: "LIVE",
    desc: "VTuberさおりさん公式サイト。プロフィール・配信告知・グッズ導線まで一通り。",
    features: [
      "プロフィール / 自己紹介ページ",
      "配信スケジュール表示",
      "グッズ・SNS導線",
      "レスポンシブ対応",
    ],
    ph1: "#2a1a32", ph2: "#4a2a4a", glyph: "S" },
  { name: "Team Auto Split Tool", url: "https://team-auto-split-tool.vercel.app/",
    role: "PLAN + DEV", year: "2024", status: "LIVE",
    desc: "VRCやゲームの集まりで使うチーム自動分け。レート・人数指定で公平にシャッフル。",
    features: [
      "レート入力で公平分け",
      "任意人数チーム生成",
      "再シャッフル即時反映",
      "URL共有で持ち回り",
    ],
    ph1: "#2a2032", ph2: "#3a3050", glyph: "⇆" },
];

const HOBBIES = [
  { id: "shisha", label: "シーシャ", title: "Shisha · 水煙草", sub: "// 3台所持・フレーバーで使い分け",
    photo: "写真/シーシャ/IMG_4477.jpg",
    body: "ハリルマムーン150周年モデル、SHISHA BUCKS、PATISAの木製台持ってます！\nおすすめのフレーバーとかミックス教えてください。",
    stats: [{ l: "OWN", v: "×3台" }, { l: "今ハマってる", v: "Peach" }, { l: "シーシャ歴", v: "2 yrs" }] },
  { id: "snow", label: "スノボ", title: "Snowboarding", sub: "// 新幹線で行けるから新潟率90%",
    photo: "写真/スノボ/IMG_3997.jpg",
    body: "シーズンは月1〜2で雪山。新幹線一本で行ける気軽さで新潟が圧倒的に多い。\nS字カーブで普通に滑れるくらい。",
    stats: [{ l: "新潟率", v: "90%" }, { l: "シーズン", v: "10+" }, { l: "レベル", v: "S字" }] },
  { id: "poker", label: "ポーカー", title: "Poker", sub: "// JOPTや戦国などの大型トナメにも参加",
    photo: "写真/ポーカー/IMG_0762.jpg",
    body: "NLHメイン。\nJOPTとか戦国とか、大型トナメもたまに出ます。\nライブでもオンラインでも遊ぶ。",
    stats: [{ l: "メイン", v: "NLH" }, { l: "プレイ歴", v: "3 yrs" }, { l: "トナメ", v: "JOPT / 戦国" }] },
  { id: "escape", label: "リアル脱出", title: "Real Escape Game", sub: "// SCRAP全般が好き",
    photo: "写真/脱出ゲーム/IMG_0496.jpg",
    body: "SCRAP系の謎解き・リアル脱出ゲームが好き。「豪華客船からの脱出」が過去一。\n是非一緒に行きましょう。",
    stats: [{ l: "主催", v: "SCRAP全般" }, { l: "ベスト", v: "豪華客船" }, { l: "頻度", v: "新公演ごと" }] },
  { id: "futsal", label: "フットサル", title: "Futsal", sub: "// 部活・友人と定期",
    photo: "写真/フットサル/IMG_3424.jpg",
    body: "会社の部活や友達と定期的にフットサルしてます。こっちも参加者募集中。\n歴は3年",
    stats: [{ l: "頻度", v: "定期" }, { l: "歴", v: "3年" }, { l: "状態", v: "募集中" }] },
  { id: "art", label: "美術館", title: "Art Museum", sub: "// 美術館 · teamLab · 希須林",
    photo: "写真/アート/IMG_4528.jpg",
    body: "月１くらいで美術館だったり、チームラボだったり行ってます。\n行った後に麻布台ヒルズの希須林で中華食うのが鉄板ルート。",
    stats: [{ l: "月", v: "1くらい" }, { l: "定番", v: "teamLab" }, { l: "〆", v: "希須林" }] },
];

const NAV = [
  { id: "hero", label: "Home" },
  { id: "hobbies", label: "Hobbies" },
  { id: "gallery", label: "Gallery" },
  { id: "games", label: "Games" },
  { id: "career", label: "Career" },
  { id: "dev", label: "Studio" },
  { id: "contact", label: "Friend" },
];

Object.assign(window, { PROFILE, STATS, GAMES, RANKS, COACH_TIMELINE, PROJECTS, HOBBIES, NAV, PAL });

// ============================================================
// Components
// ============================================================
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ---- SVG ornament: corner filigree ----
function CornerOrnament({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <path d="M2 2 L26 2 M2 2 L2 26" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M8 2 Q8 8 14 8 M2 8 Q8 8 8 14" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
      <path d="M14 14 Q24 14 24 24" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.7"/>
      <circle cx="24" cy="24" r="1" fill="currentColor" opacity="0.7"/>
      <path d="M4 18 Q4 24 10 24" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4"/>
      <path d="M18 4 Q24 4 24 10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4"/>
    </svg>
  );
}

function AvatarFiligree() {
  // outer ring — laurel-style ticks + ornament
  return (
    <svg viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="ringG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"  stopColor="#f1d9a8"/>
          <stop offset="50%" stopColor="#d4af7a"/>
          <stop offset="100%" stopColor="#a47e4a"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="96" stroke="url(#ringG)" strokeWidth="0.6" fill="none"/>
      <circle cx="100" cy="100" r="92" stroke="url(#ringG)" strokeWidth="0.3" fill="none" strokeDasharray="1 4"/>
      {/* ticks every 15deg */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const r1 = 88, r2 = i % 2 === 0 ? 82 : 85;
        const x1 = 100 + Math.cos(a) * r1, y1 = 100 + Math.sin(a) * r1;
        const x2 = 100 + Math.cos(a) * r2, y2 = 100 + Math.sin(a) * r2;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#ringG)" strokeWidth={i % 6 === 0 ? 1.2 : 0.5}/>;
      })}
      {/* compass-like markers at 4 quadrants */}
      {[0, 90, 180, 270].map((deg) => {
        const a = (deg / 360) * Math.PI * 2;
        const x = 100 + Math.cos(a) * 96;
        const y = 100 + Math.sin(a) * 96;
        return (
          <g key={deg} transform={`translate(${x}, ${y}) rotate(${deg + 90} 0 0)`}>
            <path d="M-4 0 L0 -6 L4 0 Z" fill="url(#ringG)" opacity="0.9"/>
          </g>
        );
      })}
    </svg>
  );
}

function AvatarFiligree2() {
  return (
    <svg viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="98" stroke="#d4af7a" strokeWidth="0.3" fill="none" opacity="0.4"/>
      {Array.from({ length: 60 }).map((_, i) => {
        const a = (i / 60) * Math.PI * 2;
        const x = 100 + Math.cos(a) * 98;
        const y = 100 + Math.sin(a) * 98;
        return <circle key={i} cx={x} cy={y} r="0.5" fill="#f1d9a8" opacity={i % 5 === 0 ? 1 : 0.4}/>;
      })}
    </svg>
  );
}

// ---- Typing animation hook ----
function useTyping(lines, speed = 32, lineDelay = 700) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let cancelled = false;
    let i = 0, j = 0;
    let acc = "";
    function step() {
      if (cancelled) return;
      if (i >= lines.length) { setDone(true); return; }
      const line = lines[i];
      if (j <= line.length) {
        setOut(acc + line.slice(0, j));
        j++;
        setTimeout(step, speed);
      } else {
        acc += line + "\n"; i++; j = 0;
        setTimeout(step, lineDelay);
      }
    }
    step();
    return () => { cancelled = true; };
  }, []);
  return { out, done };
}

// ---- Nav ----
function Nav({ active, onOpenCmd }) {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="ornament"></span>
        <span>Konny</span>
        <span className="mono">· 0329 ·</span>
      </div>
      <div className="nav-links">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""}>{n.label}</a>
        ))}
      </div>
      <button className="nav-cmdk" onClick={onOpenCmd}>
        <span>SEARCH</span>
        <kbd>⌘K</kbd>
      </button>
    </nav>
  );
}

// ---- Hero ----
function Hero() {
  const { out, done } = useTyping(PROFILE.intro, 30, 500);
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    function move(e) {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      wrap.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    }
    function leave() { wrap.style.transform = ""; }
    wrap.addEventListener("mousemove", move);
    wrap.addEventListener("mouseleave", leave);
    return () => { wrap.removeEventListener("mousemove", move); wrap.removeEventListener("mouseleave", leave); };
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div>
          <div className="hero-eyebrow">A VRC Profile · Est. 2024</div>
          <h1 className="hero-name">
            <span className="glyph">
              {Array.from(PROFILE.name).map((ch, i) => <span className="ch" key={i}>{ch}</span>)}
            </span>
            <span className="swash" aria-hidden>
              <svg viewBox="0 0 240 26" fill="none">
                <path d="M2 14 Q40 4, 80 14 T160 14 Q200 18, 232 8" stroke="url(#swashG)" strokeWidth="1" strokeLinecap="round" fill="none"/>
                <circle cx="232" cy="8" r="2" fill="#f1d9a8"/>
                <circle cx="2" cy="14" r="1.5" fill="#e8b4b8"/>
                <defs>
                  <linearGradient id="swashG" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#e8b4b8"/>
                    <stop offset="50%" stopColor="#f1d9a8"/>
                    <stop offset="100%" stopColor="#d4af7a"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          <div className="hero-handle">
            @{PROFILE.twitter} <span className="arrow">·</span> <span className="en">{PROFILE.nameEn}</span>
          </div>
          <div className="hero-meta">
            <div className="line"><span className="key">status</span><span>online — シーシャワールド徘徊中</span></div>
            <div className="line"><span className="key">gender</span><span>男</span></div>
          </div>
          <p className="hero-intro">
            {out.split("\n").map((l, i) => <span key={i}>{l}<br/></span>)}
            {!done && <span className="cursor-blink"></span>}
          </p>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="label">{s.label}</div>
                <div className="value">{s.value}<span className="unit">{s.unit}</span></div>
              </div>
            ))}
          </div>
          <div className="hero-sns">
            <a className="sns-pill" href={`https://twitter.com/${PROFILE.twitter}`} target="_blank" rel="noopener">
              <span className="icon">𝕏</span> @{PROFILE.twitter}
            </a>
            <a className="sns-pill" href="#contact">
              <span className="icon">✦</span> Discord · {PROFILE.discord}
            </a>
            <a className="sns-pill" href={PROFILE.vrcUrl} target="_blank" rel="noopener">
              <span className="icon">◈</span> VRChat Profile
            </a>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="avatar-ring-2"><AvatarFiligree2/></div>
          <div className="avatar-ring"><AvatarFiligree/></div>
          <div className="avatar-wrap" ref={wrapRef}>
            <div className="avatar-img"></div>
            <div className="avatar-frame"></div>
            <CornerOrnament className="avatar-corner tl"/>
            <CornerOrnament className="avatar-corner tr"/>
            <CornerOrnament className="avatar-corner bl"/>
            <CornerOrnament className="avatar-corner br"/>
            <div className="avatar-tag t1">Avatar · v3</div>
            <div className="avatar-tag t2">Peach Neko</div>
            <div className="avatar-tag t3">ID · 0329</div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}

// ---- Games ----
function GameCard({ g }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className="game-card reveal"
      style={{ "--accent-1": g.a1, "--accent-2": g.a2, "--pct": `${g.pct}%` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="gc-header">
        <div>
          <div className="gc-code">— {g.code}</div>
          <div className="gc-name">{g.name}</div>
        </div>
        <div className="gc-tag">{g.tag}</div>
      </div>
      <div className="gc-label">PEAK · MASTERY</div>
      <div className="gc-progress"><div className="fill"></div></div>
      <div className="gc-stats">
        <div className="gc-stat" style={{ gridColumn: "1 / -1" }}>
          <div className="label">PEAK</div>
          <div className="value">{g.rank}</div>
        </div>
      </div>
      <div className="gc-note" style={{ opacity: hover ? 1 : 0.7, transition: "opacity 0.3s" }}>
        {g.note.split("\n").map((l, i) => (
          <div key={i}><span className="glyph">❋</span>{l}</div>
        ))}
      </div>
    </article>
  );
}

function GamesSection() {
  return (
    <section id="games">
      <div className="reveal">
        <div className="section-label">04 / Games — 一緒に遊びませんか</div>
        <h2 className="section-title">よく遊ぶ <em>ゲーム</em></h2>
        <div className="section-subtitle">初心者歓迎・一緒にやれる人募集中！！</div>
      </div>
      <div className="game-grid">
        {GAMES.map((g) => <GameCard key={g.code} g={g} />)}
      </div>
    </section>
  );
}

// ---- Rank badges (ornate) ----
function Badge({ glyph, c1, c2 }) {
  return (
    <svg viewBox="0 0 200 200">
      <defs>
        <linearGradient id={`gr-${glyph}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1}/>
          <stop offset="100%" stopColor={c2}/>
        </linearGradient>
        <radialGradient id={`gl-${glyph}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={c1} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={c1} stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* outer wreath */}
      <circle cx="100" cy="100" r="92" fill="none" stroke={`url(#gr-${glyph})`} strokeWidth="0.8"/>
      <circle cx="100" cy="100" r="86" fill={`url(#gl-${glyph})`}/>
      <circle cx="100" cy="100" r="82" fill="none" stroke={`url(#gr-${glyph})`} strokeWidth="0.4" strokeDasharray="2 3"/>
      {/* laurel leaves */}
      {Array.from({ length: 36 }).map((_, i) => {
        const a = (i / 36) * Math.PI * 2;
        const r1 = 78, r2 = i % 3 === 0 ? 70 : 74;
        const x1 = 100 + Math.cos(a) * r1, y1 = 100 + Math.sin(a) * r1;
        const x2 = 100 + Math.cos(a) * r2, y2 = 100 + Math.sin(a) * r2;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#gr-${glyph})`} strokeWidth={i % 9 === 0 ? 1.4 : 0.5} opacity={i % 3 === 0 ? 0.9 : 0.5}/>;
      })}
      {/* inner medallion */}
      <circle cx="100" cy="100" r="56" fill="none" stroke={`url(#gr-${glyph})`} strokeWidth="0.6"/>
      <circle cx="100" cy="100" r="50" fill={c1} opacity="0.05"/>

      {/* inner glyph */}
      {glyph === "challenger" && (
        <g>
          {/* crown */}
          <path d="M 70 116 L 76 92 L 84 110 L 100 84 L 116 110 L 124 92 L 130 116 Z" fill={`url(#gr-${glyph})`} opacity="0.5"/>
          <path d="M 70 116 L 76 92 L 84 110 L 100 84 L 116 110 L 124 92 L 130 116 Z" fill="none" stroke={c1} strokeWidth="1"/>
          <line x1="68" y1="120" x2="132" y2="120" stroke={c1} strokeWidth="1.2"/>
          <circle cx="76" cy="90" r="2.5" fill={c2}/>
          <circle cx="100" cy="82" r="3" fill={c2}/>
          <circle cx="124" cy="90" r="2.5" fill={c2}/>
        </g>
      )}
      {glyph === "grandmaster" && (
        <g>
          {/* fleur-de-lis style */}
          <circle cx="100" cy="100" r="20" fill="none" stroke={c1} strokeWidth="0.8"/>
          <circle cx="100" cy="100" r="14" fill={`url(#gr-${glyph})`} opacity="0.4"/>
          <path d="M 100 82 L 104 96 L 118 96 L 107 105 L 112 119 L 100 110 L 88 119 L 93 105 L 82 96 L 96 96 Z" fill={c2}/>
          <circle cx="100" cy="100" r="3" fill={c1}/>
        </g>
      )}
      {glyph === "skull" && (
        <g>
          {/* hourglass / shield */}
          <path d="M 80 80 L 120 80 L 100 100 L 120 120 L 80 120 L 100 100 Z" fill={`url(#gr-${glyph})`} opacity="0.5" stroke={c1} strokeWidth="0.8"/>
          <circle cx="100" cy="100" r="3" fill={c2}/>
          <line x1="100" y1="74" x2="100" y2="78" stroke={c1} strokeWidth="1"/>
          <line x1="100" y1="122" x2="100" y2="126" stroke={c1} strokeWidth="1"/>
        </g>
      )}

      {/* ribbon */}
      <path d="M 76 150 L 100 144 L 124 150 L 118 168 L 100 158 L 82 168 Z" fill={`url(#gr-${glyph})`} opacity="0.4"/>
      <path d="M 76 150 L 100 144 L 124 150 L 118 168 L 100 158 L 82 168 Z" fill="none" stroke={c1} strokeWidth="0.5"/>

      {/* sparkles */}
      {[[50, 60], [148, 70], [60, 140], [150, 138]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <path d="M0 -3 L0.6 -0.6 L3 0 L0.6 0.6 L0 3 L-0.6 0.6 L-3 0 L-0.6 -0.6 Z" fill={c2}>
            <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3 + i * 0.5}s`} repeatCount="indefinite"/>
          </path>
        </g>
      ))}
    </svg>
  );
}

function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {loop.map((it, i) => (
          <React.Fragment key={i}>
            {it.kind === "muted"
              ? <span className="muted">{it.text}</span>
              : <span>{it.text}</span>}
            <span className="dot">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function RanksSection() { return null; }

// ---- Coach timeline ----
function CareerSection() {
  return (
    <section id="career">
      <div className="reveal">
        <div className="section-label" style={{ marginTop: 64 }}>05.b / Coaching — おまけ</div>
        <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>e-sports <em>コーチ</em> 経歴</h2>
      </div>
      <div className="timeline reveal">
        {COACH_TIMELINE.map((t, i) => (
          <div className={`t-item ${t.alt ? "alt" : ""}`} key={i}>
            <div className="t-title">{t.title}</div>
            {t.desc ? <div className="t-desc">{t.desc}</div> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

// ---- Portfolio ----
function ProjectCard({ p }) {
  return (
    <a href={p.url} target="_blank" rel="noopener" className="proj-card reveal">
      <div className="proj-preview" style={{ "--ph-1": p.ph1, "--ph-2": p.ph2 }}>
        <div className="browser-bar">
          <span className="dot"></span><span className="dot"></span><span className="dot"></span>
          <span className="url">{p.url.replace(/^https?:\/\//, "")}</span>
          <span className="status">● {p.status}</span>
        </div>
        <div className="ph">
          <div className="proj-glyph">{p.glyph}</div>
          <div className="proj-preview-name">{p.name}</div>
          <div className="proj-preview-meta">// site preview</div>
        </div>
      </div>
      <div className="proj-body">
        <div>
          <div className="proj-meta-row">
            <span className="proj-role">{p.role}</span>
            <span className="proj-year">— {p.year}</span>
          </div>
          <div className="proj-name">{p.name}</div>
        </div>
        <p className="proj-desc">{p.desc}</p>
        <div className="proj-features">
          {p.features.map((f) => (
            <div className="proj-feature" key={f}>
              <span className="icn">✦</span>{f}
            </div>
          ))}
        </div>
        <div className="proj-foot">
          <span className="proj-link">Visit site →</span>
        </div>
      </div>
    </a>
  );
}

function DevSection() {
  return (
    <section id="dev">
      <div className="reveal">
        <div className="section-label">06 / Studio · 個人開発</div>
        <h2 className="section-title">作ったやつ <em>いろいろ</em></h2>
        <div className="section-subtitle">こんな感じのサイトなら作れます、なんかあったら相談してね。</div>
      </div>
      <div className="portfolio-grid">
        {PROJECTS.map((p) => <ProjectCard p={p} key={p.name}/>)}
      </div>
    </section>
  );
}

// ---- Hobbies tabs ----
function HobbiesSection() {
  const [active, setActive] = useState(0);
  const h = HOBBIES[active];
  return (
    <section id="hobbies">
      <div className="reveal">
        <div className="section-label">02 / Hobbies — まずはここから</div>
        <h2 className="section-title">こんなことが <em>好きです</em></h2>
        <div className="section-subtitle">気になったらなんでもやるタイプ。話のきっかけにどうぞ。</div>
      </div>
      <div className="hobby-wrap reveal">
        <div className="hobby-tabs">
          {HOBBIES.map((hb, i) => (
            <button
              key={hb.id}
              className={`hobby-tab ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span>{hb.label}</span>
            </button>
          ))}
        </div>
        <div className="hobby-panel" key={h.id}>
          <CornerOrnament className="corner-deco tl"/>
          <CornerOrnament className="corner-deco tr"/>
          <CornerOrnament className="corner-deco bl"/>
          <CornerOrnament className="corner-deco br"/>
          <div className="h-id">Hobby · 0{active + 1} / 0{HOBBIES.length}</div>
          <div className="h-grid">
            <div className="h-text">
              <div className="h-title">{h.title}</div>
              <div className="h-sub">{h.sub}</div>
              <p className="h-body">
                {h.body.split("\n").map((l, i) => <span key={i}>{l}<br/></span>)}
              </p>
              <div className="h-stats">
                {h.stats.map((s, i) => (
                  <div className={`s ${i % 2 ? "alt" : ""}`} key={s.l}>
                    <div className="l">{s.l}</div>
                    <div className="v">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-photo">
              <image-slot
                id={`hobby-${h.id}`}
                shape="rounded"
                radius="14"
                placeholder={`${h.label}の写真をドロップ`}
                {...(h.photo ? { src: encPhotoPath(h.photo) } : {})}
              />
              <div className="h-photo-cap">// drop a photo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Gallery: gallery-manifest.json（フォルダ 11 種）+ ページネーション ----
const GALLERY_FOLDER_ORDER = [
  "VR",
  "ご飯",
  "アート",
  "シーシャ",
  "スノボ",
  "フットサル",
  "ポーカー",
  "旅",
  "本人",
  "犬",
  "脱出ゲーム",
];
const GALLERY_PAGE_SIZES = [12, 18, 24, 30, 36, 48];

function shuffleArrayInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

/** 写真 id から安定したバリエーション（ページをまたいでも同じ写真は同じ形） */
function bentoVariantFromId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) {
    h = Math.imul(31, h) + id.charCodeAt(i) | 0;
  }
  const u = Math.abs(h) % 100;
  if (u < 10) return "hero";
  if (u < 26) return "wide";
  if (u < 46) return "tall";
  if (u < 64) return "sq";
  if (u < 78) return "sm";
  return "xs";
}

function encPhotoPath(p) {
  return p.split("/").map((seg) => encodeURIComponent(seg)).join("/");
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

function GallerySection() {
  const [manifest, setManifest] = useState(null);
  const [loadErr, setLoadErr] = useState(null);
  const [folder, setFolder] = useState("ALL");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(18);
  const [shuffleNonce, setShuffleNonce] = useState(0);

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

  const filtered = useMemo(() => {
    if (!manifest?.items) return [];
    if (folder === "ALL") return shuffledAllItems;
    return manifest.items
      .filter((it) => it.category === folder)
      .slice()
      .sort((a, b) => a.path.localeCompare(b.path, "ja"));
  }, [manifest, folder, shuffledAllItems]);

  const totalPages = filtered.length === 0 ? 0 : Math.ceil(filtered.length / pageSize);
  const safePage = totalPages === 0 ? 1 : Math.min(Math.max(1, page), totalPages);
  const pageItems = useMemo(() => {
    if (totalPages === 0) return [];
    const start = (safePage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, safePage, pageSize, totalPages]);

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
          リアルの一枚と仮想のスクショを、気分でトレイ分けしています。<strong>すべて</strong> はジャンルが混ざったランダムで、カードの大きさも揃いません。<br/>
          タブでトレイを一つ選べば、その系統だけを順にめくれます。並びを入れ替えたいときは <strong>↻ 並び替え</strong>。下のページ番号から続きへどうぞ。
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
                  onClick={() => setFolder(name)}
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
              className={folder === "ALL" ? "gallery-bento reveal" : "gallery-page-grid reveal"}
            >
              {pageItems.map((it) => (
                <figure
                  key={it.id}
                  className={
                    folder === "ALL"
                      ? `g-card g-card-bento gb-${bentoVariantFromId(it.id)}`
                      : "g-card g-card-compact"
                  }
                >
                  <image-slot
                    id={`gallery-${it.id}`}
                    shape="rounded"
                    radius="10"
                    placeholder={it.file}
                    src={encPhotoPath(it.path)}
                  />
                  <figcaption>
                    <span className="g-label">{it.category}</span>
                    <span className="g-file">{it.file}</span>
                  </figcaption>
                </figure>
              ))}
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
    </section>
  );
}

// ---- Friend CTA ----
function FriendCTA() {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard?.writeText(PROFILE.discord);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
  return (
    <section id="contact">
      <div className="contact-card reveal">
        <CornerOrnament className="corner-deco tl"/>
        <CornerOrnament className="corner-deco br"/>
        <div>
          <div className="section-label" style={{ marginBottom: 14 }}>03 / Say Hi</div>
          <h3>気軽に <em>声かけて</em> ください</h3>
          <p>
            共通の趣味があったりPCゲームしてる人は是非一緒に遊びましょう！！<br/>
            VRCではワールド巡り、カラオケワールド、謎解きあたりを一緒にできる人募集中！！<br/>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-mute)", fontSize: 12, letterSpacing: "0.1em" }}>
              フレンド申請 · 気になったら許可。Twitter相互は申請OK。
            </span>
          </p>
        </div>
        <div className="contact-actions">
          <a className="contact-btn" href={`https://twitter.com/${PROFILE.twitter}`} target="_blank" rel="noopener">
            <span>𝕏 · @{PROFILE.twitter}</span>
            <span className="arrow">→</span>
          </a>
          <button className="contact-btn" onClick={copy}>
            <span>✦ Discord · {PROFILE.discord}</span>
            <span className="arrow">{copied ? "copied ✓" : "copy"}</span>
          </button>
          <a className="contact-btn" href={PROFILE.vrcUrl} target="_blank" rel="noopener">
            <span>VRChat · {PROFILE.vrcId}</span>
            <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact-final" style={{ paddingTop: 40 }}>
      <footer>
        <div className="signature">End of Profile</div>
        <div className="links">
          <a href={`https://twitter.com/${PROFILE.twitter}`} target="_blank" rel="noopener">@{PROFILE.twitter}</a>
          {" · "}<span>Discord: {PROFILE.discord}</span>{" · "}<span>VRChat: {PROFILE.vrcId}</span>
        </div>
        <div style={{ marginTop: 18, color: "var(--text-mute)", fontStyle: "italic" }}>
          built with caffeine, peach shisha & friends · こにー 2026
        </div>
      </footer>
    </section>
  );
}

// ---- Command palette ----
function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const items = useMemo(() => {
    const base = [
      ...NAV.map((n) => ({ kind: "nav", label: `Go to · ${n.label}`, target: `#${n.id}`, glyph: "→" })),
      { kind: "ext", label: "Open · Twitter (@Konny0329s_VRC)", target: `https://twitter.com/${PROFILE.twitter}`, glyph: "𝕏" },
      { kind: "copy", label: "Copy · Discord ID (Konny0329s)", target: PROFILE.discord, glyph: "✦" },
      ...PROJECTS.map((p) => ({ kind: "ext", label: `Project · ${p.name}`, target: p.url, glyph: "◌" })),
      ...HOBBIES.map((h) => ({ kind: "nav", label: `Hobby · ${h.title}`, target: `#hobbies`, glyph: "♥" })),
      ...GAMES.map((g) => ({ kind: "nav", label: `Game · ${g.name} — ${g.rank}`, target: `#games`, glyph: "◆" })),
    ];
    const ql = q.toLowerCase();
    return ql ? base.filter((i) => i.label.toLowerCase().includes(ql)) : base;
  }, [q]);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 30); }, [open]);
  useEffect(() => { setSel(0); }, [q, open]);

  const execute = useCallback((item) => {
    if (!item) return;
    if (item.kind === "nav") {
      document.querySelector(item.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (item.kind === "ext") {
      window.open(item.target, "_blank");
    } else if (item.kind === "copy") {
      navigator.clipboard?.writeText(item.target);
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(items.length - 1, s + 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
      else if (e.key === "Enter") { e.preventDefault(); execute(items[sel]); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items, sel, execute, onClose]);

  return (
    <div className={`cmdk-overlay ${open ? "open" : ""}`} onClick={onClose}>
      <div className="cmdk" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="cmdk-input"
          placeholder="Search · jump to section, copy id, open project…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="cmdk-list">
          {items.length === 0 && <div className="cmdk-item">// no results</div>}
          {items.map((it, i) => (
            <div
              key={i}
              className={`cmdk-item ${i === sel ? "active" : ""}`}
              onMouseEnter={() => setSel(i)}
              onClick={() => execute(it)}
            >
              <span className="glyph">{it.glyph}</span>
              <span>{it.label}</span>
              <span className="meta">{it.kind}</span>
            </div>
          ))}
        </div>
        <div className="cmdk-foot">
          <span><kbd>↑↓</kbd> navigate · <kbd>↵</kbd> open · <kbd>esc</kbd> close</span>
          <span>{items.length} results</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// App
// ============================================================
function App() {
  const [active, setActive] = useState("hero");
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (window.observeReveal) {
      window.observeReveal();
      setTimeout(() => window.observeReveal(), 300);
    }
  }, []);

  return (
    <>
      <Nav active={active} onOpenCmd={() => setCmdOpen(true)} />
      <main>
        <Hero />
        <Marquee items={[
          { text: "VRChat · こにー" }, { text: "Shisha Lounges" },
          { text: "League of Legends" }, { text: "Snowboarding" },
          { text: "Poker Nights" }, { text: "Incremental Games" },
          { kind: "muted", text: "Est. 2024 — PCVR / Desktop" },
          { text: "Tarkov Raids" }, { text: "Coaching" },
        ]} />
        <HobbiesSection />
        <GallerySection />
        <FriendCTA />
        <GamesSection />
        <DevSection />
        <CareerSection />
        <ContactSection />
      </main>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
