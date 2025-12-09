# 🚀 Quick Start Guide - React Portfolio

## ⚡ Get Started in 3 Steps

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 3️⃣ Build for Production

```bash
npm run build
```

Your production files will be in the `dist/` folder.

---

## 📤 Deploy to cPanel

### Quick Deployment Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Log into cPanel:**
   - Open your cPanel control panel
   - Go to **File Manager**

3. **Navigate to public_html:**
   - Click on `public_html` folder
   - **Delete** existing files (or backup first)

4. **Upload your build:**
   - Click **Upload** button
   - Upload ALL files and folders from your `dist/` directory:
     - `index.html`
     - `assets/` folder
     - `images/` folder  
     - `.htaccess` file
     - Any other files in `dist/`

5. **Set permissions (if needed):**
   - Files: 644
   - Folders: 755

6. **Visit your website!**
   - Go to your domain
   - All pages should work perfectly

---

## 📋 Available Commands

```bash
# Development
npm run dev          # Start dev server on localhost:3000
npm run build        # Build for production (creates dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint

# Installation
npm install          # Install all dependencies
```

---

## 📁 Project Structure

```
benubina-portfolio/
├── src/
│   ├── pages/           # 5 pages: Home, About, WhoWeAre, Portfolio, Contact
│   ├── components/      # Navbar, Footer, ThemeToggle, Layout
│   ├── context/         # ThemeContext
│   ├── App.jsx          # React Router setup
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind styles
├── public/
│   ├── images/          # Your images here
│   └── .htaccess        # For Apache routing
├── dist/                # Production build (after npm run build)
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

---

## 🎨 Adding Your Content

### Images

1. Place in `public/images/`
2. Reference as: `/images/your-image.jpg`

### Content

Edit files in `src/pages/`:
- `Home.jsx` - Homepage
- `About.jsx` - About page
- `WhoWeAre.jsx` - Team page
- `Portfolio.jsx` - Projects
- `Contact.jsx` - Contact form

### Styling

- Edit `tailwind.config.js` for theme colors
- Edit `src/index.css` for global styles
- Primary color: Emerald Green (#059669)

---

## ✅ Features

✅ React 18 + Vite
✅ React Router for navigation
✅ Tailwind CSS styling
✅ Dark/Light mode
✅ Fully responsive
✅ SEO optimized
✅ Fast performance
✅ Ready for cPanel

---

## 🆘 Common Issues

### **Blank Page After Deployment**
- Make sure `.htaccess` is uploaded
- Clear browser cache
- Check browser console for errors

### **404 on Page Refresh**
- `.htaccess` is missing or not in the root of public_html
- Verify file is named `.htaccess` (not `htaccess.txt`)

### **Images Not Loading**
- Check images are in `public/images/`
- Verify file paths: `/images/file.jpg` (must start with `/`)
- Check file permissions (644)

### **Styles Not Applied**
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Make sure `assets/` folder is uploaded from `dist/`

---

## 📖 Documentation

- **REACT_CONVERSION_COMPLETE.md** - Detailed conversion info
- **CPANEL_DEPLOYMENT.md** - Complete deployment guide
- **README.md** - Full project documentation

---

## 🎯 Checklist Before Deployment

- [ ] Run `npm run build` successfully
- [ ] Check `dist/` folder exists with files
- [ ] Test `npm run preview` locally
- [ ] Add your images to `public/images/`
- [ ] Update content in page files
- [ ] Verify `.htaccess` is in `public/` folder
- [ ] Test all pages in development
- [ ] Check mobile responsiveness
- [ ] Verify dark mode works

---

## 🚀 Next Steps

1. **Test everything locally** with `npm run dev`
2. **Add your images** to `public/images/`
3. **Customize content** in `src/pages/`
4. **Build** with `npm run build`
5. **Deploy** to cPanel (see CPANEL_DEPLOYMENT.md)
6. **Integrate Laravel backend** (future step)

---

## 💡 Pro Tips

- Use `npm run preview` to test the production build locally before deploying
- Always keep a backup of your current live site before uploading
- Use FileZilla or WinSCP for easier file uploads
- Enable Gzip compression in cPanel for better performance
- Add your favicon.ico to the `public/` folder

---

## ✨ You're All Set!

Your React portfolio is ready to deploy. Follow the steps above and you'll be live in minutes!

**Questions?** Check the detailed guides in:
- CPANEL_DEPLOYMENT.md
- REACT_CONVERSION_COMPLETE.md

**Happy deploying! 🎉**
