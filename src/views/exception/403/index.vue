<script setup>
defineOptions({ name: '403' })
</script>

<template>
  <a-result status="403" title="403" sub-title="Sorry, you don't have access to this page.">
    <template #extra>
      <a-button type="primary" @click="() => $router.push('/')">Back Home</a-button>
    </template>
  </a-result>
</template>

<style scoped></style>
