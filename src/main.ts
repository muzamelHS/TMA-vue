import { createApp, markRaw } from 'vue'
import { createPinia, type Pinia } from 'pinia'
import Toast, { type PluginOptions } from 'vue-toastification'
import App from '@/App.vue'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import routes from '~pages'
import '@/assets/main.css'
import 'vue-toastification/dist/index.css'
/**
 * Register router
 */
const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 * Register Pinia
 */
const pinia: Pinia = createPinia()
pinia.use(({ store }): void => {
  store.router = markRaw(router)
})
const app = createApp(App)

const toastOptions: PluginOptions = {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 5,
  newestOnTop: true
}

app.use(Toast, toastOptions)
app.use(pinia)
app.use(router)

app.mount('#app')
