const DAILY_START_DATE = "2026-03-20";
const DAILY_RUN_LENGTH = 10;
const AUTHORED_DAILY_RUNS = 6;

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
  "albania": "Albania",
  "south korea": "South Korea",
  "republic of korea": "South Korea",
  "netherlands": "Netherlands",
  "switzerland": "Switzerland",
  "bangladesh": "Bangladesh",
  "belgium": "Belgium",
  "azerbaijan": "Azerbaijan",
  "guatemala": "Guatemala",
  "botswana": "Botswana",
  "uruguay": "Uruguay",
  "cameroon": "Cameroon"
};

const COUNTRY_REGIONS = {
  Japan: "East Asia",
  Italy: "Southern Europe",
  Brazil: "South America",
  Turkey: "Eastern Mediterranean",
  Morocco: "North Africa",
  Romania: "Eastern Europe",
  Kazakhstan: "Central Asia",
  Cambodia: "Southeast Asia",
  Kyrgyzstan: "Central Asia",
  Moldova: "Eastern Europe",
  Laos: "Southeast Asia",
  "Burkina Faso": "West Africa",
  Uzbekistan: "Central Asia",
  Namibia: "Southern Africa",
  Tajikistan: "Central Asia",
  Albania: "Southern Europe",
  Portugal: "Southern Europe",
  Thailand: "Southeast Asia",
  Egypt: "North Africa",
  "South Africa": "Southern Africa",
  Argentina: "South America",
  India: "South Asia",
  Indonesia: "Southeast Asia",
  Canada: "North America",
  Spain: "Southern Europe",
  Germany: "Central Europe",
  Mexico: "North America",
  Vietnam: "Southeast Asia",
  Poland: "Central Europe",
  Malaysia: "Southeast Asia",
  Peru: "South America",
  Greece: "Southern Europe",
  "Saudi Arabia": "Arabian Peninsula",
  Philippines: "Southeast Asia",
  Chile: "South America",
  Kenya: "East Africa",
  Sweden: "Nordics",
  Nepal: "South Asia",
  Tanzania: "East Africa",
  Croatia: "Balkans",
  Jordan: "Middle East",
  Ecuador: "South America",
  Ghana: "West Africa",
  Finland: "Nordics",
  Austria: "Central Europe",
  Serbia: "Balkans",
  Bolivia: "South America",
  Georgia: "Caucasus",
  Tunisia: "North Africa",
  "Sri Lanka": "South Asia",
  "South Korea": "East Asia",
  Netherlands: "Western Europe",
  Switzerland: "Central Europe",
  Bangladesh: "South Asia",
  Belgium: "Western Europe",
  Azerbaijan: "Caucasus",
  Guatemala: "Central America",
  Botswana: "Southern Africa",
  Uruguay: "South America",
  Cameroon: "Central Africa"
};

const COUNTRY_NAMES = [
  "Afghanistan",
  "Algeria",
  "China",
  "Argentina",
  "Andorra",
  "North Korea",
  "Armenia",
  "Angola",
  "Russia",
  "Bahamas",
  "Australia",
  "United States of America",
  "Bahrain",
  "Botswana",
  "Belarus",
  "Brazil",
  "Bhutan",
  "Bulgaria",
  "Bolivia",
  "Libya",
  "Central African Republic",
  "Morocco",
  "Colombia",
  "Sudan",
  "Croatia",
  "Tunisia",
  "Cuba",
  "Uzbekistan",
  "Cyprus",
  "Turkey",
  "Czech",
  "Wales",
  "Dominica",
  "France",
  "Dominican",
  "Ecuador",
  "New Zealand",
  "Equatorial Guinea",
  "Mexico",
  "Ethiopia",
  "Marshall Islands",
  "Gambia",
  "Belize",
  "Georgia",
  "Guatemala",
  "Ghana",
  "Honduras",
  "Grenada",
  "El Salvador",
  "Guinea",
  "Nicaragua",
  "Iran",
  "Costa Rica",
  "Iraq",
  "Panama",
  "Jamaica",
  "Poland",
  "Jordan",
  "Moldova",
  "Kenya",
  "Hungary",
  "Kuwait",
  "Romania",
  "Laos",
  "Greece",
  "Latvia",
  "Serbia",
  "Lebanon",
  "Iceland",
  "Liberia",
  "Norway",
  "Lithuania",
  "Sweden",
  "Madagascar",
  "Denmark",
  "Malawi",
  "Finland",
  "Malaysia",
  "Faeroe Islands",
  "Maldives",
  "Greenland",
  "Mali",
  "Canada",
  "Mauritania",
  "Ireland",
  "Mauritius",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Niger",
  "Democratic Republic of the Congo",
  "Nigeria",
  "Zambia",
  "Macedonia",
  "Kazakhstan",
  "Oman",
  "Kiribati",
  "Palestine",
  "England",
  "Papua New Guinea",
  "Chile",
  "Paraguay",
  "Monaco",
  "Peru",
  "Mongolia",
  "Rwanda",
  "Micronesia",
  "Senegal",
  "Montenegro",
  "Sierra Leone",
  "Liechtenstein",
  "Singapore",
  "Luxembourg",
  "Slovakia",
  "Kyrgyzstan",
  "Slovenia",
  "Tajikistan",
  "Somalia",
  "Turkmenistan",
  "Syria",
  "Lesotho",
  "Congo",
  "Tanzania",
  "Fiji",
  "Timor-Leste",
  "Nauru",
  "Togo",
  "Palau",
  "Trinidad",
  "Solomon Islands",
  "Uruguay",
  "Samoa",
  "Venezuela",
  "Tuvalu",
  "Vietnam",
  "Vanuatu",
  "Yemen",
  "Antigua and Barbuda",
  "Zimbabwe",
  "Barbados",
  "Guinea-Bissau",
  "Saint Vincent and the Grenadines",
  "San Marino",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Benin",
  "Bosnia and Herzegovina",
  "Brunei",
  "Germany",
  "Azerbaijan",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cameroon",
  "Chad",
  "Comoros",
  "Cote d'Ivoire",
  "Djibouti",
  "Eritrea",
  "Eswatini",
  "Gabon",
  "Guyana",
  "Haiti",
  "India",
  "Indonesia",
  "Israel",
  "Italy",
  "Malta",
  "Nepal",
  "Netherlands",
  "Pakistan",
  "Portugal",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Sao Tome and Principe",
  "Seychelles",
  "South Africa",
  "Spain",
  "Suriname",
  "Switzerland",
  "Thailand",
  "Tonga",
  "Uganda",
  "Philippines",
  "Egypt",
  "Japan",
  "Saudi Arabia",
  "South Korea",
  "Sri Lanka",
  "United Arab Emirates",
  "Qatar",
  "Albania",
  "Cambodia",
  "Ukraine",
  "Estonia"
];

