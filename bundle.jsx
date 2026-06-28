const { useState, useEffect, useRef, useMemo, useCallback, lazy, Suspense, Fragment } = React;

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/data/content.js
  var PROFILE, STATS, PAL, GAMES, KONKATSU_PROFILE, COACH_TIMELINE, PROJECTS, HOBBIES, NAV;
  var init_content = __esm({
    "src/data/content.js"() {
      PROFILE = {
        name: "\u3053\u306B\u30FC",
        nameEn: "Konny",
        vrcId: "\u3053\u306B\u30FC\uFF08Konny\uFF09",
        twitter: "Konny0329s_VRC",
        discord: "Konny0329s",
        vrcUrl: "https://vrchat.com/home/user/usr_0ce3df70-b629-4444-83ce-9425840255e1",
        status: "online \u2014 \u30AB\u30E9\u30AA\u30B1\u30FB\u8B0E\u89E3\u304D\u30EF\u30FC\u30EB\u30C9 / EN-JP",
        intro: [
          "\u306F\u3058\u3081\u307E\u3057\u3066\u3001\u3053\u306B\u30FC\u3067\u3059\u3002",
          "\u591A\u8DA3\u5473\uFF06\u65B0\u3057\u3044\u3053\u3068\u5927\u597D\u304D\u306A\u306E\u3067\u306A\u3093\u3067\u3082\u8A98\u3063\u3066\u304F\u3060\u3055\u3044\uFF01",
          "\u4ED5\u4E8B\u306F\u30D5\u30EB\u30EA\u30E2\u306A\u306E\u3067\u5E73\u65E519:00-26:00",
          "\u571F\u65E5\u795D\u4F11\u307F\u306A\u306E\u3067\u3044\u3064\u3067\u3082\u904A\u3079\u307E\u3059\uFF01\uFF01"
        ]
      };
      STATS = [
        { label: "LANGUAGES", value: "\u65E5\u672C\u8A9E", unit: "/ENG" },
        { label: "PLATFORM", value: "PCVR", unit: "" }
      ];
      PAL = {
        gold: "#d4af7a",
        goldHi: "#f1d9a8",
        rose: "#e8b4b8",
        roseDeep: "#c08087",
        lilac: "#c9b8e3",
        amber: "#e0bc7a",
        cream: "#f3ead6",
        blush: "#f1c8c0"
      };
      GAMES = [
        {
          code: "LOL",
          name: "League of Legends",
          rank: "Challenger",
          years: "16",
          pct: 100,
          note: "ADC\u30E1\u30A4\u30F3\n\u8D85\u653B\u6483\u7684\u306A\u30D7\u30EC\u30A4\u30B9\u30BF\u30A4\u30EB",
          a1: PAL.goldHi,
          a2: PAL.lilac,
          tag: "MOBA"
        },
        {
          code: "TFT",
          name: "Teamfight Tactics",
          rank: "Grandmaster",
          years: "5",
          pct: 92,
          note: "\u30AA\u30FC\u30C8\u30C1\u30A7\u30B9\u306F\u3084\u3081\u3089\u308C\u306A\u3044\u3002\nTFT\u3082\u30C1\u30E3\u30EC\u30F3\u30B8\u30E3\u30FC\u884C\u304D\u305F\u3044\u3002",
          a1: PAL.rose,
          a2: PAL.lilac,
          tag: "AUTO-CHESS"
        },
        {
          code: "L4D2",
          name: "Left 4 Dead 2",
          rank: "3,000+ hrs",
          years: "10+",
          pct: 100,
          note: "\u30B2\u30FC\u30E0\u4EBA\u751F\u306F\u3053\u3053\u304B\u3089\u59CB\u307E\u3063\u305F\u3002\n\u5BFE\u6226\u30E2\u30FC\u30C9\u4EE5\u5916\u3084\u308A\u307E\u305B\u3093\u3002",
          a1: PAL.amber,
          a2: PAL.blush,
          tag: "CO-OP FPS"
        },
        {
          code: "EFT",
          name: "Escape from Tarkov",
          rank: "60\u30EC\u30D9",
          years: "4",
          pct: 80,
          note: "\u3057\u3087\u3063\u3061\u3085\u3046\u751F\u9084\u3001\u305F\u307E\u306B\u5168\u30ED\u30B9\u3002\n\u30EC\u30A4\u30C9\u7D44\u3081\u308B\u4EBA\u52DF\u96C6\u4E2D\u3002",
          a1: PAL.gold,
          a2: PAL.amber,
          tag: "EXTRACTION"
        },
        {
          code: "INC",
          name: "Incremental Games",
          rank: "\u5EC3\u4EBA",
          years: "\u221E",
          pct: 100,
          note: "\u6570\u5B57\u304C\u5897\u3048\u308B\u3060\u3051\u3067\u5B09\u3057\u3044\u75C5\u3002\n\u30AA\u30B9\u30B9\u30E1\u306E\u30A4\u30F3\u30AF\u30EA\u7CFB\u3042\u3063\u305F\u3089\u6559\u3048\u3066\u3002",
          a1: PAL.lilac,
          a2: PAL.rose,
          tag: "IDLE"
        },
        {
          code: "STEAM",
          name: "Steam \u5168\u822C",
          rank: "500+ titles",
          years: "12",
          pct: 85,
          note: "\u30BB\u30FC\u30EB\u3067\u3064\u3044\u8CB7\u3046\u3001\u7A4D\u3080\u3001\u305F\u307E\u306B\u6398\u308A\u51FA\u3057\u7269\u3002\n\u30DE\u30EB\u30C1\u3067\u904A\u3079\u308B\u3084\u3064\u52DF\u96C6\u4E2D\u3002",
          a1: PAL.goldHi,
          a2: PAL.rose,
          tag: "VARIETY"
        }
      ];
      KONKATSU_PROFILE = [
        { label: "\u5E74\u53CE", value: "650\u4E07\u5186", lines: [
          "\u6B63\u793E\u54E1\u30D5\u30EB\u30EA\u30E2\u30D5\u30EB\u30D5\u30EC\u30C3\u30AF\u30B9",
          "\u793E\u4F1A\u4EBA6\u5E74\u76EE\u3001\u30D7\u30ED\u30B2\u30FC\u30DE\u30FC\u306F\u30AB\u30A6\u30F3\u30C8\u3057\u3066\u306A\u3044\u306E\u30673\u5E74\u9045\u308C"
        ] },
        { label: "\u5B66\u6B74", value: "MARCH\u5352", lines: ["\u7D4C\u6E08\u5B66\u90E8"] },
        { label: "\u904B\u52D5\u795E\u7D4C", value: "\u304B\u306A\u308A\u826F\u3044", lines: [
          "\u5C0F\u4E2D\u91CE\u7403\u90E8\u3001\u305A\u3063\u3068\u30EC\u30AE\u30E5\u30E9\u30FC",
          "\u30D5\u30C3\u30C8\u30B5\u30EB\u3001\u7D4C\u9A13\u8005\u3063\u3066\u8A00\u308F\u308C\u308B\u304F\u3089\u3044\u306B\u306F",
          "\u30B9\u30CE\u30DC\u3001S\u5B57\u3067\u666E\u901A\u306B\u6ED1\u308C\u308B"
        ] },
        { label: "\u30B2\u30FC\u30E0", value: "\u8D85\u7D76\u4E0A\u624B\u3044", lines: [
          "\u30D7\u30ED\u30B2\u30FC\u30DE\u30FC\u7D4C\u9A13\u3042\u308A\u3001LoL\u306F\u6700\u9AD8\u4E0A\u4F4D0.02%\uFF01\uFF01",
          "\u4ED6\u306E\u30B2\u30FC\u30E0\u3082\u5927\u4F53\u3069\u306E\u30B2\u30FC\u30E0\u3067\u30825%\u304F\u3089\u3044\u307E\u3067\u306F\u884C\u3051\u308B"
        ] },
        { label: "\u6B4C", value: "\u307E\u3041\u307E\u3041\u5F97\u610F", lines: [
          "\u30AB\u30E9\u30AA\u30B1\u884C\u304F\u3068\u5927\u4F53\u4E0A\u624B\u3044\u3068\u306F\u8A00\u3063\u3066\u3082\u3089\u3048\u308B\u304F\u3089\u3044\u306B\u306F\uFF01"
        ] },
        { label: "\u304A\u7802\u7CD6", value: "\u7D2F\u8A08\uFF10\u4EBA", alt: true },
        { label: "\u5F7C\u5973", value: "\u7D2F\u8A08\uFF15\u4EBA", alt: true },
        { label: "\u6599\u7406\u6383\u9664", value: "\u30CB\u30AC\u30C6" },
        { label: "\u9023\u7D61", value: "\u9045\u3044", lines: [
          "\u3053\u307E\u3081\u306B\u6B32\u3057\u3044\u4EBA\u3060\u3063\u305F\u3089\u52AA\u529B\u306F\u3059\u308B"
        ] },
        { label: "\u540C\u68F2", value: "\u7D4C\u9A13\u6709" },
        { label: "\u4E00\u4EBA\u66AE\u3089\u3057", value: "\u7D4C\u9A13\u6709" },
        { label: "\u305D\u306E\u4ED6", value: "\u805E\u304B\u308C\u305F\u3089\u7B54\u3048\u308B\uFF01\uFF01", lines: [] }
      ];
      COACH_TIMELINE = [
        {
          title: "SCARZ \u2014 LoL / Wild Rift \u30B3\u30FC\u30C1",
          alt: false,
          desc: "\u30D8\u30C3\u30C9\u30B3\u30FC\u30C1\u3068\u3057\u30664\u5E74\u3002LoL\u90E8\u9580\u30FBWild Rift\u90E8\u9580\u3092\u62C5\u5F53\u3057\u307E\u3057\u305F\u3002"
        },
        {
          title: "LJL \u51FA\u5834",
          alt: true,
          desc: "LJLCS\u304B\u3089\u52DD\u3061\u4E0A\u304C\u3063\u3066LJL\u306B\u51FA\u5834\u3057\u307E\u3057\u305F\u3002"
        },
        { title: "Wild Rift \u65E5\u672C 2\u4F4D", alt: false },
        {
          title: "\u30C6\u30EC\u6771 e-sports high \u51FA\u6F14",
          alt: true,
          desc: "\u30C6\u30EC\u6771\u300Ce-sports high\u300D\u306B30\u5206\xD78\u56DE\u51FA\u6F14\u3002"
        }
      ];
      PROJECTS = [
        {
          name: "Saori VTuber Site",
          url: "https://saori-vtuber-site.vercel.app/",
          role: "DESIGN + DEV",
          year: "2024",
          status: "LIVE",
          desc: "VTuber\u3055\u304A\u308A\u3055\u3093\u516C\u5F0F\u30B5\u30A4\u30C8\u3002\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u30FB\u914D\u4FE1\u544A\u77E5\u30FB\u30B0\u30C3\u30BA\u5C0E\u7DDA\u307E\u3067\u4E00\u901A\u308A\u3002",
          features: [
            "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB / \u81EA\u5DF1\u7D39\u4ECB\u30DA\u30FC\u30B8",
            "\u914D\u4FE1\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u8868\u793A",
            "\u30B0\u30C3\u30BA\u30FBSNS\u5C0E\u7DDA",
            "\u30EC\u30B9\u30DD\u30F3\u30B7\u30D6\u5BFE\u5FDC"
          ],
          ph1: "#2a1a32",
          ph2: "#4a2a4a",
          glyph: "S"
        },
        {
          name: "Team Auto Split Tool",
          url: "https://team-auto-split-tool.vercel.app/",
          role: "PLAN + DEV",
          year: "2024",
          status: "LIVE",
          desc: "VRC\u3084\u30B2\u30FC\u30E0\u306E\u96C6\u307E\u308A\u3067\u4F7F\u3046\u30C1\u30FC\u30E0\u81EA\u52D5\u5206\u3051\u3002\u30EC\u30FC\u30C8\u30FB\u4EBA\u6570\u6307\u5B9A\u3067\u516C\u5E73\u306B\u30B7\u30E3\u30C3\u30D5\u30EB\u3002",
          features: [
            "\u30EC\u30FC\u30C8\u5165\u529B\u3067\u516C\u5E73\u5206\u3051",
            "\u4EFB\u610F\u4EBA\u6570\u30C1\u30FC\u30E0\u751F\u6210",
            "\u518D\u30B7\u30E3\u30C3\u30D5\u30EB\u5373\u6642\u53CD\u6620",
            "URL\u5171\u6709\u3067\u6301\u3061\u56DE\u308A"
          ],
          ph1: "#2a2032",
          ph2: "#3a3050",
          glyph: "\u21C6"
        }
      ];
      HOBBIES = [
        {
          id: "shisha",
          label: "\u30B7\u30FC\u30B7\u30E3",
          title: "Shisha \xB7 \u6C34\u7159\u8349",
          sub: "// 3\u53F0\u6240\u6301\u30FB\u30D5\u30EC\u30FC\u30D0\u30FC\u3067\u4F7F\u3044\u5206\u3051",
          photo: "\u5199\u771F/\u30B7\u30FC\u30B7\u30E3/IMG_4477.jpg",
          body: "\u30CF\u30EA\u30EB\u30DE\u30E0\u30FC\u30F3150\u5468\u5E74\u30E2\u30C7\u30EB\u3001SHISHA BUCKS\u3001PATISA\u306E\u6728\u88FD\u53F0\u6301\u3063\u3066\u307E\u3059\uFF01\n\u304A\u3059\u3059\u3081\u306E\u30D5\u30EC\u30FC\u30D0\u30FC\u3068\u304B\u30DF\u30C3\u30AF\u30B9\u6559\u3048\u3066\u304F\u3060\u3055\u3044\u3002"
        },
        {
          id: "snow",
          label: "\u30B9\u30CE\u30DC",
          title: "Snowboarding",
          sub: "// \u65B0\u5E79\u7DDA\u3067\u884C\u3051\u308B\u304B\u3089\u65B0\u6F5F\u738790%",
          photo: "\u5199\u771F/\u30B9\u30CE\u30DC/IMG_3997.jpg",
          body: "\u30B7\u30FC\u30BA\u30F3\u306F\u67081\u301C2\u3067\u96EA\u5C71\u3002\u65B0\u5E79\u7DDA\u4E00\u672C\u3067\u884C\u3051\u308B\u6C17\u8EFD\u3055\u3067\u65B0\u6F5F\u304C\u5727\u5012\u7684\u306B\u591A\u3044\u3002\nS\u5B57\u30AB\u30FC\u30D6\u3067\u666E\u901A\u306B\u6ED1\u308C\u308B\u304F\u3089\u3044\u3002"
        },
        {
          id: "poker",
          label: "\u30DD\u30FC\u30AB\u30FC",
          title: "Poker",
          sub: "// JOPT\u3084\u6226\u56FD\u306A\u3069\u306E\u5927\u578B\u30C8\u30CA\u30E1\u306B\u3082\u53C2\u52A0",
          photo: "\u5199\u771F/\u30DD\u30FC\u30AB\u30FC/IMG_0762.jpg",
          body: "NLH\u30E1\u30A4\u30F3\u3002\nJOPT\u3068\u304B\u6226\u56FD\u3068\u304B\u3001\u5927\u578B\u30C8\u30CA\u30E1\u3082\u305F\u307E\u306B\u51FA\u307E\u3059\u3002\n\u30E9\u30A4\u30D6\u3067\u3082\u30AA\u30F3\u30E9\u30A4\u30F3\u3067\u3082\u904A\u3076\u3002"
        },
        {
          id: "escape",
          label: "\u30EA\u30A2\u30EB\u8131\u51FA",
          title: "Real Escape Game",
          sub: "// SCRAP\u5168\u822C\u304C\u597D\u304D",
          photo: "\u5199\u771F/\u8131\u51FA\u30B2\u30FC\u30E0/IMG_0496.JPG",
          body: "SCRAP\u7CFB\u306E\u8B0E\u89E3\u304D\u30FB\u30EA\u30A2\u30EB\u8131\u51FA\u30B2\u30FC\u30E0\u304C\u597D\u304D\u3002\u300C\u8C6A\u83EF\u5BA2\u8239\u304B\u3089\u306E\u8131\u51FA\u300D\u304C\u904E\u53BB\u4E00\u3002\n\u662F\u975E\u4E00\u7DD2\u306B\u884C\u304D\u307E\u3057\u3087\u3046\u3002"
        },
        {
          id: "futsal",
          label: "\u30D5\u30C3\u30C8\u30B5\u30EB",
          title: "Futsal",
          sub: "// \u90E8\u6D3B\u30FB\u53CB\u4EBA\u3068\u5B9A\u671F",
          photo: "\u5199\u771F/\u30D5\u30C3\u30C8\u30B5\u30EB/IMG_3424.jpg",
          body: "\u4F1A\u793E\u306E\u90E8\u6D3B\u3084\u53CB\u9054\u3068\u5B9A\u671F\u7684\u306B\u30D5\u30C3\u30C8\u30B5\u30EB\u3057\u3066\u307E\u3059\u3002\u3053\u3063\u3061\u3082\u53C2\u52A0\u8005\u52DF\u96C6\u4E2D\u3002\n\u6B74\u306F3\u5E74"
        },
        {
          id: "art",
          label: "\u7F8E\u8853\u9928",
          title: "Art Museum",
          sub: "// \u7F8E\u8853\u9928 \xB7 teamLab \xB7 \u5E0C\u9808\u6797",
          photo: "\u5199\u771F/\u30A2\u30FC\u30C8/IMG_4528.jpg",
          body: "\u6708\uFF11\u304F\u3089\u3044\u3067\u7F8E\u8853\u9928\u3060\u3063\u305F\u308A\u3001\u30C1\u30FC\u30E0\u30E9\u30DC\u3060\u3063\u305F\u308A\u884C\u3063\u3066\u307E\u3059\u3002\n\u884C\u3063\u305F\u5F8C\u306B\u9EBB\u5E03\u53F0\u30D2\u30EB\u30BA\u306E\u5E0C\u9808\u6797\u3067\u4E2D\u83EF\u98DF\u3046\u306E\u304C\u9244\u677F\u30EB\u30FC\u30C8\u3002"
        }
      ];
      NAV = [
        { id: "hero", label: "Home" },
        { id: "hobbies", label: "Hobbies" },
        { id: "gallery", label: "Gallery" },
        { id: "games", label: "Games" },
        { id: "career", label: "Career" },
        { id: "dev", label: "Studio" },
        { id: "contact", label: "Friend" }
      ];
      if (false) {
        Object.assign(window, { PROFILE, STATS, GAMES, COACH_TIMELINE, PROJECTS, HOBBIES, NAV, PAL });
      }
    }
  });

  // src/components/Ornaments.jsx
  function CornerOrnament({ className }) {
    return /* @__PURE__ */ React.createElement("svg", { className, viewBox: "0 0 64 64", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2 2 L26 2 M2 2 L2 26", stroke: "currentColor", strokeWidth: "0.8", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: "M8 2 Q8 8 14 8 M2 8 Q8 8 8 14", stroke: "currentColor", strokeWidth: "0.8", fill: "none", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("circle", { cx: "14", cy: "14", r: "1.5", fill: "currentColor" }), /* @__PURE__ */ React.createElement("path", { d: "M14 14 Q24 14 24 24", stroke: "currentColor", strokeWidth: "0.6", fill: "none", opacity: "0.7" }), /* @__PURE__ */ React.createElement("circle", { cx: "24", cy: "24", r: "1", fill: "currentColor", opacity: "0.7" }), /* @__PURE__ */ React.createElement("path", { d: "M4 18 Q4 24 10 24", stroke: "currentColor", strokeWidth: "0.5", fill: "none", opacity: "0.4" }), /* @__PURE__ */ React.createElement("path", { d: "M18 4 Q24 4 24 10", stroke: "currentColor", strokeWidth: "0.5", fill: "none", opacity: "0.4" }));
  }
  function AvatarFiligree() {
    return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 200 200", fill: "none" }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "ringG", x1: "0", y1: "0", x2: "1", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#f1d9a8" }), /* @__PURE__ */ React.createElement("stop", { offset: "50%", stopColor: "#d4af7a" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#a47e4a" }))), /* @__PURE__ */ React.createElement("circle", { cx: "100", cy: "100", r: "96", stroke: "url(#ringG)", strokeWidth: "0.6", fill: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "100", cy: "100", r: "92", stroke: "url(#ringG)", strokeWidth: "0.3", fill: "none", strokeDasharray: "1 4" }), Array.from({ length: 24 }).map((_, i) => {
      const a = i / 24 * Math.PI * 2;
      const r1 = 88, r2 = i % 2 === 0 ? 82 : 85;
      const x1 = 100 + Math.cos(a) * r1, y1 = 100 + Math.sin(a) * r1;
      const x2 = 100 + Math.cos(a) * r2, y2 = 100 + Math.sin(a) * r2;
      return /* @__PURE__ */ React.createElement("line", { key: i, x1, y1, x2, y2, stroke: "url(#ringG)", strokeWidth: i % 6 === 0 ? 1.2 : 0.5 });
    }), [0, 90, 180, 270].map((deg) => {
      const a = deg / 360 * Math.PI * 2;
      const x = 100 + Math.cos(a) * 96;
      const y = 100 + Math.sin(a) * 96;
      return /* @__PURE__ */ React.createElement("g", { key: deg, transform: `translate(${x}, ${y}) rotate(${deg + 90} 0 0)` }, /* @__PURE__ */ React.createElement("path", { d: "M-4 0 L0 -6 L4 0 Z", fill: "url(#ringG)", opacity: "0.9" }));
    }));
  }
  function AvatarFiligree2() {
    return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 200 200", fill: "none" }, /* @__PURE__ */ React.createElement("circle", { cx: "100", cy: "100", r: "98", stroke: "#d4af7a", strokeWidth: "0.3", fill: "none", opacity: "0.4" }), Array.from({ length: 60 }).map((_, i) => {
      const a = i / 60 * Math.PI * 2;
      const x = 100 + Math.cos(a) * 98;
      const y = 100 + Math.sin(a) * 98;
      return /* @__PURE__ */ React.createElement("circle", { key: i, cx: x, cy: y, r: "0.5", fill: "#f1d9a8", opacity: i % 5 === 0 ? 1 : 0.4 });
    }));
  }
  var init_Ornaments = __esm({
    "src/components/Ornaments.jsx"() {
    }
  });

  // src/lib/gallery.js
  function shuffleArrayInPlace(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }
  function editorialRole(index) {
    const pos = index % EDITORIAL_CYCLE;
    if (pos < 5) return "quint";
    if (pos < 7) return "duo";
    return "quad";
  }
  function encPhotoPath(p) {
    return p.split("/").map((seg) => encodeURIComponent(seg)).join("/");
  }
  function thumbPhotoPath(p) {
    if (!p || !p.startsWith("\u5199\u771F/")) return "";
    const parts = p.split("/");
    const file = parts[parts.length - 1].replace(/\.[^.]+$/i, ".jpg");
    return `\u5199\u771F/_thumbs/${parts.slice(1, -1).join("/")}/${file}`;
  }
  function webPhotoPath(p) {
    if (!p || !p.startsWith("\u5199\u771F/")) return p;
    const parts = p.split("/");
    const file = parts[parts.length - 1].replace(/\.[^.]+$/i, ".jpg");
    return `\u5199\u771F/_web/${parts.slice(1, -1).join("/")}/${file}`;
  }
  function galleryThumbSrc(it) {
    const t = it.thumb || thumbPhotoPath(it.path);
    return encPhotoPath(t || it.path);
  }
  function galleryLightboxSrc(path) {
    return encPhotoPath(thumbPhotoPath(path));
  }
  function prefetchThumbs(items, limit = 12) {
    if (!items?.length) return;
    items.slice(0, limit).forEach((it) => {
      const img = new Image();
      img.decoding = "async";
      img.src = galleryThumbSrc(it);
    });
  }
  var GALLERY_FOLDER_ORDER, GALLERY_PAGE_SIZES, EDITORIAL_CYCLE;
  var init_gallery = __esm({
    "src/lib/gallery.js"() {
      GALLERY_FOLDER_ORDER = [
        "VR",
        "\u3054\u98EF",
        "\u30A2\u30FC\u30C8",
        "\u30B7\u30FC\u30B7\u30E3",
        "\u30B9\u30CE\u30DC",
        "\u30D5\u30C3\u30C8\u30B5\u30EB",
        "\u30DD\u30FC\u30AB\u30FC",
        "\u65C5",
        "\u3053\u306B\u30FC",
        "\u72AC",
        "\u8131\u51FA\u30B2\u30FC\u30E0"
      ];
      GALLERY_PAGE_SIZES = [11, 22];
      EDITORIAL_CYCLE = 11;
    }
  });

  // src/components/GallerySection.jsx
  var GallerySection_exports = {};
  __export(GallerySection_exports, {
    GallerySection: () => GallerySection
  });
  function GalleryThumb({ item, priority = false }) {
    const [loaded, setLoaded] = (0, import_react8.useState)(false);
    const imgRef = (0, import_react8.useRef)(null);
    const src = galleryThumbSrc(item);
    (0, import_react8.useEffect)(() => {
      setLoaded(false);
      const img = imgRef.current;
      if (img?.complete && img.naturalWidth > 0) setLoaded(true);
    }, [src]);
    return /* @__PURE__ */ React.createElement("div", { className: `gallery-thumb ${loaded ? "is-loaded" : ""}` }, !loaded && /* @__PURE__ */ React.createElement("div", { className: "gallery-thumb-skel", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement(
      "img",
      {
        ref: imgRef,
        src,
        alt: "",
        loading: priority ? "eager" : "lazy",
        decoding: "async",
        fetchPriority: priority ? "high" : "auto",
        onLoad: () => setLoaded(true)
      }
    ));
  }
  function GalleryPager({ page, totalPages, total, pageSize, onPage }) {
    if (totalPages <= 0) {
      return /* @__PURE__ */ React.createElement("div", { className: "gallery-pager" }, /* @__PURE__ */ React.createElement("span", { className: "gallery-pager-meta" }, "0 \u679A"));
    }
    if (totalPages === 1) {
      return /* @__PURE__ */ React.createElement("div", { className: "gallery-pager" }, /* @__PURE__ */ React.createElement("span", { className: "gallery-pager-meta" }, total === 0 ? "0 \u679A" : `1\u2013${total} / ${total} \u679A`));
    }
    const start = (page - 1) * pageSize + 1;
    const end = Math.min(page * pageSize, total);
    let begin = Math.max(1, page - 2);
    let endP = Math.min(totalPages, begin + 4);
    if (endP - begin < 4) begin = Math.max(1, endP - 4);
    const nums = [];
    for (let i = begin; i <= endP; i++) nums.push(i);
    return /* @__PURE__ */ React.createElement("div", { className: "gallery-pager" }, /* @__PURE__ */ React.createElement("button", { type: "button", className: "gp-btn", disabled: page <= 1, onClick: () => onPage(page - 1) }, "\u524D\u3078"), /* @__PURE__ */ React.createElement("div", { className: "gp-nums" }, nums.map((n) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: n,
        type: "button",
        className: `gp-num ${n === page ? "is-on" : ""}`,
        onClick: () => onPage(n)
      },
      n
    ))), /* @__PURE__ */ React.createElement("button", { type: "button", className: "gp-btn", disabled: page >= totalPages, onClick: () => onPage(page + 1) }, "\u6B21\u3078"), /* @__PURE__ */ React.createElement("span", { className: "gallery-pager-meta" }, start, "\u2013", end, " / ", total, " \u679A \xB7 ", totalPages, " \u30DA\u30FC\u30B8"));
  }
  function GallerySection() {
    const [manifest, setManifest] = (0, import_react8.useState)(null);
    const [loadErr, setLoadErr] = (0, import_react8.useState)(null);
    const [folder, setFolder] = (0, import_react8.useState)("ALL");
    const [page, setPage] = (0, import_react8.useState)(1);
    const [pageSize, setPageSize] = (0, import_react8.useState)(11);
    const [shuffleNonce, setShuffleNonce] = (0, import_react8.useState)(0);
    const [lightboxIdx, setLightboxIdx] = (0, import_react8.useState)(null);
    (0, import_react8.useEffect)(() => {
      let cancelled = false;
      fetch("gallery-manifest.json").then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      }).then((j) => {
        if (cancelled) return;
        if (!j || !Array.isArray(j.items)) throw new Error("bad manifest");
        setManifest(j);
        setLoadErr(null);
      }).catch((e) => {
        if (!cancelled) {
          setLoadErr(e.message || "fetch failed");
          setManifest(null);
        }
      });
      return () => {
        cancelled = true;
      };
    }, []);
    const shuffledAllItems = (0, import_react8.useMemo)(() => {
      if (!manifest?.items) return [];
      const a = manifest.items.slice();
      shuffleArrayInPlace(a);
      return a;
    }, [manifest, shuffleNonce]);
    const folderOrder = (0, import_react8.useMemo)(() => {
      if (manifest?.folderOrder && Array.isArray(manifest.folderOrder)) return manifest.folderOrder;
      return GALLERY_FOLDER_ORDER;
    }, [manifest]);
    const counts = (0, import_react8.useMemo)(() => {
      const c = {};
      if (!manifest?.items) return c;
      manifest.items.forEach((it) => {
        c[it.category] = (c[it.category] || 0) + 1;
      });
      return c;
    }, [manifest]);
    const itemsByCategory = (0, import_react8.useMemo)(() => {
      const m = {};
      if (!manifest?.items) return m;
      for (const it of manifest.items) {
        if (!m[it.category]) m[it.category] = [];
        m[it.category].push(it);
      }
      for (const k of Object.keys(m)) {
        m[k].sort((a, b) => a.path.localeCompare(b.path, "ja"));
      }
      return m;
    }, [manifest]);
    const filtered = (0, import_react8.useMemo)(() => {
      if (!manifest?.items) return [];
      if (folder === "ALL") return shuffledAllItems;
      return itemsByCategory[folder] || [];
    }, [manifest, folder, shuffledAllItems, itemsByCategory]);
    const totalPages = filtered.length === 0 ? 0 : Math.ceil(filtered.length / pageSize);
    const safePage = totalPages === 0 ? 1 : Math.min(Math.max(1, page), totalPages);
    const pageItems = (0, import_react8.useMemo)(() => {
      if (totalPages === 0) return [];
      const start = (safePage - 1) * pageSize;
      return filtered.slice(start, start + pageSize);
    }, [filtered, safePage, pageSize, totalPages]);
    const lightboxItem = lightboxIdx != null ? filtered[lightboxIdx] : null;
    function openLightbox(it) {
      const idx = filtered.findIndex((x) => x.id === it.id);
      if (idx >= 0) setLightboxIdx(idx);
    }
    (0, import_react8.useEffect)(() => {
      if (lightboxIdx == null) return;
      function onKey(e) {
        if (e.key === "Escape") setLightboxIdx(null);
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setLightboxIdx((i) => i > 0 ? i - 1 : filtered.length - 1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setLightboxIdx((i) => i < filtered.length - 1 ? i + 1 : 0);
        }
      }
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }, [lightboxIdx, filtered.length]);
    (0, import_react8.useEffect)(() => {
      if (pageItems.length) prefetchThumbs(pageItems, pageItems.length);
    }, [folder, safePage, pageItems]);
    (0, import_react8.useEffect)(() => {
      setPage(1);
    }, [folder, pageSize]);
    (0, import_react8.useEffect)(() => {
      if (totalPages > 0 && page > totalPages) setPage(totalPages);
    }, [page, totalPages]);
    (0, import_react8.useEffect)(() => {
      if (!manifest) return;
      window.observeReveal?.();
      const id = setTimeout(() => window.observeReveal?.(), 100);
      return () => clearTimeout(id);
    }, [manifest, folder, safePage]);
    return /* @__PURE__ */ React.createElement("section", { id: "gallery" }, /* @__PURE__ */ React.createElement("div", { className: "reveal" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "03 / Gallery \u2014 \u5199\u771F\u3067\u3082\u904A\u3076"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "\u30B9\u30CA\u30C3\u30D7\u306E ", /* @__PURE__ */ React.createElement("em", null, "\u68DA")), /* @__PURE__ */ React.createElement("div", { className: "section-subtitle" }, "\u30EA\u30A2\u30EB\u3068VRC\u306E\u5199\u771F\u3092\u30B8\u30E3\u30F3\u30EB\u5225\u306B\u3002", /* @__PURE__ */ React.createElement("strong", null, "\u3059\u3079\u3066"), " \u306F11\u679A\u305A\u3064\u3081\u304F\u308C\u307E\u3059\u3002\u30AF\u30EA\u30C3\u30AF\u3067\u62E1\u5927\u3001", /* @__PURE__ */ React.createElement("strong", null, "\u21BB \u4E26\u3073\u66FF\u3048"), " \u3067\u9806\u756A\u5909\u66F4\u3002")), !loadErr && !manifest && /* @__PURE__ */ React.createElement("p", { className: "gallery-loading reveal" }, "\u30AE\u30E3\u30E9\u30EA\u30FC\u4E00\u89A7\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026"), loadErr && /* @__PURE__ */ React.createElement("div", { className: "gallery-load-error reveal" }, /* @__PURE__ */ React.createElement("strong", null, "\u30AE\u30E3\u30E9\u30EA\u30FC\u3092\u8868\u793A\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002"), /* @__PURE__ */ React.createElement("br", null), "\u901A\u4FE1\u3084\u8868\u793A\u306E\u90FD\u5408\u306E\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u30DA\u30FC\u30B8\u3092\u66F4\u65B0\u3059\u308B\u304B\u3001\u3082\u3046\u4E00\u5EA6\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002"), !loadErr && manifest && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "gallery-toolbar gallery-toolbar-stack" }, /* @__PURE__ */ React.createElement("div", { className: "gallery-folder-tabs", role: "tablist", "aria-label": "\u30D5\u30A9\u30EB\u30C0" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": folder === "ALL",
        className: `gallery-folder-tab ${folder === "ALL" ? "is-on" : ""}`,
        onClick: () => {
          setPage(1);
          if (folder !== "ALL") setShuffleNonce((n) => n + 1);
          setFolder("ALL");
        }
      },
      /* @__PURE__ */ React.createElement("span", { className: "gft-label" }, "\u3059\u3079\u3066"),
      /* @__PURE__ */ React.createElement("span", { className: "gft-count" }, manifest.count)
    ), folderOrder.map((name) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: name,
        type: "button",
        role: "tab",
        "aria-selected": folder === name,
        className: `gallery-folder-tab ${folder === name ? "is-on" : ""}`,
        onClick: () => {
          setPage(1);
          setFolder(name);
        },
        onMouseEnter: () => prefetchThumbs(itemsByCategory[name], pageSize),
        onFocus: () => prefetchThumbs(itemsByCategory[name], pageSize)
      },
      /* @__PURE__ */ React.createElement("span", { className: "gft-label" }, name),
      /* @__PURE__ */ React.createElement("span", { className: "gft-count" }, counts[name] ?? 0)
    ))), /* @__PURE__ */ React.createElement("div", { className: "gallery-filter-row" }, folder === "ALL" && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "gallery-shuffle-btn",
        onClick: () => {
          setShuffleNonce((n) => n + 1);
          setPage(1);
        }
      },
      "\u21BB \u4E26\u3073\u66FF\u3048"
    ), /* @__PURE__ */ React.createElement("label", { className: "gallery-cat-label" }, /* @__PURE__ */ React.createElement("span", null, "1\u30DA\u30FC\u30B8"), /* @__PURE__ */ React.createElement(
      "select",
      {
        className: "gallery-cat-select",
        value: pageSize,
        onChange: (e) => setPageSize(Number(e.target.value))
      },
      GALLERY_PAGE_SIZES.map((n) => /* @__PURE__ */ React.createElement("option", { key: n, value: n }, n, " \u679A"))
    )), /* @__PURE__ */ React.createElement("div", { className: "gt-meta gallery-toolbar-meta" }, "\u3053\u306E\u8868\u793A ", filtered.length, " \u679A / \u5408\u8A08 ", manifest.count, " \u679A"))), /* @__PURE__ */ React.createElement(
      GalleryPager,
      {
        page: safePage,
        totalPages,
        total: filtered.length,
        pageSize,
        onPage: setPage
      }
    ), filtered.length === 0 ? /* @__PURE__ */ React.createElement("p", { className: "gallery-empty reveal" }, "\u3053\u306E\u30D5\u30A9\u30EB\u30C0\u306B\u306F\u307E\u3060\u5199\u771F\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u307B\u304B\u306E\u30BF\u30D6\u3082\u898B\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002") : /* @__PURE__ */ React.createElement(
      "div",
      {
        className: folder === "ALL" ? "gallery-editorial" : "gallery-page-grid"
      },
      pageItems.map((it, i) => {
        const globalIdx = (safePage - 1) * pageSize + i + 1;
        return /* @__PURE__ */ React.createElement(
          "figure",
          {
            key: it.id,
            className: folder === "ALL" ? `g-card g-card-editorial ge-${editorialRole(i)}` : "g-card g-card-compact",
            role: "button",
            tabIndex: 0,
            onClick: () => openLightbox(it),
            onKeyDown: (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(it);
              }
            }
          },
          /* @__PURE__ */ React.createElement("span", { className: "g-index", "aria-hidden": "true" }, String(globalIdx).padStart(2, "0")),
          /* @__PURE__ */ React.createElement(GalleryThumb, { item: it, priority: i < 5 }),
          /* @__PURE__ */ React.createElement("figcaption", null, /* @__PURE__ */ React.createElement("span", { className: "g-label" }, it.category), /* @__PURE__ */ React.createElement("span", { className: "g-file" }, it.file))
        );
      })
    ), filtered.length > 0 && /* @__PURE__ */ React.createElement(
      GalleryPager,
      {
        page: safePage,
        totalPages,
        total: filtered.length,
        pageSize,
        onPage: setPage
      }
    )), lightboxItem && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "gallery-lightbox",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "\u5199\u771F\u30D7\u30EC\u30D3\u30E5\u30FC",
        onClick: () => setLightboxIdx(null)
      },
      /* @__PURE__ */ React.createElement("button", { type: "button", className: "gallery-lightbox-close", "aria-label": "\u9589\u3058\u308B" }, "\xD7"),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "gallery-lightbox-nav prev",
          "aria-label": "\u524D\u306E\u5199\u771F",
          onClick: (e) => {
            e.stopPropagation();
            setLightboxIdx((i) => i > 0 ? i - 1 : filtered.length - 1);
          }
        },
        "\u2039"
      ),
      /* @__PURE__ */ React.createElement(
        "button",
        {
          type: "button",
          className: "gallery-lightbox-nav next",
          "aria-label": "\u6B21\u306E\u5199\u771F",
          onClick: (e) => {
            e.stopPropagation();
            setLightboxIdx((i) => i < filtered.length - 1 ? i + 1 : 0);
          }
        },
        "\u203A"
      ),
      /* @__PURE__ */ React.createElement(
        "img",
        {
          className: "gallery-lightbox-img",
          src: galleryLightboxSrc(lightboxItem.path),
          alt: lightboxItem.file,
          onClick: (e) => e.stopPropagation()
        }
      ),
      /* @__PURE__ */ React.createElement("div", { className: "gallery-lightbox-cap", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("span", { className: "g-label" }, lightboxItem.category), /* @__PURE__ */ React.createElement("span", { className: "g-file" }, lightboxItem.file), /* @__PURE__ */ React.createElement("span", { className: "gallery-lightbox-pos" }, lightboxIdx + 1, " / ", filtered.length))
    ));
  }
  var import_react8;
  var init_GallerySection = __esm({
    "src/components/GallerySection.jsx"() {
      import_react8 = __require("react");
      init_gallery();
    }
  });

  // src/components/GamesSection.jsx
  var GamesSection_exports = {};
  __export(GamesSection_exports, {
    GamesSection: () => GamesSection
  });
  function GameCard({ g }) {
    const [hover, setHover] = (0, import_react9.useState)(false);
    return /* @__PURE__ */ React.createElement(
      "article",
      {
        className: "game-card reveal",
        style: { "--accent-1": g.a1, "--accent-2": g.a2, "--pct": `${g.pct}%` },
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false)
      },
      /* @__PURE__ */ React.createElement("div", { className: "gc-header" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "gc-code" }, "\u2014 ", g.code), /* @__PURE__ */ React.createElement("div", { className: "gc-name" }, g.name)), /* @__PURE__ */ React.createElement("div", { className: "gc-tag" }, g.tag)),
      /* @__PURE__ */ React.createElement("div", { className: "gc-label" }, "PEAK \xB7 MASTERY"),
      /* @__PURE__ */ React.createElement("div", { className: "gc-progress" }, /* @__PURE__ */ React.createElement("div", { className: "fill" })),
      /* @__PURE__ */ React.createElement("div", { className: "gc-stats" }, /* @__PURE__ */ React.createElement("div", { className: "gc-stat", style: { gridColumn: "1 / -1" } }, /* @__PURE__ */ React.createElement("div", { className: "label" }, "PEAK"), /* @__PURE__ */ React.createElement("div", { className: "value" }, g.rank))),
      /* @__PURE__ */ React.createElement("div", { className: "gc-note", style: { opacity: hover ? 1 : 0.7, transition: "opacity 0.3s" } }, g.note.split("\n").map((l, i) => {
        const text = l.replace(/^\s*❋\s*/, "");
        return /* @__PURE__ */ React.createElement("div", { key: i }, /* @__PURE__ */ React.createElement("span", { className: "glyph" }, "\u274B"), text);
      }))
    );
  }
  function GamesSection() {
    return /* @__PURE__ */ React.createElement("section", { id: "games" }, /* @__PURE__ */ React.createElement("div", { className: "reveal" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "05 / Games \u2014 \u4E00\u7DD2\u306B\u904A\u3073\u307E\u305B\u3093\u304B"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "\u3088\u304F\u904A\u3076 ", /* @__PURE__ */ React.createElement("em", null, "\u30B2\u30FC\u30E0")), /* @__PURE__ */ React.createElement("div", { className: "section-subtitle" }, "\u521D\u5FC3\u8005\u6B53\u8FCE\u30FB\u4E00\u7DD2\u306B\u3084\u308C\u308B\u4EBA\u52DF\u96C6\u4E2D\uFF01\uFF01", /* @__PURE__ */ React.createElement("br", null), "VALORANT \u3068\u304B Overwatch\uFF08OW\uFF09\u3082\u3084\u3063\u3066\u308B\u3088\u3002")), /* @__PURE__ */ React.createElement("div", { className: "game-grid" }, GAMES.map((g) => /* @__PURE__ */ React.createElement(GameCard, { key: g.code, g }))));
  }
  var import_react9;
  var init_GamesSection = __esm({
    "src/components/GamesSection.jsx"() {
      import_react9 = __require("react");
      init_content();
    }
  });

  // src/components/DevSection.jsx
  var DevSection_exports = {};
  __export(DevSection_exports, {
    DevSection: () => DevSection
  });
  function ProjectCard({ p }) {
    return /* @__PURE__ */ React.createElement("a", { href: p.url, target: "_blank", rel: "noopener", className: "proj-card reveal" }, /* @__PURE__ */ React.createElement("div", { className: "proj-preview", style: { "--ph-1": p.ph1, "--ph-2": p.ph2 } }, /* @__PURE__ */ React.createElement("div", { className: "browser-bar" }, /* @__PURE__ */ React.createElement("span", { className: "dot" }), /* @__PURE__ */ React.createElement("span", { className: "dot" }), /* @__PURE__ */ React.createElement("span", { className: "dot" }), /* @__PURE__ */ React.createElement("span", { className: "url" }, p.url.replace(/^https?:\/\//, "")), /* @__PURE__ */ React.createElement("span", { className: "status" }, "\u25CF ", p.status)), /* @__PURE__ */ React.createElement("div", { className: "ph" }, /* @__PURE__ */ React.createElement("div", { className: "proj-glyph" }, p.glyph), /* @__PURE__ */ React.createElement("div", { className: "proj-preview-name" }, p.name), /* @__PURE__ */ React.createElement("div", { className: "proj-preview-meta" }, "// site preview"))), /* @__PURE__ */ React.createElement("div", { className: "proj-body" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "proj-meta-row" }, /* @__PURE__ */ React.createElement("span", { className: "proj-role" }, p.role), /* @__PURE__ */ React.createElement("span", { className: "proj-year" }, "\u2014 ", p.year)), /* @__PURE__ */ React.createElement("div", { className: "proj-name" }, p.name)), /* @__PURE__ */ React.createElement("p", { className: "proj-desc" }, p.desc), /* @__PURE__ */ React.createElement("div", { className: "proj-features" }, p.features.map((f) => /* @__PURE__ */ React.createElement("div", { className: "proj-feature", key: f }, /* @__PURE__ */ React.createElement("span", { className: "icn" }, "\u2726"), f))), /* @__PURE__ */ React.createElement("div", { className: "proj-foot" }, /* @__PURE__ */ React.createElement("span", { className: "proj-link" }, "Visit site \u2192"))));
  }
  function DevSection() {
    return /* @__PURE__ */ React.createElement("section", { id: "dev" }, /* @__PURE__ */ React.createElement("div", { className: "reveal" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "07 / Studio \xB7 \u500B\u4EBA\u958B\u767A"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "\u4F5C\u3063\u305F\u3084\u3064 ", /* @__PURE__ */ React.createElement("em", null, "\u3044\u308D\u3044\u308D")), /* @__PURE__ */ React.createElement("div", { className: "section-subtitle" }, "\u3053\u3093\u306A\u611F\u3058\u306E\u30B5\u30A4\u30C8\u306A\u3089\u4F5C\u308C\u307E\u3059\u3001\u306A\u3093\u304B\u3042\u3063\u305F\u3089\u76F8\u8AC7\u3057\u3066\u306D\u3002")), /* @__PURE__ */ React.createElement("div", { className: "portfolio-grid" }, PROJECTS.map((p) => /* @__PURE__ */ React.createElement(ProjectCard, { p, key: p.name }))));
  }
  var init_DevSection = __esm({
    "src/components/DevSection.jsx"() {
      init_content();
    }
  });

  // src/components/CareerSection.jsx
  var CareerSection_exports = {};
  __export(CareerSection_exports, {
    CareerSection: () => CareerSection
  });
  function CareerSection() {
    return /* @__PURE__ */ React.createElement("section", { id: "career" }, /* @__PURE__ */ React.createElement("div", { className: "reveal" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "06 / Coaching \u2014 \u7D4C\u6B74"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { fontSize: "clamp(28px, 4vw, 48px)" } }, "e-sports ", /* @__PURE__ */ React.createElement("em", null, "\u30B3\u30FC\u30C1"), " \u7D4C\u6B74")), /* @__PURE__ */ React.createElement("div", { className: "timeline reveal" }, COACH_TIMELINE.map((t, i) => /* @__PURE__ */ React.createElement("div", { className: `t-item ${t.alt ? "alt" : ""}`, key: i }, /* @__PURE__ */ React.createElement("div", { className: "t-title" }, t.title), t.desc ? /* @__PURE__ */ React.createElement("div", { className: "t-desc" }, t.desc) : null))));
  }
  var init_CareerSection = __esm({
    "src/components/CareerSection.jsx"() {
      init_content();
    }
  });

  // src/components/KonkatsuSection.jsx
  var KonkatsuSection_exports = {};
  __export(KonkatsuSection_exports, {
    KonkatsuSection: () => KonkatsuSection
  });
  function KonkatsuSection() {
    const [unlocked, setUnlocked] = (0, import_react10.useState)(false);
    (0, import_react10.useEffect)(() => {
      if (!unlocked) return;
      window.observeReveal?.();
      const id = setTimeout(() => window.observeReveal?.(), 120);
      return () => clearTimeout(id);
    }, [unlocked]);
    return /* @__PURE__ */ React.createElement("section", { id: "konkatsu" }, /* @__PURE__ */ React.createElement("div", { className: "reveal" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "09 / VRC\u5A5A\u6D3B \u2014 Bonus"), /* @__PURE__ */ React.createElement("h2", { className: "section-title", style: { fontSize: "clamp(28px, 4vw, 48px)" } }, "VRC", /* @__PURE__ */ React.createElement("em", null, "\u5A5A\u6D3B"), "\u30B3\u30FC\u30CA\u30FC"), /* @__PURE__ */ React.createElement("div", { className: "section-subtitle konkatsu-teaser" }, "\u3053\u3093\u306A\u3068\u3053\u308D\u307E\u3067\u8AAD\u3093\u3067\u304F\u308C\u305F\u3063\u3066\u3053\u3068\u306F\u3082\u3057\u304B\u3057\u3066\u8208\u5473\u304C\u2026\uFF1F\uFF1F", /* @__PURE__ */ React.createElement("br", null), "\u3088\u308A\u8A73\u7D30\u306A\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3060\u3051\u3069\u8208\u5473\u306A\u3044\u4EBA\u306F\u898B\u306A\u304F\u3066\u3044\u3044\u3088\uFF01\uFF01")), !unlocked ? /* @__PURE__ */ React.createElement("div", { className: "konkatsu-gate reveal" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "konkatsu-unlock-btn",
        onClick: () => setUnlocked(true)
      },
      /* @__PURE__ */ React.createElement("span", { className: "konkatsu-unlock-label" }, "\u8208\u5473\u3042\u308B\u2026\uFF1F \u8A73\u7D30\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u898B\u308B"),
      /* @__PURE__ */ React.createElement("span", { className: "konkatsu-unlock-arrow" }, "\u2192")
    ), /* @__PURE__ */ React.createElement("p", { className: "konkatsu-gate-note" }, "\u30BF\u30C3\u30D7\u3059\u308B\u3068\u8A73\u7D30\u304C\u8868\u793A\u3055\u308C\u307E\u3059")) : /* @__PURE__ */ React.createElement("div", { className: "konkatsu-panel reveal in-view" }, /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco tl" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco tr" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco bl" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco br" }), /* @__PURE__ */ React.createElement("div", { className: "konkatsu-grid" }, KONKATSU_PROFILE.map((item) => /* @__PURE__ */ React.createElement("div", { className: `konkatsu-item ${item.alt ? "alt" : ""}`, key: item.label }, /* @__PURE__ */ React.createElement("div", { className: "konkatsu-label" }, item.label), /* @__PURE__ */ React.createElement("div", { className: "konkatsu-value" }, item.value), item.lines?.length ? /* @__PURE__ */ React.createElement("div", { className: "konkatsu-lines" }, item.lines.map((line, i) => /* @__PURE__ */ React.createElement("span", { key: i }, line, i < item.lines.length - 1 ? /* @__PURE__ */ React.createElement("br", null) : null))) : null)))));
  }
  var import_react10;
  var init_KonkatsuSection = __esm({
    "src/components/KonkatsuSection.jsx"() {
      import_react10 = __require("react");
      init_content();
      init_Ornaments();
    }
  });

  // src/App.jsx
  var import_react11 = __require("react");
  init_content();

  // src/components/Nav.jsx
  var import_react = __require("react");
  init_content();
  function Nav({ active, onOpenCmd }) {
    const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
    (0, import_react.useEffect)(() => {
      if (!menuOpen) return;
      function close() {
        setMenuOpen(false);
      }
      window.addEventListener("hashchange", close);
      return () => window.removeEventListener("hashchange", close);
    }, [menuOpen]);
    return /* @__PURE__ */ React.createElement("nav", { className: "nav" }, /* @__PURE__ */ React.createElement("div", { className: "nav-brand" }, /* @__PURE__ */ React.createElement("span", { className: "ornament" }), /* @__PURE__ */ React.createElement("span", null, "Konny"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, "\xB7 0329 \xB7")), /* @__PURE__ */ React.createElement("div", { className: `nav-links ${menuOpen ? "is-open" : ""}` }, NAV.map((n) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: n.id,
        href: `#${n.id}`,
        className: active === n.id ? "active" : "",
        onClick: () => setMenuOpen(false)
      },
      n.label
    ))), /* @__PURE__ */ React.createElement("div", { className: "nav-actions" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "nav-menu-btn",
        "aria-expanded": menuOpen,
        "aria-label": menuOpen ? "\u30E1\u30CB\u30E5\u30FC\u3092\u9589\u3058\u308B" : "\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F",
        onClick: () => setMenuOpen((o) => !o)
      },
      menuOpen ? "\xD7" : "\u2630"
    ), /* @__PURE__ */ React.createElement("button", { type: "button", className: "nav-cmdk", onClick: onOpenCmd }, /* @__PURE__ */ React.createElement("span", null, "SEARCH"), /* @__PURE__ */ React.createElement("kbd", null, "Ctrl K"))), menuOpen && /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "nav-backdrop",
        "aria-label": "\u30E1\u30CB\u30E5\u30FC\u3092\u9589\u3058\u308B",
        onClick: () => setMenuOpen(false)
      }
    ));
  }

  // src/components/Hero.jsx
  var import_react3 = __require("react");
  init_content();

  // src/hooks/useTyping.js
  var import_react2 = __require("react");
  function useTyping(lines, speed = 32, lineDelay = 700) {
    const [out, setOut] = (0, import_react2.useState)("");
    const [done, setDone] = (0, import_react2.useState)(false);
    (0, import_react2.useEffect)(() => {
      let cancelled = false;
      let i = 0, j = 0;
      let acc = "";
      function step() {
        if (cancelled) return;
        if (i >= lines.length) {
          setDone(true);
          return;
        }
        const line = lines[i];
        if (j <= line.length) {
          setOut(acc + line.slice(0, j));
          j++;
          setTimeout(step, speed);
        } else {
          acc += line + "\n";
          i++;
          j = 0;
          setTimeout(step, lineDelay);
        }
      }
      step();
      return () => {
        cancelled = true;
      };
    }, [lines, speed, lineDelay]);
    return { out, done };
  }

  // src/components/Hero.jsx
  init_Ornaments();
  function HeroSnsLink({ platform, sub, value, href, external, action, onClick }) {
    const Tag = onClick ? "button" : "a";
    const props = onClick ? { type: "button", onClick } : { href, ...external ? { target: "_blank", rel: "noopener noreferrer" } : {} };
    return /* @__PURE__ */ React.createElement(Tag, { className: `sns-card sns-${platform.toLowerCase()}`, ...props }, /* @__PURE__ */ React.createElement("span", { className: "sns-card-top" }, /* @__PURE__ */ React.createElement("span", { className: "sns-card-platform" }, platform), sub && /* @__PURE__ */ React.createElement("span", { className: "sns-card-sub" }, sub)), /* @__PURE__ */ React.createElement("span", { className: "sns-card-value" }, value), /* @__PURE__ */ React.createElement("span", { className: "sns-card-action" }, action));
  }
  function Hero() {
    const { out, done } = useTyping(PROFILE.intro, 30, 500);
    const wrapRef = (0, import_react3.useRef)(null);
    const [discordCopied, setDiscordCopied] = (0, import_react3.useState)(false);
    function copyDiscord() {
      navigator.clipboard?.writeText(PROFILE.discord);
      setDiscordCopied(true);
      setTimeout(() => setDiscordCopied(false), 1800);
    }
    (0, import_react3.useEffect)(() => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      function move(e) {
        const r = wrap.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / r.width;
        const y = (e.clientY - r.top - r.height / 2) / r.height;
        wrap.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
      }
      function leave() {
        wrap.style.transform = "";
      }
      wrap.addEventListener("mousemove", move);
      wrap.addEventListener("mouseleave", leave);
      return () => {
        wrap.removeEventListener("mousemove", move);
        wrap.removeEventListener("mouseleave", leave);
      };
    }, []);
    return /* @__PURE__ */ React.createElement("section", { id: "hero", className: "hero" }, /* @__PURE__ */ React.createElement("div", { className: "hero-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "hero-eyebrow" }, "A VRC Profile \xB7 Est. 2024"), /* @__PURE__ */ React.createElement("h1", { className: "hero-name" }, /* @__PURE__ */ React.createElement("span", { className: "glyph" }, Array.from(PROFILE.name).map((ch, i) => /* @__PURE__ */ React.createElement("span", { className: "ch", key: i }, ch))), /* @__PURE__ */ React.createElement("span", { className: "swash", "aria-hidden": true }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 240 26", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M2 14 Q40 4, 80 14 T160 14 Q200 18, 232 8", stroke: "url(#swashG)", strokeWidth: "1", strokeLinecap: "round", fill: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "232", cy: "8", r: "2", fill: "#f1d9a8" }), /* @__PURE__ */ React.createElement("circle", { cx: "2", cy: "14", r: "1.5", fill: "#e8b4b8" }), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "swashG", x1: "0", y1: "0", x2: "1", y2: "0" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#e8b4b8" }), /* @__PURE__ */ React.createElement("stop", { offset: "50%", stopColor: "#f1d9a8" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#d4af7a" })))))), /* @__PURE__ */ React.createElement("div", { className: "hero-handle" }, "@", PROFILE.twitter, " ", /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\xB7"), " ", /* @__PURE__ */ React.createElement("span", { className: "en" }, PROFILE.nameEn)), /* @__PURE__ */ React.createElement("div", { className: "hero-meta" }, /* @__PURE__ */ React.createElement("div", { className: "line" }, /* @__PURE__ */ React.createElement("span", { className: "key" }, "status"), /* @__PURE__ */ React.createElement("span", null, PROFILE.status))), /* @__PURE__ */ React.createElement("p", { className: "hero-intro" }, out.split("\n").map((l, i) => /* @__PURE__ */ React.createElement("span", { key: i }, l, /* @__PURE__ */ React.createElement("br", null))), !done && /* @__PURE__ */ React.createElement("span", { className: "cursor-blink" })), /* @__PURE__ */ React.createElement("div", { className: "hero-stats" }, STATS.map((s) => /* @__PURE__ */ React.createElement("div", { className: "stat", key: s.label }, /* @__PURE__ */ React.createElement("div", { className: "label" }, s.label), /* @__PURE__ */ React.createElement("div", { className: "value" }, s.value, /* @__PURE__ */ React.createElement("span", { className: "unit" }, s.unit))))), /* @__PURE__ */ React.createElement("div", { className: "hero-sns" }, /* @__PURE__ */ React.createElement("p", { className: "hero-sns-label" }, "\u9023\u7D61\u5148 \xB7 Contact"), /* @__PURE__ */ React.createElement("div", { className: "hero-sns-grid" }, /* @__PURE__ */ React.createElement(
      HeroSnsLink,
      {
        platform: "X",
        sub: "Twitter",
        value: `@${PROFILE.twitter}`,
        href: `https://twitter.com/${PROFILE.twitter}`,
        external: true,
        action: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u958B\u304F \u2192"
      }
    ), /* @__PURE__ */ React.createElement(
      HeroSnsLink,
      {
        platform: "Discord",
        value: PROFILE.discord,
        action: discordCopied ? "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F \u2713" : "ID\u3092\u30B3\u30D4\u30FC",
        onClick: copyDiscord
      }
    ), /* @__PURE__ */ React.createElement(
      HeroSnsLink,
      {
        platform: "VRChat",
        value: PROFILE.vrcId,
        href: PROFILE.vrcUrl,
        external: true,
        action: "VRC\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB \u2192"
      }
    )))), /* @__PURE__ */ React.createElement("div", { className: "hero-avatar" }, /* @__PURE__ */ React.createElement("div", { className: "avatar-ring-2" }, /* @__PURE__ */ React.createElement(AvatarFiligree2, null)), /* @__PURE__ */ React.createElement("div", { className: "avatar-ring" }, /* @__PURE__ */ React.createElement(AvatarFiligree, null)), /* @__PURE__ */ React.createElement("div", { className: "avatar-wrap", ref: wrapRef }, /* @__PURE__ */ React.createElement("div", { className: "avatar-img" }, /* @__PURE__ */ React.createElement("div", { className: "avatar-img-layer primary", "aria-hidden": "true" }), /* @__PURE__ */ React.createElement("div", { className: "avatar-img-layer alt", "aria-hidden": "true" })), /* @__PURE__ */ React.createElement("div", { className: "avatar-frame" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "avatar-corner tl" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "avatar-corner tr" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "avatar-corner bl" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "avatar-corner br" }), /* @__PURE__ */ React.createElement("div", { className: "avatar-tag t1" }, "Avatar \xB7 v3"), /* @__PURE__ */ React.createElement("div", { className: "avatar-tag t2" }, "Peach Neko"), /* @__PURE__ */ React.createElement("div", { className: "avatar-tag t3" }, "ID \xB7 0329")))), /* @__PURE__ */ React.createElement("div", { className: "hero-scroll" }, /* @__PURE__ */ React.createElement("span", null, "scroll"), /* @__PURE__ */ React.createElement("span", { className: "line" })));
  }

  // src/components/Marquee.jsx
  var import_react4 = __toESM(__require("react"), 1);
  function Marquee({ items }) {
    const loop = [...items, ...items];
    return /* @__PURE__ */ import_react4.default.createElement("div", { className: "marquee", "aria-hidden": true }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "marquee-track" }, loop.map((it, i) => /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, { key: i }, it.kind === "muted" ? /* @__PURE__ */ import_react4.default.createElement("span", { className: "muted" }, it.text) : /* @__PURE__ */ import_react4.default.createElement("span", null, it.text), /* @__PURE__ */ import_react4.default.createElement("span", { className: "dot" }, "\u2726")))));
  }

  // src/components/HobbiesSection.jsx
  var import_react5 = __require("react");
  init_content();
  init_gallery();
  init_Ornaments();
  function HobbiesSection() {
    const [active, setActive] = (0, import_react5.useState)(0);
    const h = HOBBIES[active];
    return /* @__PURE__ */ React.createElement("section", { id: "hobbies" }, /* @__PURE__ */ React.createElement("div", { className: "reveal" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "02 / Hobbies \u2014 \u307E\u305A\u306F\u3053\u3053\u304B\u3089"), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, "\u3053\u3093\u306A\u3053\u3068\u304C ", /* @__PURE__ */ React.createElement("em", null, "\u597D\u304D\u3067\u3059")), /* @__PURE__ */ React.createElement("div", { className: "section-subtitle" }, "\u6C17\u306B\u306A\u3063\u305F\u3089\u306A\u3093\u3067\u3082\u3084\u308B\u30BF\u30A4\u30D7\u3002\u8A71\u306E\u304D\u3063\u304B\u3051\u306B\u3069\u3046\u305E\u3002")), /* @__PURE__ */ React.createElement("div", { className: "hobby-wrap reveal" }, /* @__PURE__ */ React.createElement("div", { className: "hobby-tabs" }, HOBBIES.map((hb, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: hb.id,
        className: `hobby-tab ${i === active ? "active" : ""}`,
        onClick: () => setActive(i)
      },
      /* @__PURE__ */ React.createElement("span", { className: "num" }, String(i + 1).padStart(2, "0")),
      /* @__PURE__ */ React.createElement("span", null, hb.label)
    ))), /* @__PURE__ */ React.createElement("div", { className: "hobby-panel", key: h.id }, /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco tl" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco tr" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco bl" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco br" }), /* @__PURE__ */ React.createElement("div", { className: "h-id" }, "Hobby \xB7 0", active + 1, " / 0", HOBBIES.length), /* @__PURE__ */ React.createElement("div", { className: "h-grid" }, /* @__PURE__ */ React.createElement("div", { className: "h-text" }, /* @__PURE__ */ React.createElement("div", { className: "h-title" }, h.title), /* @__PURE__ */ React.createElement("div", { className: "h-sub" }, h.sub), /* @__PURE__ */ React.createElement("p", { className: "h-body" }, h.body.split("\n").map((l, i) => /* @__PURE__ */ React.createElement("span", { key: i }, l, /* @__PURE__ */ React.createElement("br", null))))), /* @__PURE__ */ React.createElement("div", { className: "h-photo" }, /* @__PURE__ */ React.createElement(
      "image-slot",
      {
        id: `hobby-${h.id}`,
        shape: "rounded",
        radius: "14",
        placeholder: `${h.label}\u306E\u5199\u771F\u3092\u30C9\u30ED\u30C3\u30D7`,
        ...h.photo ? {
          src: encPhotoPath(webPhotoPath(h.photo)),
          thumb: encPhotoPath(thumbPhotoPath(h.photo))
        } : {}
      }
    ))))));
  }

  // src/components/Contact.jsx
  var import_react6 = __require("react");
  init_content();
  init_Ornaments();
  function SectionDivider() {
    return /* @__PURE__ */ React.createElement("div", { className: "section-divider reveal", "aria-hidden": true }, /* @__PURE__ */ React.createElement("span", { className: "bar" }), /* @__PURE__ */ React.createElement("span", { className: "star" }, "\u2726"), /* @__PURE__ */ React.createElement("span", { className: "bar" }));
  }
  function FriendCTA() {
    const [copied, setCopied] = (0, import_react6.useState)(false);
    function copy() {
      navigator.clipboard?.writeText(PROFILE.discord);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
    return /* @__PURE__ */ React.createElement("section", { id: "contact" }, /* @__PURE__ */ React.createElement("div", { className: "contact-card reveal" }, /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco tl" }), /* @__PURE__ */ React.createElement(CornerOrnament, { className: "corner-deco br" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "section-label", style: { marginBottom: 14 } }, "04 / Say Hi"), /* @__PURE__ */ React.createElement("h3", null, "\u6C17\u8EFD\u306B ", /* @__PURE__ */ React.createElement("em", null, "\u58F0\u304B\u3051\u3066"), " \u304F\u3060\u3055\u3044"), /* @__PURE__ */ React.createElement("p", null, "\u5171\u901A\u306E\u8DA3\u5473\u304C\u3042\u3063\u305F\u308APC\u30B2\u30FC\u30E0\u3057\u3066\u308B\u4EBA\u306F\u662F\u975E\u4E00\u7DD2\u306B\u904A\u3073\u307E\u3057\u3087\u3046\uFF01\uFF01", /* @__PURE__ */ React.createElement("br", null), "VRC\u3067\u306F\u30EF\u30FC\u30EB\u30C9\u5DE1\u308A\u3001\u30AB\u30E9\u30AA\u30B1\u30EF\u30FC\u30EB\u30C9\u3001\u8B0E\u89E3\u304D\u3042\u305F\u308A\u3092\u4E00\u7DD2\u306B\u3067\u304D\u308B\u4EBA\u52DF\u96C6\u4E2D\uFF01\uFF01", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "var(--font-mono)", color: "var(--text-mute)", fontSize: 12, letterSpacing: "0.1em" } }, "\u30D5\u30EC\u30F3\u30C9\u7533\u8ACB \xB7 \u6C17\u306B\u306A\u3063\u305F\u3089\u8A31\u53EF\u3002Twitter\u76F8\u4E92\u306F\u7533\u8ACBOK\u3002"))), /* @__PURE__ */ React.createElement("div", { className: "contact-actions" }, /* @__PURE__ */ React.createElement("a", { className: "contact-btn", href: `https://twitter.com/${PROFILE.twitter}`, target: "_blank", rel: "noopener" }, /* @__PURE__ */ React.createElement("span", null, "\u{1D54F} \xB7 @", PROFILE.twitter), /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2192")), /* @__PURE__ */ React.createElement("button", { className: "contact-btn", onClick: copy }, /* @__PURE__ */ React.createElement("span", null, "\u2726 Discord \xB7 ", PROFILE.discord), /* @__PURE__ */ React.createElement("span", { className: "arrow" }, copied ? "copied \u2713" : "copy")), /* @__PURE__ */ React.createElement("a", { className: "contact-btn", href: PROFILE.vrcUrl, target: "_blank", rel: "noopener" }, /* @__PURE__ */ React.createElement("span", null, "VRChat \xB7 ", PROFILE.vrcId), /* @__PURE__ */ React.createElement("span", { className: "arrow" }, "\u2197")))));
  }
  function ContactSection() {
    return /* @__PURE__ */ React.createElement("section", { id: "contact-final", style: { paddingTop: 40 } }, /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", { className: "signature" }, "End of Profile"), /* @__PURE__ */ React.createElement("div", { className: "links" }, /* @__PURE__ */ React.createElement("a", { href: `https://twitter.com/${PROFILE.twitter}`, target: "_blank", rel: "noopener" }, "@", PROFILE.twitter), " \xB7 ", /* @__PURE__ */ React.createElement("span", null, "Discord: ", PROFILE.discord), " \xB7 ", /* @__PURE__ */ React.createElement("span", null, "VRChat: ", PROFILE.vrcId)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, color: "var(--text-mute)", fontStyle: "italic" } }, /* @__PURE__ */ React.createElement("span", { className: "section-label", style: { display: "inline-block", marginBottom: 8 } }, "08 / Footer"), /* @__PURE__ */ React.createElement("br", null), "built with caffeine, peach shisha & friends \xB7 \u3053\u306B\u30FC 2026")));
  }

  // src/components/CommandPalette.jsx
  var import_react7 = __require("react");
  init_content();
  function CommandPalette({ open, onClose }) {
    const [q, setQ] = (0, import_react7.useState)("");
    const [sel, setSel] = (0, import_react7.useState)(0);
    const inputRef = (0, import_react7.useRef)(null);
    const items = (0, import_react7.useMemo)(() => {
      const base = [
        ...NAV.map((n) => ({ kind: "nav", label: `Go to \xB7 ${n.label}`, target: `#${n.id}`, glyph: "\u2192" })),
        { kind: "ext", label: "Open \xB7 Twitter (@Konny0329s_VRC)", target: `https://twitter.com/${PROFILE.twitter}`, glyph: "\u{1D54F}" },
        { kind: "copy", label: "Copy \xB7 Discord ID (Konny0329s)", target: PROFILE.discord, glyph: "\u2726" },
        ...PROJECTS.map((p) => ({ kind: "ext", label: `Project \xB7 ${p.name}`, target: p.url, glyph: "\u25CC" })),
        ...HOBBIES.map((h) => ({ kind: "nav", label: `Hobby \xB7 ${h.title}`, target: `#hobbies`, glyph: "\u2665" })),
        ...GAMES.map((g) => ({ kind: "nav", label: `Game \xB7 ${g.name} \u2014 ${g.rank}`, target: `#games`, glyph: "\u25C6" }))
      ];
      const ql = q.toLowerCase();
      return ql ? base.filter((i) => i.label.toLowerCase().includes(ql)) : base;
    }, [q]);
    (0, import_react7.useEffect)(() => {
      if (open) setTimeout(() => inputRef.current?.focus(), 30);
    }, [open]);
    (0, import_react7.useEffect)(() => {
      setSel(0);
    }, [q, open]);
    const execute = (0, import_react7.useCallback)((item) => {
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
    (0, import_react7.useEffect)(() => {
      if (!open) return;
      function onKey(e) {
        if (e.key === "Escape") onClose();
        else if (e.key === "ArrowDown") {
          e.preventDefault();
          setSel((s) => Math.min(items.length - 1, s + 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSel((s) => Math.max(0, s - 1));
        } else if (e.key === "Enter") {
          e.preventDefault();
          execute(items[sel]);
        }
      }
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [open, items, sel, execute, onClose]);
    return /* @__PURE__ */ React.createElement("div", { className: `cmdk-overlay ${open ? "open" : ""}`, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "cmdk", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: inputRef,
        className: "cmdk-input",
        placeholder: "Search \xB7 jump to section, copy id, open project\u2026",
        value: q,
        onChange: (e) => setQ(e.target.value)
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "cmdk-list" }, items.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "cmdk-item" }, "// no results"), items.map((it, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: i,
        type: "button",
        className: `cmdk-item ${i === sel ? "active" : ""}`,
        onMouseEnter: () => setSel(i),
        onClick: () => execute(it)
      },
      /* @__PURE__ */ React.createElement("span", { className: "glyph" }, it.glyph),
      /* @__PURE__ */ React.createElement("span", null, it.label),
      /* @__PURE__ */ React.createElement("span", { className: "meta" }, it.kind)
    ))), /* @__PURE__ */ React.createElement("div", { className: "cmdk-foot" }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("kbd", null, "\u2191\u2193"), " navigate \xB7 ", /* @__PURE__ */ React.createElement("kbd", null, "\u21B5"), " open \xB7 ", /* @__PURE__ */ React.createElement("kbd", null, "esc"), " close"), /* @__PURE__ */ React.createElement("span", null, items.length, " results"))));
  }

  // src/App.jsx
  var GallerySection2 = (0, import_react11.lazy)(
    () => Promise.resolve().then(() => (init_GallerySection(), GallerySection_exports)).then((m) => ({ default: m.GallerySection }))
  );
  var GamesSection2 = (0, import_react11.lazy)(
    () => Promise.resolve().then(() => (init_GamesSection(), GamesSection_exports)).then((m) => ({ default: m.GamesSection }))
  );
  var DevSection2 = (0, import_react11.lazy)(
    () => Promise.resolve().then(() => (init_DevSection(), DevSection_exports)).then((m) => ({ default: m.DevSection }))
  );
  var CareerSection2 = (0, import_react11.lazy)(
    () => Promise.resolve().then(() => (init_CareerSection(), CareerSection_exports)).then((m) => ({ default: m.CareerSection }))
  );
  var KonkatsuSection2 = (0, import_react11.lazy)(
    () => Promise.resolve().then(() => (init_KonkatsuSection(), KonkatsuSection_exports)).then((m) => ({ default: m.KonkatsuSection }))
  );
  function SectionFallback() {
    return /* @__PURE__ */ React.createElement("div", { className: "section-lazy-placeholder", "aria-hidden": "true" });
  }
  function RevealOnMount({ children }) {
    (0, import_react11.useEffect)(() => {
      window.observeReveal?.();
      const id = setTimeout(() => window.observeReveal?.(), 250);
      return () => clearTimeout(id);
    }, []);
    return children;
  }
  function App() {
    const [active, setActive] = (0, import_react11.useState)("hero");
    const [cmdOpen, setCmdOpen] = (0, import_react11.useState)(false);
    (0, import_react11.useEffect)(() => {
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
    (0, import_react11.useEffect)(() => {
      function onKey(e) {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          setCmdOpen((o) => !o);
        }
      }
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);
    (0, import_react11.useEffect)(() => {
      if (window.observeReveal) {
        window.observeReveal();
        setTimeout(() => window.observeReveal(), 300);
      }
    }, []);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Nav, { active, onOpenCmd: () => setCmdOpen(true) }), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(Marquee, { items: [
      { text: "VRChat \xB7 \u3053\u306B\u30FC" },
      { text: "Shisha Lounges" },
      { text: "League of Legends" },
      { text: "Snowboarding" },
      { text: "Poker Nights" },
      { text: "Incremental Games" },
      { kind: "muted", text: "Est. 2024 \u2014 PCVR / Desktop" },
      { text: "Tarkov Raids" },
      { text: "Coaching" }
    ] }), /* @__PURE__ */ React.createElement(HobbiesSection, null), /* @__PURE__ */ React.createElement(import_react11.Suspense, { fallback: /* @__PURE__ */ React.createElement(SectionFallback, null) }, /* @__PURE__ */ React.createElement(RevealOnMount, null, /* @__PURE__ */ React.createElement(GallerySection2, null))), /* @__PURE__ */ React.createElement(SectionDivider, null), /* @__PURE__ */ React.createElement(FriendCTA, null), /* @__PURE__ */ React.createElement(import_react11.Suspense, { fallback: /* @__PURE__ */ React.createElement(SectionFallback, null) }, /* @__PURE__ */ React.createElement(RevealOnMount, null, /* @__PURE__ */ React.createElement(GamesSection2, null))), /* @__PURE__ */ React.createElement(SectionDivider, null), /* @__PURE__ */ React.createElement(import_react11.Suspense, { fallback: /* @__PURE__ */ React.createElement(SectionFallback, null) }, /* @__PURE__ */ React.createElement(RevealOnMount, null, /* @__PURE__ */ React.createElement(DevSection2, null)), /* @__PURE__ */ React.createElement(RevealOnMount, null, /* @__PURE__ */ React.createElement(CareerSection2, null)), /* @__PURE__ */ React.createElement(RevealOnMount, null, /* @__PURE__ */ React.createElement(KonkatsuSection2, null))), /* @__PURE__ */ React.createElement(ContactSection, null)), /* @__PURE__ */ React.createElement(CommandPalette, { open: cmdOpen, onClose: () => setCmdOpen(false) }));
  }

  // src/bundle-entry.jsx
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
