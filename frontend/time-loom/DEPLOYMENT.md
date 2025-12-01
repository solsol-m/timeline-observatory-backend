# Installation & Deployment Guide

## Table of Contents
1. [System Requirements](#system-requirements)
2. [Initial Setup](#initial-setup)
3. [Development](#development)
4. [Testing](#testing)
5. [Production Build](#production-build)
6. [Deployment Options](#deployment-options)
7. [Troubleshooting](#troubleshooting)

---

## System Requirements

### Required Software
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: For version control (optional but recommended)

### Check Your Versions
```powershell
node --version    # Should show v18+ or v20+
npm --version     # Should show v9+ or v10+
```

### Install Node.js (if needed)
1. Download from https://nodejs.org/
2. Run the installer
3. Restart your terminal
4. Verify installation with commands above

---

## Initial Setup

### 1. Navigate to Project Directory
```powershell
cd "d:\Amana_Bootcamp\Final"
```

### 2. Install Dependencies
```powershell
npm install
```

This will install:
- React and React DOM
- React Router
- TypeScript
- Tailwind CSS
- Vite
- Leaflet (for maps)
- All development dependencies

**Expected Duration**: 1-3 minutes (depending on internet speed)

### 3. Verify Installation
After installation completes, you should see:
- `node_modules/` folder created
- `package-lock.json` file created
- No error messages in terminal

---

## Development

### Start Development Server
```powershell
npm run dev
```

**What This Does**:
- Starts Vite development server
- Enables hot module replacement (HMR)
- Opens at `http://localhost:5173` by default

**Expected Output**:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Access the Application
1. Open your web browser
2. Navigate to: `http://localhost:5173`
3. You should see the landing page

### Development Features
- **Hot Reload**: Changes to files automatically refresh the browser
- **Fast Refresh**: React components update without losing state
- **Error Overlay**: Build errors appear in the browser
- **TypeScript Checking**: Type errors shown in terminal

### Stop Development Server
Press `Ctrl + C` in the terminal

---

## Development Workflow

### Making Changes

#### Modify a Page
1. Open file in `src/pages/`
2. Edit JSX/styling
3. Save file
4. Browser auto-refreshes

#### Add New Data
1. Open `src/data/mockData.ts`
2. Add to `mockEvents`, `mockEras`, or `mockStories`
3. Save file
4. Data appears automatically

#### Change Styling
1. Edit `src/index.css` for global styles
2. Edit `tailwind.config.js` for theme
3. Modify component files for component-specific styles
4. Save and see changes instantly

### File Watching
Vite watches these files and triggers rebuilds:
- All `.tsx` and `.ts` files
- All `.css` files
- `index.html`
- Configuration files

---

## Testing

### Manual Testing Checklist

#### Navigation
- [ ] Click logo → goes to home
- [ ] Click "Eras" → goes to /eras
- [ ] Click "Gallery" → goes to /gallery
- [ ] Click "Contact" → goes to /explorer

#### Landing Page (/)
- [ ] Hero title displays correctly
- [ ] Globe image loads
- [ ] Play button is visible
- [ ] "Begin Your Journey" button → /eras
- [ ] "Explore Timeline" button → /timeline

#### Eras Page (/eras)
- [ ] All 5 era cards display
- [ ] Icons show correctly
- [ ] Clicking card navigates to timeline
- [ ] Buttons work

#### Gallery Page (/gallery)
- [ ] All 6 story cards display
- [ ] Descriptions are readable
- [ ] Buttons navigate correctly

#### Event Explorer (/explorer)
- [ ] Filter pills display
- [ ] Timeline slider works
- [ ] Event table shows data
- [ ] Clicking row → event detail page
- [ ] Buttons navigate to map/timeline

#### Historical Map (/map)
- [ ] Globe image displays
- [ ] Event markers show
- [ ] Left sidebar filters work
- [ ] Right sidebar displays
- [ ] Event list is clickable
- [ ] Buttons work

#### Timeline Page (/timeline)
- [ ] Events display chronologically
- [ ] Era filter buttons work
- [ ] Date range inputs work
- [ ] Clicking event card → detail page

#### Event Detail (/event/1)
- [ ] Event data loads
- [ ] Image displays
- [ ] All sections show
- [ ] Back button works
- [ ] Action buttons navigate correctly

### Browser Testing
Test in these browsers:
- ✅ Chrome (recommended)
- ✅ Edge
- ✅ Firefox
- ✅ Safari (if available)

### Responsive Testing
Test at these viewport sizes:
- 1920x1080 (Desktop)
- 1366x768 (Laptop)
- 768x1024 (Tablet)
- 375x667 (Mobile)

---

## Production Build

### Create Production Build
```powershell
npm run build
```

**What This Does**:
- Compiles TypeScript to JavaScript
- Bundles all code with Vite
- Minifies CSS and JavaScript
- Optimizes images
- Creates production-ready files in `dist/`

**Expected Output**:
```
vite v5.0.8 building for production...
✓ 150 modules transformed.
dist/index.html                  0.50 kB
dist/assets/index-[hash].css    15.20 kB │ gzip: 3.80 kB
dist/assets/index-[hash].js    145.30 kB │ gzip: 45.60 kB
✓ built in 3.50s
```

### Preview Production Build
```powershell
npm run preview
```

This starts a local server serving the production build from `dist/`.

**Access at**: `http://localhost:4173`

### Build Optimization
The build is optimized with:
- Tree shaking (removes unused code)
- Code splitting (lazy loading)
- Minification (smaller file sizes)
- Gzip compression
- Asset optimization

---

## Deployment Options

### Option 1: Vercel (Recommended)

#### Steps:
1. Install Vercel CLI:
   ```powershell
   npm install -g vercel
   ```

2. Login to Vercel:
   ```powershell
   vercel login
   ```

3. Deploy:
   ```powershell
   vercel
   ```

4. Follow prompts:
   - Project name: `chronicles-ancient-civilizations`
   - Framework: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`

5. Your site is live! URL will be provided.

#### Automatic Deployments:
- Push to GitHub
- Connect repository to Vercel
- Auto-deploy on every push

---

### Option 2: Netlify

#### Steps:
1. Build the project:
   ```powershell
   npm run build
   ```

2. Install Netlify CLI:
   ```powershell
   npm install -g netlify-cli
   ```

3. Login:
   ```powershell
   netlify login
   ```

4. Deploy:
   ```powershell
   netlify deploy --prod --dir=dist
   ```

#### Drag & Drop Alternative:
1. Build: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag `dist` folder to the page
4. Site is live!

---

### Option 3: GitHub Pages

#### Setup:
1. Install gh-pages:
   ```powershell
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/repository-name/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```powershell
   npm run deploy
   ```

---

### Option 4: Traditional Hosting

For services like HostGator, Bluehost, etc.:

1. Build the project:
   ```powershell
   npm run build
   ```

2. Upload `dist/` folder contents to server:
   - Via FTP/SFTP
   - Via cPanel File Manager
   - Via hosting provider's upload tool

3. Configure server:
   - Point domain to uploaded folder
   - Set up 404 redirects to `index.html` (for client-side routing)

#### .htaccess for Apache:
Create `.htaccess` in `dist/`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Environment Variables

### Create `.env` file (when needed)
```env
VITE_API_BASE_URL=https://your-api.com/api
VITE_MAP_API_KEY=your_map_api_key
```

### Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

### Production variables:
Set in your deployment platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment
- GitHub Pages: Repository Settings → Secrets

---

## Troubleshooting

### Common Issues

#### 1. Port Already in Use
```powershell
# Error: Port 5173 is already in use

# Solution: Kill process
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess -Force
npm run dev
```

#### 2. Module Not Found Errors
```powershell
# Error: Cannot find module 'react' or similar

# Solution: Reinstall dependencies
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

#### 3. TypeScript Errors
```powershell
# Check for TypeScript issues
npx tsc --noEmit

# If errors persist, check:
# - Correct imports
# - Type definitions in src/types/
# - tsconfig.json settings
```

#### 4. Tailwind Styles Not Applying
```powershell
# Make sure index.css is imported in main.tsx
# Check tailwind.config.js content paths
# Rebuild:
npm run dev
```

#### 5. Build Fails
```powershell
# Clear cache and rebuild
Remove-Item -Recurse -Force dist
Remove-Item -Recurse -Force node_modules/.vite
npm run build
```

#### 6. Routing Issues After Deployment
- Ensure server redirects all routes to `index.html`
- Check `base` setting in `vite.config.ts`
- Verify `homepage` in `package.json` (if using)

#### 7. Images Not Loading
- Check image URLs in code
- Verify images are in `public/` folder
- Use relative paths: `/images/photo.jpg`
- Or import images: `import logo from './logo.png'`

### Getting Help

If you encounter issues:

1. Check error messages carefully
2. Review this troubleshooting section
3. Check browser console for errors (F12)
4. Verify all dependencies are installed
5. Ensure Node.js version is correct
6. Try rebuilding from scratch

### Clean Reinstall
```powershell
# Complete reset (use if all else fails)
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force dist
Remove-Item package-lock.json
npm install
npm run dev
```

---

## Performance Optimization

### Before Deployment

1. **Optimize Images**:
   - Compress images (TinyPNG, ImageOptim)
   - Use WebP format when possible
   - Lazy load images

2. **Code Splitting**:
   - Already configured with Vite
   - Lazy load routes if needed

3. **Reduce Bundle Size**:
   - Remove unused dependencies
   - Check bundle size: `npm run build`

4. **Enable Compression**:
   - Most hosting providers enable gzip automatically
   - Verify in Network tab of browser DevTools

### After Deployment

1. **Test Performance**:
   - Google PageSpeed Insights
   - Lighthouse (in Chrome DevTools)
   - GTmetrix

2. **Monitor Loading**:
   - Check First Contentful Paint (FCP)
   - Time to Interactive (TTI)
   - Total page size

3. **Optimize as Needed**:
   - Add CDN if available
   - Enable browser caching
   - Compress text assets

---

## Maintenance

### Updating Dependencies
```powershell
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm install react@latest

# Update major versions (use carefully)
npm install react@latest --save
```

### Security Updates
```powershell
# Check for security issues
npm audit

# Fix automatically
npm audit fix

# Fix including breaking changes
npm audit fix --force
```

---

## Success Checklist

Before considering deployment complete:

- [ ] All pages load without errors
- [ ] Navigation works between all pages
- [ ] Images load correctly
- [ ] Filters and interactions work
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] Production build succeeds
- [ ] Preview build works locally
- [ ] Environment variables configured
- [ ] Analytics setup (if needed)
- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate active (https)
- [ ] Performance metrics acceptable

---

**Your application is now ready for production deployment!** 🚀
