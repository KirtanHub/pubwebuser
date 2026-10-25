
/* PUB USER — English/Hindi JavaScript */

const services = [
  {
    name:"Aadhaar Services", hi:"आधार सेवाएँ", icon:"🪪",
    cat:"Identity", catHi:"पहचान",
    desc:"Official Aadhaar enrolment, updates and related services.",
    descHi:"आधार पंजीकरण, जानकारी अपडेट और संबंधित आधिकारिक सेवाएँ।",
    tags:"aadhaar uidai identity card update address",
    url:"https://uidai.gov.in/"
  },
  {
    name:"Passport Seva", hi:"पासपोर्ट सेवा", icon:"🛂",
    cat:"Travel", catHi:"यात्रा",
    desc:"Passport applications, renewals and application information.",
    descHi:"पासपोर्ट आवेदन, नवीनीकरण और आवेदन से जुड़ी जानकारी।",
    tags:"passport travel renewal seva",
    url:"https://www.passportindia.gov.in/"
  },
  {
    name:"DigiLocker", hi:"डिजिलॉकर", icon:"📂",
    cat:"Identity", catHi:"पहचान",
    desc:"Access and manage eligible digital documents.",
    descHi:"अपने उपलब्ध डिजिटल दस्तावेज़ देखें और प्रबंधित करें।",
    tags:"digilocker documents certificates marksheet",
    url:"https://www.digilocker.gov.in/"
  },
  {
    name:"Voter Services", hi:"मतदाता सेवाएँ", icon:"🗳️",
    cat:"Identity", catHi:"पहचान",
    desc:"Find voter registration and election-related services.",
    descHi:"मतदाता पंजीकरण और चुनाव से जुड़ी सेवाएँ खोजें।",
    tags:"voter election voting id card",
    url:"https://voters.eci.gov.in/"
  },
  {
    name:"Parivahan", hi:"परिवहन सेवा", icon:"🚗",
    cat:"Transport", catHi:"परिवहन",
    desc:"Explore driving licence and vehicle-related services.",
    descHi:"ड्राइविंग लाइसेंस और वाहन से जुड़ी सेवाएँ देखें।",
    tags:"driving licence vehicle rto transport car bike",
    url:"https://parivahan.gov.in/"
  },
  {
    name:"National Scholarship Portal", hi:"राष्ट्रीय छात्रवृत्ति पोर्टल",
    icon:"🎓", cat:"Education", catHi:"शिक्षा",
    desc:"Explore scholarship applications and available schemes.",
    descHi:"छात्रवृत्ति आवेदन और उपलब्ध योजनाओं की जानकारी पाएँ।",
    tags:"scholarship student education college financial aid",
    url:"https://scholarships.gov.in/"
  },
  {
    name:"Income Tax Portal", hi:"आयकर पोर्टल", icon:"💰",
    cat:"Finance", catHi:"वित्त",
    desc:"Access official income tax services and e-filing.",
    descHi:"आधिकारिक आयकर सेवाओं और ई-फाइलिंग का उपयोग करें।",
    tags:"income tax itr pan finance filing",
    url:"https://www.incometax.gov.in/"
  },
  {
    name:"PM-KISAN", hi:"पीएम-किसान", icon:"🌾",
    cat:"Finance", catHi:"वित्त",
    desc:"Find official information about the PM-KISAN scheme.",
    descHi:"पीएम-किसान योजना की आधिकारिक जानकारी पाएँ।",
    tags:"farmer agriculture kisan pm payment scheme",
    url:"https://pmkisan.gov.in/"
  },
  {
    name:"MyScheme", hi:"मेरी योजना (MyScheme)", icon:"🧭",
    cat:"Public Help", catHi:"जन सहायता",
    desc:"Discover government schemes and check eligibility information.",
    descHi:"सरकारी योजनाएँ खोजें और पात्रता की जानकारी देखें।",
    tags:"scheme eligibility welfare benefits government",
    url:"https://www.myscheme.gov.in/"
  },
  {
    name:"National Portal of India", hi:"भारत का राष्ट्रीय पोर्टल",
    icon:"🇮🇳", cat:"Public Help", catHi:"जन सहायता",
    desc:"Explore government information, departments and services.",
    descHi:"सरकारी जानकारी, विभागों और सेवाओं को देखें।",
    tags:"india government national portal departments",
    url:"https://www.india.gov.in/"
  },
  {
    name:"CPGRAMS Public Grievances", hi:"CPGRAMS जन शिकायत पोर्टल",
    icon:"📣", cat:"Public Help", catHi:"जन सहायता",
    desc:"Access the official public grievance redressal portal.",
    descHi:"आधिकारिक जन शिकायत निवारण पोर्टल का उपयोग करें।",
    tags:"complaint grievance problem public help",
    url:"https://pgportal.gov.in/"
  },
  {
    name:"National Cyber Crime Portal", hi:"राष्ट्रीय साइबर अपराध पोर्टल",
    icon:"🛡️", cat:"Public Help", catHi:"जन सहायता",
    desc:"Report cybercrime through the official government portal.",
    descHi:"आधिकारिक सरकारी पोर्टल पर साइबर अपराध की शिकायत दर्ज करें।",
    tags:"cyber crime fraud scam online safety report",
    url:"https://cybercrime.gov.in/"
  }
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const grid = $("#grid");
const search = $("#search");
const count = $("#count");
const messages = $("#messages");
const chatInput = $("#chatInput");

let category = "All";
let isHindi = false;

const categoryNames = {
  "All":"सभी सेवाएँ",
  "Identity":"पहचान",
  "Travel":"यात्रा",
  "Education":"शिक्षा",
  "Transport":"परिवहन",
  "Finance":"वित्त",
  "Public Help":"जन सहायता"
};

const englishCategories = {
  "All":"All services",
  "Identity":"Identity",
  "Travel":"Travel",
  "Education":"Education",
  "Transport":"Transport",
  "Finance":"Finance",
  "Public Help":"Public help"
};

const ui = {
  badge:["One platform. Many possibilities.","एक ही जगह, कई सुविधाएँ।"],
  heroTitle:[
    'Government services,<br><span class="gradient">made simple.</span>',
    'सरकारी सेवाएँ,<br><span class="gradient">अब आसान।</span>'
  ],
  heroDesc:[
    "Find essential Indian government websites without the hassle. Discover public services, explore official portals, and get guidance from our virtual assistant — all in one place.",
    "भारत की ज़रूरी सरकारी वेबसाइटें आसानी से खोजें। सार्वजनिक सेवाएँ देखें, आधिकारिक पोर्टल तक पहुँचें और हमारे वर्चुअल सहायक से मार्गदर्शन पाएँ — सब एक ही जगह।"
  ],
  searchPlaceholder:[
    "Search passport, Aadhaar, scholarships...",
    "पासपोर्ट, आधार, छात्रवृत्ति खोजें..."
  ],
  searchButton:["Search ↗","खोजें ↗"],
  quick:[
    ["Aadhaar","Passport","Scholarships","Driving licence"],
    ["आधार","पासपोर्ट","छात्रवृत्ति","ड्राइविंग लाइसेंस"]
  ],
  stats:[
    ["Built for the public","Find services faster","Help when you need it"],
    ["जनता के लिए","सेवाएँ जल्दी खोजें","ज़रूरत पर सहायता"]
  ],
  sectionTitle:["Explore services.","सेवाएँ खोजें।"],
  sectionDesc:[
    "Your starting point for essential government portals.",
    "ज़रूरी सरकारी पोर्टल तक पहुँचने की शुरुआत यहाँ से करें।"
  ],
  noticeTitle:["🔐 Stay safe online","🔐 ऑनलाइन सुरक्षित रहें"],
  notice:[
    "PUB USER is an independent directory, not an official government website. Always check the domain before entering personal information or making payments. We never ask for your Aadhaar number, passwords, OTPs, or bank details. Services and eligibility may change; verify information on the official portal.",
    "PUB USER एक स्वतंत्र निर्देशिका है, आधिकारिक सरकारी वेबसाइट नहीं। निजी जानकारी देने या भुगतान करने से पहले वेबसाइट का डोमेन जाँचें। हम कभी भी आपका आधार नंबर, पासवर्ड, OTP या बैंक विवरण नहीं माँगते। सेवाएँ और पात्रता बदल सकती हैं; आधिकारिक पोर्टल पर जानकारी की पुष्टि करें।"
  ],
  emergencyTitle:["Need urgent help? 🚨","तुरंत सहायता चाहिए? 🚨"],
  emergencyDesc:[
    "For emergencies in India, call 112.\nUse official public help portals for further assistance.",
    "भारत में आपातकाल के लिए 112 पर कॉल करें।\nअतिरिक्त सहायता के लिए आधिकारिक जनसेवा पोर्टल देखें।"
  ],
  emergencyButton:["Emergency help ↗","आपातकालीन सहायता ↗"],
  aboutTitle:[
    "Public access, without the confusion.",
    "बिना उलझन के सार्वजनिक सेवाओं तक पहुँच।"
  ],
  aboutDesc:[
    "PUB USER aims to make public information easier to find. Instead of remembering multiple website addresses, people can start here, select a service, and continue directly to its official portal.",
    "PUB USER का उद्देश्य सार्वजनिक जानकारी को आसानी से उपलब्ध कराना है। कई वेबसाइट पते याद रखने के बजाय, यहाँ से सेवा चुनें और सीधे उसके आधिकारिक पोर्टल पर जाएँ।"
  ],
  footer1:[
    "Connecting people with public services.",
    "लोगों को सार्वजनिक सेवाओं से जोड़ना।"
  ],
  footer2:[
    "Independent public-service directory · Not affiliated with the Government of India.\nAlways verify details on official websites.",
    "स्वतंत्र जनसेवा निर्देशिका · भारत सरकार से संबद्ध नहीं।\nजानकारी की पुष्टि आधिकारिक वेबसाइट पर करें।"
  ],
  chatTitle:["✨ PUB Assistant","✨ PUB सहायक"],
  chatSubtitle:["Your public-service guide","आपका जनसेवा मार्गदर्शक"],
  chatGreeting:[
    "Hi! 👋 I'm your PUB USER assistant. Ask me about Aadhaar, passports, scholarships, driving licences, or other public services.",
    "नमस्ते! 👋 मैं आपका PUB USER सहायक हूँ। आधार, पासपोर्ट, छात्रवृत्ति, ड्राइविंग लाइसेंस या अन्य सार्वजनिक सेवाओं के बारे में पूछें।"
  ],
  chatPlaceholder:["Ask me something...","अपना सवाल लिखें..."],
  noResults:["No services found. Try another search.","कोई सेवा नहीं मिली। कुछ और खोजें।"],
  visit:["Visit official website","आधिकारिक वेबसाइट खोलें"]
};

function setText(selector, pair, useHTML = false) {
  const element = $(selector);
  if (!element) return;

  const value = pair[isHindi ? 1 : 0];

  if (useHTML) {
    element.innerHTML = value;
  } else {
    element.textContent = value;
  }
}

function applyLanguage() {
  document.documentElement.lang = isHindi ? "hi" : "en";

  const badge = $(".pill");
  if (badge) {
    badge.innerHTML =
      `<span class="dot"></span>${ui.badge[isHindi ? 1 : 0]}`;
  }

  setText(".hero h1", ui.heroTitle, true);
  setText(".hero > p", ui.heroDesc);

  if (search) {
    search.placeholder = ui.searchPlaceholder[isHindi ? 1 : 0];
  }

  setText("#searchBtn", ui.searchButton);

  $$("[data-query]").forEach((button, index) => {
    button.textContent = ui.quick[isHindi ? 1 : 0][index];
  });

  $$(".stat span").forEach((element, index) => {
    element.textContent = ui.stats[isHindi ? 1 : 0][index];
  });

  setText(".section-head h2", ui.sectionTitle);
  setText(".section-head p", ui.sectionDesc);

  $$("#filters [data-category]").forEach(button => {
    const cat = button.dataset.category;
    button.textContent = isHindi
      ? categoryNames[cat]
      : (englishCategories[cat] || cat);
  });

  const notice = $(".notice");
  if (notice) {
    notice.innerHTML =
      `<b>${ui.noticeTitle[isHindi ? 1 : 0]}</b><br>` +
      ui.notice[isHindi ? 1 : 0];
  }

  setText(".emergency h2", ui.emergencyTitle);

  const emergencyP = $(".emergency p");
  if (emergencyP) {
    emergencyP.innerHTML =
      ui.emergencyDesc[isHindi ? 1 : 0].replace("\n", "<br>");
  }

  setText(".emergency a", ui.emergencyButton);
  setText("#about h2", ui.aboutTitle);
  setText("#about p", ui.aboutDesc);

  const footer = $$("footer > div");

  if (footer[0]) {
    footer[0].innerHTML =
      `<b style="color:var(--text)">PUB USER.</b><br>` +
      ui.footer1[isHindi ? 1 : 0];
  }

  if (footer[1]) {
    footer[1].innerHTML =
      ui.footer2[isHindi ? 1 : 0].replace("\n", "<br>");
  }

  setText(".chat-head b", ui.chatTitle);
  setText(".chat-head small", ui.chatSubtitle);

  if ($("#chatInput")) {
    $("#chatInput").placeholder =
      ui.chatPlaceholder[isHindi ? 1 : 0];
  }

  const langButton = $("#langToggle");
  if (langButton) {
    langButton.textContent = isHindi ? "English" : "हिन्दी";
  }

  // Change the greeting if the user has not started chatting.
  if (
    messages &&
    messages.children.length === 1 &&
    messages.firstElementChild.classList.contains("bot")
  ) {
    messages.firstElementChild.textContent =
      ui.chatGreeting[isHindi ? 1 : 0];
  }

  render();
}

function render() {
  if (!grid || !search) return;

  const query = search.value.trim().toLocaleLowerCase();

  const list = services.filter(service => {
    const categoryMatch =
      category === "All" || service.cat === category;

    const searchable = [
      service.name,
      service.hi,
      service.desc,
      service.descHi,
      service.cat,
      service.catHi,
      service.tags
    ].join(" ").toLocaleLowerCase();

    return categoryMatch && searchable.includes(query);
  });

  if (count) {
    count.textContent =
      `${list.length} ${isHindi ? "सेवाएँ" : "services"}`;
  }

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML =
      `<div class="empty">${ui.noResults[isHindi ? 1 : 0]}</div>`;
    return;
  }

  list.forEach((service, index) => {
    const card = document.createElement("article");
    card.className = "service";
    card.style.animationDelay = `${index * 35}ms`;

    const icon = document.createElement("div");
    icon.className = "icon";
    icon.textContent = service.icon;

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = isHindi
      ? service.catHi
      : service.cat.toUpperCase();

    const title = document.createElement("h3");
    title.textContent = isHindi ? service.hi : service.name;

    const desc = document.createElement("p");
    desc.textContent = isHindi ? service.descHi : service.desc;

    const link = document.createElement("a");
    link.className = "visit";
    link.href = service.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const linkLabel = document.createElement("span");
    linkLabel.textContent = ui.visit[isHindi ? 1 : 0];

    const arrow = document.createElement("span");
    arrow.textContent = "↗";

    link.append(linkLabel, arrow);
    card.append(icon, tag, title, desc, link);
    grid.appendChild(card);
  });
}

