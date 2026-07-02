<script setup lang="ts">
import type { ResultProps } from 'antdv-next'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()
const styles: ResultProps['styles'] = {
  body: {
    backgroundColor: 'transparent',
  },
}
</script>

<template>
  <div>
    <a-result
      status="404"
      :title="t('views.notFound.title')"
      :subtitle="t('views.notFound.subtitle')"
      :styles="styles"
    >
      <template #extra>
        <a-button type="primary" @click="router.push('/')">{{
          t('views.notFound.backHome')
        }}</a-button>
      </template>
    </a-result>
  </div>
</template>
