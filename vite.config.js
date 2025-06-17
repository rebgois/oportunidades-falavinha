import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  plugins: [
    vue({ template: { transformAssetUrls } }),
    vuetify({ autoImport: true }),
  ],
})