import { useState, useEffect } from "react";
import { NAV } from "../data/content.js";

export function Nav({ active, onOpenCmd }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    function close() { setMenuOpen(false); }
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [menuOpen]);

  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="ornament"></span>
        <span>Konny</span>
        <span className="mono">· 0329 ·</span>
      </div>
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        {NAV.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={active === n.id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {n.label}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <button
          type="button"
          className="nav-menu-btn"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
        <button type="button" className="nav-cmdk" onClick={onOpenCmd}>
          <span>SEARCH</span>
          <kbd>Ctrl K</kbd>
        </button>
      </div>
      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="メニューを閉じる"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
