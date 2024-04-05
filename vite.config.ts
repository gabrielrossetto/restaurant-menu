import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: false,
    proxy: {
      '/api-menu': {
        target: 'https://cdn-dev.preoday.com/challenge/menu',
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p.replace(/^\/api-menu/, ""),
      },
      '/api-settings': {
        target: 'https://cdn-dev.preoday.com/challenge/venue/9',
        changeOrigin: true,
        secure: false,
        rewrite: (p) => p.replace(/^\/api-settings/, ""),
      },
    },
  },
  plugins: [react()],
})
