import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from './views/CatalogView.vue'
import CartView from './views/CartView.vue'

const routes = [
  { path: '/', component: CatalogView },
  { path: '/cart', component: CartView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})