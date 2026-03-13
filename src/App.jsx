import { useState } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────

const MONTHS = [
  { num: 1,  name: "Yanvar",   emoji: "❄️",  season: "winter", seasonAz: "Qış" },
  { num: 2,  name: "Fevral",   emoji: "⛄",  season: "winter", seasonAz: "Qış" },
  { num: 3,  name: "Mart",     emoji: "🌸",  season: "spring", seasonAz: "Bahar" },
  { num: 4,  name: "Aprel",    emoji: "🌼",  season: "spring", seasonAz: "Bahar" },
  { num: 5,  name: "May",      emoji: "🌺",  season: "spring", seasonAz: "Bahar" },
  { num: 6,  name: "İyun",     emoji: "☀️",  season: "summer", seasonAz: "Yay" },
  { num: 7,  name: "İyul",     emoji: "🏖️", season: "summer", seasonAz: "Yay" },
  { num: 8,  name: "Avqust",   emoji: "🍦",  season: "summer", seasonAz: "Yay" },
  { num: 9,  name: "Sentyabr", emoji: "🍂",  season: "autumn", seasonAz: "Payız" },
  { num: 10, name: "Oktyabr",  emoji: "🎃",  season: "autumn", seasonAz: "Payız" },
  { num: 11, name: "Noyabr",   emoji: "🍄",  season: "autumn", seasonAz: "Payız" },
  { num: 12, name: "Dekabr",   emoji: "🎄",  season: "winter", seasonAz: "Qış" },
];

const SEASON_COLORS = {
  winter: { bg: "linear-gradient(135deg,#90CAF9,#42A5F5)", border: "#0D47A1", badge: "#1565C0" },
  spring: { bg: "linear-gradient(135deg,#A5D6A7,#66BB6A)", border: "#2E7D32", badge: "#388E3C" },
  summer: { bg: "linear-gradient(135deg,#FFCC80,#FFA726)", border: "#E65100", badge: "#F57C00" },
  autumn: { bg: "linear-gradient(135deg,#EF9A9A,#EF5350)", border: "#B71C1C", badge: "#C62828" },
};

const DAYS = [
  { n: 1, name: "Bazar ertəsi",     short: "B.E", color: "#1565C0", bg: "linear-gradient(135deg,#E3F2FD,#BBDEFB)", border: "#1976D2" },
  { n: 2, name: "Çərşənbə axşamı", short: "Ç.A", color: "#6A1B9A", bg: "linear-gradient(135deg,#F3E5F5,#E1BEE7)", border: "#7B1FA2" },
  { n: 3, name: "Çərşənbə",        short: "Çər", color: "#2E7D32", bg: "linear-gradient(135deg,#E8F5E9,#C8E6C9)", border: "#388E3C" },
  { n: 4, name: "Cümə axşamı",     short: "C.A", color: "#E65100", bg: "linear-gradient(135deg,#FFF3E0,#FFE0B2)", border: "#F57C00" },
  { n: 5, name: "Cümə",            short: "Cüm", color: "#880E4F", bg: "linear-gradient(135deg,#FCE4EC,#F8BBD0)", border: "#C2185B" },
  { n: 6, name: "Şənbə",           short: "Şnb", color: "#004D40", bg: "linear-gradient(135deg,#E0F2F1,#B2DFDB)", border: "#00796B", rest: true },
  { n: 7, name: "Bazar",           short: "Bzr", color: "#F57F17", bg: "linear-gradient(135deg,#FFF9C4,#FFF176)", border: "#F9A825", rest: true },
];

const CONTINENTS = [
  { name: "Avrasiya",        emoji: "🏔️", color: "linear-gradient(135deg,#EF6C00,#BF360C)", fact: "Ən böyük materik! Azərbaycan burada yerləşir. 🇦🇿 Avropa ilə Asiya birlikdədir.", animal: "🐻 Ayı" },
  { name: "Afrika",          emoji: "🦁", color: "linear-gradient(135deg,#2E7D32,#1B5E20)", fact: "İkinci ən böyük materik. Sahara çölü, aslanlar, zürafələr və fillər buradadır! 🐘", animal: "🦁 Aslan" },
  { name: "Şimali Amerika",  emoji: "🗽", color: "linear-gradient(135deg,#1565C0,#0D47A1)", fact: "ABŞ, Kanada, Meksika bu materikdədir. Niaqara şəlaləsi buradadır! 💦", animal: "🦅 Qartal" },
  { name: "Cənubi Amerika",  emoji: "🌴", color: "linear-gradient(135deg,#F9A825,#E65100)", fact: "Amazon meşəsi — dünyada ən böyük meşə — burada yerləşir! 🐍", animal: "🦜 Tutuquşu" },
  { name: "Avstraliya",      emoji: "🦘", color: "linear-gradient(135deg,#00838F,#004D40)", fact: "Həm materik, həm ölkə! Kenqurular yalnız burada yaşayır! 🐨", animal: "🦘 Kenquru" },
  { name: "Antarktida",      emoji: "🐧", color: "linear-gradient(135deg,#3949AB,#1A237E)", fact: "Ən soyuq yer! −89°C! İnsan yaşamır — yalnız pinqvinlər! 🧊", animal: "🐧 Pinqvin" },
];

const OCEANS = [
  { name: "Sakit okean",    emoji: "🐋", rank: "1", tag: "Ən böyük",  tagColor: "#0288D1", detail: "O qədər böyükdür ki, bütün qitələr onun içinə sığar!", color: "#0277BD" },
  { name: "Atlantik okean", emoji: "🚢", rank: "2", tag: "2-ci böyük", tagColor: "#1976D2", detail: "Avropa ilə Amerika arasındadır. Titanikin batdığı yer!", color: "#1565C0" },
  { name: "Hind okeanı",    emoji: "🌡️", rank: "3", tag: "Ən isti",   tagColor: "#E65100", detail: "Asiya, Afrika və Avstraliya arasındadır. Çox isti sular!", color: "#00695C" },
  { name: "Arktika okeanı", emoji: "🧊", rank: "4", tag: "Ən kiçik",  tagColor: "#5C6BC0", detail: "Şimal qütbünün ətrafındadır. Ağ ayıların evi! 🐻‍❄️", color: "#283593" },
  { name: "Cənub okeanı",   emoji: "🐧", rank: "5", tag: "Ən cənub",  tagColor: "#6A1B9A", detail: "Antarktidanı əhatə edir. Pinqvinlər bu soyuq sularda üzür!", color: "#4A148C" },
];

