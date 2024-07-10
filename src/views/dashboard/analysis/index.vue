<script setup lang="ts">
// import { getData } from '@/services/index'
import IntroduceRow from './components/introduce-row.vue'
import SalesCard from './components/sales-card.vue'
import TopSearch from './components/top-search.vue'
import ProportionSales from './components/proportion-sales.vue'
import OfflineData from './components/offline-data.vue'

defineOptions({ name: 'Analytics' })

// const data = async () => {
//   const res = await getData()
//   console.log(res)
// }
// data()
</script>

<template>
  <a-flex vertical gap="16">
    <Suspense fallback="loading">
      <IntroduceRow></IntroduceRow>
    </Suspense>
    <Suspense fallback="loading">
      <SalesCard></SalesCard>
    </Suspense>
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <Suspense fallback="loading">
          <TopSearch />
        </Suspense>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <Suspense fallback="loading">
          <ProportionSales />
        </Suspense>
      </a-col>
    </a-row>
    <Suspense>
      <OfflineData />
    </Suspense>
  </a-flex>
</template>

<style scoped>
</style>
