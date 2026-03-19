const COUNTRY_ROUNDS = [
  {
    country: "Japan",
    code: "JP",
    tier: "Easy",
    level: 1,
    cities: ["Tokyo", "Osaka", "Kyoto", "Sapporo", "Nagoya"]
  },
  {
    country: "Italy",
    code: "IT",
    tier: "Easy",
    level: 2,
    cities: ["Rome", "Milan", "Naples", "Turin", "Palermo"]
  },
  {
    country: "Brazil",
    code: "BR",
    tier: "Easy",
    level: 3,
    cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Recife"]
  },
  {
    country: "Turkey",
    code: "TR",
    tier: "Easy",
    level: 4,
    cities: ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"]
  },
  {
    country: "Morocco",
    code: "MA",
    tier: "Medium",
    level: 5,
    cities: ["Casablanca", "Fez", "Marrakesh", "Tangier", "Oujda"]
  },
  {
    country: "Romania",
    code: "RO",
    tier: "Medium",
    level: 6,
    cities: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi", "Constanta"]
  },
  {
    country: "Kazakhstan",
    code: "KZ",
    tier: "Medium",
    level: 7,
    cities: ["Almaty", "Astana", "Shymkent", "Aktobe", "Karaganda"]
  },
  {
    country: "Cambodia",
    code: "KH",
    tier: "Medium",
    level: 8,
    cities: ["Phnom Penh", "Siem Reap", "Battambang", "Kampot", "Sihanoukville"]
  },
  {
    country: "Kyrgyzstan",
    code: "KG",
    tier: "Hard",
    level: 9,
    cities: ["Bishkek", "Osh", "Karakol", "Jalal-Abad", "Naryn"]
  },
  {
    country: "Moldova",
    code: "MD",
    tier: "Hard",
    level: 10,
    cities: ["Chisinau", "Balti", "Cahul", "Orhei", "Soroca"]
  },
  {
    country: "Laos",
    code: "LA",
    tier: "Hard",
    level: 11,
    cities: ["Vientiane", "Luang Prabang", "Pakse", "Savannakhet", "Vang Vieng"]
  },
  {
    country: "Burkina Faso",
    code: "BF",
    tier: "Hard",
    level: 12,
    cities: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora"]
  },
  {
    country: "Uzbekistan",
    code: "UZ",
    tier: "Expert",
    level: 13,
    cities: ["Tashkent", "Samarkand", "Bukhara", "Andijan", "Nukus"]
  },
  {
    country: "Namibia",
    code: "NA",
    tier: "Expert",
    level: 14,
    cities: ["Windhoek", "Walvis Bay", "Swakopmund", "Luderitz", "Otjiwarongo"]
  },
  {
    country: "Tajikistan",
    code: "TJ",
    tier: "Expert",
    level: 15,
    cities: ["Dushanbe", "Khujand", "Kulob", "Bokhtar", "Khorog"]
  },
  {
    country: "Albania",
    code: "AL",
    tier: "Expert",
    level: 16,
    cities: ["Tirana", "Durres", "Shkoder", "Vlore", "Gjirokaster"]
  }
];

const COUNTRY_ALIASES = {
  "japan": "Japan",
  "italy": "Italy",
  "brazil": "Brazil",
  "turkey": "Turkey",
  "turkiye": "Turkey",
  "morocco": "Morocco",
  "romania": "Romania",
  "kazakhstan": "Kazakhstan",
  "cambodia": "Cambodia",
  "kyrgyzstan": "Kyrgyzstan",
  "kyrgyz republic": "Kyrgyzstan",
  "moldova": "Moldova",
  "republic of moldova": "Moldova",
  "laos": "Laos",
  "lao pdr": "Laos",
  "burkina faso": "Burkina Faso",
  "uzbekistan": "Uzbekistan",
  "namibia": "Namibia",
  "tajikistan": "Tajikistan",
  "albania": "Albania"
};

const USERS_KEY = "night-atlas-users-v1";
const SESSION_KEY = "night-atlas-session-v1";

