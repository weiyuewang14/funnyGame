import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/guess-number",
        name: "guessNumber",
        component: () => import("@/components/guessNumber")
      },
      {
        path: "/typing",
        name: "typing",
        component: () => import("@/components/typing")
      },
      {
        path: "/mine-sweeper",
        name: "minesweeper",
        component: () => import("@/components/mineSweeper")
      }
    ]
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
export default router;
