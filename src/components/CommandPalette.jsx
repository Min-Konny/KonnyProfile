import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { PROFILE, NAV, PROJECTS, HOBBIES, GAMES } from "../data/content.js";

export function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const items = useMemo(() => {
    const base = [
      ...NAV.map((n) => ({ kind: "nav", label: `Go to · ${n.label}`, target: `#${n.id}`, glyph: "→" })),
      { kind: "nav", label: "Go to · VRC婚活コーナー", target: "#konkatsu", glyph: "♥" },
      { kind: "ext", label: "Open · Twitter (@Konny0329s_VRC)", target: `https://twitter.com/${PROFILE.twitter}`, glyph: "𝕏" },
      { kind: "copy", label: "Copy · Discord ID (Konny0329s)", target: PROFILE.discord, glyph: "✦" },
      ...PROJECTS.map((p) => ({ kind: "ext", label: `Project · ${p.name}`, target: p.url, glyph: "◌" })),
      ...HOBBIES.map((h) => ({ kind: "nav", label: `Hobby · ${h.title}`, target: `#hobbies`, glyph: "♥" })),
      ...GAMES.map((g) => ({ kind: "nav", label: `Game · ${g.name} — ${g.rank}`, target: `#games`, glyph: "◆" })),
    ];
    const ql = q.toLowerCase();
    return ql ? base.filter((i) => i.label.toLowerCase().includes(ql)) : base;
  }, [q]);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 30); }, [open]);
  useEffect(() => { setSel(0); }, [q, open]);

  const execute = useCallback((item) => {
    if (!item) return;
    if (item.kind === "nav") {
      document.querySelector(item.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (item.kind === "ext") {
      window.open(item.target, "_blank");
    } else if (item.kind === "copy") {
      navigator.clipboard?.writeText(item.target);
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(items.length - 1, s + 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
      else if (e.key === "Enter") { e.preventDefault(); execute(items[sel]); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items, sel, execute, onClose]);

  return (
    <div className={`cmdk-overlay ${open ? "open" : ""}`} onClick={onClose}>
      <div className="cmdk" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="cmdk-input"
          placeholder="Search · jump to section, copy id, open project…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="cmdk-list">
          {items.length === 0 && <div className="cmdk-item">// no results</div>}
          {items.map((it, i) => (
            <button
              key={i}
              type="button"
              className={`cmdk-item ${i === sel ? "active" : ""}`}
              onMouseEnter={() => setSel(i)}
              onClick={() => execute(it)}
            >
              <span className="glyph">{it.glyph}</span>
              <span>{it.label}</span>
              <span className="meta">{it.kind}</span>
            </button>
          ))}
        </div>
        <div className="cmdk-foot">
          <span><kbd>↑↓</kbd> navigate · <kbd>↵</kbd> open · <kbd>esc</kbd> close</span>
          <span>{items.length} results</span>
        </div>
      </div>
    </div>
  );
}
