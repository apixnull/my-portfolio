import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'flowise-embed': ['flowise-embed-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Increased limit to accommodate flowise-embed-react (1MB+)
  },
})