const LOCAL_PROFILE_KEY = "geostreak.localProfile.v1";
const VISITOR_ID_KEY = "geostreak.visitorId.v1";
const VISITOR_TRACKED_SESSION_KEY = "geostreak.visitorTracked.v1";
const VISITOR_TRACKED_DATE_KEY = "geostreak.visitorTrackedDate.v1";
const VISITOR_COOKIE_KEY = "geostreak_visitor_id";
const LOCKED_REGION_FILL = "#101824";
const LOCKED_REGION_STROKE = "rgba(255,255,255,0.12)";
const UNLOCKED_REGION_FILL = "#3df4ff";
const UNLOCKED_REGION_STROKE = "#eaffff";
const UNLOCKED_REGION_GLOW = "drop-shadow(0 0 18px rgba(61,244,255,0.82))";

function defaultStats() {
  return {
    correctGuesses: 0,
    incorrectGuesses: 0,
    countriesSolved: [],
    bestScore: 0,
    dailyCompleted: 0,
    dailyHistory: {},
    currentPuzzleScore: 0,
    latestRun: [],
    totalRoundsCleared: 0,
    lastPlayedDate: ""
  };
}

function generateVisitorId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  const randomPart = Math.random().toString(36).slice(2);
  return `visitor_${Date.now()}_${randomPart}`;
}

function readCookie(name) {
  const prefix = `${name}=`;
  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix));

  return match ? decodeURIComponent(match.slice(prefix.length)) : "";
}

