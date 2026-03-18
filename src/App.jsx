import { useState, useEffect } from "react";

// ─── RESPONSIVE HOOK ───────────────────────────────────────────────────────
function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 800);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return w;
}

// ─── DATA ──────────────────────────────────────────────────────────────────
const MONTHS = [
  { num:1,  name:"Yanvar",   emoji:"❄️",  season:"winter", seasonAz:"Qış"   },
  { num:2,  name:"Fevral",   emoji:"⛄",  season:"winter", seasonAz:"Qış"   },
  { num:3,  name:"Mart",     emoji:"🌸",  season:"spring", seasonAz:"Bahar" },
  { num:4,  name:"Aprel",    emoji:"🌼",  season:"spring", seasonAz:"Bahar" },
  { num:5,  name:"May",      emoji:"🌺",  season:"spring", seasonAz:"Bahar" },
  { num:6,  name:"İyun",     emoji:"☀️",  season:"summer", seasonAz:"Yay"   },
  { num:7,  name:"İyul",     emoji:"🏖️", season:"summer", seasonAz:"Yay"   },
  { num:8,  name:"Avqust",   emoji:"🍦",  season:"summer", seasonAz:"Yay"   },
  { num:9,  name:"Sentyabr", emoji:"🍂",  season:"autumn", seasonAz:"Payız" },
  { num:10, name:"Oktyabr",  emoji:"🎃",  season:"autumn", seasonAz:"Payız" },
  { num:11, name:"Noyabr",   emoji:"🍄",  season:"autumn", seasonAz:"Payız" },
  { num:12, name:"Dekabr",   emoji:"🎄",  season:"winter", seasonAz:"Qış"   },
];

const SEASON_COLORS = {
  winter: { bg:"linear-gradient(135deg,#90CAF9,#42A5F5)", border:"#0D47A1" },
  spring: { bg:"linear-gradient(135deg,#A5D6A7,#66BB6A)", border:"#2E7D32" },
  summer: { bg:"linear-gradient(135deg,#FFCC80,#FFA726)", border:"#E65100" },
  autumn: { bg:"linear-gradient(135deg,#EF9A9A,#EF5350)", border:"#B71C1C" },
};

const DAYS = [
  { n:1, name:"Bazar ertəsi",     color:"#1565C0", bg:"linear-gradient(135deg,#E3F2FD,#BBDEFB)", border:"#1976D2" },
  { n:2, name:"Çərşənbə axşamı", color:"#6A1B9A", bg:"linear-gradient(135deg,#F3E5F5,#E1BEE7)", border:"#7B1FA2" },
  { n:3, name:"Çərşənbə",        color:"#2E7D32", bg:"linear-gradient(135deg,#E8F5E9,#C8E6C9)", border:"#388E3C" },
  { n:4, name:"Cümə axşamı",     color:"#E65100", bg:"linear-gradient(135deg,#FFF3E0,#FFE0B2)", border:"#F57C00" },
  { n:5, name:"Cümə",            color:"#880E4F", bg:"linear-gradient(135deg,#FCE4EC,#F8BBD0)", border:"#C2185B" },
  { n:6, name:"Şənbə",           color:"#004D40", bg:"linear-gradient(135deg,#E0F2F1,#B2DFDB)", border:"#00796B", rest:true },
  { n:7, name:"Bazar",           color:"#F57F17", bg:"linear-gradient(135deg,#FFF9C4,#FFF176)", border:"#F9A825", rest:true },
];

const CONTINENTS = [
  { name:"Avrasiya",       emoji:"🏔️", color:"linear-gradient(135deg,#EF6C00,#BF360C)", fact:"Ən böyük materik! Azərbaycan burada yerləşir. 🇦🇿 Avropa ilə Asiya birlikdədir.", animal:"🐻 Ayı" },
  { name:"Afrika",         emoji:"🦁", color:"linear-gradient(135deg,#2E7D32,#1B5E20)", fact:"İkinci ən böyük materik. Sahara çölü, aslanlar, zürafələr və fillər buradadır! 🐘", animal:"🦁 Aslan" },
  { name:"Şimali Amerika", emoji:"🗽", color:"linear-gradient(135deg,#1565C0,#0D47A1)", fact:"ABŞ, Kanada, Meksika bu materikdədir. Niaqara şəlaləsi buradadır! 💦", animal:"🦅 Qartal" },
  { name:"Cənubi Amerika", emoji:"🌴", color:"linear-gradient(135deg,#F9A825,#E65100)", fact:"Amazon meşəsi — dünyada ən böyük meşə — burada yerləşir! 🐍", animal:"🦜 Tutuquşu" },
  { name:"Avstraliya",     emoji:"🦘", color:"linear-gradient(135deg,#00838F,#004D40)", fact:"Həm materik, həm ölkə! Kenqurular yalnız burada yaşayır! 🐨", animal:"🦘 Kenquru" },
  { name:"Antarktida",     emoji:"🐧", color:"linear-gradient(135deg,#3949AB,#1A237E)", fact:"Ən soyuq yer! −89°C! İnsan yaşamır — yalnız pinqvinlər! 🧊", animal:"🐧 Pinqvin" },
];

const OCEANS = [
  { name:"Sakit okean",    emoji:"🐋", rank:"1", tag:"Ən böyük",  detail:"O qədər böyükdür ki, bütün qitələr onun içinə sığar!", color:"#0277BD" },
  { name:"Atlantik okean", emoji:"🚢", rank:"2", tag:"2-ci böyük",detail:"Avropa ilə Amerika arasındadır. Titanikin batdığı yer!", color:"#1565C0" },
  { name:"Hind okeanı",    emoji:"🌡️", rank:"3", tag:"Ən isti",  detail:"Asiya, Afrika və Avstraliya arasındadır. Çox isti sular!", color:"#00695C" },
  { name:"Arktika okeanı", emoji:"🧊", rank:"4", tag:"Ən kiçik",  detail:"Şimal qütbünün ətrafındadır. Ağ ayıların evi! 🐻‍❄️", color:"#283593" },
  { name:"Cənub okeanı",   emoji:"🐧", rank:"5", tag:"Ən cənub",  detail:"Antarktidanı əhatə edir. Pinqvinlər bu soyuq sularda üzür!", color:"#4A148C" },
];

const PLANETS = [
  { name:"Merkuri", order:1, distanceM:"57.9 mln km",  distanceLabel:"Günəşə ən yaxın!",       tempMax:"+430°C", tempMin:"-180°C", tempAvg:"+167°C", moons:0,   rings:false, size:"Ən kiçik planet",           livable:false, livableReason:"Çox isti+soyuq, hava yoxdur!",        bg:"linear-gradient(135deg,#757575,#424242)", fact:"Günəşin ətrafına tur etmək üçün cəmi 88 gün lazımdır! (Yer üçün 365 gün!)", funEmoji:"🌑" },
  { name:"Venera",  order:2, distanceM:"108 mln km",   distanceLabel:"Yerə ən yaxın planet!",  tempMax:"+462°C", tempMin:"+462°C", tempAvg:"+462°C", moons:0,   rings:false, size:"Yerə ən çox oxşayan ölçü",  livable:false, livableReason:"Ən isti planet! Dəmir belə əriyər!",  bg:"linear-gradient(135deg,#F9A825,#FF6F00)", fact:"Venera Günəşin ətrafını əks istiqamətdə fırlanır — tərsinə! 🔄",           funEmoji:"🌕" },
  { name:"Yer",     order:3, distanceM:"149.6 mln km", distanceLabel:"Mükəmməl məsafə!",       tempMax:"+58°C",  tempMin:"-89°C",  tempAvg:"+15°C",  moons:1,   rings:false, size:"Orta ölçülü planet",         livable:true,  livableReason:"Bizim evimiz! Su, hava, isti var! 💧", bg:"linear-gradient(135deg,#2E7D32,#1565C0)", fact:"Yerin 70%-i sudur! Kosmosdan mavi görünür — Mavi Planet! 💙",               funEmoji:"🌍" },
  { name:"Mars",    order:4, distanceM:"227 mln km",   distanceLabel:"Yerdən 2 dəfə uzaq",     tempMax:"+20°C",  tempMin:"-125°C", tempAvg:"-60°C",  moons:2,   rings:false, size:"Yerdən kiçik",               livable:false, livableReason:"Çox soyuq, hava incədir. Bəlkə gələcəkdə! 🚀", bg:"linear-gradient(135deg,#C62828,#BF360C)", fact:"Olimp dağı Yerin ən hündür dağından 3 dəfə hündürdür! ⛰️",                funEmoji:"🔴" },
  { name:"Yupiter", order:5, distanceM:"778 mln km",   distanceLabel:"Günəşdən çox uzaq",      tempMax:"-108°C", tempMin:"-145°C", tempAvg:"-110°C", moons:95,  rings:true,  size:"Ən böyük! 1300 Yer sığar!", livable:false, livableReason:"Qaz planetidir — dayanacaq yer yoxdur!", bg:"linear-gradient(135deg,#E65100,#BF360C)", fact:"Böyük Qırmızı Ləkə — 300 ildən çox davam edən nəhəng fırtına! 🌀",          funEmoji:"🟠" },
  { name:"Saturn",  order:6, distanceM:"1.4 mlrd km",  distanceLabel:"Çox-çox uzaq",            tempMax:"-130°C", tempMin:"-160°C", tempAvg:"-140°C", moons:146, rings:true,  size:"2-ci ən böyük planet",       livable:false, livableReason:"Qaz planetidir, çox soyuqdur!",        bg:"linear-gradient(135deg,#F9A825,#795548)", fact:"Saturn hovuza qoysan üzər — çox yüngüldür! 🛁 Həlqələri buzdan!",          funEmoji:"🪐" },
  { name:"Uran",    order:7, distanceM:"2.9 mlrd km",  distanceLabel:"Çox uzaq!",               tempMax:"-197°C", tempMin:"-224°C", tempAvg:"-195°C", moons:27,  rings:true,  size:"3-cü ən böyük planet",       livable:false, livableReason:"Ən soyuq planetdir!",                  bg:"linear-gradient(135deg,#006064,#01579B)", fact:"Uran yanlamasına fırlanır — elə bil yatıb fırlanır! 😴",                   funEmoji:"🔵" },
  { name:"Neptun",  order:8, distanceM:"4.5 mlrd km",  distanceLabel:"Günəşdən ən uzaq planet!",tempMax:"-200°C", tempMin:"-218°C", tempAvg:"-200°C", moons:16,  rings:true,  size:"4-cü ən böyük planet",       livable:false, livableReason:"Ən uzaq, çox soyuq!",                  bg:"linear-gradient(135deg,#283593,#1A237E)", fact:"Küləklər saatda 2100 km — Yerdəki ən güclü tufandan 10 dəfə güclü! 🌪️",   funEmoji:"🔵" },
];

