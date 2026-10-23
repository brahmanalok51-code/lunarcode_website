import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-core': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
         
          'framer-motion': ['framer-motion'],
          'lucide-icons': ['lucide-react'],
          'i18n-bundle': ['i18next', 'react-i18next'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});