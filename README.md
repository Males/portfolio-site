# Adam Males - Portfolio Site

A clean, minimal portfolio website built with React, Vite, and Tailwind CSS. Inspired by modern, content-first design principles.

## Features

- 🎨 Clean, minimal aesthetic with generous whitespace
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Lightning-fast performance with Vite
- 🎯 Easy content management through data files
- 🚀 Ready for GitHub Pages deployment

## Project Structure

```
portfolio-site/
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── EmploymentHistory.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectList.jsx
│   │   └── Footer.jsx
│   ├── data/              # Content data files
│   │   ├── employment.js  # Employment history
│   │   └── projects.js    # Project portfolio
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                # Static assets
├── index.html
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Updating Content

This portfolio is designed to be easy to update, even if you're not a developer. All content is managed through simple data files.

### Updating Employment History

1. Open `src/data/employment.js`
2. Edit the existing entries or add new ones:

```javascript
{
  title: "Your Job Title",
  company: "Company Name",
  years: "2023-2025",
  url: "https://company.com"  // Optional
}
```

3. For italic text (like the "+10 more years" entry), add `isItalic: true`

### Updating Projects

1. Open `src/data/projects.js`
2. Edit the existing projects or add new ones:

```javascript
{
  title: "Project Name",
  description: "Brief description of the project and outcome.",
  image: "https://your-image-url.com/image.jpg",
  url: "https://project-url.com"
}
```

#### Adding Your Own Images

Option 1: Use external URLs (as shown above)

Option 2: Add images to the project:
1. Place your images in the `public/images/` folder
2. Reference them in projects.js: `image: "/images/your-image.jpg"`

### Updating Personal Information

- **Name and title in navigation**: Edit `src/components/Navigation.jsx`
- **Hero section**: Edit `src/components/Hero.jsx`
- **Site title and meta tags**: Edit `index.html`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deploying to GitHub Pages

### First-time Setup

1. Update the repository name in `vite.config.js`:
   ```javascript
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```

2. Update the homepage in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

3. Make sure your repository is initialized:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

### Deploy

Run the deployment command:
```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy it to the `gh-pages` branch
3. Make it available at `https://yourusername.github.io/your-repo-name`

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select the `gh-pages` branch
4. Click "Save"

Your site will be live in a few minutes!

## Using a Custom Domain

If you want to use a custom domain instead of GitHub Pages:

1. Update `vite.config.js`:
   ```javascript
   base: '/',  // Remove the conditional
   ```

2. Add a `CNAME` file to the `public` folder with your domain name

3. Follow [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Customization

### Colors

The main brand color (link blue) can be changed in `src/index.css` using the `@theme` directive:

```css
@theme {
  --color-link-blue: #0066CC;  /* Change this hex code */
}
```

### Typography

The site uses Inter font. To change it, update:
1. The Google Fonts link in `index.html`
2. The font family in `src/index.css` under the `@theme` directive:

```css
@theme {
  --font-family-sans: Your-Font, system-ui, sans-serif;
}
```

### Spacing and Layout

All spacing uses Tailwind's utility classes. Common adjustments:
- Padding: Change `px-6 md:px-12` values in components
- Section gaps: Change `py-12 md:py-16` values
- Grid layout: Modify `grid-cols-*` in ProjectList.jsx

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **gh-pages** - GitHub Pages deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Questions or Issues?

If you encounter any problems or have questions, please:
1. Check this README first
2. Review the code comments in each file
3. Open an issue on GitHub

---

Built with ❤️ using React and Tailwind CSS