const QUIZ_QUESTIONS = [
  { id:1,  topic:"📅 Aylar",   q:"1 ildə neçə ay var?",                       opts:["8","10","12","6"],                                        ans:"12" },
  { id:2,  topic:"📅 Aylar",   q:"Hansı ay Yay fəslindədir?",                 opts:["Mart","Oktyabr","İyul","Yanvar"],                         ans:"İyul" },
  { id:3,  topic:"📅 Aylar",   q:"Novruz hansı ayda keçirilir?",              opts:["Yanvar","Fevral","Mart","Aprel"],                         ans:"Mart" },
  { id:4,  topic:"📆 Həftə",   q:"Bir ayda neçə həftə var?",                  opts:["3","4","5","7"],                                          ans:"4" },
  { id:5,  topic:"📆 Həftə",   q:"1 ildə neçə həftə var?",                    opts:["42","48","52","60"],                                      ans:"52" },
  { id:6,  topic:"📆 Həftə",   q:"1 il neçə gündür?",                         opts:["300","350","365","400"],                                  ans:"365" },
  { id:7,  topic:"🗓️ Günlər", q:"Həftənin ilk günü hansıdır?",               opts:["Bazar","Cümə","Bazar ertəsi","Şənbə"],                   ans:"Bazar ertəsi" },
  { id:8,  topic:"🗓️ Günlər", q:"İstirahət günləri hansılardır?",            opts:["Cümə+Şənbə","Şənbə+Bazar","B.ert+Bazar","Cümə+Bazar"],  ans:"Şənbə+Bazar" },
  { id:9,  topic:"🗓️ Günlər", q:"Həftənin 3-cü günü hansıdır?",              opts:["Bazar ertəsi","Çərş. axşamı","Çərşənbə","Cümə axşamı"], ans:"Çərşənbə" },
  { id:10, topic:"🌍 Materik", q:"Azərbaycanda neçə materik öyrənilir?",      opts:["5","6","7","8"],                                          ans:"6" },
  { id:11, topic:"🌍 Materik", q:"Azərbaycan hansı materikdədir?",            opts:["Afrika","Avstraliya","Avrasiya","Antarktida"],            ans:"Avrasiya" },
  { id:12, topic:"🌍 Materik", q:"Kenqurular hansı materikdə yaşayır?",       opts:["Afrika","Antarktida","C.Amerika","Avstraliya"],           ans:"Avstraliya" },
  { id:13, topic:"🌊 Okean",   q:"Dünyada neçə okean var?",                   opts:["3","4","5","6"],                                          ans:"5" },
  { id:14, topic:"🌊 Okean",   q:"Ən böyük okean hansıdır?",                  opts:["Atlantik","Hind","Sakit","Arktika"],                      ans:"Sakit" },
  { id:15, topic:"🌊 Okean",   q:"Yerin neçə faizi sudur?",                   opts:["40%","50%","60%","70%"],                                  ans:"70%" },
  { id:16, topic:"🚀 Kosmos",  q:"Günəşə ən yaxın planet hansıdır?",          opts:["Venera","Yer","Merkuri","Mars"],                          ans:"Merkuri" },
  { id:17, topic:"🚀 Kosmos",  q:"Ən böyük planet hansıdır?",                 opts:["Saturn","Neptun","Yupiter","Uran"],                       ans:"Yupiter" },
  { id:18, topic:"🚀 Kosmos",  q:"Yaşamaq üçün uyğun planet hansıdır?",       opts:["Mars","Venera","Yer","Saturn"],                           ans:"Yer" },
  { id:19, topic:"🚀 Kosmos",  q:"Ən çox peyki olan planet hansıdır?",        opts:["Yupiter","Uran","Neptun","Saturn"],                       ans:"Saturn" },
  { id:20, topic:"🚀 Kosmos",  q:"Günəşdən ən uzaq planet hansıdır?",         opts:["Uran","Saturn","Neptun","Mars"],                          ans:"Neptun" },
  { id:21, topic:"💧 Sular",  q:"Okean suyu necədir?",                       opts:["Şirin","Duzlu","Soyuq","Dadlı"],                         ans:"Duzlu" },
  { id:22, topic:"💧 Sular",  q:"Hər tərəfi quru ilə əhatə olunmuş su?",    opts:["Okean","Dəniz","Göl","Çay"],                             ans:"Göl" },
  { id:23, topic:"💧 Sular",  q:"Azərbaycandan axan ən böyük çay?",         opts:["Araz","Kür","Nil","Amazon"],                             ans:"Kür" },
  { id:24, topic:"💧 Sular",  q:"Çay suyu necədir?",                        opts:["Duzlu","Şirin","Qaynar","Donmuş"],                       ans:"Şirin" },
  { id:25, topic:"💧 Sular",  q:"Azərbaycandakı dənizin adı nədir?",        opts:["Qara dəniz","Aral","Xəzər dənizi","Hind okeanı"],        ans:"Xəzər dənizi" },
  { id:26, topic:"💧 Sular",  q:"Neçə əsas su hövzəsi növü var?",           opts:["2","3","4","5"],                                         ans:"4" },
  { id:27, topic:"🇦🇿 Ölkəm", q:"Azərbaycan bayrağında neçə rəng var?",     opts:["2","3","4","5"],                                         ans:"3" },
  { id:28, topic:"🇦🇿 Ölkəm", q:"Azərbaycanın paytaxtı hansıdır?",          opts:["Gəncə","Sumqayıt","Bakı","Lənkəran"],                    ans:"Bakı" },
  { id:29, topic:"🇦🇿 Ölkəm", q:"Azərbaycanın neçə qonşusu var?",           opts:["3","4","5","6"],                                         ans:"5" },
  { id:30, topic:"🇦🇿 Ölkəm", q:"Dövlətin 3 əsas simvolu hansıdır?",        opts:["Pul+Dil+Bayraq","Bayraq+Gerb+Himn","Prezident+Gerb+Himn","Xəritə+Himn+Gerb"], ans:"Bayraq+Gerb+Himn" },
  { id:31, topic:"🇦🇿 Ölkəm", q:"Azərbaycan bayrağının rəngləri?",          opts:["Sarı-Qırmızı-Yaşıl","Mavi-Qırmızı-Yaşıl","Ağ-Mavi-Qırmızı","Qırmızı-Sarı-Yaşıl"], ans:"Mavi-Qırmızı-Yaşıl" },
  { id:32, topic:"🇦🇿 Ölkəm", q:"Sərhədi keçmək üçün nə lazımdır?",        opts:["Pul","Pasport","Bilet","Telefon"],                        ans:"Pasport" },
];

