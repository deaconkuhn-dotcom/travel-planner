const tripForm = document.querySelector("#tripForm");
const workspace = document.querySelector("#planner");
const destinationInput = document.querySelector("#destination");
const startDateInput = document.querySelector("#startDate");
const endDateInput = document.querySelector("#endDate");
const travelersInput = document.querySelector("#travelers");
const budgetInput = document.querySelector("#budget");
const tripStyleInput = document.querySelector("#tripStyle");
const tripPaceInput = document.querySelector("#tripPace");
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

const interestDetails = {
  food: {
    label: "food stops",
    cost: 42,
    description: "Add a standout meal, market stop, cafe, or casual tasting route.",
  },
  culture: {
    label: "culture and landmarks",
    cost: 38,
    description: "Use one museum, historic site, gallery, or architecture stop as the anchor.",
  },
  outdoor: {
    label: "outdoor time",
    cost: 32,
    description: "Build in a scenic walk, viewpoint, garden, beach, trail, or water route.",
  },
  relaxation: {
    label: "relaxed time",
    cost: 34,
    description: "Keep the pace softer with downtime, spa time, a long lunch, or an easy sunset.",
  },
  shopping: {
    label: "local shopping",
    cost: 36,
    description: "Add markets, design shops, boutiques, craft streets, or souvenirs.",
  },
  nightlife: {
    label: "evening energy",
    cost: 54,
    description: "Finish with live music, a rooftop, theatre, late dinner, or a night district.",
  },
  hidden: {
    label: "hidden gems",
    cost: 28,
    description: "Add a quieter neighborhood, lesser-known viewpoint, local cafe, or side street.",
  },
};

const dayRoles = [
  "Arrival orientation",
  "Signature landmarks",
  "Neighborhood discovery",
  "Food and local flavor",
  "Nature or waterfront reset",
  "Creative culture day",
  "Day-trip contrast",
  "Open-choice finale",
];

const extraDayIdeas = [
  {
    title: "Market-to-cafe wander",
    cost: 58,
    interests: ["food", "shopping", "hidden"],
    role: "Food and local flavor",
    description: "Start with a local market or bakery, then follow the day through cafes, small shops, and a casual dinner area.",
  },
  {
    title: "Lesser-known neighborhood loop",
    cost: 44,
    interests: ["hidden", "food", "culture"],
    role: "Neighborhood discovery",
    description: "Choose a quieter district away from the biggest sights, then build the route around streets, cafes, murals, and local viewpoints.",
  },
  {
    title: "Scenic transit and viewpoint day",
    cost: 52,
    interests: ["outdoor", "hidden", "relaxation"],
    role: "Nature or waterfront reset",
    description: "Use a ferry, train, tram, or scenic bus route to connect viewpoints, waterfront paths, parks, and a relaxed meal stop.",
  },
  {
    title: "Hands-on culture and maker studios",
    cost: 72,
    interests: ["culture", "shopping", "hidden"],
    role: "Creative culture day",
    description: "Look for a workshop, small gallery, design studio, craft street, or local class that shows how the place is made by people who live there.",
  },
  {
    title: "Slow morning and golden-hour evening",
    cost: 64,
    interests: ["relaxation", "food", "outdoor"],
    role: "Open-choice finale",
    description: "Keep the morning light, leave space for a long lunch or wellness stop, then save the best viewpoint or waterfront area for sunset.",
  },
  {
    title: "Museum alternative and independent galleries",
    cost: 66,
    interests: ["culture", "hidden"],
    role: "Creative culture day",
    description: "Skip the biggest museum repeat and choose smaller galleries, house museums, libraries, or architecture stops with nearby cafes.",
  },
  {
    title: "Local food crawl by neighborhood",
    cost: 82,
    interests: ["food", "nightlife"],
    role: "Food and local flavor",
    description: "Pick one dining neighborhood and make the route about snacks, one sit-down meal, dessert, and an optional late drink or music stop.",
  },
  {
    title: "Parks, gardens, and easy trails",
    cost: 38,
    interests: ["outdoor", "relaxation"],
    role: "Nature or waterfront reset",
    description: "Use green space to reset the trip: gardens, short trails, riverside paths, picnic spots, and low-cost scenic time.",
  },
  {
    title: "Boutique shopping and design streets",
    cost: 74,
    interests: ["shopping", "culture", "food"],
    role: "Neighborhood discovery",
    description: "Plan around independent stores, bookshops, design streets, vintage stops, and a good lunch nearby.",
  },
  {
    title: "Night market or live-event evening",
    cost: 88,
    interests: ["nightlife", "food", "culture"],
    role: "Food and local flavor",
    description: "Keep the day lighter and make the evening the anchor with a night market, theatre, live music, rooftop, or late-food district.",
  },
  {
    title: "Waterfront, beach, or pool reset",
    cost: 70,
    interests: ["relaxation", "outdoor", "food"],
    role: "Nature or waterfront reset",
    description: "Give the trip a softer day near water, then add seafood, sunset drinks, or a simple walk instead of another landmark push.",
  },
  {
    title: "Day-trip town or outer district",
    cost: 118,
    interests: ["culture", "outdoor", "hidden"],
    role: "Day-trip contrast",
    description: "Choose a nearby town, island, mountain edge, beach area, or outer district that feels different from the main city.",
  },
  {
    title: "Food class, tasting, or chef-led meal",
    cost: 126,
    interests: ["food", "culture"],
    role: "Food and local flavor",
    description: "Add a cooking class, tasting, food tour, or reservation that teaches the local cuisine instead of only eating it.",
  },
  {
    title: "Photo walk and best-light route",
    cost: 46,
    interests: ["outdoor", "hidden", "culture"],
    role: "Neighborhood discovery",
    description: "Plan the day around morning and golden-hour light, using side streets, viewpoints, architecture, and one flexible cafe break.",
  },
  {
    title: "Free-choice personal day",
    cost: 40,
    interests: ["relaxation", "hidden", "shopping"],
    role: "Open-choice finale",
    description: "Leave this day open for anything the traveler discovers during the trip: a return meal, an extra shop, a spa, or a favorite neighborhood.",
  },
];

