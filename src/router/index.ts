import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { PageName } from "./PageName"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PageName.Index,
    component: () => import('../pages/Index.vue')
  },
  {
    path: `/${PageName.Settings}`,
    name: PageName.Settings,
    redirect: `${PageName.Settings}/${PageName.SettingsInfo}`,
    component: () => import('../pages/settings/Index.vue'),
    children: [
      {
        path: `${PageName.SettingsInfo}`,
        name: PageName.SettingsInfo,
        component: () => import('../pages/settings/SettingsInfo.vue')
      },
      {
        path: `${PageName.SettingsEvents}`,
        name: PageName.SettingsEvents,
        component: () => import('../pages/settings/SettingsEvents.vue')
      }
    ]
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