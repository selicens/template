<script setup lang="ts">
import { ref } from 'vue'
// import { getData } from '@/services/index'
import ChartCard from './components/chart-card.vue'
import Trend from './components/trend.vue'
import NumberInfo from './components/number-info.vue'
import { InfoCircleOutlined, EllipsisOutlined } from "@ant-design/icons-vue";
import { TinyArea, TinyColumn, Progress, Column, Pie } from '@antv/g2plot';

defineOptions({ name: 'Analytics' })
const activeKey = ref('1')
// const data = async () => {
//   const res = await getData()
//   console.log(res)
// }
// data()
const tinyAreaContainer = ref()
const tinyColumnContainer = ref()
const progressContainer = ref()
const tinyArea = shallowRef()
const tinyColumn = shallowRef()
const progress = shallowRef()

const column = ref()
const columnContainer1 = shallowRef()
const columnContainer2 = shallowRef()

const tinyAreaContainer1 = ref()
const tinyAreaContainer2 = ref()

const visitData = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
const visitData2 = [1, 6, 4, 8, 3, 7, 2]
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

const numeral = (num: number) => {
  return num.toLocaleString()
}


let renderOnce = false
const changesTab = (activeKey: string) => {
  console.log(activeKey)
  if (activeKey === '2' && !renderOnce) {
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
const columns: Record<string, any>[] = [
  {
    title: '排名',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '搜索关键词',
    dataIndex: 'keyword',
    key: 'keyword',
  },
  {
    title: '用户数',
    dataIndex: 'count',
    key: 'count',
    sorter: (a: { count: number }, b: { count: number }) => a.count - b.count,
  },
  {
    title: '周涨幅',
    dataIndex: 'range',
    key: 'range',
    sorter: (a: { range: number }, b: { range: number }) => {
      // eslint-disable-next-line no-unused-expressions
      a.range - b.range
    },
  },
]

const searchData = [
  {
    index: 1,
    keyword: '搜索关键词-0',
    count: 286,
    range: 10,
    status: 1,
  },
  {
    index: 2,
    keyword: '搜索关键词-1',
    count: 659,
    range: 9,
    status: 1,
  },
  {
    index: 3,
    keyword: '搜索关键词-2',
    count: 579,
    range: 5,
    status: 0,
  },
  {
    index: 4,
    keyword: '搜索关键词-3',
    count: 369,
    range: 51,
    status: 0,
  },
  {
    index: 5,
    keyword: '搜索关键词-4',
    count: 658,
    range: 11,
    status: 1,
  },
  {
    index: 6,
    keyword: '搜索关键词-5',
    count: 956,
    range: 52,
    status: 0,
  },
  {
    index: 7,
    keyword: '搜索关键词-6',
    count: 607,
    range: 23,
    status: 0,
  },
  {
    index: 8,
    keyword: '搜索关键词-7',
    count: 19,
    range: 22,
    status: 1,
  },
  {
    index: 9,
    keyword: '搜索关键词-8',
    count: 309,
    range: 77,
    status: 1,
  },
  {
    index: 10,
    keyword: '搜索关键词-9',
    count: 382,
    range: 99,
    status: 0,
  },
  {
    index: 11,
    keyword: '搜索关键词-10',
    count: 526,
    range: 58,
    status: 0,
  },
  {
    index: 12,
    keyword: '搜索关键词-11',
    count: 824,
    range: 18,
    status: 0,
  },
  {
    index: 13,
    keyword: '搜索关键词-12',
    count: 140,
    range: 10,
    status: 1,
  },
  {
    index: 14,
    keyword: '搜索关键词-13',
    count: 781,
    range: 82,
    status: 1,
  },
  {
    index: 15,
    keyword: '搜索关键词-14',
    count: 231,
    range: 16,
    status: 1,
  },
  {
    index: 16,
    keyword: '搜索关键词-15',
    count: 672,
    range: 9,
    status: 1,
  },
  {
    index: 17,
    keyword: '搜索关键词-16',
    count: 305,
    range: 52,
    status: 0,
  },
  {
    index: 18,
    keyword: '搜索关键词-17',
    count: 32,
    range: 37,
    status: 1,
  },
  {
    index: 19,
    keyword: '搜索关键词-18',
    count: 596,
    range: 73,
    status: 0,
  },
  {
    index: 20,
    keyword: '搜索关键词-19',
    count: 346,
    range: 82,
    status: 0,
  },
  {
    index: 21,
    keyword: '搜索关键词-20',
    count: 622,
    range: 12,
    status: 1,
  },
  {
    index: 22,
    keyword: '搜索关键词-21',
    count: 845,
    range: 12,
    status: 0,
  },
  {
    index: 23,
    keyword: '搜索关键词-22',
    count: 187,
    range: 37,
    status: 1,
  },
  {
    index: 24,
    keyword: '搜索关键词-23',
    count: 822,
    range: 30,
    status: 1,
  },
  {
    index: 25,
    keyword: '搜索关键词-24',
    count: 733,
    range: 77,
    status: 0,
  },
  {
    index: 26,
    keyword: '搜索关键词-25',
    count: 356,
    range: 91,
    status: 0,
  },
  {
    index: 27,
    keyword: '搜索关键词-26',
    count: 771,
    range: 17,
    status: 1,
  },
  {
    index: 28,
    keyword: '搜索关键词-27',
    count: 50,
    range: 41,
    status: 1,
  },
  {
    index: 29,
    keyword: '搜索关键词-28',
    count: 224,
    range: 1,
    status: 0,
  },
  {
    index: 30,
    keyword: '搜索关键词-29',
    count: 218,
    range: 81,
    status: 1,
  },
  {
    index: 31,
    keyword: '搜索关键词-30',
    count: 696,
    range: 34,
    status: 0,
  },
  {
    index: 32,
    keyword: '搜索关键词-31',
    count: 379,
    range: 56,
    status: 1,
  },
  {
    index: 33,
    keyword: '搜索关键词-32',
    count: 750,
    range: 44,
    status: 1,
  },
  {
    index: 34,
    keyword: '搜索关键词-33',
    count: 905,
    range: 66,
    status: 1,
  },
  {
    index: 35,
    keyword: '搜索关键词-34',
    count: 806,
    range: 41,
    status: 0,
  },
  {
    index: 36,
    keyword: '搜索关键词-35',
    count: 854,
    range: 92,
    status: 1,
  },
  {
    index: 37,
    keyword: '搜索关键词-36',
    count: 887,
    range: 18,
    status: 1,
  },
  {
    index: 38,
    keyword: '搜索关键词-37',
    count: 755,
    range: 24,
    status: 0,
  },
  {
    index: 39,
    keyword: '搜索关键词-38',
    count: 267,
    range: 41,
    status: 1,
  },
  {
    index: 40,
    keyword: '搜索关键词-39',
    count: 34,
    range: 38,
    status: 0,
  },
  {
    index: 41,
    keyword: '搜索关键词-40',
    count: 942,
    range: 16,
    status: 0,
  },
  {
    index: 42,
    keyword: '搜索关键词-41',
    count: 844,
    range: 56,
    status: 0,
  },
  {
    index: 43,
    keyword: '搜索关键词-42',
    count: 559,
    range: 28,
    status: 1,
  },
  {
    index: 44,
    keyword: '搜索关键词-43',
    count: 29,
    range: 97,
    status: 1,
  },
  {
    index: 45,
    keyword: '搜索关键词-44',
    count: 989,
    range: 43,
    status: 0,
  },
  {
    index: 46,
    keyword: '搜索关键词-45',
    count: 377,
    range: 24,
    status: 1,
  },
  {
    index: 47,
    keyword: '搜索关键词-46',
    count: 990,
    range: 47,
    status: 1,
  },
  {
    index: 48,
    keyword: '搜索关键词-47',
    count: 848,
    range: 64,
    status: 1,
  },
  {
    index: 49,
    keyword: '搜索关键词-48',
    count: 549,
    range: 68,
    status: 1,
  },
  {
    index: 50,
    keyword: '搜索关键词-49',
    count: 53,
    range: 47,
    status: 1,
  },
]

const salesType = ref('all')
const pieContainer1 = ref()
const pieContainer2 = ref()
const pieContainer3 = ref()
function handleChangeSalesType(e: any) {
  salesType.value = e.target.value
}

const pies = shallowRef<Pie[]>([])

function renderPie(container: any, data: any) {
  const pie = new Pie(container, {
    appendPadding: 10,
    data,
    angleField: 'y',
    colorField: 'x',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'spider',
      formatter: (item) => {
        return `${item.x}: ${item.y.toLocaleString()}`
      },
    },
    legend: false,
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: {
        content: '销售额',
      },
    },
  })
  pie.render()
  pies.value.push(pie)
}

