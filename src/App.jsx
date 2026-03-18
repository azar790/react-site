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

function starPts(cx, cy, R, r, n=8) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const radius = i % 2 === 0 ? R : r;
    const angle = (Math.PI / n) * i - Math.PI / 2;
    pts.push(`${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`);
  }
  return pts.join(" ");
}

// ─── GLOBAL CSS ─────────────────────────────────────────────────────────────
const GlobalStyle = () => (
  <style>{`
    *{box-sizing:border-box;margin:0;padding:0;}
    body{overflow-x:hidden;}
    .app{font-family:'Nunito',sans-serif;min-height:100vh;background:linear-gradient(160deg,#0a0a2e 0%,#1a1a5e 40%,#0d2b45 100%);padding-bottom:40px;overflow-x:hidden;}
    .star-bg{position:fixed;top:0;left:0;right:0;bottom:0;background-image:radial-gradient(circle,rgba(255,255,255,0.15) 1px,transparent 1px);background-size:40px 40px;pointer-events:none;z-index:0;}
    .wrap{position:relative;z-index:1;max-width:940px;margin:0 auto;padding:0 14px;}
    .app-header{text-align:center;padding:30px 14px 14px;}
    .app-h1{font-family:'Baloo 2',cursive;font-size:clamp(1.6rem,5vw,3rem);color:#FFD700;text-shadow:0 0 20px rgba(255,215,0,0.5),2px 2px 0 rgba(0,0,0,0.5);line-height:1.2;}
    .app-sub{color:#90CAF9;font-weight:700;font-size:0.95rem;margin-top:6px;}
    .nav{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;padding:12px 0 18px;}
    .nav-btn{border-radius:30px;padding:7px 13px;font-size:0.82rem;font-weight:800;cursor:pointer;transition:all 0.2s;font-family:'Nunito',sans-serif;white-space:nowrap;border:2px solid;}
    .card{background:rgba(255,255,255,0.96);border-radius:22px;padding:20px 16px;margin-bottom:20px;box-shadow:0 8px 32px rgba(0,0,0,0.3);}
    .sec-title{font-family:'Baloo 2',cursive;font-size:clamp(1.2rem,4vw,1.65rem);display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px;}
    .months-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:10px 0;}
    @media(max-width:480px){.months-grid{grid-template-columns:repeat(3,1fr);gap:6px;}}
    .month-card{border-radius:13px;padding:9px 5px;text-align:center;transition:transform 0.2s;border:3px solid transparent;}
    .month-card:hover{transform:translateY(-3px) scale(1.04);}
    .days-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin:10px 0;}
    @media(max-width:560px){.days-grid{grid-template-columns:repeat(4,1fr);gap:5px;}}
    @media(max-width:340px){.days-grid{grid-template-columns:repeat(3,1fr);}}
    .day-card{border-radius:9px;padding:8px 3px;text-align:center;border:2px solid;}
    .cont-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:9px;margin:10px 0;}
    @media(max-width:480px){.cont-grid{grid-template-columns:1fr;}}
    .cont-card{border-radius:14px;padding:12px 13px;display:flex;align-items:flex-start;gap:10px;color:white;text-shadow:1px 1px 2px rgba(0,0,0,0.4);box-shadow:0 4px 14px rgba(0,0,0,0.2);cursor:pointer;transition:transform 0.2s,box-shadow 0.2s;}
    @keyframes fadeIn{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}
    .planet-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:11px;margin:10px 0;}
    @media(max-width:380px){.planet-grid{grid-template-columns:repeat(2,1fr);}}
    .planet-card{border-radius:16px;padding:13px 11px;color:white;cursor:pointer;transition:all 0.2s;text-shadow:1px 1px 3px rgba(0,0,0,0.5);border:3px solid transparent;}
    .planet-card:hover{transform:translateY(-3px);}
    .planet-detail{background:linear-gradient(135deg,#0d1b3e,#1a3a5c);border-radius:16px;padding:18px 14px;color:white;margin-top:13px;border:2px solid rgba(255,215,0,0.3);box-shadow:0 8px 32px rgba(0,0,0,0.5);}
    .stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-bottom:12px;}
    @media(max-width:480px){.stat-grid{grid-template-columns:repeat(2,1fr);}}
    .table-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;border-radius:12px;}
    .planet-table{width:100%;border-collapse:collapse;font-size:0.82rem;min-width:480px;}
    .planet-table th{background:#1A237E;color:white;padding:9px 9px;text-align:left;font-weight:800;white-space:nowrap;}
    .planet-table td{padding:7px 9px;white-space:nowrap;}
    .planet-table tr:nth-child(even) td{background:#F8F9FF;}
    .planet-table tr{cursor:pointer;}
    .quiz-wrap{background:linear-gradient(135deg,#0d1b3e,#1a237e);border-radius:20px;padding:22px 14px;border:2px solid rgba(255,215,0,0.3);}
    .quiz-card{background:rgba(255,255,255,0.97);border-radius:16px;padding:18px 14px 14px;margin-bottom:12px;position:relative;}
    .quiz-opts{display:grid;grid-template-columns:1fr 1fr;gap:7px;}
    @media(max-width:420px){.quiz-opts{grid-template-columns:1fr;}}
    .opt-btn{border-radius:10px;padding:9px 8px;font-size:0.88rem;font-weight:700;cursor:pointer;font-family:'Nunito',sans-serif;text-align:center;transition:all 0.15s;width:100%;border:2px solid;}
    .opt-btn:not(:disabled):hover{opacity:0.85;transform:scale(1.02);}
    .ocean-item{display:flex;align-items:center;gap:11px;border-radius:12px;padding:10px 13px;margin-bottom:8px;border:2px solid;}
    @media(max-width:520px){.water-bh-grid{grid-template-columns:1fr!important;}}
    @media(max-width:480px){.attr3-grid{grid-template-columns:1fr!important;}.country-intro-grid{grid-template-columns:1fr!important;}}
    .info-box{background:#F8F9FA;border-radius:11px;padding:11px 14px;margin:9px 0;font-size:0.9rem;color:#444;line-height:1.7;border-left:5px solid #CCC;}
    .fun-fact{background:linear-gradient(135deg,#FFF9C4,#FFF3E0);border:2px solid #FFC107;border-radius:12px;padding:10px 13px;margin-top:11px;font-size:0.88rem;color:#5D4037;display:flex;align-items:flex-start;gap:7px;}
    .weeks-row{display:flex;gap:8px;flex-wrap:wrap;margin:11px 0;justify-content:center;}
    .season-legend{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;padding-top:11px;margin-top:7px;border-top:2px dashed #EEE;}
    .legend-item{display:flex;align-items:center;gap:5px;font-weight:700;font-size:0.78rem;}
    .ruler-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:5px;}
    .ruler-inner{display:flex;align-items:center;min-width:max-content;padding:3px 0;}
    .topic-filter{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:16px;}
    .chip{background:rgba(255,255,255,0.2);color:white;border-radius:30px;padding:2px 9px;font-size:0.68rem;font-weight:800;display:inline-block;margin:2px 2px 0 0;}
    .info-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:11px;}
    .info-chip{background:rgba(255,255,255,0.08);border-radius:11px;padding:7px 11px;display:flex;align-items:center;gap:6px;color:#E3F2FD;font-size:0.78rem;font-weight:700;}
    .scroll-hint{font-size:0.7rem;color:#90CAF9;text-align:center;margin-bottom:5px;}
  `}</style>
);

