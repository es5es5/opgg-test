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
    matchList: {
      games: [],
      positions: [{
        position: ''
      }],
    }
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
    // Match
    getGames솔랭 (state) { return state.matchList.games.filter(item => item.gameType === '솔랭') || [] },
    getGames자랭 (state) { return state.matchList.games.filter(item => item.gameType === '자유 5:5 랭크') || [] },
  },
  actions: {
  },
  modules: {
  }
})
