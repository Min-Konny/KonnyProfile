import { useState, useEffect } from "react";
import { PROFILE, STATS } from "../data/content.js";
const AVATARS = [
  { src: "/assets/avatar-silver.webp", label: "Silver", thumb: "/assets/avatar-silver-thumb.webp", description: "銀髪・グレーのジャケットのアバター", position: "50% 25%" },
  { src: "/assets/avatar-winter.webp", label: "Winter", thumb: "/assets/avatar-winter-thumb.webp", description: "黒髪・赤いマフラーのアバター", position: "50% 15%" },
  { src: "/assets/avatar.jpg", label: "Peach", thumb: "/assets/avatar-peach-thumb.webp", description: "ピンク髪のアバター", position: "50% 50%" },
  { src: "/assets/avatar-alt.jpg", label: "Classic", thumb: "/assets/avatar-classic-thumb.webp", description: "これまでのプロフィールアバター", position: "50% 18%" },
];

function HeroSnsLink({ platform, sub, value, href, external, action, onClick }) {
  const Tag = onClick ? "button" : "a";
  const props = onClick
    ? { type: "button", onClick }
    : { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) };
  return (
    <Tag className={`sns-card sns-${platform.toLowerCase()}`} {...props}>
      <span className="sns-card-top">
        <span className="sns-card-platform">{platform}</span>
        {sub && <span className="sns-card-sub">{sub}</span>}
      </span>
      <span className="sns-card-value">{value}</span>
      <span className="sns-card-action">{action}</span>
    </Tag>
  );
}

export function Hero() {
  const [avatarIndex, setAvatarIndex] = useState(0);
  const avatar = AVATARS[avatarIndex];
  const [discordCopied, setDiscordCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.avatarTheme = avatar.label.toLowerCase();
    return () => { delete document.documentElement.dataset.avatarTheme; };
  }, [avatar.label]);

  function tiltPortrait(event) {
    if (event.pointerType !== "mouse" || !matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    const surface = event.currentTarget;
    const rect = surface.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    surface.style.setProperty("--tilt-x", (-(y - .5) * 6) + "deg");
    surface.style.setProperty("--tilt-y", ((x - .5) * 8) + "deg");
    surface.style.setProperty("--light-x", (x * 100) + "%");
    surface.style.setProperty("--light-y", (y * 100) + "%");
  }

  function resetPortrait(event) {
    for (const name of ["--tilt-x", "--tilt-y", "--light-x", "--light-y"]) event.currentTarget.style.removeProperty(name);
  }

  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText(PROFILE.discord);
      setDiscordCopied(true);
      setTimeout(() => setDiscordCopied(false), 1800);
    } catch {
      setDiscordCopied(false);
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
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
          <p className="hero-greeting">{PROFILE.intro[0]}</p>
          <div className="hero-handle">
            @{PROFILE.twitter} <span className="arrow">·</span> <span className="en">{PROFILE.nameEn}</span>
          </div>
          <div className="hero-meta">
            <div className="line"><span className="key">status</span><span>{PROFILE.status}</span></div>
          </div>
          <p className="hero-intro">
            {PROFILE.intro.slice(1).map((line) => <span key={line}>{line}<br/></span>)}
          </p>
          <div className="hero-actions">
            <a className="hero-primary-link" href={PROFILE.vrcUrl} target="_blank" rel="noopener noreferrer">VRChatでつながる <span aria-hidden="true">↗</span></a>
            <a className="hero-secondary-link" href="#gallery">写真をのぞく <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="label">{s.label}</div>
                <div className="value">{s.value}<span className="unit">{s.unit}</span></div>
              </div>
            ))}
          </div>
          <div className="hero-sns">
            <p className="hero-sns-label">連絡先 · Contact</p>
            <div className="hero-sns-grid">
              <HeroSnsLink
                platform="X"
                sub="Twitter"
                value={`@${PROFILE.twitter}`}
                href={`https://twitter.com/${PROFILE.twitter}`}
                external
                action="プロフィールを開く →"
              />
              <HeroSnsLink
                platform="Discord"
                value={PROFILE.discord}
                action={discordCopied ? "コピーしました ✓" : "IDをコピー"}
                onClick={copyDiscord}
              />
              <HeroSnsLink
                platform="VRChat"
                value={PROFILE.vrcId}
                href={PROFILE.vrcUrl}
                external
                action="VRCプロフィール →"
              />
            </div>
          </div>
        </div>

        <div className="hero-avatar portrait-gallery">
          <div className="portrait-depth" onPointerMove={tiltPortrait} onPointerLeave={resetPortrait} onPointerCancel={resetPortrait}>
            <div className="portrait-atmosphere" aria-hidden="true">
              <div className="orbit-system"><i className="orbit orbit-one" /><i className="orbit orbit-two" /><i className="orbit orbit-three" /></div>
              <i className="atmosphere-pearl pearl-one" /><i className="atmosphere-pearl pearl-two" />
              <span className="atmosphere-coordinate">K / 0329</span>
            </div>
          <figure className="portrait-card">
            <div className="portrait-topline"><span>THE AVATAR COLLECTION</span><span>0{avatarIndex + 1} / 04</span></div>
            <div className="portrait-stage">
              <span className="portrait-word" aria-hidden="true">Konny.</span>
              <img key={avatar.src} className="portrait-image" src={avatar.src} alt={avatar.description} width="1080" height="1920" style={{ objectPosition: avatar.position }} fetchpriority="high" />
            </div>
            <figcaption className="portrait-caption" aria-live="polite"><span>{avatar.label}<small>こにー / Konny</small></span><span className="portrait-caption-note">VIRTUAL SELF.<br/>SAME ME.</span></figcaption>
          </figure>
          </div>
          <div className="avatar-picker" role="group" aria-label="表示するアバターを選ぶ">
            {AVATARS.map((item, index) => (
              <button type="button" key={item.src} className="avatar-choice" aria-pressed={index === avatarIndex} aria-label={item.description + "を表示"} onClick={() => setAvatarIndex(index)}>
                <span className="avatar-choice-image"><img src={item.thumb} alt="" decoding="async" width="52" height="52" style={{ objectPosition: item.position }} /></span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          <p className="avatar-picker-hint" aria-live="polite"><span className="theme-swatch" aria-hidden="true" />{({ Silver: "月明かりのシルバー", Winter: "冬夜のアンバー", Peach: "桃色のトワイライト", Classic: "翡翠のミッドナイト" })[avatar.label]}</p>
        </div>
      </div>
      <div className="hero-scroll">
        <span>scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
