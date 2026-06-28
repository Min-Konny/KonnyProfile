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
    "趣味が広くて、新しいことも大好きなので、なんでも誘ってください！",
    "平日は19:00〜26:00くらいにオンライン（フルリモ）",
    "土日祝は休みなので、だいたいいつでも遊べます！",
  ],
};

export const STATS = [
  { label: "LANGUAGES", value: "日本語", unit: "/ENG" },
  { label: "PLATFORM", value: "PCVR", unit: "" },
];

export const HERO_KONKATSU = {
  tag: "Bonus",
  title: "VRC婚活コーナー",
  note: "もうちょっと詳しいプロフィール",
};

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
    note: "オートチェスはやめられない。\nTFTもチャレンジャーを目指してます。",
    a1: PAL.rose, a2: PAL.lilac, tag: "AUTO-CHESS" },
  { code: "L4D2", name: "Left 4 Dead 2", rank: "3,000+ hrs", years: "10+", pct: 100,
    note: "ゲーム人生はここから始まった。\n対戦モード以外やりません。",
    a1: PAL.amber, a2: PAL.blush, tag: "CO-OP FPS" },
  { code: "EFT", name: "Escape from Tarkov", rank: "Lv.60", years: "4", pct: 80,
    note: "だいたい生還、たまに全ロス。\n一緒にレイドできる人募集中。",
    a1: PAL.gold, a2: PAL.amber, tag: "EXTRACTION" },
  { code: "INC", name: "Incremental Games", rank: "廃人", years: "∞", pct: 100,
    note: "数字が増えるだけで幸せになれるタイプ。\nおすすめのインクリ系があれば教えて。",
    a1: PAL.lilac, a2: PAL.rose, tag: "IDLE" },
  { code: "STEAM", name: "Steam 全般", rank: "500+ titles", years: "12", pct: 85,
    note: "セールでつい買う、積む、たまに掘り出し物。\n一緒にマルチできるゲーム募集中。",
    a1: PAL.goldHi, a2: PAL.rose, tag: "VARIETY" },
];

export const KONKATSU_PROFILE = [
  { label: "年収", value: "650万円", lines: [
    "正社員・フルリモ・フルフレックス",
    "社会人6年目（プロ時代はカウントしてないので、だいたい3年遅れ）",
  ]},
  { label: "学歴", value: "MARCH卒", lines: ["経済学部"] },
  { label: "運動神経", value: "かなり良い", lines: [
    "小中は野球部、ずっとレギュラー",
    "フットサルは経験者と言われるくらい",
    "スノボはS字カーブで普通に滑れる",
  ]},
  { label: "ゲーム", value: "かなり上手い", lines: [
    "プロゲーマー経験あり。LoLは最高上位0.02%",
    "他のゲームもだいたい上位5%くらいまでは行ける",
  ]},
  { label: "歌", value: "まあまあ得意", lines: [
    "カラオケだと「上手いね」って言ってもらえるくらい",
  ]},
  { label: "お砂糖", value: "累計0人", alt: true },
  { label: "彼女", value: "累計5人", alt: true },
  { label: "料理・掃除", value: "苦手" },
  { label: "連絡", value: "返信は遅め", lines: [
    "こまめな連絡が欲しい人なら、努力します",
  ]},
  { label: "同棲", value: "経験あり" },
  { label: "一人暮らし", value: "経験あり" },
  { label: "その他", value: "聞いてくれたら答えます", lines: [] },
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
    desc: "VRCやゲームの集まり向けのチーム自動分けツール。レートと人数を指定して公平にシャッフル。",
    features: [
      "レート入力で公平に分け",
      "任意人数のチーム生成",
      "再シャッフルを即反映",
      "URL共有でその場で使える",
    ],
    ph1: "#2a2032", ph2: "#3a3050", glyph: "⇆" },
];

export const HOBBIES = [
  { id: "shisha", label: "シーシャ", title: "Shisha · 水煙草", sub: "// 3台所持・フレーバーで使い分け",
    photo: "写真/シーシャ/IMG_4477.jpg",
    body: "ハリルマムーン150周年モデル、SHISHA BUCKS、PATISAの木製台を持ってます。\nおすすめのフレーバーやミックスがあれば教えてください。" },
  { id: "yakiniku", label: "焼肉", title: "Yakiniku · 焼肉", sub: "// 川崎・立川あたりが行きつけ",
    photo: "写真/ご飯/IMG_0252.jpg",
    body: "焼肉が大好き。\n好きな焼肉屋は川崎の乃助、立川の和あたり。\nおすすめの店があったら教えてください。" },
  { id: "karaoke", label: "カラオケ", title: "Karaoke · カラオケ", sub: "// VRCでもリアルでも",
    photo: "写真/犬/IMG_1028.jpg",
    body: "カラオケが好き。VRCのカラオケワールドもよく行きます。\n練習中：革命道中、ベテルギウス" },
  { id: "outing", label: "お出かけ", title: "Outing · お出かけ", sub: "// 土日は外に出たい派",
    photo: "写真/旅/IMG_3933.jpg",
    body: "土日の片方はどっか行きたい！！\n旅行とかグランピングもあり。" },
  { id: "snow", label: "スノボ", title: "Snowboarding", sub: "// 新幹線で行けるから新潟メイン",
    photo: "写真/スノボ/IMG_3997.jpg",
    body: "シーズン中は月1〜2回は雪山。新幹線で行けるので新潟がメイン。\nS字カーブは普通に滑れるくらい。" },
  { id: "poker", label: "ポーカー", title: "Poker", sub: "// JOPTや戦国ポーカーなどにも参加",
    photo: "写真/ポーカー/IMG_0762.jpg",
    body: "NLHメイン。\nJOPTや戦国ポーカーなど、大型トナメにもたまに出ます。\nライブもオンラインも。" },
  { id: "escape", label: "リアル脱出", title: "Real Escape Game", sub: "// SCRAP全般が好き",
    photo: "写真/脱出ゲーム/IMG_0496.JPG",
    body: "SCRAP系の謎解き・リアル脱出が好き。\n「豪華客船からの脱出」が今のところベスト。\nぜひ一緒に行きましょう。" },
  { id: "futsal", label: "フットサル", title: "Futsal", sub: "// 部活・友人と定期開催",
    photo: "写真/フットサル/IMG_3424.jpg",
    body: "会社の部活や友達と定期的にプレーしてます。メンバー募集中。\n経験3年くらい。" },
  { id: "art", label: "美術館", title: "Art Museum", sub: "// 美術館 · teamLab · 希須林",
    photo: "写真/アート/IMG_4528.jpg",
    body: "月1回くらい、美術館や teamLab に行ってます。\nそのあと麻布台ヒルズの希須林で中華を食べるのが定番コース。" },
];

export const NAV = [
  { id: "hero", label: "Home" },
  { id: "hobbies", label: "Hobbies" },
  { id: "gallery", label: "Gallery" },
  { id: "games", label: "Games" },
  { id: "dev", label: "Studio" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Friend" },
];

if (import.meta.env?.DEV) {
  Object.assign(window, { PROFILE, STATS, GAMES, COACH_TIMELINE, PROJECTS, HOBBIES, NAV, PAL });
}
