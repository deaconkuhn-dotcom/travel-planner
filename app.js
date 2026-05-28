const tripForm = document.querySelector("#tripForm");
const workspace = document.querySelector("#planner");
const destinationInput = document.querySelector("#destination");
const startDateInput = document.querySelector("#startDate");
const endDateInput = document.querySelector("#endDate");
const travelersInput = document.querySelector("#travelers");
const budgetInput = document.querySelector("#budget");
const tripStyleInput = document.querySelector("#tripStyle");
const departureCityInput = document.querySelector("#departureCity");
const travelPriorityInput = document.querySelector("#travelPriority");
const tripTitle = document.querySelector("#tripTitle");
const tripDetails = document.querySelector("#tripDetails");
const itineraryList = document.querySelector("#itineraryList");
const travelGrid = document.querySelector("#travelGrid");
const activityForm = document.querySelector("#activityForm");
const activityName = document.querySelector("#activityName");
const activityCost = document.querySelector("#activityCost");
const spentTotal = document.querySelector("#spentTotal");
const budgetMeter = document.querySelector("#budgetMeter");
const budgetStatus = document.querySelector("#budgetStatus");
const addSampleBtn = document.querySelector("#addSampleBtn");
const startPlanningBtn = document.querySelector("#startPlanningBtn");
const heroImage = document.querySelector("#heroImage");
const ideaGrid = document.querySelector("#ideaGrid");
const packingList = document.querySelector("#packingList");
const resetPackingBtn = document.querySelector("#resetPackingBtn");

const today = new Date();
const fourDaysLater = new Date(today);
fourDaysLater.setDate(today.getDate() + 4);

const formatDateInput = (date) => date.toISOString().slice(0, 10);
startDateInput.value = formatDateInput(today);
endDateInput.value = formatDateInput(fourDaysLater);

function photoUrl(id, width = 1600) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

