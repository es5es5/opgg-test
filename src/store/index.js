import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    summoner: {
      ladderRank: {},
      leagues: [{
        hasResults: false,
        tierRank: {
          imageUrl: ''
        }
      }, {
        hasResults: false,
        tierRank: {
          imageUrl: ''
        }
      }],
      previousTiers: []
    },
    mostInfo: {},
    matchList: {}
  },
  mutations: {
    setSummoner (state, value) { state.summoner = value },
    setMostInfo (state, value) { state.mostInfo = value },
    setMatchList (state, value) { state.matchList = value },
  },
  getters: {
    getSummoner (state) { return state.summoner },
    getMostInfo (state) { return state.mostInfo },
    getMatchList (state) { return state.matchList },
  },
  actions: {
  },
  modules: {
  }
})
