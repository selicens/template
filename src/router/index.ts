import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

// const configs = import.meta.glob('../views/**/index.ts', { eager: true, import: 'default' })
// const components = import.meta.glob('../views/**/index.vue', { eager: true, import: 'default' })

// const generateStaticRoutes = Object.entries(configs).map(([key, value]) => {
//   const path = key.replace('../views', '').replace('/index.ts', '') || '/'
//   const name = path.split('/').filter(Boolean).join('-') || 'index'
//   const componentPath = key.replace('index.ts', 'index.vue')

//   return {
//     path,
//     name,
//     component: components[componentPath],
//     meta: value,
//     children: []
//   }
// })
// const buildNestedRoutes = (routes: RouteRecordRaw[]) => {
//   const routeMap: Record<string, RouteRecordRaw> = {}

//   routes.forEach((route) => {
//     const parts = route.path.split('/').filter(Boolean)
//     let currentLevel: Record<string, RouteRecordRaw> = routeMap

//     parts.forEach((part, index) => {
//       if (!currentLevel[part]) {
//         currentLevel[part] = {
//           path: `/${parts.slice(0, index + 1).join('/')}`,
//           name: parts.slice(0, index + 1).join('-'),
//           children: [],
//           component: null,
//           meta: {}
//         }
//       }

//       if (index === parts.length - 1) {
//         currentLevel[part] = {
//           ...currentLevel[part],
//           component: route.component,
//           meta: route.meta
//         }
//       }

//       currentLevel = currentLevel[part].children
//     })
//   })

//   const buildRoutesArray = (routeObj: Record<string, RouteRecordRaw>) => {
//     return Object.values(routeObj).map((route) => ({
//       ...route,
//       children: buildRoutesArray(route.children)
//     }))
//   }

//   return buildRoutesArray(routeMap)
// }
//console.log(buildNestedRoutes(generateStaticRoutes))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
