<script setup lang="ts">
import { ref } from 'vue'
import { getData } from '@/services/index'
import ChartCard from './components/chart-card.vue'
import Trend from './components/trend.vue'
import { InfoCircleOutlined } from "@ant-design/icons-vue";
import { TinyArea, TinyColumn, Progress, Column } from '@antv/g2plot';

defineOptions({ name: 'Analytics' })
const activeKey = ref('1')
const data = async () => {
  const res = await getData()
  console.log(res)
}
data()
const tinyAreaContainer = ref()
const tinyColumnContainer = ref()
const progressContainer = ref()
const tinyArea = shallowRef()
const tinyColumn = shallowRef()
const progress = shallowRef()

const visitData = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
const salesData = [
  {
    x: '1月',
    y: 809,
  },
  {
    x: '2月',
    y: 766,
  },
  {
    x: '3月',
    y: 585,
  },
  {
    x: '4月',
    y: 763,
  },
  {
    x: '5月',
    y: 853,
  },
  {
    x: '6月',
    y: 898,
  },
  {
    x: '7月',
    y: 1096,
  },
  {
    x: '8月',
    y: 452,
  },
  {
    x: '9月',
    y: 244,
  },
  {
    x: '10月',
    y: 838,
  },
  {
    x: '11月',
    y: 673,
  },
  {
    x: '12月',
    y: 431,
  },
]
const rankingListData: { title: string, total: number }[] = []
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  })
}

const numeral = (num) => {
  return num.toLocaleString()
}

const column = ref()
const columnContainer1 = shallowRef()
const columnContainer2 = shallowRef()
const changesTab = (activeKey) => {
  console.log(activeKey)
  if (activeKey === '2') {
    setTimeout(() => {
      new Column(columnContainer2.value, {
        data: salesData,
        xField: 'x',
        yField: 'y',
        height: 300,
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          y: {
            alias: '销售量',
          },
        },
      }).render()
      renderOnce = true
    })
  }
}
onMounted(() => {
  tinyArea.value = new TinyArea(tinyAreaContainer.value, {
    height: 46,
    data: visitData,
    smooth: true,
    autoFit: true,
    areaStyle: {
      fill: 'l(270) 0:#ffffff 0.5:#d4bcf2 1:#975FE4',
    },
    line: {
      color: '#975FE4',
    },
  })
  tinyArea.value?.render()
  tinyColumn.value = new TinyColumn(tinyColumnContainer.value, {
    height: 46,
    autoFit: true,
    data: visitData,
  })
  tinyColumn.value?.render()

  progress.value = new Progress(progressContainer.value, {
    height: 46,
    autoFit: true,
    percent: 0.78,
    barWidthRatio: 0.2,
    color: ['#13C2C2', '#E9EEF4'],
  })
  progress.value?.render()

  column.value = new Column(columnContainer1.value, {
    data: salesData,
    xField: 'x',
    yField: 'y',
    height: 300,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      y: {
        alias: '销售量',
      },
    },
  })
  column.value?.render()
})
</script>

<template>
  <a-flex vertical gap="16">
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
    <a-card width="100%">
      <a-tabs v-model:activeKey="activeKey" @chang="changesTab">
        <a-tab-pane key="1" tab="销售额">
          <a-row>
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <div ref="columnContainer1"></div>
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <div>
                <h4>门店销售额排名</h4>
                <ul>
                  <li v-for="(item, index) in rankingListData" :key="index">
                    <span
                      :class="`rankingItemNumber ${index < 3 ? 'active' : ''}`"
                    >
                      {{ index + 1 }}
                    </span>
                    <span class="rankingItemTitle" :title="item.title">
                      {{ item.title }}
                    </span>
                    <span class="rankingItemValue">
                      {{ numeral(item.total) }}
                    </span>
                  </li>
                </ul>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
        <a-tab-pane key="2" tab="访问量">
          <a-row>
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <div ref="columnContainer2"></div>
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <div>
                <h4>门店销售额排名</h4>
                <ul>
                  <li v-for="(item, index) in rankingListData" :key="index">
                    <span
                      :class="`rankingItemNumber ${index < 3 ? 'active' : ''}`"
                    >
                      {{ index + 1 }}
                    </span>
                    <span class="rankingItemTitle" :title="item.title">
                      {{ item.title }}
                    </span>
                    <span class="rankingItemValue">
                      {{ numeral(item.total) }}
                    </span>
                  </li>
                </ul>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
        <template #rightExtra>
          <div>
            <a href="#">今日</a>
            <a href="#">本周</a>
            <a href="#">本月</a>
            <a href="#">本年</a>
          </div>
          <a-range-picker></a-range-picker>
        </template>
      </a-tabs>
    </a-card>
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="线上热门搜索">content</a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="销售额类别占比">content</a-card>
      </a-col>
    </a-row>
    <a-card> content </a-card>
  </a-flex>
</template>

<style scoped></style>