function writeCookie(name, value, maxAgeSeconds = 60 * 60 * 24 * 365 * 5) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax`;
}

function getVisitorId() {
  try {
    const existing = window.localStorage.getItem(VISITOR_ID_KEY);
    if (existing) {
      writeCookie(VISITOR_COOKIE_KEY, existing);
      return existing;
    }

    const cookieValue = readCookie(VISITOR_COOKIE_KEY);
    if (cookieValue) {
      window.localStorage.setItem(VISITOR_ID_KEY, cookieValue);
      return cookieValue;
    }

    const created = generateVisitorId();
    window.localStorage.setItem(VISITOR_ID_KEY, created);
    writeCookie(VISITOR_COOKIE_KEY, created);
    return created;
  } catch {
    const cookieValue = readCookie(VISITOR_COOKIE_KEY);
    if (cookieValue) {
      return cookieValue;
    }

    const created = generateVisitorId();
    writeCookie(VISITOR_COOKIE_KEY, created);
    return created;
  }
}

async function trackVisitor() {
  try {
    const today = todayDateKey();
    if (window.sessionStorage.getItem(VISITOR_TRACKED_SESSION_KEY) === "1") {
      return;
    }

    if (window.localStorage.getItem(VISITOR_TRACKED_DATE_KEY) === today) {
      window.sessionStorage.setItem(VISITOR_TRACKED_SESSION_KEY, "1");
      return;
    }

    const visitorId = getVisitorId();
    const response = await fetch("/api/track-visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        visitorId,
        path: window.location.pathname
      })
    });

    if (response.ok) {
      window.sessionStorage.setItem(VISITOR_TRACKED_SESSION_KEY, "1");
      window.localStorage.setItem(VISITOR_TRACKED_DATE_KEY, today);
    }
  } catch (error) {
    console.error(error);
  }
}

function defaultGuest() {
  return {
    username: "localplayer",
    displayName: "Local Player",
    guest: false,
    email: "",
    id: "local-profile",
    stats: defaultStats()
  };
}

const el = {
  authView: document.getElementById("auth-view"),
  appView: document.getElementById("app-view"),
  loginForm: document.getElementById("login-form"),
  signupForm: document.getElementById("signup-form"),
  authMessage: document.getElementById("auth-message"),
  showLoginButton: document.getElementById("show-login-button"),
  showSignupButton: document.getElementById("show-signup-button"),
  loginEmail: document.getElementById("login-email"),
  loginPassword: document.getElementById("login-password"),
  signupEmail: document.getElementById("signup-email"),
  signupUsername: document.getElementById("signup-username"),
  signupDisplayName: document.getElementById("signup-display-name"),
  signupPassword: document.getElementById("signup-password"),
  accountEntryButton: document.getElementById("account-entry-button"),
  closeAuthButton: document.getElementById("close-auth-button"),
  navButtons: Array.from(document.querySelectorAll(".nav-button")),
  pageViews: Array.from(document.querySelectorAll(".page-view")),
  profileView: document.getElementById("profile-view"),
  runHeading: document.getElementById("run-heading"),
  runSubtext: document.getElementById("run-subtext"),
  scorePill: document.getElementById("score-pill"),
  gamePanel: document.getElementById("game-panel"),
  clueStack: document.getElementById("clue-stack"),
  countryGuessForm: document.getElementById("country-guess-form"),
  countryGuessInput: document.getElementById("country-guess-input"),
  countryPreview: document.getElementById("country-preview"),
  countrySuggestions: document.getElementById("country-suggestions"),
  guessFeedback: document.getElementById("guess-feedback"),
  roundProgressLabel: document.getElementById("round-progress-label"),
  roundProgressFill: document.getElementById("round-progress-fill"),
  answerPanel: document.getElementById("country-guess-form"),
  answerPanelEffects: document.getElementById("answer-panel-effects"),
  nextRoundButton: document.getElementById("next-round-button"),
  dailySelect: document.getElementById("daily-select"),
  dailyStatus: document.getElementById("daily-status"),
  runStatsGrid: document.getElementById("run-stats-grid"),
  countryOutlineGallery: document.getElementById("country-outline-gallery"),
  shareCanvas: document.getElementById("share-canvas"),
  map: document.getElementById("map"),
  gameMap: document.getElementById("game-map"),
  outlineSourceMap: document.getElementById("outline-source-map"),
  guessLayout: document.getElementById("guess-layout"),
  lostScreen: document.getElementById("lost-screen"),
  winScreen: document.getElementById("win-screen"),
  lostCountryName: document.getElementById("lost-country-name"),
  lostSubtext: document.getElementById("lost-subtext"),
  lostStatsGrid: document.getElementById("lost-stats-grid"),
  lostCountryOutline: document.getElementById("lost-country-outline"),
  lostNewRunButton: document.getElementById("lost-new-run-button"),
  winHeading: document.getElementById("win-heading"),
  winSubtext: document.getElementById("win-subtext"),
  winStatsGrid: document.getElementById("win-stats-grid"),
  winCountryOutline: document.getElementById("win-country-outline"),
  winNewRunButton: document.getElementById("win-new-run-button"),
  signupConfirmPassword: document.getElementById("signup-confirm-password"),
  sidebarOutlineGallery: document.getElementById("sidebar-outline-gallery")
};

const state = {
  users: [],
  session: "",
  guest: defaultGuest(),
  supabase: null,
  authSubscription: null,
  authReady: false,
  currentRound: null,
  currentGuess: "",
  profileMap: null,
  gameMap: null,
  mapReady: false,
  mapsBuilt: false,
  autoAdvanceTimer: null,
  feedbackTimer: null,
  revealTimer: null,
  mapFocusTimer: null,
  outlineRetryTimer: null,
  outlineMetrics: {},
  loadingRound: false,
  authOpen: false,
  selectedDateKey: "",
  savedDayResult: null
};

function defaultUser(displayName, username, email = "", id = "") {
  return {
    id,
    email,
    username,
    displayName,
    stats: defaultStats()
  };
}

function activeUser() {
  const user = state.users.find((entry) => entry.username === state.session) || null;
  if (user && typeof user.stats.currentPuzzleScore !== "number") {
    user.stats.currentPuzzleScore = 0;
  }
  return user;
}

async function loadRuntimeConfig() {
  return Promise.resolve();
}

function cloneStats(stats = {}) {
  return {
    ...defaultStats(),
    ...stats,
    countriesSolved: Array.isArray(stats.countriesSolved) ? stats.countriesSolved : [],
    latestRun: Array.isArray(stats.latestRun) ? stats.latestRun : [],
    dailyHistory: stats.dailyHistory && typeof stats.dailyHistory === "object" ? stats.dailyHistory : {}
  };
}

function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function browserTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
}

function formatDateKey(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: browserTimeZone(),
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value || "0000";
  const month = parts.find((part) => part.type === "month")?.value || "01";
  const day = parts.find((part) => part.type === "day")?.value || "01";
  return `${year}-${month}-${day}`;
}

function shiftDateKey(dateKey, days) {
  const date = parseDateKey(dateKey);
  date.setDate(date.getDate() + days);
  return formatDateKey(date);
}

function todayDateKey() {
  return formatDateKey(new Date());
}

function puzzleIndexForDate(dateKey) {
  const start = parseDateKey(DAILY_START_DATE);
  const target = parseDateKey(dateKey);
  const diffMs = target.getTime() - start.getTime();
  return Math.floor(diffMs / 86400000);
}

function availableDateKeys() {
  const today = todayDateKey();
  return Array.from({ length: AUTHORED_DAILY_RUNS }, (_, index) => shiftDateKey(DAILY_START_DATE, index)).filter((dateKey) => dateKey <= today);
}

function formatLongDate(dateKey) {
  return parseDateKey(dateKey).toLocaleDateString(undefined, {
    timeZone: browserTimeZone(),
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function currentPuzzleResult(dateKey = state.selectedDateKey) {
  const user = currentPlayer();
  const saved = user?.stats.dailyHistory?.[dateKey] || null;
  if (!user || dateKey !== state.selectedDateKey) {
    return saved;
  }

  if (!saved) {
    if (user.stats.currentPuzzleScore > 0) {
      return {
        dateKey,
        score: user.stats.currentPuzzleScore,
        highScore: user.stats.currentPuzzleScore,
        highScoreDate: todayDateKey(),
        firstPlayedOn: todayDateKey(),
        completed: false,
        failed: false,
        roundsCleared: Math.max(0, (state.currentRound?.roundNumber || 1) - 1)
      };
    }

    return null;
  }

  if (user.stats.currentPuzzleScore > (saved.highScore ?? saved.score ?? 0)) {
    return {
      ...saved,
      highScore: user.stats.currentPuzzleScore,
      highScoreDate: todayDateKey()
    };
  }

  return saved;
}

function publishedPuzzleCount() {
  return availableDateKeys().length;
}

function setSelectedDateKey(dateKey) {
  const available = availableDateKeys();
  const fallback = available[available.length - 1] || DAILY_START_DATE;
  state.selectedDateKey = available.includes(dateKey) ? dateKey : fallback;
}

function renderDailyPicker() {
  if (!el.dailySelect) return;

  const available = availableDateKeys();
  if (!available.length) {
    el.dailySelect.innerHTML = "";
    el.dailyStatus.textContent = "No daily puzzles are published yet.";
    return;
  }

  if (!available.includes(state.selectedDateKey)) {
    setSelectedDateKey(available[available.length - 1]);
  }

  el.dailySelect.innerHTML = "";
  available
    .slice()
    .reverse()
    .forEach((dateKey) => {
      const option = document.createElement("option");
      option.value = dateKey;
      option.textContent = `${formatLongDate(dateKey)}${dateKey === todayDateKey() ? " · Today" : ""}`;
      el.dailySelect.appendChild(option);
    });
  el.dailySelect.value = state.selectedDateKey;

  const result = currentPuzzleResult(state.selectedDateKey);
  if (!result) {
    el.dailyStatus.textContent = `${publishedPuzzleCount()} daily run${publishedPuzzleCount() === 1 ? "" : "s"} published so far.`;
    return;
  }

  const user = currentPlayer();
  const firstPlayedOn = result.firstPlayedOn || state.selectedDateKey;
  el.dailyStatus.innerHTML = `First played on ${formatLongDate(firstPlayedOn)}${
    typeof result.highScore === "number"
      ? `<br>High Score: ${formatLongDate(result.highScoreDate || result.dateKey)}: ${result.highScore} pts`
      : ""
  }`;
}

function recordDailyResult(user, round, payload) {
  const previous = user.stats.dailyHistory[round.dateKey];
  const nextScore = payload.score || 0;
  const previousHighScore = typeof previous?.highScore === "number" ? previous.highScore : -1;
  const highScore = Math.max(previousHighScore, nextScore);
  const highScoreDate = highScore > previousHighScore ? todayDateKey() : previous?.highScoreDate || todayDateKey();
  const nextEntry = {
    dateKey: round.dateKey,
    country: payload.country,
    code: payload.code,
    score: nextScore,
    roundsCleared: payload.roundsCleared || 0,
    completed: Boolean(payload.completed),
    failed: Boolean(payload.failed),
    visibleClueCount: round.visibleClueCount,
    firstPlayedOn: previous?.firstPlayedOn || todayDateKey(),
    highScore,
    highScoreDate
  };

  user.stats.dailyHistory[round.dateKey] = nextEntry;
  user.stats.lastPlayedDate = round.dateKey;

  if (!previous && nextEntry.completed) {
    user.stats.dailyCompleted += 1;
  }

  if (!previous?.completed && nextEntry.completed) {
    user.stats.dailyCompleted += 1;
  }

  if (previous?.completed && !nextEntry.completed) {
    user.stats.dailyCompleted = Math.max(0, user.stats.dailyCompleted - 1);
  }
}

function hydrateProfile(record, authUser = null) {
  const email = record.email || authUser?.email || "";
  const displayName = record.display_name || record.displayName || authUser?.user_metadata?.display_name || "Player";
  const username =
    record.username ||
    authUser?.user_metadata?.username ||
    normalizeName(email.split("@")[0] || "player").replace(/\s+/g, "") ||
    "player";

  return {
    id: record.id || authUser?.id || "",
    email,
    username,
    displayName,
    stats: cloneStats(record.stats)
  };
}

function loadStoredProfile() {
  try {
    const raw = window.localStorage.getItem(LOCAL_PROFILE_KEY);
    if (!raw) {
      return defaultGuest();
    }

    const parsed = JSON.parse(raw);
    const profile = hydrateProfile(parsed);
    profile.guest = false;
    profile.id = profile.id || "local-profile";
    profile.username = profile.username || "localplayer";
    profile.displayName = profile.displayName || "Local Player";
    return profile;
  } catch (error) {
    console.error(error);
    return defaultGuest();
  }
}

function writeStoredProfile(profile) {
  try {
    window.localStorage.setItem(
      LOCAL_PROFILE_KEY,
      JSON.stringify({
        id: profile.id || "local-profile",
        email: profile.email || "",
        username: profile.username || "localplayer",
        displayName: profile.displayName || "Local Player",
        stats: cloneStats(profile.stats)
      })
    );
  } catch (error) {
    console.error(error);
    setGuessMessage("Could not save local progress on this device.", "error");
  }
}

function setAuthenticatedUser(profile) {
  state.users = [profile];
  state.session = profile.username;
  writeStoredProfile(profile);
}

function clearAuthenticatedUser() {
  state.users = [];
  state.session = "";
}

function saveSession(username) {
  state.session = username;
}

async function clearSession() {
  state.guest = defaultGuest();
  setAuthenticatedUser(state.guest);
}

function currentPlayer() {
  const user = activeUser();
  if (user) {
    return user;
  }

  if (typeof state.guest.stats.currentPuzzleScore !== "number") {
    state.guest.stats.currentPuzzleScore = 0;
  }

  return state.guest;
}

function isAuthenticated() {
  return Boolean(activeUser());
}

async function persistProfile(player = currentPlayer()) {
  if (!player) {
    return;
  }
  setAuthenticatedUser({
    ...player,
    guest: false,
    id: player.id || "local-profile",
    username: player.username || "localplayer",
    displayName: player.displayName || "Local Player",
    stats: cloneStats(player.stats)
  });
}

async function savePlayerIfNeeded(player = currentPlayer()) {
  if (!player) {
    return;
  }

  try {
    await persistProfile(player);
  } catch (error) {
    console.error(error);
    setMessage("Could not save your profile right now.", "error");
  }
}

async function loadAuthenticatedProfile(authUser) {
  const profile = loadStoredProfile();
  setAuthenticatedUser(profile);
  return profile;
}

async function initBackend() {
  await loadAuthenticatedProfile();
  state.authReady = true;
}

function openAuth() {
  state.authOpen = true;
  syncApp();
}

function closeAuth() {
  state.authOpen = false;
  syncApp();
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
}

function setGuessMessage(text, type = "") {
  el.guessFeedback.textContent = text;
  el.guessFeedback.className = `feedback large-feedback${type ? ` ${type}` : ""}`;
}

function levenshteinDistance(a, b) {
  const first = normalizeName(a);
  const second = normalizeName(b);
  const rows = Array.from({ length: first.length + 1 }, (_, index) => [index]);

  for (let column = 0; column <= second.length; column += 1) {
    rows[0][column] = column;
  }

  for (let row = 1; row <= first.length; row += 1) {
    for (let column = 1; column <= second.length; column += 1) {
      const cost = first[row - 1] === second[column - 1] ? 0 : 1;
      rows[row][column] = Math.min(
        rows[row - 1][column] + 1,
        rows[row][column - 1] + 1,
        rows[row - 1][column - 1] + cost
      );
    }
  }

  return rows[first.length][second.length];
}

function findCountryMatches(value) {
  const normalized = normalizeName(value);
  if (!normalized) return [];

  return COUNTRY_NAMES
    .map((country) => {
      const normalizedCountry = normalizeName(country);
      const startsWith = normalizedCountry.startsWith(normalized);
      const includes = normalizedCountry.includes(normalized);
      const distance = levenshteinDistance(normalized, normalizedCountry.slice(0, Math.max(normalized.length, 1)));
      return { country, startsWith, includes, distance };
    })
    .filter((entry) => entry.startsWith || entry.includes || entry.distance <= 2)
    .sort((left, right) => {
      if (left.startsWith !== right.startsWith) return left.startsWith ? -1 : 1;
      if (left.includes !== right.includes) return left.includes ? -1 : 1;
      return left.distance - right.distance;
    })
    .slice(0, 5);
}

function renderCountrySuggestions() {
  if (!el.countrySuggestions || !el.countryPreview) return;

  const matches = findCountryMatches(el.countryGuessInput.value);
  const hasValue = el.countryGuessInput.value.trim().length > 0;

  el.countrySuggestions.innerHTML = "";
  el.countrySuggestions.classList.toggle("hidden", matches.length === 0 || !hasValue);

  if (!hasValue) {
    el.countryPreview.textContent = "";
    return;
  }

  if (matches.length === 0) {
    el.countryPreview.textContent = "No clean read yet.";
    return;
  }

  el.countryPreview.textContent = "";
  matches.forEach((match) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "country-suggestion";
    button.dataset.country = match.country;
    button.textContent = match.country;
    el.countrySuggestions.appendChild(button);
  });
}

function hideCountrySuggestions() {
  if (!el.countrySuggestions) return;
  el.countrySuggestions.classList.add("hidden");
}

function bumpStreakBar() {
  if (!el.roundProgressFill) return;
  el.roundProgressFill.classList.remove("is-bumping");
  void el.roundProgressFill.offsetWidth;
  el.roundProgressFill.classList.add("is-bumping");
}

function updateRoundProgress(_user, round) {
  const completedRounds = Math.max(0, round.roundNumber - (round.answered ? 0 : 1));
  const progress = Math.max(0, Math.min(100, (completedRounds / DAILY_RUN_LENGTH) * 100));
  el.roundProgressLabel.textContent = `${completedRounds} of ${DAILY_RUN_LENGTH} completed`;
  el.roundProgressFill.style.width = `${progress}%`;
}

function resetAnswerPanelFeedback() {
  clearTimeout(state.feedbackTimer);
  state.feedbackTimer = null;
  el.answerPanel.classList.remove("flash-success", "flash-error", "is-dimmed");
  el.gamePanel.classList.remove("outcome-success", "outcome-error");
  el.answerPanelEffects.innerHTML = "";
}

function triggerAnswerPanelFeedback(type) {
  resetAnswerPanelFeedback();
  void el.answerPanel.offsetWidth;
  el.answerPanel.classList.add(type === "success" ? "flash-success" : "flash-error");
  el.gamePanel.classList.add(type === "success" ? "outcome-success" : "outcome-error");
  if (type === "error") {
    el.answerPanel.classList.add("is-dimmed");
  }

  if (type === "success") {
    const colors = ["#8cf4ff", "#85ffb8", "#9ea8ff", "#f4f7fb"];
    Array.from({ length: 12 }).forEach((_, index) => {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${8 + index * 7.2}%`;
      piece.style.background = colors[index % colors.length];
      piece.style.animationDelay = `${index * 20}ms`;
      piece.style.transform = `rotate(${index * 18}deg)`;
      el.answerPanelEffects.appendChild(piece);
    });
  }

  state.feedbackTimer = window.setTimeout(() => {
    resetAnswerPanelFeedback();
  }, 850);
}

