import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/ui'
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
axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/api/v2/master-system';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(pinia)
    .use(router)
    .mount('#app')
