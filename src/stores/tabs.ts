import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { defineStore } from 'pinia'

export interface TabItem {
  key: string
  title: string
  closable: boolean
}

declare module "vue-router" {
  interface RouteMeta {
    title?: string
  }
}

export const useTabStore = defineStore('tabs', () => {
  const route = useRoute()
  const router = useRouter()

  const tabs = ref<TabItem[]>([{ key: "/", title: 'menu.home', closable: false }]);

  const activeKey = ref('/')

  function getTitle(path: string): string {
    const targetRoute = router.getRoutes().find(r => r.path === path)
    return targetRoute?.meta?.title || path
  }

  function addTab(path: string) {
    if (!tabs.value.find(t => t.key === path)) {
      tabs.value.push({
        key: path,
        title: getTitle(path),
        closable: path !== '/',
      })
    }
    activeKey.value = path
  }

  function removeTab(key: string) {
    const idx = tabs.value.findIndex(t => t.key === key)
    if (idx === -1) return
    tabs.value.splice(idx, 1)
    if (activeKey.value === key) {
      const next = tabs.value[Math.min(idx, tabs.value.length - 1)]
      activeKey.value = next.key
      router.push(next.key)
    }
  }

  function activateTab(key: string) {
    activeKey.value = key
    router.push(key)
  }

  function closeAll() {
    const nonClosable = tabs.value.filter(t => !t.closable)
    tabs.value = nonClosable
    activeKey.value = nonClosable[0]?.key || '/'
    router.push(activeKey.value)
  }

  function closeOthers(key: string) {
    const current = tabs.value.find(t => t.key === key)
    if (!current) return
    const nonClosable = tabs.value.filter(t => !t.closable)
    tabs.value = current.closable
      ? [...nonClosable, current]
      : [current]
    activeKey.value = key
    router.push(key)
  }

  function closeLeft(key: string) {
    const idx = tabs.value.findIndex(t => t.key === key)
    if (idx === -1) return
    const current = tabs.value[idx]
    const keepRight = tabs.value.slice(idx)
    const nonClosableLeft = tabs.value.slice(0, idx).filter(t => !t.closable)
    tabs.value = [...nonClosableLeft, ...keepRight]
    activeKey.value = key
    router.push(key)
  }

  function closeRight(key: string) {
    const idx = tabs.value.findIndex(t => t.key === key)
    if (idx === -1) return
    const keepLeft = tabs.value.slice(0, idx + 1)
    const nonClosableRight = tabs.value.slice(idx + 1).filter(t => !t.closable)
    tabs.value = [...keepLeft, ...nonClosableRight]
    activeKey.value = key
    router.push(key)
  }

  function refresh() {
    // Triggered from AppContent to re-render the current view
  }

  // Sync tabs with route changes
  watch(
    () => route.path,
    (path) => {
      addTab(path)
    },
    { immediate: true }
  )

  return { tabs, activeKey, addTab, removeTab, activateTab, closeAll, closeOthers, closeLeft, closeRight, refresh }
})
