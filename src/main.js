import { createApp } from 'vue'
import App from './App.vue'
import uiComponents from '@/components/ui'
import router from "@/router"
import axios from "axios";
import { createPinia } from 'pinia'

import '@/assets/styles/styles.scss'

const app = createApp(App)

// create store
const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

// axios defaults
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Origins"] = "*";
axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'https://minselhoz.rogsc.xyz/api/v1';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


uiComponents.forEach(item => {
    app.component(item.name, item.component)
})

app
    .use(pinia)
    .use(router)
    .mount('#app')
