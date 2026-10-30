import { PROJECTS } from "../data/content.js";

const CHAT_PRODUCTS = [
  {
    name: "おれたちの放課後",
    description: "LINEトークの盛り上がった場面を、見出し付きで振り返る会話アーカイブ。誰が話したか、前後で何を話したかまで、LINE風の画面で読み返せます。",
    features: ["名場面のピックアップ", "話者ごとの会話表示", "キーワード検索"],
  },
  {
    name: "虹色映像神社",
    description: "共有されたYouTube・Instagramの動画から、次に観る一本を引く動画おみくじ。サイケデリックな神社をモチーフに、動画との偶然の出会いを楽しめます。",
    features: ["ランダム抽選", "投稿者・サービス別", "一巡まで重複回避"],
  },
];

function ChatProductsShowcase() {
  return (
    <article className="product-showcase reveal" aria-labelledby="chat-products-title">
      <div className="product-showcase-meta">
        <span>PLAN + DESIGN + DEV</span>
        <span>2026 / WEB APPLICATIONS</span>
      </div>
      <h3 id="chat-products-title">会話を、思い出に。共有を、発見に。</h3>
      <p className="product-showcase-intro">日々のトークと共有リンクを、もう一度楽しめる体験へ。会話アーカイブと動画おみくじ、2つのWebアプリの制作事例です。</p>
      <video
        className="product-showcase-video"
        controls
        playsInline
        preload="metadata"
        poster="/assets/showcase/chat-products/cover.jpg"
        aria-label="会話アーカイブと動画おみくじの紹介映像、40秒"
        aria-describedby="chat-products-description"
      >
        <source src="/assets/showcase/chat-products/product-showcase.mp4" type="video/mp4" />
        紹介映像は、この下の2つのアプリ説明からもご確認いただけます。
      </video>
      <div className="product-showcase-products" id="chat-products-description">
        {CHAT_PRODUCTS.map((product) => (
          <div className="product-showcase-product" key={product.name}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <ul aria-label={`${product.name}の機能`}>
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <p className="product-showcase-note">スマートフォン対応・合言葉による閲覧。紹介映像の会話・人物・動画はすべて架空のサンプルです。</p>
    </article>
  );
}

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
        <div className="section-label">05 / Studio · 個人開発</div>
        <h2 className="section-title">作ってる <em>もの</em></h2>
        <div className="section-subtitle">こんな感じのサイトなら作れます。何かあれば気軽に相談してね。</div>
      </div>
      <ChatProductsShowcase />
      <div className="portfolio-grid">
        {PROJECTS.map((p) => <ProjectCard p={p} key={p.name}/>)}
      </div>
    </section>
  );
}
