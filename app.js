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
  Albania: "Southern Europe"
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

const RUN_LENGTH = 10;

const SUPABASE_URL = window.GEOSTREAK_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = window.GEOSTREAK_SUPABASE_ANON_KEY || "";

function defaultStats() {
  return {
    correctGuesses: 0,
    incorrectGuesses: 0,
    countriesSolved: [],
    bestLevel: 0,
    runsStarted: 0,
    currentRunScore: 0,
    currentLevel: 1,
    latestRun: [],
    totalRoundsCleared: 0
  };
}

function defaultGuest() {
  return {
    username: "",
    displayName: "Guest",
    guest: true,
    email: "",
    id: "",
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
  logoutButton: document.getElementById("logout-button"),
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
  runStatsGrid: document.getElementById("run-stats-grid"),
  profileTitle: document.getElementById("profile-title"),
  profileSubtitle: document.getElementById("profile-subtitle"),
  profileRank: document.getElementById("profile-rank"),
  profileCountryCount: document.getElementById("profile-country-count"),
  profileStatsGrid: document.getElementById("profile-stats-grid"),
  countryOutlineGallery: document.getElementById("country-outline-gallery"),
  shareCanvas: document.getElementById("share-canvas"),
  map: document.getElementById("map"),
  gameMap: document.getElementById("game-map"),
  outlineSourceMap: document.getElementById("outline-source-map"),
  guessLayout: document.getElementById("guess-layout"),
  lostScreen: document.getElementById("lost-screen"),
  lostCountryName: document.getElementById("lost-country-name"),
  lostSubtext: document.getElementById("lost-subtext"),
  lostStatsGrid: document.getElementById("lost-stats-grid"),
  lostCountryOutline: document.getElementById("lost-country-outline"),
  lostNewRunButton: document.getElementById("lost-new-run-button"),
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
  outlineMetrics: {},
  authOpen: false
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
  if (user && typeof user.stats.currentLevel !== "number") {
    user.stats.currentLevel = 1;
  }
  return user;
}

function backendConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase && typeof window.supabase.createClient === "function");
}

