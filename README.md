# Benubina - React Portfolio

A modern, professional React portfolio website for Benubina software development agency. **Fully converted from Next.js and ready for cPanel deployment!**

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✅ Conversion Complete!

Your Next.js project has been successfully converted to **React + Vite**:

- ⚛️ React 18 with hooks
- ⚡ Vite for fast builds
- 🔀 React Router for navigation
- 🎨 Tailwind CSS maintained
- 🌓 Dark mode working
- 📱 Fully responsive
- 🎯 **Ready for cPanel deployment**

## 📦 What's Included

### Pages (All Converted ✅)
- **Home** (`/`) - Hero, services, stats, testimonials
- **About** (`/about`) - Company story, mission, vision
- **Who We Are** (`/who-we-are`) - Team showcase
- **Portfolio** (`/portfolio`) - Project gallery
- **Contact** (`/contact`) - Contact form

### Components
- **Navbar** - Responsive navigation with React Router
- **Footer** - Multi-column footer
- **ThemeToggle** - Dark/Light mode
- **Layout** - Page wrapper with Navbar & Footer

## 🌐 Deploy to cPanel

### Step-by-Step:

1. **Build your project:**
```bash
npm run build
```

2. **Upload to cPanel:**
   - Log in to cPanel File Manager
   - Go to `public_html`
   - Upload ALL files from the `dist/` folder
   - Make sure `.htaccess` is included

3. **Done!** Your site is live!

📖 **Detailed Guide**: See [CPANEL_DEPLOYMENT.md](./CPANEL_DEPLOYMENT.md)

## 📁 Project Structure

```
src/
├── components/      # Navbar, Footer, ThemeToggle, Layout
├── pages/          # Home, About, WhoWeAre, Portfolio, Contact
├── context/        # ThemeContext for dark mode
├── App.jsx         # Main app with React Router
├── main.jsx        # React entry point
└── index.css       # Global styles

public/
├── images/         # Your image directories
└── .htaccess       # Apache config (IMPORTANT!)

dist/               # Production build (after npm run build)
```

## 🎨 Customization

### Update Content
Edit files in `src/pages/` to change content.

### Add Images
Place images in `public/images/` and reference as `/images/your-image.jpg`

### Change Colors
Edit `tailwind.config.js` - Primary color is Emerald Green (#059669)

## 🔧 Configuration

- **Vite**: `vite.config.js`
- **Tailwind**: `tailwind.config.js`
- **Routing**: `.htaccess` in public folder
- **Theme**: `src/context/ThemeContext.jsx`

## 📱 All Features Working

✅ Responsive design
✅ Dark/Light mode  
✅ Smooth animations
✅ Client-side routing
✅ Mobile menu
✅ Contact form
✅ SEO optimized
✅ Fast performance

## 🔄 Making Changes

```bash
# 1. Edit your files
# 2. Test locally
npm run dev

# 3. Build
npm run build

# 4. Upload dist/ contents to cPanel
```

## 🆘 Troubleshooting

**Blank page after deployment?**
- Check if `.htaccess` is uploaded
- Clear browser cache
- Check browser console for errors

**404 on page refresh?**
- `.htaccess` file is missing or incorrect

**Images not loading?**
- Make sure `images/` folder is uploaded
- Check file paths start with `/images/`

## 🚀 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Test locally: `npm run dev`
3. ✅ Add your images to `public/images/`
4. ✅ Customize content in `src/pages/`
5. ✅ Build: `npm run build`
6. ✅ Deploy to cPanel (see CPANEL_DEPLOYMENT.md)
7. 🔜 Integrate with Laravel backend

## 📊 Tech Stack

- React 18.2
- Vite 5.0
- React Router 6.21
- Tailwind CSS 3.4
- PostCSS & Autoprefixer

## 🎯 Ready for Production

The build is optimized with:
- Code splitting
- Tree shaking
- Minification
- Asset optimization
- Gzip compression

## 📖 Documentation

- [CPANEL_DEPLOYMENT.md](./CPANEL_DEPLOYMENT.md) - Detailed deployment guide
- [CONVERSION_SUMMARY.md](./CONVERSION_SUMMARY.md) - What was converted
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Project overview

---

**Built for cPanel deployment** | **Laravel-ready backend integration** | **Professional & Fast**
