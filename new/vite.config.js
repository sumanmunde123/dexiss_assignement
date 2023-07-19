import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // server: {
  //   // Add a custom route for serving the pdf.worker.js file
  //   // Configure the route to match the correct file location
  //   // The route should start with '/pdf/'
  //   // The response should use the correct MIME type 'application/javascript'
  //   // Adjust the file path to match your project structure
  //   fs: {
  //     strict: true,
  //     // Allow serving files from public folder
  //     allow: ['..'],
  //   },
  //   proxy: {
  //     '/pdf': {
  //       target: '/pdf',
  //       changeOrigin: true,
  //     },
  //   },
  // },
  server: {
    middleware: {
      '/pdf.worker.js': (req, res, next) => {
        res.setHeader('Content-Type', 'application/javascript');
        res.sendFile(resolve(__dirname, 'middleware/pdfWorker.js'));
      },
    },
  },
  
})
