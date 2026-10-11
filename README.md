# Anurag.dev — Personal Developer Portfolio

> A modern, premium, dark-themed personal portfolio website for **Anurag Prasad Sah**, First-Year B.Tech Computer Science and Engineering student at **Shoolini University**.

---

## 🌟 Highlights & Features

- **Honest & Authentic**: Proudly and transparently showcases **0 Completed Projects** with a creative "My Journey Starts Here" incubator state. Zero fake stats, fake achievements, or exaggerated claims.
- **Sophisticated Aesthetics**: Deep midnight space palette (`#07090e`, `#0b1120`), electric cyan & vibrant purple gradient glows, subtle glassmorphism (`backdrop-filter: blur`), and custom grid ambient lighting.
- **Interactive Developer Terminal**: Hero section features a high-tech terminal previewing code snippets across `profile.json`, `main.cpp`, and `status.sh` with live syntax highlighting and orbital badges.
- **Vertical Education Timeline**: Elegant timeline featuring Shoolini University (B.Tech CSE), Om National Academy (+2 Science), and Shubha Tara Secondary School (Class 10).
- **Curated Skills Matrix**: Honest skill categories (Programming, Web Foundations, Developer Tools, CS Fundamentals) with interactive category filtering.
- **Currently Exploring**: Dedicated section detailing learning paths (C/C++ mechanics, Web development, Problem solving & DSA, Developer workflow).
- **Interactive Features**:
  - One-click **Copy Email** to clipboard with toast notification.
  - Interactive **Suggest a Project Idea** modal.
  - Theme accent switcher (Electric Cyan, Neon Purple, Emerald Green).
  - Ambient particle starlight canvas effect.
  - Scroll progress bar and smooth scroll-spy navigation.
  - Fully responsive on mobile, tablet, and widescreen displays.
  - Web accessibility standards: semantic HTML5, keyboard navigation (`Escape`, focus rings, `skip-link`).

---

## 🚀 Quick Start / Local Preview

Because this portfolio is built with modern, zero-dependency HTML5, CSS3, and JavaScript, you can run it instantly without needing `npm install` or complex build configurations!

### Method 1: Python Local Server (Recommended)
```bash
# Navigate to the portfolio folder
cd anuragportfolio

# Start a local web server (Python 3)
python3 -m http.server 3000
```
Then open your browser and visit:
👉 `http://localhost:3000`

### Method 2: Double-Click
Simply double-click `index.html` in your file manager to open it in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🛠️ How to Customize Your Portfolio

All personal data, links, education details, and skills are centralized in:
📁 **`js/config.js`**

### 1. Update Contact Links & Email
Open `js/config.js` and edit the `contact` object:
```javascript
contact: {
  email: "your.actual.email@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  discord: "your_handle#0001",
  locationDisplay: "Shoolini University, Solan, HP"
}
```

### 2. When You Build Your First Project!
When you finish your first project, you can easily add project cards to `PORTFOLIO_DATA.projects` or update the `projectsStatus` object in `js/config.js`.

---

## 🌐 Free Deployment Options

1. **GitHub Pages**:
   - Create a repository named `portfolio` (or `<your-username>.github.io`).
   - Push these files to the repository.
   - Go to **Settings > Pages** and select the `main` branch. Your site will be live instantly!

2. **Vercel / Netlify**:
   - Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com/) for zero-config instant free hosting with custom domain support.

---

Designed & Built with ❤️ for **Anurag Prasad Sah**.
