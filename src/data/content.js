export const PROFILE = {
  name: "こにー",
  nameEn: "Konny",
  vrcId: "こにー（Konny）",
  twitter: "Konny0329s_VRC",
  discord: "Konny0329s",
  vrcUrl: "https://vrchat.com/home/user/usr_0ce3df70-b629-4444-83ce-9425840255e1",
  status: "online — カラオケ・謎解きワールド / EN-JP",
  intro: [
    "はじめまして、こにーです。",
    "多趣味＆新しいこと大好きなのでなんでも誘ってください！",
    "仕事はフルリモなので平日19:00-26:00",
    "土日祝休みなのでいつでも遊べます！！",
  ],
};

export const STATS = [
  { label: "LANGUAGES", value: "日本語", unit: "/ENG" },
  { label: "PLATFORM", value: "PCVR", unit: "" },
];

export const PAL = {
  gold: "#d4af7a",
  goldHi: "#f1d9a8",
  rose: "#e8b4b8",
  roseDeep: "#c08087",
  lilac: "#c9b8e3",
  amber: "#e0bc7a",
  cream: "#f3ead6",
  blush: "#f1c8c0",
};

export const GAMES = [
  { code: "LOL", name: "League of Legends", rank: "Challenger", years: "16", pct: 100,
    note: "ADCメイン\n超攻撃的なプレイスタイル",
    a1: PAL.goldHi, a2: PAL.lilac, tag: "MOBA" },
  { code: "TFT", name: "Teamfight Tactics", rank: "Grandmaster", years: "5", pct: 92,
    note: "オートチェスはやめられない。\nTFTもチャレンジャー行きたい。",
    a1: PAL.rose, a2: PAL.lilac, tag: "AUTO-CHESS" },
  { code: "L4D2", name: "Left 4 Dead 2", rank: "3,000+ hrs", years: "10+", pct: 100,
    note: "ゲーム人生はここから始まった。\n対戦モード以外やりません。",
    a1: PAL.amber, a2: PAL.blush, tag: "CO-OP FPS" },
  { code: "EFT", name: "Escape from Tarkov", rank: "60レベ", years: "4", pct: 80,
    note: "しょっちゅう生還、たまに全ロス。\nレイド組める人募集中。",
    a1: PAL.gold, a2: PAL.amber, tag: "EXTRACTION" },
  { code: "INC", name: "Incremental Games", rank: "廃人", years: "∞", pct: 100,
    note: "数字が増えるだけで嬉しい病。\nオススメのインクリ系あったら教えて。",
    a1: PAL.lilac, a2: PAL.rose, tag: "IDLE" },
  { code: "STEAM", name: "Steam 全般", rank: "500+ titles", years: "12", pct: 85,
    note: "セールでつい買う、積む、たまに掘り出し物。\nマルチで遊べるやつ募集中。",
    a1: PAL.goldHi, a2: PAL.rose, tag: "VARIETY" },
];

export const KONKATSU_PROFILE = [
  { label: "年収", value: "650万円", lines: [
    "正社員フルリモフルフレックス",
    "社会人6年目、プロゲーマーはカウントしてないので3年遅れ",
  ]},
  { label: "学歴", value: "MARCH卒", lines: ["経済学部"] },
  { label: "運動神経", value: "かなり良い", lines: [
    "小中野球部、ずっとレギュラー",
    "フットサル、経験者って言われるくらいには",
    "スノボ、S字で普通に滑れる",
  ]},
  { label: "ゲーム", value: "超絶上手い", lines: [
    "プロゲーマー経験あり、LoLは最高上位0.02%！！",
    "他のゲームも大体どのゲームでも5%くらいまでは行ける",
  ]},
  { label: "歌", value: "まぁまぁ得意", lines: [
    "カラオケ行くと大体上手いとは言ってもらえるくらいには！",
  ]},
  { label: "お砂糖", value: "累計０人", alt: true },
  { label: "彼女", value: "累計５人", alt: true },
  { label: "料理掃除", value: "ニガテ" },
  { label: "連絡", value: "遅い", lines: [
    "こまめに欲しい人だったら努力はする",
  ]},
  { label: "同棲", value: "経験有" },
  { label: "一人暮らし", value: "経験有" },
  { label: "その他", value: "聞かれたら答える！！", lines: [] },
];

