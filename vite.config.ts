import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import ElementPlus from 'unplugin-element-plus/vite';
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({}),
    viteCompression()
  ],
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
  },
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8081',
        // target: 'http://43.138.174.116:8080',
        target: 'http://www.moqiang.fun',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
//./configure --prefix=/usr/local/nginx --with-http_gzip_static_module
