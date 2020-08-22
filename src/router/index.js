import { createRouter, createWebHistory } from "vue-router"

// store
import composeAuth from "@/store/auth"

// pages
import Itexia from "@/pages/Itexia.vue"
import App from "@/pages/Itexia/App/App.vue"
import Login from "@/pages/Itexia/Login.vue"

// routes
import weatherRoutes from "./routes/weather"

// routes
const routes = [
  {
    path: "/",
    name: "itexia",
    meta: { public: true },
    redirect: { path: `/app` },
    component: Itexia,
    children: [
      {
        path: "/login",
        name: "login",
        meta: { public: true },
        component: Login
      },
      {
        path: "/app",
        name: "app",
        meta: { public: false },
        component: App,
        redirect: { path: `/app/weather` },
        children: weatherRoutes
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const { isAuthentificated } = composeAuth()

  if (to.matched.some(record => !record.meta?.public)) {
    if (!isAuthentificated.value) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