const PLANETS = [
  {
    name: "Merkuri", emoji: "🟤", order: 1,
    distanceM: "57.9 mln km", distanceLabel: "Günəşə ən yaxın!",
    tempMax: "+430°C", tempMin: "-180°C", tempAvg: "+167°C",
    moons: 0, rings: false,
    size: "Ən kiçik planet", sizeEmoji: "🔵",
    livable: false, livableReason: "Çox isti və soyuqdur, hava yoxdur!",
    color: "#9E9E9E", bg: "linear-gradient(135deg,#757575,#424242)",
    fact: "Günəşin ətrafına tur etmək üçün cəmi 88 gün lazımdır! (Yer üçün 365 gün!)",
    funEmoji: "🌑"
  },
  {
    name: "Venera", emoji: "🟡", order: 2,
    distanceM: "108 mln km", distanceLabel: "Yer kürəsinə ən yaxın planet!",
    tempMax: "+462°C", tempMin: "+462°C", tempAvg: "+462°C",
    moons: 0, rings: false,
    size: "Yerə ən çox oxşayan ölçü", sizeEmoji: "🔵",
    livable: false, livableReason: "Ən isti planet! Dəmir belə əriyər!",
    color: "#FFC107", bg: "linear-gradient(135deg,#F9A825,#FF6F00)",
    fact: "Venera Günəşin ətrafını əks istiqamətdə fırlanır — elə bil tərsinə gedir! 🔄",
    funEmoji: "🌕"
  },
  {
    name: "Yer", emoji: "🌍", order: 3,
    distanceM: "149.6 mln km", distanceLabel: "Mükəmməl məsafə!",
    tempMax: "+58°C", tempMin: "-89°C", tempAvg: "+15°C",
    moons: 1, rings: false,
    size: "Orta ölçülü planet", sizeEmoji: "🔵",
    livable: true, livableReason: "Bizim evimiz! Su, hava, isti — hər şey var! 💧🌿",
    color: "#4CAF50", bg: "linear-gradient(135deg,#2E7D32,#1565C0)",
    fact: "Yer kürəsinin 70%-i sudur! Buna görə kosmosdan baxanda mavi görünür — 'Mavi Planet'! 💙",
    funEmoji: "🌍"
  },
  {
    name: "Mars", emoji: "🔴", order: 4,
    distanceM: "227 mln km", distanceLabel: "Yer kürəsindən 2 dəfə uzaq",
    tempMax: "+20°C", tempMin: "-125°C", tempAvg: "-60°C",
    moons: 2, rings: false,
    size: "Yerdən kiçik", sizeEmoji: "🔵",
    livable: false, livableReason: "Çox soyuqdur, hava çox incədir. Amma bəlkə gələcəkdə! 🚀",
    color: "#F44336", bg: "linear-gradient(135deg,#C62828,#BF360C)",
    fact: "Marsa 'Qırmızı Planet' deyilir — torpağı dəmiroksiddən qırmızıdır! Olimp dağı Yerin ən hündür dağından 3 dəfə hündürdür! ⛰️",
    funEmoji: "🔴"
  },
  {
    name: "Yupiter", emoji: "🟠", order: 5,
    distanceM: "778 mln km", distanceLabel: "Günəşdən çox uzaq",
    tempMax: "-108°C", tempMin: "-145°C", tempAvg: "-110°C",
    moons: 95, rings: true,
    size: "Ən böyük planet! 1300 Yer sığar!", sizeEmoji: "⭕",
    livable: false, livableReason: "Qaz planetidir — dayanacaq yer yoxdur! Fırtınalar da çox güclüdür!",
    color: "#FF9800", bg: "linear-gradient(135deg,#E65100,#BF360C)",
    fact: "Yupiterin üzərindəki Böyük Qırmızı Ləkə — 300 ildən çoxdur davam edən nəhəng bir fırtınadır! 🌀",
    funEmoji: "🟠"
  },
  {
    name: "Saturn", emoji: "💛", order: 6,
    distanceM: "1.4 mlrd km", distanceLabel: "Günəşdən çox-çox uzaq",
    tempMax: "-130°C", tempMin: "-160°C", tempAvg: "-140°C",
    moons: 146, rings: true,
    size: "İkinci ən böyük planet", sizeEmoji: "⭕",
    livable: false, livableReason: "Qaz planetidir və çox soyuqdur! Gözəl həlqələri var amma yaşamaq olmaz!",
    color: "#FFC107", bg: "linear-gradient(135deg,#F9A825,#795548)",
    fact: "Saturn o qədər yüngüldür ki, böyük bir hovuza qoysan — su üzündə üzər! 🛁 Həlqələri buzdan ibarətdir!",
    funEmoji: "🪐"
  },
  {
    name: "Uran", emoji: "🔵", order: 7,
    distanceM: "2.9 mlrd km", distanceLabel: "Çox uzaq!",
    tempMax: "-197°C", tempMin: "-224°C", tempAvg: "-195°C",
    moons: 27, rings: true,
    size: "Üçüncü ən böyük planet", sizeEmoji: "⭕",
    livable: false, livableReason: "Çox soyuqdur! Ən soyuq planetdir!",
    color: "#00BCD4", bg: "linear-gradient(135deg,#006064,#01579B)",
    fact: "Uran öz oxu boyunca yanlamasına fırlanır — elə bil yatıb fırlanır! 😴 Bu çox qəribədir!",
    funEmoji: "🔵"
  },
  {
    name: "Neptun", emoji: "🌊", order: 8,
    distanceM: "4.5 mlrd km", distanceLabel: "Günəşdən ən uzaq planet!",
    tempMax: "-200°C", tempMin: "-218°C", tempAvg: "-200°C",
    moons: 16, rings: true,
    size: "Dördüncü ən böyük planet", sizeEmoji: "⭕",
    livable: false, livableReason: "Ən uzaq, çox soyuq! Günəş buradan çox kiçik görünür.",
    color: "#3F51B5", bg: "linear-gradient(135deg,#283593,#1A237E)",
    fact: "Neptunda küləklər saatda 2100 km sürətlə əsir — Yerdəki ən güclü tufandan 10 dəfə güclüdür! 🌪️",
    funEmoji: "🔵"
  },
];

