import { useState } from "react";
import { PROFILE } from "../data/content.js";
import { CornerOrnament } from "./Ornaments.jsx";

export function SectionDivider() {
  return (
    <div className="section-divider reveal" aria-hidden>
      <span className="bar" />
      <span className="star">✦</span>
      <span className="bar" />
    </div>
  );
}

export function FriendCTA() {
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
          <div className="section-label" style={{ marginBottom: 14 }}>04 / Say Hi</div>
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

export function ContactSection() {
  return (
    <section id="contact-final" style={{ paddingTop: 40 }}>
      <footer>
        <div className="signature">End of Profile</div>
        <div className="links">
          <a href={`https://twitter.com/${PROFILE.twitter}`} target="_blank" rel="noopener">@{PROFILE.twitter}</a>
          {" · "}<span>Discord: {PROFILE.discord}</span>{" · "}<span>VRChat: {PROFILE.vrcId}</span>
        </div>
        <div style={{ marginTop: 18, color: "var(--text-mute)", fontStyle: "italic" }}>
          <span className="section-label" style={{ display: "inline-block", marginBottom: 8 }}>08 / Footer</span><br/>
          built with caffeine, peach shisha & friends · こにー 2026
        </div>
      </footer>
    </section>
  );
}
