import {createRouter, createWebHistory} from "vue-router"
import menuRouters from "./menu.ts"

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/index/index.vue"),
    meta: {
      title: "首页"
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/login.vue"),
    meta: {
      title: "登录页"
    }
  },
  {
    path: "/munu",
    name: "munu",
    component: () => import("@/pages/menu/menu.vue"),
    children: menuRouters
  },
]

const Router = createRouter({
  history: createWebHistory(),
  routes
})


export default Router;