<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ConfigProvider, theme as antdvTheme } from 'antdv-next'
import { useThemeStore } from '@/stores/theme'
import { useTabStore } from '@/stores/tabs'
import { useMobile } from '@/composables/useMobile'
import AppHeader from './layouts/AppHeader.vue'
import AppSider from './layouts/AppSider.vue'
import AppContent from './layouts/AppContent.vue'
import AppFooter from './layouts/AppFooter.vue'
import SettingsDrawer from './layouts/SettingsDrawer.vue'
import HasWatermark from './layouts/HasWatermark.vue'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const themeStore = useThemeStore()
const tabStore = useTabStore()
const { isMobile } = useMobile()

const collapsed = ref(false)
const drawerVisible = ref(false)
const mobileSiderVisible = ref(false)
const isFixed = ref(false)
const FIXED_THRESHOLD = 64

const onScroll = () => {
  isFixed.value = window.scrollY > FIXED_THRESHOLD
}

const menuItems = computed(() => [
  { key: '/', label: t('menu.home') },
  { key: '/login', label: t('menu.login') },
  {
    key: '/er',
    label: t('menu.multiLevel'),
    children: [
      { key: '/er/er1', label: t('menu.level2_1') },
      { key: '/er/er2', label: t('menu.level2_2') },
    ],
  },
])

const handleMenuClick = ({ key }: { key: string }) => {
  router.push(key)
}

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}

const handleMobileMenuClick = ({ key }: { key: string }) => {
  router.push(key)
  mobileSiderVisible.value = false
}

const handleTabChange = (key: string) => {
  tabStore.activateTab(key)
}

const handleTabRemove = (key: string | MouseEvent, action: 'add' | 'remove') => {
  if (action === 'remove' && typeof key === 'string') {
    tabStore.removeTab(key)
  }
}

const handleTabCloseAll = () => {
  tabStore.closeAll()
}

const handleTabCloseOthers = (key: string) => {
  tabStore.closeOthers(key)
}

const handleTabCloseLeft = (key: string) => {
  tabStore.closeLeft(key)
}

const handleTabCloseRight = (key: string) => {
  tabStore.closeRight(key)
}

const handleTabRefresh = () => {
  router.replace({ path: route.path, query: route.query })
}

const breadcrumbItems = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  const items: { title: string; href: string }[] = []
  let href = ''
  for (const segment of pathSegments) {
    href += `/${segment}`
    items.push({ title: segment, href })
  }
  return items
})

const showBreadcrumb = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  return pathSegments.length >= 2
})

const userMenuItems = computed(() => [
  { key: 'profile', label: t('header.profile') },
  { type: 'divider' as const },
  { key: 'logout', label: t('header.logout') },
])

const langMenuItems = computed(() => [
  { key: 'zh-CN', label: t('header.zhCN') },
  { type: 'divider' as const },
  { key: 'en-US', label: t('header.enUS') },
])

const themeMenuItems = computed(() => [
  { key: 'light', label: t('header.light') },
  { type: 'divider' as const },
  { key: 'dark', label: t('header.dark') },
])

const handleUserMenuClick = ({ key }: { key: string }) => {
  if (key === 'logout') {
    router.push('/login')
  }
}

const handleThemeMenuClick = ({ key }: { key: string }) => {
  themeStore.dark = key === 'dark'
}

const handleLangMenuClick = ({ key }: { key: string }) => {
  locale.value = key
}

const tabItems = ref<{ key: string; label: string; closable: boolean }[]>([])

watchEffect(() => {
  // Access both reactive deps to ensure tracking
  locale.value
  tabItems.value = tabStore.tabs.map((tab) => ({
    key: tab.key,
    label: t(tab.title),
    closable: tab.closable,
  }))
})

const appTheme = computed(() => ({
  algorithm: themeStore.dark ? antdvTheme.darkAlgorithm : antdvTheme.defaultAlgorithm,
  components: {
    Layout: {
      headerBg: 'var(--ant-color-bg-container)',
      siderBg: 'var(--ant-color-bg-container)',
    },
    Menu: {
      itemSelectedBg: 'var(--ant-menu-color-item-bg-selected)',
      itemSelectedColor: 'var(--ant-menu-item-color)',
      subMenuItemSelectedColor: 'var(--ant-menu-item-color)',
      horizontalItemSelectedColor: 'var(--ant-menu-item-color)',
    },
  },
}))