const QUIZ_QUESTIONS = [
  // AYLAR
  { id:1,  topic:"📅 Aylar",     q:"1 ildə neçə ay var?",                          opts:["8","10","12","6"],         ans:"12" },
  { id:2,  topic:"📅 Aylar",     q:"Hansı ay Yay fəslindədir?",                    opts:["Mart","Oktyabr","İyul","Yanvar"], ans:"İyul" },
  { id:3,  topic:"📅 Aylar",     q:"Novruz bayramı hansı ayda keçirilir?",         opts:["Yanvar","Fevral","Mart","Aprel"], ans:"Mart" },
  // HƏFTƏ
  { id:4,  topic:"📆 Həftə",     q:"Bir ayda neçə həftə var?",                     opts:["3","4","5","7"],            ans:"4" },
  { id:5,  topic:"📆 Həftə",     q:"1 ildə neçə həftə var?",                       opts:["42","48","52","60"],        ans:"52" },
  { id:6,  topic:"📆 Həftə",     q:"1 il neçə gündür?",                            opts:["300","350","365","400"],    ans:"365" },
  // GÜNLƏR
  { id:7,  topic:"🗓️ Günlər",   q:"Həftənin ilk günü hansıdır?",                  opts:["Bazar","Cümə","Bazar ertəsi","Şənbə"], ans:"Bazar ertəsi" },
  { id:8,  topic:"🗓️ Günlər",   q:"İstirahət günləri hansılardır?",               opts:["Cümə və Şənbə","Şənbə və Bazar","B.ertəsi və Bazar","Cümə və Bazar"], ans:"Şənbə və Bazar" },
  { id:9,  topic:"🗓️ Günlər",   q:"Həftənin 3-cü günü hansıdır?",                 opts:["Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı"], ans:"Çərşənbə" },
  // MATERİK
  { id:10, topic:"🌍 Materik",   q:"Azərbaycanda neçə materik öyrənilir?",         opts:["5","6","7","8"],            ans:"6" },
  { id:11, topic:"🌍 Materik",   q:"Azərbaycan hansı materikdədir?",               opts:["Afrika","Avstraliya","Avrasiya","Antarktida"], ans:"Avrasiya" },
  { id:12, topic:"🌍 Materik",   q:"Kenqurular hansı materikdə yaşayır?",          opts:["Afrika","Antarktida","C.Amerika","Avstraliya"], ans:"Avstraliya" },
  // OKEAN
  { id:13, topic:"🌊 Okean",     q:"Dünyada neçə okean var?",                      opts:["3","4","5","6"],            ans:"5" },
  { id:14, topic:"🌊 Okean",     q:"Ən böyük okean hansıdır?",                     opts:["Atlantik","Hind","Sakit","Arktika"], ans:"Sakit" },
  { id:15, topic:"🌊 Okean",     q:"Yer kürəsinin neçə faizi sudur?",              opts:["40%","50%","60%","70%"],    ans:"70%" },
  // KOSMOS
  { id:16, topic:"🚀 Kosmos",    q:"Günəşə ən yaxın planet hansıdır?",             opts:["Venera","Yer","Merkuri","Mars"], ans:"Merkuri" },
  { id:17, topic:"🚀 Kosmos",    q:"Ən böyük planet hansıdır?",                    opts:["Saturn","Neptun","Yupiter","Uran"], ans:"Yupiter" },
  { id:18, topic:"🚀 Kosmos",    q:"Yaşamaq üçün uyğun planet hansıdır?",         opts:["Mars","Venera","Yer","Saturn"], ans:"Yer" },
  { id:19, topic:"🚀 Kosmos",    q:"Ən çox peyki olan planet hansıdır?",           opts:["Yupiter","Uran","Neptun","Saturn"], ans:"Saturn" },
  { id:20, topic:"🚀 Kosmos",    q:"Günəşdən ən uzaq planet hansıdır?",            opts:["Uran","Saturn","Neptun","Mars"], ans:"Neptun" },
];

// ─── STYLES ────────────────────────────────────────────────────────────────

const S = {
  app: {
    fontFamily: "'Nunito', sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(160deg,#0a0a2e 0%,#1a1a5e 40%,#0d2b45 100%)",
    padding: "0 0 40px",
  },
  starBg: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none", zIndex: 0,
  },
  wrap: { position: "relative", zIndex: 1, maxWidth: 940, margin: "0 auto", padding: "0 16px" },

  header: {
    textAlign: "center", padding: "40px 20px 20px",
  },
  h1: {
    fontFamily: "'Baloo 2', cursive",
    fontSize: "clamp(2rem,5vw,3.2rem)",
    color: "#FFD700",
    textShadow: "0 0 20px rgba(255,215,0,0.5), 3px 3px 0 rgba(0,0,0,0.5)",
    margin: 0, lineHeight: 1.2,
  },
  subtitle: { color: "#90CAF9", fontWeight: 700, fontSize: "1.1rem", marginTop: 8 },

  // NAV
  nav: {
    display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center",
    padding: "16px 0 24px",
  },
  navBtn: (active) => ({
    background: active ? "linear-gradient(135deg,#FFD700,#FF8C00)" : "rgba(255,255,255,0.1)",
    color: active ? "#1A237E" : "#E3F2FD",
    border: active ? "2px solid #FFC107" : "2px solid rgba(255,255,255,0.2)",
    borderRadius: 30, padding: "8px 18px",
    fontSize: "0.9rem", fontWeight: 800,
    cursor: "pointer", transition: "all 0.2s",
    fontFamily: "'Nunito', sans-serif",
    backdropFilter: "blur(6px)",
  }),

  // CARDS
  card: {
    background: "rgba(255,255,255,0.96)",
    borderRadius: 24, padding: "24px 22px",
    marginBottom: 24,
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  },
  sectionTitle: (color="#333") => ({
    fontFamily: "'Baloo 2', cursive",
    fontSize: "1.7rem", color,
    marginBottom: 14, display: "flex",
    alignItems: "center", gap: 10, flexWrap: "wrap",
  }),

  // MONTHS
  monthsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))",
    gap: 10, margin: "14px 0",
  },
  monthCard: (s) => ({
    background: SEASON_COLORS[s].bg,
    border: `3px solid ${SEASON_COLORS[s].border}`,
    borderRadius: 16, padding: "12px 8px",
    textAlign: "center", cursor: "default",
    transition: "transform 0.2s",
  }),

  // DAYS
  daysGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    gap: 8, margin: "14px 0",
  },
  dayCard: (d) => ({
    background: d.bg, border: `2px solid ${d.border}`,
    borderRadius: 12, padding: "10px 4px",
    textAlign: "center",
    outline: d.rest ? `3px solid #FFD700` : "none",
  }),

  // CONTINENT
  contGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
    gap: 12, margin: "14px 0",
  },
  contCard: (color) => ({
    background: color, borderRadius: 16, padding: "14px 16px",
    display: "flex", alignItems: "flex-start", gap: 12,
    color: "white", textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
    boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
    cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
  }),

  // OCEAN
  oceanItem: (color) => ({
    display: "flex", alignItems: "center", gap: 14,
    background: `${color}18`,
    border: `2px solid ${color}`,
    borderRadius: 14, padding: "12px 16px",
    marginBottom: 10,
  }),

  // PLANET
  planetGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
    gap: 14, margin: "14px 0",
  },
  planetCard: (bg, selected) => ({
    background: bg, borderRadius: 20, padding: "16px 14px",
    color: "white", cursor: "pointer",
    border: selected ? "3px solid #FFD700" : "3px solid transparent",
    boxShadow: selected ? "0 0 20px rgba(255,215,0,0.5)" : "0 4px 14px rgba(0,0,0,0.3)",
    transition: "all 0.2s", textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
  }),
  planetDetail: {
    background: "linear-gradient(135deg,#0d1b3e,#1a3a5c)",
    borderRadius: 20, padding: "24px",
    color: "white", marginTop: 16,
    border: "2px solid rgba(255,215,0,0.3)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
  },

  // QUIZ
  quizWrap: {
    background: "linear-gradient(135deg,#0d1b3e,#1a237e)",
    borderRadius: 24, padding: "28px 22px",
    border: "2px solid rgba(255,215,0,0.3)",
  },
  quizCard: {
    background: "rgba(255,255,255,0.97)",
    borderRadius: 18, padding: "20px 18px 16px",
    marginBottom: 14, position: "relative",
  },
  optBtn: (state) => ({
    background: state==="correct" ? "#C8E6C9" : state==="wrong" ? "#FFCDD2" : "#EDE7F6",
    border: `2px solid ${state==="correct" ? "#2E7D32" : state==="wrong" ? "#B71C1C" : "#B39DDB"}`,
    color: state==="correct" ? "#1B5E20" : state==="wrong" ? "#B71C1C" : "#4A148C",
    borderRadius: 12, padding: "10px 12px",
    fontSize: "0.93rem", fontWeight: 700, cursor: state?"default":"pointer",
    fontFamily: "'Nunito', sans-serif", textAlign: "center",
    transition: "all 0.2s",
  }),

  // UTILS
  funFact: {
    background: "linear-gradient(135deg,#FFF9C4,#FFF3E0)",
    border: "2px solid #FFC107", borderRadius: 14,
    padding: "12px 16px", marginTop: 14,
    fontSize: "0.95rem", color: "#5D4037",
    display: "flex", alignItems: "flex-start", gap: 8,
  },
  infoBox: (borderColor="#CCC") => ({
    background: "#F8F9FA", borderLeft: `5px solid ${borderColor}`,
    borderRadius: 12, padding: "14px 18px", margin: "12px 0",
    fontSize: "1rem", color: "#444", lineHeight: 1.7,
  }),
  badge: (bg,color="#fff") => ({
    background: bg, color, borderRadius: 30,
    padding: "2px 10px", fontSize: "0.7rem", fontWeight: 800,
    display: "inline-block",
  }),
  chip: (bg) => ({
    background: bg, color: "white", borderRadius: 30,
    padding: "4px 12px", fontSize: "0.8rem", fontWeight: 800,
    display: "inline-block", margin: "3px 3px 0 0",
  }),
};

