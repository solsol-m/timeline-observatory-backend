# Quick Start Guide

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
Open PowerShell in the project directory and run:
```powershell
npm install
```

This will install:
- React 18
- React Router v6
- Tailwind CSS
- TypeScript
- Leaflet (for maps)
- Vite (build tool)

### 2. Start Development Server
```powershell
npm run dev
```

The application will start at `http://localhost:5173`

### 3. View the Application
Open your browser and navigate to the local server URL shown in the terminal.

## Available Pages

Navigate to these routes in your browser:

- **Home/Landing**: `http://localhost:5173/`
- **Eras**: `http://localhost:5173/eras`
- **Gallery (Stories)**: `http://localhost:5173/gallery`
- **Event Explorer**: `http://localhost:5173/explorer`
- **Historical Map**: `http://localhost:5173/map`
- **Timeline**: `http://localhost:5173/timeline`
- **Event Detail**: `http://localhost:5173/event/1` (where 1 is event ID)

## Project Commands

```powershell
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Folder Structure Quick Reference

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components (routes)
├── data/           # Mock data (replace with API calls)
├── types/          # TypeScript definitions
├── App.tsx         # Main app with routing
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Making Changes

### To modify a page:
1. Find the page component in `src/pages/`
2. Edit the JSX and styling
3. Changes will hot-reload automatically

### To add new data:
1. Edit `src/data/mockData.ts`
2. Add events, eras, or stories
3. Data will appear automatically on relevant pages

### To change colors/styling:
1. Edit `tailwind.config.js` for theme colors
2. Edit `src/index.css` for global styles
3. Modify component classes directly in page files

## Connecting to Real API

When ready to connect to your MongoDB backend:

1. Create `src/services/api.ts`:
```typescript
const API_BASE = 'http://your-api-url.com/api';

export const fetchEvents = async () => {
  const response = await fetch(`${API_BASE}/events`);
  return response.json();
};
// Add more API functions...
```

2. Replace imports in page files:
```typescript
// Change from:
import { fetchEvents } from '../data/mockData';

// To:
import { fetchEvents } from '../services/api';
```

## Troubleshooting

### Port already in use
```powershell
# Kill process on port 5173
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess -Force
npm run dev
```

### Module not found errors
```powershell
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### TypeScript errors
```powershell
# Check TypeScript config
npx tsc --noEmit
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Explore all pages
4. 📝 Customize mock data
5. 🎨 Adjust styling if needed
6. 🔌 Connect to real API
7. 🚀 Build for production

## Production Build

When ready to deploy:

```powershell
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The `dist/` folder will contain your production-ready files.

## Support

- Check README.md for detailed documentation
- Review CHANGELOG.md for all implemented features
- Examine component files for inline comments
