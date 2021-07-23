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
  },
  methods: {
    getSummoner () {
      axios.get(
        'https://codingtest.op.gg/api/summoner/%EB%A9%8D%EB%A9%8D%EC%9D%B4%EB%9E%91%EB%83%A5%EB%83%A5%EC%9D%B4'
      ).then(result => {
        console.log(result)
        this.$store.commit('setSummoner', result.data.summoner)
      })
    },
    getSummonerMostInfo () {
      axios.get(
        'https://codingtest.op.gg/api/summoner/%EB%A9%8D%EB%A9%8D%EC%9D%B4%EB%9E%91%EB%83%A5%EB%83%A5%EC%9D%B4/mostInfo'
      ).then(result => {
        console.log(result)
        this.$store.commit('setMostInfo', result.data)
      })
    }
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
