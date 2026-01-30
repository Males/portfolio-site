# Quick Setup Guide

This guide will help you customize your portfolio site, even if you're not a developer.

## What You'll Need

1. A code editor (like [VS Code](https://code.visualstudio.com/) - it's free!)
2. A GitHub account (sign up at [github.com](https://github.com))
3. Basic command line knowledge (we'll guide you)

## Quick Start (5 Minutes)

### Step 1: Update Your Projects

1. Open the file `src/data/projects.js` in your code editor
2. You'll see 6 placeholder projects
3. For each project, update:
   - **title**: Your project name
   - **description**: A brief description (1-2 sentences)
   - **image**: A URL to your project image (see image tips below)
   - **url**: Link to your project (use "#" if you don't have one yet)

**Image Tips:**
- Use Unsplash for free stock photos: `https://source.unsplash.com/800x600/?design`
- Or use your own images: Put them in the `public/images/` folder and reference as `/images/your-image.jpg`
- Recommended size: 800x600 pixels

### Step 2: Update Your Work History

1. Open `src/data/employment.js`
2. Update each job entry with:
   - **title**: Your job title
   - **company**: Company name
   - **years**: Time period (e.g., "2020-2023")
   - **url**: Company website (optional)

### Step 3: Update Personal Info

1. Open `src/components/Navigation.jsx`
   - Line 13: Change "adam males" to your name
   - Line 16: Change "Product designer, Founder" to your title

2. Open `src/components/Hero.jsx`
   - Line 8: Change "Adam Males" to your name
   - Line 11: Change "Product designer leader" to your role

3. Open `index.html`
   - Line 15: Change the page title

## Testing Your Changes

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to your project folder:
   ```bash
   cd path/to/portfolio-site
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`
5. You should see your changes! The page will automatically refresh when you save files.

## Publishing to the Web

### Option 1: GitHub Pages (Free!)

1. Create a new repository on GitHub
2. In your Terminal, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. Update two files with your repository name:
   - `vite.config.js` line 9: Change `/portfolio-site/` to `/YOUR-REPO-NAME/`
   - `package.json` line 12: Update the homepage URL

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Select `gh-pages` branch
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

### Option 2: Netlify (Also Free!)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder (created when you run `npm run build`)
3. Done! Netlify gives you a free URL

## Customization

### Change the Blue Link Color

1. Open `src/index.css`
2. Line 4: Change `#0066CC` to your preferred color
3. Save and refresh your browser

### Add More Projects

1. Open `src/data/projects.js`
2. Copy an existing project object
3. Paste it at the end of the array (before the closing `]`)
4. Update the details
5. Don't forget the comma after each project!

Example:
```javascript
{
  title: "New Project",
  description: "Description here",
  image: "https://...",
  url: "#"
},  // ← Don't forget this comma!
```

## Common Issues

### "Command not found" errors
- Make sure you've installed Node.js
- Restart your Terminal after installing

### Changes aren't showing
- Make sure you saved the file (Cmd+S or Ctrl+S)
- Check the Terminal for errors
- Try stopping the server (Ctrl+C) and running `npm run dev` again

### Build fails
- Run `npm install` to make sure all dependencies are installed
- Check for syntax errors (missing commas, quotes, etc.)

## Need Help?

1. Check the main [README.md](README.md) for detailed documentation
2. Look at the code comments in each file
3. Google the error message (seriously, it works!)
4. Ask a developer friend to review your changes

## File Structure Quick Reference

```
src/data/          ← Your content lives here
  ├── employment.js  (Work history)
  └── projects.js    (Portfolio projects)

src/components/    ← Page sections
  ├── Navigation.jsx (Top navigation)
  ├── Hero.jsx      (Main header)
  └── ...

index.html         ← Page title and meta tags
```

---

**Remember:** You can't break anything permanently! If something goes wrong, you can always undo your changes or start fresh. Happy customizing! 🎨
