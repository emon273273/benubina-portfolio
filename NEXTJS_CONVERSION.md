# Benubina Portfolio - Next.js 15

This project has been successfully converted from Vite + React Router to **Next.js 15** with the App Router.

## What Changed

### Framework Migration
- ✅ Converted from **Vite** to **Next.js 15**
- ✅ Migrated from **React Router v6** to **Next.js App Router**
- ✅ Updated from **React 18** to **React 19**
- ✅ Converted all pages to Next.js page format

### File Structure
```
Old (Vite):                  New (Next.js):
├── src/                     ├── app/
│   ├── pages/              │   ├── page.js (Home)
│   │   ├── Home.jsx        │   ├── about/
│   │   ├── About.jsx       │   │   └── page.js
│   │   ├── WhoWeAre.jsx    │   ├── who-we-are/
│   │   ├── Portfolio.jsx   │   │   └── page.js
│   │   └── Contact.jsx     │   ├── portfolio/
│   ├── components/         │   │   └── page.js
│   │   ├── Layout.jsx      │   ├── contact/
│   │   ├── Navbar.jsx      │   │   └── page.js
│   │   ├── Footer.jsx      │   ├── layout.js
│   │   └── ThemeToggle.jsx │   └── globals.css
│   ├── context/            ├── components/
│   │   └── ThemeContext.jsx│   ├── Navbar.js
│   ├── index.css           │   ├── Footer.js
│   └── main.jsx            │   ├── ThemeToggle.js
├── index.html              │   └── providers/
├── vite.config.js          │       └── ThemeProvider.js
└── package.json            ├── public/
                            ├── next.config.js
                            └── package.json
```

### Key Changes

#### 1. Routing
- **Before**: React Router with `<Route>` components
- **After**: File-based routing with Next.js App Router

#### 2. Navigation
- **Before**: `<Link to="/path">`
- **After**: `<Link href="/path">`

#### 3. Client Components
All interactive components now use the `'use client'` directive:
- Home page (uses Swiper)
- About page  
- Who We Are page
- Portfolio page
- Contact page
- Navbar (uses hooks)
- ThemeProvider (uses Context API)

#### 4. Layout Structure
- **Before**: Nested routes with `<Outlet />`
- **After**: Root `layout.js` wrapping all pages

#### 5. Theme Management
- Converted `ThemeContext` to work with Next.js
- Added hydration safety to prevent theme flash
- Uses `'use client'` for browser-only APIs

## Getting Started

### Development
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

## Dependencies

### Production
- `next` - ^15.0.3
- `react` - ^19.0.0
- `react-dom` - ^19.0.0
- `lucide-react` - ^0.556.0
- `swiper` - ^12.0.3

### Development
- `eslint` - ^9
- `eslint-config-next` - ^15.0.3
- `tailwindcss` - ^3.4.18
- `autoprefixer` - ^10.4.22
- `postcss` - ^8.5.6

## Removed Dependencies

The following Vite-specific dependencies were removed:
- `vite`
- `@vitejs/plugin-react`
- `react-router-dom`
- Old ESLint plugins (replaced with `eslint-config-next`)

## Features

All original features are preserved:
- ✅ Dark mode with system preference detection
- ✅ Responsive design
- ✅ Swiper carousels for testimonials
- ✅ Lucide icons
- ✅ TailwindCSS styling
- ✅ All pages functional (Home, About, Who We Are, Portfolio, Contact)

## Next Steps

1. **Test all pages**: Browse through each page and ensure all functionality works
2. **Check images**: Ensure all images in `/public/images/` load correctly
3. **SEO**: Add proper metadata to each page using Next.js `metadata` exports
4. **Performance**: Consider using Next.js Image component for optimized images
5. **API Routes**: If needed, add API routes in the `app/api/` directory

## Migration Notes

- The old `src/` directory can safely be deleted after verification
- Vite config files (`vite.config.js`, `index.html`) are no longer needed
- The new eslint config uses Next.js conventions
- All client-side features use the `'use client'` directive as required

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended - one-click deployment)
- **Netlify**
- **AWS** (with adapter)
- **Docker** containers
- Any Node.js hosting platform

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

---

Converted to Next.js 15 on December 11, 2024
