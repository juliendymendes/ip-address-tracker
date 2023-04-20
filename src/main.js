import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import * as leaflet from 'leaflet' 

const app = createApp(App)


app.use(leaflet)
app.use(createPinia())
app.use(router)

app.mount('#app')