function handleGuessInput() {
  state.currentGuess = el.countryGuessInput.value;
  renderCountrySuggestions();
}

function handleSuggestionClick(event) {
  event.preventDefault();
  const suggestion = event.target.closest(".country-suggestion");
  if (!suggestion) return;

  state.currentGuess = suggestion.dataset.country || "";
  el.countryGuessInput.value = state.currentGuess;
  renderCountrySuggestions();
  hideCountrySuggestions();
  el.countryGuessInput.focus();
}

function handleClueClick(event) {
  const card = event.target.closest(".clue-card.is-clickable");
  const round = state.currentRound;
  if (!card || !round || round.answered) return;

  const index = Number(card.dataset.index);
  if (index !== round.visibleClueCount) return;
  handleRevealClue();
}

async function handleSignup(event) {
  event.preventDefault();
  setMessage("Progress now saves automatically on this device. No sign-up needed.", "success");
}

async function handleLogin(event) {
  event.preventDefault();
  setMessage("Progress now saves automatically on this device. No login needed.", "success");
}

async function startFreshRun() {
  const user = currentPlayer();
  clearTimeout(state.autoAdvanceTimer);
  clearTimeout(state.revealTimer);
  clearTimeout(state.mapFocusTimer);
  state.currentGuess = "";
  state.savedDayResult = null;
  user.stats.currentPuzzleScore = 0;
  user.stats.lastPlayedDate = state.selectedDateKey || todayDateKey();
  user.stats.latestRun = [];
  void savePlayerIfNeeded(user);
  await createRound(state.selectedDateKey || todayDateKey(), 1);
}