const el = {
  authView: document.getElementById("auth-view"),
  appView: document.getElementById("app-view"),
  loginForm: document.getElementById("login-form"),
  signupForm: document.getElementById("signup-form"),
  authMessage: document.getElementById("auth-message"),
  showLoginButton: document.getElementById("show-login-button"),
  showSignupButton: document.getElementById("show-signup-button"),
  loginUsername: document.getElementById("login-username"),
  loginPassword: document.getElementById("login-password"),
  signupUsername: document.getElementById("signup-username"),
  signupDisplayName: document.getElementById("signup-display-name"),
  signupPassword: document.getElementById("signup-password"),
  navButtons: Array.from(document.querySelectorAll(".nav-button")),
  pageViews: Array.from(document.querySelectorAll(".page-view")),
  logoutButton: document.getElementById("logout-button"),
  currentUserName: document.getElementById("current-user-name"),
  currentUserHandle: document.getElementById("current-user-handle"),
  runHeading: document.getElementById("run-heading"),
  runSubtext: document.getElementById("run-subtext"),
  difficultyLabel: document.getElementById("difficulty-label"),
  scorePill: document.getElementById("score-pill"),
  clueStack: document.getElementById("clue-stack"),
  countryGuessForm: document.getElementById("country-guess-form"),
  countryGuessInput: document.getElementById("country-guess-input"),
  revealClueButton: document.getElementById("reveal-clue-button"),
  guessFeedback: document.getElementById("guess-feedback"),
  nextRoundButton: document.getElementById("next-round-button"),
  runStatsGrid: document.getElementById("run-stats-grid"),
  profileTitle: document.getElementById("profile-title"),
  profileSubtitle: document.getElementById("profile-subtitle"),
  profileRank: document.getElementById("profile-rank"),
  profileCountryCount: document.getElementById("profile-country-count"),
  profileStatsGrid: document.getElementById("profile-stats-grid"),
  countryOutlineGallery: document.getElementById("country-outline-gallery"),
  shareCanvas: document.getElementById("share-canvas"),
  shareCanvasSecondary: document.getElementById("share-canvas-secondary"),
  downloadShareButton: document.getElementById("download-share-button"),
  downloadShareButtonSecondary: document.getElementById("download-share-button-secondary"),
  map: document.getElementById("map"),
  outlineSourceMap: document.getElementById("outline-source-map")
};

const state = {
  users: loadUsers(),
  session: localStorage.getItem(SESSION_KEY) || "",
  currentRound: null,
  map: null,
  mapReady: false,
  autoAdvanceTimer: null,
  outlineMetrics: {}
};

