<script setup lang="ts">
import MapChart from './components/map/index.vue'
import ActiveChart from './components/activeChart/index.vue'
import GaugeChart from './components/charts/gauge-chart.vue'
import RingChart from './components/charts/ring-chart.vue'
import TagCloudChart from './components/charts/tag-cloud-chart.vue'
import WaterWaveChart from './components/charts/water-wave-chart.vue'

defineOptions({ name: 'Monitor' })
const numeral = (num: number) => {
  return num.toLocaleString()
}
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
const ringOptions1 = {
  height: 128,
  autoFit: true,
  percent: 0.75,
  innerRadius: 0.8,
  color: ['#fab120', '#E8EDF3']
}
const ringOptions2 = {
  height: 128,
  autoFit: true,
  percent: 0.48,
  innerRadius: 0.8,
  color: ['#5DDECF', '#E8EDF3']
}
const ringOptions3 = {
  height: 128,
  autoFit: true,
  percent: 0.33,
  innerRadius: 0.8,
  color: ['#2FC25B', '#E8EDF3']
}
</script>

<template>
  <a-flex vertical gap="24">
    <a-row :gutter="24">
      <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card title="活动实时交易情况">
          <a-row>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic title="今日交易总额" suffix="元" :value="numeral(124543233)" />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic title="销售目标完成率" value="92%" />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic-countdown title="活动剩余时间" :value="deadline" format="HH:mm:ss:SSS" />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic title="每秒交易总额" suffix="元" :value="numeral(234)" />
            </a-col>
          </a-row>
          <div class="mapChart">
            <MapChart />
          </div>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-flex vertical gap="24">
          <a-card title="活动情况预测">
            <active-chart />
          </a-card>
          <a-card title="卷核效率">
            <GaugeChart />
          </a-card>
        </a-flex>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :sm="24" :xs="24">
        <a-card title="各品类占比" class="pieCard">
          <a-row :style="{ padding: '16px 0' }">
            <a-col :span="8">
              <RingChart :options="ringOptions1" />
            </a-col>
            <a-col :span="8">
              <RingChart :options="ringOptions2" />
            </a-col>
            <a-col :span="8">
              <RingChart :options="ringOptions3" />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: 24 }">
        <a-card title="热门搜索" :body-style="{ overflow: 'hidden' }">
          <TagCloudChart />
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: 24 }">
        <a-card title="资源剩余" :body-style="{ textAlign: 'center', fontSize: 0 }">
          <WaterWaveChart />
        </a-card>
      </a-col>
    </a-row>
  </a-flex>
</template>

<style scoped>
.mapChart {
  height: 452px;
  padding-top: 24px;
  img {
    display: inline-block;
    max-width: 100%;
    max-height: 437px;
  }
}

.pieCard :global(.pie-stat) {
  font-size: 24px !important;
}

@media screen and (max-width: 992px) {
  .mapChart {
    height: auto;
  }
}
</style>