// Search controls
search?.addEventListener("input", render);
$("#searchBtn")?.addEventListener("click", render);

search?.addEventListener("keydown", event => {
  if (event.key === "Enter") render();
});

// Category filters
$$("#filters [data-category]").forEach(button => {
  button.addEventListener("click", () => {
    category = button.dataset.category || "All";

    $$("#filters [data-category]").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    render();
  });
});

// Quick-search buttons
$$("[data-query]").forEach(button => {
  button.addEventListener("click", () => {
    if (search) search.value = button.dataset.query;

    category = "All";

    $$("#filters [data-category]").forEach(item => {
      item.classList.toggle(
        "active",
        item.dataset.category === "All"
      );
    });

    render();
    $("#services")?.scrollIntoView({ behavior: "smooth" });
  });
});

// Dark mode
$("#theme")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  $("#theme").textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Chatbot controls
const chat = $("#chat");

$("#openChat")?.addEventListener("click", () => {
  chat?.classList.toggle("open");

  if (chat?.classList.contains("open")) {
    chatInput?.focus();
  }
});

$("#closeChat")?.addEventListener("click", () => {
  chat?.classList.remove("open");
});

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `msg ${type}`;
  message.textContent = text;

  messages?.appendChild(message);

  if (messages) {
    messages.scrollTop = messages.scrollHeight;
  }
}