// ─── COMPONENTS ────────────────────────────────────────────────────────────

function MonthCard({ m }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{...S.monthCard(m.season), transform: hov?"translateY(-4px) scale(1.04)":"none"}}
         onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <div style={{fontSize:"0.62rem",fontWeight:800,color:"rgba(255,255,255,0.85)",letterSpacing:1}}>{m.num}-ci ay</div>
      <div style={{fontSize:"2rem",margin:"4px 0"}}>{m.emoji}</div>
      <div style={{fontSize:"0.95rem",fontWeight:900,color:"white",textShadow:"1px 1px 3px rgba(0,0,0,0.3)"}}>{m.name}</div>
      <div style={{...S.badge("rgba(0,0,0,0.2)"),marginTop:4}}>{m.seasonAz}</div>
    </div>
  );
}

function PlanetCard({ p, selected, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{...S.planetCard(p.bg, selected), transform: hov||selected?"translateY(-4px)":"none"}}
         onClick={onClick}
         onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <div style={{fontSize:"2.6rem",marginBottom:6}}>{p.funEmoji}</div>
      <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.3rem",fontWeight:800}}>{p.name}</div>
      <div style={{fontSize:"0.75rem",opacity:0.85,marginTop:2}}>{p.order}. planet · {p.distanceM}</div>
      <div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap"}}>
        <span style={S.chip("rgba(255,255,255,0.2)")}>{p.moons} 🌙 peyk</span>
        {p.livable && <span style={S.chip("#2E7D32")}>✅ Yaşamaq</span>}
        {p.rings && <span style={S.chip("rgba(255,255,255,0.15)")}>💫 Həlqə</span>}
      </div>
    </div>
  );
}

function PlanetDetail({ p }) {
  const tempColor = p.tempAvg.startsWith("+") ? "#FF7043" : "#42A5F5";
  return (
    <div style={S.planetDetail}>
      <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",marginBottom:20}}>
        <span style={{fontSize:"4rem"}}>{p.funEmoji}</span>
        <div>
          <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"2rem",color:"#FFD700"}}>{p.name}</div>
          <div style={{color:"#90CAF9",fontWeight:700}}>{p.order}. planet 🪐 {p.distanceLabel}</div>
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:12,marginBottom:16}}>
        <StatBox icon="🌡️" label="Orta temperatur" value={p.tempAvg} valueColor={tempColor}/>
        <StatBox icon="🔥" label="Maksimum" value={p.tempMax} valueColor="#FF7043"/>
        <StatBox icon="🥶" label="Minimum" value={p.tempMin} valueColor="#42A5F5"/>
        <StatBox icon="🌙" label="Peyk (ay) sayı" value={p.moons} valueColor="#FFD700"/>
        <StatBox icon="📏" label="Günəşə məsafə" value={p.distanceM} valueColor="#CE93D8"/>
        <StatBox icon="📐" label="Ölçü" value={p.size} valueColor="#80CBC4" small/>
      </div>

      <div style={{
        background: p.livable ? "rgba(46,125,50,0.3)" : "rgba(183,28,28,0.3)",
        border: `2px solid ${p.livable ? "#4CAF50" : "#F44336"}`,
        borderRadius: 14, padding: "12px 16px", marginBottom: 14,
      }}>
        <span style={{fontSize:"1.3rem"}}>{p.livable ? "✅" : "❌"}</span>
        <span style={{fontWeight:800,color: p.livable?"#A5D6A7":"#EF9A9A",marginLeft:8}}>
          {p.livable ? "Yaşamaq üçün uyğundur!" : "Yaşamaq üçün uyğun deyil!"}
        </span>
        <div style={{color:"#CFD8DC",fontSize:"0.9rem",marginTop:4}}>{p.livableReason}</div>
      </div>

      <div style={{background:"rgba(255,215,0,0.1)",border:"2px solid rgba(255,215,0,0.3)",borderRadius:12,padding:"12px 14px"}}>
        <span style={{fontSize:"1.2rem"}}>💡 </span>
        <span style={{color:"#FFF9C4",fontWeight:700,fontSize:"0.95rem"}}>{p.fact}</span>
      </div>
    </div>
  );
}

