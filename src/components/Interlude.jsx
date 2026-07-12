// 幕間シーン: 全画面の3D世界の上に巨大タイポが現れて消える
// scrollfx.js がスクロール量に応じて .interlude-inner を制御する
export function Interlude({ no, title, sub, tone, scene }) {
  return (
    <div className={`interlude${tone ? ` tone-${tone}` : ""}`} data-scene={scene} aria-hidden="true">
      <div className="interlude-sticky">
        <div className="interlude-inner">
          {no && <div className="interlude-no">{no}</div>}
          <div className="interlude-title">
            {Array.from(title).map((ch, i) =>
              /\s/.test(ch)
                ? " "
                : <span className="ich" style={{ "--ci": i }} key={i}>{ch}</span>
            )}
          </div>
          {sub && <div className="interlude-sub">{sub}</div>}
        </div>
      </div>
    </div>
  );
}
