export function CornerOrnament({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <path d="M2 2 L26 2 M2 2 L2 26" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M8 2 Q8 8 14 8 M2 8 Q8 8 8 14" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
      <path d="M14 14 Q24 14 24 24" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.7"/>
      <circle cx="24" cy="24" r="1" fill="currentColor" opacity="0.7"/>
      <path d="M4 18 Q4 24 10 24" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4"/>
      <path d="M18 4 Q24 4 24 10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4"/>
    </svg>
  );
}

export function AvatarFiligree() {
  return (
    <svg viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="ringG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1d9a8"/>
          <stop offset="50%" stopColor="#d4af7a"/>
          <stop offset="100%" stopColor="#a47e4a"/>
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="96" stroke="url(#ringG)" strokeWidth="0.6" fill="none"/>
      <circle cx="100" cy="100" r="92" stroke="url(#ringG)" strokeWidth="0.3" fill="none" strokeDasharray="1 4"/>
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const r1 = 88, r2 = i % 2 === 0 ? 82 : 85;
        const x1 = 100 + Math.cos(a) * r1, y1 = 100 + Math.sin(a) * r1;
        const x2 = 100 + Math.cos(a) * r2, y2 = 100 + Math.sin(a) * r2;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#ringG)" strokeWidth={i % 6 === 0 ? 1.2 : 0.5}/>;
      })}
      {[0, 90, 180, 270].map((deg) => {
        const a = (deg / 360) * Math.PI * 2;
        const x = 100 + Math.cos(a) * 96;
        const y = 100 + Math.sin(a) * 96;
        return (
          <g key={deg} transform={`translate(${x}, ${y}) rotate(${deg + 90} 0 0)`}>
            <path d="M-4 0 L0 -6 L4 0 Z" fill="url(#ringG)" opacity="0.9"/>
          </g>
        );
      })}
    </svg>
  );
}

export function AvatarFiligree2() {
  return (
    <svg viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="98" stroke="#d4af7a" strokeWidth="0.3" fill="none" opacity="0.4"/>
      {Array.from({ length: 60 }).map((_, i) => {
        const a = (i / 60) * Math.PI * 2;
        const x = 100 + Math.cos(a) * 98;
        const y = 100 + Math.sin(a) * 98;
        return <circle key={i} cx={x} cy={y} r="0.5" fill="#f1d9a8" opacity={i % 5 === 0 ? 1 : 0.4}/>;
      })}
    </svg>
  );
}
