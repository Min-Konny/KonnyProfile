import { useState, useEffect, useRef } from "react";
import { PROFILE, STATS } from "../data/content.js";
import { useTyping } from "../hooks/useTyping.js";
import { CornerOrnament, AvatarFiligree, AvatarFiligree2 } from "./Ornaments.jsx";

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
  const { out, done } = useTyping(PROFILE.intro, 30, 500);
  const wrapRef = useRef(null);
  const [discordCopied, setDiscordCopied] = useState(false);

  function copyDiscord() {
    navigator.clipboard?.writeText(PROFILE.discord);
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 1800);
  }

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
            <div className="line"><span className="key">status</span><span>{PROFILE.status}</span></div>
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

        <div className="hero-avatar">
          <div className="avatar-ring-2"><AvatarFiligree2/></div>
          <div className="avatar-ring"><AvatarFiligree/></div>
          <div className="avatar-wrap" ref={wrapRef}>
            <div className="avatar-img">
              <div className="avatar-img-layer primary" aria-hidden="true" />
              <div className="avatar-img-layer alt" aria-hidden="true" />
            </div>
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
