<script setup lang="ts">
import { TinyArea, TinyColumn, Progress } from '@antv/g2plot'
import { InfoCircleOutlined } from '@ant-design/icons-vue'
import ChartCard from './chart-card.vue'
import Trend from './trend/trend.vue'

defineOptions({ name: 'IntroduceRow' })

const numeral = (num: number) => {
  return num.toLocaleString()
}
const visitData = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
const tinyAreaContainer = ref()
const tinyColumnContainer = ref()
const progressContainer = ref()

const tinyArea = shallowRef()
const tinyColumn = shallowRef()
const progress = shallowRef()

onMounted(() => {
  tinyArea.value = new TinyArea(tinyAreaContainer.value, {
    height: 46,
    data: visitData,
    smooth: true,
    autoFit: true,
    areaStyle: {
      fill: 'l(270) 0:#ffffff 0.5:#d4bcf2 1:#975FE4'
    },
    line: {
      color: '#975FE4'
    }
  })
  tinyArea.value?.render()

  tinyColumn.value = new TinyColumn(tinyColumnContainer.value, {
    height: 46,
    autoFit: true,
    data: visitData
  })
  tinyColumn.value?.render()

  progress.value = new Progress(progressContainer.value, {
    height: 46,
    autoFit: true,
    percent: 0.78,
    barWidthRatio: 0.2,
    color: ['#13C2C2', '#E9EEF4']
  })
  progress.value?.render()
})

onBeforeUnmount(() => {
  tinyArea.value?.destroy()
  tinyArea.value = undefined

  tinyColumn.value?.destroy()
  tinyColumn.value = undefined

  progress.value?.destroy()
  progress.value = undefined
})
</script>

<template>
  <a-row :gutter="16">
    <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
      <ChartCard title="总销售额" :contentHeight="46">
        <template #action>
          <a-tooltip title="指标说明">
            <InfoCircleOutlined />
          </a-tooltip>
        </template>
        <template #total>￥ {{ `${numeral(12560)}` }}</template>
        <Trend flag="up">周同比 12%</Trend>
        <Trend flag="down">日同比 11%</Trend>
        <template #footer>日销售额 ￥{{ `${numeral(12423)}` }}</template>
      </ChartCard>
    </a-col>
    <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
      <ChartCard title="访问量" :contentHeight="46">
        <template #action>
          <a-tooltip title="指标说明">
            <InfoCircleOutlined />
          </a-tooltip>
        </template>
        <template #total>8846</template>
        <div ref="tinyAreaContainer"></div>
        <template #footer>日访问量 {{ `${numeral(1234)}` }}</template>
      </ChartCard>
    </a-col>
    <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
      <ChartCard title="支付笔数" :contentHeight="46">
        <template #action>
          <a-tooltip title="指标说明">
            <InfoCircleOutlined />
          </a-tooltip>
        </template>
        <template #total>6560</template>
        <div ref="tinyColumnContainer"></div>
        <template #footer>转化率 60%</template>
      </ChartCard>
    </a-col>
    <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
      <ChartCard title="运营活动效果" :contentHeight="46">
        <template #action>
          <a-tooltip title="指标说明">
            <InfoCircleOutlined />
          </a-tooltip>
        </template>
        <template #total>78%</template>
        <div ref="progressContainer"></div>
        <template #footer>
          <Trend flag="up">周同比 12%</Trend>
          <Trend flag="down">日同比 11%</Trend>
        </template>
      </ChartCard>
    </a-col>
  </a-row>
</template>

<style scoped></style>