const FunFact = ({ text }) => (
  <div className="fun-fact">
    <span style={{fontSize:"1.2rem",flexShrink:0}}>💡</span>
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
    <div style={{background:"rgba(255,255,255,0.08)",borderRadius:10,padding:"9px 11px"}}>
      <div style={{fontSize:"1.1rem"}}>{icon}</div>
      <div style={{color:"#90CAF9",fontSize:"0.64rem",fontWeight:700,marginTop:2}}>{label}</div>
      <div style={{color:valueColor||"white",fontWeight:900,fontSize:"0.88rem",marginTop:2}}>{value}</div>
    </div>
  );
}

function PlanetDetail({ p }) {
  const tc = p.tempAvg.startsWith("+") ? "#FF7043" : "#42A5F5";
  return (
    <div className="planet-detail">
      <div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap",marginBottom:14}}>
        <span style={{fontSize:"2.8rem"}}>{p.funEmoji}</span>
        <div>
          <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"clamp(1.4rem,4vw,1.7rem)",color:"#FFD700"}}>{p.name}</div>
          <div style={{color:"#90CAF9",fontWeight:700,fontSize:"0.82rem"}}>{p.order}. planet · {p.distanceLabel}</div>
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
        background:p.livable?"rgba(46,125,50,0.3)":"rgba(183,28,28,0.3)",
        border:`2px solid ${p.livable?"#4CAF50":"#F44336"}`,
        borderRadius:12,padding:"10px 13px",marginBottom:11,
      }}>
        <span style={{fontSize:"1.1rem"}}>{p.livable?"✅":"❌"}</span>
        <span style={{fontWeight:800,color:p.livable?"#A5D6A7":"#EF9A9A",marginLeft:7,fontSize:"0.9rem"}}>
          {p.livable?"Yaşamaq üçün uyğundur!":"Yaşamaq üçün uyğun deyil!"}
        </span>
        <div style={{color:"#CFD8DC",fontSize:"0.82rem",marginTop:3}}>{p.livableReason}</div>
      </div>
      <div style={{background:"rgba(255,215,0,0.1)",border:"2px solid rgba(255,215,0,0.3)",borderRadius:10,padding:"10px 12px"}}>
        <span>💡 </span>
        <span style={{color:"#FFF9C4",fontWeight:700,fontSize:"0.87rem"}}>{p.fact}</span>
      </div>
    </div>
  );
}

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
      <div style={{textAlign:"center",marginBottom:14}}>
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"clamp(1.4rem,5vw,2rem)",color:"#FFD700"}}>🎯 Test Vaxtı! 🎯</div>
        <div style={{color:"#90CAF9",fontWeight:700,fontSize:"0.84rem",marginTop:3}}>Cəmi {QUIZ_QUESTIONS.length} sual!</div>
      </div>

      <div className="topic-filter">
        {topics.map(t=>(
          <button key={t} onClick={()=>{setFilter(t);setAnswers({});setShowResult(false);}} style={{
            background:filter===t?"#FFD700":"rgba(255,255,255,0.1)",
            color:filter===t?"#1A237E":"#E3F2FD",
            border:`2px solid ${filter===t?"#FFC107":"rgba(255,255,255,0.2)"}`,
            borderRadius:30,padding:"5px 11px",fontSize:"0.77rem",
            fontWeight:800,cursor:"pointer",fontFamily:"'Nunito',sans-serif",whiteSpace:"nowrap",
          }}>{t==="all"?"🎯 Hamısı":t}</button>
        ))}
      </div>

      <div style={{color:"#FFD700",fontWeight:800,textAlign:"center",fontSize:"0.84rem",marginBottom:6}}>
        {answered} / {filtered.length} sual cavablandı
      </div>
      <div style={{background:"rgba(255,255,255,0.15)",borderRadius:30,height:10,overflow:"hidden",marginBottom:16}}>
        <div style={{width:`${filtered.length?(answered/filtered.length*100):0}%`,height:"100%",borderRadius:30,background:"linear-gradient(90deg,#FFD700,#FF8C00)",transition:"width 0.4s"}}/>
      </div>

      {filtered.map((q,i)=>{
        const a = answers[q.id];
        return (
          <div key={q.id} className="quiz-card">
            <div style={{position:"absolute",top:-11,left:12,background:"#FFD700",color:"#1A237E",fontWeight:900,fontSize:"0.77rem",padding:"2px 11px",borderRadius:20}}>Sual {i+1}</div>
            <div style={{position:"absolute",top:-11,right:12,background:"rgba(240,240,240,0.95)",color:"#666",fontWeight:800,fontSize:"0.67rem",padding:"2px 8px",borderRadius:20,border:"1px solid #DDD"}}>{q.topic}</div>
            <div style={{fontWeight:800,fontSize:"0.97rem",color:"#222",paddingTop:9,marginBottom:12,lineHeight:1.4}}>{q.q}</div>
            <div className="quiz-opts">
              {q.opts.map(opt=>{
                const isCor = opt===q.ans, isCho = a?.chosen===opt;
                let bg="#EDE7F6",bc="#B39DDB",col="#4A148C";
                if(a){ if(isCor){bg="#C8E6C9";bc="#2E7D32";col="#1B5E20";} else if(isCho){bg="#FFCDD2";bc="#B71C1C";col="#B71C1C";} }
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
              <div style={{marginTop:8,padding:"6px 10px",borderRadius:8,textAlign:"center",fontWeight:800,fontSize:"0.9rem",background:a.correct?"#C8E6C9":"#FFCDD2",color:a.correct?"#1B5E20":"#B71C1C"}}>
                {a.correct ? fb[q.id%4] : `😊 Düzgün cavab: ${q.ans}`}
              </div>
            )}
          </div>
        );
      })}

      <button onClick={()=>setShowResult(true)} style={{display:"block",width:"100%",background:"linear-gradient(135deg,#FFD700,#FFA000)",color:"#1A237E",border:"none",borderRadius:16,padding:"13px",fontSize:"1.05rem",fontWeight:900,fontFamily:"'Nunito',sans-serif",cursor:"pointer",boxShadow:"0 5px 20px rgba(255,215,0,0.4)",marginTop:4}}>
        🏆 Nəticəmi göstər!
      </button>

      {showResult && (()=>{
        const r = getResult();
        return (
          <div style={{background:"white",borderRadius:16,padding:20,marginTop:16,textAlign:"center"}}>
            <div style={{fontSize:"2.8rem"}}>{r.emoji}</div>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.5rem",color:"#4A148C",margin:"6px 0"}}>{r.text}</div>
            <div style={{fontSize:"1.5rem",letterSpacing:4,marginBottom:7}}>{r.stars}</div>
            <div style={{fontWeight:700,color:"#555",marginBottom:13,fontSize:"0.9rem"}}>{r.msg}</div>
            <button onClick={()=>{setAnswers({});setShowResult(false);}} style={{background:"#EDE7F6",color:"#4A148C",border:"2px solid #B39DDB",borderRadius:12,padding:"8px 20px",fontSize:"0.92rem",fontWeight:800,cursor:"pointer",fontFamily:"'Nunito',sans-serif"}}>
              🔄 Yenidən cəhd et!
            </button>
          </div>
        );
      })()}
    </div>
  );
}