const layoutMode = computed(() => themeStore.layoutMode)

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <ConfigProvider :theme="appTheme">
    <HasWatermark :watermark="themeStore.watermark">
      <a-layout class="app-layout">
        <!-- Mobile mode: drawer for menu, header with hamburger -->
        <template v-if="isMobile">
          <a-layout-header class="app-header app-header-fixed">
            <AppHeader
              :show-top-menu="false"
              :show-logo="true"
              :menu-items="[]"
              :user-menu-items="userMenuItems"
              :lang-menu-items="langMenuItems"
              :theme-menu-items="themeMenuItems"
              :show-hamburger="true"
              @menu-click="handleMenuClick"
              @user-menu-click="handleUserMenuClick"
              @theme-menu-click="handleThemeMenuClick"
              @lang-menu-click="handleLangMenuClick"
              @toggle-sider="mobileSiderVisible = !mobileSiderVisible"
            />
          </a-layout-header>
          <a-layout class="main-layout">
            <AppContent
              :is-fixed="true"
              :active-key="tabStore.activeKey"
              :tabs="tabItems"
              :breadcrumb-items="breadcrumbItems"
              :show-breadcrumb="showBreadcrumb"
              @tab-change="handleTabChange"
              @tab-remove="handleTabRemove"
              @tab-close-all="handleTabCloseAll"
              @tab-close-others="handleTabCloseOthers"
              @tab-close-left="handleTabCloseLeft"
              @tab-close-right="handleTabCloseRight"
              @tab-refresh="handleTabRefresh"
            />
            <AppFooter />
          </a-layout>
        </template>

        <!-- Desktop mode -->
        <template v-else>
          <!-- Top mode: header on top, no sider -->
          <template v-if="layoutMode === 'top'">
            <a-layout-header :class="['app-header', { 'app-header-fixed': isFixed }]">
              <AppHeader
                :show-top-menu="true"
                :show-logo="false"
                :menu-items="menuItems"
                :user-menu-items="userMenuItems"
                :lang-menu-items="langMenuItems"
                :theme-menu-items="themeMenuItems"
                @menu-click="handleMenuClick"
                @user-menu-click="handleUserMenuClick"
                @theme-menu-click="handleThemeMenuClick"
                @lang-menu-click="handleLangMenuClick"
              />
            </a-layout-header>
            <a-layout class="main-layout">
              <AppContent
                :is-fixed="isFixed"
                :active-key="tabStore.activeKey"
                :tabs="tabItems"
                :breadcrumb-items="breadcrumbItems"
                :show-breadcrumb="showBreadcrumb"
                @tab-change="handleTabChange"
                @tab-remove="handleTabRemove"
                @tab-close-all="handleTabCloseAll"
                @tab-close-others="handleTabCloseOthers"
                @tab-close-left="handleTabCloseLeft"
                @tab-close-right="handleTabCloseRight"
                @tab-refresh="handleTabRefresh"
              />
              <AppFooter />
            </a-layout>
          </template>

          <!-- Side mode: sider on left, no top menu -->
          <template v-else-if="layoutMode === 'side'">
            <AppSider
              :collapsed="collapsed"
              :show-logo="true"
              :full-height="true"
              :menu-items="menuItems"
              @menu-click="handleMenuClick"
              @toggle-collapsed="toggleCollapsed"
            />
            <a-layout class="main-layout">
              <AppContent
                :is-fixed="isFixed"
                :active-key="tabStore.activeKey"
                :tabs="tabItems"
                :breadcrumb-items="breadcrumbItems"
                :show-breadcrumb="showBreadcrumb"
                @tab-change="handleTabChange"
                @tab-remove="handleTabRemove"
                @tab-close-all="handleTabCloseAll"
                @tab-close-others="handleTabCloseOthers"
                @tab-close-left="handleTabCloseLeft"
                @tab-close-right="handleTabCloseRight"
                @tab-refresh="handleTabRefresh"
              />
              <AppFooter />
            </a-layout>
          </template>

          <!-- Mixed mode: top header + sider on left -->
          <template v-else>
            <a-layout-header class="app-header">
              <AppHeader
                :show-top-menu="false"
                :show-logo="true"
                :menu-items="menuItems"
                :user-menu-items="userMenuItems"
                :lang-menu-items="langMenuItems"
                :theme-menu-items="themeMenuItems"
                @menu-click="handleMenuClick"
                @user-menu-click="handleUserMenuClick"
                @theme-menu-click="handleThemeMenuClick"
                @lang-menu-click="handleLangMenuClick"
              />
            </a-layout-header>
            <a-layout class="main-layout main-layout-mixed">
              <AppSider
                :collapsed="collapsed"
                :show-logo="false"
                :full-height="false"
                :menu-items="menuItems"
                @menu-click="handleMenuClick"
                @toggle-collapsed="toggleCollapsed"
              />
              <a-layout class="content-layout">
                <AppContent
                  :is-fixed="isFixed"
                  :active-key="tabStore.activeKey"
                  :tabs="tabItems"
                  :breadcrumb-items="breadcrumbItems"
                  :show-breadcrumb="showBreadcrumb"
                  @tab-change="handleTabChange"
                  @tab-remove="handleTabRemove"
                  @tab-close-all="handleTabCloseAll"
                  @tab-close-others="handleTabCloseOthers"
                  @tab-close-left="handleTabCloseLeft"
                  @tab-close-right="handleTabCloseRight"
                  @tab-refresh="handleTabRefresh"
                />
                <AppFooter />
              </a-layout>
            </a-layout>
          </template>

          <SettingsDrawer v-model="drawerVisible" />
        </template>

        <!-- Mobile sider drawer -->
        <a-drawer
          v-model:open="mobileSiderVisible"
          placement="left"
          :closable="true"
          :mask-closable="true"
          size="260"
        >
          <a-menu
            mode="inline"
            :selected-keys="[route.path]"
            :items="menuItems"
            @click="handleMobileMenuClick"
          />
        </a-drawer>
      </a-layout>
    </HasWatermark>
  </ConfigProvider>
</template>

<style>
.app-layout {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.app-header {
  padding: 0;
  flex: 0 0 auto;
}

.app-header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.main-layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.main-layout :deep(.ant-layout-content),
.content-layout :deep(.ant-layout-content) {
  flex: 1;
  min-height: 0;
}

.main-layout-mixed {
  flex-direction: row;
}

.content-layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

@media (max-width: 767px) {
  .app-header {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }
}
</style>
