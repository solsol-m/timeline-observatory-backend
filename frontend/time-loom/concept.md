Project Concept

An interactive web platform that presents real-world history through a global timeline and interactive maps, powered entirely by historical event data stored in a database and fetched via an API.

The platform does not rely on user-generated content. Instead, it pulls verified historical events (inventions, wars, disasters, discoveries, civilizations, etc.) from a unified data source.

The goal is to make exploring world history visually intuitive and engaging using timelines, maps, and simple data analytics.

Project Purpose

Collect and display global historical events from a single data source using API + MongoDB

Enable users to explore history through:

An interactive timeline

A world map with event locations

Dedicated detail pages for each event

Time-based filters (eras / centuries)

Event-type filters (science, wars, disasters, civilizations, etc.)

Website Pages & Features
1. Landing Page – History Gateway

Presents a clean introduction to the platform under the concept of a “Timeline Observatory”

Uses a strong visual related to Earth or the universe

Includes a primary CTA button that navigates to “Explore Timeline World”

2. Timeline World – Global Timeline

Displays a horizontal timeline from year 0 to the present

Historical events appear as markers positioned by year

Users can filter events by:

Historical eras (Middle Ages, Industrial Revolution, Modern Era)

A custom time range entered manually

3. Event Explorer – Events Browser

Shows historical events in a grid or list format (cards or table)

Allows filtering by:

Continent

Event type

Time period

Includes navigation through Top 20 most influential events

4. Event Details – Event View

Displays complete information about a selected event:

Event name

Year

Category

Location (country / continent)

Short description

Global impact

Representative image

5. Historical Map – World Map View

Interactive world map displaying event markers by geographic location

Clicking a marker opens a popup containing:

Event summary

Link to the full event details page

6. Time Patterns – Analytics & Insights

Displays data-driven insights and statistics, such as:

Centuries with the highest number of recorded events

Countries or continents with the most inventions or major events

Distribution of event types (science, wars, civilizations, disasters, etc.)

The page relies on MongoDB Aggregation Pipelines via the API


Critical Constraints

Visual accuracy > creativity

Follow design screenshots pixel-level accurate

Follow the project concept feature-by-feature

No extra pages, no missing pages

Include concise comments where logic matters

Keep code clean and readable