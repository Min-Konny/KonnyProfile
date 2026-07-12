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
        <div className="section-label">07 / Bonus</div>
        <h2 className="section-title" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          お砂糖<em>募集中？？？</em>
        </h2>
        <div className="section-subtitle konkatsu-teaser">
          一歩踏み込んだプロフィール。
          <br />
          気になった人だけ、覗いてみてください。
        </div>
      </div>

      {!unlocked ? (
        <div className="konkatsu-gate reveal">
          <button
            type="button"
            className="konkatsu-unlock-btn"
            onClick={() => {
              setUnlocked(true);
              // 3D世界に花吹雪バースト
              window.dispatchEvent(new CustomEvent("konny-burst"));
            }}
          >
            <span className="konkatsu-unlock-label">詳しく見てみる</span>
            <span className="konkatsu-unlock-arrow">→</span>
          </button>
          <p className="konkatsu-gate-note">クリックで詳細を表示</p>
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
          <figure className="konkatsu-chart reveal in-view">
            <img
              src="/assets/nenshu-graph.png"
              alt="年収推移グラフ: 1年目200万から7年目(現在)650万、リーダー昇進で800万、マネージャーで950万の見込み"
              loading="lazy"
            />
            <figcaption>
              数字は正直に。伸びしろ込みでご検討ください。
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
