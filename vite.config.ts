import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from "rollup-plugin-visualizer"
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), visualizer({ open: true })],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          icons: ["lucide-react"],
          motion: ["motion"]
        }
      }
    }
  }
})