const destinationPhotos = [
  {
    name: "Lisbon, Portugal",
    keywords: ["lisbon", "portugal"],
    image: photoUrl("photo-1555881400-74d7acaacd8b"),
    style: "Food and neighborhoods",
    budget: 1200,
    note: "Tram rides, tile-front cafes, river sunsets, and a slow seafood lunch.",
    activities: [
      { name: "Day 1: Alfama, tram views, and miradouros", cost: 35, description: "Start with Lisbon's oldest lanes, viewpoints, and a low-pressure arrival dinner." },
      { name: "Day 2: Belem monuments and custard tarts", cost: 55, description: "See the riverfront, Jeronimos area, Belem Tower, and pasteis de nata stops." },
      { name: "Day 3: Sintra palaces and forested hills", cost: 110, description: "Use the train for a classic day trip to palace viewpoints and old-town cafes." },
      { name: "Day 4: Bairro Alto, Chiado, and fado night", cost: 95, description: "Mix bookshops, tiled streets, dinner, and a music-focused evening." },
      { name: "Day 5: LX Factory and river sunset", cost: 70, description: "Keep the last day relaxed with design shops, food halls, and waterfront time." },
    ],
  },
  {
    name: "Kyoto, Japan",
    keywords: ["kyoto", "japan"],
    image: photoUrl("photo-1493976040374-85c8e12f0c0e"),
    style: "Museums and history",
    budget: 1800,
    note: "Temple mornings, quiet gardens, tea houses, and lantern-lit alleys.",
    activities: [
      { name: "Day 1: Gion lanes and Yasaka Shrine", cost: 45, description: "Ease in with preserved streets, shrine grounds, tea, and a lantern-lit walk." },
      { name: "Day 2: Fushimi Inari and sake district", cost: 55, description: "Go early for the torii gates, then add Fushimi's canals and tasting rooms." },
      { name: "Day 3: Arashiyama bamboo and river walk", cost: 65, description: "Pair the grove with temples, the river, and a slower west-side afternoon." },
      { name: "Day 4: Kinkaku-ji and Ryoan-ji gardens", cost: 50, description: "Build a quieter culture day around iconic temples and contemplative gardens." },
      { name: "Day 5: Nishiki Market and Pontocho dinner", cost: 85, description: "Snack through the market, shop central Kyoto, then finish by the river." },
    ],
  },
  {
    name: "Tulum, Mexico",
    keywords: ["tulum", "cancun", "riviera maya", "mexico beach"],
    image: photoUrl("photo-1507525428034-b723cf961d3e"),
    style: "Beach reset",
    budget: 1400,
    note: "Swim stops, ruins, tacos, soft mornings, and one very lazy beach day.",
    activities: [
      { name: "Day 1: Beach road arrival and tacos", cost: 70, description: "Settle into the coast with a beach walk, casual dinner, and early night." },
      { name: "Day 2: Tulum ruins and Caribbean swim", cost: 65, description: "Pair the cliffside archaeological zone with nearby beach time." },
      { name: "Day 3: Cenote swim route", cost: 95, description: "Plan a cool-water day around Gran Cenote or nearby cave pools." },
      { name: "Day 4: Sian Ka'an nature day", cost: 140, description: "Use a guided reserve trip for lagoons, wildlife, and a quieter coast." },
      { name: "Day 5: Slow beach club day", cost: 110, description: "Leave space for lounging, seafood, and sunset without over-scheduling." },
    ],
  },
  {
    name: "Paris, France",
    keywords: ["paris", "france", "eiffel"],
    image: photoUrl("photo-1502602898657-3e91760cbb34"),
    style: "Museums and history",
    budget: 1700,
    note: "Cafe mornings, art-heavy afternoons, Seine walks, and classic neighborhoods.",
    activities: [
      { name: "Day 1: Louvre, Tuileries, and Seine walk", cost: 70, description: "Anchor the first day with major art, gardens, and riverside orientation." },
      { name: "Day 2: Eiffel Tower and Left Bank cafes", cost: 95, description: "Mix the landmark view with Saint-Germain streets and a long lunch." },
      { name: "Day 3: Montmartre and Sacre-Coeur sunset", cost: 75, description: "Use the hill for village streets, small museums, and evening views." },
      { name: "Day 4: Marais, Notre-Dame area, and falafel", cost: 65, description: "Spend a neighborhood day around boutiques, history, and casual food." },
      { name: "Day 5: Versailles or Orsay museum day", cost: 115, description: "Choose a palace day trip or stay central for Impressionist art." },
    ],
  },
  {
    name: "New York City, USA",
    keywords: ["new york", "nyc", "manhattan", "brooklyn"],
    image: photoUrl("photo-1499092346589-b9b6be3e94b2"),
    style: "Food and neighborhoods",
    budget: 2100,
    note: "Big walks, skyline views, bagels, galleries, and late dinners.",
    activities: [
      { name: "Day 1: Central Park and museum mile", cost: 95, description: "Start uptown with green space, the Met or Guggenheim, and classic diners." },
      { name: "Day 2: Lower Manhattan and ferry views", cost: 80, description: "Pair Wall Street, the memorial area, and harbor views by ferry." },
      { name: "Day 3: Brooklyn Bridge, Dumbo, and pizza", cost: 90, description: "Walk the bridge, take skyline photos, and build dinner around Brooklyn." },
      { name: "Day 4: SoHo, Village, and jazz night", cost: 150, description: "Make it a neighborhood day with shops, Washington Square, and live music." },
      { name: "Day 5: High Line, Chelsea Market, and Hudson Yards", cost: 85, description: "Finish with west-side design, food stalls, galleries, and river views." },
    ],
  },
  {
    name: "Tokyo, Japan",
    keywords: ["tokyo", "shibuya", "shinjuku"],
    image: photoUrl("photo-1540959733332-eab4deabeeaf"),
    style: "Food and neighborhoods",
    budget: 1900,
    note: "Neon crossings, tiny restaurants, gardens, trains, and design shops.",
    activities: [
      { name: "Day 1: Shibuya crossing and Harajuku", cost: 80, description: "Use the first day for neon energy, fashion streets, and easy food stops." },
      { name: "Day 2: Asakusa, Senso-ji, and Sumida River", cost: 65, description: "Balance old Tokyo temples with river views and casual snacks." },
      { name: "Day 3: Tsukiji breakfast and Ginza", cost: 105, description: "Start with market food, then move into polished shopping and galleries." },
      { name: "Day 4: Ueno museums and Yanaka lanes", cost: 75, description: "Make a slower culture day around parks, museums, and old-town streets." },
      { name: "Day 5: Shinjuku dinner lanes and skyline", cost: 125, description: "End with gardens, observation decks, and a lively food-night route." },
    ],
  },
  {
    name: "London, England",
    keywords: ["london", "england", "uk", "united kingdom"],
    image: photoUrl("photo-1513635269975-59663e0ac1ad"),
    style: "Museums and history",
    budget: 1800,
    note: "Free museums, markets, parks, theatre, and riverside landmarks.",
    activities: [
      { name: "Day 1: Westminster, South Bank, and Borough Market", cost: 90, description: "See the river landmarks, cross bridges, and eat through the market." },
      { name: "Day 2: British Museum and Covent Garden", cost: 80, description: "Pair a major museum with theatre-district streets and dinner." },
      { name: "Day 3: Tower of London and Shoreditch", cost: 110, description: "Move from medieval history to street art, markets, and East London food." },
      { name: "Day 4: Hyde Park, Kensington, and Notting Hill", cost: 85, description: "Build a west-side day around parks, museums, and colorful streets." },
      { name: "Day 5: Greenwich by boat", cost: 95, description: "Take the Thames east for maritime history, markets, and skyline views." },
    ],
  },
  {
    name: "Rome, Italy",
    keywords: ["rome", "italy", "colosseum", "vatican"],
    image: photoUrl("photo-1529260830199-42c24126f198"),
    style: "Museums and history",
    budget: 1500,
    note: "Ancient sites, fountains, espresso stops, pasta dinners, and piazzas.",
    activities: [
      { name: "Day 1: Colosseum, Forum, and Monti", cost: 105, description: "Start with ancient Rome, then shift into a neighborhood dinner nearby." },
      { name: "Day 2: Vatican Museums and Prati lunch", cost: 105, description: "Give the Vatican a full morning and use Prati for a calmer food break." },
      { name: "Day 3: Pantheon, Trevi, and Spanish Steps", cost: 65, description: "Walk the historic center early before the busiest fountain hours." },
      { name: "Day 4: Trastevere, Janiculum, and Roman classics", cost: 90, description: "Build the day around riverside lanes, viewpoints, and a relaxed dinner." },
      { name: "Day 5: Appian Way or Borghese Gallery", cost: 95, description: "Choose ancient-road wandering or a reservation-based art morning." },
    ],
  },
  {
    name: "Barcelona, Spain",
    keywords: ["barcelona", "spain", "gaudi"],
    image: photoUrl("photo-1583422409516-2895a77efded"),
    style: "Food and neighborhoods",
    budget: 1450,
    note: "Gaudi icons, beach time, tapas lanes, markets, and late city energy.",
    activities: [
      { name: "Day 1: Sagrada Familia and Eixample tapas", cost: 105, description: "Start with Gaudi's landmark basilica, then use Eixample for food and design." },
      { name: "Day 2: Gothic Quarter, Born, and Picasso area", cost: 75, description: "Spend the day in older lanes, small museums, plazas, and tapas bars." },
      { name: "Day 3: Park Guell and Gracia afternoon", cost: 85, description: "Pair mosaic viewpoints with a slower neighborhood lunch and shopping." },
      { name: "Day 4: Barceloneta beach and seafood", cost: 95, description: "Give the coast a proper day with beach time and a late waterfront dinner." },
      { name: "Day 5: Montjuic views and market lunch", cost: 80, description: "Use the hill for museums, gardens, city views, and a market finish." },
    ],
  },
  {
    name: "Dubai, UAE",
    keywords: ["dubai", "uae", "burj"],
    image: photoUrl("photo-1512453979798-5ea266f8880c"),
    style: "Remote work escape",
    budget: 2200,
    note: "Skyline views, beach clubs, old souks, desert air, and polished hotels.",
    activities: [
      { name: "Day 1: Burj Khalifa, Dubai Mall, and fountains", cost: 135, description: "Use the downtown icons for skyline orientation and an easy arrival night." },
      { name: "Day 2: Old Dubai souks and creek abra", cost: 55, description: "Balance the skyscrapers with gold, spice, textile markets, and the creek." },
      { name: "Day 3: Jumeirah beach and Palm views", cost: 125, description: "Plan a coast day around beach time, hotels, and marina-style dining." },
      { name: "Day 4: Desert safari and dinner", cost: 180, description: "Book a desert evening for dunes, sunset, and a hosted meal outside the city." },
      { name: "Day 5: Museum of the Future and Alserkal", cost: 110, description: "Mix futuristic architecture with galleries, cafes, and design spaces." },
    ],
  },
  {
    name: "Singapore",
    keywords: ["singapore", "marina bay"],
    image: photoUrl("photo-1525625293386-3f8f99389edd"),
    style: "Food and neighborhoods",
    budget: 1600,
    note: "Hawker centers, gardens, skyline walks, design hotels, and easy transit.",
    activities: [
      { name: "Day 1: Marina Bay and Gardens by the Bay", cost: 95, description: "Start with the skyline loop, Supertrees, and a satay dinner nearby." },
      { name: "Day 2: Chinatown, temples, and hawker centers", cost: 50, description: "Make food the structure of the day with heritage streets and stalls." },
      { name: "Day 3: Kampong Glam and Little India", cost: 60, description: "Use colorful districts for murals, mosques, markets, and casual meals." },
      { name: "Day 4: Botanic Gardens and Orchard Road", cost: 85, description: "Balance a UNESCO-listed garden morning with shopping and cafes." },
      { name: "Day 5: Sentosa or East Coast Park", cost: 125, description: "Choose a beach/play day or a calmer bike-and-seafood route." },
    ],
  },
  {
    name: "Sydney, Australia",
    keywords: ["sydney", "australia", "opera house"],
    image: photoUrl("photo-1506973035872-a4ec16b8e8d9"),
    style: "Outdoor adventure",
    budget: 1900,
    note: "Harbor walks, surf beaches, coastal trails, and long brunches.",
    activities: [
      { name: "Day 1: Opera House, ferries, and The Rocks", cost: 95, description: "Use the harbor icons for orientation, photos, and a historic dinner area." },
      { name: "Day 2: Bondi to Coogee coastal walk", cost: 55, description: "Build the day around beaches, sea pools, cliffs, and an easy cafe lunch." },
      { name: "Day 3: Manly ferry and beach dinner", cost: 105, description: "Let the ferry ride be part of the attraction, then stay for sunset." },
      { name: "Day 4: Taronga Zoo or harbor headlands", cost: 120, description: "Pick wildlife with views or a scenic walking day around the north shore." },
      { name: "Day 5: Blue Mountains day trip", cost: 145, description: "Use a full day for viewpoints, short walks, and cooler mountain air." },
    ],
  },
  {
    name: "Rio de Janeiro, Brazil",
    keywords: ["rio", "rio de janeiro", "brazil", "copacabana"],
    image: photoUrl("photo-1483729558449-99ef09a8c325"),
    style: "Beach reset",
    budget: 1300,
    note: "Beach mornings, mountain views, samba nights, and tropical city drama.",
    activities: [
      { name: "Day 1: Ipanema and Arpoador sunset", cost: 60, description: "Start with the beach rhythm, safe daylight wandering, and a sunset point." },
      { name: "Day 2: Christ the Redeemer and Santa Teresa", cost: 95, description: "Pair the landmark view with hillside streets, galleries, and lunch." },
      { name: "Day 3: Sugarloaf and Urca seafood", cost: 125, description: "Use the cable car for bay views, then stay nearby for dinner." },
      { name: "Day 4: Copacabana, Leme, and live music", cost: 90, description: "Build a classic beach day with an evening samba or music stop." },
      { name: "Day 5: Botanical Garden and Lagoa", cost: 75, description: "Finish with greener, calmer Rio around gardens, lake paths, and cafes." },
    ],
  },
  {
    name: "Istanbul, Turkiye",
    keywords: ["istanbul", "turkey", "turkiye", "bosphorus"],
    image: photoUrl("photo-1524231757912-21f4fe3a7200"),
    style: "Museums and history",
    budget: 1200,
    note: "Mosques, ferries, markets, tea stops, and layered neighborhoods.",
    activities: [
      { name: "Day 1: Hagia Sophia, Blue Mosque, Sultanahmet", cost: 75, description: "Start with the historic peninsula's defining mosques, squares, and cisterns." },
      { name: "Day 2: Topkapi Palace and Gulhane Park", cost: 85, description: "Use a palace morning, then slow down with gardens and tea." },
      { name: "Day 3: Grand Bazaar, spice market, and ferry", cost: 80, description: "Move from market lanes to the water for a Bosphorus perspective." },
      { name: "Day 4: Galata, Karakoy, and modern cafes", cost: 85, description: "Cross the bridge for towers, design shops, coffee, and dinner." },
      { name: "Day 5: Kadikoy food day on the Asian side", cost: 70, description: "Take the ferry for markets, street food, and a neighborhood-heavy finale." },
    ],
  },
  {
    name: "Bangkok, Thailand",
    keywords: ["bangkok", "thailand"],
    image: photoUrl("photo-1508009603885-50cf7c579365"),
    style: "Food and neighborhoods",
    budget: 1050,
    note: "Temples, river boats, night markets, massage stops, and street food.",
    activities: [
      { name: "Day 1: Grand Palace, Wat Pho, and river boat", cost: 65, description: "Anchor the trip with major temples, then use the river to cool down." },
      { name: "Day 2: Chinatown dinner and flower market", cost: 60, description: "Keep the day food-forward with Yaowarat streets and evening energy." },
      { name: "Day 3: Chatuchak or local market crawl", cost: 55, description: "Shop, snack, and leave room for a massage or cafe break." },
      { name: "Day 4: Jim Thompson House and Siam", cost: 75, description: "Add design history, malls, and a comfortable indoor afternoon." },
      { name: "Day 5: Floating market or canal route", cost: 95, description: "Use a guided half-day for canals, markets, and outer-neighborhood texture." },
    ],
  },
  {
    name: "Bali, Indonesia",
    keywords: ["bali", "ubud", "indonesia"],
    image: photoUrl("photo-1537996194471-e657df975ab4"),
    style: "Beach reset",
    budget: 1250,
    note: "Rice terraces, surf beaches, wellness stops, temples, and slow mornings.",
    activities: [
      { name: "Day 1: Ubud rice terraces and cafes", cost: 65, description: "Begin inland with green views, craft shops, and a slower arrival pace." },
      { name: "Day 2: Tirta Empul and temple route", cost: 75, description: "Use a driver for sacred-water sites, villages, and scenic stops." },
      { name: "Day 3: Waterfall morning and wellness afternoon", cost: 85, description: "Pair nature with a massage, yoga, or quiet pool time." },
      { name: "Day 4: Uluwatu cliffs and sunset performance", cost: 95, description: "Move south for beaches, temple cliffs, and an evening show." },
      { name: "Day 5: Canggu or Seminyak beach day", cost: 105, description: "Finish with surf, cafes, boutiques, and one polished dinner." },
    ],
  },
  {
    name: "Amsterdam, Netherlands",
    keywords: ["amsterdam", "netherlands", "holland"],
    image: photoUrl("photo-1512470876302-972faa2aa9a4"),
    style: "Museums and history",
    budget: 1550,
    note: "Canals, museums, bikes, design shops, brown cafes, and compact days.",
    activities: [
      { name: "Day 1: Canal walk and Jordaan cafes", cost: 70, description: "Start with bridges, narrow houses, shops, and a low-stress neighborhood dinner." },
      { name: "Day 2: Rijksmuseum and Museumplein", cost: 105, description: "Give the museum district time, then relax in nearby parks and streets." },
      { name: "Day 3: Anne Frank area and Nine Streets", cost: 80, description: "Build a history and shopping day around the western canal belt." },
      { name: "Day 4: Vondelpark bike ride and canal cruise", cost: 95, description: "Use bikes and boats for a classic city perspective." },
      { name: "Day 5: Noord ferry and food hall evening", cost: 85, description: "Cross the IJ for creative spaces, views, and casual food." },
    ],
  },
  {
    name: "Santorini, Greece",
    keywords: ["santorini", "greece", "oia"],
    image: photoUrl("photo-1570077188670-e3a8d69ac5ff"),
    style: "Beach reset",
    budget: 1700,
    note: "Cliff villages, blue domes, caldera views, beach time, and seafood.",
    activities: [
      { name: "Day 1: Fira lanes and caldera sunset", cost: 75, description: "Settle into cliffside views, whitewashed streets, and a seafood dinner." },
      { name: "Day 2: Oia morning and blue dome viewpoints", cost: 85, description: "Go early for photos, shops, and quieter caldera corners." },
      { name: "Day 3: Fira to Oia cliff walk", cost: 65, description: "Use the island's signature walking route and finish with a long lunch." },
      { name: "Day 4: Akrotiri and Red Beach", cost: 95, description: "Add archaeology, volcanic color, and a south-island beach stop." },
      { name: "Day 5: Caldera boat and hot springs", cost: 145, description: "Use a boat day for volcanic islands, swimming, and sunset water views." },
    ],
  },
  {
    name: "Marrakesh, Morocco",
    keywords: ["marrakesh", "marrakech", "morocco"],
    image: photoUrl("photo-1647878501418-d027e31982b5"),
    style: "Museums and history",
    budget: 1150,
    note: "Riads, gardens, souks, rooftops, desert textures, and fragrant dinners.",
    activities: [
      { name: "Day 1: Medina souks and Jemaa el-Fnaa", cost: 65, description: "Start with guided lanes, market orientation, and a rooftop dinner." },
      { name: "Day 2: Bahia Palace and Saadian Tombs", cost: 70, description: "Build a history day around ornate courtyards, tilework, and quiet pauses." },
      { name: "Day 3: Jardin Majorelle and Gueliz cafes", cost: 75, description: "Switch into gardens, design, modern cafes, and a calmer afternoon." },
      { name: "Day 4: Hammam and evening food walk", cost: 105, description: "Leave recovery time before tasting stalls, grills, and Moroccan sweets." },
      { name: "Day 5: Atlas foothills or Agafay desert", cost: 130, description: "Use a guided day outside the city for mountain or desert contrast." },
    ],
  },
  {
    name: "Cape Town, South Africa",
    keywords: ["cape town", "south africa", "table mountain"],
    image: photoUrl("photo-1580060839134-75a5edca2e99"),
    style: "Outdoor adventure",
    budget: 1450,
    note: "Mountain trails, beaches, coastal drives, wine country, and city food.",
    activities: [
      { name: "Day 1: Table Mountain and Kloof Street", cost: 100, description: "Use clear weather for the mountain, then head into a food-focused evening." },
      { name: "Day 2: V&A Waterfront and Robben Island", cost: 120, description: "Pair harbor time with a major historical site if tickets line up." },
      { name: "Day 3: Cape Peninsula coastal drive", cost: 140, description: "Make it a full-day route for viewpoints, beaches, and Cape Point." },
      { name: "Day 4: Kirstenbosch and Camps Bay sunset", cost: 85, description: "Balance gardens, mountain backdrops, and a polished beach evening." },
      { name: "Day 5: Winelands or Bo-Kaap and galleries", cost: 130, description: "Choose a wine-country day or a colorful neighborhood and art route." },
    ],
  },
  {
    name: "San Francisco, USA",
    keywords: ["san francisco", "sf", "golden gate"],
    image: photoUrl("photo-1501594907352-04cda38ebc29"),
    style: "Food and neighborhoods",
    budget: 1850,
    note: "Bay views, steep streets, parks, sourdough, galleries, and ferry rides.",
    activities: [
      { name: "Day 1: Golden Gate Bridge and Presidio", cost: 75, description: "Start with bay views, trails, picnic stops, and coastal overlooks." },
      { name: "Day 2: Ferry Building and Embarcadero", cost: 85, description: "Make the waterfront a food-and-views day with easy transit." },
      { name: "Day 3: Mission murals and food crawl", cost: 105, description: "Use murals, bakeries, taquerias, and Dolores Park as the route." },
      { name: "Day 4: Alcatraz and North Beach", cost: 125, description: "Book the island ahead, then finish with Italian food and bookstores." },
      { name: "Day 5: Sausalito ferry or Golden Gate Park", cost: 95, description: "Choose a bay ferry escape or a museums-and-gardens park day." },
    ],
  },
  {
    name: "Venice, Italy",
    keywords: ["venice", "venezia"],
    image: photoUrl("photo-1514890547357-a9ee288728e0"),
    style: "Museums and history",
    budget: 1550,
    note: "Canals, quiet backstreets, cicchetti bars, islands, and evening bridges.",
    activities: [
      { name: "Day 1: San Marco and Rialto at off-hours", cost: 95, description: "Start early or late for the icons, then graze through cicchetti bars." },
      { name: "Day 2: Doge's Palace and lagoon views", cost: 115, description: "Use a reserved museum morning and leave time for waterfront wandering." },
      { name: "Day 3: Dorsoduro galleries and canals", cost: 80, description: "Build a quieter art day around the Accademia area and side canals." },
      { name: "Day 4: Murano and Burano island day", cost: 100, description: "Take boats for glassmaking, colored houses, and a slower island lunch." },
      { name: "Day 5: Cannaregio and Jewish Ghetto", cost: 75, description: "Finish with local lanes, history, bridges, and a calmer final dinner." },
    ],
  },
];

