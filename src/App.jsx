import { useState, useEffect, lazy, Suspense } from "react";
import { NAV } from "./data/content.js";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { Marquee } from "./components/Marquee.jsx";
import { HobbiesSection } from "./components/HobbiesSection.jsx";
import { SectionDivider, FriendCTA, ContactSection } from "./components/Contact.jsx";
import { CommandPalette } from "./components/CommandPalette.jsx";

const GallerySection = lazy(() =>
  import("./components/GallerySection.jsx").then((m) => ({ default: m.GallerySection }))
);
const GamesSection = lazy(() =>
  import("./components/GamesSection.jsx").then((m) => ({ default: m.GamesSection }))
);
const DevSection = lazy(() =>
  import("./components/DevSection.jsx").then((m) => ({ default: m.DevSection }))
);
const CareerSection = lazy(() =>
  import("./components/CareerSection.jsx").then((m) => ({ default: m.CareerSection }))
);
const KonkatsuSection = lazy(() =>
  import("./components/KonkatsuSection.jsx").then((m) => ({ default: m.KonkatsuSection }))
);

function SectionFallback() {
  return <div className="section-lazy-placeholder" aria-hidden="true" />;
}

function RevealOnMount({ children }) {
  useEffect(() => {
    window.observeReveal?.();
    const id = setTimeout(() => window.observeReveal?.(), 250);
    return () => clearTimeout(id);
  }, []);
  return children;
}

export function App() {
  const [active, setActive] = useState("hero");
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (window.observeReveal) {
      window.observeReveal();
      setTimeout(() => window.observeReveal(), 300);
    }
  }, []);

  return (
    <>
      <Nav active={active} onOpenCmd={() => setCmdOpen(true)} />
      <main>
        <Hero />
        <Marquee items={[
          { text: "VRChat · こにー" }, { text: "Shisha Lounges" },
          { text: "League of Legends" }, { text: "Snowboarding" },
          { text: "Poker Nights" }, { text: "Incremental Games" },
          { kind: "muted", text: "Est. 2024 — PCVR / Desktop" },
          { text: "Tarkov Raids" }, { text: "Coaching" },
        ]} />
        <HobbiesSection />
        <Suspense fallback={<SectionFallback />}>
          <RevealOnMount><GallerySection /></RevealOnMount>
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <RevealOnMount><GamesSection /></RevealOnMount>
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <RevealOnMount><DevSection /></RevealOnMount>
          <RevealOnMount><CareerSection /></RevealOnMount>
          <RevealOnMount><KonkatsuSection /></RevealOnMount>
        </Suspense>
        <SectionDivider />
        <FriendCTA />
        <ContactSection />
      </main>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}