const researchedPlaceIdeas = {
  "Tokyo, Japan": [
    { name: "Shibuya Crossing", from: "Shibuya, Tokyo, Japan", note: "famous city crossing" },
    { name: "Senso-ji", from: "Asakusa, Tokyo, Japan", note: "historic temple district" },
    { name: "Tsukiji Outer Market", from: "Chuo City, Tokyo, Japan", note: "food market streets" },
    { name: "Ueno Park", from: "Taito City, Tokyo, Japan", note: "museums and park paths" },
    { name: "Shinjuku Gyoen", from: "Shinjuku, Tokyo, Japan", note: "garden and city reset" },
    { name: "teamLab Planets", from: "Toyosu, Tokyo, Japan", note: "immersive digital art museum" },
    { name: "Harajuku", from: "Shibuya, Tokyo, Japan", note: "fashion streets and cafes" },
    { name: "Ginza", from: "Chuo City, Tokyo, Japan", note: "shopping and galleries" },
    { name: "Yanaka Ginza", from: "Taito City, Tokyo, Japan", note: "old Tokyo shopping street" },
    { name: "Odaiba", from: "Tokyo Bay, Tokyo, Japan", note: "waterfront entertainment area" },
  ],
  "Paris, France": [
    { name: "Louvre Museum", from: "1st arrondissement, Paris, France", note: "major art museum" },
    { name: "Eiffel Tower", from: "7th arrondissement, Paris, France", note: "landmark viewpoint" },
    { name: "Montmartre", from: "18th arrondissement, Paris, France", note: "hilltop neighborhood" },
    { name: "Le Marais", from: "3rd and 4th arrondissements, Paris, France", note: "shops, food, and history" },
    { name: "Musee d'Orsay", from: "7th arrondissement, Paris, France", note: "Impressionist art museum" },
    { name: "Atelier des Lumieres", from: "11th arrondissement, Paris, France", note: "immersive digital art center" },
    { name: "Canal Saint-Martin", from: "10th arrondissement, Paris, France", note: "waterfront cafes and walks" },
    { name: "Luxembourg Gardens", from: "6th arrondissement, Paris, France", note: "classic city garden" },
    { name: "Palais Garnier", from: "9th arrondissement, Paris, France", note: "opera house and architecture" },
    { name: "Saint-Germain-des-Pres", from: "6th arrondissement, Paris, France", note: "cafes and galleries" },
  ],
  Singapore: [
    { name: "Gardens by the Bay", from: "Marina Bay, Singapore", note: "gardens and Supertrees" },
    { name: "Chinatown Complex Food Centre", from: "Chinatown, Singapore", note: "hawker food stop" },
    { name: "Kampong Glam", from: "Rochor, Singapore", note: "heritage district" },
    { name: "Singapore Botanic Gardens", from: "Tanglin, Singapore", note: "UNESCO-listed gardens" },
    { name: "Sentosa", from: "Sentosa Island, Singapore", note: "beach and resort area" },
    { name: "Marina Bay Sands", from: "Marina Bay, Singapore", note: "skyline hotel and viewpoint" },
    { name: "Little India", from: "Rochor, Singapore", note: "markets, temples, and food" },
    { name: "Jewel Changi Airport", from: "Changi, Singapore", note: "waterfall and airport complex" },
    { name: "East Coast Park", from: "Southeast Singapore", note: "bike paths and seafood" },
    { name: "National Gallery Singapore", from: "Civic District, Singapore", note: "Southeast Asian art museum" },
  ],
  "Dubai, UAE": [
    { name: "Burj Khalifa", from: "Downtown Dubai, UAE", note: "skyscraper viewpoint" },
    { name: "Dubai Creek", from: "Deira and Bur Dubai, Dubai, UAE", note: "abra boats and souks" },
    { name: "Jumeirah Beach Residence", from: "Dubai Marina, Dubai, UAE", note: "beach and dining area" },
    { name: "Dubai Desert Conservation Reserve", from: "Dubai, UAE", note: "desert safari area" },
    { name: "Museum of the Future", from: "Sheikh Zayed Road, Dubai, UAE", note: "future-focused museum" },
    { name: "Al Fahidi Historical Neighbourhood", from: "Bur Dubai, Dubai, UAE", note: "heritage lanes" },
    { name: "Alserkal Avenue", from: "Al Quoz, Dubai, UAE", note: "galleries and design spaces" },
    { name: "Dubai Miracle Garden", from: "Dubailand, Dubai, UAE", note: "seasonal flower garden" },
    { name: "The Dubai Mall", from: "Downtown Dubai, UAE", note: "shopping and dining complex" },
    { name: "Madinat Jumeirah", from: "Jumeirah, Dubai, UAE", note: "souks, canals, and hotels" },
  ],
  "Lisbon, Portugal": [
    { name: "Alfama", from: "Lisbon, Portugal", note: "old-town lanes and viewpoints" },
    { name: "Miradouro da Senhora do Monte", from: "Lisbon, Portugal", note: "city viewpoint" },
    { name: "Jeronimos Monastery", from: "Belem, Lisbon, Portugal", note: "historic monastery" },
    { name: "Belem Tower", from: "Belem, Lisbon, Portugal", note: "riverfront landmark" },
    { name: "Pena Palace", from: "Sintra, Portugal", note: "palace day trip" },
    { name: "Chiado", from: "Lisbon, Portugal", note: "cafes, shops, and tiled streets" },
    { name: "Bairro Alto", from: "Lisbon, Portugal", note: "fado and nightlife district" },
    { name: "LX Factory", from: "Alcantara, Lisbon, Portugal", note: "design shops and food hall" },
  ],
  "Kyoto, Japan": [
    { name: "Gion", from: "Kyoto, Japan", note: "preserved streets and evening walks" },
    { name: "Yasaka Shrine", from: "Higashiyama, Kyoto, Japan", note: "historic shrine" },
    { name: "Fushimi Inari Taisha", from: "Fushimi, Kyoto, Japan", note: "thousands of torii gates" },
    { name: "Arashiyama Bamboo Grove", from: "Arashiyama, Kyoto, Japan", note: "bamboo walk and river area" },
    { name: "Kinkaku-ji", from: "Kyoto, Japan", note: "golden pavilion temple" },
    { name: "Ryoan-ji", from: "Kyoto, Japan", note: "Zen rock garden" },
    { name: "Nishiki Market", from: "Central Kyoto, Japan", note: "food market street" },
    { name: "Pontocho Alley", from: "Kyoto, Japan", note: "narrow dining lane" },
  ],
  "Tulum, Mexico": [
    { name: "Tulum Beach Road", from: "Tulum, Quintana Roo, Mexico", note: "beach clubs and restaurants" },
    { name: "Tulum Archaeological Zone", from: "Tulum, Quintana Roo, Mexico", note: "cliffside Maya ruins" },
    { name: "Playa Paraiso", from: "Tulum, Quintana Roo, Mexico", note: "popular beach" },
    { name: "Gran Cenote", from: "Tulum, Quintana Roo, Mexico", note: "cenote swim stop" },
    { name: "Cenote Calavera", from: "Tulum, Quintana Roo, Mexico", note: "near-town cenote" },
    { name: "Sian Ka'an Biosphere Reserve", from: "Quintana Roo, Mexico", note: "nature reserve and lagoon tours" },
    { name: "Tulum Pueblo", from: "Tulum, Quintana Roo, Mexico", note: "local restaurants and shops" },
    { name: "Aldea Zama", from: "Tulum, Quintana Roo, Mexico", note: "cafes and calmer stays" },
  ],
  "New York City, USA": [
    { name: "Central Park", from: "Manhattan, New York City, USA", note: "city park and walking routes" },
    { name: "The Metropolitan Museum of Art", from: "Upper East Side, New York City, USA", note: "major art museum" },
    { name: "Brooklyn Bridge", from: "New York City, USA", note: "skyline walk" },
    { name: "Dumbo", from: "Brooklyn, New York City, USA", note: "waterfront views and pizza" },
    { name: "High Line", from: "Chelsea, New York City, USA", note: "elevated park" },
    { name: "Chelsea Market", from: "Chelsea, New York City, USA", note: "food hall" },
    { name: "Washington Square Park", from: "Greenwich Village, New York City, USA", note: "neighborhood anchor" },
    { name: "Staten Island Ferry", from: "Lower Manhattan, New York City, USA", note: "free harbor view route" },
  ],
  "London, England": [
    { name: "Westminster Abbey", from: "Westminster, London, England", note: "historic church" },
    { name: "South Bank", from: "London, England", note: "river walk and landmarks" },
    { name: "Borough Market", from: "Southwark, London, England", note: "food market" },
    { name: "British Museum", from: "Bloomsbury, London, England", note: "major museum" },
    { name: "Covent Garden", from: "London, England", note: "shops, dining, and theatre area" },
    { name: "Tower of London", from: "London, England", note: "fortress and crown jewels" },
    { name: "Shoreditch", from: "East London, England", note: "street art and food" },
    { name: "Greenwich", from: "London, England", note: "river day and maritime history" },
  ],
  "Rome, Italy": [
    { name: "Colosseum", from: "Rome, Italy", note: "ancient amphitheater" },
    { name: "Roman Forum", from: "Rome, Italy", note: "ancient city ruins" },
    { name: "Vatican Museums", from: "Vatican City", note: "major art museum" },
    { name: "Pantheon", from: "Rome, Italy", note: "ancient temple and church" },
    { name: "Trevi Fountain", from: "Rome, Italy", note: "historic fountain" },
    { name: "Trastevere", from: "Rome, Italy", note: "riverside dining lanes" },
    { name: "Borghese Gallery", from: "Rome, Italy", note: "reservation-based art museum" },
    { name: "Appian Way", from: "Rome, Italy", note: "ancient road and outdoor route" },
  ],
  "Barcelona, Spain": [
    { name: "Sagrada Familia", from: "Barcelona, Spain", note: "Gaudi basilica" },
    { name: "Gothic Quarter", from: "Barcelona, Spain", note: "historic lanes and plazas" },
    { name: "El Born", from: "Barcelona, Spain", note: "shops, tapas, and museums" },
    { name: "Park Guell", from: "Barcelona, Spain", note: "Gaudi park and viewpoints" },
    { name: "Gracia", from: "Barcelona, Spain", note: "neighborhood squares and cafes" },
    { name: "Barceloneta Beach", from: "Barcelona, Spain", note: "city beach" },
    { name: "Montjuic", from: "Barcelona, Spain", note: "hill, museums, and views" },
    { name: "La Boqueria", from: "Barcelona, Spain", note: "market hall" },
  ],
  "Sydney, Australia": [
    { name: "Sydney Opera House", from: "Sydney, Australia", note: "harbor landmark" },
    { name: "The Rocks", from: "Sydney, Australia", note: "historic lanes and pubs" },
    { name: "Bondi to Coogee Walk", from: "Sydney, Australia", note: "coastal walking route" },
    { name: "Manly Ferry", from: "Sydney Harbour, Australia", note: "scenic ferry ride" },
    { name: "Manly Beach", from: "Sydney, Australia", note: "beach and sunset area" },
    { name: "Taronga Zoo Sydney", from: "Sydney, Australia", note: "wildlife and harbor views" },
    { name: "Blue Mountains", from: "New South Wales, Australia", note: "day trip viewpoints" },
    { name: "Royal Botanic Garden Sydney", from: "Sydney, Australia", note: "harbor garden" },
  ],
  "Rio de Janeiro, Brazil": [
    { name: "Ipanema Beach", from: "Rio de Janeiro, Brazil", note: "classic beach area" },
    { name: "Arpoador", from: "Rio de Janeiro, Brazil", note: "sunset rocks and surf" },
    { name: "Christ the Redeemer", from: "Rio de Janeiro, Brazil", note: "mountaintop landmark" },
    { name: "Santa Teresa", from: "Rio de Janeiro, Brazil", note: "hillside arts district" },
    { name: "Sugarloaf Mountain", from: "Rio de Janeiro, Brazil", note: "cable car viewpoint" },
    { name: "Urca", from: "Rio de Janeiro, Brazil", note: "bayfront dining area" },
    { name: "Copacabana Beach", from: "Rio de Janeiro, Brazil", note: "classic beach promenade" },
    { name: "Rio de Janeiro Botanical Garden", from: "Rio de Janeiro, Brazil", note: "garden and lake area" },
  ],
  "Istanbul, Turkiye": [
    { name: "Hagia Sophia", from: "Sultanahmet, Istanbul, Turkiye", note: "historic mosque and landmark" },
    { name: "Blue Mosque", from: "Sultanahmet, Istanbul, Turkiye", note: "major mosque" },
    { name: "Basilica Cistern", from: "Sultanahmet, Istanbul, Turkiye", note: "underground cistern" },
    { name: "Topkapi Palace", from: "Istanbul, Turkiye", note: "Ottoman palace museum" },
    { name: "Grand Bazaar", from: "Istanbul, Turkiye", note: "covered market" },
    { name: "Spice Bazaar", from: "Istanbul, Turkiye", note: "food and spice market" },
    { name: "Galata Tower", from: "Beyoglu, Istanbul, Turkiye", note: "tower and viewpoint" },
    { name: "Kadikoy Market", from: "Asian side, Istanbul, Turkiye", note: "food market streets" },
  ],
  "Bangkok, Thailand": [
    { name: "Grand Palace", from: "Bangkok, Thailand", note: "royal palace complex" },
    { name: "Wat Pho", from: "Bangkok, Thailand", note: "temple and reclining Buddha" },
    { name: "Chao Phraya River", from: "Bangkok, Thailand", note: "river boat route" },
    { name: "Yaowarat Road", from: "Chinatown, Bangkok, Thailand", note: "street food area" },
    { name: "Pak Khlong Talat", from: "Bangkok, Thailand", note: "flower market" },
    { name: "Chatuchak Weekend Market", from: "Bangkok, Thailand", note: "large market" },
    { name: "Jim Thompson House", from: "Bangkok, Thailand", note: "design and history museum" },
    { name: "Khlong Lat Mayom Floating Market", from: "Bangkok, Thailand", note: "canal and market route" },
  ],
  "Bali, Indonesia": [
    { name: "Tegallalang Rice Terrace", from: "Ubud, Bali, Indonesia", note: "rice terrace viewpoint" },
    { name: "Ubud Art Market", from: "Ubud, Bali, Indonesia", note: "craft market" },
    { name: "Tirta Empul Temple", from: "Bali, Indonesia", note: "sacred water temple" },
    { name: "Tegenungan Waterfall", from: "Bali, Indonesia", note: "waterfall stop" },
    { name: "Uluwatu Temple", from: "Bali, Indonesia", note: "cliff temple" },
    { name: "Padang Padang Beach", from: "Bali, Indonesia", note: "south Bali beach" },
    { name: "Canggu", from: "Bali, Indonesia", note: "surf, cafes, and boutiques" },
    { name: "Seminyak Beach", from: "Bali, Indonesia", note: "beach clubs and dining" },
  ],
  "Amsterdam, Netherlands": [
    { name: "Jordaan", from: "Amsterdam, Netherlands", note: "canals, shops, and cafes" },
    { name: "Rijksmuseum", from: "Amsterdam, Netherlands", note: "major art museum" },
    { name: "Museumplein", from: "Amsterdam, Netherlands", note: "museum district" },
    { name: "Anne Frank House", from: "Amsterdam, Netherlands", note: "history museum" },
    { name: "Nine Streets", from: "Amsterdam, Netherlands", note: "shopping lanes" },
    { name: "Vondelpark", from: "Amsterdam, Netherlands", note: "park and bike route" },
    { name: "A'DAM Lookout", from: "Amsterdam Noord, Netherlands", note: "skyline viewpoint" },
    { name: "Foodhallen", from: "Amsterdam, Netherlands", note: "indoor food hall" },
  ],
  "Santorini, Greece": [
    { name: "Fira", from: "Santorini, Greece", note: "cliffside town and caldera views" },
    { name: "Oia", from: "Santorini, Greece", note: "blue domes and sunset views" },
    { name: "Fira to Oia Trail", from: "Santorini, Greece", note: "caldera walking route" },
    { name: "Akrotiri Archaeological Site", from: "Santorini, Greece", note: "ancient settlement" },
    { name: "Red Beach", from: "Santorini, Greece", note: "volcanic beach" },
    { name: "Nea Kameni", from: "Santorini, Greece", note: "volcanic island boat stop" },
    { name: "Ammoudi Bay", from: "Oia, Santorini, Greece", note: "seafood and water views" },
    { name: "Perissa Beach", from: "Santorini, Greece", note: "black sand beach" },
  ],
  "Marrakesh, Morocco": [
    { name: "Jemaa el-Fnaa", from: "Marrakesh, Morocco", note: "main square and evening food stalls" },
    { name: "Marrakesh Medina", from: "Marrakesh, Morocco", note: "souks and old city lanes" },
    { name: "Bahia Palace", from: "Marrakesh, Morocco", note: "palace courtyards and tilework" },
    { name: "Saadian Tombs", from: "Marrakesh, Morocco", note: "historic royal tombs" },
    { name: "Jardin Majorelle", from: "Marrakesh, Morocco", note: "garden and design museum area" },
    { name: "Gueliz", from: "Marrakesh, Morocco", note: "modern cafes and shops" },
    { name: "Agafay Desert", from: "Marrakesh, Morocco", note: "desert day trip area" },
    { name: "Atlas Mountains", from: "Morocco", note: "mountain day trip" },
  ],
  "Cape Town, South Africa": [
    { name: "Table Mountain", from: "Cape Town, South Africa", note: "mountain viewpoint" },
    { name: "Kloof Street", from: "Cape Town, South Africa", note: "restaurants and nightlife" },
    { name: "V&A Waterfront", from: "Cape Town, South Africa", note: "harbor shops and dining" },
    { name: "Robben Island", from: "Cape Town, South Africa", note: "historic island museum" },
    { name: "Cape Point", from: "Cape Peninsula, South Africa", note: "coastal reserve" },
    { name: "Kirstenbosch National Botanical Garden", from: "Cape Town, South Africa", note: "botanical garden" },
    { name: "Camps Bay", from: "Cape Town, South Africa", note: "beach and sunset area" },
    { name: "Bo-Kaap", from: "Cape Town, South Africa", note: "colorful historic neighborhood" },
  ],
  "San Francisco, USA": [
    { name: "Golden Gate Bridge", from: "San Francisco, USA", note: "bay landmark and walking route" },
    { name: "Presidio", from: "San Francisco, USA", note: "parks, trails, and views" },
    { name: "Ferry Building", from: "San Francisco, USA", note: "food hall and waterfront" },
    { name: "Embarcadero", from: "San Francisco, USA", note: "bayfront walking route" },
    { name: "Mission District Murals", from: "San Francisco, USA", note: "street art and food route" },
    { name: "Dolores Park", from: "San Francisco, USA", note: "neighborhood park" },
    { name: "Alcatraz Island", from: "San Francisco, USA", note: "historic island tour" },
    { name: "Golden Gate Park", from: "San Francisco, USA", note: "museums and gardens" },
  ],
  "Venice, Italy": [
    { name: "St. Mark's Basilica", from: "Venice, Italy", note: "major landmark church" },
    { name: "Rialto Bridge", from: "Venice, Italy", note: "canal bridge and market area" },
    { name: "Doge's Palace", from: "Venice, Italy", note: "historic palace museum" },
    { name: "Grand Canal", from: "Venice, Italy", note: "main canal route" },
    { name: "Dorsoduro", from: "Venice, Italy", note: "galleries and quieter canals" },
    { name: "Gallerie dell'Accademia", from: "Venice, Italy", note: "art museum" },
    { name: "Murano", from: "Venice Lagoon, Italy", note: "glassmaking island" },
    { name: "Burano", from: "Venice Lagoon, Italy", note: "colorful island streets" },
  ],
};

