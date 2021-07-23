<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  created () {
    this.getSummoner()
    this.getSummonerMostInfo()
    this.getSummonerMatchList()
  },
  data () {
    return {
      summonerName: '이뿐 냐옹이'
    }
  },
  methods: {
    getSummoner () {
      axios.get(
        `https://codingtest.op.gg/api/summoner/${this.summonerName}`
      ).then(result => {
        console.log(result)
        this.$store.commit('setSummoner', result.data.summoner)
      })
    },
    getSummonerMostInfo () {
      axios.get(
        `https://codingtest.op.gg/api/summoner/${this.summonerName}/mostInfo`
      ).then(result => {
        console.log(result)
        this.$store.commit('setMostInfo', result.data)
      })
    },
    getSummonerMatchList () {
      axios.get(
        `https://codingtest.op.gg/api/summoner/${this.summonerName}/matches`
      ).then(result => {
        console.log(result)
        this.$store.commit('setMatchList', result.data)
      })
    },
    getSummonerMatchDetail (gameId) {
      axios.get(
        `https://codingtest.op.gg/api/summoner/${this.summonerName}/matchDetail/${gameId}`
      ).then(result => {
        console.log(result)
        this.$store.commit('setMatchDetail', result.data)
      })
    },
    getItemList () {
      axios.get(
        'http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json'
      ).then(result => {
        console.log(result)
        this.$store.commit('setMatchDetail', result.data)
      })
    },
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active { transition: opacity .1s }
.fade-enter,
.fade-leave-to { opacity: 0 }

body {
  background-color: #ededed;
}

@import '@/../colony-vue/src/assets/scss/reset.scss';
@import '@/assets/scss/variable.scss';
</style>
