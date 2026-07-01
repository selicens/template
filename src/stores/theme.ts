import { ref } from 'vue'
import { defineStore } from 'pinia'

export type LayoutMode = 'mixed' | 'side' | 'top'

export const useThemeStore = defineStore('theme', () => {
  const dark = ref(false)
  const layoutMode = ref<LayoutMode>('mixed')
  const watermark = ref(true)

  function toggle() {
    dark.value = !dark.value
  }

  return { dark, layoutMode, watermark, toggle }
})