<script setup lang="ts">
import { Pie } from '@antv/g2plot'
import { EllipsisOutlined } from '@ant-design/icons-vue'
defineOptions({ name: 'ProportionSales' })
const pieContainer1 = ref()
const pieContainer2 = ref()
const pieContainer3 = ref()
const salesType = ref('all')
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
      }
    },
    legend: false,
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    statistic: {
      title: {
        content: '销售额'
      }
    }
  })
  pie.render()
  pies.value.push(pie)
}
const salesTypeData = [
  {
    x: '家用电器',
    y: 4544
  },
  {
    x: '食用酒水',
    y: 3321
  },
  {
    x: '个护健康',
    y: 3113
  },
  {
    x: '服饰箱包',
    y: 2341
  },
  {
    x: '母婴产品',
    y: 1231
  },
  {
    x: '其他',
    y: 1231
  }
]
const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244
  },
  {
    x: '食用酒水',
    y: 321
  },
  {
    x: '个护健康',
    y: 311
  },
  {
    x: '服饰箱包',
    y: 41
  },
  {
    x: '母婴产品',
    y: 121
  },
  {
    x: '其他',
    y: 111
  }
]
const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99
  },
  {
    x: '食用酒水',
    y: 188
  },
  {
    x: '个护健康',
    y: 344
  },
  {
    x: '服饰箱包',
    y: 255
  },
  {
    x: '其他',
    y: 65
  }
]
onMounted(() => {
  renderPie(pieContainer1.value, salesTypeData)
  renderPie(pieContainer2.value, salesTypeDataOnline)
  renderPie(pieContainer3.value, salesTypeDataOffline)
})

onBeforeUnmount(() => {
  pies.value.forEach((pie) => {
    pie?.destroy?.()
  })
  pies.value = []
})
</script>

<template>
  <a-card title="销售额类别占比" class="salesCard" style="height: 100%">
    <template #extra>
      <a-flex :gap="8" align="center">
        <a-radio-group :value="salesType" @change="handleChangeSalesType">
          <a-radio-button value="all"> 全部渠道 </a-radio-button>
          <a-radio-button value="online"> 线上 </a-radio-button>
          <a-radio-button value="stores"> 门店 </a-radio-button>
        </a-radio-group>
        <a-dropdown placement="bottomRight">
          <template #overlay>
            <a-menu>
              <a-menu-item>操作一</a-menu-item>
              <a-menu-item>操作二</a-menu-item>
            </a-menu>
          </template>
          <EllipsisOutlined />
        </a-dropdown>
      </a-flex>
    </template>
    <div>
      <a-typography-text>销售额</a-typography-text>
      <div v-show="salesType === 'all'" ref="pieContainer1" />
      <div v-show="salesType === 'online'" ref="pieContainer2" />
      <div v-show="salesType === 'stores'" ref="pieContainer3" />
    </div>
  </a-card>
</template>

<style scoped>
.salesCardExtra {
  height: inherit;
  display: flex;
}

/* .salesTypeRadio {
  position: absolute;
  right: 54px;
  bottom: 12px;
}

.salesCard {
  :deep(.ant-card-head) {
    position: relative;
  }
} */
</style>
