// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'

// 注册mint-ui
Vue.use(MintUI)

//导入路由的包
import VueRouter from 'vue-router'
//注册路由组件
Vue.use(VueRouter)

//导入vue-resource
import VueResource from 'vue-resource'
//注册vue-resource
Vue.use(VueResource)
//设置请求的跟路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/api/';
//引入mui的样式
import './lib/mui/css/mui.css'

//引入购物车的字体图标
import './lib/mui/css/icons-extra.css'
// css默认样式初始化
import './styles/common.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
