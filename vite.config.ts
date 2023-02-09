import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/main.scss";`
      }
    }
  },
  plugins: [
    vue({
      reactivityTransform: true
    }),
    createHtmlPlugin()
  ],
  server: {
    port: 8080,
    cors: true
  }
})
