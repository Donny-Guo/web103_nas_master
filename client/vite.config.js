import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: "../server/public",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        product: resolve(__dirname, "product.html"),
        notFound: resolve(__dirname, "404.html")
      }
    }
  },
  server: {
    proxy: {
      "/products": {
        target: "http://localhost:3001"
      }
    }
  }
})