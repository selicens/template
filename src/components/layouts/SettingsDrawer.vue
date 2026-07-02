<script setup lang="ts">
import { useThemeStore, type LayoutMode } from '@/stores/theme'
import { useI18n } from 'vue-i18n'
import { SettingOutlined } from '@antdv-next/icons'

const themeStore = useThemeStore()
const { t } = useI18n()

const visible = defineModel<boolean>({ default: false })

const layoutOptions: { key: LayoutMode; desc: string }[] = [
  { key: 'mixed', desc: t('layout.mixed') },
  { key: 'side', desc: t('layout.side') },
  { key: 'top', desc: t('layout.top') },
]

const handleLayoutChange = (mode: LayoutMode) => {
  themeStore.layoutMode = mode
}

const handleWatermarkChange = (checked: boolean) => {
  themeStore.watermark = checked
}
</script>

<template>
  <div>
    <a-button type="primary" shape="circle" class="settings-btn" @click="visible = true">
      <SettingOutlined />
    </a-button>

    <a-drawer v-model:open="visible" :title="t('layout.settings')" :size="280" placement="right">
      <div class="drawer-content">
        <div class="section-title">{{ t('layout.layoutMode') }}</div>
        <div class="layout-cards">
          <a-tooltip
            v-for="opt in layoutOptions"
            :key="opt.key"
            :title="opt.desc"
            placement="bottom"
          >
            <div
              class="layout-card"
              :class="{ active: themeStore.layoutMode === opt.key }"
              @click="handleLayoutChange(opt.key)"
            >
              <div class="layout-preview" :class="opt.key">
                <div class="preview-content"></div>
                <div class="preview-sider" v-if="opt.key !== 'top'"></div>
                <div class="preview-header" v-if="opt.key !== 'side'"></div>
              </div>
            </div>
          </a-tooltip>
        </div>

        <div class="section-title">{{ t('layout.watermarkToggle') }}</div>
        <div class="watermark-toggle">
          <a-switch :checked="themeStore.watermark" @change="handleWatermarkChange" />
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<style scoped>
.settings-btn {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50% 0 0 50%;
  z-index: 999;
}

.drawer-content {
  padding: 16px 0;
}

.section-title {
  font-size: 14px;
  color: #333;
  padding: 8px 0;
}

.layout-cards {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}

.layout-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.layout-card:hover {
  border-color: #1890ff;
}

.layout-card.active {
  border-color: #1890ff;
  background: #e6f7ff;
}

.layout-preview {
  width: 56px;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.layout-preview .preview-sider {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 14px;
  background: #1890ff;
}

.layout-preview .preview-header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 10px;
  background: #1890ff;
}

.layout-preview.top .preview-header {
  left: 0;
}

.layout-preview.side .preview-sider {
  width: 14px;
}

.layout-preview .preview-content {
  position: absolute;
  inset: 0;
}

.layout-preview.mixed .preview-content {
  background: linear-gradient(to right, transparent 14px, #f0f0f0 14px);
}

.layout-preview.side .preview-content {
  background: linear-gradient(to right, transparent 14px, #f0f0f0 14px);
}

.layout-preview.top .preview-content {
  background: linear-gradient(to bottom, transparent 10px, #f0f0f0 10px);
}

.watermark-toggle {
  padding: 8px 0;
}
</style>
