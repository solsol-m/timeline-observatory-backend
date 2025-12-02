# Component Architecture

## Application Tree Structure

```
App (Router)
│
├── Route: / → LandingPage
│   ├── Navbar (transparent)
│   ├── Hero Section
│   │   ├── Title & Subtitle
│   │   ├── Globe Visualization
│   │   │   ├── Globe Image
│   │   │   ├── Orbital Ring (animated)
│   │   │   └── Play Button Overlay
│   │   └── CTA Buttons
│   │       ├── Button (outline) → /eras
│   │       └── Button (primary) → /timeline
│   └── Footer
│
├── Route: /eras → ErasPage
│   ├── Navbar
│   ├── Hero Section
│   │   ├── Page Title
│   │   ├── Subtitle
│   │   └── Description
│   ├── Eras Grid
│   │   ├── Card (Dawn of Civilizations) → /timeline?era=dawn
│   │   ├── Card (Age of Empires) → /timeline?era=age-of-empires
│   │   ├── Card (Eastern Dynasties) → /timeline?era=eastern-dynasties
│   │   ├── Card (Mystical Civilizations) → /timeline?era=mystical-civilizations
│   │   └── Card (Lost Worlds) → /timeline?era=lost-worlds
│   ├── CTA Section
│   │   ├── Button (outline) → /
│   │   └── Button (primary) → /timeline
│   └── Footer
│
├── Route: /gallery → GalleryPage
│   ├── Navbar
│   ├── Hero Section
│   │   └── Page Title
│   ├── Stories Grid
│   │   ├── Card (The Rise of the Pharaohs) → /story/pharaohs
│   │   ├── Card (The Fall of Troy) → /story/troy
│   │   ├── Card (The Silk Road Legacy) → /story/silk-road
│   │   ├── Card (The Lost Library) → /story/alexandria
│   │   ├── Card (Guardians of the Great Wall) → /story/great-wall
│   │   └── Card (Inca Secrets) → /story/inca
│   ├── Bottom Section
│   │   ├── Narrative Description
│   │   └── CTA Buttons
│   │       ├── Button (primary) → /timeline
│   │       └── Button (outline) → /explorer
│   └── Footer
│
├── Route: /explorer → EventExplorerPage
│   ├── Navbar
│   ├── Header Section
│   │   ├── Page Title
│   │   └── Description
│   ├── Filters Section
│   │   ├── Era Filter Pills
│   │   ├── Continent Filter Pills
│   │   ├── Category Filter Pills
│   │   └── Timeline Slider
│   ├── Events Table
│   │   ├── Table Header Row
│   │   └── Event Rows (clickable) → /event/:id
│   │       ├── Event Title Column
│   │       ├── Year Column
│   │       ├── Location Column
│   │       ├── Category Column
│   │       ├── Description Column
│   │       └── Arrow Icon Column
│   ├── CTA Section
│   │   ├── Button (primary) → /map
│   │   └── Button (primary) → /timeline
│   └── Footer
│
├── Route: /map → HistoricalMapPage
│   ├── Navbar
│   ├── Header (absolute)
│   │   ├── Page Title
│   │   └── Subtitle
│   ├── Main Content (3-column layout)
│   │   ├── Left Sidebar
│   │   │   ├── Filter Dropdowns
│   │   │   │   ├── Event Category Select
│   │   │   │   ├── Year Select
│   │   │   │   ├── Civilization Select
│   │   │   │   └── Category Select
│   │   │   ├── View Details Button
│   │   │   └── Event List
│   │   │       └── Event Items (clickable) → /event/:id
│   │   │
│   │   ├── Center Globe
│   │   │   ├── 3D Globe Image
│   │   │   ├── Orbital Ring
│   │   │   └── Event Markers (with tooltips)
│   │   │       ├── Marker 1 (animated ping)
│   │   │       ├── Marker 2 (animated ping)
│   │   │       └── Marker 3 (animated ping)
│   │   │
│   │   └── Right Sidebar
│   │       ├── Era Selector
│   │       ├── Continent Filter
│   │       └── Time Range Slider
│   │
│   ├── Bottom Section (absolute)
│   │   ├── Tagline Text
│   │   └── CTA Buttons
│   │       ├── Button (primary) → /timeline
│   │       └── Button (outline) → /explorer
│   └── Footer
│
├── Route: /timeline → TimelinePage
│   ├── Navbar
│   ├── Header Section
│   │   ├── Page Title
│   │   ├── Description
│   │   ├── Era Filter Buttons
│   │   │   ├── All Eras Button
│   │   │   ├── Ancient Button
│   │   │   ├── Medieval Button
│   │   │   ├── Renaissance Button
│   │   │   ├── Industrial Button
│   │   │   └── Modern Button
│   │   └── Custom Date Range Inputs
│   │       ├── From Year Input
│   │       └── To Year Input
│   ├── Timeline Section
│   │   ├── Timeline Line (horizontal)
│   │   └── Century Groups
│   │       └── For each century:
│   │           ├── Century Marker
│   │           └── Event Cards Grid
│   │               └── Event Cards (clickable) → /event/:id
│   ├── CTA Section
│   │   └── Button (primary) → /explorer
│   └── Footer
│
├── Route: /event/:id → EventDetailPage
│   ├── Navbar
│   ├── Content Section
│   │   ├── Back Button → navigate(-1)
│   │   ├── Event Image
│   │   ├── Event Header
│   │   │   ├── Title
│   │   │   └── Metadata (Year, Category, Era)
│   │   ├── Info Grid
│   │   │   ├── Location Info
│   │   │   └── Civilization Info
│   │   ├── Description Section
│   │   ├── Global Impact Section
│   │   └── Action Buttons
│   │       ├── Button (primary) → /map
│   │       └── Button (outline) → /timeline
│   └── Footer
│
└── Route: /story/:id → EventDetailPage (reused)
    └── [Same as Event Detail]

```