function loadUsers() {
  const saved = localStorage.getItem(USERS_KEY);
  if (!saved) {
    return [];
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUsers() {
  localStorage.setItem(USERS_KEY, JSON.stringify(state.users));
}

function saveSession(username) {
  state.session = username;
  localStorage.setItem(SESSION_KEY, username);
}

function clearSession() {
  state.session = "";
  localStorage.removeItem(SESSION_KEY);
}

function defaultUser(displayName, username, password) {
  return {
    username,
    displayName,
    password,
    stats: {
      correctGuesses: 0,
      incorrectGuesses: 0,
      countriesSolved: [],
      bestLevel: 0,
      runsStarted: 0,
      currentRunScore: 0,
      currentLevel: 1,
      latestRun: [],
      totalRoundsCleared: 0
    }
  };
}

function activeUser() {
  const user = state.users.find((entry) => entry.username === state.session) || null;
  if (user && typeof user.stats.currentLevel !== "number") {
    user.stats.currentLevel = 1;
  }
  return user;
}

function normalizeName(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ");
}

function canonicalCountry(value) {
  const normalized = normalizeName(value);
  return COUNTRY_ALIASES[normalized] || normalized.replace(/\b\w/g, (char) => char.toUpperCase());
}

function setAuthMode(mode) {
  const loginMode = mode === "login";
  el.showLoginButton.classList.toggle("is-active", loginMode);
  el.showSignupButton.classList.toggle("is-active", !loginMode);
  el.loginForm.classList.toggle("hidden", !loginMode);
  el.signupForm.classList.toggle("hidden", loginMode);
  setMessage("");
}

function setMessage(text, type = "") {
  el.authMessage.textContent = text;
  el.authMessage.className = `feedback${type ? ` ${type}` : ""}`;
  el.guessFeedback.className = "feedback large-feedback";
}

function setGuessMessage(text, type = "") {
  el.guessFeedback.textContent = text;
  el.guessFeedback.className = `feedback large-feedback${type ? ` ${type}` : ""}`;
}

function handleSignup(event) {
  event.preventDefault();
  const username = normalizeName(el.signupUsername.value).replace(/\s+/g, "");
  const displayName = el.signupDisplayName.value.trim();
  const password = el.signupPassword.value;

  if (state.users.some((user) => user.username === username)) {
    setMessage("That username already exists on this device.", "error");
    return;
  }

  const user = defaultUser(displayName, username, password);
  state.users.push(user);
  saveUsers();
  saveSession(username);
  setMessage("");
  startFreshRun();
  syncApp();
}

function handleLogin(event) {
  event.preventDefault();
  const username = normalizeName(el.loginUsername.value).replace(/\s+/g, "");
  const password = el.loginPassword.value;
  const user = state.users.find((entry) => entry.username === username);

  if (!user || user.password !== password) {
    setMessage("Invalid username or password.", "error");
    return;
  }

  saveSession(username);
  startRunFromUser();
  syncApp();
}

function startFreshRun() {
  const user = activeUser();
  if (!user) return;
  clearTimeout(state.autoAdvanceTimer);
  user.stats.currentRunScore = 0;
  user.stats.currentLevel = 1;
  user.stats.latestRun = [];
  user.stats.runsStarted += 1;
  saveUsers();
  createRound(1);
}

function startRunFromUser() {
  const user = activeUser();
  if (!user) return;
  createRound(Math.max(1, user.stats.currentLevel || 1));
}

function createRound(level) {
  const round = COUNTRY_ROUNDS[Math.min(level - 1, COUNTRY_ROUNDS.length - 1)];
  state.currentRound = {
    ...round,
    level,
    clues: [...round.cities].reverse().map((city, index) => ({
      city,
      clueLabel: `Clue ${index + 1}`,
      points: Math.max(1, 5 - index)
    })),
    answered: false,
    visibleClueCount: 1
  };
  renderGame();
}

function pointsForVisibleClues(round) {
  return Math.max(1, 6 - round.visibleClueCount);
}

function renderGame() {
  const user = activeUser();
  const round = state.currentRound;
  if (!user || !round) return;

  el.currentUserName.textContent = user.displayName;
  el.currentUserHandle.textContent = `@${user.username}`;
  el.runHeading.textContent = `Level ${round.level}`;
  el.runSubtext.textContent = `Clues reveal from hardest to easiest. Guess early for more points. One wrong answer ends the run.`;
  el.difficultyLabel.textContent = `${round.tier} tier`;
  el.scorePill.textContent = `Score ${user.stats.currentRunScore}`;
  el.nextRoundButton.textContent = "New run";
  el.countryGuessInput.value = "";
  el.countryGuessInput.disabled = false;
  el.revealClueButton.disabled = false;
  el.revealClueButton.classList.remove("hidden");
  el.revealClueButton.textContent =
    round.visibleClueCount >= round.clues.length
      ? "All clues revealed"
      : "Reveal next clue";
  setGuessMessage(`Current guess value: ${pointsForVisibleClues(round)} point${pointsForVisibleClues(round) === 1 ? "" : "s"}.`);

  el.clueStack.innerHTML = "";
  round.clues.forEach((clue, index) => {
    const card = document.createElement("article");
    card.className = "clue-card";
    if (index < round.visibleClueCount) {
      if (index === round.visibleClueCount - 1) {
        card.classList.add("is-latest");
      }
      card.innerHTML = `<strong>${clue.city}</strong><span>${clue.clueLabel} - ${clue.points} Point${clue.points === 1 ? "" : "s"}</span>`;
    } else {
      card.classList.add("is-hidden");
      card.innerHTML = `<strong>Hidden clue</strong><span>${clue.clueLabel} - ${clue.points} Point${clue.points === 1 ? "" : "s"}</span>`;
    }
    el.clueStack.appendChild(card);
  });

  renderRunStats();
}

function renderRunStats() {
  const user = activeUser();
  if (!user) return;

  const stats = [
    ["Current score", user.stats.currentRunScore],
    ["Current level", user.stats.currentLevel],
    ["Best level", user.stats.bestLevel],
    ["Correct", user.stats.correctGuesses],
    ["Incorrect", user.stats.incorrectGuesses]
  ];

  el.runStatsGrid.innerHTML = "";
  stats.forEach(([label, value]) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    el.runStatsGrid.appendChild(card);
  });
}

function handleGuess(event) {
  event.preventDefault();
  const user = activeUser();
  const round = state.currentRound;
  if (!user || !round || round.answered) return;

  const guess = canonicalCountry(el.countryGuessInput.value);
  const correct = guess === round.country;
  round.answered = true;

  if (correct) {
    const awardedPoints = pointsForVisibleClues(round);
    user.stats.correctGuesses += 1;
    user.stats.currentRunScore += awardedPoints;
    user.stats.totalRoundsCleared += 1;
    user.stats.bestLevel = Math.max(user.stats.bestLevel, round.level);
    user.stats.currentLevel = Math.min(COUNTRY_ROUNDS.length, round.level + 1);
    if (!user.stats.countriesSolved.some((entry) => entry.code === round.code)) {
      user.stats.countriesSolved.push({ country: round.country, code: round.code });
    }
    user.stats.latestRun.push({
      country: round.country,
      code: round.code,
      level: round.level,
      clues: round.clues.slice(0, round.visibleClueCount).map((entry) => entry.city),
      points: awardedPoints
    });
    saveUsers();
    applyUnlockedRegions();
    renderProfile();
    renderRunStats();
    drawShareCards();
    flashRegion(round.code);
    setGuessMessage(
      round.level >= COUNTRY_ROUNDS.length
        ? `${round.country} is correct. You earned ${awardedPoints} point${awardedPoints === 1 ? "" : "s"}. Final level cleared. Restarting a fresh run.`
        : `${round.country} is correct. You earned ${awardedPoints} point${awardedPoints === 1 ? "" : "s"}. Auto-loading the next level.`,
      "success"
    );
    el.countryGuessInput.disabled = true;
    el.revealClueButton.disabled = true;
    clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = window.setTimeout(() => {
      const liveUser = activeUser();
      if (!liveUser) {
        return;
      }

      if (round.level >= COUNTRY_ROUNDS.length) {
        liveUser.stats.currentLevel = 1;
        saveUsers();
        startFreshRun();
        syncApp();
        return;
      }

      liveUser.stats.currentLevel = round.level + 1;
      saveUsers();
      createRound(round.level + 1);
      syncApp();
    }, 1200);
    return;
  }

  user.stats.incorrectGuesses += 1;
  user.stats.bestLevel = Math.max(user.stats.bestLevel, Math.max(0, round.level - 1));
  user.stats.currentRunScore = 0;
  user.stats.currentLevel = 1;
  user.stats.latestRun.push({
    country: round.country,
    code: round.code,
    level: round.level,
    clues: round.clues.slice(0, round.visibleClueCount).map((entry) => entry.city),
    failed: true
  });
  saveUsers();
  drawShareCards();
  renderRunStats();
  setGuessMessage(`Incorrect. The answer was ${round.country}. Your run is over.`, "error");
  el.countryGuessInput.disabled = true;
  el.revealClueButton.disabled = true;
}

function handleNextRound() {
  startFreshRun();
}

function handleRevealClue() {
  const round = state.currentRound;
  if (!round || round.answered || round.visibleClueCount >= round.clues.length) {
    return;
  }

  round.visibleClueCount += 1;
  renderGame();

  if (round.visibleClueCount >= round.clues.length) {
    setGuessMessage("Final clue revealed. This guess is worth 1 point.");
  }
}

function showView(viewId) {
  el.navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === viewId);
  });
  el.pageViews.forEach((view) => {
    view.classList.toggle("hidden", view.id !== viewId);
  });
}