async function startRunFromUser() {
  setSelectedDateKey(todayDateKey());
  await openSelectedDay();
}

async function createRound(dateKey, roundNumber = 1) {
  setSelectedDateKey(dateKey);
  state.currentGuess = "";
  state.savedDayResult = null;
  state.currentRound = null;
  state.loadingRound = true;
  setGuessMessage("Loading round...");

  try {
    const response = await fetch(`/api/round?dateKey=${encodeURIComponent(state.selectedDateKey)}&roundNumber=${roundNumber}`);
    if (!response.ok) {
      throw new Error("Could not load round");
    }

    const payload = await response.json();
    state.currentRound = {
      ...payload,
      answered: false,
      source: "api"
    };
    renderGame();
  } catch (error) {
    console.error(error);
    setGuessMessage("Could not load this round right now.", "error");
  } finally {
    state.loadingRound = false;
  }
}

function isShowingSavedDayResult() {
  return Boolean(state.savedDayResult && state.currentRound);
}

function pointsForVisibleClues(round) {
  return Math.max(1, 6 - round.visibleClueCount);
}

function renderGame() {
  const user = currentPlayer();
  const round = state.currentRound;
  if (!user || !round) return;
  const totalClues = round.totalClueCount || round.clues.length;

  el.guessLayout.classList.remove("hidden");
  el.lostScreen.classList.add("hidden");
  el.winScreen.classList.add("hidden");

  el.runHeading.textContent = `Daily Run #${round.puzzleNumber} · ${formatLongDate(round.dateKey)}`;
  el.runSubtext.innerHTML = `Each day has ${DAILY_RUN_LENGTH} rounds. Guess early for more points.<br />Use the menu to revisit any published day.`;
  el.scorePill.textContent = `Score ${user.stats.currentPuzzleScore}`;
  el.nextRoundButton.textContent = "Jump to today";
  el.countryGuessInput.value = state.currentGuess;
  el.countryGuessInput.disabled = false;
  renderDailyPicker();
  renderCountrySuggestions();
  setGuessMessage(`Current guess value: ${pointsForVisibleClues(round)} point${pointsForVisibleClues(round) === 1 ? "" : "s"}.`);
  resetAnswerPanelFeedback();

  el.clueStack.innerHTML = "";
  Array.from({ length: totalClues }, (_, index) => {
    const clue = round.clues[index] || null;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "clue-card";
    card.dataset.index = index;
    if (index < round.visibleClueCount && clue) {
      if (index === round.visibleClueCount - 1) {
        card.classList.add("is-latest");
      }
      card.innerHTML = `<strong>${clue.city}</strong><span>${clue.clueLabel} · ${clue.points} point${clue.points === 1 ? "" : "s"} live</span>`;
    } else {
      card.classList.add("is-hidden");
      if (index === round.visibleClueCount) {
        card.classList.add("is-clickable");
      }
      card.innerHTML = `<strong>Locked</strong><span>Clue ${index + 1} (-1 point) · Click to reveal</span>`;
    }
    el.clueStack.appendChild(card);
  });

  updateRoundProgress(user, round);
  renderRunStats();
}

function renderRunStats() {
  const user = currentPlayer();
  if (!user || !el.runStatsGrid) return;

  const currentResult = currentPuzzleResult();
  const stats = [
    ["Selected date", formatLongDate(state.selectedDateKey)],
    ["Published runs", publishedPuzzleCount()],
    ["Daily clears", user.stats.dailyCompleted],
    ["Best score", user.stats.bestScore],
    ["Status", currentResult ? (currentResult.completed ? "Cleared" : "Missed") : "Unplayed"]
  ];

  el.runStatsGrid.innerHTML = "";
  stats.forEach(([label, value]) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    el.runStatsGrid.appendChild(card);
  });

  renderSidebarOutlines();
}

async function handleGuess(event) {
  event.preventDefault();
  const user = currentPlayer();
  const round = state.currentRound;
  if (!user || !round || round.answered) return;
  clearTimeout(state.revealTimer);

  const guess = canonicalCountry(el.countryGuessInput.value);
  const guessCountry = COUNTRY_NAMES.find((country) => canonicalCountry(country) === guess) || "";
  hideCountrySuggestions();

   if (!guessCountry) {
    setGuessMessage("Please enter a valid country.", "error");
    el.countryGuessInput.focus();
    return;
  }

  let result;
  try {
    const response = await fetch("/api/guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        roundId: round.id,
        guess: guessCountry,
        token: round.token
      })
    });

    if (!response.ok) {
      throw new Error("Could not check guess");
    }

    result = await response.json();
  } catch (error) {
    console.error(error);
    setGuessMessage("Could not submit that guess right now.", "error");
    return;
  }

  const { correct, country, code, token } = result;
  round.token = token || round.token;
  round.answered = true;

  if (correct) {
    const awardedPoints = pointsForVisibleClues(round);
    user.stats.correctGuesses += 1;
    user.stats.currentPuzzleScore += awardedPoints;
    user.stats.totalRoundsCleared += 1;
    user.stats.bestScore = Math.max(user.stats.bestScore, user.stats.currentPuzzleScore);
    if (!user.stats.countriesSolved.some((entry) => entry.code === code)) {
      user.stats.countriesSolved.push({ country, code });
    }
    user.stats.latestRun.push({
      country,
      code,
      dateKey: round.dateKey,
      roundNumber: round.roundNumber,
      clues: round.clues.slice(0, round.visibleClueCount).map((entry) => entry.city),
      points: awardedPoints
    });
    void savePlayerIfNeeded(user);
    applyUnlockedRegions();
    renderProfile();
    renderRunStats();
    drawShareCards();
    flashRegion(code);
    focusGameMapOnCountry(code);
    triggerAnswerPanelFeedback("success");
    bumpStreakBar();
    setGuessMessage(`Correct! +${awardedPoints} point${awardedPoints === 1 ? "" : "s"}. ${country} is right.`, "success");
    updateRoundProgress(user, round);
    el.countryGuessInput.disabled = true;
    state.currentGuess = "";
    el.countryGuessInput.value = "";

    if (round.roundNumber >= DAILY_RUN_LENGTH) {
      state.savedDayResult = {
        type: "win",
        finalScore: user.stats.currentPuzzleScore,
        roundsCleared: DAILY_RUN_LENGTH
      };
    }

    clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = window.setTimeout(async () => {
      const liveUser = currentPlayer();
      if (!liveUser) {
        return;
      }

      if (round.roundNumber >= DAILY_RUN_LENGTH) {
        recordDailyResult(liveUser, round, {
          country,
          code,
          score: liveUser.stats.currentPuzzleScore,
          roundsCleared: DAILY_RUN_LENGTH,
          completed: true,
          failed: false
        });
        await savePlayerIfNeeded(liveUser);
        showWinScreen({ ...round, country, code }, liveUser.stats.currentPuzzleScore);
        return;
      }

      await savePlayerIfNeeded(liveUser);
      await createRound(round.dateKey, round.roundNumber + 1);
    }, 1200);
    return;
  }

  const finalScore = user.stats.currentPuzzleScore;
  const roundsCleared = Math.max(0, round.roundNumber - 1);
  user.stats.incorrectGuesses += 1;
  user.stats.currentPuzzleScore = 0;
  user.stats.latestRun.push({
    country,
    code,
    dateKey: round.dateKey,
    roundNumber: round.roundNumber,
    clues: round.clues.slice(0, round.visibleClueCount).map((entry) => entry.city),
    failed: true
  });
  recordDailyResult(user, round, {
    country,
    code,
    score: finalScore,
    roundsCleared,
    completed: false,
    failed: true
  });
  void savePlayerIfNeeded(user);
  drawShareCards();
  renderRunStats();
  triggerAnswerPanelFeedback("error");
  const sameRegion = guessCountry && COUNTRY_REGIONS[guessCountry] === COUNTRY_REGIONS[country];
  const gettable = round.visibleClueCount >= 4 || round.roundNumber <= 4;
  const dryTag = sameRegion ? " You're in the right region..." : gettable ? " That was gettable." : "";
  setGuessMessage(`Wrong. The daily run ends on round ${round.roundNumber}.${dryTag}`, "error");
  el.countryGuessInput.disabled = true;
  state.currentGuess = "";
  el.countryGuessInput.value = "";
  state.savedDayResult = {
    type: "lost",
    finalScore,
    roundsCleared
  };
  clearTimeout(state.autoAdvanceTimer);
  state.autoAdvanceTimer = window.setTimeout(() => {
    showLostScreen({ ...round, country, code }, finalScore, roundsCleared);
  }, 650);
}

