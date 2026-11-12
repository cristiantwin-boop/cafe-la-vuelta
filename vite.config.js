import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import contactHandler from './api/contact.js';

export default defineConfig({
  server: { allowedHosts: ['.trycloudflare.com'] },
  preview: { allowedHosts: ['.trycloudflare.com'] },
  plugins: [
    react(),
    {
      name: 'contact-api',
      configureServer(server) {
        server.middlewares.use('/api/contact', contactHandler);
      },
      configurePreviewServer(server) {
        server.middlewares.use('/api/contact', contactHandler);
      },
    },
  ],
});
