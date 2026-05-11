import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router' // Додаємо імпорт роутера
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router) // Підключаємо роутер до додатка

app.mount('#app')