function StatBox({ icon, label, value, valueColor, small }) {
  return (
    <div style={{background:"rgba(255,255,255,0.08)",borderRadius:12,padding:"12px 14px"}}>
      <div style={{fontSize:"1.4rem"}}>{icon}</div>
      <div style={{color:"#90CAF9",fontSize:"0.72rem",fontWeight:700,marginTop:4}}>{label}</div>
      <div style={{color:valueColor||"white",fontWeight:900,fontSize:small?"0.85rem":"1.1rem",marginTop:2}}>{value}</div>
    </div>
  );
}

// ─── QUIZ ──────────────────────────────────────────────────────────────────

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [filter, setFilter] = useState("all");

  const topics = ["all",...new Set(QUIZ_QUESTIONS.map(q=>q.topic))];
  const filtered = filter==="all" ? QUIZ_QUESTIONS : QUIZ_QUESTIONS.filter(q=>q.topic===filter);

  const handleAnswer = (qid, opt, correct) => {
    if (answers[qid]) return;
    setAnswers(prev=>({...prev,[qid]:{chosen:opt,correct}}));
  };

  const answered = Object.keys(answers).length;
  const score = Object.values(answers).filter(a=>a.correct).length;

  const scoreMsg = () => {
    const total = filtered.length;
    const s = Object.values(answers).filter(a=>a.correct).length;
    if(s===total) return {emoji:"🏆",text:"Mükəmməl!",msg:"Heç bir sual səni çaşdırmadı! Sən gerçəkdən dahisən! 🌟",stars:5};
    if(s>=total*0.8) return {emoji:"🥇",text:"Əla!",msg:"Çox yaxşı! Az qaldı mükəmməl! 💪",stars:4};
    if(s>=total*0.6) return {emoji:"🥈",text:"Yaxşı!",msg:"Yaxşı nəticə! Daha çox oxu! 📚",stars:3};
    if(s>=total*0.4) return {emoji:"🥉",text:"Orta",msg:"Qorxma! Dərsləri yenidən oxu! 🔄",stars:2};
    return {emoji:"📚",text:"Davam et!",msg:"Heç nə deyil — yenidən cəhd et! 🌈",stars:1};
  };

  return (
    <div style={S.quizWrap}>
      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"2rem",color:"#FFD700"}}>🎯 Test Vaxtı! 🎯</div>
        <div style={{color:"#90CAF9",fontWeight:700,fontSize:"0.95rem",marginTop:4}}>
          Hər mövzudan 3 sual — cəmi {QUIZ_QUESTIONS.length} sual!
        </div>
      </div>

      {/* Topic filter */}
      <div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",marginBottom:20}}>
        {topics.map(t=>(
          <button key={t} style={{
            background: filter===t?"#FFD700":"rgba(255,255,255,0.1)",
            color: filter===t?"#1A237E":"#E3F2FD",
            border: filter===t?"2px solid #FFC107":"2px solid rgba(255,255,255,0.2)",
            borderRadius:30, padding:"6px 14px", fontSize:"0.82rem",
            fontWeight:800, cursor:"pointer", fontFamily:"'Nunito',sans-serif",
          }} onClick={()=>{setFilter(t);setAnswers({});setShowResult(false);}}>
            {t==="all"?"🎯 Hamısı":t}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div style={{color:"#FFD700",fontWeight:800,textAlign:"center",fontSize:"0.9rem",marginBottom:8}}>
        {answered} / {filtered.length} sual cavablandı
      </div>
      <div style={{background:"rgba(255,255,255,0.15)",borderRadius:30,height:12,overflow:"hidden",marginBottom:20}}>
        <div style={{
          width:`${filtered.length?(answered/filtered.length*100):0}%`,
          height:"100%",borderRadius:30,
          background:"linear-gradient(90deg,#FFD700,#FF8C00)",
          transition:"width 0.4s",
        }}/>
      </div>

      {filtered.map((q,i)=>{
        const a = answers[q.id];
        return (
          <div key={q.id} style={S.quizCard}>
            <div style={{
              position:"absolute",top:-12,left:15,
              background:"#FFD700",color:"#1A237E",
              fontWeight:900,fontSize:"0.85rem",padding:"2px 14px",borderRadius:20,
            }}>Sual {i+1}</div>
            <div style={{
              position:"absolute",top:-12,right:15,
              background:"rgba(255,255,255,0.2)",color:"#555",
              fontWeight:800,fontSize:"0.75rem",padding:"2px 10px",borderRadius:20,
              border:"1px solid #DDD",
            }}>{q.topic}</div>
            <div style={{fontWeight:800,fontSize:"1.05rem",color:"#222",paddingTop:10,marginBottom:14}}>
              {q.q}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {q.opts.map(opt=>{
                const isChosen = a?.chosen===opt;
                const isCorrect = opt===q.ans;
                let state = null;
                if(a){ state = isCorrect?"correct": isChosen?"wrong":null; }
                return (
                  <button key={opt}
                    disabled={!!a}
                    style={S.optBtn(state)}
                    onClick={()=>handleAnswer(q.id, opt, opt===q.ans)}>
                    {isCorrect&&a?"✅ ":isChosen&&!a?.correct?"❌ ":""}{opt}
                  </button>
                );
              })}
            </div>
            {a && (
              <div style={{
                marginTop:10,padding:"8px 12px",borderRadius:10,textAlign:"center",
                fontWeight:800,fontSize:"1rem",
                background: a.correct?"#C8E6C9":"#FFCDD2",
                color: a.correct?"#1B5E20":"#B71C1C",
              }}>
                {a.correct ? ["🎉 Bravo!","⭐ Əfərin!","🌟 Çox yaxşı!","👏 Düzgün!"][q.id%4]
                           : `😊 Düzgün cavab: ${q.ans}`}
              </div>
            )}
          </div>
        );
      })}

      <button onClick={()=>setShowResult(true)} style={{
        display:"block",width:"100%",
        background:"linear-gradient(135deg,#FFD700,#FFA000)",
        color:"#1A237E",border:"none",borderRadius:20,
        padding:16,fontSize:"1.2rem",fontWeight:900,
        fontFamily:"'Nunito',sans-serif",cursor:"pointer",
        boxShadow:"0 5px 20px rgba(255,215,0,0.4)",
        marginTop:4,
      }}>🏆 Nəticəmi göstər!</button>

      {showResult && (()=>{
        const r = scoreMsg();
        return (
          <div style={{background:"white",borderRadius:20,padding:24,marginTop:20,textAlign:"center"}}>
            <div style={{fontSize:"3.5rem"}}>{r.emoji}</div>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"2rem",color:"#4A148C",margin:"8px 0"}}>{r.text}</div>
            <div style={{fontSize:"1.5rem",marginBottom:8}}>{"⭐".repeat(r.stars)}</div>
            <div style={{fontWeight:700,color:"#555",marginBottom:16}}>{r.msg}</div>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.3rem",color:"#4A148C",marginBottom:12}}>
              {score} / {filtered.length} düzgün cavab
            </div>
            <button onClick={()=>{setAnswers({});setShowResult(false);}} style={{
              background:"#EDE7F6",color:"#4A148C",
              border:"2px solid #B39DDB",borderRadius:15,
              padding:"10px 24px",fontSize:"1rem",fontWeight:800,
              cursor:"pointer",fontFamily:"'Nunito',sans-serif",
            }}>🔄 Yenidən cəhd et!</button>
          </div>
        );
      })()}
    </div>
  );
}

