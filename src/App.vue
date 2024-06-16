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
  <!-- <a-layout style="min-height: 100vh">
    <a-layout-sider>
      <div class="logo" />
      <a-menu defaultSelectedKeys="1" mode="inline">
        <a-menu-item key="1" icon="dashboard">
          Dashboard
        </a-menu-item>
        <a-menu-item key="2" icon="pie-chart">
          分析页
        </a-menu-item>
        <a-menu-item key="3" icon="desktop">
          监控页
        </a-menu-item>
        <a-menu-item key="4" icon="form">
          工作台
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
          <a-breadcrumb-item>工作台</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="site-layout-content">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design Pro ©2023 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout> -->
</template>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout-content {
  padding: 24px;
  background: #fff;
  min-height: 360px;
}
</style>
