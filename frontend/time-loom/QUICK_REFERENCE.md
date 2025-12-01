# Quick Reference Guide

## 🚀 Essential Commands

### Installation
```powershell
npm install
```

### Development
```powershell
npm run dev          # Start dev server at http://localhost:5173
```

### Production
```powershell
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```powershell
npm run lint         # Check for code issues
```

---

## 🗺️ Quick Navigation URLs

When dev server is running:

- Home: http://localhost:5173/
- Eras: http://localhost:5173/eras
- Gallery: http://localhost:5173/gallery
- Explorer: http://localhost:5173/explorer
- Map: http://localhost:5173/map
- Timeline: http://localhost:5173/timeline
- Event Detail: http://localhost:5173/event/1

---

## 📁 File Locations

### Need to modify a page?
```
src/pages/LandingPage.tsx       → Home page
src/pages/ErasPage.tsx          → Eras page
src/pages/GalleryPage.tsx       → Gallery page
src/pages/EventExplorerPage.tsx → Explorer page
src/pages/HistoricalMapPage.tsx → Map page
src/pages/TimelinePage.tsx      → Timeline page
src/pages/EventDetailPage.tsx   → Event details
```

### Need to add data?
```
src/data/mockData.ts            → All mock data
```

### Need to change styles?
```
src/index.css                   → Global styles
tailwind.config.js              → Theme colors
```

### Need to modify components?
```
src/components/Layout/Navigation.tsx → Navbar, Footer
src/components/UI/Button.tsx         → Buttons
src/components/UI/Card.tsx           → Cards
src/components/UI/Container.tsx      → Containers
```

---

## 🎨 Quick Style Reference

### Colors (use in className)
```jsx
text-yellow-500     // Primary gold text
bg-yellow-600       // Primary gold background
border-yellow-700   // Gold border
text-gray-400       // Secondary text
bg-black            // Background
```

### Buttons
```jsx
<Button variant="primary">Text</Button>   // Gold button
<Button variant="outline">Text</Button>   // Outline button
```

### Cards
```jsx
<Card>Content</Card>                      // Default card
<Card variant="corner">Content</Card>     // Corner decorated
```

### Custom Classes
```jsx
className="btn-gold"              // Golden button style
className="btn-gold-outline"      // Outline button
className="event-card"            // Event card
className="corner-decoration"     // Corner decorations
className="ancient-border"        // Top/bottom borders
```

---

## 🔧 Common Tasks

### Add a New Event
1. Open `src/data/mockData.ts`
2. Add to `mockEvents` array:
```typescript
{
  id: '6',
  title: 'New Event',
  year: -1000,
  category: 'Science',
  continent: 'Asia',
  country: 'China',
  location: { lat: 39.9042, lng: 116.4074 },
  shortDescription: 'Short description',
  fullDescription: 'Full description',
  globalImpact: 'Impact statement',
  imageUrl: '/images/event.jpg',
  era: 'Ancient',
  civilization: 'Chinese'
}
```

### Add a New Story
1. Open `src/data/mockData.ts`
2. Add to `mockStories` array:
```typescript
{
  id: 'new-story',
  title: 'Story Title',
  description: 'Story description',
  icon: '🏛️',
  relatedEvents: []
}
```

### Change Theme Colors
1. Open `tailwind.config.js`
2. Modify in `extend.colors`:
```javascript
gold: {
  DEFAULT: '#D4AF37',  // Change this
  light: '#F4D03F',    // And this
  dark: '#B8860B',     // And this
}
```

### Add a New Page
1. Create file in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
```typescript
<Route path="/new" element={<NewPage />} />
```
3. Add navigation link in `src/components/Layout/Navigation.tsx`

---

## 🐛 Quick Fixes

### Port in use?
```powershell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess -Force
npm run dev
```

### Styles not working?
1. Check `src/index.css` is imported in `main.tsx`
2. Restart dev server
3. Clear browser cache (Ctrl + Shift + R)

### Module not found?
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

### TypeScript errors?
```powershell
npx tsc --noEmit
```

### Build fails?
```powershell
Remove-Item -Recurse -Force dist
npm run build
```

---

## 📝 Editing Tips

### Hot Reload
- Save any file
- Browser auto-refreshes
- No need to restart server

### Component Props
All components use TypeScript - check prop types:
```typescript
interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}
```

### Navigation
```typescript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/eras');           // Go to eras page
navigate('/event/1');        // Go to event 1
navigate(-1);                // Go back
```

### Getting URL Params
```typescript
import { useParams } from 'react-router-dom';

