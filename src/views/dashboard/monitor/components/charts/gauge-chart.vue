<script setup>
import { Gauge } from '@antv/g2plot'
defineOptions({ name: 'GaugeChart' })
const gaugeContainer = ref()
const gauge = ref()
onMounted(() => {
  gauge.value = new Gauge(gaugeContainer.value, {
    height: 180,
    percent: 0.87,
    range: {
      ticks: [0, 1 / 4, 1 / 2, 3 / 4, 1],
      color: ['#6395fa', '#62daab', '#657798', '#f7c122']
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100
        }
      },
      subTickLine: {
        count: 3
      }
    },
    statistic: {
      content: {
        content: '优',
        style: {
          color: '#30bf78'
        }
      }
    }
  })
  gauge.value?.render()
})
onBeforeUnmount(() => {
  gauge.value?.destroy()
})
</script>

<template>
  <div ref="gaugeContainer" />
</template>

<style scoped></style>
