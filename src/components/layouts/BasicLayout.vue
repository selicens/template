<script setup lang="ts">
import { watch, type CSSProperties } from 'vue';
import {
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  PieChartOutlined,
  DesktopOutlined,
  LeftOutlined,
  RightOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  MenuOutlined
} from '@ant-design/icons-vue';
import InternationalIzation from '../icons/Internationalization.vue';

defineOptions({
  name: 'BasicLayout'
});

interface Props {
  logo?: string
  title?: string
  router?: string[]
  layout?: 'default' | 'top' | 'right'
}
const props = withDefaults(defineProps<Props>(), {
  logo: 'https://vuejs.org/images/logo.png',
  title: 'Admin Template'
})

defineSlots<{
  logo: any,
  title: any,
  content: any,
  navbar: any,
  footer: any,
  breadcrumb: any,
  noticeBar: any,
}>()

const headerStyle: CSSProperties = {
  height: '56px',
  lineHeight:' 56px',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  zIndex: '19',
  borderBlockEnd: '1px solid rgba(5, 5, 5, 0.06)',
  paddingInline: '10px',
  userSelect: 'none',
  backdropFilter: 'blur(8px)',
  transition: 'background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: 'transparent',
  height: '100%',
  padding: '24px',
  userSelect: 'none'
};

const siderStyle: CSSProperties = {
  color: '#ccc',
  backgroundColor: 'transparent',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  paddingInline: '8px',
  paddingBlock: 0,
  borderInlineEnd: '1px solid rgba(5, 5, 5, 0.06)',
  marginInlineEnd: '-1px',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: 'transparent',
  userSelect: 'none'
};

const selectedKeys = ref<string[]>([]);
const collapsed = ref(false)
const viewportWidth = ref(window.innerWidth || document.documentElement.clientWidth)
const isViewport = computed(() => {
  return viewportWidth.value < 768 ? false : true
})
const drawerOpen = ref(false)
onMounted(() => {
  window.addEventListener('resize', () => {
    viewportWidth.value = window.innerWidth || document.documentElement.clientWidth
  })
  const configs = import.meta.glob('../../views/**/index.ts', { eager: true, import: 'default' })
  const components = import.meta.glob('../../views/**/index.vue', { eager: true, import: 'default' })
  const routes = []
  const generateRoutes = () => {
    for (const key in configs) {
      const path = key.replace('../../views', '').replace(/\/index\.ts$/, '')
      const name = configs[key].title
      routes.push({
        path: path,
        name: name,
        component: components[1]
      })
    }
  }
  generateRoutes()
  console.log(routes)
})
</script>

<template>
  <a-layout>
    <slot name="noticeBar">
      <a-alert message="公告: 超市狂欢季，折扣来袭！买得越多，省得越多！一站式购物，全场满减，品质生活，从此开始！别错过，速来抢购，让优惠装满你的购物车" banner closable type="info">
      </a-alert>
    </slot>
    <a-layout-header :style="headerStyle">
      <div class="layout-header">
        <a class="layout-header-left" v-if="isViewport">
          <slot name="logo" class="layout-header-left-logo"><img width="auto" height="22" :src="props.logo" alt="logo"></slot>
          <h1 class="layout-header-left-title"><slot name="title">{{ props.title }}</slot></h1>
        </a>
        <div class="layout-header-left" v-else>
          <MenuOutlined @click="drawerOpen = !drawerOpen" />
        </div>
        <a-space size="middle" class="layout-header-right">
          <a-dropdown>
            <QuestionCircleOutlined style="font-size: 16px" />
          </a-dropdown>
          <a-dropdown>
            <InternationalIzation style="font-size: 16px" />
            <template #overlay>
              <a-menu>
                <a-menu-item>CN 简体中文</a-menu-item>
                <a-menu-item>US English</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <a-dropdown>
            <a-space>
              <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              <span>Selicens</span>
            </a-space>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a href="javascript:;">
                    <LogoutOutlined />
                    退出登录
                  </a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-space>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider :style="siderStyle" v-model:collapsed="collapsed" v-if="isViewport">
        <slot name="navbar" />
        <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item key="1">
            <component :is="PieChartOutlined" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>User</span>
              </span>
            </template>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Team</span>
              </span>
            </template>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
        <div class="layout-sider-collapsed-button" @click="collapsed = !collapsed">
          <template v-if="collapsed">
            <RightOutlined />
          </template>
          <template v-else>
            <LeftOutlined />
          </template>
        </div>
        </a-layout-sider>
      <a-layout>
        <a-layout-content :style="contentStyle">
          <slot name="breadcrumb">
            <a-breadcrumb style="margin: 16px 0">
              <a-breadcrumb-item>User</a-breadcrumb-item>
              <a-breadcrumb-item>Bill</a-breadcrumb-item>
            </a-breadcrumb>
          </slot>
          <slot name="content">
            <a-card>
              Content
            </a-card>
          </slot>
        </a-layout-content>
        <a-layout-footer :style="footerStyle">
          <slot name="footer">Powered by Selicens</slot>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
  <img src="https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr" style="position: absolute; bottom: 0px; left: 0px; width: 331px;">
  <a-drawer v-model:open="drawerOpen" :closable="false" placement="left" width="256">
    <div class="layout-sider-collapsed-button" @click="drawerOpen = !drawerOpen">
      <LeftOutlined />
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu-item key="1">
        <component :is="PieChartOutlined" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <desktop-outlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            <span>User</span>
          </span>
        </template>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <team-outlined />
            <span>Team</span>
          </span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <file-outlined />
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </a-drawer>
</template>

<style scoped src="./basic.css"></style>
