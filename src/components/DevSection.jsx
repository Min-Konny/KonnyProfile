import { PROJECTS } from "../data/content.js";

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

export function DevSection() {
  return (
    <section id="dev">
      <div className="reveal">
        <div className="section-label">07 / Studio · 個人開発</div>
        <h2 className="section-title">作ったやつ <em>いろいろ</em></h2>
        <div className="section-subtitle">こんな感じのサイトなら作れます、なんかあったら相談してね。</div>
      </div>
      <div className="portfolio-grid">
        {PROJECTS.map((p) => <ProjectCard p={p} key={p.name}/>)}
      </div>
    </section>
  );
}
