<script setup>
defineOptions({ name: 'Monitor' })
</script>

<template>
  <a-flex vertical gap="16">
    <a-row :gutter="12">
      <a-col :span="12">
        <a-card title="活动实时交易情况">
          content<br>
          content<br>
          content<br>
          content<br>
          content<br>
          content<br>
          content<br>
          content
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-flex vertical gap="16">
          <a-card title="活动情况预测">content</a-card>
          <a-card title="卷核效率">content</a-card>
        </a-flex>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :span="12">
        <a-card title="各品类占比">content</a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="热门搜索">content</a-card>
      </a-col>
      <a-col :span="6">
        <a-card title="资源剩余">content</a-card>
      </a-col>
    </a-row>
  </a-flex>
</template>

<style scoped></style>
