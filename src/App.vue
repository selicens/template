<script setup lang="ts">
import BasicLayout from 'pro-layout'
import Index from './views/index.vue'
import { onMounted } from 'vue'
onMounted(() => {
  const loading = document.querySelector('#loading-app')
  document.body.removeChild(loading!)
})
</script>

<template>
  <a-config-provider>
    <a-app>
      <Index>
        <BasicLayout> </BasicLayout>
      </Index>
    </a-app>
  </a-config-provider>
</template>

<style scoped></style>
