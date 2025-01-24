import { createRouter, createWebHistory } from 'vue-router'
import { app, pages } from '@/config'
import HomePage from '@/pages/Home/HomePage.vue'
import InventoryPage from '../pages/Inventory/InventoryPage.vue'
import ProductDescription from "@/pages/ProductDescription/ProductDescription.vue";




const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", 
      component: HomePage, 
      name: "Home" },
    {
      path: '/inventory',
      component: InventoryPage,
      name: 'inventory'},

    { path: "/product/:name",
        name: "ProductDescription", 
        component: ProductDescription },

  ]
})

export default router
