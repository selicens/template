<script setup lang="ts">
// import { getData } from '@/services/index'
import IntroduceRow from './components/introduce-row.vue'
import SalesCard from './components/sales-card.vue'
import TopSearch from './components/top-search.vue'
import ProportionSales from './components/proportion-sales.vue'
import OfflineData from './components/offline-data.vue'
import PageLoading from './components/pageLoading/page-loading.vue'

defineOptions({ name: 'Analytics' })

// const data = async () => {
//   const res = await getData()
//   console.log(res)
// }
// data()
const loading = ref(true)
onBeforeMount(() => {
  loading.value = !loading.value
})
</script>

<template>
  <a-flex vertical gap="16">
    <Suspense>
      <template #fallback>
        <PageLoading />
      </template>
      <IntroduceRow :loading="loading" />
    </Suspense>
    <Suspense>
      <template #fallback>
        <PageLoading />
      </template>
      <SalesCard :loading="loading" />
    </Suspense>
    <a-row :gutter="[16, 0]">
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <Suspense>
          <template #fallback>
            <PageLoading />
          </template>
          <TopSearch :loading="loading" />
        </Suspense>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <Suspense>
          <template #fallback>
            <PageLoading />
          </template>
          <ProportionSales :loading="loading" />
        </Suspense>
      </a-col>
    </a-row>
    <Suspense>
      <template #fallback>
        <PageLoading />
      </template>
      <OfflineData :loading="loading" />
    </Suspense>
  </a-flex>
</template>
