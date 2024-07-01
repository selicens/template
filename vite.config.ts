import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

import vueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: [
        'vue',
        'pinia',
        VueRouterAutoImports
      ],
      dts: true,
    }),
    components({
      dts: true,
      extensions: ['vue'],
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        })
      ]
    }),
    vueRouter({
      routesFolder: [{
        src: 'src/views'
      }],
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/mock/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock/, '')
      }
    }
  }
})
