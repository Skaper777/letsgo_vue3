import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { PageName } from "./PageName"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PageName.Index,
    component: () => import('../pages/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 50
      }
    }
  },
  routes
})

export default router