export const COACH_TIMELINE = [
  { title: "SCARZ — LoL / Wild Rift コーチ", alt: false,
    desc: "ヘッドコーチとして4年。LoL部門・Wild Rift部門を担当しました。" },
  { title: "LJL 出場", alt: true,
    desc: "LJLCSから勝ち上がってLJLに出場しました。" },
  { title: "Wild Rift 日本 2位", alt: false },
  { title: "テレ東 e-sports high 出演", alt: true,
    desc: "テレ東「e-sports high」に30分×8回出演。" },
];

export const PROJECTS = [
  { name: "Saori VTuber Site", url: "https://saori-vtuber-site.vercel.app/",
    role: "DESIGN + DEV", year: "2024", status: "LIVE",
    desc: "VTuberさおりさん公式サイト。プロフィール・配信告知・グッズ導線まで一通り。",
    features: [
      "プロフィール / 自己紹介ページ",
      "配信スケジュール表示",
      "グッズ・SNS導線",
      "レスポンシブ対応",
    ],
    ph1: "#2a1a32", ph2: "#4a2a4a", glyph: "S" },
  { name: "Team Auto Split Tool", url: "https://team-auto-split-tool.vercel.app/",
    role: "PLAN + DEV", year: "2024", status: "LIVE",
    desc: "VRCやゲームの集まりで使うチーム自動分け。レート・人数指定で公平にシャッフル。",
    features: [
      "レート入力で公平分け",
      "任意人数チーム生成",
      "再シャッフル即時反映",
      "URL共有で持ち回り",
    ],
    ph1: "#2a2032", ph2: "#3a3050", glyph: "⇆" },
];

export const HOBBIES = [
  { id: "shisha", label: "シーシャ", title: "Shisha · 水煙草", sub: "// 3台所持・フレーバーで使い分け",
    photo: "写真/シーシャ/IMG_4477.jpg",
    body: "ハリルマムーン150周年モデル、SHISHA BUCKS、PATISAの木製台持ってます！\nおすすめのフレーバーとかミックス教えてください。" },
  { id: "snow", label: "スノボ", title: "Snowboarding", sub: "// 新幹線で行けるから新潟率90%",
    photo: "写真/スノボ/IMG_3997.jpg",
    body: "シーズンは月1〜2で雪山。新幹線一本で行ける気軽さで新潟が圧倒的に多い。\nS字カーブで普通に滑れるくらい。" },
  { id: "poker", label: "ポーカー", title: "Poker", sub: "// JOPTや戦国などの大型トナメにも参加",
    photo: "写真/ポーカー/IMG_0762.jpg",
    body: "NLHメイン。\nJOPTとか戦国とか、大型トナメもたまに出ます。\nライブでもオンラインでも遊ぶ。" },
  { id: "escape", label: "リアル脱出", title: "Real Escape Game", sub: "// SCRAP全般が好き",
    photo: "写真/脱出ゲーム/IMG_0496.JPG",
    body: "SCRAP系の謎解き・リアル脱出ゲームが好き。「豪華客船からの脱出」が過去一。\n是非一緒に行きましょう。" },
  { id: "futsal", label: "フットサル", title: "Futsal", sub: "// 部活・友人と定期",
    photo: "写真/フットサル/IMG_3424.jpg",
    body: "会社の部活や友達と定期的にフットサルしてます。こっちも参加者募集中。\n歴は3年" },
  { id: "art", label: "美術館", title: "Art Museum", sub: "// 美術館 · teamLab · 希須林",
    photo: "写真/アート/IMG_4528.jpg",
    body: "月１くらいで美術館だったり、チームラボだったり行ってます。\n行った後に麻布台ヒルズの希須林で中華食うのが鉄板ルート。" },
];

export const NAV = [
  { id: "hero", label: "Home" },
  { id: "hobbies", label: "Hobbies" },
  { id: "gallery", label: "Gallery" },
  { id: "games", label: "Games" },
  { id: "career", label: "Career" },
  { id: "dev", label: "Studio" },
  { id: "contact", label: "Friend" },
];

if (import.meta.env?.DEV) {
  Object.assign(window, { PROFILE, STATS, GAMES, COACH_TIMELINE, PROJECTS, HOBBIES, NAV, PAL });
}
