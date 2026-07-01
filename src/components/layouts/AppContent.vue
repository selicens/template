<script setup lang="ts">
import { computed, h, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Dropdown } from 'antdv-next'

const props = defineProps<{
  isFixed: boolean
  activeKey: string
  tabs: { key: string; label: string; closable: boolean }[]
  breadcrumbItems: { title: string; href: string }[]
  showBreadcrumb: boolean
}>()

const emit = defineEmits<{
  tabChange: [key: string]
  tabRemove: [key: string | MouseEvent, action: 'add' | 'remove']
  tabCloseAll: []
  tabCloseOthers: [key: string]
  tabCloseLeft: [key: string]
  tabCloseRight: [key: string]
  tabRefresh: []
}>()

// Refresh key for router-view
const refreshKey = ref(0)

const { t } = useI18n()

const handleTabChange = (key: string) => {
  emit('tabChange', key)
}

const handleTabRemove = (key: string | MouseEvent, action: 'add' | 'remove') => {
  emit('tabRemove', key, action)
}

const handleMenuSelect = (key: string, tabKey: string) => {
  switch (key) {
    case 'refresh':
      refreshKey.value += 1
      emit('tabRefresh')
      break
    case 'close':
      emit('tabRemove', tabKey, 'remove')
      break
    case 'closeOthers':
      emit('tabCloseOthers', tabKey)
      break
    case 'closeLeft':
      emit('tabCloseLeft', tabKey)
      break
    case 'closeRight':
      emit('tabCloseRight', tabKey)
      break
    case 'closeAll':
      emit('tabCloseAll')
      break
  }
}

const getMenuItems = (tab: { closable: boolean }) => [
  { key: 'refresh', label: h('span', null, t('tabs.refresh')) },
  { type: 'divider' as const },
  { key: 'close', label: h('span', null, t('tabs.close')), disabled: !tab.closable },
  { key: 'closeOthers', label: h('span', null, t('tabs.closeOthers')) },
  { key: 'closeLeft', label: h('span', null, t('tabs.closeLeft')) },
  { key: 'closeRight', label: h('span', null, t('tabs.closeRight')) },
  { key: 'closeAll', label: h('span', null, t('tabs.closeAll')) },
]

const tabItems = computed(() =>
  props.tabs.map(t => ({
    key: t.key,
    label: h(Dropdown, {
      trigger: ['contextmenu'],
      menu: {
        items: getMenuItems({
          closable: t.closable
        }),
        onClick: ({ key }: { key: string }) => handleMenuSelect(key, t.key),
      },
    }, () => h('span', { style: 'cursor: pointer' }, t.label)),
    closable: t.closable,
  }))
)
  const styles = {
    header: {
    backgroundColor: '1px solid var(--ant-color-bg-container)'
  }
}
</script>

<template>
  <a-layout-content :class="[{ 'content-padding': isFixed }]">
    <div class="content-inner">
      <a-tabs
        :active-key="activeKey"
        :items="tabItems"
        type="editable-card"
        hide-add
        @change="handleTabChange"
        @edit="handleTabRemove"
        :styles="styles"
      >
        <template #rightExtra>
          <a-dropdown
            :menu="{
              items: [
                { key: 'refresh', label: h('span', null, t('tabs.refresh')) },
                { type: 'divider' as const },
                { key: 'closeOthers', label: h('span', null, t('tabs.closeOthers')) },
                { key: 'closeLeft', label: h('span', null, t('tabs.closeLeft')) },
                { key: 'closeRight', label: h('span', null, t('tabs.closeRight')) },
                { key: 'closeAll', label: h('span', null, t('tabs.closeAll')) },
              ],
              onClick: ({ key }: { key: string }) => handleMenuSelect(key, activeKey)
            }"
            :trigger="['click']"
          >
            <AppstoreOutlined />
          </a-dropdown>
        </template>
      </a-tabs>
      <a-breadcrumb v-if="showBreadcrumb" :items="breadcrumbItems" class="breadcrumb" />
      <router-view :key="refreshKey" />
    </div>
  </a-layout-content>
</template>

<style scoped>
.breadcrumb {
  margin-bottom: 16px;
}

.content-padding {
  padding-top: 64px;
}

.content-inner {
  padding: 10px 24px 0 24px;
  height: 100%;
  overflow-y: auto;
}

@media (max-width: 767px) {
  .content-inner {
    padding: 10px 12px 0 12px;
  }

  .content-padding {
    padding-top: 64px;
  }

  :deep(.ant-tabs-nav) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  :deep(.ant-tabs-tab) {
    flex-shrink: 0;
  }
}
</style>