// ─── SECTIONS ──────────────────────────────────────────────────────────────

function SectionAylar() {
  return (
    <div style={S.card}>
      <div style={{...S.sectionTitle("#6A1B9A"),justifyContent:"center",fontSize:"1.9rem"}}>
        📅 1 ildə 12 AY var!
      </div>
      <div style={S.monthsGrid}>
        {MONTHS.map(m=><MonthCard key={m.num} m={m}/>)}
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap",padding:"14px 0",borderTop:"2px dashed #EEE",marginTop:4}}>
        {[["#42A5F5","❄️ Qış","Dekabr, Yanvar, Fevral"],
          ["#66BB6A","🌸 Bahar","Mart, Aprel, May"],
          ["#FFA726","☀️ Yay","İyun, İyul, Avqust"],
          ["#EF5350","🍁 Payız","Sentyabr, Oktyabr, Noyabr"]
        ].map(([c,s,months])=>(
          <div key={s} style={{display:"flex",alignItems:"center",gap:6,fontWeight:700,fontSize:"0.88rem"}}>
            <div style={{width:18,height:18,borderRadius:"50%",background:c,flexShrink:0}}/>
            <span>{s} — {months}</span>
          </div>
        ))}
      </div>
      <div style={S.infoBox("#6A1B9A")}>
        📌 Hər fəsildə <strong>3 ay</strong> var. 4 fəsil × 3 ay = <strong>12 ay</strong>.<br/>
        📌 <strong>Yanvar</strong> ən soyuq, <strong>İyul</strong> ən isti ay hesab olunur.<br/>
        📌 <strong>Fevral</strong> ildə ən az günlü aydır — cəmi 28 gün (bəzən 29 gün).<br/>
        📌 Azərbaycanda <strong>Novruz bayramı</strong> Martın 20–21-də — Baharın ilk günündə keçirilir! 🌸
      </div>
      <div style={S.funFact}>
        <span style={{fontSize:"1.4rem",flexShrink:0}}>💡</span>
        <span><strong>Maraqlı fakt:</strong> "Fevral" ayının adı Latın dilindən gəlir — "təmizlənmə" deməkdir. Qədim Romada bu ayda şəhəri təmizləyirdilər! 🏛️</span>
      </div>
    </div>
  );
}

function SectionHefteler() {
  return (
    <div style={{...S.card,borderLeft:"8px solid #2196F3"}}>
      <div style={S.sectionTitle("#1565C0")}>📆 Ayda neçə Həftə var?</div>
      <p style={{fontSize:"1.1rem",marginBottom:14,color:"#444"}}>
        Hər ayda təxminən <strong style={{fontSize:"1.6rem",color:"#1565C0"}}>4</strong> həftə var! 🗓️
      </p>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:14}}>
        {[1,2,3,4].map(n=>(
          <div key={n} style={{
            background:"linear-gradient(135deg,#B39DDB,#7E57C2)",
            color:"white",borderRadius:12,padding:"12px 18px",
            fontWeight:800,fontSize:"1rem",textAlign:"center",minWidth:80,
          }}>
            {n}-{n===1?"ci":n===2?"ci":"cü"}<br/>
            <span style={{fontSize:"0.65rem",opacity:0.85}}>həftə</span>
          </div>
        ))}
      </div>
      <div style={S.infoBox("#2196F3")}>
        📌 <strong>1 həftə</strong> = <strong>7 gün</strong><br/>
        📌 <strong>1 ay</strong> ≈ <strong>4 həftə</strong><br/>
        📌 <strong>1 il</strong> = <strong>52 həftə</strong><br/>
        📌 <strong>1 il</strong> = <strong>365 gün</strong> (hər 4 ildən bir 366 gün — <em>Uzun il / Keçirdi ili!</em> 🐸)<br/>
        📌 Həftənin <strong>5 günü</strong> məktəb günüdür, <strong>2 günü</strong> isə istirahətdir.
      </div>
      <div style={S.funFact}>
        <span style={{fontSize:"1.4rem",flexShrink:0}}>💡</span>
        <span><strong>Maraqlı fakt:</strong> Sən ildə təxminən <strong>185 gün</strong> məktəbə gedirsən — bu az qala yarım il deməkdir! 🎒</span>
      </div>
    </div>
  );
}

function SectionGunler() {
  return (
    <div style={{...S.card,borderLeft:"8px solid #4CAF50"}}>
      <div style={S.sectionTitle("#2E7D32")}>🗓️ Həftədə 7 Gün var!</div>
      <p style={{fontSize:"1.1rem",marginBottom:14,color:"#444"}}>
        Hər həftədə <strong style={{fontSize:"1.6rem",color:"#4CAF50"}}>7</strong> gün var:
      </p>
      <div style={S.daysGrid}>
        {DAYS.map(d=>(
          <div key={d.n} style={S.dayCard(d)}>
            <span style={{fontSize:"1.3rem",fontWeight:900,color:d.color,display:"block"}}>{d.n}</span>
            <div style={{fontSize:"0.58rem",fontWeight:800,color:d.color,lineHeight:1.3,marginTop:2}}>{d.name}</div>
            {d.rest && <div style={{fontSize:"0.55rem",marginTop:3,color:"#F57F17",fontWeight:800}}>🎉 İstirahət</div>}
          </div>
        ))}
      </div>
      <div style={S.infoBox("#4CAF50")}>
        📌 <strong>İş/Məktəb günləri:</strong> Bazar ertəsi, Çərşənbə axşamı, Çərşənbə, Cümə axşamı, Cümə 📚<br/>
        📌 <strong>İstirahət günləri:</strong> Şənbə və Bazar 🎉<br/>
        📌 <strong>Bazar ertəsi</strong> "Bazardan sonrakı gün" deməkdir — qədim vaxtlarda Bazar günü bazar qurulurdu! 🛒
      </div>
      <div style={S.funFact}>
        <span style={{fontSize:"1.4rem",flexShrink:0}}>💡</span>
        <span><strong>Yadda saxlama:</strong> <strong>B-Ç-Ç-C-C-Ş-B</strong> — Bazar ertəsi, Çərşənbə axşamı, Çərşənbə, Cümə axşamı, Cümə, Şənbə, Bazar!</span>
      </div>
    </div>
  );
}