// ─── WATER & COUNTRY DATA ───────────────────────────────────────────────────
const WATER_TYPES = [
  {
    id:"ocean", icon:"🌊", name:"Okean", tag:"Ən böyük", color:"#0277BD",
    short:"Yer kürəsinin ən böyük su hissəsidir.",
    facts:[
      "Dünyada 5 okean var: Sakit, Atlantik, Hind, Arktika, Cənub.",
      "Okean suyu duzludur — içmək olmaz! 🧂",
      "Ən dərin yer Mariana çuxurudur — 11 km dərindir! 🕳️",
      "Okean o qədər böyükdür ki, bütün qitələr içinə sığar.",
      "Hər növ balıq, balina, ahtapot okeanda yaşayır. 🐋",
    ],
    salt:"Duzlu 🧂", move:"Az hərəkət 🌊", size:"Ən böyük 🌍", local:"Bizdə yoxdur ❌",
    diff:"Ən böyük su kütləsidir. Duzlu, dərin, qurudan kənarda olur.",
  },
  {
    id:"sea", icon:"🐟", name:"Dəniz", tag:"Duzlu su", color:"#006a6a",
    short:"Okeanın quruya bitişik olan hissəsidir.",
    facts:[
      "Dəniz okeanın bir parçasıdır — amma daha kiçikdir.",
      "Dəniz suyu da duzludur. 🧂",
      "Azərbaycanda Xəzər dənizi var — dünyanın ən böyük qapalı dənizi! 🇦🇿",
      "Dənizdə balıqlar, delfin, meduzalar yaşayır. 🐬",
      "Gəmilər dənizdən keçir, ticarət aparılır. 🚢",
    ],
    salt:"Duzlu 🧂", move:"Az hərəkət 🌊", size:"Böyük 🗺️", local:"Xəzər dənizi ✅",
    diff:"Okeanın bir hissəsidir, quruya yaxın olur. Okeandan kiçikdir.",
  },
  {
    id:"lake", icon:"🏞️", name:"Göl", tag:"Sakit su", color:"#1a7a30",
    short:"Hər tərəfi torpaqla əhatə olunmuş sakit su hövzəsidir.",
    facts:[
      "Gölün hər tərəfini quru torpaq əhatə edir — axmır, dayanır.",
      "Göl şirin (içilən) ya da duzlu ola bilər. 💧",
      "Azərbaycanda Mingəçevir su anbarı ən böyük gölümüzdür. 🇦🇿",
      "Göllər içməli su, balıq və istirahət üçün vacibdir. 🎣",
      "Dünyanın ən böyük şirin su gölü Baykal gölüdür. 🌊",
    ],
    salt:"Şirin 💧", move:"Axmır 🏞️", size:"Orta ölçülü", local:"Mingəçevir ✅",
    diff:"Hər tərəfindən quru ilə əhatə olunur, axmır. Çaydən fərqli olaraq sakit durur.",
  },
  {
    id:"river", icon:"🏔️", name:"Çay", tag:"Axan su", color:"#6a2fa0",
    short:"Daim hərəkət edən, axan şirin su axınıdır.",
    facts:[
      "Çay dağdan başlayır, axır-axır dənizə ya gölə çatır. 🏔️➡️🌊",
      "Çay suyu şirindir — içmək, suvarma üçün istifadə olunur. 💧",
      "Azərbaycanda ən böyük çay Kür çayıdır (1515 km!). 🇦🇿",
      "Torpaq suvarılır — meyvə, tərəvəz böyüyür. 🌽",
      "Amazon, Nil, Kür — dünyanın tanınmış çaylarıdır. 🌍",
    ],
    salt:"Şirin 💧", move:"Axır ➡️", size:"Uzun, dar", local:"Kür çayı ✅",
    diff:"Daim axır, başlanğıcı dağ ya bulaq, sonu isə dəniz ya göldür.",
  },
];

const WATER_BENEFITS = [
  {icon:"🐟", text:"Balıq verir — yeyirik, sağlam oluruq!"},
  {icon:"💧", text:"İçməli su mənbəyidir."},
  {icon:"🌱", text:"Bitkilər suvarılır, meyvə yetişir."},
  {icon:"🚢", text:"Gəmilər mal daşıyır."},
  {icon:"☁️", text:"Buludlar yaranır, yağış yağır."},
  {icon:"⚡", text:"Su elektrik enerjisi verir (HES)."},
  {icon:"🏊", text:"İnsanlar üzür, istirahət edir."},
];

const WATER_HARMS = [
  {icon:"🌊", text:"Daşqın — evləri su basır, zərər verir."},
  {icon:"⚠️", text:"Nəzarətsiz suya düşmə təhlükəsi var."},
  {icon:"🦠", text:"Çirkab suda mikroblar yaranır."},
  {icon:"🌡️", text:"İqlim dəyişir, quraqlıq yarana bilər."},
  {icon:"🐢", text:"Zibil suları çirkləndirir."},
  {icon:"🌀", text:"Fırtına dalğaları böyük zərər verir."},
];

const AZ_NEIGHBOURS = [
  {flag:"", name:"Rusiya",     bg:"#ffeaea", color:"#8a0000"},
  {flag:"", name:"Gürcüstan",  bg:"#fff6e0", color:"#7a5000"},
  {flag:"", name:"Ermənistan", bg:"#f0e8ff", color:"#4a1a80"},
  {flag:"", name:"İran",       bg:"#e8f5e8", color:"#1a5a1a"},
  {flag:"", name:"Türkiyə",    bg:"#fff0e6", color:"#8a3300"},
];

const AZ_FACTS = [
  "Azərbaycan 'Odlar yurdu' adlanır — səbəbi yanan təbii qaz mənbələri ilə məşhur olmasıdır. 🔥",
  "Bakı — Azərbaycanın paytaxtı və ən böyük şəhəridir. 🌆",
  "Xəzər dənizi — dünyanın ən böyük gölüdür. 🌊",
  "Azərbaycan Qafqazın ən böyük ölkəsidir! 🏆",
];

// Star polygon helper for flag SVG
function starPts(cx, cy, R, r, n=8) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const radius = i % 2 === 0 ? R : r;
    const angle = (Math.PI / n) * i - Math.PI / 2;
    pts.push(`${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`);
  }
  return pts.join(" ");
}

