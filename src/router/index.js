import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import CartItems from '../views/CartItems.vue'
import ProductList from '../views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
   
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartItems
    }
    
  ]
})

export default router