const ideas = destinationPhotos;
const defaultHeroImage = photoUrl("photo-1500530855697-b586d89ba3ee");
let activeHeroImage = defaultHeroImage;

let itinerary = [];

const travelEssentials = {
  "Lisbon, Portugal": {
    airport: "LIS",
    airportName: "Humberto Delgado Airport",
    flightNote: "Nonstop if available; otherwise connect through Madrid, London, Paris, or Amsterdam.",
    hotels: {
      food: "Baixa or Chiado for walkable food, shops, and easy transit.",
      beach: "Cais do Sodre or Cascais if you want river/coast access.",
      culture: "Alfama or Baixa for historic streets and viewpoints.",
      outdoor: "Cais do Sodre for ferries, trains, and day trips.",
      work: "Saldanha or Avenida for quieter hotels and metro access.",
    },
  },
  "Kyoto, Japan": {
    airport: "KIX",
    airportName: "Kansai International Airport",
    flightNote: "Fly into Osaka Kansai, then take rail into Kyoto; Tokyo connections can also work.",
    hotels: {
      food: "Kawaramachi or Pontocho for restaurants and evening walks.",
      beach: "Kyoto Station for easiest rail connections to day trips.",
      culture: "Gion or Higashiyama for temples and preserved lanes.",
      outdoor: "Arashiyama for bamboo, river walks, and a slower pace.",
      work: "Kyoto Station or Karasuma for transit, cafes, and reliable business hotels.",
    },
  },
  "Tulum, Mexico": {
    airport: "CUN",
    airportName: "Cancun International Airport",
    flightNote: "Fly into Cancun, then use a shuttle or rental car down the Riviera Maya.",
    hotels: {
      food: "Tulum Pueblo for better-value restaurants and easy local movement.",
      beach: "Beach Road for sand, clubs, and walkable coast time.",
      culture: "Pueblo for ruins access and day-trip pickups.",
      outdoor: "Aldea Zama or Pueblo for cenotes, reserve tours, and bikes.",
      work: "Aldea Zama for quieter stays between town and beach.",
    },
  },
  "Paris, France": {
    airport: "CDG",
    airportName: "Charles de Gaulle Airport",
    flightNote: "CDG has the most long-haul options; Orly can be better for some European routes.",
    hotels: {
      food: "Le Marais or Saint-Germain for cafes, wine bars, and walkable dinners.",
      beach: "Saint-Germain or Canal Saint-Martin for relaxed waterfront-style wandering.",
      culture: "1st, 6th, or 7th arrondissement for museums and landmarks.",
      outdoor: "Latin Quarter for gardens, river walks, and easy transit.",
      work: "Opera or Bourse for central transport and business-friendly hotels.",
    },
  },
  "New York City, USA": {
    airport: "JFK",
    airportName: "John F. Kennedy International Airport",
    flightNote: "Compare JFK, LGA, and EWR; the best airport depends heavily on hotel neighborhood.",
    hotels: {
      food: "Lower East Side, NoMad, or Williamsburg for restaurants and nightlife.",
      beach: "Downtown Brooklyn or FiDi for ferry access and waterfront walks.",
      culture: "Midtown or Upper West Side for museums, theatre, and parks.",
      outdoor: "Upper West Side or Brooklyn Heights for parks and walking routes.",
      work: "NoMad, Midtown, or FiDi for transit and business hotels.",
    },
  },
  "Tokyo, Japan": {
    airport: "HND",
    airportName: "Tokyo Haneda Airport",
    flightNote: "Haneda is closest to central Tokyo; Narita can be cheaper for some international flights.",
    hotels: {
      food: "Shinjuku, Shibuya, or Ginza for dense dining and transit.",
      beach: "Shinagawa for easier rail toward Yokohama or coastal day trips.",
      culture: "Asakusa or Ueno for temples, museums, and old Tokyo.",
      outdoor: "Ueno or Shinjuku for parks and rail connections.",
      work: "Shinagawa, Tokyo Station, or Ginza for business hotels and trains.",
    },
  },
  "London, England": {
    airport: "LHR",
    airportName: "London Heathrow Airport",
    flightNote: "Heathrow has the most options; Gatwick can be better for low-cost European flights.",
    hotels: {
      food: "Soho, Covent Garden, or Shoreditch for restaurants and nightlife.",
      beach: "South Bank or Greenwich for river views and slower walks.",
      culture: "Bloomsbury, Westminster, or South Kensington for museums and icons.",
      outdoor: "Kensington or Notting Hill for parks and walkable streets.",
      work: "Paddington, King's Cross, or City of London for transport and meetings.",
    },
  },
  "Rome, Italy": {
    airport: "FCO",
    airportName: "Leonardo da Vinci-Fiumicino Airport",
    flightNote: "Fiumicino is the main international airport; Ciampino is mostly budget European routes.",
    hotels: {
      food: "Trastevere or Monti for trattorias, wine bars, and atmosphere.",
      beach: "Prati or Ostiense for easier transit to the coast.",
      culture: "Centro Storico, Monti, or Prati for ruins, churches, and Vatican access.",
      outdoor: "Aventino or Monti for parks, viewpoints, and walkable routes.",
      work: "Prati or Termini area for transit and quieter hotel options.",
    },
  },
  "Barcelona, Spain": {
    airport: "BCN",
    airportName: "Barcelona-El Prat Airport",
    flightNote: "BCN is close and efficient; stay near metro or Aerobus stops for easy transfers.",
    hotels: {
      food: "Eixample or El Born for tapas, bars, and design-heavy streets.",
      beach: "Barceloneta or Poblenou for beach access.",
      culture: "Gothic Quarter, El Born, or Eixample for Gaudi and museums.",
      outdoor: "Gracia or Poblenou for parks, walking, and beach/bike access.",
      work: "Eixample or Poblenou for quieter hotels and good transit.",
    },
  },
  "Dubai, UAE": {
    airport: "DXB",
    airportName: "Dubai International Airport",
    flightNote: "DXB is the main hub; choose flight times that avoid very late hotel check-ins.",
    hotels: {
      food: "Downtown Dubai or DIFC for restaurants and polished nightlife.",
      beach: "Jumeirah Beach Residence or Palm Jumeirah for resort-style stays.",
      culture: "Al Fahidi or Deira for old Dubai, souks, and creek access.",
      outdoor: "Dubai Marina or Jumeirah for beach walks and tours.",
      work: "DIFC, Business Bay, or Downtown for business hotels and fast transit.",
    },
  },
  "Singapore": {
    airport: "SIN",
    airportName: "Singapore Changi Airport",
    flightNote: "Changi is highly connected; red-eyes are common, so consider early check-in plans.",
    hotels: {
      food: "Chinatown, Bugis, or Tanjong Pagar for hawker centers and restaurants.",
      beach: "Sentosa for resort time or Marina Bay for waterfront polish.",
      culture: "Kampong Glam, Little India, or Chinatown for heritage districts.",
      outdoor: "Marina Bay or Orchard for gardens and easy transit.",
      work: "Marina Bay, Raffles Place, or Tanjong Pagar for business travel.",
    },
  },
  "Sydney, Australia": {
    airport: "SYD",
    airportName: "Sydney Kingsford Smith Airport",
    flightNote: "SYD is close to the city; compare arrival time carefully on long-haul routes.",
    hotels: {
      food: "Surry Hills or Darlinghurst for cafes, bars, and restaurants.",
      beach: "Bondi, Coogee, or Manly for beach-first trips.",
      culture: "Circular Quay or The Rocks for harbor icons.",
      outdoor: "Bondi, Manly, or The Rocks for coast and ferry access.",
      work: "CBD or Darling Harbour for meetings and transit.",
    },
  },
  "Rio de Janeiro, Brazil": {
    airport: "GIG",
    airportName: "Rio de Janeiro-Galeao Airport",
    flightNote: "GIG handles most international flights; SDU is better for domestic hops.",
    hotels: {
      food: "Ipanema or Leblon for restaurants, safety, and beach access.",
      beach: "Ipanema, Leblon, or Copacabana for classic beach stays.",
      culture: "Santa Teresa for character, or Ipanema for easier logistics.",
      outdoor: "Ipanema or Botafogo for beach, hikes, and views.",
      work: "Ipanema or Flamengo for calmer stays and transit.",
    },
  },
  "Istanbul, Turkiye": {
    airport: "IST",
    airportName: "Istanbul Airport",
    flightNote: "IST is the main international hub; SAW can be cheaper but farther from many sights.",
    hotels: {
      food: "Karakoy, Galata, or Kadikoy for cafes, meyhanes, and markets.",
      beach: "Karakoy or Besiktas for Bosphorus access.",
      culture: "Sultanahmet for first-timers focused on major historic sites.",
      outdoor: "Besiktas or Karakoy for ferries, waterfront, and neighborhoods.",
      work: "Levent, Sisli, or Karakoy for business hotels and transit.",
    },
  },
  "Bangkok, Thailand": {
    airport: "BKK",
    airportName: "Suvarnabhumi Airport",
    flightNote: "BKK is best for most international flights; DMK is common for regional budget routes.",
    hotels: {
      food: "Chinatown, Silom, or Ari for street food and local restaurants.",
      beach: "Riverside for resort feel before island or coast connections.",
      culture: "Riverside or Old City for temples and river boats.",
      outdoor: "Sukhumvit or Silom for transit, parks, and day tours.",
      work: "Sukhumvit, Silom, or Sathorn for business hotels and transit.",
    },
  },
  "Bali, Indonesia": {
    airport: "DPS",
    airportName: "Ngurah Rai International Airport",
    flightNote: "DPS is the main Bali airport; transfer time varies a lot by traffic and area.",
    hotels: {
      food: "Canggu or Seminyak for cafes, restaurants, and nightlife.",
      beach: "Seminyak, Canggu, Uluwatu, or Nusa Dua for beach-focused stays.",
      culture: "Ubud for temples, rice terraces, and crafts.",
      outdoor: "Ubud or Uluwatu for nature, surfing, and scenic drives.",
      work: "Canggu or Ubud for cafes, villas, and longer stays.",
    },
  },
  "Amsterdam, Netherlands": {
    airport: "AMS",
    airportName: "Amsterdam Schiphol Airport",
    flightNote: "AMS is very well connected; staying near transit makes short trips easier.",
    hotels: {
      food: "Jordaan, De Pijp, or Nine Streets for cafes and restaurants.",
      beach: "Amsterdam Noord for water views and creative spaces.",
      culture: "Museum Quarter or Canal Belt for museums and classic Amsterdam.",
      outdoor: "Vondelpark or Jordaan for bikes, canals, and parks.",
      work: "Zuidas, Centraal, or Canal Belt for business and transit.",
    },
  },
  "Santorini, Greece": {
    airport: "JTR",
    airportName: "Santorini Airport",
    flightNote: "JTR has seasonal flights; Athens connections are common outside peak routes.",
    hotels: {
      food: "Fira for restaurants, transit, and caldera access.",
      beach: "Kamari or Perissa for beach-first value.",
      culture: "Fira or Pyrgos for village walks and archaeology access.",
      outdoor: "Imerovigli or Fira for cliff walks and caldera views.",
      work: "Fira for more services, transit, and practical hotel options.",
    },
  },
  "Marrakesh, Morocco": {
    airport: "RAK",
    airportName: "Marrakech Menara Airport",
    flightNote: "RAK is close to the city; arrange riad pickup if staying inside the medina.",
    hotels: {
      food: "Medina riad or Gueliz for rooftop meals and cafes.",
      beach: "Hivernage for pool hotels and resort comfort.",
      culture: "Medina riad for souks, palaces, and historic atmosphere.",
      outdoor: "Hivernage or Palmeraie for easier day-trip pickups.",
      work: "Gueliz or Hivernage for modern hotels and calmer streets.",
    },
  },
  "Cape Town, South Africa": {
    airport: "CPT",
    airportName: "Cape Town International Airport",
    flightNote: "CPT is the main airport; rent a car or plan rides for peninsula and wine routes.",
    hotels: {
      food: "Gardens, Kloof Street, or V&A Waterfront for restaurants.",
      beach: "Camps Bay or Sea Point for coast and sunset access.",
      culture: "City Bowl or V&A Waterfront for museums and history.",
      outdoor: "Sea Point, Gardens, or Camps Bay for trails and coast.",
      work: "V&A Waterfront or City Bowl for business hotels and services.",
    },
  },
  "San Francisco, USA": {
    airport: "SFO",
    airportName: "San Francisco International Airport",
    flightNote: "Compare SFO and OAK; SFO has more long-haul options, OAK may price better.",
    hotels: {
      food: "Mission, Hayes Valley, or North Beach for food-focused stays.",
      beach: "Marina or Presidio area for bay walks and bridge views.",
      culture: "Union Square, SoMa, or North Beach for museums and classic sights.",
      outdoor: "Marina, Presidio, or Haight for parks and bay walks.",
      work: "SoMa, FiDi, or Union Square for meetings and transit.",
    },
  },
  "Venice, Italy": {
    airport: "VCE",
    airportName: "Venice Marco Polo Airport",
    flightNote: "VCE is best for Venice; water bus or private transfer changes the arrival experience.",
    hotels: {
      food: "Cannaregio or San Polo for cicchetti and less polished local energy.",
      beach: "Lido for beach access while staying connected by boat.",
      culture: "San Marco, Dorsoduro, or Cannaregio for sights and quieter lanes.",
      outdoor: "Dorsoduro or Lido for walking, canals, and lagoon air.",
      work: "Cannaregio or Santa Croce for easier arrivals and practical hotels.",
    },
  },
};