async function handleNextRound() {
  setSelectedDateKey(todayDateKey());
  await startFreshRun();
}

async function handleReplayDay() {
  await startFreshRun();
}

function showSavedDayResult(dateKey = state.selectedDateKey) {
  const result = currentPuzzleResult(dateKey);
  if (!result || (!result.completed && !result.failed)) {
    return false;
  }

  const roundNumber = result.completed ? DAILY_RUN_LENGTH : Math.max(1, result.roundsCleared + 1);
  const round = {
    dateKey,
    roundNumber,
    puzzleNumber: puzzleIndexForDate(dateKey) + 1,
    country: result.country || "",
    code: result.code || "",
    answered: true,
    visibleClueCount: 5,
    totalClueCount: 5,
    clues: [],
    token: ""
  };
  state.currentRound = round;
  state.currentGuess = "";
  el.countryGuessInput.value = "";

  if (result.completed) {
    state.savedDayResult = {
      type: "win",
      finalScore: result.score,
      roundsCleared: DAILY_RUN_LENGTH
    };
    showWinScreen(round, result.score);
    setGuessMessage(`You scored ${result.score} on ${formatLongDate(dateKey)}.`, "success");
    return true;
  }

  state.savedDayResult = {
    type: "lost",
    finalScore: result.score,
    roundsCleared: result.roundsCleared
  };
  showLostScreen(round, result.score, result.roundsCleared);
  setGuessMessage(`You scored ${result.score} on ${formatLongDate(dateKey)}.`, "error");
  return true;
}

async function openSelectedDay() {
  if (showSavedDayResult(state.selectedDateKey)) {
    renderDailyPicker();
    renderRunStats();
    return;
  }

  await startFreshRun();
}

function handleRevealClue() {
  const round = state.currentRound;
  if (!round || round.answered || round.visibleClueCount >= (round.totalClueCount || round.clues.length)) {
    return;
  }

  const card = el.clueStack.querySelector(`.clue-card[data-index="${round.visibleClueCount}"]`);
  if (card) {
    card.classList.add("is-revealing");
  }

  setGuessMessage("Revealing clue...", "");
  clearTimeout(state.revealTimer);
  state.revealTimer = window.setTimeout(async () => {
    try {
      const response = await fetch("/api/reveal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          roundId: round.id,
          token: round.token
        })
      });

      if (!response.ok) {
        throw new Error("Could not reveal clue");
      }

      const payload = await response.json();
      round.visibleClueCount = payload.visibleClueCount;
      round.totalClueCount = payload.totalClueCount || round.totalClueCount;
      round.clues = payload.clues || round.clues;
      round.token = payload.token || round.token;
      renderGame();

      if (round.visibleClueCount >= (round.totalClueCount || round.clues.length)) {
        setGuessMessage("Final clue revealed. This guess is worth 1 point.");
        return;
      }

      setGuessMessage(`Current guess value: ${pointsForVisibleClues(round)} point${pointsForVisibleClues(round) === 1 ? "" : "s"}.`);
    } catch (error) {
      console.error(error);
      setGuessMessage("Could not reveal another clue right now.", "error");
    }
  }, 280);
}

function showLostScreen(round, finalScore, roundsCleared) {
  state.currentGuess = "";
  el.guessLayout.classList.add("hidden");
  el.lostScreen.classList.remove("hidden");
  el.winScreen.classList.add("hidden");
  el.countryGuessInput.value = "";

  el.lostCountryName.textContent = `The answer was ${round.country}`;
  el.lostSubtext.textContent = `You scored ${finalScore} on ${formatLongDate(round.dateKey)}. Replay the whole day anytime.`;

  el.lostStatsGrid.innerHTML = "";
  [["Date", formatLongDate(round.dateKey)], ["Score", finalScore], ["Rounds cleared", `${roundsCleared}/${DAILY_RUN_LENGTH}`]].forEach(([label, value]) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    el.lostStatsGrid.appendChild(card);
  });

  renderOutlineInto(el.lostCountryOutline, round.code);
}

function showWinScreen(round, finalScore) {
  state.currentGuess = "";
  el.guessLayout.classList.add("hidden");
  el.lostScreen.classList.add("hidden");
  el.winScreen.classList.remove("hidden");
  el.countryGuessInput.value = "";

  el.winHeading.textContent = `${formatLongDate(round.dateKey)} cleared`;
  el.winSubtext.textContent = `You scored ${finalScore} on this daily run. Replay it anytime.`;

  el.winStatsGrid.innerHTML = "";
  [["Score", finalScore], ["Rounds", `${DAILY_RUN_LENGTH}/${DAILY_RUN_LENGTH}`], ["Final country", round.country]].forEach(([label, value]) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    el.winStatsGrid.appendChild(card);
  });

  renderOutlineInto(el.winCountryOutline, round.code);
}

