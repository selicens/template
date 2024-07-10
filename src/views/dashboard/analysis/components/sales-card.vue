<script setup lang="ts">
import { Column } from '@antv/g2plot'
defineOptions({ name: 'SalesCard' })
const activeKey = ref('1')
const columnContainer1 = shallowRef()
const columnContainer2 = shallowRef()
const column = ref()

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
            autoRotate: false
          }
        },
        meta: {
          y: {
            alias: '销售量'
          }
        }
      }).render()
      renderOnce = true
    })
  }
}
const rankingListData: { title: string; total: number }[] = []
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234
  })
}
const salesData = [
  {
    x: '1月',
    y: 809
  },
  {
    x: '2月',
    y: 766
  },
  {
    x: '3月',
    y: 585
  },
  {
    x: '4月',
    y: 763
  },
  {
    x: '5月',
    y: 853
  },
  {
    x: '6月',
    y: 898
  },
  {
    x: '7月',
    y: 1096
  },
  {
    x: '8月',
    y: 452
  },
  {
    x: '9月',
    y: 244
  },
  {
    x: '10月',
    y: 838
  },
  {
    x: '11月',
    y: 673
  },
  {
    x: '12月',
    y: 431
  }
]

onMounted(() => {
  column.value = new Column(columnContainer1.value, {
    data: salesData,
    xField: 'x',
    yField: 'y',
    height: 300,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      y: {
        alias: '销售量'
      }
    }
  })
  column.value?.render()
})

onBeforeUnmount(() => {
  column.value?.destroy()
  column.value = undefined
})
</script>

<template>
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
                  <span :class="`rankingItemNumber ${index < 3 ? 'active' : ''}`">
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
                  <span :class="`rankingItemNumber ${index < 3 ? 'active' : ''}`">
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
        <div style="display: flex" class="salesExtraWrap">
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
      content: ' ';
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
}.rankingList {
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
      content: ' ';
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
