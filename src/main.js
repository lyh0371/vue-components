/*
 * @Date: 2020-08-03 14:31:15
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Alert from './components/TheAlert2/index'
Vue.config.productionTip = false
// Vue.prototype.$Alert = Alert
Vue.use(Alert)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
