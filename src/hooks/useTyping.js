import { useState, useEffect } from "react";

export function useTyping(lines, speed = 32, lineDelay = 700) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let cancelled = false;
    let i = 0, j = 0;
    let acc = "";
    function step() {
      if (cancelled) return;
      if (i >= lines.length) { setDone(true); return; }
      const line = lines[i];
      if (j <= line.length) {
        setOut(acc + line.slice(0, j));
        j++;
        setTimeout(step, speed);
      } else {
        acc += line + "\n"; i++; j = 0;
        setTimeout(step, lineDelay);
      }
    }
    step();
    return () => { cancelled = true; };
  }, [lines, speed, lineDelay]);
  return { out, done };
}