// ─── MODERN GLOBAL CSS ─────────────────────────────────────────────────────────────
const GlobalStyle = () => (
  <style>{`
    *{box-sizing:border-box;margin:0;padding:0;}
    body{overflow-x:hidden;}
    .app{
      font-family:'Inter','Nunito',sans-serif;
      min-height:100vh;
      background: linear-gradient(145deg, #0f172a 0%, #1e293b 50%, #0b1e33 100%);
      padding-bottom:40px;
      overflow-x:hidden;
    }
    .star-bg{
      position:fixed;
      top:0;left:0;right:0;bottom:0;
      background-image: 
        radial-gradient(2px 2px at 20px 30px, #ffffff22, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 40px 70px, #ffd70033, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 80px 120px, #90caf955, rgba(0,0,0,0)),
        radial-gradient(3px 3px at 160px 200px, #ffffff33, rgba(0,0,0,0));
      background-repeat: repeat;
      background-size: 200px 200px;
      pointer-events: none;
      z-index:0;
    }
    .wrap{position:relative;z-index:1;max-width:1200px;margin:0 auto;padding:0 16px;}
    .app-header{
      text-align:center;
      padding:35px 14px 20px;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(12px);
      border-radius: 48px 48px 24px 24px;
      margin-bottom: 25px;
      border: 1px solid rgba(255,215,0,0.3);
      box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
    }
    .app-h1{
      font-family:'Baloo 2',cursive;
      font-size:clamp(2.2rem,8vw,4rem);
      background: linear-gradient(135deg, #FFD700, #FFA500, #FF69B4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 10px 20px rgba(255,215,0,0.3);
      line-height:1.2;
      letter-spacing: -1px;
    }
    .app-sub{
      color: #E0F2FE;
      font-weight:600;
      font-size:1rem;
      margin-top:8px;
      opacity:0.9;
    }
    .nav{
      display:flex;
      gap:8px;
      flex-wrap:wrap;
      justify-content:center;
      padding:5px 0 25px;
    }
    .nav-btn{
      border-radius:40px;
      padding:10px 18px;
      font-size:0.9rem;
      font-weight:700;
      cursor:pointer;
      transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      font-family:'Inter','Nunito',sans-serif;
      white-space:nowrap;
      border: 1px solid rgba(255,255,255,0.1);
      backdrop-filter: blur(4px);
      letter-spacing: 0.3px;
    }
    .nav-btn:hover{
      transform: translateY(-2px);
      box-shadow: 0 10px 20px -5px rgba(255,215,0,0.3);
    }
    .card{
      background: rgba(255,255,255,0.98);
      backdrop-filter: blur(10px);
      border-radius:32px;
      padding:28px 24px;
      margin-bottom:25px;
      box-shadow: 
        0 25px 50px -12px rgba(0,0,0,0.25),
        inset 0 1px 2px rgba(255,255,255,0.6);
      border: 1px solid rgba(255,255,255,0.3);
    }
    .sec-title{
      font-family:'Baloo 2',cursive;
      font-size:clamp(1.3rem,4vw,1.9rem);
      display:flex;
      align-items:center;
      gap:12px;
      flex-wrap:wrap;
      margin-bottom:20px;
      background: linear-gradient(135deg, #1a237e, #283593);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .months-grid{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:12px;
      margin:20px 0;
    }
    @media(max-width:480px){.months-grid{grid-template-columns:repeat(3,1fr);gap:8px;}}
    .month-card{
      border-radius:20px;
      padding:12px 5px;
      text-align:center;
      transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border:3px solid transparent;
    }
    .month-card:hover{
      transform:translateY(-5px) scale(1.02);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
    }
    .days-grid{
      display:grid;
      grid-template-columns:repeat(7,1fr);
      gap:8px;
      margin:20px 0;
    }
    @media(max-width:560px){.days-grid{grid-template-columns:repeat(4,1fr);gap:6px;}}
    .day-card{
      border-radius:16px;
      padding:12px 5px;
      text-align:center;
      border:2px solid;
      transition: all 0.2s;
    }
    .day-card:hover{transform: translateY(-3px);}
    .cont-grid{
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(260px,1fr));
      gap:12px;
      margin:20px 0;
    }
    .cont-card{
      border-radius:24px;
      padding:18px 16px;
      display:flex;
      align-items:flex-start;
      gap:14px;
      color:white;
      text-shadow:1px 1px 2px rgba(0,0,0,0.4);
      box-shadow:0 8px 20px rgba(0,0,0,0.25);
      cursor:pointer;
      transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(255,255,255,0.2);
    }
    .cont-card:hover{
      transform:translateY(-6px);
      box-shadow:0 20px 30px -8px rgba(0,0,0,0.4);
    }
    @keyframes fadeIn{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);}}
    .planet-grid{
      display:grid;
      grid-template-columns:repeat(auto-fill,minmax(170px,1fr));
      gap:14px;
      margin:20px 0;
    }
    .planet-card{
      border-radius:24px;
      padding:18px 14px;
      color:white;
      cursor:pointer;
      transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-shadow:1px 1px 3px rgba(0,0,0,0.5);
      border:3px solid transparent;
    }
    .planet-card:hover{
      transform:translateY(-6px);
      box-shadow:0 25px 30px -10px rgba(0,0,0,0.4);
    }
    .planet-detail{
      background: linear-gradient(145deg, #0f2b4f, #1a3f6a);
      border-radius:32px;
      padding:24px 22px;
      color:white;
      margin-top:20px;
      border:1px solid rgba(255,215,0,0.2);
      box-shadow:0 20px 40px -15px rgba(0,0,0,0.5);
    }
    .stat-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:14px;
      margin-bottom:18px;
    }
    @media(max-width:480px){.stat-grid{grid-template-columns:repeat(2,1fr);}}
    .table-scroll{
      overflow-x:auto;
      -webkit-overflow-scrolling:touch;
      border-radius:20px;
      background: white;
      box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
    }
    .planet-table{
      width:100%;
      border-collapse:collapse;
      font-size:0.9rem;
      min-width:520px;
    }
    .planet-table th{
      background: linear-gradient(135deg, #1a237e, #283593);
      color:white;
      padding:14px 12px;
      text-align:left;
      font-weight:700;
      white-space:nowrap;
    }
    .planet-table td{
      padding:12px 12px;
      white-space:nowrap;
      border-bottom: 1px solid #eef2f6;
    }
    .planet-table tr{transition: all 0.2s; cursor:pointer;}
    .planet-table tr:hover td{background:#f8faff;}
    .quiz-wrap{
      background: linear-gradient(145deg, #0f172a, #1a1f3a);
      border-radius:40px;
      padding:28px 24px;
      border:1px solid rgba(255,215,0,0.3);
      box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);
    }
    .quiz-card{
      background: rgba(255,255,255,0.98);
      border-radius:24px;
      padding:22px 20px 18px;
      margin-bottom:18px;
      position:relative;
      border:1px solid #eef2f6;
    }
    .quiz-opts{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:10px;
    }
    .opt-btn{
      border-radius:16px;
      padding:12px 10px;
      font-size:0.95rem;
      font-weight:600;
      cursor:pointer;
      font-family:'Inter','Nunito',sans-serif;
      text-align:center;
      transition:all 0.2s;
      width:100%;
      border:2px solid;
    }
    .opt-btn:not(:disabled):hover{
      opacity:0.9;
      transform:scale(1.02);
    }
    .ocean-item{
      display:flex;
      align-items:center;
      gap:14px;
      border-radius:20px;
      padding:14px 18px;
      margin-bottom:10px;
      border:2px solid;
      transition: all 0.2s;
    }
    .ocean-item:hover{transform: translateX(5px);}
    .water-card{
      background: white;
      border-radius: 24px;
      padding: 18px;
      margin-bottom: 12px;
      cursor: pointer;
      transition: all 0.3s;
      border: 2px solid transparent;
    }
    .water-card:hover{
      transform: translateY(-3px);
      box-shadow: 0 15px 30px -10px rgba(0,0,0,0.2);
    }
    .water-bh-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:20px;
    }
    @media(max-width:520px){.water-bh-grid{grid-template-columns:1fr;}}
    .attr3-grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:16px;
      margin-bottom:20px;
    }
    @media(max-width:480px){.attr3-grid{grid-template-columns:1fr;}}
    .country-intro-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:18px;
      margin-bottom:20px;
    }
    @media(max-width:480px){.country-intro-grid{grid-template-columns:1fr;}}
    .info-box{
      background:#F8FAFC;
      border-radius:24px;
      padding:16px 22px;
      margin:18px 0;
      font-size:0.95rem;
      color:#1e293b;
      line-height:1.8;
      border-left:8px solid #CCC;
    }
    .fun-fact{
      background: linear-gradient(135deg,#FFFBEB,#FEF3C7);
      border:2px solid #FBBF24;
      border-radius:24px;
      padding:16px 20px;
      margin-top:16px;
      font-size:0.95rem;
      color:#92400E;
      display:flex;
      align-items:flex-start;
      gap:12px;
    }
    .weeks-row{
      display:flex;
      gap:12px;
      flex-wrap:wrap;
      margin:18px 0;
      justify-content:center;
    }
    .season-legend{
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
      gap:14px;
      padding-top:18px;
      margin-top:12px;
      border-top:2px dashed #E2E8F0;
    }
    .legend-item{
      display:flex;
      align-items:center;
      gap:8px;
      font-weight:600;
      font-size:0.9rem;
    }
    .ruler-scroll{
      overflow-x:auto;
      -webkit-overflow-scrolling:touch;
      padding-bottom:10px;
    }
    .ruler-inner{
      display:flex;
      align-items:center;
      min-width:max-content;
      padding:5px 0;
    }
    .topic-filter{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
      justify-content:center;
      margin-bottom:25px;
    }
    .chip{
      background:rgba(255,255,255,0.15);
      color:white;
      border-radius:40px;
      padding:4px 12px;
      font-size:0.75rem;
      font-weight:600;
      display:inline-block;
      margin:2px 2px 0 0;
      backdrop-filter: blur(4px);
    }
    .info-chips{
      display:flex;
      flex-wrap:wrap;
      gap:12px;
      margin-top:16px;
    }
    .info-chip{
      background:rgba(255,255,255,0.08);
      border-radius:40px;
      padding:8px 16px;
      display:flex;
      align-items:center;
      gap:8px;
      color:#E2F0FA;
      font-size:0.85rem;
      font-weight:500;
      backdrop-filter: blur(4px);
      border:1px solid rgba(255,255,255,0.1);
    }
    .scroll-hint{
      font-size:0.8rem;
      color:#90CAF9;
      text-align:center;
      margin-bottom:8px;
    }
    .glow-text{
      text-shadow: 0 0 20px rgba(255,215,0,0.3);
    }
    .stat-card{
      background: rgba(255,255,255,0.1);
      border-radius: 20px;
      padding: 14px;
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.3s;
    }
    .stat-card:hover{
      transform: translateY(-2px);
      background: rgba(255,255,255,0.15);
    }
  `}</style>
);

// ─── SMALL COMPONENTS ──────────────────────────────────────────────────────
const FunFact = ({ text }) => (
  <div className="fun-fact">
    <span style={{fontSize:"1.5rem",flexShrink:0}}>✨</span>
    <span><strong>Maraqlı fakt:</strong> {text}</span>
  </div>
);

const InfoBox = ({ color="#CCC", children }) => (
  <div className="info-box" style={{borderLeftColor:color}}>{children}</div>
);

const Chip = ({ children, bg }) => (
  <span className="chip" style={bg?{background:bg}:{}}>{children}</span>
);

function StatBox({ icon, label, value, valueColor }) {
  return (
    <div className="stat-card">
      <div style={{fontSize:"1.3rem",marginBottom:4}}>{icon}</div>
      <div style={{color:"#90CAF9",fontSize:"0.7rem",fontWeight:600,marginTop:2}}>{label}</div>
      <div style={{color:valueColor||"white",fontWeight:800,fontSize:"1rem",marginTop:2}}>{value}</div>
    </div>
  );
}

