<script setup lang="ts">
import type { CSSProperties } from 'vue';
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
  SmileOutlined,
  DownOutlined
} from '@ant-design/icons-vue';
import InternationalIzation from '../icons/Internationalization.vue';

defineOptions({
  name: 'BasicLayout'
});

interface Props {
  logo?: string,
  title?: string
  router?: string[]
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
</script>

<template>
  <a-layout>
    <a-layout-header :style="headerStyle">
      <div class="layout-header">
        <a class="layout-header-left">
          <slot name="logo"><img width="auto" height="22" :src="props.logo" alt="logo"></slot>
          <h1 class="layout-header-left-title"><slot name="title">{{ props.title }}</slot></h1>
        </a>
        <a-space size="middle" class="layout-header-right">
          <a-dropdown>
            <QuestionCircleOutlined />
          </a-dropdown>
          <a-dropdown>
            <InternationalIzation />
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
      <a-layout-sider :style="siderStyle" v-model:collapsed="collapsed">
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
            <a-menu-item key="10">
              <file-outlined />
              <span>File</span>
            </a-menu-item>
            <a-menu-item key="11">
              <file-outlined />
              <span>File</span>
            </a-menu-item>
            <a-menu-item key="12">
              <file-outlined />
              <span>File</span>
            </a-menu-item>
            <a-menu-item key="13">
              <file-outlined />
              <span>File</span>
            </a-menu-item>
            <a-menu-item key="14">
              <file-outlined />
              <span>File</span>
            </a-menu-item>
            <a-menu-item key="15">
              <file-outlined />
              <span>File</span>
            </a-menu-item>
            <a-menu-item key="16">
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
</template>

<style scoped>
.ant-layout {
  min-height: 100%;
}
.ant-menu {
  min-height: 100%;
  background-color: transparent;
  flex: 1 1 0%;
  overflow: hidden auto;
}
.ant-menu-light.ant-menu-root.ant-menu-inline,
.ant-menu-light.ant-menu-root.ant-menu-vertical {
  border-inline-end: none;
}
.layout-header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.layout-header-left{
  display: flex;
  align-items: center;
  height: 100%;
}
.layout-header-left-title {
  height:32px;
  margin-block:0;
  margin-inline:0;
  margin-inline-start:8px;
  font-weight:600;
  color:rgba(0, 0, 0, 0.88);
  font-size:18px;
  line-height:32px;
}
.layout-header-right {
  color: rgba(0, 0, 0, 0.45);
}
.layout-sider-collapsed-button {
    position: absolute;
    inset-block-start: 18px;
    z-index: 101;
    width: 24px;
    height: 24px;
    text-align: center;
    border-radius: 40px;
    inset-inline-end: -13px;
    transition: transform 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    box-shadow: 0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08);
}
</style>
