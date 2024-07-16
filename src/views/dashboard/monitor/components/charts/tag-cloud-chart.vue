<script setup>
import { WordCloud } from '@antv/g2plot'
defineOptions({ name: 'TagCloudChart' })
const tagContainer = ref()
const tag = ref()
onMounted(() => {
  tag.value = new WordCloud(tagContainer.value, {
    data: [
      {
        name: '三亚市',
        value: 69,
        type: 1
      },
      {
        name: '白山市',
        value: 70,
        type: 2
      },
      {
        name: '石嘴山市',
        value: 96,
        type: 1
      },
      {
        name: '红河哈尼族彝族自治州',
        value: 36,
        type: 1
      },
      {
        name: '香港岛',
        value: 53,
        type: 1
      },
      {
        name: '三亚市',
        value: 90,
        type: 0
      },
      {
        name: '楚雄彝族自治州',
        value: 6,
        type: 1
      },
      {
        name: '长治市',
        value: 59,
        type: 2
      },
      {
        name: '三沙市',
        value: 16,
        type: 2
      },
      {
        name: '泉州市',
        value: 87,
        type: 1
      },
      {
        name: '安顺市',
        value: 55,
        type: 2
      },
      {
        name: '清远市',
        value: 98,
        type: 1
      },
      {
        name: '亳州市',
        value: 2,
        type: 1
      },
      {
        name: '重庆市',
        value: 47,
        type: 0
      },
      {
        name: '来宾市',
        value: 61,
        type: 0
      },
      {
        name: '嘉义县',
        value: 36,
        type: 1
      },
      {
        name: '宝鸡市',
        value: 44,
        type: 1
      },
      {
        name: '宜昌市',
        value: 95,
        type: 1
      },
      {
        name: '沧州市',
        value: 63,
        type: 0
      },
      {
        name: '海南藏族自治州',
        value: 89,
        type: 1
      },
      {
        name: '雅安市',
        value: 17,
        type: 0
      },
      {
        name: '白银市',
        value: 44,
        type: 2
      },
      {
        name: '临汾市',
        value: 21,
        type: 1
      },
      {
        name: '苏州市',
        value: 65,
        type: 1
      },
      {
        name: '新界',
        value: 84,
        type: 2
      },
      {
        name: '榆林市',
        value: 80,
        type: 1
      },
      {
        name: '三沙市',
        value: 24,
        type: 1
      },
      {
        name: '威海市',
        value: 24,
        type: 1
      },
      {
        name: '泰州市',
        value: 82,
        type: 1
      },
      {
        name: '克拉玛依市',
        value: 30,
        type: 1
      },
      {
        name: '邯郸市',
        value: 72,
        type: 1
      },
      {
        name: '亳州市',
        value: 57,
        type: 1
      },
      {
        name: '荆门市',
        value: 82,
        type: 2
      },
      {
        name: '宜昌市',
        value: 98,
        type: 1
      },
      {
        name: '伊犁哈萨克自治州',
        value: 90,
        type: 1
      },
      {
        name: '柳州市',
        value: 26,
        type: 1
      },
      {
        name: '日照市',
        value: 10,
        type: 0
      },
      {
        name: '石嘴山市',
        value: 9,
        type: 2
      },
      {
        name: '铁岭市',
        value: 60,
        type: 1
      },
      {
        name: '济南市',
        value: 55,
        type: 1
      },
      {
        name: '三沙市',
        value: 80,
        type: 0
      },
      {
        name: '临沂市',
        value: 62,
        type: 1
      },
      {
        name: '鸡西市',
        value: 52,
        type: 2
      },
      {
        name: '阿里地区',
        value: 96,
        type: 0
      },
      {
        name: '阿拉善盟',
        value: 43,
        type: 1
      },
      {
        name: '舟山市',
        value: 85,
        type: 1
      },
      {
        name: '澳门半岛',
        value: 11,
        type: 0
      },
      {
        name: '泰州市',
        value: 48,
        type: 0
      },
      {
        name: '杭州市',
        value: 61,
        type: 1
      },
      {
        name: '金门县',
        value: 97,
        type: 2
      },
      {
        name: '嘉兴市',
        value: 67,
        type: 1
      },
      {
        name: '潍坊市',
        value: 35,
        type: 0
      },
      {
        name: '北海市',
        value: 46,
        type: 1
      },
      {
        name: '本溪市',
        value: 72,
        type: 2
      },
      {
        name: '龙岩市',
        value: 8,
        type: 1
      },
      {
        name: '澳门半岛',
        value: 53,
        type: 1
      },
      {
        name: '黔西南布依族苗族自治州',
        value: 89,
        type: 0
      },
      {
        name: '无锡市',
        value: 66,
        type: 1
      },
      {
        name: '九龙',
        value: 68,
        type: 0
      },
      {
        name: '海东市',
        value: 78,
        type: 1
      },
      {
        name: '安阳市',
        value: 16,
        type: 1
      },
      {
        name: '黔南布依族苗族自治州',
        value: 36,
        type: 1
      },
      {
        name: '陇南市',
        value: 42,
        type: 1
      },
      {
        name: '香港岛',
        value: 24,
        type: 0
      },
      {
        name: '安阳市',
        value: 11,
        type: 0
      },
      {
        name: '离岛',
        value: 24,
        type: 1
      },
      {
        name: '海东市',
        value: 94,
        type: 0
      },
      {
        name: '汕头市',
        value: 6,
        type: 0
      },
      {
        name: '枣庄市',
        value: 52,
        type: 1
      },
      {
        name: '德州市',
        value: 88,
        type: 1
      },
      {
        name: '离岛',
        value: 18,
        type: 1
      },
      {
        name: '临汾市',
        value: 91,
        type: 0
      },
      {
        name: '牡丹江市',
        value: 34,
        type: 1
      },
      {
        name: '离岛',
        value: 64,
        type: 1
      },
      {
        name: '丽水市',
        value: 33,
        type: 1
      },
      {
        name: '聊城市',
        value: 48,
        type: 1
      },
      {
        name: '钦州市',
        value: 13,
        type: 1
      },
      {
        name: '嘉兴市',
        value: 74,
        type: 2
      },
      {
        name: '莆田市',
        value: 67,
        type: 1
      },
      {
        name: '萍乡市',
        value: 39,
        type: 1
      },
      {
        name: '北京市',
        value: 25,
        type: 1
      },
      {
        name: '九龙',
        value: 39,
        type: 1
      },
      {
        name: '临沧市',
        value: 65,
        type: 1
      },
      {
        name: '桂林市',
        value: 1,
        type: 0
      },
      {
        name: '黑河市',
        value: 72,
        type: 1
      },
      {
        name: '宿州市',
        value: 15,
        type: 1
      },
      {
        name: '呼和浩特市',
        value: 41,
        type: 2
      },
      {
        name: '岳阳市',
        value: 72,
        type: 0
      },
      {
        name: '安顺市',
        value: 13,
        type: 2
      },
      {
        name: '营口市',
        value: 33,
        type: 2
      },
      {
        name: '山南地区',
        value: 11,
        type: 2
      },
      {
        name: '南投县',
        value: 5,
        type: 2
      },
      {
        name: '乌海市',
        value: 56,
        type: 2
      },
      {
        name: '丹东市',
        value: 100,
        type: 2
      },
      {
        name: '中卫市',
        value: 76,
        type: 0
      },
      {
        name: '庆阳市',
        value: 23,
        type: 1
      },
      {
        name: '遵义市',
        value: 56,
        type: 0
      },
      {
        name: '晋中市',
        value: 6,
        type: 0
      },
      {
        name: '河源市',
        value: 34,
        type: 0
      },
      {
        name: '烟台市',
        value: 95,
        type: 0
      }
    ],
    height: 162,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontSize: [10, 20]
    },
    // 设置交互类型
    interactions: [{ type: 'element-active' }],
    state: {
      active: {
        // 这里可以设置 active 时的样式
        style: {
          lineWidth: 3
        }
      }
    }
  })
  tag.value?.render()
})
onBeforeUnmount(() => {
  tag.value?.destroy()
})
</script>

<template>
  <div ref="tagContainer"></div>
</template>

<style scoped></style>
