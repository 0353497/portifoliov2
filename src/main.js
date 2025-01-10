import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import '/public/style.css'
import '/public/script.js'

createApp(App).use(router).mount('#app')
