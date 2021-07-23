import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    summoner: {},
    mostInfo: {},
  },
  mutations: {
    setSummoner (state, value) { state.summoner = value },
    setMostInfo (state, value) { state.mostInfo = value },
  },
  getters: {
    getSummoner (state) { return state.summoner },
    getMostInfo (state) { return state.mostInfo },
  },
  actions: {
  },
  modules: {
  }
})
