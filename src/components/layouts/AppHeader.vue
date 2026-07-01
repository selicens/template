<script setup lang="ts">
import { BulbOutlined, GlobalOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from '@antdv-next/icons'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  showTopMenu: boolean
  showLogo: boolean
  showHamburger?: boolean
  menuItems: { key: string; label: string; icon?: string; children?: { key: string; label: string }[] }[]
  userMenuItems: { key: string; label: string }[]
  langMenuItems: { key: string; label: string }[]
  themeMenuItems: { key: string; label: string }[]
}>()

const emit = defineEmits<{
  menuClick: [e: { key: string }]
  userMenuClick: [e: { key: string }]
  themeMenuClick: [e: { key: string }]
  langMenuClick: [e: { key: string }]
  toggleSider: []
}>()

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const handleMenuClick = ({ key }: { key: string }) => {
  emit('menuClick', { key })
}

const handleUserMenuClick = ({ key }: { key: string }) => {
  emit('userMenuClick', { key })
  if (key === 'logout') {
    router.push('/login')
  }
}

const handleThemeMenuClick = ({ key }: { key: string }) => {
  emit('themeMenuClick', { key })
}

const handleLangMenuClick = ({ key }: { key: string }) => {
  emit('langMenuClick', { key })
}
</script>

<template>
  <div class="header">
    <div class="header-left">
      <a-button
        v-if="showHamburger"
        type="text"
        shape="circle"
        class="hamburger-btn"
        @click="emit('toggleSider')"
      >
        <MenuOutlined />
      </a-button>
      <template v-if="showTopMenu">
        <a-menu
          mode="horizontal"
          :selected-keys="[route.path]"
          :items="menuItems"
          @click="handleMenuClick"
          class="top-menu"
          :classes="{ root: 'horizontal-menu' }"
        />
      </template>
      <template v-else-if="showLogo">
        <h1 class="logo-title">{{ t('layout.appTitle') }}</h1>
      </template>
    </div>
    <div class="header-right">
      <a-dropdown :menu="{ items: langMenuItems, onClick: handleLangMenuClick }">
        <div class="header-item">
          <GlobalOutlined />
        </div>
      </a-dropdown>
      <a-dropdown :menu="{ items: themeMenuItems, onClick: handleThemeMenuClick }">
        <div class="header-item">
          <BulbOutlined />
        </div>
      </a-dropdown>
      <a-dropdown :menu="{ items: userMenuItems, onClick: handleUserMenuClick }">
        <div class="user-info">
          <a-avatar><UserOutlined /></a-avatar>
          <span class="username">{{ t('header.username') }}</span>
        </div>
      </a-dropdown>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;
  padding: 0 10px;
  border-bottom: 1px solid var(--ant-color-border);
}

.header-left {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
}

.hamburger-btn {
  margin-right: 8px;
}

.logo-title {
  margin: 0;
  padding: 0 20px;
  font-size: 20px;
  font-weight: bold;
  color: var(--ant-color-text);
  white-space: nowrap;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
  line-height: 63px;
}

.top-menu {
  line-height: 64px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.username {
  font-size: 14px;
}

.header-item {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style>
