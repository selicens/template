<script setup>
import { ref } from 'vue';

  defineOptions({ name: 'Analytics' })
  const activeKey = ref('1');
</script>

<template>
  <a-flex vertical gap="16">
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <a-card :loading="loading" :bordered="false" title="总销售额" :style="{ height: '100%' }">
          content
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <a-card :loading="loading" :bordered="false" title="访问量" :style="{ height: '100%' }">
          content
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <a-card :loading="loading" :bordered="false" title="支付笔数" :style="{ height: '100%' }">
          content
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <a-card :loading="loading" :bordered="false" title="运营活动效果" :style="{ height: '100%' }">
          content
        </a-card>
      </a-col>
    </a-row>
    <a-card width="100%">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="销售额">销售额</a-tab-pane>
        <a-tab-pane key="2" tab="访问量">访问量</a-tab-pane>
      </a-tabs>
    </a-card>
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="线上热门搜索">content</a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="销售额类别占比">content</a-card>
      </a-col>
    </a-row>
    <a-card>
      content
    </a-card>
  </a-flex>
</template>

<style scoped></style>
