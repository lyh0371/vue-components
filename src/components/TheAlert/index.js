/*
 * @Date: 2020-08-03 14:42:36
 */
import Vue from 'vue'
import alert from './index.vue'

const AlertConstructor = Vue.extend(alert)

function showAlert({ msg, show = true, time = 1000 }) {
  this.alertDom = new AlertConstructor({
    el: document.createElement('div'),
    data() {
      return {
        msg,
        show
      }
    }
  })
  document.body.appendChild(this.alertDom.$el)
  setTimeout(() => {
    this.alertDom.show = false
    this.alertDom.$destroy()
  }, time)
}

function registryAlert() {
  Vue.prototype.$alert = showAlert
}
export default registryAlert
