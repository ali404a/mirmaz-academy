import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        app: resolve(__dirname, 'app.html'),
        contact: resolve(__dirname, 'contact.html'),
        courses: resolve(__dirname, 'courses.html'),
        news: resolve(__dirname, 'news.html'),
        offers: resolve(__dirname, 'offers.html'),
        pos: resolve(__dirname, 'pos.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        sections: resolve(__dirname, 'sections.html'),
        support: resolve(__dirname, 'support.html'),
        teachers: resolve(__dirname, 'teachers.html'),
        terms: resolve(__dirname, 'terms.html')
      }
    }
  }
})
