<script setup lang="ts">
import BasicLayout from './components/layouts/BasicLayout.vue'
import Index from './views/index.vue'
import { onMounted } from 'vue'
onMounted(() => {
  const loading = document.querySelector('#loading-app')
  document.body.removeChild(loading!)
})
</script>

<template>
  <Index>
    <BasicLayout> </BasicLayout>
  </Index>
</template>

<style scoped></style>
