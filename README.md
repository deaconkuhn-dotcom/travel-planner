# Travel Planner

Run the website locally:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

The destination field is a fixed list of curated places with matching photos and researched starter routes. Picking a destination updates the hero image, budget, trip style, and recommended itinerary.

The planner starts as a destination gallery. The sidebar and planning controls stay hidden until someone chooses a city or place.

The planner also includes a Flights & Stays tab. It recommends the best destination airport, flight-search strategy, hotel neighborhood, and stay type based on the selected destination, dates, budget, travelers, trip style, departure city, and travel priority. Links open live flight and hotel searches so prices stay current.

This is now a static website, so it can be hosted on GitHub Pages with just `index.html`, `styles.css`, and `app.js`.
