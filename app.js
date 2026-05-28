const tripForm = document.querySelector("#tripForm");
const destinationInput = document.querySelector("#destination");
const startDateInput = document.querySelector("#startDate");
const endDateInput = document.querySelector("#endDate");
const travelersInput = document.querySelector("#travelers");
const budgetInput = document.querySelector("#budget");
const tripStyleInput = document.querySelector("#tripStyle");
const tripTitle = document.querySelector("#tripTitle");
const tripDetails = document.querySelector("#tripDetails");
const itineraryList = document.querySelector("#itineraryList");
const activityForm = document.querySelector("#activityForm");
const activityName = document.querySelector("#activityName");
const activityCost = document.querySelector("#activityCost");
const spentTotal = document.querySelector("#spentTotal");
const budgetMeter = document.querySelector("#budgetMeter");
const budgetStatus = document.querySelector("#budgetStatus");
const addSampleBtn = document.querySelector("#addSampleBtn");
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

const ideas = [
  {
    name: "Lisbon, Portugal",
    style: "Food and neighborhoods",
    budget: 1200,
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
    note: "Tram rides, tile-front cafes, river sunsets, and a slow seafood lunch.",
    activities: [
      { name: "Alfama walking loop and viewpoints", cost: 20 },
      { name: "Time Out Market tasting crawl", cost: 70 },
      { name: "Sintra day trip", cost: 95 },
    ],
  },
  {
    name: "Kyoto, Japan",
    style: "Museums and history",
    budget: 1800,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
    note: "Temple mornings, quiet gardens, tea houses, and lantern-lit alleys.",
    activities: [
      { name: "Fushimi Inari sunrise visit", cost: 15 },
      { name: "Nishiki Market lunch route", cost: 55 },
      { name: "Arashiyama bamboo and river walk", cost: 45 },
    ],
  },
  {
    name: "Tulum, Mexico",
    style: "Beach reset",
    budget: 1400,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    note: "Swim stops, ruins, tacos, soft mornings, and one very lazy beach day.",
    activities: [
      { name: "Beach club day pass", cost: 90 },
      { name: "Cenote swim route", cost: 65 },
      { name: "Tulum ruins and tacos", cost: 50 },
    ],
  },
];

let itinerary = [
  { name: "Arrive, check in, and walk the neighborhood", cost: 45 },
  { name: "Local food crawl and sunset viewpoint", cost: 80 },
  { name: "Half-day excursion with cafe stop", cost: 120 },
];

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

function renderTripSummary() {
  const destination = destinationInput.value.trim() || "Untitled trip";
  const travelers = Number(travelersInput.value || 1);
  const style = tripStyleInput.value;
  const start = startDateInput.value ? new Date(`${startDateInput.value}T00:00:00`) : null;
  const end = endDateInput.value ? new Date(`${endDateInput.value}T00:00:00`) : null;

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
  budgetStatus.textContent =
    budget <= 0
      ? "Set a budget to track your plan."
      : remaining >= 0
        ? `${currency(remaining)} left in your planning budget.`
        : `${currency(Math.abs(remaining))} over budget. Trim or raise the ceiling.`;
}

function renderItinerary() {
  itineraryList.innerHTML = "";

  itinerary.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "day-card";
    card.innerHTML = `
      <div class="day-number"><span>${index + 1}</span>Day</div>
      <div>
        <h4>${item.name}</h4>
        <p>${index === 0 ? "Keep this flexible while travel energy is low." : "Saved to your trip plan."}</p>
      </div>
      <div class="cost-chip">${currency(item.cost)}</div>
    `;
    itineraryList.append(card);
  });

  renderBudget();
}

function renderIdeas() {
  ideaGrid.innerHTML = "";

  ideas.forEach((idea) => {
    const card = document.createElement("article");
    card.className = "idea-card";
    card.innerHTML = `
      <img src="${idea.image}" alt="${idea.name}" />
      <div>
        <h4>${idea.name}</h4>
        <p>${idea.note}</p>
        <button type="button">Use this plan</button>
      </div>
    `;
    card.querySelector("button").addEventListener("click", () => {
      destinationInput.value = idea.name;
      tripStyleInput.value = idea.style;
      budgetInput.value = idea.budget;
      heroImage.src = idea.image.replace("w=900", "w=1600");
      itinerary = [...idea.activities];
      renderAll();
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

function renderAll() {
  renderTripSummary();
  renderItinerary();
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

tripForm.addEventListener("input", renderAll);

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

resetPackingBtn.addEventListener("click", () => {
  packingItems = basePackingItems.map((name) => ({ name, done: false }));
  renderPacking();
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => switchTab(tab.dataset.tab));
});

renderAll();
