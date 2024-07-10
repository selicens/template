<script setup>
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons-vue'
defineOptions({ name: 'Trend' })
defineProps({
  flag: {
    type: String,
    default: 'up'
  }
})
</script>

<template>
  <div class="trendItem">
    <slot />
    <span :class="flag">
      <CaretUpOutlined v-if="flag === 'up'" />
      <CaretDownOutlined v-else />
    </span>
  </div>
</template>

<style scoped>
.trendItem {
  display: inline-block;
  font-size: 14px;
  line-height: 22px;

  .up,
  .down {
    position: relative;
    top: 1px;
    margin-left: 4px;
    span {
      font-size: 1em;
      transform: scale(0.83);
    }
  }
  .up {
    color: #f5222d;
  }
  .down {
    top: -1px;
    color: #52c41a;
  }

  &.trendItemGrey .up,
  &.trendItemGrey .down {
    color: #000;
  }

  &.reverseColor .up {
    color: #52c41a;
  }
  &.reverseColor .down {
    color: #f5222d;
  }
}
</style>
