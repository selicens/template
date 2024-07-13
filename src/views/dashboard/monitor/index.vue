<script setup>
defineOptions({ name: 'Monitor' })
</script>

<template>
  <a-flex vertical gap="16">
    <a-row :gutter="24">
      <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card title="活动实时交易情况">
          content<br />
          content<br />
          content<br />
          content<br />
          content<br />
          content<br />
          content<br />
          content
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-flex vertical gap="16">
          <a-card title="活动情况预测">content</a-card>
          <a-card title="卷核效率">content</a-card>
        </a-flex>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card title="各品类占比">content</a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: 24 }">
        <a-card title="热门搜索">content</a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: 24 }">
        <a-card title="资源剩余">content</a-card>
      </a-col>
    </a-row>
  </a-flex>
</template>

<style scoped></style>
