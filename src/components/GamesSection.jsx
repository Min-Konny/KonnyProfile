import { useState } from "react";
import { GAMES } from "../data/content.js";

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
        {g.note.split("\n").map((l, i) => {
          const text = l.replace(/^\s*❋\s*/, "");
          return (
            <div key={i}><span className="glyph">❋</span>{text}</div>
          );
        })}
      </div>
    </article>
  );
}

export function GamesSection() {
  return (
    <section id="games">
      <div className="reveal">
        <div className="section-label">04 / Games — 一緒にプレイ</div>
        <h2 className="section-title">よく遊ぶ <em>ゲーム</em></h2>
        <div className="section-subtitle">
          初心者歓迎・一緒にやれる人募集中！！<br/>
          VALORANT とか Overwatch（OW）もやってるよ。
        </div>
      </div>
      <div className="game-grid">
        {GAMES.map((g) => <GameCard key={g.code} g={g} />)}
      </div>
    </section>
  );
}
