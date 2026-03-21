const DAILY_START_DATE = "2026-03-20";
const DAILY_RUN_LENGTH = 10;

const COUNTRY_ROUNDS = [
  { id: "day-1-jp", country: "Japan", code: "JP", tier: "Easy", cities: ["Tokyo", "Osaka", "Kyoto", "Sapporo", "Nagoya"] },
  { id: "day-2-it", country: "Italy", code: "IT", tier: "Easy", cities: ["Rome", "Milan", "Naples", "Turin", "Palermo"] },
  { id: "day-3-br", country: "Brazil", code: "BR", tier: "Easy", cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Recife"] },
  { id: "day-4-tr", country: "Turkey", code: "TR", tier: "Easy", cities: ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"] },
  { id: "day-5-ma", country: "Morocco", code: "MA", tier: "Medium", cities: ["Casablanca", "Fez", "Marrakesh", "Tangier", "Oujda"] },
  { id: "day-6-ro", country: "Romania", code: "RO", tier: "Medium", cities: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi", "Constanta"] },
  { id: "day-7-kz", country: "Kazakhstan", code: "KZ", tier: "Medium", cities: ["Almaty", "Astana", "Shymkent", "Aktobe", "Karaganda"] },
  { id: "day-8-kh", country: "Cambodia", code: "KH", tier: "Medium", cities: ["Phnom Penh", "Siem Reap", "Battambang", "Kampot", "Sihanoukville"] },
  { id: "day-9-kg", country: "Kyrgyzstan", code: "KG", tier: "Hard", cities: ["Bishkek", "Osh", "Karakol", "Jalal-Abad", "Naryn"] },
  { id: "day-10-md", country: "Moldova", code: "MD", tier: "Hard", cities: ["Chisinau", "Balti", "Cahul", "Orhei", "Soroca"] },
  { id: "day-11-la", country: "Laos", code: "LA", tier: "Hard", cities: ["Vientiane", "Luang Prabang", "Pakse", "Savannakhet", "Vang Vieng"] },
  { id: "day-12-bf", country: "Burkina Faso", code: "BF", tier: "Hard", cities: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Ouahigouya", "Banfora"] },
  { id: "day-13-uz", country: "Uzbekistan", code: "UZ", tier: "Expert", cities: ["Tashkent", "Samarkand", "Bukhara", "Andijan", "Nukus"] },
  { id: "day-14-na", country: "Namibia", code: "NA", tier: "Expert", cities: ["Windhoek", "Walvis Bay", "Swakopmund", "Luderitz", "Otjiwarongo"] },
  { id: "day-15-tj", country: "Tajikistan", code: "TJ", tier: "Expert", cities: ["Dushanbe", "Khujand", "Kulob", "Bokhtar", "Khorog"] },
  { id: "day-16-al", country: "Albania", code: "AL", tier: "Expert", cities: ["Tirana", "Durres", "Shkoder", "Vlore", "Gjirokaster"] },
  { id: "day-17-pt", country: "Portugal", code: "PT", tier: "Easy", cities: ["Lisbon", "Porto", "Braga", "Coimbra", "Faro"] },
  { id: "day-18-th", country: "Thailand", code: "TH", tier: "Easy", cities: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Khon Kaen"] },
  { id: "day-19-eg", country: "Egypt", code: "EG", tier: "Easy", cities: ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan"] },
  { id: "day-20-za", country: "South Africa", code: "ZA", tier: "Easy", cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"] },
  { id: "day-21-ar", country: "Argentina", code: "AR", tier: "Easy", cities: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "La Plata"] },
  { id: "day-22-in", country: "India", code: "IN", tier: "Easy", cities: ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata"] },
  { id: "day-23-id", country: "Indonesia", code: "ID", tier: "Easy", cities: ["Jakarta", "Surabaya", "Bandung", "Medan", "Yogyakarta"] },
  { id: "day-24-ca", country: "Canada", code: "CA", tier: "Easy", cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa"] },
  { id: "day-25-es", country: "Spain", code: "ES", tier: "Easy", cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao"] },
  { id: "day-26-de", country: "Germany", code: "DE", tier: "Easy", cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"] },
  { id: "day-27-mx", country: "Mexico", code: "MX", tier: "Easy", cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Merida"] },
  { id: "day-28-vn", country: "Vietnam", code: "VN", tier: "Easy", cities: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue", "Can Tho"] },
  { id: "day-29-pl", country: "Poland", code: "PL", tier: "Medium", cities: ["Warsaw", "Krakow", "Gdansk", "Wroclaw", "Poznan"] },
  { id: "day-30-my", country: "Malaysia", code: "MY", tier: "Medium", cities: ["Kuala Lumpur", "George Town", "Johor Bahru", "Ipoh", "Kota Kinabalu"] },
  { id: "day-31-pe", country: "Peru", code: "PE", tier: "Medium", cities: ["Lima", "Cusco", "Arequipa", "Trujillo", "Piura"] },
  { id: "day-32-gr", country: "Greece", code: "GR", tier: "Medium", cities: ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa"] },
  { id: "day-33-sa", country: "Saudi Arabia", code: "SA", tier: "Medium", cities: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam"] },
  { id: "day-34-ph", country: "Philippines", code: "PH", tier: "Medium", cities: ["Manila", "Cebu City", "Davao", "Baguio", "Iloilo City"] },
  { id: "day-35-cl", country: "Chile", code: "CL", tier: "Medium", cities: ["Santiago", "Valparaiso", "Concepcion", "Antofagasta", "Puerto Montt"] },
  { id: "day-36-ke", country: "Kenya", code: "KE", tier: "Medium", cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"] },
  { id: "day-37-se", country: "Sweden", code: "SE", tier: "Medium", cities: ["Stockholm", "Gothenburg", "Malmo", "Uppsala", "Linkoping"] },
  { id: "day-38-np", country: "Nepal", code: "NP", tier: "Medium", cities: ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar", "Bharatpur"] },
  { id: "day-39-tz", country: "Tanzania", code: "TZ", tier: "Hard", cities: ["Dar es Salaam", "Dodoma", "Arusha", "Mwanza", "Zanzibar City"] },
  { id: "day-40-hr", country: "Croatia", code: "HR", tier: "Hard", cities: ["Zagreb", "Split", "Rijeka", "Osijek", "Dubrovnik"] },
  { id: "day-41-jo", country: "Jordan", code: "JO", tier: "Hard", cities: ["Amman", "Aqaba", "Irbid", "Zarqa", "Madaba"] },
  { id: "day-42-ec", country: "Ecuador", code: "EC", tier: "Hard", cities: ["Quito", "Guayaquil", "Cuenca", "Loja", "Manta"] },
  { id: "day-43-gh", country: "Ghana", code: "GH", tier: "Hard", cities: ["Accra", "Kumasi", "Takoradi", "Tamale", "Cape Coast"] },
  { id: "day-44-fi", country: "Finland", code: "FI", tier: "Hard", cities: ["Helsinki", "Turku", "Tampere", "Oulu", "Rovaniemi"] },
  { id: "day-45-at", country: "Austria", code: "AT", tier: "Hard", cities: ["Vienna", "Salzburg", "Graz", "Innsbruck", "Linz"] },
  { id: "day-46-rs", country: "Serbia", code: "RS", tier: "Hard", cities: ["Belgrade", "Novi Sad", "Nis", "Kragujevac", "Subotica"] },
  { id: "day-47-bo", country: "Bolivia", code: "BO", tier: "Expert", cities: ["La Paz", "Santa Cruz", "Cochabamba", "Sucre", "Potosi"] },
  { id: "day-48-ge", country: "Georgia", code: "GE", tier: "Expert", cities: ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Zugdidi"] },
  { id: "day-49-tn", country: "Tunisia", code: "TN", tier: "Expert", cities: ["Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte"] },
  { id: "day-50-lk", country: "Sri Lanka", code: "LK", tier: "Expert", cities: ["Colombo", "Kandy", "Galle", "Jaffna", "Negombo"] },
  { id: "day-51-kr", country: "South Korea", code: "KR", tier: "Expert", cities: ["Seoul", "Busan", "Incheon", "Daegu", "Gwangju"] },
  { id: "day-52-nl", country: "Netherlands", code: "NL", tier: "Expert", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"] },
  { id: "day-53-ch", country: "Switzerland", code: "CH", tier: "Expert", cities: ["Zurich", "Geneva", "Basel", "Bern", "Lausanne"] },
  { id: "day-54-bd", country: "Bangladesh", code: "BD", tier: "Expert", cities: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"] },
  { id: "day-55-be", country: "Belgium", code: "BE", tier: "Expert", cities: ["Brussels", "Antwerp", "Ghent", "Bruges", "Liege"] },
  { id: "day-56-az", country: "Azerbaijan", code: "AZ", tier: "Expert", cities: ["Baku", "Ganja", "Sumqayit", "Mingachevir", "Lankaran"] },
  { id: "day-57-gt", country: "Guatemala", code: "GT", tier: "Expert", cities: ["Guatemala City", "Quetzaltenango", "Antigua Guatemala", "Escuintla", "Puerto Barrios"] },
  { id: "day-58-bw", country: "Botswana", code: "BW", tier: "Expert", cities: ["Gaborone", "Francistown", "Maun", "Kasane", "Serowe"] },
  { id: "day-59-uy", country: "Uruguay", code: "UY", tier: "Expert", cities: ["Montevideo", "Salto", "Paysandu", "Maldonado", "Rivera"] },
  { id: "day-60-cm", country: "Cameroon", code: "CM", tier: "Expert", cities: ["Yaounde", "Douala", "Garoua", "Bamenda", "Bafoussam"] }
];

function pointsForIndex(index) {
  return Math.max(1, 5 - index);
}

function parseDateKey(dateKey) {
  const [year, month, day] = String(dateKey || DAILY_START_DATE).split("-").map(Number);
  return new Date(year, month - 1, day);
}

function puzzleIndexForDate(dateKey) {
  const start = parseDateKey(DAILY_START_DATE);
  const target = parseDateKey(dateKey);
  const diffMs = target.getTime() - start.getTime();
  return Math.floor(diffMs / 86400000);
}

function authoredDayCount() {
  return Math.floor(COUNTRY_ROUNDS.length / DAILY_RUN_LENGTH);
}

function getRoundByLevel(level, runLength = DAILY_RUN_LENGTH) {
  const effectiveLevel = Math.max(1, Math.min(Number(level) || 1, runLength, COUNTRY_ROUNDS.length));
  return {
    ...COUNTRY_ROUNDS[effectiveLevel - 1],
    level: effectiveLevel
  };
}

function getRoundForDate(dateKey = DAILY_START_DATE, roundNumber = 1) {
  const safeDayIndex = Math.max(0, Math.min(puzzleIndexForDate(dateKey), authoredDayCount() - 1));
  const safeRoundNumber = Math.max(1, Math.min(Number(roundNumber) || 1, DAILY_RUN_LENGTH));
  const safeIndex = safeDayIndex * DAILY_RUN_LENGTH + (safeRoundNumber - 1);
  return {
    ...COUNTRY_ROUNDS[safeIndex],
    level: safeIndex + 1,
    puzzleNumber: safeDayIndex + 1,
    dateKey,
    roundNumber: safeRoundNumber
  };
}

function serializeRound(round, visibleClueCount = 1) {
  const clues = [...round.cities]
    .reverse()
    .slice(0, Math.max(0, Math.min(visibleClueCount, round.cities.length)))
    .map((city, index) => ({
      city,
      clueLabel: `Clue ${index + 1}`,
      points: pointsForIndex(index)
    }));

  return {
    id: round.id,
    tier: round.tier,
    level: round.level,
    puzzleNumber: round.puzzleNumber,
    dateKey: round.dateKey,
    roundNumber: round.roundNumber,
    visibleClueCount: clues.length,
    totalClueCount: round.cities.length,
    clues
  };
}

module.exports = {
  COUNTRY_ROUNDS,
  DAILY_RUN_LENGTH,
  DAILY_START_DATE,
  authoredDayCount,
  getRoundByLevel,
  getRoundForDate,
  serializeRound
};
