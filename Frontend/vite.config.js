import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';

// Set DNS resolution order
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // You can also set this to true for local network access
    port: 3000, // You can change this to any port you prefer
  },
});