function SectionAylar() {
  return (
    <div className="card">
      <div className="sec-title" style={{color:"#6A1B9A",justifyContent:"center"}}>📅 1 ildə 12 AY var!</div>
      <div className="months-grid">
        {MONTHS.map(m=>(
          <div key={m.num} className="month-card" style={{background:SEASON_COLORS[m.season].bg,border:`3px solid ${SEASON_COLORS[m.season].border}`}}>
            <div style={{fontSize:"0.55rem",fontWeight:800,color:"rgba(255,255,255,0.85)"}}>{m.num}-ci ay</div>
            <div style={{fontSize:"1.6rem",margin:"2px 0"}}>{m.emoji}</div>
            <div style={{fontSize:"0.82rem",fontWeight:900,color:"white",textShadow:"1px 1px 2px rgba(0,0,0,0.3)"}}>{m.name}</div>
            <div style={{fontSize:"0.55rem",fontWeight:800,color:"rgba(255,255,255,0.9)",background:"rgba(0,0,0,0.18)",borderRadius:20,padding:"1px 6px",marginTop:2,display:"inline-block"}}>{m.seasonAz}</div>
          </div>
        ))}
      </div>
      <div className="season-legend">
        {[["#42A5F5","❄️ Qış","Dekabr, Yanvar, Fevral"],["#66BB6A","🌸 Bahar","Mart, Aprel, May"],
          ["#FFA726","☀️ Yay","İyun, İyul, Avqust"],["#EF5350","🍁 Payız","Sentyabr, Oktyabr, Noyabr"]
        ].map(([c,s,m])=>(
          <div key={s} className="legend-item">
            <div style={{width:14,height:14,borderRadius:"50%",background:c,flexShrink:0}}/>
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
    <div className="card" style={{borderLeft:"6px solid #2196F3"}}>
      <div className="sec-title" style={{color:"#1565C0"}}>📆 Ayda neçə Həftə var?</div>
      <p style={{fontSize:"1rem",color:"#444",marginBottom:10}}>Hər ayda təxminən <strong style={{fontSize:"1.4rem",color:"#1565C0"}}>4</strong> həftə var! 🗓️</p>
      <div className="weeks-row">
        {[1,2,3,4].map(n=>(
          <div key={n} style={{background:"linear-gradient(135deg,#B39DDB,#7E57C2)",color:"white",borderRadius:10,padding:"9px 15px",fontWeight:800,fontSize:"0.9rem",textAlign:"center",minWidth:70}}>
            {n}-{n<=2?"ci":"cü"}<br/><span style={{fontSize:"0.6rem",opacity:0.85}}>həftə</span>
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
    <div className="card" style={{borderLeft:"6px solid #4CAF50"}}>
      <div className="sec-title" style={{color:"#2E7D32"}}>🗓️ Həftədə 7 Gün var!</div>
      <p style={{fontSize:"1rem",color:"#444",marginBottom:10}}>Hər həftədə <strong style={{fontSize:"1.4rem",color:"#4CAF50"}}>7</strong> gün var:</p>
      <div className="days-grid">
        {DAYS.map(d=>(
          <div key={d.n} className="day-card" style={{background:d.bg,borderColor:d.border,outline:d.rest?"3px solid #FFD700":"none"}}>
            <span style={{fontSize:"1.1rem",fontWeight:900,color:d.color,display:"block"}}>{d.n}</span>
            <div style={{fontSize:"0.5rem",fontWeight:800,color:d.color,lineHeight:1.3,marginTop:1}}>{d.name}</div>
            {d.rest&&<div style={{fontSize:"0.48rem",marginTop:1,color:"#F57F17",fontWeight:800}}>🎉</div>}
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
    <div className="card" style={{borderLeft:"6px solid #9C27B0"}}>
      <div className="sec-title" style={{color:"#6A1B9A"}}>🌍 Yerin 6 Materiki!</div>
      <p style={{fontSize:"0.97rem",color:"#555",marginBottom:10}}>
        Böyük torpaq hissələrinə <strong>materik</strong> deyirik. Azərbaycan məktəblərində <strong style={{color:"#9C27B0",fontSize:"1.2rem"}}>6</strong> materik öyrənilir!
      </p>
      <div className="cont-grid">
        {CONTINENTS.map((c,i)=>(
          <div key={c.name} className="cont-card"
            style={{background:c.color,transform:sel===i?"translateY(-3px)":"none",boxShadow:sel===i?"0 10px 28px rgba(0,0,0,0.35)":"0 4px 14px rgba(0,0,0,0.2)"}}
            onClick={()=>setSel(sel===i?null:i)}>
            <span style={{fontSize:"1.9rem",flexShrink:0}}>{c.emoji}</span>
            <div>
              <div style={{fontWeight:900,fontSize:"0.92rem"}}>{i+1}. {c.name}</div>
              <div style={{fontSize:"0.73rem",opacity:0.9,marginTop:3,lineHeight:1.4}}>{c.fact}</div>
              <div style={{fontSize:"0.7rem",fontWeight:800,opacity:0.85,marginTop:4}}>🐾 {c.animal}</div>
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
    <div className="card" style={{borderLeft:"6px solid #009688"}}>
      <div className="sec-title" style={{color:"#00695C"}}>🌊 Dünyanın 5 Okeani!</div>
      <p style={{fontSize:"0.97rem",color:"#555",marginBottom:10}}>Böyük su hissələrinə <strong>okean</strong> deyirik. Cəmi <strong style={{color:"#009688",fontSize:"1.2rem"}}>5</strong> okean var!</p>
      {OCEANS.map(o=>(
        <div key={o.name} className="ocean-item" style={{background:`${o.color}14`,borderColor:o.color}}>
          <span style={{fontSize:"1.7rem",flexShrink:0}}>{o.emoji}</span>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontWeight:800,fontSize:"0.9rem",color:"#004D40",display:"flex",alignItems:"center",flexWrap:"wrap",gap:5}}>
              {o.rank}. {o.name}
              <span style={{background:o.color,color:"white",borderRadius:20,padding:"1px 8px",fontSize:"0.62rem",fontWeight:800}}>{o.tag}</span>
            </div>
            <div style={{fontSize:"0.79rem",color:"#00695C",marginTop:2,fontWeight:600}}>{o.detail}</div>
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
      <div style={{background:"rgba(255,255,255,0.06)",border:"2px solid rgba(255,215,0,0.2)",borderRadius:20,padding:"16px 14px",marginBottom:16,backdropFilter:"blur(8px)"}}>
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"clamp(1.2rem,4vw,1.65rem)",color:"#FFD700",marginBottom:9}}>🚀 Günəş Sistemi!</div>
        <p style={{color:"#B3E5FC",fontSize:"0.9rem",lineHeight:1.7,fontWeight:600}}>
          Günəş sistemimizin mərkəzindəki <strong style={{color:"#FFD700"}}>Günəş</strong> nəhəng bir ulduzdur.
          Onun ətrafında <strong style={{color:"#FFD700"}}>8 planet</strong> fırlanır! Günəşdən nə qədər uzaq olsa, bir o qədər soyuqdur. 🥶
        </p>
        <div className="info-chips">
          {[["☀️","Günəşdən uzaq = Soyuq"],["🌍","Yalnız Yer yaşamaq üçün uyğundur!"],["🌙","Bəzi planetlərin çox peyki var!"]].map(([e,t])=>(
            <div key={t} className="info-chip"><span style={{fontSize:"1rem"}}>{e}</span>{t}</div>
          ))}
        </div>
      </div>

      <div style={{background:"rgba(255,255,255,0.06)",border:"2px solid rgba(255,255,255,0.1)",borderRadius:14,padding:"12px 14px",marginBottom:16}}>
        <div style={{fontFamily:"'Baloo 2',cursive",color:"#FFD700",fontSize:"1rem",marginBottom:7}}>☀️ Günəşdən uzaqlıq sırası:</div>
        {isMobile && <div className="scroll-hint">← sola sürüşdürün →</div>}
        <div className="ruler-scroll">
          <div className="ruler-inner">
            <span style={{fontSize:"1.5rem",flexShrink:0,marginRight:3}}>☀️</span>
            {PLANETS.map((p,i)=>(
              <div key={p.name} style={{display:"flex",alignItems:"center",flexShrink:0}}>
                <div style={{width:Math.max(12,i*7+12),height:2,background:"rgba(255,255,255,0.2)"}}/>
                <div style={{textAlign:"center",cursor:"pointer",padding:"0 2px"}} onClick={()=>setSel(i)}>
                  <div style={{fontSize:i<4?"1.4rem":"1.1rem"}}>{p.funEmoji}</div>
                  <div style={{color:"#90CAF9",fontSize:"0.55rem",fontWeight:800,marginTop:1,whiteSpace:"nowrap"}}>{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="planet-grid">
        {PLANETS.map((p,i)=>(
          <div key={p.name} className="planet-card"
            style={{background:p.bg,border:`3px solid ${sel===i?"#FFD700":"transparent"}`,boxShadow:sel===i?"0 0 18px rgba(255,215,0,0.5)":"0 4px 14px rgba(0,0,0,0.3)",transform:sel===i?"translateY(-4px)":"none"}}
            onClick={()=>setSel(sel===i?null:i)}>
            <div style={{fontSize:"2rem",marginBottom:4}}>{p.funEmoji}</div>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.08rem",fontWeight:800}}>{p.name}</div>
            <div style={{fontSize:"0.66rem",opacity:0.85,marginTop:1}}>{p.order}. planet · {p.distanceM}</div>
            <div style={{marginTop:6,display:"flex",flexWrap:"wrap",gap:3}}>
              <Chip>{p.moons} 🌙</Chip>
              {p.livable&&<Chip bg="#2E7D32">✅</Chip>}
              {p.rings&&<Chip>💫</Chip>}
            </div>
          </div>
        ))}
      </div>

      {sel!==null && <PlanetDetail p={PLANETS[sel]}/>}

      <div style={{background:"rgba(255,255,255,0.96)",borderRadius:16,padding:"16px 13px",marginTop:16,boxShadow:"0 8px 32px rgba(0,0,0,0.3)"}}>
        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"clamp(1.1rem,4vw,1.4rem)",color:"#1A237E",marginBottom:10}}>📊 Planetlərin müqayisəsi</div>
        {isMobile && <div className="scroll-hint" style={{color:"#666"}}>← sola sürüşdürün →</div>}
        <div className="table-scroll">
          <table className="planet-table">
            <thead>
              <tr>{["Planet","Sıra","Məsafə","Orta temp.","Peyk","Həlqə","Yaşamaq"].map(h=><th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {PLANETS.map((p,i)=>(
                <tr key={p.name} onClick={()=>setSel(i)}>
                  <td style={{fontWeight:800}}>{p.funEmoji} {p.name}</td>
                  <td>{p.order}.</td>
                  <td>{p.distanceM}</td>
                  <td style={{fontWeight:800,color:p.tempAvg.startsWith("+")?p.tempAvg==="+462°C"?"#B71C1C":"#E65100":"#1565C0"}}>{p.tempAvg}</td>
                  <td>{p.moons} 🌙</td>
                  <td>{p.rings?"💫":"—"}</td>
                  <td>{p.livable?"✅":"❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{background:"rgba(255,249,196,0.1)",border:"2px solid rgba(255,193,7,0.4)",borderRadius:12,padding:"11px 13px",marginTop:14,display:"flex",alignItems:"flex-start",gap:7}}>
        <span style={{fontSize:"1.1rem",flexShrink:0}}>💡</span>
        <span style={{color:"#FFF9C4",fontWeight:700,fontSize:"0.86rem"}}>
          <strong style={{color:"#FFD700"}}>Yadda saxla: </strong>
          <strong style={{color:"#FFD700"}}>Me-Ve-Yer-Mar-Yu-Sa-U-Ne</strong> — Merkuri, Venera, Yer, Mars, Yupiter, Saturn, Uran, Neptun! 🚀
        </span>
      </div>
    </div>
  );
}

function SectionSular() {
  const [selWater, setSelWater] = useState(null);

  return (
    <div>
      <div className="card" style={{borderLeft:"6px solid #0277BD"}}>
        <div className="sec-title" style={{color:"#0277BD"}}>💧 Su Növləri — 4 növ var!</div>
        <p style={{fontSize:"0.97rem",color:"#444",marginBottom:12,lineHeight:1.7}}>
          Dünyamızın <strong style={{color:"#0277BD"}}>70%-i su ilə örtülüdür!</strong> 🌍
          Su 4 əsas növə bölünür: <strong>Okean, Dəniz, Göl, Çay</strong>.
          Hər biri bir-birindən <strong>ölçüsünə, suyuna</strong> görə fərqlənir!
        </p>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10,marginBottom:16}}>
          {WATER_TYPES.map((w,i)=>(
            <div key={w.id}
              onClick={()=>setSelWater(selWater===i?null:i)}
              style={{
                background:`${w.color}18`,
                border:`2px solid ${selWater===i?w.color:w.color+"55"}`,
                borderRadius:14,padding:"13px 12px",cursor:"pointer",
                transform:selWater===i?"translateY(-3px)":"none",
                transition:"all 0.2s",
                boxShadow:selWater===i?`0 6px 18px ${w.color}44`:"0 2px 8px rgba(0,0,0,0.07)"
              }}>
              <div style={{fontSize:"2rem",marginBottom:6}}>{w.icon}</div>
              <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1rem",fontWeight:800,color:w.color,marginBottom:4}}>{w.name}</div>
              <div style={{fontSize:"0.77rem",color:"#555",lineHeight:1.5,marginBottom:8}}>{w.short}</div>
              <span style={{background:w.color,color:"white",borderRadius:20,padding:"2px 9px",fontSize:"0.62rem",fontWeight:800}}>{w.tag}</span>
              <div style={{fontSize:"0.7rem",color:"#888",marginTop:6,fontWeight:700}}>👆 daha çox üçün bas</div>
            </div>
          ))}
        </div>

        {selWater !== null && (()=>{
          const w = WATER_TYPES[selWater];
          return (
            <div style={{background:`${w.color}12`,border:`2px solid ${w.color}66`,borderRadius:14,padding:"14px 13px",marginBottom:14,animation:"fadeIn 0.3s ease"}}>
              <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1.1rem",color:w.color,marginBottom:10,display:"flex",alignItems:"center",gap:8}}>
                {w.icon} {w.name} haqqında ətraflı:
              </div>
              {w.facts.map((f,fi)=>(
                <div key={fi} style={{display:"flex",gap:9,alignItems:"flex-start",marginBottom:7}}>
                  <div style={{background:w.color,color:"white",borderRadius:"50%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.65rem",fontWeight:900,flexShrink:0,marginTop:1}}>{fi+1}</div>
                  <span style={{fontSize:"0.87rem",color:"#333",lineHeight:1.6,fontWeight:600}}>{f}</span>
                </div>
              ))}
              <div style={{marginTop:10,padding:"8px 11px",background:"rgba(0,0,0,0.05)",borderRadius:10,fontSize:"0.8rem",color:"#555",fontWeight:700}}>
                💡 <strong>Fərqi:</strong> {w.diff}
              </div>
            </div>
          );
        })()}

        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"1rem",color:"#0277BD",marginBottom:8}}>🔍 Fərqlər Cədvəli</div>
        <div style={{fontSize:"0.7rem",color:"#90CAF9",textAlign:"center",marginBottom:5}}>← sürüşdürün →</div>
        <div className="table-scroll">
          <table className="planet-table">
            <thead>
              <tr>{["Su növü","Ölçüsü","Duzu var?","Hərəkət?","Bizdə var?"].map(h=><th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {WATER_TYPES.map(w=>(
                <tr key={w.id} onClick={()=>setSelWater(WATER_TYPES.findIndex(x=>x.id===w.id))}>
                  <td style={{fontWeight:900,color:w.color}}>{w.icon} {w.name}</td>
                  <td>{w.size}</td>
                  <td>{w.salt}</td>
                  <td>{w.move}</td>
                  <td style={{fontWeight:800}}>{w.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <FunFact text="Çay suyu dağdan aşağı axır. Bir damla su dağdan dənizə çatmaq üçün yüzlərlə km yol keçir! 🏔️➡️🌊"/>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}} className="water-bh-grid">
        <div className="card" style={{borderLeft:"6px solid #2E7D32",marginBottom:0}}>
          <div className="sec-title" style={{color:"#2E7D32",fontSize:"1rem"}}>😊 Faydaları</div>
          {WATER_BENEFITS.map((b,i)=>(
            <div key={i} style={{display:"flex",gap:9,alignItems:"flex-start",marginBottom:8}}>
              <span style={{fontSize:"1.2rem",flexShrink:0}}>{b.icon}</span>
              <span style={{fontSize:"0.82rem",color:"#333",lineHeight:1.5,fontWeight:600}}>{b.text}</span>
            </div>
          ))}
        </div>
        <div className="card" style={{borderLeft:"6px solid #C62828",marginBottom:0}}>
          <div className="sec-title" style={{color:"#C62828",fontSize:"1rem"}}>⚠️ Zərərləri</div>
          {WATER_HARMS.map((h,i)=>(
            <div key={i} style={{display:"flex",gap:9,alignItems:"flex-start",marginBottom:8}}>
              <span style={{fontSize:"1.2rem",flexShrink:0}}>{h.icon}</span>
              <span style={{fontSize:"0.82rem",color:"#333",lineHeight:1.5,fontWeight:600}}>{h.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionOlkem() {
  return (
    <div>
      <div className="card" style={{borderLeft:"6px solid #1565C0"}}>
        <div className="sec-title" style={{color:"#1565C0"}}>🏛️ Dövlət və Sərhəd</div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}} className="country-intro-grid">
          <div style={{background:"#E3F2FD",borderRadius:13,padding:"12px 13px",border:"2px solid #90CAF9"}}>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"0.98rem",color:"#1565C0",marginBottom:7}}>🏛️ Dövlət nədir?</div>
            <p style={{fontSize:"0.82rem",color:"#333",lineHeight:1.7}}>
              <strong>Dövlət</strong> — böyük bir ailə kimidir. Bir ərazidə yaşayan bütün insanları
              idarə edir. Öz <strong>qaydaları</strong>, öz <strong>başçısı</strong> (prezident)
              və öz <strong>bayrağı</strong> olur. 🏡
              <br/><br/>
              Dövlət məktəblər, xəstəxanalar, yollar tikir. Bizimçün qaydalar qoyur! 🏫🏥🛣️
            </p>
          </div>
          <div style={{background:"#E8F5E9",borderRadius:13,padding:"12px 13px",border:"2px solid #A5D6A7"}}>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"0.98rem",color:"#2E7D32",marginBottom:7}}>🗺️ Sərhəd nədir?</div>
            <p style={{fontSize:"0.82rem",color:"#333",lineHeight:1.7}}>
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

      <div className="card" style={{borderLeft:"6px solid #EF3340"}}>
        <div className="sec-title" style={{color:"#1a237e"}}>🇦🇿 Azərbaycan Respublikası!</div>
        <p style={{fontSize:"0.9rem",color:"#555",marginBottom:14,lineHeight:1.7}}>
          Bizim ölkəmizin adı <strong style={{color:"#0092BC"}}>Azərbaycan Respublikasıdır</strong>.
          Paytaxtımız <strong style={{color:"#EF3340"}}>Bakı</strong> şəhəridir! 🌆
          Hər dövlətin 3 rəsmi simvolu olur — bayraq, gerb, himnimiz.
        </p>

        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:20,marginBottom:16,justifyContent:"center"}}>
          <div>
            <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"0.95rem",color:"#333",marginBottom:8,textAlign:"center"}}>🚩 Azərbaycan Bayrağı</div>
            <svg viewBox="0 0 300 180" width="192" height="115"
              style={{display:"block",borderRadius:10,boxShadow:"0 6px 22px rgba(0,0,0,0.22)",border:"1px solid #ccc"}}>
              <rect x="0" y="0"   width="300" height="60"  fill="#0092BC"/>
              <rect x="0" y="60"  width="300" height="60"  fill="#EF3340"/>
              <rect x="0" y="120" width="300" height="60"  fill="#509E2F"/>
              <circle cx="143" cy="90" r="22" fill="white"/>
              <circle cx="152" cy="90" r="17" fill="#EF3340"/>
              <polygon points={starPts(178, 90, 9, 3.8, 8)} fill="white"/>
            </svg>
          </div>
          <div style={{flex:1,minWidth:160}}>
            {[
              {color:"#0092BC", label:"Mavi — türkçülüyü"},
              {color:"#EF3340", label:"Qırmızı — müasirliyi və demokratiyanı"},
              {color:"#509E2F", label:"Yaşıl — islamı"},
              {color:"white",   label:"Ay-Ulduz (ağ) — milli-mənəvi dəyərləri", border:true},
            ].map((item,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:9,marginBottom:8}}>
                <div style={{width:18,height:18,borderRadius:"50%",background:item.color,flexShrink:0,border:item.border?"2px solid #ccc":"none"}}/>
                <span style={{fontSize:"0.82rem",fontWeight:700,color:"#333"}}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:9,marginBottom:14}} className="attr3-grid">
          {[
            {icon:"🚩", title:"Bayraq", bg:"linear-gradient(135deg,#0092BC,#EF3340,#509E2F)", text:"3 rəngli — Mavi, Qırmızı, Yaşıl. Ortasında ağ Ay-Ulduz."},
            {icon:"🛡️", title:"Gerb", bg:"linear-gradient(135deg,#BF8500,#F5C130)", text:"Dövlət nişanıdır. Sənədlər, pul, rəsmi yerlər üzərindədir."},
            {icon:"🎵", title:"Himnimiz", bg:"linear-gradient(135deg,#4a1a8a,#9b59b6)", text:"\"Azərbaycan!\" mahnısı. Bayramlarda ayağa qalxıb dinləyirik! 🎶"},
          ].map((a,i)=>(
            <div key={i} style={{background:a.bg,borderRadius:13,padding:"13px 10px",color:"white",textAlign:"center",boxShadow:"0 4px 0 rgba(0,0,0,0.2)"}}>
              <div style={{fontSize:"2rem",marginBottom:5}}>{a.icon}</div>
              <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"0.95rem",marginBottom:5}}>{a.title}</div>
              <div style={{fontSize:"0.73rem",opacity:0.9,lineHeight:1.5}}>{a.text}</div>
            </div>
          ))}
        </div>

        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"0.98rem",color:"#333",marginBottom:8}}>🌍 5 Qonşu Ölkəmiz</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:14}}>
          {AZ_NEIGHBOURS.map(n=>(
            <div key={n.name} style={{display:"flex",alignItems:"center",gap:7,background:n.bg,color:n.color,borderRadius:30,padding:"7px 14px",fontWeight:800,fontSize:"0.85rem"}}>
              <span style={{fontSize:"1.2rem"}}>{n.flag}</span>{n.name}
            </div>
          ))}
        </div>

        <div style={{fontFamily:"'Baloo 2',cursive",fontSize:"0.98rem",color:"#333",marginBottom:8}}>⭐ Maraqlı Faktlar</div>
        {AZ_FACTS.map((f,i)=>(
          <div key={i} style={{display:"flex",gap:9,alignItems:"flex-start",marginBottom:8,background:"linear-gradient(135deg,#FFF9C4,#FFF3E0)",borderRadius:10,padding:"8px 11px",border:"1px solid #FFC107"}}>
            <span style={{fontSize:"1rem",flexShrink:0}}>⭐</span>
            <span style={{fontSize:"0.83rem",color:"#5D4037",fontWeight:700}}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ──────────────────────────────────────────────────────────────
const TABS = [
  {id:"olkem",label:" Ölkəm"},{id:"sular",label:"💧 Sular"},
  {id:"aylar",label:"📅 Aylar"},{id:"hefteler",label:"📆 Həftələr"},
  {id:"gunler",label:"🗓️ Günlər"},{id:"materikler",label:"🌍 Materiklər"},
  {id:"okeanlar",label:"🌊 Okeanlar"},{id:"kosmos",label:"🚀 Kosmos"},
  {id:"test",label:"🎯 Test"},
];

export default function App() {
  const [tab, setTab] = useState("olkem");
  return (
    <div className="app">
      <GlobalStyle/>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Baloo+2:wght@700;800&display=swap" rel="stylesheet"/>
      <div className="star-bg"/>
      <div className="wrap">
        <div className="app-header">
          <div style={{fontSize:"1.7rem",letterSpacing:5,marginBottom:6}}>⭐ 🌟 ⭐</div>
          <h1 className="app-h1">❤️ Mehin ❤️</h1>
          <p className="app-sub">Mehin, gəl birlikdə öyrənək! 📚</p>
        </div>
        <nav className="nav">
          {TABS.map(t=>(
            <button key={t.id} className="nav-btn"
              style={{background:tab===t.id?"linear-gradient(135deg,#FFD700,#FF8C00)":"rgba(255,255,255,0.1)",color:tab===t.id?"#1A237E":"#E3F2FD",borderColor:tab===t.id?"#FFC107":"rgba(255,255,255,0.2)"}}
              onClick={()=>setTab(t.id)}>{t.label}</button>
          ))}
        </nav>
        {tab==="aylar"      && <SectionAylar/>}
        {tab==="hefteler"   && <SectionHefteler/>}
        {tab==="gunler"     && <SectionGunler/>}
        {tab==="materikler" && <SectionMateriklər/>}
        {tab==="okeanlar"   && <SectionOkeanlar/>}
        {tab==="sular"      && <SectionSular/>}
        {tab==="olkem"      && <SectionOlkem/>}
        {tab==="kosmos"     && <SectionKosmos/>}
        {tab==="test"       && <Quiz/>}
      </div>
    </div>
  );
}
