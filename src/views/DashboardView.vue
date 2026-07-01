<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import request from '@/services/request'

const loading = ref(false)
const { t } = useI18n()

const fetchDashboard = async () => {
  loading.value = true
  try {
    // Example: GET /dashboard/stats
    // const data = await request.get('/dashboard/stats')
    // console.log(data)
  } catch {
    // Error handled by interceptor
  } finally {
    loading.value = false
  }
}

onMounted(fetchDashboard)
</script>

<template>
  <div>
    <a-card :title="t('views.dashboard.title')" variant="borderless">
      <p>{{ t('views.dashboard.description') }}</p>
      <a-divider />
      <a-row :gutter="16">
        <a-col :span="6">
          <a-statistic :title="t('views.dashboard.users')" :value="1128" />
        </a-col>
        <a-col :span="6">
          <a-statistic :title="t('views.dashboard.visits')" :value="93832" :precision="0" />
        </a-col>
        <a-col :span="6">
          <a-statistic :title="t('views.dashboard.conversion')" :value="2.8" :precision="1" suffix="%" />
        </a-col>
        <a-col :span="6">
          <a-statistic :title="t('views.dashboard.activeUsers')" :value="735" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
