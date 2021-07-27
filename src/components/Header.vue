<template>
  <header id="header">
    <div class="search_wrap">
      <input type="text" class="search" placeholder="소환사명,챔피언…" v-model="summonerName" @keyup.enter="init">
    </div>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  created () {
    this.init()
  },
  data () {
    return {
      summonerName: 'Louis'
    }
  },
  methods: {
    init () {
      if (this.summonerName === '') return false
      this.getSummoner()
      this.getSummonerMostInfo()
      this.getSummonerMatchList()
    },
    getSummoner () {
      axios.get(
        `https://codingtest.op.gg/api/summoner/${this.summonerName}`
      ).then(result => {
        this.$store.commit('setSummoner', result.data.summoner)
      })
    },
    getSummonerMostInfo () {
      axios.get(
        `https://codingtest.op.gg/api/summoner/${this.summonerName}/mostInfo`
      ).then(result => {
        this.$store.commit('setMostInfo', result.data)
      })
    },
    getSummonerMatchList () {
      axios.get(
        `https://codingtest.op.gg/api/summoner/${this.summonerName}/matches`
      ).then(result => {
        this.$store.commit('setMatchList', result.data)
      })
    },
    getSummonerMatchDetail (gameId) {
      axios.get(
        `https://codingtest.op.gg/api/summoner/${this.summonerName}/matchDetail/${gameId}`
      ).then(result => {
        this.$store.commit('setMatchDetail', result.data)
      })
    },
    getItemList () {
      axios.get(
        'http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json'
      ).then(result => {
        this.$store.commit('setMatchDetail', result.data)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
#header {
  background-color: #1ea1f7;
  position: relative;

  .search_wrap {
    position: relative;
    width: 1000px;
    height: 97px;
    margin: 0 auto;

    .search {
      position: absolute;
      right: 0;
      bottom: 10px;
      width: 260px;
      height: 32px;
      border-radius: 2px;
      background-color: #ffffff;
      padding: 8px 12px 8px 14px;
      border: transparent;
      font-size: 12px;

    }
    .placehoder::after {
      position: absolute;
      font-size: 104px;
      right: 10px;
      top: 12px;
      content: '.GG';
      pointer-events: none;
      opacity: 0.6;
      color: #000;
    }
  }
}
</style>