const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
]
const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
]
const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '食用酒水',
    y: 188,
  },
  {
    x: '个护健康',
    y: 344,
  },
  {
    x: '服饰箱包',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
]

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

  new TinyArea(tinyAreaContainer1.value, {
    height: 45,
    data: visitData2,
    smooth: true,
    autoFit: true,
  }).render()

  new TinyArea(tinyAreaContainer2.value, {
    height: 45,
    data: visitData2,
    smooth: true,
    autoFit: true,
  }).render()

  renderPie(pieContainer1.value, salesTypeData)
  renderPie(pieContainer2.value, salesTypeDataOnline)
  renderPie(pieContainer3.value, salesTypeDataOffline)
})
onBeforeUnmount(() => {
  tinyArea.value?.destroy()
  tinyArea.value = undefined

  tinyColumn.value?.destroy()
  tinyColumn.value = undefined

  progress.value?.destroy()
  progress.value = undefined

  column.value?.destroy()
  column.value = undefined

  pies.value.forEach((pie) => {
    pie?.destroy?.()
  })
  pies.value = []
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
      <a-tabs v-model:activeKey="activeKey" @change="changesTab" size="large" class="salesCard">
        <a-tab-pane key="1" tab="销售额">
          <a-row>
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <div ref="columnContainer1" class="salesBar"></div>
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="salesRank">
                <h4 class="rankingTitle">门店销售额排名</h4>
                <ul class="rankingList">
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
              <div ref="columnContainer2" class="salesBar"></div>
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="salesRank">
                <h4 class="rankingTitle">门店销售额排名</h4>
                <ul class="rankingList">
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
          <div style="display: flex;" class="salesExtraWrap">
            <div class="salesExtra">
              <a href="#">今日</a>
              <a href="#">本周</a>
              <a href="#">本月</a>
              <a href="#">本年</a>
            </div>
            <a-range-picker></a-range-picker>
          </div>
        </template>
      </a-tabs>
    </a-card>
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="线上热门搜索">
          <a-row :gutter="68">
            <a-col :sm="12" :xs="24" :style="{ marginBottom: '24px' }">
              <NumberInfo>
                <template #subTitle>
                  <span>
                    人均搜索次数
                    <a-tooltip title="指标说明">
                      <InfoCircleOutlined :style="{ marginLeft: '8px' }" />
                    </a-tooltip>
                  </span>
                </template>
              </NumberInfo>
              <div ref="tinyAreaContainer1"></div>
            </a-col>
            <a-col :sm="12" :xs="24" :style="{ marginBottom: '24px' }">
              <NumberInfo>
                <template #subTitle>
                  <span>
                    搜索用户数
                    <a-tooltip title="指标说明">
                      <InfoCircleOutlined :style="{ marginLeft: '8px' }" />
                    </a-tooltip>
                  </span>
                </template>
              </NumberInfo>
              <div ref="tinyAreaContainer2"></div>
            </a-col>
          </a-row>
          <a-table
            :row-key="(record:any) => record.index"
            size="small"
            :columns="columns"
            :data-source="searchData"
            :pagination="{
              style: { marginBottom: 0 },
              pageSize: 5,
            }"
          >
            <template #bodyCell="scope">
              <template v-if="scope?.column?.key === 'keyword'">
                <a>
                  {{ scope?.record?.keyword }}
                </a>
              </template>
              <template v-else-if="scope?.column?.key === 'range'">
                <Trend :flag="scope?.record?.status === 1 ? 'down' : 'up'">
                  <span :style="{ marginRight: '4px' }">{{ scope?.record?.range }}%</span>
                </Trend>
              </template>
            </template>
          </a-table>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="销售额类别占比">
          <template #extra>
            <div class="salesCardExtra">
              <a-dropdown placement="bottomRight">
                <template #overlay>
                  <a-menu>
                    <a-menu-item>操作一</a-menu-item>
                    <a-menu-item>操作二</a-menu-item>
                  </a-menu>
                </template>
                <EllipsisOutlined />
              </a-dropdown>
              <div class="salesTypeRadio">
                <a-radio-group :value="salesType" @change="handleChangeSalesType">
                  <a-radio-button value="all">
                    全部渠道
                  </a-radio-button>
                  <a-radio-button value="online">
                    线上
                  </a-radio-button>
                  <a-radio-button value="stores">
                    门店
                  </a-radio-button>
                </a-radio-group>
              </div>
            </div>
          </template>
          <div>
            <a-typography-text>销售额</a-typography-text>
            <div v-show="salesType === 'all'" ref="pieContainer1" />
            <div v-show="salesType === 'online'" ref="pieContainer2" />
            <div v-show="salesType === 'stores'" ref="pieContainer3" />
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-card> content </a-card>
  </a-flex>
</template>

<style scoped>
.salesCard {
  .salesBar {
    padding: 0 0 32px 32px;
  }
  .salesRank {
    padding: 0 32px 32px 72px;
  }
  :deep(.ant-tabs-nav-wrap) {
    padding-left: 16px;
    .ant-tabs-tab {
      padding-top: 16px;
      padding-bottom: 14px;
      line-height: 24px;
    }
  }
  :deep(.ant-tabs-bar) {
    padding-left: 16px;
    .ant-tabs-tab {
      padding-top: 16px;
      padding-bottom: 14px;
      line-height: 24px;
    }
  }
  :deep(.ant-tabs-extra-content) {
    padding-right: 24px;
    line-height: 55px;
  }
  :deep(.ant-card-head) {
    position: relative;
  }
  :deep(.ant-card-head-title) {
    align-items: normal;
  }
}
.salesExtra {
  display: inline-block;
  margin-right: 24px;
  a {
    margin-left: 24px;
    color: rgba(0, 0, 0, 0.88);
    &:hover {
      color: #1890ff;
    }
  }
}

.rankingList {
  margin: 25px 0 0;
  padding: 0;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    margin-top: 16px;
    zoom: 1;
    &::before,
    &::after {
      display: table;
      content: " ";
    }
    &::after {
      clear: both;
      height: 0;
      font-size: 0;
      visibility: hidden;
    }
    span {
      color: rgba(0, 0, 0, 0.88);
      font-size: 14px;
      line-height: 22px;
    }
    .rankingItemNumber {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-top: 1.5px;
      margin-right: 16px;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      background-color: #fafafa;
      border-radius: 20px;
      &.active {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.85);
      }
    }
    .rankingItemTitle {
      flex: 1;
      margin-right: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

@media screen and(max-width: 992px) {
  .salesExtra {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  /* padding: 16px; */
}
@media screen and (max-width: 576px) {
  :deep(.ant-tabs-content) {
    padding-top: '30px';
  }
  .salesExtraWrap {
    display: none;
  }
}
</style>