function getRank(countryCount) {
  if (countryCount >= 12) return "Atlas Savant";
  if (countryCount >= 8) return "Border Archivist";
  if (countryCount >= 5) return "Night Navigator";
  if (countryCount >= 3) return "Map Hunter";
  return "Rookie Cartographer";
}

function renderProfile() {
  const user = activeUser();
  if (!user) return;

  const countryCount = user.stats.countriesSolved.length;
  el.profileTitle.textContent = `${user.displayName}'s archive`;
  el.profileSubtitle.textContent = `@${user.username} · local account prototype ready to evolve into public multiplayer profiles later.`;
  el.profileRank.textContent = getRank(countryCount);
  el.profileCountryCount.textContent = `${countryCount} country outline${countryCount === 1 ? "" : "s"} unlocked`;

  const stats = [
    ["Correct guesses", user.stats.correctGuesses],
    ["Incorrect guesses", user.stats.incorrectGuesses],
    ["Countries solved", countryCount],
    ["Best level", user.stats.bestLevel],
    ["Runs started", user.stats.runsStarted],
    ["Rounds cleared", user.stats.totalRoundsCleared]
  ];

  el.profileStatsGrid.innerHTML = "";
  stats.forEach(([label, value]) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    el.profileStatsGrid.appendChild(card);
  });

  renderCountryOutlines(user.stats.countriesSolved);
}

