/*
 * @Date: 2020-08-04 10:39:57
 */
let Vue
class Store {
  constructor(options) {
    this._mutations = options.mutations
    this._actions = options.actions
    this.state = new Vue({
      data: options.state
    })

    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }
  // store.commit('add',1)
  commit(type, payload) {
    const entry = this._mutations[type]
    if (entry) {
      entry(this.state, payload)
    }
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    if (entry) {
      entry(this, payload)
    }
  }
}


function install(_vue) {
  Vue = _vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}
export default {
  Store,
  install
}