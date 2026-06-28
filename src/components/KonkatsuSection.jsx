import { useState, useEffect } from "react";
import { KONKATSU_PROFILE } from "../data/content.js";
import { CornerOrnament } from "./Ornaments.jsx";

export function KonkatsuSection() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!unlocked) return;
    window.observeReveal?.();
    const id = setTimeout(() => window.observeReveal?.(), 120);
    return () => clearTimeout(id);
  }, [unlocked]);

  return (
    <section id="konkatsu">
      <div className="reveal">
        <div className="section-label">09 / VRC婚活 — Bonus</div>
        <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          VRC<em>婚活</em>コーナー
        </h2>
        <div className="section-subtitle konkatsu-teaser">
          こんなところまで読んでくれたってことはもしかして興味が…？？
          <br />
          より詳細なプロフィールだけど興味ない人は見なくていいよ！！
        </div>
      </div>

      {!unlocked ? (
        <div className="konkatsu-gate reveal">
          <button
            type="button"
            className="konkatsu-unlock-btn"
            onClick={() => setUnlocked(true)}
          >
            <span className="konkatsu-unlock-label">興味ある…？ 詳細プロフィールを見る</span>
            <span className="konkatsu-unlock-arrow">→</span>
          </button>
          <p className="konkatsu-gate-note">タップすると詳細が表示されます</p>
        </div>
      ) : (
        <div className="konkatsu-panel reveal in-view">
          <CornerOrnament className="corner-deco tl" />
          <CornerOrnament className="corner-deco tr" />
          <CornerOrnament className="corner-deco bl" />
          <CornerOrnament className="corner-deco br" />
          <div className="konkatsu-grid">
            {KONKATSU_PROFILE.map((item) => (
              <div className={`konkatsu-item ${item.alt ? "alt" : ""}`} key={item.label}>
                <div className="konkatsu-label">{item.label}</div>
                <div className="konkatsu-value">{item.value}</div>
                {item.lines?.length ? (
                  <div className="konkatsu-lines">
                    {item.lines.map((line, i) => (
                      <span key={i}>{line}{i < item.lines.length - 1 ? <br /> : null}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
