/*
 * @Date: 2020-08-04 09:08:16
 */
let Vue
class LVueRouter {
  constructor(options) {
    this.$options = options
    // this.current = '/'
    Vue.util.defineReactive(this, 'current', window.location.hash.slice(1))
    // 监听url
    window.addEventListener('hashchange', () => {
      this.current = window.location.hash.slice(1)
    })
    this.routerMap = {}
    this.$options.routes.forEach(route => {
      this.routerMap[route.path] = route
    })
  }
}
LVueRouter.install = _vue => {
  Vue = _vue
  //   挂载$router
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router // 把router挂载到vue上
      }
    }
  })
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      //   <a href="#/home"></a>
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    }
  })

  Vue.component('router-view', {
    render(h) {
      const { routerMap, current } = this.$router
      console.log(this.$router)
      let component = routerMap[current].component

      return h(component)
    }
  })
}

export default LVueRouter
