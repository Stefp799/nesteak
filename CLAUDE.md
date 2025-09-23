# A1 Web Group Steakhouse Project - Claude Session Notes

## Project Overview
**New England Steak and Seafood** website for Monday presentation strategy

### 1. Navigation Strategy Implementation
- **Removed reservations button** from all pages: App.jsx, MenusPage.jsx, AboutPage.jsx, GalleryPage.jsx, ReservationsPage.jsx
- **Kept /reservations and /events accessible** via direct URL for presentation demos
- Navigation now shows: **MENUS | GALLERY | ABOUT**

### 2. Hero Image Optimization
**Problem Solved**: "Monster heroes" stretching endlessly on large screens
- **Added max-width: 1280px** to all hero sections
- **Centered with margin: 0 auto** when hitting max-width
- **Upgraded all hero images to .webp format**:
  - Homepage: nesteak.webp
  - Menus: clams.webp
  - About: about.webp
  - Events: primeparty.webp

### 3. Video Container Fix
**Problem**: YouTube thumbnails stretching to "charcoal eating you up" proportions
**Solution**: Fixed CSS from `width: 100%; max-width: 1200px; height: 675px;` to constrained dimensions:
- Desktop: 480px × 270px
- Tablet: 400px × 225px
- Mobile: 320px × 180px

### 4. SPA Routing & Deployment
- **Added vercel.json** for client-side routing
- **Fixed deployment** to nesteak.vercel.app


### Hero Sizing Best Practice
```css
.hero-section {
  position: relative;
  height: 60vh;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
}
@media (min-width: 768px) {
  .hero-section { height: 100vh; }
}
```

### Image Path Convention
- Use .webp format for better compression/quality
- Store in `/public/images/` directory
- Reference as `/images/filename.webp` in code

## Critical Pitfalls & Solutions

### 1. Directory Confusion
**Problem**: Working in wrong project directory (a1webgroup vs steak/grill23-clean)
**Solution**: Always verify working directory with `pwd` and check git remotes

### 2. CSS Override Issues
**Problem**: HTML iframe dimensions ignored by CSS rules
**Solution**: Check CSS for conflicting rules, especially responsive media queries

### 3. Image Stretching
**Problem**: Small images in large containers become distorted
**Solution**: Constrain container max-width rather than stretching images

## Deployment Workflow
```bash
cd "/c/Users/piard/Documents/github-lovable/office-replica-vibes/steak/grill23-clean"
git add .
git commit -m "Descriptive commit message"
git push
```

## File Structure Reference
```
steak/grill23-clean/
├── src/
│   ├── App.jsx (Homepage)
│   ├── MenusPage.jsx
│   ├── AboutPage.jsx
│   ├── GalleryPage.jsx
│   ├── EventsPage.jsx
│   ├── ReservationsPage.jsx
│   ├── main.jsx (Routes)
│   └── index.css (Global styles)
├── public/images/ (Hero images)
└── vercel.json (SPA routing)
```

## A1 Web Group Business Notes
- **Steakhouse client**: Professional presentation Monday 4pm
- **Strategy**: Hide reservations in nav, demo via direct URLs
- **Revenue streams**: Events page for private parties/catering
- **Image quality**: Client appreciates high-quality hero images with proper sizing

## Tomorrow's Workflow Tips
1. **Always check working directory first**
2. **Verify git remotes** before committing
3. **Test hero images** at 1280px constraint
4. **Check CSS for override conflicts**
5. **Use .webp format** for new images
6. **Commit frequently** with descriptive messages

## Emergency Contact Info
- Repository: https://github.com/Stefp799/nesteak
- Deployment: nesteak.vercel.app
- Local dev: http://localhost:5173 (or check port in terminal)