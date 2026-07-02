# Admin Template

基于 **Vue 3 + TypeScript + antdv-next** 的后台管理模板。

## 技术栈

| 类别     | 技术                 |
| -------- | -------------------- |
| 框架     | Vue 3.5 + TypeScript |
| UI 组件  | antdv-next           |
| 状态管理 | Pinia                |
| 路由     | VueRouter            |
| 国际化   | vue-i18n             |
| HTTP     | Axios                |
| 构建工具 | Vite Plus            |
| 包管理   | pnpm                 |

## 功能特性

- **三种布局模式**：侧边菜单 + 顶部菜单（mixed）、仅侧边菜单（side）、仅顶部菜单（top）
- **标签页管理**：多标签页切换，支持关闭所有、关闭其他、关闭左侧、关闭右侧、刷新
- **右键菜单**：标签页右键操作菜单
- **水印**：可配置的全局水印，覆盖整个布局
- **响应式**：移动端自适应，侧边栏折叠为抽屉导航
- **主题切换**：浅色 / 深色主题切换
- **国际化**：支持中英文切换（vue-i18n）
- **Axios 封装**：请求拦截器自动注入 token，响应拦截器统一处理错误

## 项目结构

```tree
src/
├── components
├── composables
├── locales
├── services
├── stores
├── views
├── App.vue
└── main.ts
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```
