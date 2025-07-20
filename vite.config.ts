import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 4200,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4200',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
