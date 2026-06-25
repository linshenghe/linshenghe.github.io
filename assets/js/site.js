const copy = {
  "documentTitle": "Linsheng He",
  "metaDescription": "Linsheng He academic homepage: research, publications, CV, and conference activities.",
  "themeToNight": "Switch to night mode",
  "themeToDay": "Switch to day mode",
  "wordmark": "Linsheng He",
  "navHome": "Home",
  "navResearch": "Research",
  "navPublications": "Publications",
  "navCv": "CV",
  "navConferences": "Activities",
  "heroIntro": "I’m Linsheng He, a Ph.D. candidate in Public Administration at <a href=\"https://www.sppm.tsinghua.edu.cn\" target=\"_blank\" rel=\"noreferrer\">Tsinghua University’s School of Public Policy and Management</a>. I study how policy design, behavior, and collaboration shape public outcomes.",
  "heroDetail": "I’m especially interested in the human side of governance: how people communicate, coordinate, and respond to policy. I use experiments and comparative methods to study collaboration, policy feedback, and public attitudes in context.",
  "lastUpdated": "Last updated 2026",
  "downloadCv": "Download CV",
  "portraitAlt": "Illustrated portrait of Linsheng He",
  "researchKicker": "Research",
  "researchTitle": "Research agenda",
  "researchIntro": "My research examines how governments design policy instruments, communicate with publics, and coordinate across organizations. I use behavioral experiments, comparative case analysis, meta-analysis, and computational approaches to study public administration and policy processes.",
  "themeOne": "Policy design",
  "themeOneText": "How do behavioral assumptions shape policy instruments and policy mixes?",
  "themeOneMethods": "Policy process; evaluation; comparative analysis",
  "themeTwo": "Behavioral governance",
  "themeTwoText": "How do people perceive, remember, and respond to government action?",
  "themeTwoMethods": "Experiments; public attitudes; policy feedback",
  "themeThree": "Collaboration",
  "themeThreeText": "How do organizations and publics coordinate in complex governance settings?",
  "themeThreeMethods": "Coproduction; networks; collaborative governance",
  "publicationsKicker": "Publications",
  "publicationsTitle": "Selected publications",
  "pubStatusArticle": "Journal article",
  "pubStatusChinese": "Chinese-language journal article",
  "pubOne": "<strong>He, L.</strong>, Dai, Y., & Guo, Y. Public Administration, Online First. SSCI, JCR Q1, ABS 4.",
  "pubOneSummary": "Shows that policy mixes are more effective when the behavioral assumptions embedded in their instruments are consistent.",
  "pubOneKeywords": "Policy mix; behavioral assumptions; policy instruments",
  "pubTwo": "Guo, Y., & <strong>He, L.</strong> Review of Policy Research, 41(4), 654-678. SSCI, JCR Q1.",
  "pubTwoSummary": "Examines how local culture can guide audience segmentation and communication strategies around nuclear power projects.",
  "pubTwoKeywords": "Government communication; local culture; nuclear power",
  "pubThreeTitle": "政府采纳人脸识别技术的政策反馈解释 (Policy feedback explanations for government adoption of facial recognition technology)",
  "pubThreeJournal": "公共行政评论 (Journal of Public Administration)",
  "pubThree": "郭跃, 洪婧诗, & <strong>何林晟</strong>. 公共行政评论 (Journal of Public Administration), 14(05), 159-177. CSSCI.",
  "pubThreeSummary": "Uses a comparative case study of Hangzhou and San Francisco to explain government adoption of facial recognition technology through policy feedback.",
  "pubThreeKeywords": "Policy feedback; facial recognition; comparative case study",
  "pubFourJournal": "中国行政管理 (Chinese Public Administration)",
  "pubFour": "郭跃, <strong>何林晟</strong>, & 苏竣. 中国行政管理 (Chinese Public Administration), (05), 71-78. CSSCI.",
  "pubFourSummary": "Builds an instrument-narrative-feedback framework to connect behavioral public policy with general policy process theories.",
  "pubFourKeywords": "Behavioral public policy; policy instruments; narrative; feedback",
  "sourceLabel": "Source",
  "cvKicker": "CV",
  "cvTitle": "Curriculum vitae",
  "cvStatusLabel": "Current status",
  "cvStatusText": "Ph.D. candidate, Tsinghua University",
  "cvAreasLabel": "Research areas",
  "cvAreasText": "Policy design, behavioral public management, government communication, collaborative governance",
  "cvUpdatedLabel": "Updated",
  "openCv": "Open PDF",
  "cvPdfFallback": "PDF preview is not available in this browser. <a href=\"assets/cv/linsheng-he-cv.pdf\">Open the CV PDF</a>.",
  "navEducation": "Education",
  "educationTitle": "Education & qualifications",
  "eduTsinghuaSchool": "Tsinghua University",
  "eduTsinghuaDegree": "Ph.D. Candidate, School of Public Policy & Management",
  "eduTsinghuaLink": "School of Public Policy & Management →",
  "eduBnuSchool": "Beijing Normal University",
  "eduBnuDegree": "Bachelor, School of Government",
  "tsinghuaText": "Ph.D. candidate in Public Administration, School of Public Policy and Management, Tsinghua University.",
  "bnuText": "B.A. in Public Affairs Management, School of Government, Beijing Normal University.",
  "awards": "<strong>Awards.</strong> National Scholarship; ASPA-SCPA Best Student Paper Award; ICCPS Best Paper Award; Best Paper Award from the Public Administration Review Young Scholars Forum.",
  "service": "<strong>Academic service.</strong> Editorial assistant for Public Administration; reviewer for Governance, Public Management Review, Information Polity, and Chinese public administration journals.",
  "projects": "<strong>Research projects.</strong> Participant in projects supported by the National Natural Science Foundation of China, Cyrus Tang Foundation, Tsinghua-Toyota Joint Research Institute, and policy advisory work on nuclear safety governance.",
  "conferencesTitle": "Activities",
  "upcomingConferencesTitle": "Upcoming",
  "pastConferencesTitle": "Past presentations",
  "legendUpcoming": "Upcoming",
  "legendPast": "Attended",
  "showMore": "Show all",
  "showLess": "Show less",
  "noUpcomingConferences": "No upcoming conferences listed yet.",
  "noPastConferences": "No past presentations listed yet.",
  "pubFourTitle": "“工具-叙事-反馈”：一个行为公共政策的研究框架 (Tool, Narrative, and Feedback: A Research Framework for Behavioral Public Policy)"
};

