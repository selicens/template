<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { BubbleItemType, BubbleListProps } from '@antdv-next/x'

const { t } = useI18n()

const items = ref<BubbleItemType[]>([])

const handleSubmit = (message: string) => {
  items.value.push({
    key: `user-${Date.now()}`,
    role: 'user',
    content: message,
  })
  items.value.push({
    key: `ai-${Date.now()}`,
    role: 'ai',
    content: `收到你的消息：「${message}」，这是一个模拟回复。`,
    loading: false,
  })
}

const role = computed<BubbleListProps['role']>(() => ({
  user: {
    placement: 'end',
  },
}))

const promptItems = [
  { key: 1, label: t('views.ai.promptQuick1') },
  { key: 2, label: t('views.ai.promptQuick2') },
  { key: 3, label: t('views.ai.promptQuick3') },
  { key: 4, label: t('views.ai.promptQuick4') },
]

const handlePromptClick = (info: { data: { label: string } }) => {
  handleSubmit(String(info.data.label))
}
</script>

<template>
  <div class="ai-page">
    <div class="ai-content">
      <template v-if="items.length === 0">
        <div class="ai-welcome">
          <AxWelcome
            variant="borderless"
            :title="t('views.ai.welcomeTitle')"
            :description="t('views.ai.welcomeDescription')"
          />
          <AxPrompts :title="''" :items="promptItems" @item-click="handlePromptClick" />
        </div>
      </template>
      <template v-else>
        <AxBubbleList variant="outlined" :items="items" :role="role" />
      </template>
    </div>
    <div class="ai-sender">
      <AxSender :placeholder="t('views.ai.placeholder')" @submit="handleSubmit" />
    </div>
  </div>
</template>

<style scoped>
.ai-page {
  height: 90%;
  display: flex;
  flex-direction: column;
}

.ai-content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ai-welcome {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 0 24px;
}

.ai-sender {
  padding: 16px 24px 16px 24px;
}
</style>