const basePackingItems = [
  "Passport or ID",
  "Phone charger",
  "Walking shoes",
  "Weather layer",
  "Reusable bottle",
  "Travel insurance",
  "Reservation screenshots",
  "Day bag",
];

let packingItems = basePackingItems.map((name) => ({ name, done: false }));

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function renderDestinationOptions() {
  destinationInput.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Choose a destination";
  destinationInput.append(placeholder);

  destinationPhotos.forEach((destination) => {
    const option = document.createElement("option");
    option.value = destination.name;
    option.textContent = destination.name;
    destinationInput.append(option);
  });
  destinationInput.value = "";
}

function findDestinationPhoto(destination) {
  return destinationPhotos.find((item) => item.name === destination) || null;
}

function setHeroPhoto(destination) {
  const match = findDestinationPhoto(destination);
  const nextImage = match ? match.image : defaultHeroImage;
  if (nextImage === activeHeroImage) return;

  activeHeroImage = nextImage;
  heroImage.src = nextImage;
  heroImage.alt = match ? `${match.name} travel photo` : "Scenic travel background";
}

function renderTripSummary() {
  const destination = destinationInput.value.trim();
  const travelers = Number(travelersInput.value || 1);
  const style = tripStyleInput.value;
  const start = startDateInput.value ? new Date(`${startDateInput.value}T00:00:00`) : null;
  const end = endDateInput.value ? new Date(`${endDateInput.value}T00:00:00`) : null;

  setHeroPhoto(destination);

  if (!destination) {
    tripTitle.textContent = "Choose a destination";
    tripDetails.textContent = "Start from Ideas to build your route.";
    return;
  }

  tripTitle.textContent = destination;

  const dateText =
    start && end
      ? `${start.toLocaleDateString(undefined, { month: "short", day: "numeric" })} - ${end.toLocaleDateString(undefined, { month: "short", day: "numeric" })}`
      : "Dates flexible";

  tripDetails.textContent = `${travelers} ${travelers === 1 ? "traveler" : "travelers"} • ${dateText} • ${style}`;
}

