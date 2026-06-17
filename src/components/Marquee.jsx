import React from "react";

export function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {loop.map((it, i) => (
          <React.Fragment key={i}>
            {it.kind === "muted"
              ? <span className="muted">{it.text}</span>
              : <span>{it.text}</span>}
            <span className="dot">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
