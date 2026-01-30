import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to repo name for GitHub Pages, or '/' for custom domain
  // Change '/portfolio-site/' to your repository name
  base: process.env.NODE_ENV === 'production' ? '/portfolio-site/' : '/',
})