function PlanetDetail({ p }) {
  const tc = p.tempAvg.startsWith("+") ? "#FF7043" : "#42A5F5";
  return (
    <div className="planet-detail">
      <div style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",marginBottom:20}}>
        <span style={{fontSize:"3.5rem"}}>{p.funEmoji}</span>
        <div>
          <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"clamp(1.6rem,4vw,2.2rem)",background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{p.name}</div>
          <div style={{color:"#90CAF9",fontWeight:600,fontSize:"0.9rem"}}>{p.order}. planet · {p.distanceLabel}</div>
        </div>
      </div>
      <div className="stat-grid">
        <StatBox icon="🌡️" label="Orta temp." value={p.tempAvg} valueColor={tc}/>
        <StatBox icon="🔥" label="Maks." value={p.tempMax} valueColor="#FF7043"/>
        <StatBox icon="🥶" label="Min." value={p.tempMin} valueColor="#42A5F5"/>
        <StatBox icon="🌙" label="Peyk sayı" value={p.moons} valueColor="#FFD700"/>
        <StatBox icon="📏" label="Məsafə" value={p.distanceM} valueColor="#CE93D8"/>
        <StatBox icon="📐" label="Ölçü" value={p.size} valueColor="#80CBC4"/>
      </div>
      <div style={{
        background:p.livable?"linear-gradient(135deg,#2E7D32,#1B5E20)":"linear-gradient(135deg,#B71C1C,#8B0000)",
        borderRadius:20,
        padding:"16px 20px",
        marginBottom:16,
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:"1.5rem"}}>{p.livable?"✅":"❌"}</span>
          <span style={{fontWeight:700,color:"white",fontSize:"1rem"}}>
            {p.livable?"Yaşamaq üçün uyğundur!":"Yaşamaq üçün uyğun deyil!"}
          </span>
        </div>
        <div style={{color:"rgba(255,255,255,0.9)",fontSize:"0.9rem",marginTop:8}}>{p.livableReason}</div>
      </div>
      <div style={{background:"rgba(255,215,0,0.1)",borderRadius:16,padding:"16px 20px",border:"1px solid rgba(255,215,0,0.3)"}}>
        <span style={{fontSize:"1.2rem",marginRight:8}}>💡</span>
        <span style={{color:"#FFF9C4",fontWeight:500,fontSize:"0.95rem"}}>{p.fact}</span>
      </div>
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

  const handleAnswer = (qid, opt) => {
    if (answers[qid]) return;
    const q = filtered.find(x=>x.id===qid);
    setAnswers(prev=>({...prev,[qid]:{chosen:opt,correct:opt===q.ans}}));
  };

  const answered = Object.keys(answers).length;
  const score = Object.values(answers).filter(a=>a.correct).length;

  const getResult = () => {
    const n = filtered.length, s = score;
    if(s===n) return {emoji:"🏆",text:`${s}/${n} — Mükəmməl!`,stars:"⭐⭐⭐⭐⭐",msg:"Heç bir sual səni çaşdırmadı! Sən dahisən! 🌟"};
    if(s>=n*0.8) return {emoji:"🥇",text:`${s}/${n} — Əla!`,stars:"⭐⭐⭐⭐",msg:"Çox yaxşı! Az qaldı mükəmməl! 💪"};
    if(s>=n*0.6) return {emoji:"🥈",text:`${s}/${n} — Yaxşı!`,stars:"⭐⭐⭐",msg:"Yaxşı nəticə! Daha çox oxu! 📚"};
    if(s>=n*0.4) return {emoji:"🥉",text:`${s}/${n} — Orta`,stars:"⭐⭐",msg:"Qorxma! Dərsləri yenidən oxu! 🔄"};
    return {emoji:"📚",text:`${s}/${n} — Davam et!`,stars:"⭐",msg:"Yenidən cəhd et — sən bacararssan! 🌈"};
  };

  const fb = ["🎉 Bravo!","⭐ Əfərin!","🌟 Çox yaxşı!","👏 Düzgün!"];

  return (
    <div className="quiz-wrap">
      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"clamp(1.8rem,5vw,2.5rem)",background:"linear-gradient(135deg,#FFD700,#FFA500)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>🎯 Test Vaxtı! 🎯</div>
        <div style={{color:"#90CAF9",fontWeight:600,fontSize:"0.95rem",marginTop:5}}>Cəmi {QUIZ_QUESTIONS.length} sual!</div>
      </div>

      <div className="topic-filter">
        {topics.map(t=>(
          <button key={t} onClick={()=>{setFilter(t);setAnswers({});setShowResult(false);}} style={{
            background:filter===t?"#FFD700":"rgba(255,255,255,0.1)",
            color:filter===t?"#1A237E":"#E3F2FD",
            border:`2px solid ${filter===t?"#FFC107":"rgba(255,255,255,0.2)"}`,
            borderRadius:40,
            padding:"8px 16px",
            fontSize:"0.85rem",
            fontWeight:600,
            cursor:"pointer",
            fontFamily:"'Inter',sans-serif",
            whiteSpace:"nowrap",
            transition:"all 0.2s"
          }}>{t==="all"?"🎯 Hamısı":t}</button>
        ))}
      </div>

      <div style={{color:"#FFD700",fontWeight:600,textAlign:"center",fontSize:"0.95rem",marginBottom:8}}>
        {answered} / {filtered.length} sual cavablandı
      </div>
      <div style={{background:"rgba(255,255,255,0.15)",borderRadius:40,height:12,overflow:"hidden",marginBottom:20}}>
        <div style={{width:`${filtered.length?(answered/filtered.length*100):0}%`,height:"100%",borderRadius:40,background:"linear-gradient(90deg,#FFD700,#FF4500)",transition:"width 0.4s"}}/>
      </div>

      {filtered.map((q,i)=>{
        const a = answers[q.id];
        return (
          <div key={q.id} className="quiz-card">
            <div style={{position:"absolute",top:-12,left:16,background:"#FFD700",color:"#1A237E",fontWeight:700,fontSize:"0.8rem",padding:"4px 16px",borderRadius:40}}>Sual {i+1}</div>
            <div style={{position:"absolute",top:-12,right:16,background:"#f1f5f9",color:"#475569",fontWeight:600,fontSize:"0.7rem",padding:"4px 12px",borderRadius:40,border:"1px solid #cbd5e1"}}>{q.topic}</div>
            <div style={{fontWeight:700,fontSize:"1.05rem",color:"#0f172a",paddingTop:15,marginBottom:16,lineHeight:1.5}}>{q.q}</div>
            <div className="quiz-opts">
              {q.opts.map(opt=>{
                const isCor = opt===q.ans, isCho = a?.chosen===opt;
                let bg="#f8fafc",bc="#cbd5e1",col="#0f172a";
                if(a){ if(isCor){bg="#dcfce7";bc="#16a34a";col="#166534";} else if(isCho){bg="#fee2e2";bc="#dc2626";col="#991b1b";} }
                return (
                  <button key={opt} disabled={!!a} className="opt-btn"
                    style={{background:bg,borderColor:bc,color:col,cursor:a?"default":"pointer"}}
                    onClick={()=>handleAnswer(q.id,opt)}>
                    {a&&isCor?"✅ ":""}{a&&isCho&&!a.correct?"❌ ":""}{opt}
                  </button>
                );
              })}
            </div>
            {a && (
              <div style={{marginTop:12,padding:"10px 14px",borderRadius:12,textAlign:"center",fontWeight:600,fontSize:"0.95rem",background:a.correct?"#dcfce7":"#fee2e2",color:a.correct?"#166534":"#991b1b"}}>
                {a.correct ? fb[q.id%4] : `😊 Düzgün cavab: ${q.ans}`}
              </div>
            )}
          </div>
        );
      })}

      <button onClick={()=>setShowResult(true)} style={{display:"block",width:"100%",background:"linear-gradient(135deg,#FFD700,#FFA500)",color:"#1A237E",border:"none",borderRadius:24,padding:"16px",fontSize:"1.1rem",fontWeight:700,fontFamily:"'Inter',sans-serif",cursor:"pointer",boxShadow:"0 10px 30px -5px rgba(255,215,0,0.4)",marginTop:8}}>
        🏆 Nəticəmi göstər!
      </button>

      {showResult && (()=>{
        const r = getResult();
        return (
          <div style={{background:"white",borderRadius:32,padding:24,marginTop:20,textAlign:"center",border:"1px solid #eef2f6"}}>
            <div style={{fontSize:"3.5rem"}}>{r.emoji}</div>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.8rem",color:"#1a237e",margin:"10px 0"}}>{r.text}</div>
            <div style={{fontSize:"1.8rem",letterSpacing:4,marginBottom:10}}>{r.stars}</div>
            <div style={{fontWeight:500,color:"#475569",marginBottom:16,fontSize:"1rem"}}>{r.msg}</div>
            <button onClick={()=>{setAnswers({});setShowResult(false);}} style={{background:"#f1f5f9",color:"#1e293b",border:"2px solid #cbd5e1",borderRadius:20,padding:"10px 24px",fontSize:"1rem",fontWeight:600,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all 0.2s"}}>
              🔄 Yenidən cəhd et!
            </button>
          </div>
        );
      })()}
    </div>
  );
}

// ─── SECTIONS ──────────────────────────────────────────────────────────────
function SectionAylar() {
  return (
    <div className="card">
      <div className="sec-title">📅 1 ildə 12 AY var!</div>
      <div className="months-grid">
        {MONTHS.map(m=>(
          <div key={m.num} className="month-card" style={{background:SEASON_COLORS[m.season].bg,border:`3px solid ${SEASON_COLORS[m.season].border}`}}>
            <div style={{fontSize:"0.6rem",fontWeight:600,color:"rgba(255,255,255,0.9)"}}>{m.num}-ci ay</div>
            <div style={{fontSize:"2rem",margin:"4px 0"}}>{m.emoji}</div>
            <div style={{fontSize:"0.9rem",fontWeight:800,color:"white",textShadow:"1px 1px 2px rgba(0,0,0,0.3)"}}>{m.name}</div>
            <div style={{fontSize:"0.6rem",fontWeight:600,color:"rgba(255,255,255,0.95)",background:"rgba(0,0,0,0.2)",borderRadius:30,padding:"2px 8px",marginTop:4,display:"inline-block"}}>{m.seasonAz}</div>
          </div>
        ))}
      </div>
      <div className="season-legend">
        {[["#42A5F5","❄️ Qış","Dekabr, Yanvar, Fevral"],["#66BB6A","🌸 Bahar","Mart, Aprel, May"],
          ["#FFA726","☀️ Yay","İyun, İyul, Avqust"],["#EF5350","🍁 Payız","Sentyabr, Oktyabr, Noyabr"]
        ].map(([c,s,m])=>(
          <div key={s} className="legend-item">
            <div style={{width:16,height:16,borderRadius:"50%",background:c,flexShrink:0}}/>
            <span>{s} — {m}</span>
          </div>
        ))}
      </div>
      <InfoBox color="#6A1B9A">
        📌 Hər fəsildə <strong>3 ay</strong> var. 4 fəsil × 3 ay = <strong>12 ay</strong>.<br/>
        📌 <strong>Yanvar</strong> ən soyuq, <strong>İyul</strong> ən isti ay hesab olunur.<br/>
        📌 <strong>Fevral</strong> ən az günlü aydır — cəmi 28 gün (bəzən 29 gün).<br/>
        📌 <strong>Novruz bayramı</strong> Martın 20–21-də keçirilir! 🌸
      </InfoBox>
      <FunFact text='"Fevral" ayının adı Latın dilindən gəlir — "təmizlənmə" deməkdir. Qədim Romada bu ayda şəhəri təmizləyirdilər! 🏛️'/>
    </div>
  );
}

function SectionHefteler() {
  return (
    <div className="card">
      <div className="sec-title">📆 Ayda neçə Həftə var?</div>
      <p style={{fontSize:"1.1rem",color:"#1e293b",marginBottom:15}}>Hər ayda təxminən <strong style={{fontSize:"1.8rem",color:"#1565C0"}}>4</strong> həftə var! 🗓️</p>
      <div className="weeks-row">
        {[1,2,3,4].map(n=>(
          <div key={n} style={{background:"linear-gradient(135deg,#7E57C2,#5E35B1)",color:"white",borderRadius:16,padding:"12px 20px",fontWeight:700,fontSize:"1rem",textAlign:"center",minWidth:80,boxShadow:"0 8px 16px -4px rgba(0,0,0,0.2)"}}>
            {n}-{n<=2?"ci":"cü"}<br/><span style={{fontSize:"0.7rem",opacity:0.9}}>həftə</span>
          </div>
        ))}
      </div>
      <InfoBox color="#2196F3">
        📌 <strong>1 həftə</strong> = <strong>7 gün</strong><br/>
        📌 <strong>1 ay</strong> ≈ <strong>4 həftə</strong><br/>
        📌 <strong>1 il</strong> = <strong>52 həftə</strong> = <strong>365 gün</strong><br/>
        📌 Hər 4 ildən bir 366 gün — <em>Uzun il / Keçirdi ili!</em> 🐸<br/>
        📌 Həftənin <strong>5 günü</strong> məktəb, <strong>2 günü</strong> istirahətdir.
      </InfoBox>
      <FunFact text="Sən ildə təxminən 185 gün məktəbə gedirsən — bu az qala yarım il deməkdir! 🎒"/>
    </div>
  );
}

function SectionGunler() {
  return (
    <div className="card">
      <div className="sec-title">🗓️ Həftədə 7 Gün var!</div>
      <p style={{fontSize:"1.1rem",color:"#1e293b",marginBottom:15}}>Hər həftədə <strong style={{fontSize:"1.8rem",color:"#4CAF50"}}>7</strong> gün var:</p>
      <div className="days-grid">
        {DAYS.map(d=>(
          <div key={d.n} className="day-card" style={{background:d.bg,borderColor:d.border,outline:d.rest?"3px solid #FFD700":"none"}}>
            <span style={{fontSize:"1.2rem",fontWeight:800,color:d.color,display:"block"}}>{d.n}</span>
            <div style={{fontSize:"0.6rem",fontWeight:600,color:d.color,lineHeight:1.4,marginTop:2}}>{d.name}</div>
            {d.rest&&<div style={{fontSize:"0.55rem",marginTop:2,color:"#F57F17",fontWeight:700}}>🎉</div>}
          </div>
        ))}
      </div>
      <InfoBox color="#4CAF50">
        📌 <strong>İş günləri:</strong> Bazar ertəsi, Çərşənbə axşamı, Çərşənbə, Cümə axşamı, Cümə 📚<br/>
        📌 <strong>İstirahət:</strong> Şənbə və Bazar 🎉<br/>
        📌 <strong>Bazar ertəsi</strong> — "Bazardan sonrakı gün" deməkdir! 🛒
      </InfoBox>
      <FunFact text="Yadda saxlama: B-Ç-Ç-C-C-Ş-B — Bazar ertəsi, Çərşənbə axşamı, Çərşənbə, Cümə axşamı, Cümə, Şənbə, Bazar!"/>
    </div>
  );
}

function SectionMateriklər() {
  const [sel, setSel] = useState(null);
  return (
    <div className="card">
      <div className="sec-title">🌍 Yerin 6 Materiki!</div>
      <p style={{fontSize:"1rem",color:"#1e293b",marginBottom:15}}>
        Böyük torpaq hissələrinə <strong>materik</strong> deyirik. Azərbaycan məktəblərində <strong style={{color:"#9C27B0",fontSize:"1.3rem"}}>6</strong> materik öyrənilir!
      </p>
      <div className="cont-grid">
        {CONTINENTS.map((c,i)=>(
          <div key={c.name} className="cont-card"
            style={{background:c.color}}
            onClick={()=>setSel(sel===i?null:i)}>
            <span style={{fontSize:"2.2rem",flexShrink:0}}>{c.emoji}</span>
            <div>
              <div style={{fontWeight:800,fontSize:"1rem"}}>{i+1}. {c.name}</div>
              <div style={{fontSize:"0.8rem",opacity:0.95,marginTop:4,lineHeight:1.5}}>{c.fact}</div>
              <div style={{fontSize:"0.75rem",fontWeight:600,opacity:0.9,marginTop:6}}>🐾 {c.animal}</div>
            </div>
          </div>
        ))}
      </div>
      <InfoBox color="#9C27B0">
        📌 Avropa+Asiya birləşib <strong>Avrasiya</strong> adlanır — aralarında okean yoxdur!<br/>
        📌 Azərbaycan <strong>Avrasiyada</strong>, Avropa ilə Asiyanın hüdudunda! 🇦🇿<br/>
        📌 <strong>Antarktidada</strong> daimi sakin yoxdur — yalnız elmi tədqiqatçılar! 🔬
      </InfoBox>
      <FunFact text='Bütün materiklər bir vaxtlar "Pangeya" adlanan nəhəng bir torpaq idi! Milyonlarla il ərzində parçalanıb ayrıldı! 🌍'/>
    </div>
  );
}

function SectionOkeanlar() {
  return (
    <div className="card">
      <div className="sec-title">🌊 Dünyanın 5 Okeani!</div>
      <p style={{fontSize:"1rem",color:"#1e293b",marginBottom:15}}>Böyük su hissələrinə <strong>okean</strong> deyirik. Cəmi <strong style={{color:"#009688",fontSize:"1.3rem"}}>5</strong> okean var!</p>
      {OCEANS.map(o=>(
        <div key={o.name} className="ocean-item" style={{background:`${o.color}15`,borderColor:o.color}}>
          <span style={{fontSize:"2rem",flexShrink:0}}>{o.emoji}</span>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontWeight:700,fontSize:"1rem",color:"#004D40",display:"flex",alignItems:"center",flexWrap:"wrap",gap:8}}>
              {o.rank}. {o.name}
              <span style={{background:o.color,color:"white",borderRadius:40,padding:"2px 10px",fontSize:"0.7rem",fontWeight:600}}>{o.tag}</span>
            </div>
            <div style={{fontSize:"0.85rem",color:"#00695C",marginTop:4,fontWeight:500}}>{o.detail}</div>
          </div>
        </div>
      ))}
      <InfoBox color="#009688">
        📌 Yerin <strong>70%-i</strong> sudur — buna görə "Mavi Planet" adlanır! 💙<br/>
        📌 Ən böyük → <strong>Sakit</strong> 🐋 · Ən kiçik → <strong>Arktika</strong> 🧊 · Ən isti → <strong>Hind</strong> 🌡️
      </InfoBox>
      <FunFact text="İnsanlar hələ okeanların 80%-ini kəşf etməyib! Dənizin dibi hələ çox sirlidi! 🐙🔦"/>
    </div>
  );
}

function SectionKosmos() {
  const [sel, setSel] = useState(2);
  const w = useWidth();
  const isMobile = w < 560;

  return (
    <div>
      <div className="card" style={{background:"rgba(255,255,255,0.1)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,215,0,0.2)"}}>
        <div className="sec-title" style={{color:"#FFD700"}}>🚀 Günəş Sistemi!</div>
        <p style={{color:"#E2F0FA",fontSize:"1rem",lineHeight:1.7,fontWeight:500}}>
          Günəş sistemimizin mərkəzindəki <strong style={{color:"#FFD700"}}>Günəş</strong> nəhəng bir ulduzdur.
          Onun ətrafında <strong style={{color:"#FFD700"}}>8 planet</strong> fırlanır! Günəşdən nə qədər uzaq olsa, bir o qədər soyuqdur. 🥶
        </p>
        <div className="info-chips">
          {[["☀️","Günəşdən uzaq = Soyuq"],["🌍","Yalnız Yer yaşamaq üçün uyğundur!"],["🌙","Bəzi planetlərin çox peyki var!"]].map(([e,t])=>(
            <div key={t} className="info-chip"><span style={{fontSize:"1.1rem"}}>{e}</span>{t}</div>
          ))}
        </div>
      </div>

      <div className="card" style={{background:"rgba(255,255,255,0.1)",backdropFilter:"blur(12px)"}}>
        <div style={{fontFamily:"'Baloo 2',cursive",color:"#FFD700",fontSize:"1.2rem",marginBottom:12}}>☀️ Günəşdən uzaqlıq sırası:</div>
        {isMobile && <div className="scroll-hint">← sola sürüşdürün →</div>}
        <div className="ruler-scroll">
          <div className="ruler-inner">
            <span style={{fontSize:"2rem",flexShrink:0,marginRight:5}}>☀️</span>
            {PLANETS.map((p,i)=>(
              <div key={p.name} style={{display:"flex",alignItems:"center",flexShrink:0}}>
                <div style={{width:Math.max(15,i*10+15),height:3,background:"rgba(255,255,255,0.3)"}}/>
                <div style={{textAlign:"center",cursor:"pointer",padding:"0 3px"}} onClick={()=>setSel(i)}>
                  <div style={{fontSize:i<4?"1.8rem":"1.4rem"}}>{p.funEmoji}</div>
                  <div style={{color:"#90CAF9",fontSize:"0.65rem",fontWeight:600,marginTop:2,whiteSpace:"nowrap"}}>{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="planet-grid">
        {PLANETS.map((p,i)=>(
          <div key={p.name} className="planet-card"
            style={{background:p.bg,border:`3px solid ${sel===i?"#FFD700":"transparent"}`,boxShadow:sel===i?"0 0 25px rgba(255,215,0,0.5)":"0 8px 20px rgba(0,0,0,0.3)"}}
            onClick={()=>setSel(sel===i?null:i)}>
            <div style={{fontSize:"2.5rem",marginBottom:6}}>{p.funEmoji}</div>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.2rem",fontWeight:700}}>{p.name}</div>
            <div style={{fontSize:"0.7rem",opacity:0.9,marginTop:2}}>{p.order}. planet · {p.distanceM}</div>
            <div style={{marginTop:8,display:"flex",flexWrap:"wrap",gap:4}}>
              <Chip>{p.moons} 🌙</Chip>
              {p.livable&&<Chip bg="#2E7D32">✅</Chip>}
              {p.rings&&<Chip>💫</Chip>}
            </div>
          </div>
        ))}
      </div>

      {sel!==null && <PlanetDetail p={PLANETS[sel]}/>}

      <div className="card">
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"clamp(1.2rem,4vw,1.6rem)",color:"#1a237e",marginBottom:16}}>📊 Planetlərin müqayisəsi</div>
        {isMobile && <div className="scroll-hint" style={{color:"#64748b"}}>← sola sürüşdürün →</div>}
        <div className="table-scroll">
          <table className="planet-table">
            <thead>
              <tr>{["Planet","Sıra","Məsafə","Orta temp.","Peyk","Həlqə","Yaşamaq"].map(h=><th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {PLANETS.map((p,i)=>(
                <tr key={p.name} onClick={()=>setSel(i)}>
                  <td style={{fontWeight:700}}>{p.funEmoji} {p.name}</td>
                  <td>{p.order}.</td>
                  <td>{p.distanceM}</td>
                  <td style={{fontWeight:700,color:p.tempAvg.startsWith("+")?p.tempAvg==="+462°C"?"#B71C1C":"#E65100":"#1565C0"}}>{p.tempAvg}</td>
                  <td>{p.moons} 🌙</td>
                  <td>{p.rings?"💫":"—"}</td>
                  <td>{p.livable?"✅":"❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="fun-fact" style={{background:"rgba(255,249,196,0.2)",border:"2px solid rgba(255,193,7,0.4)"}}>
        <span style={{fontSize:"1.3rem",flexShrink:0}}>💡</span>
        <span style={{color:"#FEF3C7",fontWeight:600,fontSize:"0.95rem"}}>
          <strong style={{color:"#FFD700"}}>Yadda saxla: </strong>
          <strong style={{color:"#FFD700"}}>Me-Ve-Yer-Mar-Yu-Sa-U-Ne</strong> — Merkuri, Venera, Yer, Mars, Yupiter, Saturn, Uran, Neptun! 🚀
        </span>
      </div>
    </div>
  );
}

// ─── SECTION: SULAR (MOVED TO TOP) ────────────────────────────────────────
function SectionSular() {
  const [selWater, setSelWater] = useState(null);
  const W_COLORS = { ocean:"#0277BD", sea:"#006a6a", lake:"#1a7a30", river:"#6a2fa0" };

  return (
    <div>
      {/* Intro */}
      <div className="card">
        <div className="sec-title">💧 Su Növləri — 4 növ var!</div>
        <p style={{fontSize:"1rem",color:"#1e293b",marginBottom:18,lineHeight:1.7}}>
          Dünyamızın <strong style={{color:"#0277BD"}}>70%-i su ilə örtülüdür!</strong> 🌍
          Su 4 əsas növə bölünür: <strong>Okean, Dəniz, Göl, Çay</strong>.
          Hər biri bir-birindən <strong>ölçüsünə, suyuna</strong> görə fərqlənir!
        </p>

        {/* Cards grid */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:16,marginBottom:20}}>
          {WATER_TYPES.map((w,i)=>(
            <div key={w.id}
              onClick={()=>setSelWater(selWater===i?null:i)}
              className="water-card"
              style={{
                borderColor:selWater===i?w.color:w.color+"55",
                boxShadow:selWater===i?`0 15px 30px -10px ${w.color}66`:"0 5px 15px rgba(0,0,0,0.05)"
              }}>
              <div style={{fontSize:"2.5rem",marginBottom:8}}>{w.icon}</div>
              <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.1rem",fontWeight:800,color:w.color,marginBottom:6}}>{w.name}</div>
              <div style={{fontSize:"0.85rem",color:"#475569",lineHeight:1.6,marginBottom:10}}>{w.short}</div>
              <span style={{background:w.color,color:"white",borderRadius:40,padding:"3px 12px",fontSize:"0.7rem",fontWeight:600}}>{w.tag}</span>
              <div style={{fontSize:"0.75rem",color:"#64748b",marginTop:10,fontWeight:600}}>👆 daha çox üçün bas</div>
            </div>
          ))}
        </div>

        {/* Expanded detail */}
        {selWater !== null && (()=>{
          const w = WATER_TYPES[selWater];
          return (
            <div style={{background:`${w.color}10`,borderRadius:24,padding:"20px 22px",marginBottom:18,animation:"fadeIn 0.3s ease",border:`2px solid ${w.color}`}}>
              <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.2rem",color:w.color,marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
                {w.icon} {w.name} haqqında ətraflı:
              </div>
              {w.facts.map((f,fi)=>(
                <div key={fi} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:8}}>
                  <div style={{background:w.color,color:"white",borderRadius:"50%",width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:700,flexShrink:0,marginTop:1}}>{fi+1}</div>
                  <span style={{fontSize:"0.95rem",color:"#334155",lineHeight:1.7,fontWeight:500}}>{f}</span>
                </div>
              ))}
              <div style={{marginTop:14,padding:"12px 16px",background:"#f1f5f9",borderRadius:16,fontSize:"0.9rem",color:"#334155",fontWeight:600}}>
                💡 <strong>Fərqi:</strong> {w.diff}
              </div>
            </div>
          );
        })()}

        {/* Differences table */}
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.1rem",color:"#0277BD",marginBottom:12}}>🔍 Fərqlər Cədvəli</div>
        <div className="scroll-hint" style={{color:"#64748b"}}>← sürüşdürün →</div>
        <div className="table-scroll">
          <table className="planet-table">
            <thead>
              <tr>{["Su növü","Ölçüsü","Duzu var?","Hərəkət?","Bizdə var?"].map(h=><th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {WATER_TYPES.map(w=>(
                <tr key={w.id} onClick={()=>setSelWater(WATER_TYPES.findIndex(x=>x.id===w.id))}>
                  <td style={{fontWeight:800,color:w.color}}>{w.icon} {w.name}</td>
                  <td>{w.size}</td>
                  <td>{w.salt}</td>
                  <td>{w.move}</td>
                  <td style={{fontWeight:700}}>{w.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FunFact text="Çay suyu dağdan aşağı axır. Bir damla su dağdan dənizə çatmaq üçün yüzlərlə km yol keçir! 🏔️➡️🌊"/>
      </div>

      {/* Benefits & Harms */}
      <div className="water-bh-grid">
        <div className="card" style={{marginBottom:0}}>
          <div className="sec-title" style={{fontSize:"1.2rem",color:"#2E7D32"}}>😊 Faydaları</div>
          {WATER_BENEFITS.map((b,i)=>(
            <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:10}}>
              <span style={{fontSize:"1.3rem",flexShrink:0}}>{b.icon}</span>
              <span style={{fontSize:"0.9rem",color:"#334155",lineHeight:1.6,fontWeight:500}}>{b.text}</span>
            </div>
          ))}
        </div>
        <div className="card" style={{marginBottom:0}}>
          <div className="sec-title" style={{fontSize:"1.2rem",color:"#C62828"}}>⚠️ Zərərləri</div>
          {WATER_HARMS.map((h,i)=>(
            <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:10}}>
              <span style={{fontSize:"1.3rem",flexShrink:0}}>{h.icon}</span>
              <span style={{fontSize:"0.9rem",color:"#334155",lineHeight:1.6,fontWeight:500}}>{h.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SECTION: ÖLKƏM (MOVED TO TOP) ────────────────────────────────────────
function SectionOlkem() {
  return (
    <div>
      {/* Dövlət & Sərhəd */}
      <div className="card">
        <div className="sec-title">🏛️ Dövlət və Sərhəd</div>

        <div className="country-intro-grid">
          <div style={{background:"linear-gradient(135deg,#E3F2FD,#BBDEFB)",borderRadius:24,padding:"18px 20px",border:"2px solid #90CAF9"}}>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.1rem",color:"#1565C0",marginBottom:10}}>🏛️ Dövlət nədir?</div>
            <p style={{fontSize:"0.9rem",color:"#1e293b",lineHeight:1.8}}>
              <strong>Dövlət</strong> — böyük bir ailə kimidir. Bir ərazidə yaşayan bütün insanları
              idarə edir. Öz <strong>qaydaları</strong>, öz <strong>başçısı</strong> (prezident)
              və öz <strong>bayrağı</strong> olur. 🏡
              <br/><br/>
              Dövlət məktəblər, xəstəxanalar, yollar tikir. Bizimçün qaydalar qoyur! 🏫🏥🛣️
            </p>
          </div>
          <div style={{background:"linear-gradient(135deg,#E8F5E9,#C8E6C9)",borderRadius:24,padding:"18px 20px",border:"2px solid #A5D6A7"}}>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.1rem",color:"#2E7D32",marginBottom:10}}>🗺️ Sərhəd nədir?</div>
            <p style={{fontSize:"0.9rem",color:"#1e293b",lineHeight:1.8}}>
              <strong>Sərhəd</strong> — bir ölkənin bitdiyi, başqa ölkənin başladığı xəttdir.
              Xəritədə cizgi kimi görünür. Real həyatda isə <strong>keçid məntəqələri</strong> olur. 🛃
              <br/><br/>
              Xarici ölkəyə keçmək üçün mütləq <strong>pasport</strong> lazımdır! ✈️🛂
            </p>
          </div>
        </div>

        <InfoBox color="#1565C0">
          📌 Azərbaycan Respublikasının prezidenti dövlət başçısıdır. 🏛️<br/>
          📌 Hər dövlətin öz qanunları (qaydaları) var — hamı onlara riayət etməlidir. ⚖️<br/>
          📌 Dövlət 3 sütun üzərində dayanır: <strong>Ərazi + Xalq + Hakimiyyət</strong>. 🏗️
        </InfoBox>
      </div>

      {/* Azerbaijan flag + attributes */}
      <div className="card">
        <div className="sec-title">Azərbaycan Respublikası!</div>
        <p style={{fontSize:"1rem",color:"#1e293b",marginBottom:18,lineHeight:1.7}}>
          Bizim ölkəmizin adı <strong style={{color:"#0092BC"}}>Azərbaycan Respublikasıdır</strong>.
          Paytaxtımız <strong style={{color:"#EF3340"}}>Bakı</strong> şəhəridir! 🌆
          Hər dövlətin 3 rəsmi simvolu olur — bayraq, gerb, himnimiz.
        </p>

        {/* Flag SVG + legend */}
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:24,marginBottom:20,justifyContent:"center"}}>
          <div>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1rem",color:"#1e293b",marginBottom:10,textAlign:"center"}}>🚩 Azərbaycan Bayrağı</div>
            <svg viewBox="0 0 300 180" width="210" height="126"
              style={{display:"block",borderRadius:16,boxShadow:"0 15px 30px -8px rgba(0,0,0,0.3)",border:"1px solid #ccc"}}>
              {/* Stripes */}
              <rect x="0" y="0"   width="300" height="60"  fill="#0092BC"/>
              <rect x="0" y="60"  width="300" height="60"  fill="#EF3340"/>
              <rect x="0" y="120" width="300" height="60"  fill="#509E2F"/>
              {/* White crescent: large white circle minus offset circle = crescent */}
              <circle cx="143" cy="90" r="22" fill="white"/>
              <circle cx="152" cy="90" r="17" fill="#EF3340"/>
              {/* White 8-pointed star */}
              <polygon points={starPts(178, 90, 9, 3.8, 8)} fill="white"/>
            </svg>
          </div>
          <div style={{flex:1,minWidth:180}}>
            {[
              {color:"#0092BC", label:"Mavi — türkçülüyü"},
              {color:"#EF3340", label:"Qırmızı — müasirliyi və demokratiyanı"},
              {color:"#509E2F", label:"Yaşıl — islamı"},
              {color:"white",   label:"Ay-Ulduz (ağ) — milli-mənəvi dəyərləri", border:true},
            ].map((item,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                <div style={{width:20,height:20,borderRadius:"50%",background:item.color,flexShrink:0,border:item.border?"2px solid #94a3b8":"none",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}/>
                <span style={{fontSize:"0.9rem",fontWeight:600,color:"#334155"}}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 attributes */}
        <div className="attr3-grid">
          {[
            {icon:"🚩", title:"Bayraq", bg:"linear-gradient(135deg,#0092BC,#EF3340,#509E2F)", text:"3 rəngli — Mavi, Qırmızı, Yaşıl. Ortasında ağ Ay-Ulduz."},
            {icon:"🛡️", title:"Gerb", bg:"linear-gradient(135deg,#BF8500,#F5C130)", text:"Dövlət nişanıdır. Sənədlər, pul, rəsmi yerlər üzərindədir."},
            {icon:"🎵", title:"Himnimiz", bg:"linear-gradient(135deg,#4a1a8a,#9b59b6)", text:"\"Azərbaycan!\" mahnısı. Bayramlarda ayağa qalxıb dinləyirik! 🎶"},
          ].map((a,i)=>(
            <div key={i} style={{background:a.bg,borderRadius:20,padding:"16px 12px",color:"white",textAlign:"center",boxShadow:"0 8px 0 rgba(0,0,0,0.15)"}}>
              <div style={{fontSize:"2.5rem",marginBottom:8}}>{a.icon}</div>
              <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.1rem",marginBottom:6}}>{a.title}</div>
              <div style={{fontSize:"0.8rem",opacity:0.95,lineHeight:1.6}}>{a.text}</div>
            </div>
          ))}
        </div>

        {/* Neighbours */}
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.1rem",color:"#1e293b",marginBottom:12}}>🌍 5 Qonşu Ölkəmiz</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:10,marginBottom:20}}>
          {AZ_NEIGHBOURS.map(n=>(
            <div key={n.name} style={{display:"flex",alignItems:"center",gap:8,background:n.bg,color:n.color,borderRadius:40,padding:"8px 18px",fontWeight:700,fontSize:"0.9rem",boxShadow:"0 4px 6px rgba(0,0,0,0.05)"}}>
              <span style={{fontSize:"1.3rem"}}>{n.flag}</span>{n.name}
            </div>
          ))}
        </div>

        {/* Fun facts */}
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.1rem",color:"#1e293b",marginBottom:12}}>⭐ Maraqlı Faktlar</div>
        {AZ_FACTS.map((f,i)=>(
          <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:10,background:"linear-gradient(135deg,#FFFBEB,#FEF3C7)",borderRadius:16,padding:"12px 16px",border:"1px solid #FBBF24"}}>
            <span style={{fontSize:"1.1rem",flexShrink:0}}>⭐</span>
            <span style={{fontSize:"0.9rem",color:"#92400E",fontWeight:600}}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────
const TABS = [
  {id:"olkem",label:"🇦🇿 Ölkəm"},      // Moved to first
  {id:"sular",label:"💧 Sular"},       // Moved to second
  {id:"aylar",label:"📅 Aylar"},
  {id:"hefteler",label:"📆 Həftələr"},
  {id:"gunler",label:"🗓️ Günlər"},
  {id:"materikler",label:"🌍 Materiklər"},
  {id:"okeanlar",label:"🌊 Okeanlar"},
  {id:"kosmos",label:"🚀 Kosmos"},
  {id:"test",label:"🎯 Test"},
];

export default function App() {
  const [tab, setTab] = useState("olkem"); // Default to Ölkəm
  return (
    <div className="app">
      <GlobalStyle/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Baloo+2:wght@700;800&display=swap" rel="stylesheet"/>
      <div className="star-bg"/>
      <div className="wrap">
        <div className="app-header">
          <div style={{fontSize:"2rem",letterSpacing:6,marginBottom:8}}>⭐ 🌟 ⭐</div>
          <h1 className="app-h1">❤️ Mehin ❤️</h1>
          <p className="app-sub">Mehin, gəl birlikdə öyrənək! 📚</p>
        </div>
        <nav className="nav">
          {TABS.map(t=>(
            <button key={t.id} className="nav-btn"
              style={{
                background:tab===t.id?"linear-gradient(135deg,#FFD700,#FFA500)":"rgba(255,255,255,0.1)",
                color:tab===t.id?"#0f172a":"#E2F0FA",
                borderColor:tab===t.id?"#FFD700":"rgba(255,255,255,0.2)",
                boxShadow:tab===t.id?"0 10px 20px -5px rgba(255,215,0,0.3)":"none"
              }}
              onClick={()=>setTab(t.id)}>{t.label}</button>
          ))}
        </nav>
        {tab==="olkem"      && <SectionOlkem/>}      {/* Now first */}
        {tab==="sular"      && <SectionSular/>}      {/* Now second */}
        {tab==="aylar"      && <SectionAylar/>}
        {tab==="hefteler"   && <SectionHefteler/>}
        {tab==="gunler"     && <SectionGunler/>}
        {tab==="materikler" && <SectionMateriklər/>}
        {tab==="okeanlar"   && <SectionOkeanlar/>}
        {tab==="kosmos"     && <SectionKosmos/>}
        {tab==="test"       && <Quiz/>}
      </div>
    </div>
  );
}
