import { COACH_TIMELINE } from "../data/content.js";

export function CareerSection() {
  return (
    <section id="career">
      <div className="reveal">
        <div className="section-label">06 / Coaching — 経歴</div>
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
