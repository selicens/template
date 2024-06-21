<script setup>
  defineOptions({ name: 'Analytics' })
</script>

<template>
  <div>
    <a-row>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <a-card :loading="loading" :bordered="false" title="访问量" :style="{ height: '100%' }">
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped></style>
