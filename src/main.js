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

//引入mui的样式
import './lib/mui/css/mui.css'

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