function cloneStats(stats = {}) {
  return {
    ...defaultStats(),
    ...stats,
    countriesSolved: Array.isArray(stats.countriesSolved) ? stats.countriesSolved : [],
    latestRun: Array.isArray(stats.latestRun) ? stats.latestRun : []
  };
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

function setAuthenticatedUser(profile) {
  state.users = [profile];
  state.session = profile.username;
}

function clearAuthenticatedUser() {
  state.users = [];
  state.session = "";
}

function saveSession(username) {
  state.session = username;
}

async function clearSession() {
  if (state.supabase) {
    await state.supabase.auth.signOut();
  }
  clearAuthenticatedUser();
}

function currentPlayer() {
  const user = activeUser();
  if (user) {
    return user;
  }

  if (typeof state.guest.stats.currentLevel !== "number") {
    state.guest.stats.currentLevel = 1;
  }

  return state.guest;
}

function isAuthenticated() {
  return Boolean(activeUser());
}

async function usernameTaken(username, excludeId = "") {
  if (!state.supabase) return false;
  const { data, error } = await state.supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return Boolean(data && data.id !== excludeId);
}

async function persistProfile(player = currentPlayer()) {
  if (!state.supabase || !player || player.guest) {
    return;
  }

  const payload = {
    id: player.id,
    email: player.email,
    username: player.username,
    display_name: player.displayName,
    stats: player.stats
  };

  const { data, error } = await state.supabase
    .from("profiles")
    .upsert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  setAuthenticatedUser(hydrateProfile(data));
}

async function savePlayerIfNeeded(player = currentPlayer()) {
  if (!player || player.guest) {
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
  if (!state.supabase || !authUser) {
    clearAuthenticatedUser();
    return null;
  }

  const { data, error } = await state.supabase
    .from("profiles")
    .select("*")
    .eq("id", authUser.id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  const profile = data
    ? hydrateProfile(data, authUser)
    : hydrateProfile(
        {
          id: authUser.id,
          email: authUser.email || "",
          username: authUser.user_metadata?.username || normalizeName((authUser.email || "player").split("@")[0]).replace(/\s+/g, ""),
          display_name: authUser.user_metadata?.display_name || (authUser.email || "Player").split("@")[0],
          stats: defaultStats()
        },
        authUser
      );

  setAuthenticatedUser(profile);

  if (!data) {
    await persistProfile(profile);
  }

  return profile;
}

async function initBackend() {
  if (!backendConfigured()) {
    state.authReady = true;
    return;
  }

  state.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const {
    data: { session }
  } = await state.supabase.auth.getSession();

  if (session?.user) {
    await loadAuthenticatedProfile(session.user);
  }

  const { data } = state.supabase.auth.onAuthStateChange(async (_event, nextSession) => {
    try {
      if (nextSession?.user) {
        await loadAuthenticatedProfile(nextSession.user);
      } else {
        clearAuthenticatedUser();
      }
    } catch (error) {
      console.error(error);
      setMessage("Could not sync your account.", "error");
    }

    syncApp();
  });

  state.authSubscription = data.subscription;
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

function runRoundsCleared(user) {
  return user.stats.latestRun.filter((entry) => !entry.failed).length;
}

function updateRoundProgress(user, round) {
  const roundsCleared = runRoundsCleared(user);
  const totalRounds = Math.min(RUN_LENGTH, COUNTRY_ROUNDS.length);
  const progress = Math.max(0, Math.min(100, (roundsCleared / totalRounds) * 100));
  el.roundProgressLabel.textContent = `Streak: ${roundsCleared} Countries`;
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
  if (!backendConfigured()) {
    setMessage("Add your Supabase URL and anon key in supabase-config.js first.", "error");
    return;
  }

  const email = el.signupEmail.value.trim().toLowerCase();
  const username = normalizeName(el.signupUsername.value).replace(/\s+/g, "");
  const displayName = el.signupDisplayName.value.trim();
  const password = el.signupPassword.value;
  const confirmPassword = el.signupConfirmPassword.value;

  if (!email) {
    setMessage("Email is required.", "error");
    return;
  }

  if (username.length < 3) {
    setMessage("Username must be at least 3 characters.", "error");
    return;
  }

  if (displayName.length < 2) {
    setMessage("Display name must be at least 2 characters.", "error");
    return;
  }

  if (password.length < 4) {
    setMessage("Password must be at least 4 characters.", "error");
    return;
  }

  if (password !== confirmPassword) {
    setMessage("Passwords do not match.", "error");
    return;
  }

  try {
    if (await usernameTaken(username)) {
      setMessage("That username is already taken. Try another.", "error");
      return;
    }

    const { data, error } = await state.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          display_name: displayName
        }
      }
    });

    if (error) {
      setMessage(error.message, "error");
      return;
    }

    if (data.user && data.session) {
      await loadAuthenticatedProfile(data.user);
      state.authOpen = false;
      setMessage("");
      startFreshRun();
      showView("game-view");
      syncApp();
      return;
    }

    setAuthMode("login");
    setMessage("Account created. Check your email to confirm, then log in.", "success");
    syncApp();
  } catch (error) {
    console.error(error);
    setMessage(error.message || "Could not create your account.", "error");
  }
}

async function handleLogin(event) {
  event.preventDefault();
  if (!backendConfigured()) {
    setMessage("Add your Supabase URL and anon key in supabase-config.js first.", "error");
    return;
  }

  const email = el.loginEmail.value.trim().toLowerCase();
  const password = el.loginPassword.value;

  try {
    const {
      data: { user },
      error
    } = await state.supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error || !user) {
      setMessage(error?.message || "Invalid email or password.", "error");
      return;
    }

    await loadAuthenticatedProfile(user);
    state.authOpen = false;
    setMessage("");
    startRunFromUser();
    showView("game-view");
    syncApp();
  } catch (error) {
    console.error(error);
    setMessage(error.message || "Could not log you in.", "error");
  }
}