const { id } = useParams<{ id: string }>();
```

### Getting Search Params
```typescript
import { useSearchParams } from 'react-router-dom';

const [searchParams] = useSearchParams();
const era = searchParams.get('era');
```

---

## 🎯 Testing Checklist

Quick manual test before deploying:

- [ ] Run `npm run build` successfully
- [ ] All pages load without errors
- [ ] Navigation works between pages
- [ ] Filters on explorer page work
- [ ] Event table is clickable
- [ ] Map displays correctly
- [ ] Timeline shows events
- [ ] Event detail page loads
- [ ] Back buttons work
- [ ] All buttons navigate correctly
- [ ] Images load (or fallback works)
- [ ] No console errors (F12)

---

## 📚 Documentation Index

1. **INDEX.md** (this file) - Quick reference
2. **README.md** - Full documentation
3. **SETUP.md** - Installation guide
4. **DEPLOYMENT.md** - Deployment guide
5. **ARCHITECTURE.md** - Code structure
6. **PROJECT_SUMMARY.md** - Feature list
7. **CHANGELOG.md** - Version history

---

## 💡 Helpful Keyboard Shortcuts

### VS Code
- `Ctrl + P` - Quick file open
- `Ctrl + Shift + F` - Search in files
- `Ctrl + B` - Toggle sidebar
- `Alt + Up/Down` - Move line up/down
- `Ctrl + /` - Toggle comment

### Browser
- `F12` - Open DevTools
- `Ctrl + Shift + R` - Hard refresh
- `Ctrl + Shift + I` - Inspect element

### Terminal
- `Ctrl + C` - Stop server
- `Up Arrow` - Previous command
- `Tab` - Autocomplete

---

## 🔗 External Resources

### Official Docs
- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- Tailwind: https://tailwindcss.com/
- Vite: https://vitejs.dev/

### Deployment
- Vercel: https://vercel.com/
- Netlify: https://www.netlify.com/
- GitHub Pages: https://pages.github.com/

### Tools
- Google Fonts: https://fonts.google.com/
- Unsplash: https://unsplash.com/ (free images)
- React Icons: https://react-icons.github.io/react-icons/

---

## ⚡ Pro Tips

1. **Keep dev server running** while coding for instant feedback
2. **Use browser DevTools** (F12) to debug styling issues
3. **Check console** for JavaScript errors
4. **Test in multiple browsers** before deploying
5. **Commit changes frequently** if using Git
6. **Read error messages** carefully - they usually tell you exactly what's wrong
7. **Use TypeScript autocomplete** - it knows all available props
8. **Tailwind IntelliSense** - Install VS Code extension for class suggestions

---

## 🎨 Color Codes

Copy these for quick reference:

```
Primary Gold:    #D4AF37
Light Gold:      #F4D03F
Dark Gold:       #B8860B
Primary Bronze:  #CD7F32
Light Bronze:    #E6A854
Dark Bronze:     #A0522D
Background:      #000000
Text:            #FFFFFF
Gray Text:       #9CA3AF
Dark Gray:       #4B5563
```

---

## 🚦 Project Status

✅ **All pages implemented**  
✅ **All features working**  
✅ **Pixel-perfect design match**  
✅ **Ready for deployment**  

---

**Need help?** Check the appropriate documentation file from the list above!
