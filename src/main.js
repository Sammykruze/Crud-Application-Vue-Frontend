import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Router from 'vue-router'
import router from './router/index'
Vue.use(Router)

Vue.prototype.$http = axios
Vue.config.productionTip = false


new Vue({
  router,
  mode: "history",
  hash: false,
  render: h => h(App),
}).$mount('#app')
