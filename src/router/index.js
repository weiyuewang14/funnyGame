import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../views/Home.vue";


//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push|replace方法
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => {
    }, () => {
    });
  }

};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => {
    }, () => {
    });
  }

};
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
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
export default router;
