import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { PROFILE, NAV, PROJECTS, HOBBIES, GAMES } from "../data/content.js";

export function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const items = useMemo(() => {
    const base = [
      ...NAV.map((n) => ({ kind: "nav", label: `Go to · ${n.label}`, target: `#${n.id}`, glyph: "→" })),
      { kind: "ext", label: "Open · Twitter (@Konny0329s_VRC)", target: `https://twitter.com/${PROFILE.twitter}`, glyph: "𝕏" },
      { kind: "copy", label: "Copy · Discord ID (Konny0329s)", target: PROFILE.discord, glyph: "✦" },
      ...PROJECTS.map((p) => ({ kind: "ext", label: `Project · ${p.name}`, target: p.url, glyph: "◌" })),
      ...HOBBIES.map((h) => ({ kind: "nav", label: `Hobby · ${h.title}`, target: `#hobbies`, glyph: "♥" })),
      ...GAMES.map((g) => ({ kind: "nav", label: `Game · ${g.name} — ${g.rank}`, target: `#games`, glyph: "◆" })),
    ];
    const ql = q.toLowerCase();
    return ql ? base.filter((i) => i.label.toLowerCase().includes(ql)) : base;
  }, [q]);

  useEffect(() => {
    if (!open) return;
    const trigger = document.activeElement;
    inputRef.current?.focus({ preventScroll: true });
    return () => { if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true }); };
  }, [open]);
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

  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    } else if (e.key === "Tab") {
      const controls = Array.from(dialogRef.current.querySelectorAll('input, button:not([disabled])'));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    } else if (e.target === inputRef.current) {
      if (e.key === "ArrowDown") { e.preventDefault(); setSel(s => Math.min(Math.max(0, items.length - 1), s + 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setSel(s => Math.max(0, s - 1)); }
      else if (e.key === "Enter") { e.preventDefault(); execute(items[sel]); }
    }
  }

  // Closed palettes have no hidden controls in the keyboard or accessibility tree.
  if (!open) return null;

  return (
    <div className={`cmdk-overlay ${open ? "open" : ""}`} onClick={onClose}>
      <div className="cmdk" ref={dialogRef} role="dialog" aria-modal="true" aria-label="サイト内検索" onKeyDown={onKey} onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="cmdk-input"
          aria-label="移動先やリンクを検索"
          placeholder="Search · jump to section, copy id, open project…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="button" className="cmdk-close" onClick={onClose} aria-label="検索を閉じる">閉じる ×</button>
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