## Shared Components

### Navigation Components
```
Logo
├── Link wrapper → /
└── Golden cube icon (rotated square)

Navbar
├── Props: transparent (boolean)
├── Logo
└── Navigation Links
    ├── Link → /
    ├── Link → /eras
    ├── Link → /gallery
    └── Link → /explorer

Footer
└── Copyright Text
```

### UI Components
```
Button
├── Props: variant ('primary' | 'outline'), children, className
├── Primary variant: .btn-gold
└── Outline variant: .btn-gold-outline

Card
├── Props: children, className, variant ('default' | 'corner'), onClick
├── Default variant: .event-card
└── Corner variant: .corner-decoration + .event-card

PageContainer
├── Props: children, className
└── min-h-screen wrapper

Section
├── Props: children, className, withBorder
├── py-20 padding
├── Container mx-auto
└── Optional: .ancient-border decoration
```

## Data Flow

```
Mock Data Source (mockData.ts)
│
├── fetchEvents() → HistoricalEvent[]
│   ├── Used by: EventExplorerPage
│   ├── Used by: TimelinePage
│   └── Used by: HistoricalMapPage
│
├── fetchEventById(id) → HistoricalEvent
│   └── Used by: EventDetailPage
│
├── fetchEras() → Era[]
│   └── Used by: ErasPage
│
└── fetchStories() → Story[]
    └── Used by: GalleryPage
```

## State Management

### Component-Level State
Each page manages its own state using React hooks:

```typescript
// Example: EventExplorerPage
const [events, setEvents] = useState<HistoricalEvent[]>([]);
const [filters, setFilters] = useState({ era, continent, category });

// Example: TimelinePage
const [events, setEvents] = useState<HistoricalEvent[]>([]);
const [yearRange, setYearRange] = useState({ from: 0, to: 2025 });
const [selectedEra, setSelectedEra] = useState('all');
```

### URL State (via React Router)
- Search params: `/timeline?era=ancient`
- URL params: `/event/:id`

## Styling Architecture

```
Global Styles (index.css)
├── Tailwind Base
├── Tailwind Components
│   ├── .btn-gold (golden button)
│   ├── .btn-gold-outline (outline button)
│   ├── .ancient-border (decorative borders)
│   ├── .event-card (card with golden border)
│   └── .corner-decoration (angled corners)
├── Tailwind Utilities
└── Custom Styles
    ├── Body background pattern
    ├── Custom scrollbar
    └── Leaflet map overrides

Tailwind Config (tailwind.config.js)
├── Extended Colors
│   ├── gold (DEFAULT, light, dark)
│   └── bronze (DEFAULT, light, dark)
└── Extended Fonts
    ├── serif: Cinzel
    └── display: Cinzel Decorative
```

## Routing Architecture

```
BrowserRouter
└── Routes
    ├── Route(/) → LandingPage
    ├── Route(/eras) → ErasPage
    ├── Route(/gallery) → GalleryPage
    ├── Route(/explorer) → EventExplorerPage
    ├── Route(/map) → HistoricalMapPage
    ├── Route(/timeline) → TimelinePage
    ├── Route(/event/:id) → EventDetailPage
    └── Route(/story/:id) → EventDetailPage
```

## Type System

```typescript
HistoricalEvent
├── id: string
├── title: string
├── year: number
├── category: enum
├── continent: enum
├── country: string
├── location: { lat, lng }
├── shortDescription: string
├── fullDescription: string
├── globalImpact: string
├── imageUrl: string
├── era: enum
├── civilization?: string
└── isTopInfluential?: boolean

Era
├── id: string
├── name: string
├── title: string
├── icon: string
├── description: string
└── timeRange: string

Story
├── id: string
├── title: string
├── description: string
├── icon: string
└── relatedEvents: string[]
```

## Build Process

```
Source Files (src/)
    ↓
TypeScript Compilation (tsc)
    ↓
Tailwind CSS Processing (postcss)
    ↓
Vite Bundling
    ↓
Optimized Output (dist/)
```
