<script setup lang="ts">
import { Radar } from '@antv/g2plot'
import { PlusOutlined } from '@ant-design/icons-vue'
defineOptions({ name: 'Workplace' })

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
  <a-flex vertical gap="24">
    <a-row :gutter="24">
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
              {{ currentUser.title }} | {{ currentUser.group }}
            </div>
          </div>
        </a-flex>
      </a-col>
      <a-col :span="6">
        <div class="extraContent">
          <div class="statItem">
            <a-statistic title="项目数" :value="56" />
          </div>
          <!-- <a-divider type="vertical" style="height: 80px; border-color: #7cb305"></a-divider> -->
          <div class="statItem">
            <a-statistic title="团队内排名" :value="8" suffix="/ 24" />
          </div>
          <!-- <a-divider type="vertical" style="height: 80px; border-color: #7cb305"></a-divider> -->
          <div class="statItem">
            <a-statistic title="项目访问" :value="2223" />
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
        <a-flex vertical gap="24">
          <a-card
            class="projectList"
            title="进行中的项目"
            :bordered="false"
            :loading="false"
            :body-style="{ padding: 0 }"
          >
            <template #extra>
              <router-link to="/">
                全部项目
              </router-link>
            </template>
            <a-card-grid v-for="item in projectNotice" :key="item.id" class="projectGrid">
              <a-card :body-style="{ padding: 0 }" style="box-shadow: none" :bordered="false">
                <a-card-meta
                  :description="item.description"
                  style="width: 100%"
                >
                  <template #title>
                    <div class="cardTitle">
                      <a-avatar size="small" :src="item.logo" />
                      <router-link :to="item.href">
                        {{ item.title }}
                      </router-link>
                    </div>
                  </template>
                </a-card-meta>
                <div class="projectItemContent">
                  <router-link :to="item.memberLink">
                    {{ item.member || '' }}
                  </router-link>
                  <span class="datetime" :title="item.updatedAt">
                    {{ item.updatedAt }}
                  </span>
                </div>
              </a-card>
            </a-card-grid>
          </a-card>
          <a-card
            :body-style="{ padding: 0 }"
            :bordered="false"
            class="activeCard"
            title="动态"
            :loading="false"
          >
            <a-list
              :data-source="activities"
              class="activitiesList"
            >
              <template #renderItem="{ item }">
                <a-list-item :key="item.id">
                  <a-list-item-meta>
                    <template #title>
                      <span>
                        <a class="username">{{ item.user.name }}</a>&nbsp;
                        <span class="event">
                          <span>{{ item.template1 }}</span>&nbsp;
                          <a href=""> {{ item?.group?.name }} </a>&nbsp;
                          <span>{{ item.template2 }}</span>&nbsp;
                          <a href=""> {{ item?.project?.name }} </a>
                        </span>
                      </span>
                    </template>
                    <template #avatar>
                      <a-avatar :src="item.user.avatar" />
                    </template>
                    <template #description>
                      <span class="datetime" :title="item.updatedAt">
                        {{ item.updatedAt }}
                      </span>
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </template>
            </a-list>
          </a-card>
        </a-flex>
      </a-col>
      <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
        <a-flex vertical gap="24">
          <a-card
            title="快速开始 / 便捷导航"
            :bordered="false"
            :body-style="{ padding: 0 }"
          >
            <div style="padding: 20px 0 8px 24px;">
              <a-button size="small" type="primary" ghost>
                <PlusOutlined /> 添加
              </a-button>
            </div>
          </a-card>
          <a-card
            :bordered="false"
            title="XX 指数"
          >
            <div class="chart">
              <div ref="radarContainer" />
            </div>
          </a-card>
          <a-card
            :body-style="{ paddingTop: '12px', paddingBottom: '12px' }"
            :bordered="false"
            title="团队"
          >
            <div class="members">
              <a-row :gutter="48">
                <a-col v-for="item in projectNotice" :key="`members-item-${item.id}`" :span="12">
                  <router-link :to="item.href">
                    <a-avatar :src="item.logo" size="small" />
                    <span class="member">{{ item.member }}</span>
                  </router-link>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-flex>
      </a-col>
    </a-row>
  </a-flex>
</template>

<style scoped>
.avatar {
  flex: 0 1 72px;
  & > span {
    display: block;
    width: 72px;
    height: 72px;
    border-radius: 72px;
  }
}
.content {
  position: relative;
  top: 4px;
  flex: 1 1 auto;
  margin-left: 24px;
  color: rgba(0, 0, 0, 0.88);
  line-height: 22px;
  .contentTitle {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
}
.extraContent {
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

  float: right;
  white-space: nowrap;
  .statItem {
    position: relative;
    display: inline-block;
    padding: 0 32px;
    > p:first-child {
      margin-bottom: 4px;
      color: var(--pro-ant-color-text-tertiary);
      font-size: 14px;
      line-height: 22px;
    }
    > p {
      margin: 0;
      color:var(--pro-ant-color-text);
      font-size: 30px;
      line-height: 38px;
      > span {
        color: var(--pro-ant-color-text-tertiary);
        font-size: 20px;
      }
    }
    &::after {
      position: absolute;
      top: 8px;
      right: 0;
      width: 1px;
      height: 40px;
      background-color: rgba(5, 5, 5, 0.06);
      content: '';
    }
    &:last-child {
      padding-right: 0;
      &::after {
        display: none;
      }
    }
  }
}
.projectList {
  :deep(.ant-card-meta-description) {
    height: 44px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.88);
    line-height: 22px;
  }
  .cardTitle {
    font-size: 0;
    a {
      display: inline-block;
      height: 24px;
      margin-left: 12px;
      color: rgba(0, 0, 0, 0.88);
      font-size: 14px;
      line-height: 24px;
      vertical-align: top;
      &:hover {
        color: #1890ff;
      }
    }
  }
  .projectGrid {
    width: 33.33%;
  }
  .projectItemContent {
    display: flex;
    height: 20px;
    margin-top: 8px;
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    a {
      display: inline-block;
      flex: 1 1 0;
      color: rgba(0, 0, 0, 0.88);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
      &:hover {
        color: #1890ff;
      }
    }
    .datetime {
      flex: 0 0 auto;
      float: right;
      color: rgba(0, 0, 0, 0.25);
      margin-left: 10px;
    }
  }
}

.datetime {
  color: rgba(0, 0, 0, 0.25);
}

.activitiesList {
  /* padding: 0 24px 8px 24px; */
  .username {
    color: rgba(0, 0, 0, 0.88);
  }
  .event {
    font-weight: normal;
  }
}

.members {
  a {
    display: block;
    height: 24px;
    margin: 12px 0;
    color: rgba(0, 0, 0, 0.88);
    transition: all 0.3s;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    .member {
      margin-left: 12px;
      font-size: 14px;
      line-height: 24px;
      vertical-align: top;
    }
    &:hover {
      color: #1890ff;
    }
  }
}


@media screen and (max-width: 1200px) and (min-width: 992px) {
  .activeCard {
    margin-bottom: 24px;
  }
  .members {
    margin-bottom: 0;
  }
  .extraContent {
    margin-left: -44px;
    .statItem {
      padding: 0 16px;
    }
  }
}

@media screen and (max-width: 992px) {
  .activeCard {
    margin-bottom: 24px;
  }
  .members {
    margin-bottom: 0;
  }
  .extraContent {
    float: none;
    margin-right: 0;
    .statItem {
      padding: 0 16px;
      text-align: left;
      &::after {
        display: none;
      }
    }
  }
}
</style>