function buildMaps() {
  state.map = new jsVectorMap({
    selector: "#map",
    map: "world",
    zoomButtons: false,
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: "#101824",
        stroke: "rgba(255,255,255,0.12)",
        strokeWidth: 0.8
      },
      hover: {
        fill: "#21354a"
      }
    }
  });

  requestAnimationFrame(() => {
    state.mapReady = true;
    state.outlineMetrics = {};
    applyUnlockedRegions();
    renderProfile();
    drawShareCards();
  });
}

function regionElements(root) {
  return Array.from(root.querySelectorAll(".jsvmap-region"));
}

function matchRegionCode(region, code) {
  const target = code.toUpperCase();
  const regionCode =
    (region.dataset.code ||
      region.getAttribute("data-code") ||
      region.getAttribute("data-region") ||
      region.getAttribute("id") ||
      "")
      .toUpperCase();

  if (regionCode === target || regionCode.endsWith(`-${target}`)) {
    return true;
  }

  const className = typeof region.className === "string" ? region.className.toUpperCase() : "";
  return className.includes(target);
}

function findRenderedRegion(code) {
  return regionElements(el.map).find((region) => matchRegionCode(region, code)) || null;
}

function applyUnlockedRegions() {
  const user = activeUser();
  if (!state.mapReady || !user) return;

  const unlocked = new Set(user.stats.countriesSolved.map((entry) => entry.code.toUpperCase()));
  regionElements(el.map).forEach((region) => {
    const code = (region.dataset.code || region.getAttribute("data-code") || "").toUpperCase();
    const selected = unlocked.has(code);
    region.style.fill = selected ? "#69e3ff" : "#101824";
    region.style.stroke = selected ? "rgba(105,227,255,0.92)" : "rgba(255,255,255,0.12)";
    region.style.strokeWidth = selected ? "1.15" : "0.8";
    region.style.filter = selected ? "drop-shadow(0 0 12px rgba(105,227,255,0.34))" : "none";
  });
}

function flashRegion(code) {
  const region = regionElements(el.map).find((entry) => {
    const regionCode = (entry.dataset.code || entry.getAttribute("data-code") || "").toUpperCase();
    return regionCode === code.toUpperCase();
  });

  if (!region) return;

  region.animate(
    [
      { fill: "#8affc7", opacity: 0.9 },
      { fill: "#d7fff0", opacity: 1 },
      { fill: "#69e3ff", opacity: 1 }
    ],
    { duration: 900, easing: "ease-out" }
  );
}

function getWorldPathRecord(code) {
  const worldMapData =
    (typeof jsVectorMap !== "undefined" && jsVectorMap.maps && jsVectorMap.maps.world) || null;
  if (!worldMapData || !worldMapData.paths) {
    return null;
  }

  return worldMapData.paths[code.toUpperCase()] || null;
}