function renderSidebarOutlines() {
  const user = currentPlayer();
  if (!user || !el.sidebarOutlineGallery) return;

  if (!state.mapReady) {
    requestAnimationFrame(renderSidebarOutlines);
    return;
  }

  el.sidebarOutlineGallery.innerHTML = "";
  let missingOutline = false;
  user.stats.countriesSolved.forEach((entry) => {
    const outlineSvg = countryOutlineSvg(entry.code);
    if (!outlineSvg) {
      missingOutline = true;
    }
    const item = document.createElement("div");
    item.className = "sidebar-outline-item";
    item.title = entry.country;
    item.innerHTML = outlineSvg;
    el.sidebarOutlineGallery.appendChild(item);
  });

  if (missingOutline) {
    clearTimeout(state.outlineRetryTimer);
    state.outlineRetryTimer = window.setTimeout(() => {
      renderSidebarOutlines();
    }, 120);
  }
}

function renderOutlineInto(container, code, attempts = 0) {
  if (!container) return;

  const markup = countryOutlineSvg(code);
  container.innerHTML = markup;

  if (markup || attempts >= 10) {
    return;
  }

  requestAnimationFrame(() => {
    renderOutlineInto(container, code, attempts + 1);
  });
}

function showView(viewId) {
  el.navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === viewId);
  });
  el.pageViews.forEach((view) => {
    view.classList.toggle("hidden", view.id !== viewId);
  });

  if (viewId === "profile-view") {
    requestAnimationFrame(() => {
      ensureProfileMap();
    });
  }

  if (viewId === "game-view" && isShowingSavedDayResult()) {
    if (state.savedDayResult.type === "win") {
      showWinScreen(state.currentRound, state.savedDayResult.finalScore);
    } else {
      showLostScreen(state.currentRound, state.savedDayResult.finalScore, state.savedDayResult.roundsCleared);
    }
  }
}

function renderProfile() {
  const user = activeUser();
  if (!user) return;

  renderCountryOutlines(user.stats.countriesSolved);
}

function mapOptions() {
  return {
    map: "world",
    zoomButtons: false,
    backgroundColor: "transparent",
    regionsSelectable: false,
    regionStyle: {
      initial: {
        fill: LOCKED_REGION_FILL,
        stroke: LOCKED_REGION_STROKE,
        strokeWidth: 0.8
      },
      hover: {
        fill: "#21354a"
      },
      selected: {
        fill: UNLOCKED_REGION_FILL,
        stroke: UNLOCKED_REGION_STROKE,
        strokeWidth: 1.35
      }
    }
  };
}

function buildProfileMap() {
  if (!el.map || el.profileView?.classList.contains("hidden")) return;
  el.map.innerHTML = "";
  state.profileMap = new jsVectorMap({
    selector: "#map",
    ...mapOptions()
  });
}

function buildGameMap() {
  if (!el.gameMap) return;
  el.gameMap.innerHTML = "";
  state.gameMap = new jsVectorMap({
    selector: "#game-map",
    ...mapOptions()
  });
}

function buildMaps() {
  buildGameMap();
  if (!el.profileView?.classList.contains("hidden")) {
    buildProfileMap();
  }

  requestAnimationFrame(() => {
    state.mapReady = true;
    state.outlineMetrics = {};
    applyUnlockedRegions();
    renderProfile();
    renderSidebarOutlines();
    drawShareCards();
  });
}

function ensureProfileMap() {
  if (!isAuthenticated() || !el.map) return;
  if (!state.mapsBuilt) {
    state.mapsBuilt = true;
    buildMaps();
    return;
  }

  const hasRenderedRegions = regionElements(el.map).length > 0;
  if (hasRenderedRegions) {
    applyUnlockedRegions();
    return;
  }

  buildProfileMap();
  state.mapReady = true;
  state.outlineMetrics = {};
  applyUnlockedRegions();
  renderProfile();
}

function regionElements(root) {
  if (!root) return [];
  return Array.from(root.querySelectorAll(".jsvmap-region"));
}

function matchRegionCode(region, code) {
  const target = code.toUpperCase();
  const classNameValue =
    typeof region.className === "string"
      ? region.className
      : region.className?.baseVal || "";
  const regionCode =
    (region.dataset.code ||
      region.getAttribute("data-code") ||
      region.getAttribute("data-region") ||
      region.getAttribute("name") ||
      region.getAttribute("id") ||
      region.getAttribute("class") ||
      classNameValue ||
      region.getAttribute("id") ||
      "")
      .toUpperCase();

  if (regionCode === target || regionCode.endsWith(`-${target}`)) {
    return true;
  }

  const className = classNameValue.toUpperCase();
  return className.includes(target);
}

function findRenderedRegion(code, root = null) {
  if (root) {
    return regionElements(root).find((region) => matchRegionCode(region, code)) || null;
  }

  for (const mapRoot of allMapRoots()) {
    const region = regionElements(mapRoot).find((entry) => matchRegionCode(entry, code));
    if (region) {
      return region;
    }
  }

  return null;
}

function allMapRoots() {
  return [el.map, el.gameMap].filter(Boolean);
}

function allMapInstances() {
  return [state.profileMap, state.gameMap].filter(Boolean);
}

function paintRegion(region, unlocked) {
  region.dataset.unlocked = unlocked ? "true" : "false";
  region.classList.toggle("is-unlocked-region", unlocked);
  region.style.fill = unlocked ? UNLOCKED_REGION_FILL : LOCKED_REGION_FILL;
  region.style.stroke = unlocked ? UNLOCKED_REGION_STROKE : LOCKED_REGION_STROKE;
  region.style.strokeWidth = unlocked ? "1.35" : "0.8";
  region.style.filter = unlocked ? UNLOCKED_REGION_GLOW : "none";
  region.style.opacity = unlocked ? "1" : "";
}

function applyUnlockedRegions() {
  const user = activeUser();
  if (!state.mapReady || !user) return;

  const unlockedCodes = user.stats.countriesSolved.map((entry) => entry.code.toUpperCase());
  allMapInstances().forEach((mapInstance) => {
    if (typeof mapInstance.setSelectedRegions === "function") {
      mapInstance.setSelectedRegions(unlockedCodes);
    }
  });

  allMapRoots().forEach((root) => {
    regionElements(root).forEach((region) => {
      const selected = unlockedCodes.some((code) => matchRegionCode(region, code));
      paintRegion(region, selected);
    });
  });
}

function flashRegion(code) {
  allMapRoots().forEach((root) => {
    const region = regionElements(root).find((entry) => {
      const regionCode = (entry.dataset.code || entry.getAttribute("data-code") || "").toUpperCase();
      return regionCode === code.toUpperCase();
    });

    if (!region) return;

    region.animate(
      [
        { fill: "#74fff1", opacity: 0.92, filter: "drop-shadow(0 0 0 rgba(61,244,255,0))" },
        { fill: "#ffffff", opacity: 1, filter: "drop-shadow(0 0 28px rgba(61,244,255,1))" },
        { fill: UNLOCKED_REGION_FILL, opacity: 1, filter: UNLOCKED_REGION_GLOW }
      ],
      { duration: 900, easing: "ease-out" }
    );
  });
}

