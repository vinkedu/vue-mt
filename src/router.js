//router.js 加载所有组件并且指定访问路径

import Vue from 'vue'
import Router from 'vue-router'
//1.1:加载Goods组件
import Goods from './components/goods/Goods';
//1.2:加载Ratings组件
import Ratings from "./components/ratings/Ratings"
//1.2:加载Seller组件
import Seller from "./components/seller/Seller"

Vue.use(Router)

export default new Router({
  routes: [
    //path 组件访问路由
    //如果访问 /home a <router-link to="/home">...
    //对应组件
    { path: "/", redirect: "/goods" },
    { path: "/goods", component: Goods },
    { path: "/ratings", component: Ratings },
    { path: "/seller", component: Seller }
  ],
  mode: "history",
  linkActiveClass: "active"
})
