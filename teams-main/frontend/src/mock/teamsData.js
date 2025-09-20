// Mock data for football teams with their colors and popularity rankings
export const footballTeams = [
  // Top Tier Teams (Popularity: 5)
  {
    id: 1,
    name: "Real Madrid",
    country: "Spain",
    league: "La Liga",
    colors: ["white", "gold"],
    primaryColor: "white",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png",
    popularity: 5,
    founded: 1902,
    stadium: "Santiago Bernabéu"
  },
  {
    id: 2,
    name: "FC Barcelona",
    country: "Spain", 
    league: "La Liga",
    colors: ["blue", "red"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/fc-barcelona-vector-logo.png",
    popularity: 5,
    founded: 1899,
    stadium: "Camp Nou"
  },
  {
    id: 3,
    name: "Manchester United",
    country: "England",
    league: "Premier League", 
    colors: ["red", "yellow"],
    primaryColor: "red",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png",
    popularity: 5,
    founded: 1878,
    stadium: "Old Trafford"
  },
  {
    id: 4,
    name: "Liverpool FC",
    country: "England",
    league: "Premier League",
    colors: ["red"],
    primaryColor: "red", 
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png",
    popularity: 5,
    founded: 1892,
    stadium: "Anfield"
  },
  {
    id: 5,
    name: "Manchester City",
    country: "England",
    league: "Premier League",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Manchester-City-Logo.png", 
    popularity: 5,
    founded: 1880,
    stadium: "Etihad Stadium"
  },
  {
    id: 6,
    name: "Bayern Munich",
    country: "Germany",
    league: "Bundesliga",
    colors: ["red", "blue", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/bayern-munchen-vector-logo.png",
    popularity: 5,
    founded: 1900,
    stadium: "Allianz Arena"
  },
  {
    id: 7,
    name: "Paris Saint-Germain",
    country: "France",
    league: "Ligue 1",
    colors: ["blue", "red", "white"],
    primaryColor: "blue",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-Logo.png",
    popularity: 5,
    founded: 1970,
    stadium: "Parc des Princes"
  },
  {
    id: 8,
    name: "Juventus",
    country: "Italy",
    league: "Serie A",
    colors: ["black", "white"],
    primaryColor: "black",
    logo: "https://logoeps.com/wp-content/uploads/2017/06/juventus-vector-logo.png",
    popularity: 5,
    founded: 1897,
    stadium: "Allianz Stadium"
  },

  // Second Tier Teams (Popularity: 4)
  {
    id: 9,
    name: "Chelsea FC",
    country: "England", 
    league: "Premier League",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Chelsea-Logo.png",
    popularity: 4,
    founded: 1905,
    stadium: "Stamford Bridge"
  },
  {
    id: 10,
    name: "Arsenal FC",
    country: "England",
    league: "Premier League", 
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Arsenal-Logo.png",
    popularity: 4,
    founded: 1886,
    stadium: "Emirates Stadium"
  },
  {
    id: 11,
    name: "AC Milan",
    country: "Italy",
    league: "Serie A",
    colors: ["red", "black"],
    primaryColor: "red", 
    logo: "https://logoeps.com/wp-content/uploads/2013/03/ac-milan-vector-logo.png",
    popularity: 4,
    founded: 1899,
    stadium: "San Siro"
  },
  {
    id: 12,
    name: "Inter Milan",
    country: "Italy",
    league: "Serie A",
    colors: ["blue", "black"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/inter-milan-vector-logo.png", 
    popularity: 4,
    founded: 1908,
    stadium: "San Siro"
  },
  {
    id: 13,
    name: "Borussia Dortmund",
    country: "Germany",
    league: "Bundesliga",
    colors: ["yellow", "black"],
    primaryColor: "yellow",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/borussia-dortmund-vector-logo.png",
    popularity: 4,
    founded: 1909,
    stadium: "Signal Iduna Park"
  },
  {
    id: 14,
    name: "Atletico Madrid",
    country: "Spain",
    league: "La Liga",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/atletico-madrid-vector-logo.png",
    popularity: 4,
    founded: 1903,
    stadium: "Wanda Metropolitano"
  },

  // Turkish Teams (Popularity: 4-3)
  {
    id: 15,
    name: "Galatasaray",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["red", "yellow"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/galatasaray-vector-logo.png",
    popularity: 4,
    founded: 1905,
    stadium: "Türk Telekom Stadium"
  },
  {
    id: 16,
    name: "Fenerbahçe",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["yellow", "blue"],
    primaryColor: "yellow",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/fenerbahce-vector-logo.png",
    popularity: 4,
    founded: 1907,
    stadium: "Şükrü Saracoğlu Stadium"
  },
  {
    id: 17,
    name: "Beşiktaş",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["black", "white"],
    primaryColor: "black",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/besiktas-vector-logo.png",
    popularity: 4,
    founded: 1903,
    stadium: "Vodafone Park"
  },

  // Brazilian Teams (Popularity: 4-3)
  {
    id: 18,
    name: "Flamengo",
    country: "Brazil",
    league: "Brasileirão",
    colors: ["red", "black"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/flamengo-vector-logo.png",
    popularity: 4,
    founded: 1895,
    stadium: "Maracanã"
  },
  {
    id: 19,
    name: "Santos FC",
    country: "Brazil",
    league: "Brasileirão",
    colors: ["white", "black"],
    primaryColor: "white",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/santos-vector-logo.png",
    popularity: 4,
    founded: 1912,
    stadium: "Estádio Urbano Caldeira"
  },
  {
    id: 20,
    name: "São Paulo FC",
    country: "Brazil",
    league: "Brasileirão",
    colors: ["red", "white", "black"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/sao-paulo-vector-logo.png",
    popularity: 4,
    founded: 1930,
    stadium: "Estádio do Morumbi"
  },

  // Argentine Teams (Popularity: 4)
  {
    id: 21,
    name: "Boca Juniors",
    country: "Argentina",
    league: "Primera División",
    colors: ["blue", "yellow"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/boca-juniors-vector-logo.png",
    popularity: 4,
    founded: 1905,
    stadium: "La Bombonera"
  },
  {
    id: 22,
    name: "River Plate",
    country: "Argentina",
    league: "Primera División", 
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/river-plate-vector-logo.png",
    popularity: 4,
    founded: 1901,
    stadium: "Estadio Monumental"
  },

  // More European Teams (Popularity: 3-4)
  {
    id: 23,
    name: "Ajax Amsterdam",
    country: "Netherlands",
    league: "Eredivisie",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/ajax-vector-logo.png",
    popularity: 4,
    founded: 1900,
    stadium: "Johan Cruijff Arena"
  },
  {
    id: 24,
    name: "FC Porto",
    country: "Portugal",
    league: "Primeira Liga",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/fc-porto-vector-logo.png",
    popularity: 3,
    founded: 1893,
    stadium: "Estádio do Dragão"
  },
  {
    id: 25,
    name: "Benfica",
    country: "Portugal",
    league: "Primeira Liga",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/benfica-vector-logo.png",
    popularity: 3,
    founded: 1904,
    stadium: "Estádio da Luz"
  },
  {
    id: 26,
    name: "Sporting CP",
    country: "Portugal",
    league: "Primeira Liga",
    colors: ["green", "white"],
    primaryColor: "green",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/sporting-cp-vector-logo.png",
    popularity: 3,
    founded: 1906,
    stadium: "Estádio José Alvalade"
  },

  // Premier League Teams
  {
    id: 27,
    name: "Tottenham Hotspur",
    country: "England",
    league: "Premier League",
    colors: ["white", "blue"],
    primaryColor: "white",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Tottenham-Logo.png",
    popularity: 3,
    founded: 1882,
    stadium: "Tottenham Hotspur Stadium"
  },
  {
    id: 28,
    name: "Newcastle United",
    country: "England",
    league: "Premier League",
    colors: ["black", "white"],
    primaryColor: "black",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Newcastle-United-Logo.png",
    popularity: 3,
    founded: 1892,
    stadium: "St. James' Park"
  },
  {
    id: 29,
    name: "West Ham United",
    country: "England",
    league: "Premier League",
    colors: ["maroon", "blue"],
    primaryColor: "maroon",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/West-Ham-United-Logo.png",
    popularity: 3,
    founded: 1895,
    stadium: "London Stadium"
  },
  {
    id: 30,
    name: "Leicester City",
    country: "England",
    league: "Premier League",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Leicester-City-Logo.png",
    popularity: 3,
    founded: 1884,
    stadium: "King Power Stadium"
  },
  {
    id: 31,
    name: "Everton",
    country: "England",
    league: "Premier League",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Everton-Logo.png",
    popularity: 3,
    founded: 1878,
    stadium: "Goodison Park"
  },

  // La Liga Teams
  {
    id: 32,
    name: "Valencia CF",
    country: "Spain",
    league: "La Liga", 
    colors: ["orange", "white"],
    primaryColor: "orange",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/valencia-vector-logo.png",
    popularity: 3,
    founded: 1919,
    stadium: "Mestalla"
  },
  {
    id: 33,
    name: "Sevilla FC",
    country: "Spain",
    league: "La Liga",
    colors: ["red", "white"], 
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/sevilla-vector-logo.png",
    popularity: 3,
    founded: 1890,
    stadium: "Ramón Sánchez Pizjuán"
  },
  {
    id: 34,
    name: "Athletic Bilbao",
    country: "Spain",
    league: "La Liga",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/athletic-bilbao-vector-logo.png",
    popularity: 3,
    founded: 1898,
    stadium: "San Mamés"
  },
  {
    id: 35,
    name: "Real Sociedad",
    country: "Spain",
    league: "La Liga",
    colors: ["blue", "white"],
    primaryColor: "blue", 
    logo: "https://logoeps.com/wp-content/uploads/2013/03/real-sociedad-vector-logo.png",
    popularity: 2,
    founded: 1909,
    stadium: "Reale Arena"
  },
  {
    id: 36,
    name: "Villarreal CF",
    country: "Spain",
    league: "La Liga",
    colors: ["yellow"],
    primaryColor: "yellow",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/villarreal-vector-logo.png",
    popularity: 2,
    founded: 1923,
    stadium: "Estadio de la Cerámica"
  },

  // Serie A Teams
  {
    id: 37,
    name: "AS Roma",
    country: "Italy", 
    league: "Serie A",
    colors: ["red", "yellow"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/as-roma-vector-logo.png",
    popularity: 3,
    founded: 1927,
    stadium: "Stadio Olimpico"
  },
  {
    id: 38,
    name: "Napoli",
    country: "Italy",
    league: "Serie A",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/napoli-vector-logo.png",
    popularity: 3,
    founded: 1926,
    stadium: "Stadio Diego Armando Maradona"
  },
  {
    id: 39,
    name: "Lazio",
    country: "Italy",
    league: "Serie A",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/lazio-vector-logo.png",
    popularity: 3,
    founded: 1900,
    stadium: "Stadio Olimpico"
  },
  {
    id: 40,
    name: "Atalanta",
    country: "Italy",
    league: "Serie A",
    colors: ["blue", "black"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/atalanta-vector-logo.png",
    popularity: 2,
    founded: 1907,
    stadium: "Gewiss Stadium"
  },
  {
    id: 41,
    name: "Fiorentina",
    country: "Italy",
    league: "Serie A",
    colors: ["purple", "white"],
    primaryColor: "purple",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/fiorentina-vector-logo.png",
    popularity: 2,
    founded: 1926,
    stadium: "Artemio Franchi"
  },

  // Bundesliga Teams
  {
    id: 42,
    name: "RB Leipzig",
    country: "Germany",
    league: "Bundesliga",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/rb-leipzig-vector-logo.png",
    popularity: 2,
    founded: 2009,
    stadium: "Red Bull Arena"
  },
  {
    id: 43,
    name: "Bayer Leverkusen",
    country: "Germany", 
    league: "Bundesliga",
    colors: ["red", "black"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/bayer-leverkusen-vector-logo.png",
    popularity: 2,
    founded: 1904,
    stadium: "BayArena"
  },
  {
    id: 44,
    name: "Eintracht Frankfurt",
    country: "Germany",
    league: "Bundesliga",
    colors: ["red", "black", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/eintracht-frankfurt-vector-logo.png",
    popularity: 2,
    founded: 1899,
    stadium: "Deutsche Bank Park"
  },
  {
    id: 45,
    name: "Schalke 04",
    country: "Germany",
    league: "2. Bundesliga",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/schalke04-vector-logo.png",
    popularity: 3,
    founded: 1904,
    stadium: "Veltins-Arena"
  },

  // Ligue 1 Teams
  {
    id: 46,
    name: "Olympique Marseille",
    country: "France",
    league: "Ligue 1", 
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/olympique-marseille-vector-logo.png",
    popularity: 2,
    founded: 1899,
    stadium: "Stade Vélodrome"
  },
  {
    id: 47,
    name: "Olympique Lyon",
    country: "France",
    league: "Ligue 1",
    colors: ["blue", "white", "red"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/olympique-lyon-vector-logo.png",
    popularity: 2,
    founded: 1950,
    stadium: "Parc Olympique Lyonnais"
  },
  {
    id: 48,
    name: "AS Monaco",
    country: "France",
    league: "Ligue 1",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/as-monaco-vector-logo.png",
    popularity: 2,
    founded: 1924,
    stadium: "Stade Louis II"
  },

  // More Turkish Teams
  {
    id: 49,
    name: "Trabzonspor",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["maroon", "blue"],
    primaryColor: "maroon",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/trabzonspor-vector-logo.png",
    popularity: 3,
    founded: 1967,
    stadium: "Medical Park Arena"
  },
  {
    id: 50,
    name: "Başakşehir",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["orange", "blue"],
    primaryColor: "orange",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/basaksehir-vector-logo.png",
    popularity: 2,
    founded: 1990,
    stadium: "Başakşehir Fatih Terim Stadium"
  },

  // MLS Teams (North America)
  {
    id: 51,
    name: "LA Galaxy",
    country: "USA",
    league: "MLS",
    colors: ["white", "blue", "gold"],
    primaryColor: "white",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/la-galaxy-vector-logo.png",
    popularity: 2,
    founded: 1996,
    stadium: "Dignity Health Sports Park"
  },
  {
    id: 52,
    name: "New York City FC",
    country: "USA",
    league: "MLS",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/new-york-city-fc-vector-logo.png",
    popularity: 2,
    founded: 2013,
    stadium: "Yankee Stadium"
  },
  {
    id: 53,
    name: "Seattle Sounders",
    country: "USA",
    league: "MLS",
    colors: ["green", "blue"],
    primaryColor: "green",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/seattle-sounders-vector-logo.png",
    popularity: 2,
    founded: 2007,
    stadium: "Lumen Field"
  },

  // Liga MX Teams (Mexico)
  {
    id: 54,
    name: "Club América",
    country: "Mexico",
    league: "Liga MX",
    colors: ["yellow", "blue"],
    primaryColor: "yellow",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/club-america-vector-logo.png",
    popularity: 3,
    founded: 1916,
    stadium: "Estadio Azteca"
  },
  {
    id: 55,
    name: "Guadalajara",
    country: "Mexico",
    league: "Liga MX",
    colors: ["red", "white", "blue"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/guadalajara-vector-logo.png",
    popularity: 3,
    founded: 1906,
    stadium: "Estadio Akron"
  },

  // Japanese Teams (J-League)
  {
    id: 56,
    name: "Urawa Red Diamonds",
    country: "Japan",
    league: "J1 League",
    colors: ["red", "black"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/urawa-red-diamonds-vector-logo.png",
    popularity: 2,
    founded: 1950,
    stadium: "Saitama Stadium 2002"
  },
  {
    id: 57,
    name: "Kashima Antlers",
    country: "Japan",
    league: "J1 League",
    colors: ["red", "blue"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/kashima-antlers-vector-logo.png",
    popularity: 2,
    founded: 1947,
    stadium: "Kashima Soccer Stadium"
  },

  // South Korean Teams (K League)
  {
    id: 58,
    name: "FC Seoul",
    country: "South Korea",
    league: "K League 1",
    colors: ["red", "black"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/fc-seoul-vector-logo.png",
    popularity: 2,
    founded: 1983,
    stadium: "Seoul World Cup Stadium"
  },

  // Russian Teams
  {
    id: 59,
    name: "Spartak Moscow",
    country: "Russia",
    league: "Russian Premier League",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/spartak-moscow-vector-logo.png",
    popularity: 2,
    founded: 1922,
    stadium: "Otkritie Bank Arena"
  },
  {
    id: 60,
    name: "CSKA Moscow",
    country: "Russia",
    league: "Russian Premier League",
    colors: ["red", "blue"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/cska-moscow-vector-logo.png",
    popularity: 2,
    founded: 1911,
    stadium: "VEB Arena"
  },

  // More European Teams
  {
    id: 61,
    name: "PSV Eindhoven",
    country: "Netherlands",
    league: "Eredivisie",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/psv-eindhoven-vector-logo.png",
    popularity: 2,
    founded: 1913,
    stadium: "Philips Stadion"
  },
  {
    id: 62,
    name: "Feyenoord",
    country: "Netherlands",
    league: "Eredivisie",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/feyenoord-vector-logo.png",
    popularity: 2,
    founded: 1908,
    stadium: "De Kuip"
  },

  // Belgian Teams
  {
    id: 63,
    name: "Club Brugge",
    country: "Belgium",
    league: "Belgian Pro League",
    colors: ["blue", "black"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/club-brugge-vector-logo.png",
    popularity: 2,
    founded: 1891,
    stadium: "Jan Breydel Stadium"
  },
  {
    id: 64,
    name: "Anderlecht",
    country: "Belgium",
    league: "Belgian Pro League",
    colors: ["purple", "white"],
    primaryColor: "purple",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/anderlecht-vector-logo.png",
    popularity: 2,
    founded: 1908,
    stadium: "Lotto Park"
  },

  // Scottish Teams
  {
    id: 65,
    name: "Celtic FC",
    country: "Scotland",
    league: "Scottish Premiership",
    colors: ["green", "white"],
    primaryColor: "green",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/celtic-fc-vector-logo.png",
    popularity: 3,
    founded: 1887,
    stadium: "Celtic Park"
  },
  {
    id: 66,
    name: "Rangers FC",
    country: "Scotland",
    league: "Scottish Premiership",
    colors: ["blue", "red", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/rangers-fc-vector-logo.png",
    popularity: 3,
    founded: 1872,
    stadium: "Ibrox Stadium"
  },

  // More Brazilian Teams
  {
    id: 67,
    name: "Palmeiras",
    country: "Brazil",
    league: "Brasileirão",
    colors: ["green", "white"],
    primaryColor: "green",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/palmeiras-vector-logo.png",
    popularity: 3,
    founded: 1914,
    stadium: "Allianz Parque"
  },
  {
    id: 68,
    name: "Corinthians",
    country: "Brazil",
    league: "Brasileirão",
    colors: ["white", "black"],
    primaryColor: "white",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/corinthians-vector-logo.png",
    popularity: 3,
    founded: 1910,
    stadium: "Neo Química Arena"
  },
  {
    id: 69,
    name: "Grêmio",
    country: "Brazil",
    league: "Brasileirão",
    colors: ["blue", "black", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/gremio-vector-logo.png",
    popularity: 2,
    founded: 1903,
    stadium: "Arena do Grêmio"
  },

  // Colombian Teams
  {
    id: 70,
    name: "Millonarios",
    country: "Colombia",
    league: "Liga BetPlay",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/millonarios-vector-logo.png",
    popularity: 2,
    founded: 1946,
    stadium: "Estadio Nemesio Camacho El Campín"
  },

  // Chilean Teams
  {
    id: 71,
    name: "Colo-Colo",
    country: "Chile",
    league: "Primera División",
    colors: ["white", "black"],
    primaryColor: "white",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/colo-colo-vector-logo.png",
    popularity: 2,
    founded: 1925,
    stadium: "Estadio Monumental"
  },

  // Egyptian Teams
  {
    id: 72,
    name: "Al Ahly",
    country: "Egypt",
    league: "Egyptian Premier League",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/al-ahly-vector-logo.png",
    popularity: 3,
    founded: 1907,
    stadium: "Cairo International Stadium"
  },
  {
    id: 73,
    name: "Zamalek",
    country: "Egypt",
    league: "Egyptian Premier League",
    colors: ["white"],
    primaryColor: "white",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/zamalek-vector-logo.png",
    popularity: 2,
    founded: 1911,
    stadium: "Cairo International Stadium"
  },

  // South African Teams
  {
    id: 74,
    name: "Kaizer Chiefs",
    country: "South Africa",
    league: "Premier Soccer League",
    colors: ["gold", "black"],
    primaryColor: "gold",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/kaizer-chiefs-vector-logo.png",
    popularity: 2,
    founded: 1970,
    stadium: "FNB Stadium"
  },
  {
    id: 75,
    name: "Orlando Pirates",
    country: "South Africa",
    league: "Premier Soccer League",
    colors: ["black", "white"],
    primaryColor: "black",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/orlando-pirates-vector-logo.png",
    popularity: 2,
    founded: 1937,
    stadium: "Orlando Stadium"
  },

  // More Turkish Teams to complete the collection
  {
    id: 76,
    name: "Sivasspor",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/sivasspor-vector-logo.png",
    popularity: 2,
    founded: 1967,
    stadium: "Yeni 4 Eylül Stadium"
  },
  {
    id: 77,
    name: "Antalyaspor",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["red", "white"],
    primaryColor: "red",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/antalyaspor-vector-logo.png",
    popularity: 2,
    founded: 1966,
    stadium: "Antalya Stadium"
  },
  {
    id: 78,
    name: "Konyaspor",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["green", "white"],
    primaryColor: "green",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/konyaspor-vector-logo.png",
    popularity: 2,
    founded: 1922,
    stadium: "Konya Metropolitan Municipality Stadium"
  },
  {
    id: 79,
    name: "Kasımpaşa",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["blue", "white"],
    primaryColor: "blue",
    logo: "https://logoeps.com/wp-content/uploads/2013/03/kasimpasa-vector-logo.png",
    popularity: 2,
    founded: 1921,
    stadium: "Recep Tayyip Erdoğan Stadium"
  },
  {
    id: 80,
    name: "Alanyaspor",
    country: "Turkey",
    league: "Süper Lig",
    colors: ["orange", "green"],
    primaryColor: "orange",
    logo: "https://logoeps.com/wp-content/uploads/2018/05/alanyaspor-vector-logo.png",
    popularity: 2,
    founded: 1948,
    stadium: "Bahçeşehir Okulları Stadium"
  }
];

// Function to search teams by color
export const searchTeamsByColor = (color, teams = footballTeams) => {
  if (!color || color.trim() === '') {
    return teams.sort((a, b) => b.popularity - a.popularity);
  }
  
  const searchColor = color.toLowerCase().trim();
  const filteredTeams = teams.filter(team => 
    team.colors.some(teamColor => 
      teamColor.toLowerCase().includes(searchColor)
    ) || team.primaryColor.toLowerCase().includes(searchColor)
  );
  
  // Sort by popularity (higher first) then by name
  return filteredTeams.sort((a, b) => {
    if (a.popularity !== b.popularity) {
      return b.popularity - a.popularity;
    }
    return a.name.localeCompare(b.name);
  });
};

// Function to get all unique colors
export const getAllColors = (teams = footballTeams) => {
  const colorSet = new Set();
  teams.forEach(team => {
    team.colors.forEach(color => colorSet.add(color));
  });
  return Array.from(colorSet).sort();
};