function getWorldPathString(code) {
  const record = getWorldPathRecord(code);
  if (!record) {
    return "";
  }

  if (typeof record === "string") {
    return record;
  }

  return record.path || "";
}

function measureCountryPath(code) {
  const upperCode = code.toUpperCase();
  if (state.outlineMetrics[upperCode]) {
    return state.outlineMetrics[upperCode];
  }

  const renderedRegion = findRenderedRegion(upperCode);
  if (renderedRegion && typeof renderedRegion.getBBox === "function") {
    const renderedPath = renderedRegion.getAttribute("d");
    if (renderedPath) {
      const box = renderedRegion.getBBox();
      const metrics = {
        pathData: renderedPath,
        box: {
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height
        }
      };
      state.outlineMetrics[upperCode] = metrics;
      return metrics;
    }
  }

  const pathData = getWorldPathString(upperCode);
  if (!pathData) {
    return null;
  }

  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  const path = document.createElementNS(ns, "path");
  svg.setAttribute("width", "1200");
  svg.setAttribute("height", "700");
  svg.setAttribute("viewBox", "0 0 1200 700");
  path.setAttribute("d", pathData);
  svg.appendChild(path);
  el.outlineSourceMap.innerHTML = "";
  el.outlineSourceMap.appendChild(svg);

  const box = path.getBBox();
  const metrics = {
    pathData,
    box: {
      x: box.x,
      y: box.y,
      width: box.width,
      height: box.height
    }
  };

  state.outlineMetrics[upperCode] = metrics;
  return metrics;
}

function renderCountryOutlines(countries) {
  if (!state.mapReady) {
    requestAnimationFrame(() => renderCountryOutlines(countries));
    return;
  }

  el.countryOutlineGallery.innerHTML = "";
  if (!countries.length) {
    const empty = document.createElement("div");
    empty.className = "stat-card";
    empty.innerHTML = "<span>Country archive</span><strong>No countries unlocked yet</strong>";
    el.countryOutlineGallery.appendChild(empty);
    return;
  }

  countries
    .slice()
    .sort((a, b) => a.country.localeCompare(b.country))
    .forEach((entry) => {
      const card = document.createElement("article");
      card.className = "outline-card";
      card.innerHTML = `
        <div class="outline-art">${countryOutlineSvg(entry.code)}</div>
        <div class="outline-meta">
          <strong>${entry.country}</strong>
          <span>${entry.code}</span>
        </div>
      `;
      el.countryOutlineGallery.appendChild(card);
    });
}

function countryOutlineSvg(code) {
  const metrics = measureCountryPath(code);
  if (!metrics) {
    return "";
  }

  const padding = 8;
  const viewBox = [
    metrics.box.x - padding,
    metrics.box.y - padding,
    Math.max(28, metrics.box.width + padding * 2),
    Math.max(28, metrics.box.height + padding * 2)
  ].join(" ");

  return `<svg viewBox="${viewBox}" role="img" aria-label="${code} outline"><path d="${metrics.pathData}"></path></svg>`;
}

function drawShareCards() {
  const user = activeUser();
  if (!user) return;
  [el.shareCanvas, el.shareCanvasSecondary].forEach((canvas) => drawShareCard(canvas, user));
}