function renderBudget() {
  const spent = itinerary.reduce((sum, item) => sum + Number(item.cost || 0), 0);
  const budget = Number(budgetInput.value || 0);
  const used = budget > 0 ? Math.min((spent / budget) * 100, 100) : 0;
  const remaining = budget - spent;

  spentTotal.textContent = currency(spent);
  budgetMeter.style.width = `${used}%`;
  budgetMeter.style.background = spent > budget ? "var(--berry)" : "var(--accent)";

  if (!itinerary.length) {
    budgetStatus.textContent = "Choose a destination to estimate your trip.";
    return;
  }

  budgetStatus.textContent =
    budget <= 0
      ? "Set a budget to track your plan."
      : remaining >= 0
        ? `${currency(remaining)} left in your planning budget.`
        : `${currency(Math.abs(remaining))} over budget. Trim or raise the ceiling.`;
}

function getStyleKey(style) {
  const normalized = style.toLowerCase();
  if (normalized.includes("food")) return "food";
  if (normalized.includes("beach")) return "beach";
  if (normalized.includes("history") || normalized.includes("museum")) return "culture";
  if (normalized.includes("outdoor")) return "outdoor";
  return "work";
}

function getTripDays() {
  const start = startDateInput.value ? new Date(`${startDateInput.value}T00:00:00`) : null;
  const end = endDateInput.value ? new Date(`${endDateInput.value}T00:00:00`) : null;
  if (!start || !end) return 5;
  const days = Math.round((end - start) / 86400000) + 1;
  return Number.isFinite(days) ? Math.max(days, 1) : 5;
}

