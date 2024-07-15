<script setup lang="ts">
defineOptions({ name: 'Monitor' })
const numeral = (num: number) => {
  return num.toLocaleString()
}
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
</script>

<template>
  <a-flex vertical gap="16">
    <a-row :gutter="24">
      <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card title="活动实时交易情况">
          <a-row>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic
                title="今日交易总额"
                suffix="元"
                :value="numeral(124543233)"
              />
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
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-flex vertical gap="16">
          <a-card title="活动情况预测">content</a-card>
          <a-card title="卷核效率">content</a-card>
        </a-flex>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card title="各品类占比">content</a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: 24 }">
        <a-card title="热门搜索">content</a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: 24 }">
        <a-card title="资源剩余">content</a-card>
      </a-col>
    </a-row>
  </a-flex>
</template>

<style scoped></style>