function drawShareCard(canvas, user) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);
  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#05080d");
  bg.addColorStop(1, "#0a1320");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  const glow = ctx.createRadialGradient(width * 0.78, height * 0.18, 20, width * 0.78, height * 0.18, 320);
  glow.addColorStop(0, "rgba(105, 227, 255, 0.28)");
  glow.addColorStop(1, "rgba(105, 227, 255, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 2;
  roundRect(ctx, 28, 28, width - 56, height - 56, 26);
  ctx.stroke();

  ctx.fillStyle = "#69e3ff";
  ctx.font = "600 24px Space Grotesk";
  ctx.fillText("CityStreak", 72, 94);

  ctx.fillStyle = "#f4f7fb";
  ctx.font = "400 64px Instrument Serif";
  ctx.fillText(`${user.displayName}'s run`, 72, 168);

  ctx.font = "500 22px Space Grotesk";
  ctx.fillStyle = "#92a1b6";
  ctx.fillText(`@${user.username} · Score ${user.stats.currentRunScore} · Best level ${user.stats.bestLevel}`, 72, 214);

  const recent = user.stats.latestRun.slice(-3).reverse();
  ctx.font = "600 18px Space Grotesk";
  ctx.fillStyle = "#f4f7fb";
  ctx.fillText("Recent countries", 72, 286);

  recent.forEach((entry, index) => {
    const y = 326 + index * 108;
    ctx.fillStyle = entry.failed ? "#ff7a8f" : "#85ffb8";
    ctx.fillText(`${entry.country} · Level ${entry.level}${entry.failed ? " · missed" : ""}`, 72, y);
    ctx.fillStyle = "#92a1b6";
    ctx.font = "500 17px Space Grotesk";
    ctx.fillText(entry.clues.join("  ·  "), 72, y + 34);
    ctx.font = "600 18px Space Grotesk";
  });

  ctx.fillStyle = "#f4f7fb";
  ctx.fillText("Unlocked outlines", 728, 286);

  const outlines = user.stats.countriesSolved.slice(0, 6);
  outlines.forEach((entry, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const x = 728 + col * 132;
    const y = 326 + row * 132;

    ctx.fillStyle = "rgba(255,255,255,0.03)";
    roundRect(ctx, x, y, 108, 108, 22);
    ctx.fill();

    drawOutlineIntoCanvas(ctx, entry.code, x + 10, y + 10, 88, 60);
    ctx.fillStyle = "#92a1b6";
    ctx.font = "500 14px Space Grotesk";
    ctx.fillText(entry.code, x + 14, y + 88);
  });

  ctx.fillStyle = "#92a1b6";
  ctx.font = "500 16px Space Grotesk";
  ctx.fillText("Five cities. One country. Keep the run alive.", 72, height - 76);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawOutlineIntoCanvas(ctx, code, x, y, width, height) {
  const metrics = measureCountryPath(code);
  if (!metrics || typeof Path2D === "undefined") {
    return;
  }

  const scale = Math.min(width / metrics.box.width, height / metrics.box.height);
  const offsetX = x + (width - metrics.box.width * scale) / 2 - metrics.box.x * scale;
  const offsetY = y + (height - metrics.box.height * scale) / 2 - metrics.box.y * scale;

  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.scale(scale, scale);
  ctx.fillStyle = "rgba(105,227,255,0.1)";
  ctx.strokeStyle = "#69e3ff";
  ctx.lineWidth = 1.6 / scale;
  const path = new Path2D(metrics.pathData);
  ctx.fill(path);
  ctx.stroke(path);
  ctx.restore();
}

function downloadCanvas(canvas, fileName) {
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = fileName;
  link.click();
}

function syncApp() {
  const user = activeUser();
  const authenticated = Boolean(user);
  el.authView.classList.toggle("hidden", authenticated);
  el.appView.classList.toggle("hidden", !authenticated);

  if (!authenticated) {
    return;
  }

  renderGame();
  renderProfile();
  renderRunStats();
  applyUnlockedRegions();
  drawShareCards();
  showView("game-view");
}

el.showLoginButton.addEventListener("click", () => setAuthMode("login"));
el.showSignupButton.addEventListener("click", () => setAuthMode("signup"));
el.signupForm.addEventListener("submit", handleSignup);
el.loginForm.addEventListener("submit", handleLogin);
el.countryGuessForm.addEventListener("submit", handleGuess);
el.revealClueButton.addEventListener("click", handleRevealClue);
el.nextRoundButton.addEventListener("click", handleNextRound);
el.logoutButton.addEventListener("click", () => {
  clearTimeout(state.autoAdvanceTimer);
  clearSession();
  setAuthMode("login");
  syncApp();
});
el.navButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewTarget));
});
el.downloadShareButton.addEventListener("click", () => {
  downloadCanvas(el.shareCanvas, "citystreak-share.png");
});
el.downloadShareButtonSecondary.addEventListener("click", () => {
  downloadCanvas(el.shareCanvasSecondary, "citystreak-share.png");
});

buildMaps();
setAuthMode("login");
if (activeUser()) {
  startRunFromUser();
}
syncApp();
