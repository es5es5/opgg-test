<template>
  <div>
    <Header />
    <main id="main">
      <SummonerProfile />
      <div class="summary_wrap">
        <Rank />
      </div>
      <div class="stats_wrap">
        <Stats />
      </div>
    </main>
  </div>
</template>

<script>
import Header from './Header'
import SummonerProfile from './SummonerProfile'
import Rank from './Rank'
import Stats from './Stats.vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    SummonerProfile,
    Rank,
    Stats,
  }
}
</script>

<style lang="scss" scoped>
#main {
  width: 1440px;
  margin: 0 auto;
}
.summary_wrap {
  width: 300px;
}
</style>
