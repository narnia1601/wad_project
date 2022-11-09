import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.config.globalProperties.$link = 'https://us-central1-wadproject-f9644.cloudfunctions.net/app'