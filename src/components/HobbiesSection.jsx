import { useState } from "react";
import { HOBBIES } from "../data/content.js";
import { encPhotoPath, thumbPhotoPath, webPhotoPath } from "../lib/gallery.js";
import { CornerOrnament } from "./Ornaments.jsx";

export function HobbiesSection() {
  const [active, setActive] = useState(0);
  const h = HOBBIES[active];
  return (
    <section id="hobbies">
      <div className="reveal">
        <div className="section-label">02 / Hobbies — 趣味</div>
        <h2 className="section-title">こんなことが <em>好きです</em></h2>
        <div className="section-subtitle">気になったらとりあえずやってみるタイプ。話のきっかけにどうぞ。</div>
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
            </div>
            <div className="h-photo">
              <image-slot
                id={`hobby-${h.id}`}
                shape="rounded"
                radius="14"
                placeholder={`${h.label}の写真をドロップ`}
                {...(h.photo ? {
                  src: encPhotoPath(webPhotoPath(h.photo)),
                  thumb: encPhotoPath(thumbPhotoPath(h.photo)),
                } : {})}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