const officialTicketLinks = {
  "teamLab Planets": "https://teamlabplanets.dmm.com/en/ticket/",
  "Louvre Museum": "https://www.ticketlouvre.fr/louvre/b2c/index.cfm/change.language/lang/en-GB/",
  "Eiffel Tower": "https://ticket.toureiffel.paris/en",
  "Atelier des Lumieres": "https://www.atelier-lumieres.com/en/tickets",
  "Gardens by the Bay": "https://www.gardensbythebay.com.sg/en/ticketing.html",
  "Museum of the Future": "https://museumofthefuture.ae/en/book/general-offers/general-admission",
  "Shinjuku Gyoen": "https://policies.env.go.jp/national-garden/shinjukugyoen/english/guide/information/",
  "Burj Khalifa": "https://tickets.atthetop.ae/",
};

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

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
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

function getSelectedInterests() {
  const selected = [...document.querySelectorAll('input[name="interests"]:checked')].map((input) => input.value);
  return selected.length ? selected : [getStyleKey(tripStyleInput.value)];
}

function getPaceNote() {
  if (tripPaceInput.value === "Slow and relaxed") {
    return "Keep this day unhurried with one main plan, buffer time, and an easy evening.";
  }

  if (tripPaceInput.value === "Packed and adventurous") {
    return "Make this an active day with an early start, one backup option, and a fuller evening.";
  }

  return "Keep a balanced pace with one anchor activity and room to wander.";
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

function stripDayPrefix(name) {
  return name.replace(/^Day\s+\d+:\s*/i, "");
}

function normalizePlanText(text) {
  return stripDayPrefix(String(text || ""))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getUsedPlanTexts(items) {
  return items.map((item) => normalizePlanText(`${item.name} ${item.description || ""}`));
}

function buildTicketSearchUrl(place) {
  const placeName = place?.name || "travel activity";
  const placeFrom = place?.from || destinationInput.value || "travel";
  return `https://www.google.com/search?q=${encodeURIComponent(`${placeName} ${placeFrom} tickets`)}`;
}

function buildSearchUrl(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function buildMapUrl(place) {
  const placeName = place?.name || "travel activity";
  const placeFrom = place?.from || destinationInput.value || "travel";
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${placeName} ${placeFrom}`)}`;
}

function getTicketUrl(place) {
  return officialTicketLinks[place?.name] || place?.ticketUrl || buildTicketSearchUrl(place);
}

function getTicketLabel(place) {
  return officialTicketLinks[place?.name] || place?.ticketUrl ? "Buy tickets" : "Find tickets";
}

function getThingToDo(place) {
  if (!place) return "Choose the exact activity you want for this day.";
  return place.action || `Visit ${place.name}`;
}

function getPlaceLinkSet(place, destinationName) {
  const placeName = place?.name || destinationName || "travel activity";
  const placeFrom = place?.from || destinationName || "travel";

  return [
    { label: "Map", url: buildMapUrl(place) },
    { label: "Tours", url: buildSearchUrl(`${placeName} ${placeFrom} tours`) },
    { label: "Food nearby", url: buildSearchUrl(`best food near ${placeName} ${placeFrom}`) },
    { label: "Travel tips", url: buildSearchUrl(`${placeName} ${placeFrom} visitor guide`) },
  ];
}

function getActivityLink(activity, destinationName) {
  if (activity.url) {
    return { label: activity.linkLabel || "Open link", url: activity.url };
  }

  if (activity.place) {
    return { label: "Open map", url: buildMapUrl(activity.place) };
  }

  return {
    label: "Search ideas",
    url: buildSearchUrl(`${activity.text} ${destinationName || destinationInput.value || "travel"}`),
  };
}

function getInterestActivity(interestKey, destination, place) {
  const placeName = place?.name || destination.name.split(",")[0];
  const options = {
    food: `Make ${placeName} your lunch or snack anchor, then look for a local market, bakery, or casual restaurant nearby.`,
    culture: `Use ${placeName} for a culture stop, then add one nearby museum, historic street, gallery, or architecture detour.`,
    outdoor: `Build the afternoon around ${placeName} with a scenic walk, garden break, waterfront route, or viewpoint nearby.`,
    relaxation: `Keep ${placeName} slow: add a cafe, spa, beach, pool, or long lunch pause instead of rushing.`,
    shopping: `Browse the streets around ${placeName} for local shops, design stores, craft stalls, or a market route.`,
    nightlife: `Save energy around ${placeName}, then line up live music, a rooftop, theatre, late dinner, or a night district.`,
    hidden: `Use ${placeName} as the quieter discovery stop with side streets, a lesser-known viewpoint, or a local cafe.`,
    beach: `Turn ${placeName} into the beach or water portion of the day with a swim, seafood meal, or sunset walk.`,
    work: `Use ${placeName} as a low-stress break with a calm cafe, easy transit route, or flexible work reset.`,
  };

  return options[interestKey] || options.hidden;
}

function getEveningActivity(destination, interestKey, place) {
  const placeName = place?.name || destination.name.split(",")[0];

  if (tripPaceInput.value === "Slow and relaxed") {
    return `Keep the evening easy around ${placeName} with dinner close by or a sunset walk.`;
  }

  if (tripPaceInput.value === "Packed and adventurous") {
    return `Add ${placeName} as one more ${interestDetails[interestKey]?.label || "local"} stop before dinner.`;
  }

  return `End near ${placeName} with dinner in a walkable ${destination.name.split(",")[0]} neighborhood.`;
}

function getDistinctPlaceIdea(destination, index, avoidName, fallbackName) {
  const places = researchedPlaceIdeas[destination.name] || [];
  const normalizedAvoid = normalizePlanText(avoidName);

  for (let offset = 0; offset < Math.max(places.length, 1); offset += 1) {
    const place = places[(index + offset) % places.length];
    if (place && normalizePlanText(place.name) !== normalizedAvoid) {
      return place;
    }
  }

  return getPlaceIdea(destination, index, fallbackName);
}

function buildDayActivities(candidate, destination, dayNumber, interestKey) {
  const afternoonPlace = getDistinctPlaceIdea(destination, dayNumber + 2, candidate.place?.name, candidate.title);
  const eveningPlace = getDistinctPlaceIdea(destination, dayNumber + 6, candidate.place?.name, candidate.title);

  return [
    {
      time: "Morning",
      text: getThingToDo(candidate.place),
      place: candidate.place,
      linkLabel: officialTicketLinks[candidate.place?.name] ? "Tickets" : "Map",
      url: officialTicketLinks[candidate.place?.name] || buildMapUrl(candidate.place),
    },
    {
      time: "Afternoon",
      text: getInterestActivity(interestKey, destination, afternoonPlace),
      place: afternoonPlace,
      linkLabel: "Map",
      url: buildMapUrl(afternoonPlace),
    },
    {
      time: "Evening",
      text: getEveningActivity(destination, interestKey, eveningPlace),
      place: eveningPlace,
      linkLabel: "Explore",
      url: buildSearchUrl(`${eveningPlace.name} ${eveningPlace.from} evening restaurants`),
    },
  ].map((activity, index) => ({
    ...activity,
    id: `${dayNumber}-${index}`,
  }));
}

function getPlaceIdea(destination, index, fallbackName) {
  const places = researchedPlaceIdeas[destination.name] || [];
  const researchedPlace = places[index % places.length];

  if (researchedPlace) {
    return researchedPlace;
  }

  return {
    name: stripDayPrefix(fallbackName),
    from: destination.name,
    note: "curated for this destination",
    action: `Do ${stripDayPrefix(fallbackName)}`,
  };
}

function getBestPlaceIdea(destination, index, fallbackName) {
  const places = researchedPlaceIdeas[destination.name] || [];
  const normalizedFallback = normalizePlanText(fallbackName);
  const matchedPlace = places.find((place) => {
    const normalizedPlace = normalizePlanText(place.name);
    return normalizedFallback.includes(normalizedPlace) || normalizedPlace.includes(normalizedFallback);
  });

  return matchedPlace || getPlaceIdea(destination, index, fallbackName);
}

function buildActivityCandidates(destination) {
  const baseActivities = destination.activities.map((activity, index) => ({
    title: stripDayPrefix(activity.name),
    cost: Number(activity.cost || 0),
    description: activity.description,
    interests: ["food", "culture", "outdoor", "relaxation", "shopping", "nightlife", "hidden"],
    role: dayRoles[index % dayRoles.length],
    place: getBestPlaceIdea(destination, index, activity.name),
  }));

  return [
    ...baseActivities,
    ...extraDayIdeas.map((idea, index) => ({
      ...idea,
      description: `${idea.description} Personalize it for ${destination.name} using the neighborhood that best matches your mood that day.`,
      place: getPlaceIdea(destination, destination.activities.length + index, idea.title),
    })),
  ];
}

function isCandidateUsed(candidate, usedTexts) {
  const title = normalizePlanText(candidate.title);
  const placeName = normalizePlanText(candidate.place?.name);
  return usedTexts.some((text) => text.includes(title) || (placeName && text.includes(placeName)));
}

function createFallbackCandidate(dayNumber, destination, preferredInterest) {
  const interest = interestDetails[preferredInterest] || interestDetails.hidden;
  return {
    title: `Personal discovery day ${dayNumber}`,
    cost: interest.cost + 35,
    description: `Use this as a fully custom ${destination.name} day built around ${interest.label}. Pick something new you have not done yet, then update this card with the exact plan.`,
    interests: [preferredInterest],
    role: "Open-choice finale",
    place: {
      name: `Traveler's choice day ${dayNumber}`,
      from: destination.name,
      note: "custom place to add",
      action: "Choose and book one fresh thing that is not already on the trip.",
    },
  };
}

function chooseFreshCandidate(candidates, usedTexts, preferredInterest, dayNumber, destination) {
  const unusedPreferred = candidates.find((candidate) => candidate.interests.includes(preferredInterest) && !isCandidateUsed(candidate, usedTexts));
  const unusedAny = candidates.find((candidate) => !isCandidateUsed(candidate, usedTexts));
  const candidate = unusedPreferred || unusedAny || createFallbackCandidate(dayNumber, destination, preferredInterest);

  usedTexts.push(normalizePlanText(`${candidate.title} ${candidate.description} ${candidate.place?.name || ""}`));
  return candidate;
}

function makeItineraryDay(candidate, destination, dayNumber, totalDays) {
  const totalBudget = Number(budgetInput.value || destination.budget);
  const interests = getSelectedInterests();
  const pace = tripPaceInput.value;
  const tier = getBudgetTier(destination);
  const budgetNote = getBudgetTierNote(tier);
  const paceNote = getPaceNote();
  const activityTarget = Math.max(totalBudget * 0.38, totalDays * 45);
  const baseDailyBudget = activityTarget / totalDays;
  const paceMultiplier = pace === "Packed and adventurous" ? 1.18 : pace === "Slow and relaxed" ? 0.86 : 1;
  const interestKey = interests[(dayNumber - 1) % interests.length];
  const interest = interestDetails[interestKey] || interestDetails.food;
  const costSeed = Number(candidate.cost || 0) * 0.65 + interest.cost + baseDailyBudget * 0.35;
  const dayCost = Math.max(10, Math.round((costSeed * paceMultiplier) / 5) * 5);

  return {
    name: `Day ${dayNumber}: ${candidate.role} - ${candidate.title}`,
    cost: dayCost,
    description: `${budgetNote} ${paceNote} Focus on ${interest.label}: ${interest.description} Fresh idea: ${candidate.description}`,
    place: candidate.place,
    activities: buildDayActivities(candidate, destination, dayNumber, interestKey),
  };
}

function buildCustomItinerary(destination) {
  const days = getTripDays();
  const interests = getSelectedInterests();
  const candidates = buildActivityCandidates(destination);
  const usedTexts = [];

  return Array.from({ length: days }, (_, index) => {
    const preferredInterest = interests[index % interests.length];
    const candidate = chooseFreshCandidate(candidates, usedTexts, preferredInterest, index + 1, destination);
    return makeItineraryDay(candidate, destination, index + 1, days);
  });
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
    const place = item.place || {
      name: "Custom activity",
      from: destinationInput.value || "Your trip",
      note: "added by you",
      action: "Book or plan the custom activity you added.",
    };
    const activities = item.activities?.length
      ? item.activities
      : [
          { time: "Main plan", text: getThingToDo(place) },
          { time: "Extra stop", text: "Add one nearby meal, walk, or neighborhood stop." },
          { time: "Evening", text: "Finish with dinner or a relaxed final activity." },
        ];
    const destinationName = destinationInput.value || place.from || "Your trip";
    const ticketUrl = getTicketUrl(place);
    const ticketLabel = getTicketLabel(place);
    const placeLinks = getPlaceLinkSet(place, destinationName);
    card.className = "day-card";
    card.innerHTML = `
      <div class="day-number"><span>${index + 1}</span>Day</div>
      <div class="day-editor">
        <input type="text" value="${escapeHtml(item.name)}" aria-label="Day ${index + 1} title" />
        <textarea aria-label="Day ${index + 1} description">${escapeHtml(item.description || (index === 0 ? "Keep this flexible while travel energy is low." : "Saved to your trip plan."))}</textarea>
        <div class="place-source" aria-label="Place idea for day ${index + 1}">
          <span>Place idea</span>
          <strong>${escapeHtml(place.name)}</strong>
          <small>From: ${escapeHtml(place.from)} · ${escapeHtml(place.note)}</small>
          <p>${escapeHtml(getThingToDo(place))}</p>
          <a href="${escapeHtml(ticketUrl)}" target="_blank" rel="noreferrer">${ticketLabel}</a>
          <div class="quick-links" aria-label="Extra links for ${escapeHtml(place.name)}">
            ${placeLinks
              .map(
                (link) => `
                  <a class="quick-link" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>
                `,
              )
              .join("")}
          </div>
        </div>
        <div class="activity-stack" aria-label="Activities for day ${index + 1}">
          <span>Daily activity schedule</span>
          <ul>
            ${activities
              .map((activity) => {
                const link = getActivityLink(activity, destinationName);
                return `
                  <li>
                    <strong>${escapeHtml(activity.time)}</strong>
                    <div>
                      <p>${escapeHtml(activity.text)}</p>
                      <a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>
                    </div>
                  </li>
                `;
              })
              .join("")}
          </ul>
        </div>
      </div>
      <div class="day-tools">
        <input type="number" min="0" value="${Number(item.cost || 0)}" aria-label="Day ${index + 1} cost" />
        <button class="remove-day" type="button">Remove</button>
      </div>
    `;
    const [nameInput, descriptionInput] = card.querySelectorAll(".day-editor input, .day-editor textarea");
    const costInput = card.querySelector(".day-tools input");
    const removeButton = card.querySelector(".remove-day");

    nameInput.addEventListener("input", (event) => {
      itinerary[index].name = event.target.value;
    });
    descriptionInput.addEventListener("input", (event) => {
      itinerary[index].description = event.target.value;
    });
    costInput.addEventListener("input", (event) => {
      itinerary[index].cost = Number(event.target.value || 0);
      renderBudget();
    });
    removeButton.addEventListener("click", () => {
      itinerary.splice(index, 1);
      renderItinerary();
    });
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
  itinerary = buildCustomItinerary(destination);
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
  const destination = findDestinationPhoto(destinationInput.value);
  const shouldRebuildItinerary =
    destination &&
    (event.target === tripStyleInput ||
      event.target === tripPaceInput ||
      event.target === startDateInput ||
      event.target === endDateInput ||
      event.target.name === "interests");

  if (shouldRebuildItinerary) {
    itinerary = buildCustomItinerary(destination);
  }
  renderAll();
});
budgetInput.addEventListener("input", () => {
  const destination = findDestinationPhoto(destinationInput.value);
  if (destination) {
    itinerary = buildCustomItinerary(destination);
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

  const destination = findDestinationPhoto(destinationInput.value);
  if (!destination) return;

  const selectedInterests = getSelectedInterests();
  const selectedInterest = selectedInterests[itinerary.length % selectedInterests.length];
  const nextDay = itinerary.length + 1;
  const candidates = buildActivityCandidates(destination);
  const candidate = chooseFreshCandidate(candidates, getUsedPlanTexts(itinerary), selectedInterest, nextDay, destination);

  itinerary.push(makeItineraryDay(candidate, destination, nextDay, Math.max(nextDay, getTripDays())));
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