const pages = ["home", "research", "publications", "cv", "conferences"];
const themeStorageKey = "site-theme";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const themeIconSvg = {
  moon:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path></svg>',
  sun:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4.2"></circle><path d="M12 2.8v2.1M12 19.1v2.1M4.9 4.9 6.4 6.4M17.6 17.6l1.5 1.5M2.8 12h2.1M19.1 12h2.1M4.9 19.1 6.4 17.6M17.6 6.4l1.5-1.5"></path></svg>',
};

const getTimeTheme = () => {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6 ? "night" : "day";
};

const getSavedTheme = () => {
  try {
    const theme = localStorage.getItem(themeStorageKey);
    return theme === "day" || theme === "night" ? theme : "";
  } catch (error) {
    return "";
  }
};

const setTheme = (theme) => {
  const themeColor = theme === "night" ? "#101916" : "#f7f3ea";
  const colorScheme = theme === "night" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = colorScheme;
  document.querySelector("meta[name='theme-color']").setAttribute("content", themeColor);
  updateThemeToggle();
};

const applyTimeTheme = () => {
  setTheme(getSavedTheme() || getTimeTheme());
};

const updateThemeToggle = () => {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;
  const currentTheme = document.documentElement.dataset.theme;
  const label = currentTheme === "night" ? copy.themeToDay : copy.themeToNight;
  toggle.innerHTML = currentTheme === "night" ? themeIconSvg.sun : themeIconSvg.moon;
  toggle.setAttribute("aria-label", label);
  toggle.setAttribute("title", label);
  toggle.setAttribute("aria-pressed", String(currentTheme === "night"));
};

const getRoute = () => {
  const route = window.location.hash.replace("#", "");
  return pages.includes(route) ? route : "home";
};

const applyPageCopy = () => {
  document.documentElement.lang = "en";
  document.title = copy.documentTitle;
  document.querySelector("meta[name='description']").setAttribute("content", copy.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key] !== undefined) {
      element.textContent = copy[key];
      element.hidden = copy[key] === "";
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (copy[key]) {
      element.innerHTML = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (copy[key]) {
      element.setAttribute("alt", copy[key]);
    }
  });

  updateThemeToggle();
  renderConferences();
};

