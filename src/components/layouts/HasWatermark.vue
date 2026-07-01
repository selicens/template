<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  watermark: boolean
}>()

const { t } = useI18n()
</script>

<template>
  <a-watermark
    v-if="watermark"
    :content="t('layout.watermark')"
    :font-size="16"
    :line-height="16"
    :gap="[64, 64]"
    :offset="[24, 24]"
    :rotate="-22"
  >
    <slot />
  </a-watermark>
  <template v-else>
    <slot />
  </template>
</template>