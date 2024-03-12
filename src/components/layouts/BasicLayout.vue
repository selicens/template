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
  TranslationOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
  DownOutlined
} from '@ant-design/icons-vue';

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
  title: 'Admin Layout'
})

defineSlots<{
  logo: any,
  title: any,
  content: any,
  menu: any,
  footer: any
}>()

const headerStyle: CSSProperties = {
  height: '56px',
  lineHeight:' 56px',
  backgroundColor: 'transparent',
  zIndex: '19',
  borderBlockEnd: '1px solid rgba(5, 5, 5, 0.06)',
  paddingInline: '10px',
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: 'transparent',
  height: '100%',
  padding: '24px'
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
};

const selectedKeys = ref<string[]>([]);
const collapsed = ref(false)
const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp', 'https://aliyuncdn.antdv.com/vue.png'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp', 'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['https://aliyuncdn.antdv.com/logo.png', 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
  },
];
const visible = ref(data.map(() => ({visible: false})))
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
            <TranslationOutlined />
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
              <a-table :columns="columns" :data-source="data">
                <template #headerCell="{ column }">
                  <template v-if="column.key === 'name'">
                    <span>
                      <smile-outlined />
                      Name
                    </span>
                  </template>
                </template>

                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'name'">
                    <a>
                      {{ record.name }}
                    </a>
                  </template>
                  <template v-else-if="column.key === 'tags'">
                    <a-image
                      :preview="{ visible: false }"
                      :width="100"
                      :src="record.tags[0]"
                      @click="visible[data.findIndex((item) => item === record)].visible = true" 
                    />
                    <div style="display: none">
                      <a-image-preview-group :preview="{ visible: visible[data.findIndex((item) => item === record)].visible, onVisibleChange: vis => (visible[data.findIndex((item) => item === record)].visible = vis) }">
                        <a-image :src="record.tags[0]" ></a-image>
                        <a-image :src="record.tags[1]" ></a-image>
                      </a-image-preview-group>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <span>
                      <a>Invite 一 {{ record.name }}</a>
                      <a-divider type="vertical" />
                      <a>Delete</a>
                      <a-divider type="vertical" />
                      <a class="ant-dropdown-link">
                        More actions
                        <down-outlined />
                      </a>
                    </span>
                  </template>
                </template>
              </a-table>
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