const setRoute = (route) => {
  const nextRoute = pages.includes(route) ? route : "home";

  document.querySelectorAll("[data-page]").forEach((page) => {
    const isActive = page.dataset.page === nextRoute;
    page.hidden = !isActive;
    page.classList.toggle("is-active", isActive);
  });

  document.querySelectorAll("[data-route]").forEach((link) => {
    const isActive = link.dataset.route === nextRoute;
    link.classList.toggle("is-active", isActive);
    if (link.matches(".nav a")) {
      link.setAttribute("aria-current", isActive ? "page" : "false");
    }
  });

  document.documentElement.dataset.route = nextRoute;

  if (nextRoute === "conferences") {
    const refreshMap = () => {
      window.requestAnimationFrame(() => {
        if (confMap) {
          confMap.invalidateSize();
          if (conferenceBounds.length > 0) {
            confMap.fitBounds(conferenceBounds, { padding: [28, 28] });
          }
        }
      });
    };

    if (leafletReady) {
      refreshMap();
    } else {
      loadLeaflet().then(() => {
        initMap();
        renderConferences();
        refreshMap();
      });
    }
  }

  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
};

let confMap = null;
let conferenceLayer = null;
let conferenceBounds = [];
const conferenceMarkers = new Map();

let leafletReady = false;
let leafletLoading = null;

const loadLeaflet = () => {
  if (leafletReady) return Promise.resolve();
  if (leafletLoading) return leafletLoading;

  leafletLoading = new Promise((resolve) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(css);

    const js = document.createElement("script");
    js.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    js.onload = () => {
      leafletReady = true;
      resolve();
    };
    js.onerror = () => {
      leafletLoading = null;
    };
    document.head.appendChild(js);
  });

  return leafletLoading;
};

const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const parseDate = (value) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const formatDate = (value) => {
  const date = parseDate(value);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const formatDateRange = (entry) => {
  const start = formatDate(entry.startDate);
  const end = formatDate(entry.endDate);
  return entry.startDate === entry.endDate ? start : `${start} – ${end}`;
};

const setActiveConference = (id) => {
  document.querySelectorAll("[data-conference-id]").forEach((element) => {
    element.classList.toggle("is-active", element.dataset.conferenceId === id);
  });
};

const initMap = () => {
  const el = document.getElementById("map");
  if (!el || confMap || typeof L === "undefined") return;
  confMap = L.map(el, { scrollWheelZoom: false }).setView([30, 110], 3);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(confMap);
  conferenceLayer = L.layerGroup().addTo(confMap);
};

const addConferenceMarker = (entry, kind) => {
  if (!confMap || !conferenceLayer || !entry.coordinates) return null;
  const { lat, lon } = entry.coordinates;
  const color = kind === "upcoming" ? "#a65f45" : "#34483d";
  const marker = L.circleMarker([lat, lon], {
    radius: kind === "upcoming" ? 8 : 6,
    fillColor: color,
    color: "#f7f3ea",
    weight: 2,
    fillOpacity: 0.9,
  }).addTo(conferenceLayer);

  marker.bindTooltip(`${entry.organization ? `${entry.organization}: ` : ""}${entry.city}`, {
    direction: "top",
    offset: [0, -8],
  });
  marker.bindPopup(`<strong>${entry.title}</strong><br>${entry.city}`);
  marker.on("click", () => setActiveConference(entry.id));
  conferenceMarkers.set(entry.id, marker);
  return [lat, lon];
};

const focusConference = (entry) => {
  if (!confMap || !entry.coordinates) return;
  const marker = conferenceMarkers.get(entry.id);
  const { lat, lon } = entry.coordinates;
  confMap.flyTo([lat, lon], Math.max(confMap.getZoom(), 5), { duration: 0.45 });
  if (marker) marker.openPopup();
  setActiveConference(entry.id);
};

const renderUpcomingConferences = () => {
  const list = document.querySelector("[data-upcoming-conference-list]");
  if (!list) return;
  list.innerHTML = "";

  if (!upcomingConferences.length) {
    const empty = document.createElement("p");
    empty.className = "conference-empty";
    empty.textContent = copy.noUpcomingConferences;
    list.appendChild(empty);
    return;
  }

  upcomingConferences.forEach((entry) => {
    const card = document.createElement("article");
    const title = document.createElement("h4");
    const place = document.createElement("p");

    card.className = "upcoming-card";
    card.tabIndex = 0;
    card.dataset.conferenceId = entry.id;
    title.textContent = entry.title;
    place.textContent = `${formatDateRange(entry)} - ${entry.city}`;

    card.append(title, place);
    card.addEventListener("click", () => focusConference(entry));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        focusConference(entry);
      }
    });
    list.appendChild(card);
  });
};

