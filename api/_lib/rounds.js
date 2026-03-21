const COUNTRY_ROUNDS = [
  {
    id: "level-1-jp",
    country: "Japan",
    code: "JP",
    tier: "Easy",
    level: 1,
    cities: ["Tokyo", "Osaka", "Kyoto", "Sapporo", "Nagoya"]
  },
  {
    id: "level-2-it",
    country: "Italy",
    code: "IT",
    tier: "Easy",
    level: 2,
    cities: ["Rome", "Milan", "Naples", "Turin", "Palermo"]
  },
  {
    id: "level-3-br",
    country: "Brazil",
    code: "BR",
    tier: "Easy",
    level: 3,
    cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Recife"]
  },
  {
    id: "level-4-tr",
    country: "Turkey",
    code: "TR",
    tier: "Easy",
    level: 4,
    cities: ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"]
  },
  {
    id: "level-5-ma",
    country: "Morocco",
    code: "MA",
    tier: "Medium",
    level: 5,
    cities: ["Casablanca", "Fez", "Marrakesh", "Tangier", "Oujda"]
  },
  {
    id: "level-6-ro",
    country: "Romania",
    code: "RO",
    tier: "Medium",
    level: 6,
    cities: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi", "Constanta"]
  },
  {
    id: "level-7-kz",
    country: "Kazakhstan",
    code: "KZ",
    tier: "Medium",
    level: 7,
    cities: ["Almaty", "Astana", "Shymkent", "Aktobe", "Karaganda"]
  },
  {
    id: "level-8-kh",
    country: "Cambodia",
    code: "KH",
    tier: "Medium",
    level: 8,
    cities: ["Phnom Penh", "Siem Reap", "Battambang", "Kampot", "Sihanoukville"]
  },
  {
    id: "level-9-kg",
    country: "Kyrgyzstan",
    code: "KG",
    tier: "Hard",
    level: 9,
    cities: ["Bishkek", "Osh", "Karakol", "Jalal-Abad", "Naryn"]
  },
  {
    id: "level-10-md",
    country: "Moldova",
    code: "MD",
    tier: "Hard",
    level: 10,
    cities: ["Chisinau", "Balti", "Cahul", "Orhei", "Soroca"]
  },
  {
    id: "level-11-la",
    country: "Laos",
    code: "LA",
    tier: "Hard",
    level: 11,
    cities: ["Vientiane", "Luang Prabang", "Pakse", "Savannakhet", "Vang Vieng"]
  },
  {
    id: "level-12-bf",
    country: "Burkina Faso",
    code: "BF",
    tier: "Hard",
    level: 12,
    cities: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora"]
  },
  {
    id: "level-13-uz",
    country: "Uzbekistan",
    code: "UZ",
    tier: "Expert",
    level: 13,
    cities: ["Tashkent", "Samarkand", "Bukhara", "Andijan", "Nukus"]
  },
  {
    id: "level-14-na",
    country: "Namibia",
    code: "NA",
    tier: "Expert",
    level: 14,
    cities: ["Windhoek", "Walvis Bay", "Swakopmund", "Luderitz", "Otjiwarongo"]
  },
  {
    id: "level-15-tj",
    country: "Tajikistan",
    code: "TJ",
    tier: "Expert",
    level: 15,
    cities: ["Dushanbe", "Khujand", "Kulob", "Bokhtar", "Khorog"]
  },
  {
    id: "level-16-al",
    country: "Albania",
    code: "AL",
    tier: "Expert",
    level: 16,
    cities: ["Tirana", "Durres", "Shkoder", "Vlore", "Gjirokaster"]
  }
];

function pointsForIndex(index) {
  return Math.max(1, 5 - index);
}

function getRoundByLevel(level, runLength = 10) {
  const effectiveLevel = Math.max(1, Math.min(Number(level) || 1, runLength, COUNTRY_ROUNDS.length));
  return COUNTRY_ROUNDS[effectiveLevel - 1];
}

function serializeRound(round) {
  return {
    id: round.id,
    tier: round.tier,
    level: round.level,
    clues: [...round.cities].reverse().map((city, index) => ({
      city,
      clueLabel: `Clue ${index + 1}`,
      points: pointsForIndex(index)
    }))
  };
}

module.exports = {
  COUNTRY_ROUNDS,
  getRoundByLevel,
  serializeRound
};
