import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from '@vercel/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],

})
