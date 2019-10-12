import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import Routes from './routes'
import axios from 'axios'


// axios 全局配置
axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
// axios.defaults.headers.xxx   请求头

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);

//  全局 配置

// 自定义指令(钩子函数):
Vue.directive('rainbow',{
  bind(element,binging,vonde){
    element.style.color = '#' + Math.random().toString(16).slice(2,8);
  }
});

// 自定义过滤器:
Vue.filter("to-upper",function (value) {
  return value.toUpperCase();
});



// 全局路由  在另一个文件中实现了
const router = new VueRouter({
  routes:Routes,
  mode:'history'
});


new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app');
