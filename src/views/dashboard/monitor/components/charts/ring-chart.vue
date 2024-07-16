<script setup>
import { RingProgress } from '@antv/g2plot'
defineOptions({ name: 'RingChart' })
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  }
})
const ringContainer = ref()
const ring = ref()
onMounted(() => {
  ring.value = new RingProgress(ringContainer.value, props.options)
  ring.value?.render()
})
onBeforeUnmount(() => {
  ring.value?.destroy()
})
</script>

<template>
  <div ref="ringContainer"></div>
</template>

<style scoped></style>
