import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import 'sm-crypto'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$sm3 = require('sm-crypto').sm3;

Vue.prototype.log = function (msg) {
  // eslint-disable-next-line no-console
  console.log(msg)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
