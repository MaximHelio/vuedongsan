import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/scss/common.scss'

createApp(App)
.use(store)
.mount('#app')