function SectionMateriklər() {
  const [sel, setSel] = useState(null);
  return (
    <div style={{...S.card,borderLeft:"8px solid #9C27B0"}}>
      <div style={S.sectionTitle("#6A1B9A")}>🌍 Yerin 6 Materiki!</div>
      <p style={{fontSize:"1.05rem",color:"#555",marginBottom:8}}>
        Yer kürəsindəki böyük torpaq hissələrinə <strong>materik</strong> deyirik.
        Azərbaycan məktəblərində <strong style={{color:"#9C27B0",fontSize:"1.3rem"}}>6</strong> materik öyrənilir!
      </p>
      <div style={S.contGrid}>
        {CONTINENTS.map((c,i)=>(
          <div key={c.name}
            style={{...S.contCard(c.color), transform: sel===i?"translateY(-4px) scale(1.02)":"none",
              boxShadow: sel===i?"0 10px 30px rgba(0,0,0,0.4)":"0 4px 14px rgba(0,0,0,0.2)"}}
            onClick={()=>setSel(sel===i?null:i)}>
            <span style={{fontSize:"2.2rem",flexShrink:0}}>{c.emoji}</span>
            <div>
              <div style={{fontWeight:900,fontSize:"1rem"}}>{i+1}. {c.name}</div>
              <div style={{fontSize:"0.78rem",opacity:0.9,marginTop:4,lineHeight:1.4}}>{c.fact}</div>
              <div style={{marginTop:6,fontSize:"0.75rem",fontWeight:800,opacity:0.85}}>🐾 Tanınmış heyvan: {c.animal}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={S.infoBox("#9C27B0")}>
        📌 Avropa ilə Asiya arasında okean yoxdur — onlar birləşib <strong>Avrasiya</strong> adlanır!<br/>
        📌 Azərbaycan <strong>Avrasiyada</strong>, Avropa ilə Asiyanın hüdudunda yerləşir! 🇦🇿<br/>
        📌 <strong>Antarktidada</strong> həmişəlik yaşayan insan yoxdur — yalnız elmi tədqiqatçılar gedir! 🔬
      </div>
      <div style={S.funFact}>
        <span style={{fontSize:"1.4rem",flexShrink:0}}>💡</span>
        <span><strong>Maraqlı fakt:</strong> Bütün materiklər bir vaxtlar birləşmiş <em>nəhəng bir torpaq parçası</em> idi — alimler ona <strong>"Pangeya"</strong> deyir! Milyonlarla il ərzində parçalanıb ayrıldı! 🌍</span>
      </div>
    </div>
  );
}

function SectionOkeanlar() {
  return (
    <div style={{...S.card,borderLeft:"8px solid #009688"}}>
      <div style={S.sectionTitle("#00695C")}>🌊 Dünyanın 5 Okeani!</div>
      <p style={{fontSize:"1.05rem",color:"#555",marginBottom:14}}>
        Yerin böyük su hissələrinə <strong>okean</strong> deyirik. Cəmi <strong style={{color:"#009688",fontSize:"1.3rem"}}>5</strong> okean var!
      </p>
      {OCEANS.map(o=>(
        <div key={o.name} style={S.oceanItem(o.color)}>
          <span style={{fontSize:"2rem",flexShrink:0}}>{o.emoji}</span>
          <div style={{flex:1}}>
            <div style={{fontWeight:800,fontSize:"1rem",color:"#004D40"}}>
              {o.rank}. {o.name}
              <span style={{...S.chip(o.color),marginLeft:8,fontSize:"0.7rem"}}>{o.tag}</span>
            </div>
            <div style={{fontSize:"0.85rem",color:"#00695C",marginTop:4,fontWeight:600}}>{o.detail}</div>
          </div>
        </div>
      ))}
      <div style={S.infoBox("#009688")}>
        📌 Yer kürəsinin <strong>70%-i</strong> sudur — buna görə "Mavi Planet" adlanır! 💙<br/>
        📌 Ən böyük → <strong>Sakit okean</strong> 🐋 | Ən kiçik → <strong>Arktika okeanı</strong> 🧊 | Ən isti → <strong>Hind okeanı</strong> 🌡️<br/>
        📌 Bütün okeanlar bir-birinə bağlıdır — böyük bir su ailəsidirlər! 🌐
      </div>
      <div style={S.funFact}>
        <span style={{fontSize:"1.4rem",flexShrink:0}}>💡</span>
        <span><strong>Maraqlı fakt:</strong> İnsanlar hələ okeanların <strong>80%-ini</strong> kəşf etməyib! Dənizin dibindəki dünya hələ bizim üçün çox sirlidi! 🐙🔦</span>
      </div>
    </div>
  );
}

function SectionKosmos() {
  const [sel, setSel] = useState(2); // Earth selected by default

  return (
    <div>
      {/* Intro */}
      <div style={{
        background:"rgba(255,255,255,0.06)",
        border:"2px solid rgba(255,215,0,0.2)",
        borderRadius:24, padding:"22px 20px", marginBottom:20,
        backdropFilter:"blur(8px)",
      }}>
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.7rem",color:"#FFD700",marginBottom:12}}>
          🚀 Günəş Sistemi!
        </div>
        <p style={{color:"#B3E5FC",fontSize:"1rem",lineHeight:1.7,fontWeight:600}}>
          Günəş sistemimizin mərkəzindəki <strong style={{color:"#FFD700"}}>Günəş</strong> nəhəng bir ulduz kimidir. 
          Onun ətrafında <strong style={{color:"#FFD700"}}>8 planet</strong> fırlanır! 🌍
          Planetlər Günəşdən nə qədər uzaq olarsa, bir o qədər soyuq olur. 🥶
        </p>
        <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:14}}>
          {[["☀️","Günəş: Günəş sisteminin mərkəzi, nəhəng ulduz!"],
            ["🌡️","Günəşə yaxın = İsti, Günəşdən uzaq = Soyuq"],
            ["🌍","Yalnız Yer kürəsi yaşamaq üçün uyğundur!"],
            ["🌙","Bəzi planetlərin çoxlu peyki (ayı) var!"]
          ].map(([e,t])=>(
            <div key={t} style={{
              background:"rgba(255,255,255,0.08)",borderRadius:12,
              padding:"8px 14px",display:"flex",alignItems:"center",gap:8,
              color:"#E3F2FD",fontSize:"0.85rem",fontWeight:700,
            }}>
              <span style={{fontSize:"1.2rem"}}>{e}</span> {t}
            </div>
          ))}
        </div>
      </div>

      {/* Distance ruler */}
      <div style={{
        background:"rgba(255,255,255,0.06)",border:"2px solid rgba(255,255,255,0.1)",
        borderRadius:18,padding:"16px 20px",marginBottom:20,
        backdropFilter:"blur(6px)",
      }}>
        <div style={{fontFamily:"'Baloo 2',cursive",color:"#FFD700",fontSize:"1.2rem",marginBottom:12}}>
          ☀️ Günəşdən uzaqlıq sırası:
        </div>
        <div style={{display:"flex",alignItems:"center",gap:0,overflowX:"auto",paddingBottom:8}}>
          <span style={{fontSize:"1.8rem",flexShrink:0,marginRight:6}}>☀️</span>
          {PLANETS.map((p,i)=>(
            <div key={p.name} style={{display:"flex",alignItems:"center",flexShrink:0}}>
              <div style={{width:i===0?20:i*10+20,height:2,background:"rgba(255,255,255,0.2)"}}/>
              <div style={{textAlign:"center",cursor:"pointer"}} onClick={()=>setSel(i)}>
                <div style={{fontSize:i<4?"1.8rem":"1.4rem"}}>{p.funEmoji}</div>
                <div style={{color:"#90CAF9",fontSize:"0.6rem",fontWeight:800,marginTop:2}}>{p.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Planet grid */}
      <div style={S.planetGrid}>
        {PLANETS.map((p,i)=>(
          <PlanetCard key={p.name} p={p} selected={sel===i} onClick={()=>setSel(sel===i?null:i)}/>
        ))}
      </div>

      {sel!==null && <PlanetDetail p={PLANETS[sel]}/>}

      {/* Comparison table */}
      <div style={{
        background:"rgba(255,255,255,0.96)",borderRadius:20,
        padding:"20px 18px",marginTop:20,
        boxShadow:"0 8px 32px rgba(0,0,0,0.3)",
        overflowX:"auto",
      }}>
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.5rem",color:"#1A237E",marginBottom:14}}>
          📊 Planetlərin müqayisəsi
        </div>
        <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.88rem"}}>
          <thead>
            <tr style={{background:"#1A237E",color:"white"}}>
              {["Planet","Sıra","Məsafə","Orta temp.","Peyk","Həlqə?","Yaşamaq?"]
                .map(h=><th key={h} style={{padding:"10px 10px",textAlign:"left",fontWeight:800,whiteSpace:"nowrap"}}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {PLANETS.map((p,i)=>(
              <tr key={p.name}
                style={{background:i%2===0?"#F8F9FF":"white",cursor:"pointer"}}
                onClick={()=>setSel(i)}>
                <td style={{padding:"9px 10px",fontWeight:800}}>
                  {p.funEmoji} {p.name}
                </td>
                <td style={{padding:"9px 10px"}}>{p.order}.</td>
                <td style={{padding:"9px 10px",whiteSpace:"nowrap"}}>{p.distanceM}</td>
                <td style={{padding:"9px 10px",fontWeight:800,
                  color:p.tempAvg.startsWith("+")?p.tempAvg==="+462°C"?"#B71C1C":"#E65100":"#1565C0"}}>
                  {p.tempAvg}
                </td>
                <td style={{padding:"9px 10px"}}>{p.moons} 🌙</td>
                <td style={{padding:"9px 10px"}}>{p.rings?"💫 Var":"—"}</td>
                <td style={{padding:"9px 10px"}}>{p.livable?"✅ Bəli":"❌ Xeyr"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{...S.funFact,marginTop:20,background:"rgba(255,249,196,0.15)",border:"2px solid rgba(255,193,7,0.4)"}}>
        <span style={{fontSize:"1.4rem",flexShrink:0}}>💡</span>
        <span style={{color:"#FFF9C4",fontWeight:700}}>
          <strong style={{color:"#FFD700"}}>Yadda saxla:</strong> Planetlərin sırası: <strong style={{color:"#FFD700"}}>Me-Ve-Yer-Mar-Yu-Sa-U-Ne</strong> — 
          Merkuri, Venera, Yer, Mars, Yupiter, Saturn, Uran, Neptun! 🚀
        </span>
      </div>
    </div>
  );
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────

const TABS = [
  { id:"aylar",     label:"📅 Aylar" },
  { id:"hefteler",  label:"📆 Həftələr" },
  { id:"gunler",    label:"🗓️ Günlər" },
  { id:"materikler",label:"🌍 Materiklər" },
  { id:"okeanlar",  label:"🌊 Okeanlar" },
  { id:"kosmos",    label:"🚀 Kosmos" },
  { id:"test",      label:"🎯 Test" },
];

export default function App() {
  const [tab, setTab] = useState("aylar");

  return (
    <div style={S.app}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@700;800&display=swap" rel="stylesheet"/>
      <div style={S.starBg}/>
      <div style={S.wrap}>
        <div style={S.header}>
          <div style={{fontSize:"2rem",letterSpacing:5,marginBottom:8}}>⭐ 🌟 ⭐</div>
          <h1 style={S.h1}>🎒 Məktəbə Hazırlıq 🎒</h1>
          <p style={S.subtitle}>Sevimli şagird, gəl birlikdə öyrənək! 📚</p>
        </div>

        <nav style={S.nav}>
          {TABS.map(t=>(
            <button key={t.id} style={S.navBtn(tab===t.id)} onClick={()=>setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </nav>

        {tab==="aylar"      && <SectionAylar/>}
        {tab==="hefteler"   && <SectionHefteler/>}
        {tab==="gunler"     && <SectionGunler/>}
        {tab==="materikler" && <SectionMateriklər/>}
        {tab==="okeanlar"   && <SectionOkeanlar/>}
        {tab==="kosmos"     && <SectionKosmos/>}
        {tab==="test"       && (
          <div>
            <Quiz/>
          </div>
        )}
      </div>
    </div>
  );
}