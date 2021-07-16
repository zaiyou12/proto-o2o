import {resolve} from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import analyzer from 'rollup-plugin-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(),
  analyzer({ summaryOnly: true })],
})