function buildTravelUrl(kind, destination, essentials) {
  const origin = departureCityInput.value.trim() || "my airport";
  const start = startDateInput.value;
  const end = endDateInput.value;
  const travelers = Number(travelersInput.value || 1);

  if (kind === "flights") {
    return `https://www.google.com/travel/flights?q=${encodeURIComponent(`flights from ${origin} to ${essentials.airport} ${start}`)}`;
  }

  return `https://www.google.com/travel/hotels?q=${encodeURIComponent(`${destination.name} hotels ${start} ${end} ${travelers} travelers`)}`;
}

function getFlightRecommendation(destination, essentials) {
  const priority = travelPriorityInput.value;
  const days = getTripDays();
  const budget = Number(budgetInput.value || destination.budget);
  const isTightBudget = budget < destination.budget * 0.9;

  if (priority === "Shortest travel time") {
    return `Prioritize nonstop or one-stop flights into ${essentials.airport}. For a ${days}-day trip, saving travel hours matters more than a small fare difference.`;
  }

  if (priority === "Comfort first") {
    return `Pick fewer connections, better layover airports, and arrival times before dinner. For long-haul routes into ${essentials.airport}, comfort usually beats the cheapest fare.`;
  }

  if (priority === "Flexible dates") {
    return `Search 2-3 days before and after your dates. ${essentials.flightNote}`;
  }

  return isTightBudget
    ? `Start with flexible dates, one-stop routes, and nearby airports where practical. ${essentials.flightNote}`
    : `Compare nonstop and one-stop fares, then choose the route with the best arrival time into ${essentials.airport}. ${essentials.flightNote}`;
}