function getAnswer(question) {
  const q = question.toLowerCase();

  const hindi = isHindi ||
    /नमस्ते|आधार|पासपोर्ट|छात्रवृत्ति|लाइसेंस|योजना|शिकायत|मदद|आपातकाल|मतदाता|किसान|कर|साइबर/.test(q);

  const answers = [
    {
      keys:["hello","hi","hey","namaste","नमस्ते","हेलो"],
      en:"Hello! 👋 Tell me which government service you need help finding.",
      hi:"नमस्ते! 👋 बताइए, आपको किस सरकारी सेवा की जानकारी चाहिए?"
    },
    {
      keys:["aadhaar","aadhar","आधार"],
      en:"Aadhaar services: https://uidai.gov.in/ . Never share your OTP or Aadhaar details in this chat.",
      hi:"आधार सेवाएँ: https://uidai.gov.in/ । इस चैट में अपना OTP या आधार विवरण साझा न करें।"
    },
    {
      keys:["passport","पासपोर्ट"],
      en:"Passport applications and renewals: https://www.passportindia.gov.in/ .",
      hi:"पासपोर्ट आवेदन और नवीनीकरण: https://www.passportindia.gov.in/ ।"
    },
    {
      keys:["scholarship","student","छात्रवृत्ति","स्कॉलरशिप","विद्यार्थी"],
      en:"National Scholarship Portal: https://scholarships.gov.in/ . Check eligibility and deadlines on the official portal.",
      hi:"राष्ट्रीय छात्रवृत्ति पोर्टल: https://scholarships.gov.in/ । पात्रता और अंतिम तिथि आधिकारिक पोर्टल पर जाँचें।"
    },
    {
      keys:["driving","licence","license","vehicle","ड्राइविंग","लाइसेंस","गाड़ी","वाहन"],
      en:"Driving licence and vehicle services: https://parivahan.gov.in/ .",
      hi:"ड्राइविंग लाइसेंस और वाहन सेवाएँ: https://parivahan.gov.in/ ।"
    },
    {
      keys:["voter","election","मतदाता","वोट"],
      en:"Voter services: https://voters.eci.gov.in/ .",
      hi:"मतदाता सेवाएँ: https://voters.eci.gov.in/ ।"
    },
    {
      keys:["digilocker","document","certificate","दस्तावेज़","प्रमाणपत्र"],
      en:"Digital documents: https://www.digilocker.gov.in/ . Sign in only through the official website.",
      hi:"डिजिटल दस्तावेज़: https://www.digilocker.gov.in/ । केवल आधिकारिक वेबसाइट पर ही लॉगिन करें।"
    },
    {
      keys:["tax","income tax","itr","कर","आयकर"],
      en:"Income tax services: https://www.incometax.gov.in/ .",
      hi:"आयकर सेवाएँ: https://www.incometax.gov.in/ ।"
    },
    {
      keys:["farmer","kisan","किसान","कृषि"],
      en:"PM-KISAN official portal: https://pmkisan.gov.in/ .",
      hi:"पीएम-किसान का आधिकारिक पोर्टल: https://pmkisan.gov.in/ ।"
    },
    {
      keys:["complaint","grievance","शिकायत","समस्या"],
      en:"Public grievance portal: https://pgportal.gov.in/ . For cybercrime, visit https://cybercrime.gov.in/ .",
      hi:"जन शिकायत पोर्टल: https://pgportal.gov.in/ । साइबर अपराध के लिए https://cybercrime.gov.in/ पर जाएँ।"
    },
    {
      keys:["cyber","fraud","scam","साइबर","धोखाधड़ी","फ्रॉड"],
      en:"Report cybercrime: https://cybercrime.gov.in/ . Never share OTPs or passwords.",
      hi:"साइबर अपराध की शिकायत: https://cybercrime.gov.in/ । OTP या पासवर्ड किसी से साझा न करें।"
    },
    {
      keys:["emergency","police","ambulance","आपातकाल","पुलिस","एम्बुलेंस","मदद"],
      en:"India's emergency helpline is 112. Official site: https://112.gov.in/ .",
      hi:"भारत की आपातकालीन हेल्पलाइन 112 है। आधिकारिक वेबसाइट: https://112.gov.in/ ।"
    },
    {
      keys:["scheme","benefit","government help","योजना","लाभ","सरकारी मदद"],
      en:"Discover government schemes: https://www.myscheme.gov.in/ . Eligibility depends on each scheme's official rules.",
      hi:"सरकारी योजनाएँ देखें: https://www.myscheme.gov.in/ । पात्रता हर योजना के आधिकारिक नियमों पर निर्भर करती है।"
    },
    {
      keys:["government","all services","website","सरकार","सेवाएँ","वेबसाइट"],
      en:"Explore the National Portal of India: https://www.india.gov.in/ .",
      hi:"भारत का राष्ट्रीय पोर्टल देखें: https://www.india.gov.in/ ।"
    }
  ];

  const found = answers.find(item =>
    item.keys.some(key => q.includes(key))
  );

  if (found) return hindi ? found.hi : found.en;

  return hindi
    ? "मैं आधार, पासपोर्ट, छात्रवृत्ति, ड्राइविंग लाइसेंस, मतदाता सेवाओं और सरकारी योजनाओं की जानकारी खोजने में मदद कर सकता हूँ। किसी सेवा का नाम लिखकर पूछें।"
    : "I can help you find Aadhaar, passports, scholarships, driving licences, voter services and government schemes. Ask me about a specific service!";
}

$("#chatForm")?.addEventListener("submit", event => {
  event.preventDefault();

  const question = chatInput?.value.trim();
  if (!question) return;

  addMessage(question, "user");
  chatInput.value = "";
  addMessage(getAnswer(question), "bot");
});

// Language toggle
$("#langToggle")?.addEventListener("click", () => {
  isHindi = !isHindi;
  applyLanguage();
});

// Start the website in English
applyLanguage();

console.log("PUB USER loaded — English/Hindi enabled.");
