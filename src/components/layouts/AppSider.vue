<script setup lang="ts">
import { LeftOutlined, RightOutlined } from '@antdv-next/icons'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  collapsed: boolean
  showLogo: boolean
  fullHeight: boolean
  menuItems: { key: string; label: string; icon?: string; children?: { key: string; label: string }[] }[]
}>()

const emit = defineEmits<{
  menuClick: [e: { key: string }]
  toggleCollapsed: []
}>()

const route = useRoute()
const { t } = useI18n()

const handleMenuClick = ({ key }: { key: string }) => {
  emit('menuClick', { key })
}
</script>

<template>
  <a-layout-sider
    :collapsed="collapsed"
    collapsible
    :trigger="null"
    width="208"
    :class="{ 'sider-full-height': fullHeight }"
  >
    <div v-if="showLogo" class="logo">
      <h1 v-if="!collapsed">{{ t('layout.appTitle') }}</h1>
      <h1 v-else>{{ t('layout.appTitleShort') }}</h1>
    </div>
    <a-menu
      mode="inline"
      :selected-keys="[route.path]"
      :items="menuItems"
      @click="handleMenuClick"
      :classes="{ root: 'inline-menu' }"
    />
    <div class="toggle-btn" :class="{ collapsed }">
      <a-button shape="circle" size="small" @click="emit('toggleCollapsed')">
        <LeftOutlined v-if="!collapsed" />
        <RightOutlined v-else />
      </a-button>
    </div>
  </a-layout-sider>
</template>

<style scoped>
.sider-full-height {
  height: 100vh !important;
}

:deep(.ant-layout-sider) {
  min-height: 100vh !important;
}

:deep(.ant-layout-sider-children) {
  min-height: 100% !important;
}

:deep(.ant-layout-sider-trigger) {
  display: none;
}

:deep(.ant-layout-sider-logo) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
}

:deep(.ant-layout-sider-logo h1) {
  margin: 0;
  white-space: nowrap;
  font-size: 20px;
  font-weight: bold;
  color: var(--ant-color-text);
}

:deep(.ant-layout-sider-children) {
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  border-right: 1px solid var(--ant-color-border);
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: var(--ant-color-text);
}

.logo h1 {
  margin: 0;
  white-space: nowrap;
}

.toggle-btn {
  box-sizing: border-box;
  position: absolute;
  inset-block-start: 18px;
  z-index: 101;
  width: 24px;
  height: 24px;
  text-align: center;
  border-radius: 40px;
  inset-inline-end: -13px;
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ant-color-text-secondary);
  background-color: var(--ant-color-bg-container);
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(25, 15, 15, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.08);
}
</style>
