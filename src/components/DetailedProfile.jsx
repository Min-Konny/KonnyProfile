import { useState } from "react";

const INCOME = [
  { year: "1年目", value: 200 }, { year: "2年目", value: 200 },
  { year: "3年目", value: 350 }, { year: "4年目", value: 400 },
  { year: "5年目", value: 500 }, { year: "6年目", value: 600 },
  { year: "7年目", value: 650, note: "現在" },
  { year: "8年目", value: 800, note: "リーダー", projected: true },
  { year: "9〜10年目", value: 950, note: "マネージャー", projected: true },
];
const CAREER = [
  ["1〜2年目", "LoLで知り合った方の会社"],
  ["3年目", "転職エージェント / FE"],
  ["4〜6年目", "QAベンダー"],
  ["7年目〜現在", "事業会社 / QA"],
];

function IncomeChart() {
  const x = i => 66 + i * 94;
  const y = value => 308 - value * .25;
  const points = INCOME.map((item, i) => `${x(i)},${y(item.value)}`);
  return (
    <figure className="detail-income">
      <div className="detail-chart-heading"><h3>年収の推移</h3><span>単位：万円</span></div>
      <p className="detail-chart-legend"><span>─ 実績</span><span>┄ 昇進時の見込み</span></p>
      <div className="detail-chart-scroll" role="region" aria-label="年収推移グラフ。横にスクロールできます" tabIndex={0}>
        <svg viewBox="0 0 900 380" role="img" aria-labelledby="income-title income-description">
          <title id="income-title">年収推移：現在650万円</title>
          <desc id="income-description">{INCOME.map(item => `${item.year} ${item.value}万円${item.projected ? "（昇進時の見込み）" : ""}`).join("、")}</desc>
          {[200,400,600,800,1000].map(value => <g key={value}><line x1="48" x2="855" y1={y(value)} y2={y(value)} className="detail-gridline"/><text x="36" y={y(value)+4} textAnchor="end" className="detail-axis">{value}</text></g>)}
          <polyline points={points.slice(0,7).join(" ")} className="detail-income-line"/>
          <polyline points={points.slice(6).join(" ")} className="detail-income-line projected"/>
          {INCOME.map((item, i) => <g key={item.year}>
            {i === 6 && <circle cx={x(i)} cy={y(item.value)} r="11" className="detail-current-ring"/>}
            <circle cx={x(i)} cy={y(item.value)} r="5" className={item.projected ? "detail-dot projected" : "detail-dot"}/>
            <text x={x(i)} y={y(item.value)-17} textAnchor="middle" className="detail-value">{item.value}万</text>
            {item.note && <text x={x(i)} y={y(item.value)+25} textAnchor="middle" className="detail-axis">{item.note}</text>}
            <text x={x(i)} y="342" textAnchor="middle" className="detail-axis">{item.year}</text>
          </g>)}
        </svg>
      </div>
      <figcaption>7年目までが実績です。8年目以降の800万円・950万円は、昇進した場合の見込みです。</figcaption>
    </figure>
  );
}

export function DetailedProfile() {
  const [open, setOpen] = useState(false);
  return (
    <section id="profile-details" className="detailed-profile">
      <div className="section-label">08 / A little more</div>
      <h2 className="section-title in-view">もう少し詳しい<em>プロフィール</em></h2>
      <p className="section-subtitle">学んできたこと、これまでの仕事。気になった方はこちらから。</p>
      <button type="button" className="detail-profile-toggle" aria-expanded={open} aria-controls="profile-details-panel" onClick={() => setOpen(value => !value)}>
        <span>{open ? "プロフィールを閉じる" : "詳しいプロフィールを見る"}</span><span aria-hidden="true">{open ? "−" : "＋"}</span>
      </button>
      <div id="profile-details-panel" hidden={!open}>
        {open && <div className="detail-profile-content">
          <div className="detail-background-grid">
            <article className="detail-background-card"><span className="detail-kicker">EDUCATION</span><h3>学歴</h3><p className="detail-education">MARCH卒</p><p>経済学部</p></article>
            <article className="detail-background-card"><span className="detail-kicker">CAREER</span><h3>職歴</h3><ol className="detail-career-list">{CAREER.map(([period, workplace]) => <li key={period}><span>{period}</span><strong>{workplace}</strong></li>)}</ol></article>
          </div>
          <IncomeChart/>
        </div>}
      </div>
    </section>
  );
}
