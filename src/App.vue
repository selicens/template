<script setup lang="ts">
import BasicLayout from './components/layouts/BasicLayout.vue';
import { onMounted } from 'vue';
onMounted(() => {
  const loading = document.querySelector('#loading-app')
  document.body.removeChild(loading);
});
</script>

<template>
  <BasicLayout>
  </BasicLayout>
</template>

<style scoped></style>
