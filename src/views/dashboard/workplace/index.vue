<script setup>
defineOptions({ name: 'Workplace' })
const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
]
</script>

<template>
  <a-row :gutter="10">
    <a-col :span="18">
      <a-flex>
        <a-avatar size="large"></a-avatar>
        <a-flex vertical gap="small">
          <div>title</div>
          <div>subtitle</div>
        </a-flex>
      </a-flex>
    </a-col>
    <a-col :span="6">
      <a-flex gap="20">
        <a-flex vertical gap="small">
          <div>title</div>
          <div>subtitle</div>
        </a-flex>
        <a-flex vertical gap="small">
          <div>title</div>
          <div>subtitle</div>
        </a-flex>
        <a-flex vertical gap="small">
          <div>title</div>
          <div>subtitle</div>
        </a-flex>
      </a-flex>
    </a-col>
  </a-row>
  <a-row :gutter="10">
    <a-col :span="18">
      <a-flex vertical gap="small">
        <a-card title="Card Title">
          <a-card-grid style="width: 33.33%; text-align: center">Content</a-card-grid>
          <a-card-grid style="width: 33.33%; text-align: center">Content</a-card-grid>
          <a-card-grid style="width: 33.33%; text-align: center">Content</a-card-grid>
          <a-card-grid style="width: 33.33%; text-align: center">Content</a-card-grid>
          <a-card-grid style="width: 33.33%; text-align: center">Content</a-card-grid>
          <a-card-grid style="width: 33.33%; text-align: center">Content</a-card-grid>
        </a-card>
        <a-card title="动态">
          <a-list item-layout="horizontal" :data-source="data">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <template #title>
                    <a href="https://www.antdv.com/">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar src="https://joeschmoe.io/api/v1/random" />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-flex>
    </a-col>
    <a-col :span="6">
      <a-flex vertical gap="small">
        <a-card title="快速开始/便捷导航"> content </a-card>
        <a-card title="XX指数"> content </a-card>
        <a-card title="团队"> content </a-card>
      </a-flex>
    </a-col>
  </a-row>
</template>

<style scoped></style>
