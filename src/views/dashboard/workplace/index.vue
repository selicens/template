<script setup lang="ts">
import { Radar } from '@antv/g2plot'
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
const currentUser = {
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  name: '吴彦祖',
  userid: '00000001',
  email: 'antdesign@alipay.com',
  signature: '海纳百川，有容乃大',
  title: '交互专家',
  group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
}

const projectNotice = [
  {
    id: 'xxx1',
    title: 'Alipay',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    updatedAt: '几秒前',
    member: '科学搬砖组',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx2',
    title: 'Angular',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    updatedAt: '6 年前',
    member: '全组都是吴彦祖',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx3',
    title: 'Ant Design',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    updatedAt: '几秒前',
    member: '中二少女团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx4',
    title: 'Ant Design Pro',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    description: '那时候我只会想自己想要什么，从不想自己拥有什么',
    updatedAt: '6 年前',
    member: '程序员日常',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx5',
    title: 'Bootstrap',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    description: '凛冬将至',
    updatedAt: '6 年前',
    member: '高逼格设计天团',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: 'React',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    description: '生命就像一盒巧克力，结果往往出人意料',
    updatedAt: '6 年前',
    member: '骗你来学计算机',
    href: '',
    memberLink: '',
  },
]

const activities = [
  {
    id: 'trend-1',
    updatedAt: '几秒前',
    user: {
      name: '曲丽丽',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template1: '在',
    template2: '新建项目',
  },
  {
    id: 'trend-2',
    updatedAt: '几秒前',
    user: {
      name: '付小小',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
    },
    group: {
      name: '高逼格设计天团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template1: '在',
    template2: '新建项目',
  },
  {
    id: 'trend-3',
    updatedAt: '几秒前',
    user: {
      name: '林东东',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
    },
    group: {
      name: '中二少女团',
      link: 'http://github.com/',
    },
    project: {
      name: '六月迭代',
      link: 'http://github.com/',
    },
    template1: '在',
    template2: '新建项目',
  },
  {
    id: 'trend-4',
    updatedAt: '几秒前',
    user: {
      name: '周星星',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
    },
    group: {
      name: '5 月日常迭代',
      link: 'http://github.com/',
    },
    template1: '将',
    template2: '更新至已发布状态',
  },
  {
    id: 'trend-5',
    updatedAt: '几秒前',
    user: {
      name: '朱偏右',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
    },
    group: {
      name: '工程效能',
      link: 'http://github.com/',
    },
    project: {
      name: '留言',
      link: 'http://github.com/',
    },
    template1: '在',
    template2: '发布了',
  },
  {
    id: 'trend-6',
    updatedAt: '几秒前',
    user: {
      name: '乐哥',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
    },
    group: {
      name: '程序员日常',
      link: 'http://github.com/',
    },
    project: {
      name: '品牌迭代',
      link: 'http://github.com/',
    },
    template1: '在',
    template2: '新建项目',
  },
]

const radarContainer = ref()
const radarData = [
  {
    name: '个人',
    label: '引用',
    value: 10,
  },
  {
    name: '个人',
    label: '口碑',
    value: 8,
  },
  {
    name: '个人',
    label: '产量',
    value: 4,
  },
  {
    name: '个人',
    label: '贡献',
    value: 5,
  },
  {
    name: '个人',
    label: '热度',
    value: 7,
  },
  {
    name: '团队',
    label: '引用',
    value: 3,
  },
  {
    name: '团队',
    label: '口碑',
    value: 9,
  },
  {
    name: '团队',
    label: '产量',
    value: 6,
  },
  {
    name: '团队',
    label: '贡献',
    value: 3,
  },
  {
    name: '团队',
    label: '热度',
    value: 1,
  },
  {
    name: '部门',
    label: '引用',
    value: 4,
  },
  {
    name: '部门',
    label: '口碑',
    value: 1,
  },
  {
    name: '部门',
    label: '产量',
    value: 6,
  },
  {
    name: '部门',
    label: '贡献',
    value: 5,
  },
  {
    name: '部门',
    label: '热度',
    value: 7,
  },
]
let radar: Radar
onMounted(() => {
  radar = new Radar(radarContainer.value, {
    data: radarData,
    xField: 'label',
    yField: 'value',
    seriesField: 'name',
    point: {
      size: 4,
    },
    legend: {
      layout: 'horizontal',
      position: 'bottom',
    },
  })
  radar.render()
})

onBeforeUnmount(() => {
  radar?.destroy?.()
})
</script>

<template>
  <a-row :gutter="10">
    <a-col :span="18">
      <a-flex gap="large">
        <div class="avatar">
          <a-avatar size="large" :src="currentUser.avatar" />
        </div>
        <div class="content">
          <div class="contentTitle">
            早安，
            {{ currentUser.name }}
            ，祝你开心每一天！
          </div>
          <div>
            {{ currentUser.title }} |{{ currentUser.group }}
          </div>
        </div>
      </a-flex>
    </a-col>
    <a-col :span="6">
      <a-flex gap="large">
        <a-statistic title="项目数" :value="56" />
        <a-divider type="vertical" style="height: 80px; border-color: #7cb305"></a-divider>
        <a-statistic title="团队内排名" :value="8" suffix="/ 24" />
        <a-divider type="vertical" style="height: 80px; border-color: #7cb305"></a-divider>
        <a-statistic title="项目访问" :value="2223" />
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
