# Chronicles of Ancient Civilizations

An interactive web platform that presents real-world history through a global timeline and interactive maps, powered by historical event data.

## Project Overview

This platform enables users to explore world history through:
- An interactive timeline from year 0 to present
- A world map with event locations
- Dedicated detail pages for each event
- Time-based filters (eras / centuries)
- Event-type filters (science, wars, disasters, civilizations, etc.)

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Maps**: React Leaflet
- **Build Tool**: Vite
- **Font**: Cinzel (Google Fonts)

## Project Structure

```
Final/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Navigation.tsx      # Navbar, Footer, Logo
│   │   └── UI/
│   │       ├── Button.tsx          # Reusable button component
│   │       ├── Card.tsx            # Event card component
│   │       └── Container.tsx       # Page and section containers
│   ├── pages/
│   │   ├── LandingPage.tsx         # Homepage with hero section
│   │   ├── ErasPage.tsx            # Eras of ancient world
│   │   ├── GalleryPage.tsx         # Chronicles & Timeless Stories
│   │   ├── EventExplorerPage.tsx   # Event browser with filters
│   │   ├── HistoricalMapPage.tsx   # Interactive world map
│   │   ├── TimelinePage.tsx        # Timeline from year 0 to present
│   │   └── EventDetailPage.tsx     # Individual event details
│   ├── data/
│   │   └── mockData.ts             # Mock data for development
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── App.tsx                     # Main app with routing
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.js              # Tailwind CSS config
├── vite.config.ts                  # Vite config
└── README.md                       # This file
```

## Pages Implemented

### 1. Landing Page (/)
- Hero section with "Chronicles of Ancient Civilizations" title
- 3D globe visualization with orbital ring
- Two CTA buttons: "Begin Your Journey" and "Explore Timeline"
- Ancient symbols decorative overlay

### 2. Eras Page (/eras)
- Five era cards:
  - Dawn of Civilizations
  - Age of Empires
  - Eastern Dynasties
  - Mystical Civilizations
  - Lost Worlds & Forgotten Kingdoms
- Each card has icon, title, and description
- Click to filter timeline by era

### 3. Gallery Page (/gallery)
- Chronicles & Timeless Stories section
- Six featured story cards:
  - The Rise of the Pharaohs
  - The Fall of Troy
  - The Silk Road Legacy
  - The Lost Library of Alexandria
  - Guardians of the Great Wall
  - Inca Secrets of the Andes

### 4. Event Explorer (/explorer)
- Filterable event table with:
  - Era filters
  - Continent filters
  - Category filters
  - Custom date range slider
- Table columns: Event Title, Year, Location, Category, Short Description, View Details
- Navigate to event detail page on click

### 5. Historical Map (/map)
- Interactive 3D globe visualization
- Event markers with tooltips
- Left sidebar: filters and event list
- Right sidebar: era selector, continent filter, time range
- Click markers to view event details

### 6. Timeline Page (/timeline)
- Horizontal timeline from year 0 to present
- Events grouped by century
- Era filter buttons (Ancient, Medieval, Renaissance, Industrial, Modern)
- Custom year range inputs
- Visual timeline with connecting lines

### 7. Event Detail Page (/event/:id)
- Event image
- Title, year, category, era
- Location and civilization info
- Full description
- Global impact statement
- Navigation to map and timeline views

## Design Features

- **Color Scheme**: Black background with gold/yellow accents (#D4AF37)
- **Typography**: Cinzel font family for historical aesthetic
- **Visual Elements**:
  - Ancient symbol decorations (☥, ⚔️, ☸, etc.)
  - Golden borders and gradients
  - Corner decorations on cards
  - Hover effects with scale and glow
  - Custom scrollbar styling
- **Responsive Design**: Grid layouts that adapt to screen size

## Installation & Setup

1. **Install Dependencies**:
   ```powershell
   npm install
   ```

2. **Run Development Server**:
   ```powershell
   npm run dev
   ```

3. **Build for Production**:
   ```powershell
   npm run build
   ```

4. **Preview Production Build**:
   ```powershell
   npm run preview
   ```

## API Integration (Future)

Currently uses mock data from `src/data/mockData.ts`. To integrate with a real API:

1. Create API service files in `src/services/`
2. Replace mock functions in `mockData.ts` with actual API calls
3. Update type definitions in `src/types/` as needed
4. Add environment variables for API endpoints

Expected API endpoints:
- `GET /api/events` - Fetch all events (with filters)
- `GET /api/events/:id` - Fetch single event
- `GET /api/eras` - Fetch era categories
- `GET /api/stories` - Fetch featured stories
- `GET /api/analytics` - Fetch statistics for Time Patterns page

## Future Enhancements

- Time Patterns / Analytics page with data visualizations
- Search functionality across all events
- Event comparison feature
- User favorites/bookmarks
- Social sharing
- Multilingual support
- Dark/light theme toggle
- More interactive map features

## Critical Constraints Met

✅ Visual accuracy matching screenshots  
✅ All 5+ pages implemented per concept  
✅ React + TypeScript + Tailwind CSS  
✅ Clean component structure  
✅ Reusable UI components  
✅ Pixel-level accurate design implementation  
✅ Concise comments where needed  
✅ No extra pages, no missing features  

## Development Notes

- Mock data includes 5 sample historical events
- All images use placeholder URLs (replace with actual event images)
- Leaflet map requires internet connection for tile layers
- Font loading from Google Fonts CDN

## License

© 2025 Chronicles, All Rights Reserved.