function startFreshRun() {
  const user = currentPlayer();
  clearTimeout(state.autoAdvanceTimer);
  clearTimeout(state.revealTimer);
  clearTimeout(state.mapFocusTimer);
  state.currentGuess = "";
  user.stats.currentRunScore = 0;
  user.stats.currentLevel = 1;
  user.stats.latestRun = [];
  user.stats.runsStarted += 1;
  savePlayerIfNeeded(user);
  createRound(1);
}

function startRunFromUser() {
  const user = currentPlayer();
  if (!user) return;
  createRound(Math.max(1, user.stats.currentLevel || 1));
}

function createRound(level) {
  const round = COUNTRY_ROUNDS[Math.min(level - 1, RUN_LENGTH - 1, COUNTRY_ROUNDS.length - 1)];
  state.currentGuess = "";
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
  const user = currentPlayer();
  const round = state.currentRound;
  if (!user || !round) return;

  el.guessLayout.classList.remove("hidden");
  el.lostScreen.classList.add("hidden");

  el.runHeading.textContent = `Level ${round.level}`;
  el.runSubtext.innerHTML = `Clues reveal from hardest to easiest. Guess early for more points.<br />One wrong answer ends the run.`;
  el.scorePill.textContent = `Score ${user.stats.currentRunScore}`;
  el.nextRoundButton.textContent = "New run";
  el.countryGuessInput.value = state.currentGuess;
  el.countryGuessInput.disabled = false;
  renderCountrySuggestions();
  setGuessMessage(`Current guess value: ${pointsForVisibleClues(round)} point${pointsForVisibleClues(round) === 1 ? "" : "s"}.`);
  resetAnswerPanelFeedback();

  el.clueStack.innerHTML = "";
  round.clues.forEach((clue, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "clue-card";
    card.dataset.index = index;
    if (index < round.visibleClueCount) {
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

  renderSidebarOutlines();
}

function handleGuess(event) {
  event.preventDefault();
  const user = currentPlayer();
  const round = state.currentRound;
  if (!user || !round || round.answered) return;
  clearTimeout(state.revealTimer);

  const guess = canonicalCountry(el.countryGuessInput.value);
  const correct = guess === round.country;
  const guessCountry = COUNTRY_NAMES.find((country) => canonicalCountry(country) === guess) || "";
  round.answered = true;
  hideCountrySuggestions();

  if (correct) {
    const awardedPoints = pointsForVisibleClues(round);
    const beatBestLevel = round.level > user.stats.bestLevel;
    user.stats.correctGuesses += 1;
    user.stats.currentRunScore += awardedPoints;
    user.stats.totalRoundsCleared += 1;
    user.stats.bestLevel = Math.max(user.stats.bestLevel, round.level);
    user.stats.currentLevel = Math.min(RUN_LENGTH, COUNTRY_ROUNDS.length, round.level + 1);
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
    savePlayerIfNeeded(user);
    applyUnlockedRegions();
    if (isAuthenticated()) {
      renderProfile();
    }
    renderRunStats();
    drawShareCards();
    flashRegion(round.code);
    focusGameMapOnCountry(round.code);
    triggerAnswerPanelFeedback("success");
    bumpStreakBar();
    const successTag = beatBestLevel || user.stats.currentRunScore >= 10 ? " You're cooking." : "";
    setGuessMessage(`Correct! +${awardedPoints} point${awardedPoints === 1 ? "" : "s"}. ${round.country} is right.${successTag}`, "success");
    updateRoundProgress(user, round);
    el.countryGuessInput.disabled = true;
    clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = window.setTimeout(() => {
      const liveUser = currentPlayer();
      if (!liveUser) {
        return;
      }

      if (round.level >= Math.min(RUN_LENGTH, COUNTRY_ROUNDS.length)) {
        liveUser.stats.currentLevel = 1;
        savePlayerIfNeeded(liveUser);
        startFreshRun();
        syncApp();
        return;
      }

      liveUser.stats.currentLevel = round.level + 1;
      savePlayerIfNeeded(liveUser);
      createRound(round.level + 1);
      syncApp();
    }, 1200);
    return;
  }

  const finalScore = user.stats.currentRunScore;
  const countriesCleared = user.stats.latestRun.filter((e) => !e.failed).length;

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
  savePlayerIfNeeded(user);
  drawShareCards();
  renderRunStats();
  triggerAnswerPanelFeedback("error");
  const sameRegion = guessCountry && COUNTRY_REGIONS[guessCountry] === COUNTRY_REGIONS[round.country];
  const gettable = round.visibleClueCount >= 4 || round.level <= 4;
  const dryTag = sameRegion ? " You're in the right region..." : gettable ? " That was gettable." : "";
  setGuessMessage(`Wrong. Run ends at ${round.level}.${dryTag}`, "error");
  el.countryGuessInput.disabled = true;
  clearTimeout(state.autoAdvanceTimer);
  state.autoAdvanceTimer = window.setTimeout(() => {
    showLostScreen(round, finalScore, countriesCleared);
  }, 650);
}

function handleNextRound() {
  startFreshRun();
}

function handleRevealClue() {
  const round = state.currentRound;
  if (!round || round.answered || round.visibleClueCount >= round.clues.length) {
    return;
  }

  const card = el.clueStack.querySelector(`.clue-card[data-index="${round.visibleClueCount}"]`);
  if (card) {
    card.classList.add("is-revealing");
  }

  setGuessMessage("Revealing clue...", "");
  clearTimeout(state.revealTimer);
  state.revealTimer = window.setTimeout(() => {
    round.visibleClueCount += 1;
    renderGame();

    if (round.visibleClueCount >= round.clues.length) {
      setGuessMessage("Final clue revealed. This guess is worth 1 point.");
      return;
    }

    setGuessMessage(`Current guess value: ${pointsForVisibleClues(round)} point${pointsForVisibleClues(round) === 1 ? "" : "s"}.`);
  }, 280);
}

function showLostScreen(round, finalScore, countriesCleared) {
  el.guessLayout.classList.add("hidden");
  el.lostScreen.classList.remove("hidden");

  el.lostCountryName.textContent = `The answer was ${round.country}`;
  el.lostSubtext.textContent = `You reached level ${round.level} and cleared ${countriesCleared} ${countriesCleared === 1 ? "country" : "countries"} this run.`;

  el.lostStatsGrid.innerHTML = "";
  [["Run score", finalScore], ["Level reached", round.level], ["This run", `${countriesCleared} cleared`]].forEach(([label, value]) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    el.lostStatsGrid.appendChild(card);
  });

  if (state.mapReady) {
    el.lostCountryOutline.innerHTML = countryOutlineSvg(round.code);
  } else {
    requestAnimationFrame(() => {
      el.lostCountryOutline.innerHTML = countryOutlineSvg(round.code);
    });
  }
}

function renderSidebarOutlines() {
  const user = currentPlayer();
  if (!user || !el.sidebarOutlineGallery) return;

  if (!state.mapReady) {
    requestAnimationFrame(renderSidebarOutlines);
    return;
  }

  el.sidebarOutlineGallery.innerHTML = "";
  user.stats.countriesSolved.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "sidebar-outline-item";
    item.title = entry.country;
    item.innerHTML = countryOutlineSvg(entry.code);
    el.sidebarOutlineGallery.appendChild(item);
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
  el.profileSubtitle.textContent = `@${user.username} · Keep running to unlock more country outlines and climb the ranks.`;
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

function mapOptions() {
  return {
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

function findRenderedRegion(code, root = el.map) {
  return regionElements(root).find((region) => matchRegionCode(region, code)) || null;
}

function allMapRoots() {
  return [el.map, el.gameMap].filter(Boolean);
}

function applyUnlockedRegions() {
  const user = activeUser();
  if (!state.mapReady || !user) return;

  const unlocked = new Set(user.stats.countriesSolved.map((entry) => entry.code.toUpperCase()));
  allMapRoots().forEach((root) => {
    regionElements(root).forEach((region) => {
      const code = (region.dataset.code || region.getAttribute("data-code") || "").toUpperCase();
      const selected = unlocked.has(code);
      region.style.fill = selected ? "#69e3ff" : "#101824";
      region.style.stroke = selected ? "rgba(105,227,255,0.92)" : "rgba(255,255,255,0.12)";
      region.style.strokeWidth = selected ? "1.15" : "0.8";
      region.style.filter = selected ? "drop-shadow(0 0 12px rgba(105,227,255,0.34))" : "none";
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
        { fill: "#8affc7", opacity: 0.9, filter: "drop-shadow(0 0 0 rgba(105,227,255,0))" },
        { fill: "#d7fff0", opacity: 1, filter: "drop-shadow(0 0 22px rgba(105,227,255,0.85))" },
        { fill: "#69e3ff", opacity: 1, filter: "drop-shadow(0 0 14px rgba(105,227,255,0.4))" }
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
  region.style.fill = "#8eefff";
  region.style.stroke = "#d9ffff";
  region.style.strokeWidth = "1.45";
  region.style.filter = "drop-shadow(0 0 24px rgba(105,227,255,0.95))";
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
  const authenticated = isAuthenticated();
  el.authView.classList.toggle("hidden", !state.authOpen);
  el.appView.classList.toggle("hidden", state.authOpen);
  el.accountEntryButton.classList.toggle("hidden", authenticated);
  el.logoutButton.classList.toggle("hidden", !authenticated);

  if (authenticated && !state.mapsBuilt) {
    state.mapsBuilt = true;
    buildMaps();
  }

  if (!state.currentRound) {
    startRunFromUser();
    return;
  }

  renderGame();
  if (authenticated) {
    renderProfile();
  }
  renderRunStats();
  if (authenticated) {
    applyUnlockedRegions();
  }
  drawShareCards();
  if (!authenticated) {
    showView("game-view");
  }
}

el.showLoginButton.addEventListener("click", () => setAuthMode("login"));
el.showSignupButton.addEventListener("click", () => setAuthMode("signup"));
el.accountEntryButton.addEventListener("click", openAuth);
el.closeAuthButton.addEventListener("click", closeAuth);
el.signupForm.addEventListener("submit", handleSignup);
el.loginForm.addEventListener("submit", handleLogin);
el.countryGuessForm.addEventListener("submit", handleGuess);
el.countryGuessInput.addEventListener("input", handleGuessInput);
el.countryGuessInput.addEventListener("focus", renderCountrySuggestions);
el.countryGuessInput.addEventListener("blur", () => {
  window.setTimeout(hideCountrySuggestions, 120);
});
el.countrySuggestions.addEventListener("mousedown", handleSuggestionClick);
el.clueStack.addEventListener("click", handleClueClick);
el.nextRoundButton.addEventListener("click", handleNextRound);
el.logoutButton.addEventListener("click", async () => {
  clearTimeout(state.autoAdvanceTimer);
  await clearSession();
  state.guest = defaultGuest();
  state.currentRound = null;
  state.authOpen = false;
  setAuthMode("login");
  startFreshRun();
  syncApp();
});
el.lostNewRunButton.addEventListener("click", handleNextRound);
el.navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.viewTarget === "profile-view" && !isAuthenticated()) {
      openAuth();
      return;
    }

    closeAuth();
    showView(button.dataset.viewTarget);
  });
});

async function bootstrapApp() {
  setAuthMode("login");

  try {
    await initBackend();
  } catch (error) {
    console.error(error);
    setMessage("Could not connect to Supabase. Guest mode still works.", "error");
  }

  if (activeUser()) {
    startRunFromUser();
  } else {
    startFreshRun();
  }

  syncApp();
}

void bootstrapApp();