function focusGameMapOnCountry(code) {
  if (!el.gameMap) return;

  const region = findRenderedRegion(code, el.gameMap);
  const svg = el.gameMap.querySelector("svg");
  if (!region || !svg || typeof region.getBBox !== "function") {
    return;
  }

  const box = region.getBBox();
  const viewBox = (svg.getAttribute("viewBox") || "0 0 1000 600").split(/\s+/).map(Number);
  const viewWidth = viewBox[2] || svg.viewBox.baseVal.width || 1000;
  const viewHeight = viewBox[3] || svg.viewBox.baseVal.height || 600;
  const centerX = box.x + box.width / 2;
  const centerY = box.y + box.height / 2;
  const scale = Math.max(2.2, Math.min(5.4, Math.min(viewWidth / Math.max(box.width, 26), viewHeight / Math.max(box.height, 20)) * 0.7));
  const offsetX = (viewWidth / 2 - centerX) * 0.88;
  const offsetY = (viewHeight / 2 - centerY) * 0.88;

  clearTimeout(state.mapFocusTimer);
  regionElements(el.gameMap).forEach((entry) => entry.classList.remove("focus-target"));
  el.gameMap.classList.add("is-focusing");
  region.classList.add("focus-target");
  region.style.fill = UNLOCKED_REGION_FILL;
  region.style.stroke = UNLOCKED_REGION_STROKE;
  region.style.strokeWidth = "1.55";
  region.style.filter = "drop-shadow(0 0 28px rgba(61,244,255,1))";
  svg.style.transformOrigin = `${centerX}px ${centerY}px`;
  svg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;

  state.mapFocusTimer = window.setTimeout(() => {
    svg.style.transform = "";
    svg.style.transformOrigin = "";
    el.gameMap.classList.remove("is-focusing");
    region.classList.remove("focus-target");
    applyUnlockedRegions();
  }, 1350);
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

function hasUsableOutlineBox(box) {
  return Boolean(
    box &&
      Number.isFinite(box.x) &&
      Number.isFinite(box.y) &&
      Number.isFinite(box.width) &&
      Number.isFinite(box.height) &&
      box.width > 0.5 &&
      box.height > 0.5
  );
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
      const measuredBox = {
        x: box.x,
        y: box.y,
        width: box.width,
        height: box.height
      };
      if (hasUsableOutlineBox(measuredBox)) {
        const metrics = {
          pathData: renderedPath,
          box: measuredBox
        };
        state.outlineMetrics[upperCode] = metrics;
        return metrics;
      }
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
  const measuredBox = {
    x: box.x,
    y: box.y,
    width: box.width,
    height: box.height
  };

  if (!hasUsableOutlineBox(measuredBox)) {
    return null;
  }

  const metrics = {
    pathData,
    box: measuredBox
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

  let missingOutline = false;
  countries
    .slice()
    .sort((a, b) => a.country.localeCompare(b.country))
    .forEach((entry) => {
      const outlineSvg = countryOutlineSvg(entry.code);
      if (!outlineSvg) {
        missingOutline = true;
      }
      const card = document.createElement("article");
      card.className = "outline-card";
      card.innerHTML = `
        <div class="outline-meta">
          <strong>${entry.country}</strong>
          <span>Correct guess</span>
        </div>
        <div class="outline-art">${outlineSvg}</div>
      `;
      el.countryOutlineGallery.appendChild(card);
    });

  if (missingOutline) {
    clearTimeout(state.outlineRetryTimer);
    state.outlineRetryTimer = window.setTimeout(() => {
      renderCountryOutlines(countries);
    }, 120);
  }
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

  return `<svg viewBox="${viewBox}" role="img" aria-label="${code} outline" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet"><path d="${metrics.pathData}"></path></svg>`;
}

function drawShareCards() {
  const user = currentPlayer();
  if (!user) return;
  drawShareCard(el.shareCanvas, user);
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
  ctx.fillText("GeoStreak", 72, 94);

  ctx.fillStyle = "#f4f7fb";
  ctx.font = "400 64px Instrument Serif";
  ctx.fillText(`${user.displayName}'s daily`, 72, 168);

  ctx.font = "500 22px Space Grotesk";
  ctx.fillStyle = "#92a1b6";
  ctx.fillText(`@${user.username} · Best daily score ${user.stats.bestScore} · Days cleared ${user.stats.dailyCompleted}`, 72, 214);

  const recent = user.stats.latestRun.slice(-3).reverse();
  ctx.font = "600 18px Space Grotesk";
  ctx.fillStyle = "#f4f7fb";
  ctx.fillText("Recent countries", 72, 286);

  recent.forEach((entry, index) => {
    const y = 326 + index * 108;
    ctx.fillStyle = entry.failed ? "#ff7a8f" : "#85ffb8";
    ctx.fillText(`${entry.country} · ${entry.dateKey || "Archive"} · R${entry.roundNumber || 1}${entry.failed ? " · missed" : ""}`, 72, y);
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
  ctx.fillText("Ten rounds each day. Come back tomorrow for a new run.", 72, height - 76);
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
  el.authView.classList.add("hidden");
  el.appView.classList.remove("hidden");

  if (!state.mapsBuilt) {
    state.mapsBuilt = true;
    buildMaps();
  }

  if (state.loadingRound) {
    return;
  }

  if (!state.currentRound) {
    void startRunFromUser();
    return;
  }

  renderProfile();
  renderRunStats();
  applyUnlockedRegions();
  drawShareCards();

  if (isShowingSavedDayResult()) {
    if (state.savedDayResult.type === "win") {
      showWinScreen(state.currentRound, state.savedDayResult.finalScore);
    } else {
      showLostScreen(state.currentRound, state.savedDayResult.finalScore, state.savedDayResult.roundsCleared);
    }
    return;
  }

  renderGame();
}

el.showLoginButton?.addEventListener("click", () => setAuthMode("login"));
el.showSignupButton?.addEventListener("click", () => setAuthMode("signup"));
el.accountEntryButton?.addEventListener("click", openAuth);
el.closeAuthButton?.addEventListener("click", closeAuth);
el.signupForm?.addEventListener("submit", handleSignup);
el.loginForm?.addEventListener("submit", handleLogin);
el.countryGuessForm.addEventListener("submit", handleGuess);
el.countryGuessInput.addEventListener("input", handleGuessInput);
el.countryGuessInput.addEventListener("focus", renderCountrySuggestions);
el.countryGuessInput.addEventListener("blur", () => {
  window.setTimeout(hideCountrySuggestions, 120);
});
el.countrySuggestions.addEventListener("mousedown", handleSuggestionClick);
el.clueStack.addEventListener("click", handleClueClick);
el.nextRoundButton.addEventListener("click", handleNextRound);
el.dailySelect?.addEventListener("change", (event) => {
  setSelectedDateKey(event.target.value);
  openSelectedDay();
});
el.lostNewRunButton.addEventListener("click", handleReplayDay);
el.winNewRunButton.addEventListener("click", handleReplayDay);
el.navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeAuth();
    showView(button.dataset.viewTarget);
  });
});

async function bootstrapApp() {
  setAuthMode("login");

  try {
    await loadRuntimeConfig();
    await initBackend();
    await trackVisitor();
  } catch (error) {
    console.error(error);
    setMessage("Could not load saved local progress.", "error");
  }

  if (activeUser()) {
    await startRunFromUser();
  } else {
    await startFreshRun();
  }

  syncApp();
}

void bootstrapApp();