function getHotelRecommendation(destination, essentials) {
  const styleKey = getStyleKey(tripStyleInput.value);
  const travelers = Number(travelersInput.value || 1);
  const dailyBudget = Number(budgetInput.value || destination.budget) / getTripDays();
  const area = essentials.hotels[styleKey] || essentials.hotels.food;
  const stayType =
    dailyBudget >= 320
      ? "boutique or upscale hotel"
      : dailyBudget >= 180
        ? "well-reviewed midrange hotel"
        : "guesthouse, aparthotel, or value hotel";
  const roomNote = travelers >= 3 ? "Look for apartment-style rooms or connecting rooms." : "Prioritize walkability over extra room size.";

  return `${area} Best fit: ${stayType}. ${roomNote}`;
}

function renderTravelRecommendations() {
  const destination = findDestinationPhoto(destinationInput.value);
  if (!destination) {
    travelGrid.innerHTML = `
      <article class="travel-card wide">
        <p class="eyebrow">No destination yet</p>
        <h4>Choose a place from Ideas</h4>
        <p>Flight and hotel recommendations will appear after you pick a destination.</p>
      </article>
    `;
    return;
  }

  const essentials = travelEssentials[destination.name];
  const style = tripStyleInput.value;
  const priority = travelPriorityInput.value;
  const flightUrl = buildTravelUrl("flights", destination, essentials);
  const hotelUrl = buildTravelUrl("hotels", destination, essentials);
  const dailyBudget = Math.round(Number(budgetInput.value || destination.budget) / getTripDays());

  travelGrid.innerHTML = `
    <article class="travel-card">
      <div class="travel-kicker">
        <p class="eyebrow">Best flight angle</p>
        <span class="travel-badge">${essentials.airport}</span>
      </div>
      <h4>${essentials.airportName}</h4>
      <p>${getFlightRecommendation(destination, essentials)}</p>
      <div class="travel-actions">
        <a href="${flightUrl}" target="_blank" rel="noreferrer">Search flights</a>
      </div>
    </article>

    <article class="travel-card">
      <div class="travel-kicker">
        <p class="eyebrow">Hotel match</p>
        <span class="travel-badge">${style}</span>
      </div>
      <h4>Stay area for your interests</h4>
      <p>${getHotelRecommendation(destination, essentials)}</p>
      <div class="travel-actions">
        <a href="${hotelUrl}" target="_blank" rel="noreferrer">Search hotels</a>
      </div>
    </article>

    <article class="travel-card wide">
      <div class="travel-kicker">
        <p class="eyebrow">Why these fit</p>
        <span class="travel-badge">${priority}</span>
      </div>
      <h4>${destination.name} travel profile</h4>
      <p>Your daily planning budget is about ${currency(dailyBudget)}. The picks above favor ${style.toLowerCase()} while respecting your ${priority.toLowerCase()} priority. Use the links for live fares and hotel rates before booking.</p>
      <div class="travel-actions">
        <a class="secondary-link" href="${flightUrl}" target="_blank" rel="noreferrer">Compare flight dates</a>
        <a class="secondary-link" href="${hotelUrl}" target="_blank" rel="noreferrer">Compare stay areas</a>
      </div>
    </article>
  `;
}

