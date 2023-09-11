import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // AWS EC2 port choose
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 80, // Use port 80 for HTTP
  },
})
