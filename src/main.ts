import './assets/main.css'

import 'antdv-next/dist/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import antdvX from '@antdv-next/x'

import App from './App.vue'
import i18n from './locales'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(antdvX)

app.mount('#app')