const VISIBLE_PAST = 5;

const renderConferences = () => {
  const list = document.querySelector("[data-conference-list]");
  const toggleBtn = document.querySelector("[data-conference-toggle]");
  const typeNames = { international: "International", domestic: "Domestic" };

  if (!list) return;
  list.innerHTML = "";
  renderUpcomingConferences();

  initMap();
  conferenceMarkers.clear();
  if (conferenceLayer) {
    conferenceLayer.clearLayers();

    const bounds = [];
    upcomingConferences.forEach((entry) => {
      const coordinates = addConferenceMarker(entry, "upcoming");
      if (coordinates) bounds.push(coordinates);
    });

    conferenceEntries.filter((e) => e.coordinates).forEach((entry, index) => {
      const normalizedEntry = { ...entry, id: entry.id || `past-${index}` };
      const coordinates = addConferenceMarker(normalizedEntry, "past");
      if (coordinates) bounds.push(coordinates);
    });

    conferenceBounds = bounds;
    if (bounds.length > 0) {
      confMap.fitBounds(bounds, { padding: [28, 28] });
    }
  }

  const total = conferenceEntries.length;
  const needsCollapse = total > VISIBLE_PAST;
  let expanded = false;

  const renderItems = () => {
    list.innerHTML = "";
    const limit = expanded ? total : VISIBLE_PAST;

    conferenceEntries.slice(0, limit).forEach((entry, index) => {
      const normalizedEntry = { ...entry, id: entry.id || `past-${index}` };
      const item = document.createElement("li");
      const type = document.createElement("small");
      const title = document.createElement("strong");
      const noteEl = document.createElement("span");
      const city = document.createElement("span");

      item.dataset.conferenceId = normalizedEntry.id;
      item.tabIndex = normalizedEntry.coordinates ? 0 : -1;
      item.classList.toggle("is-mappable", Boolean(normalizedEntry.coordinates));
      type.textContent = `${normalizedEntry.year} - ${typeNames[normalizedEntry.type]}`;
      title.textContent = normalizedEntry.title;
      title.setAttribute("translate", "no");
      city.textContent = normalizedEntry.city;
      if (normalizedEntry.note) {
        noteEl.textContent = normalizedEntry.note;
      }

      item.append(type, title, city);
      if (normalizedEntry.note) item.append(noteEl);
      if (normalizedEntry.coordinates) {
        item.addEventListener("click", () => focusConference(normalizedEntry));
        item.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            focusConference(normalizedEntry);
          }
        });
      }
      list.appendChild(item);
    });
  };

  renderItems();

  if (toggleBtn) {
    if (needsCollapse) {
      toggleBtn.hidden = false;
      toggleBtn.textContent = copy.showMore;
      toggleBtn.onclick = () => {
        expanded = !expanded;
        toggleBtn.textContent = expanded ? copy.showLess : copy.showMore;
        renderItems();
      };
    } else {
      toggleBtn.hidden = true;
    }
  }
};

applyTimeTheme();
applyPageCopy();
setRoute(getRoute());

document.querySelector("[data-theme-toggle]").addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme === "night" ? "night" : "day";
  const nextTheme = currentTheme === "night" ? "day" : "night";
  try {
    localStorage.setItem(themeStorageKey, nextTheme);
  } catch (error) {
    // Theme switching still works for this page view when storage is unavailable.
  }
  setTheme(nextTheme);
});

document.querySelectorAll("[data-route]").forEach((link) => {
  link.addEventListener("click", () => {
    setRoute(link.dataset.route);
  });
});

window.addEventListener("hashchange", () => {
  setRoute(getRoute());
});

window.setInterval(applyTimeTheme, 300000);
