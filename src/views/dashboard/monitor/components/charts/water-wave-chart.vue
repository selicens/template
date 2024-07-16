<script setup>
import { Liquid } from '@antv/g2plot'
defineOptions({ name: 'WaterWaveChart' })
const waterContainer = ref()
const water = ref()
onMounted(() => {
  water.value = new Liquid(waterContainer.value, {
    height: 161,
    percent: 0.35,
    outline: {
      border: 2,
      distance: 3
    },
    statistic: {
      content: {
        style: {
          fontSize: '17px'
        }
      }
    },
    wave: {
      length: 128
    }
  })
  water.value?.render()
})
onBeforeUnmount(() => {
  water.value?.destroy()
})
</script>

<template>
  <div ref="waterContainer"></div>
</template>

<style scoped></style>