function getBudgetTier(destination) {
  const budget = Number(budgetInput.value || 0);
  if (!budget) return "standard";
  if (budget >= destination.budget * 1.8) return "premium";
  if (budget <= destination.budget * 0.75) return "value";
  return "standard";
}

function getBudgetTierNote(tier) {
  if (tier === "premium") {
    return "Premium version: add private transfers, reserved entry, standout dining, and more comfortable pacing.";
  }

  if (tier === "value") {
    return "Value version: lean on transit, free/low-cost sights, casual food, and fewer paid extras.";
  }

  return "Balanced version: mix paid highlights with flexible neighborhood time.";
}

function adaptActivitiesToBudget(destination) {
  const totalBudget = Number(budgetInput.value || destination.budget);
  const baseTotal = destination.activities.reduce((sum, activity) => sum + Number(activity.cost || 0), 0);
  const targetActivityBudget = Math.max(totalBudget * 0.38, baseTotal * 0.55);
  const scale = baseTotal > 0 ? targetActivityBudget / baseTotal : 1;
  const tier = getBudgetTier(destination);

  return destination.activities.map((activity) => ({
    ...activity,
    cost: Math.max(10, Math.round((Number(activity.cost || 0) * scale) / 5) * 5),
    description: `${getBudgetTierNote(tier)} ${activity.description}`,
  }));
}

function renderItinerary() {
  itineraryList.innerHTML = "";

  if (!itinerary.length) {
    itineraryList.innerHTML = `
      <article class="travel-card wide">
        <p class="eyebrow">No route yet</p>
        <h4>Pick a destination first</h4>
        <p>Open Ideas and choose a city or town to load a researched starter itinerary.</p>
      </article>
    `;
    renderBudget();
    return;
  }

  itinerary.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "day-card";
    card.innerHTML = `
      <div class="day-number"><span>${index + 1}</span>Day</div>
      <div>
        <h4>${item.name}</h4>
        <p>${item.description || (index === 0 ? "Keep this flexible while travel energy is low." : "Saved to your trip plan.")}</p>
      </div>
      <div class="cost-chip">${currency(item.cost)}</div>
    `;
    itineraryList.append(card);
  });

  renderBudget();
}

function applyDestinationPlan(destinationName) {
  const destination = findDestinationPhoto(destinationName);
  if (!destination) {
    destinationInput.value = "";
    itinerary = [];
    renderAll();
    return;
  }

  destinationInput.value = destination.name;
  tripStyleInput.value = destination.style;
  if (!Number(budgetInput.value || 0)) {
    budgetInput.value = destination.budget;
  }
  itinerary = adaptActivitiesToBudget(destination);
  renderAll();
}

function renderIdeas() {
  ideaGrid.innerHTML = "";

  ideas.forEach((idea) => {
    const card = document.createElement("article");
    card.className = "idea-card";
    card.innerHTML = `
      <img src="${idea.image.replace("w=1600", "w=900")}" alt="${idea.name}" />
      <div>
        <h4>${idea.name}</h4>
        <p>${idea.note}</p>
        <button type="button">Use this plan</button>
      </div>
    `;
    card.querySelector("button").addEventListener("click", () => {
      applyDestinationPlan(idea.name);
      switchTab("itinerary");
    });
    ideaGrid.append(card);
  });
}

function renderPacking() {
  packingList.innerHTML = "";

  packingItems.forEach((item, index) => {
    const label = document.createElement("label");
    label.className = `packing-item${item.done ? " done" : ""}`;
    label.innerHTML = `
      <input type="checkbox" ${item.done ? "checked" : ""} />
      <span>${item.name}</span>
    `;
    label.querySelector("input").addEventListener("change", (event) => {
      packingItems[index].done = event.target.checked;
      renderPacking();
    });
    packingList.append(label);
  });
}

function renderPlannerShellState() {
  const hasDestination = Boolean(destinationInput.value);
  workspace.classList.toggle("no-trip", !hasDestination);
}

function renderAll() {
  renderPlannerShellState();
  renderTripSummary();
  renderItinerary();
  renderTravelRecommendations();
  renderIdeas();
  renderPacking();
}

function switchTab(tabName) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${tabName}Panel`);
  });
}

tripForm.addEventListener("input", (event) => {
  if (event.target === budgetInput) return;
  renderAll();
});
budgetInput.addEventListener("input", () => {
  const destination = findDestinationPhoto(destinationInput.value);
  if (destination) {
    itinerary = adaptActivitiesToBudget(destination);
    renderAll();
  }
});
destinationInput.addEventListener("change", () => {
  applyDestinationPlan(destinationInput.value);
});

activityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = activityName.value.trim();
  if (!name) return;

  itinerary.push({
    name,
    cost: Number(activityCost.value || 0),
  });
  activityName.value = "";
  activityCost.value = "";
  renderItinerary();
});

addSampleBtn.addEventListener("click", () => {
  if (!destinationInput.value) {
    switchTab("ideas");
    document.querySelector("#planner").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const style = tripStyleInput.value.toLowerCase();
  const sample =
    style.includes("beach")
      ? { name: "Slow beach morning and seafood dinner", cost: 110 }
      : style.includes("history")
        ? { name: "Museum morning and old town walking route", cost: 65 }
        : style.includes("outdoor")
          ? { name: "Trail day with picnic supplies", cost: 75 }
          : { name: "Neighborhood crawl with one booked dinner", cost: 95 };

  itinerary.push(sample);
  renderItinerary();
});

startPlanningBtn.addEventListener("click", () => {
  switchTab("ideas");
  document.querySelector("#planner").scrollIntoView({ behavior: "smooth", block: "start" });
});

resetPackingBtn.addEventListener("click", () => {
  packingItems = basePackingItems.map((name) => ({ name, done: false }));
  renderPacking();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});

renderDestinationOptions();
renderAll();
