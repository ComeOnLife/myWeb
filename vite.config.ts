import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "src"),
      "assets": path.resolve(__dirname, "src/assets"),
      "common": path.resolve(__dirname, "src/common"),
      "component": path.resolve(__dirname, "src/component"),
      "pages": path.resolve(__dirname, "src/pages"),
      "router": path.resolve(__dirname, "src/router"),
    }
  }
})
