// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // If you prefer to treat .js files as JSX, add the following:
  /*
  esbuild: {
    loader: 'jsx', // Set loader to jsx
    include: /src\/.*\.js$/, // Apply to all .js files in src
  },
  */

    server: {
      port: 3000, // Change this to your desired port
    },
});
