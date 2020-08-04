/*
 * @Date: 2020-08-04 10:31:08
 */
import Vue from 'vue'
import Vuex from './lvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    num() {
      return this.state * 2
    }
  },
  mutations: {
    add(state) {
      state.num++
    }
  },
  actions: {
    add({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  },
  modules: {}
})
