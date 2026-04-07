import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site path: https://<user>.github.io/Portfolio_Website/
  base: '/Portfolio_Website/',
})

