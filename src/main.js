//main.js  加载所有资源(组件;js/css/..)创建vue实例对象
import Vue from 'vue'
import App from './App.vue'
//1.加载路由模块
import router from './router'
import Vuelazyload from 'vue-lazyload'
//2.是否是生产模块 false
Vue.config.productionTip = false

Vue.use(Vuelazyload,{
  loading:require('./common/default.jpeg')
})
//3.创建vue实现对象挂载
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
