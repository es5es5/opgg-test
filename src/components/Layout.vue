<template>
  <div>
    <Header />
    <main id="main">
      <SummonerProfile />
      <div class="left">
        <Rank />
        <Stats />
      </div>
      <div class="right">
        <Average />
        <games />
      </div>
    </main>
  </div>
</template>

<script>
import Header from './Header'
import SummonerProfile from './SummonerProfile'
import Rank from './Rank'
import Stats from './Stats.vue'
import Average from './Average.vue'
import Games from './Games.vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    SummonerProfile,
    Rank,
    Stats,
    Average,
    Games,
  }
}
</script>

<style lang="scss" scoped>
#main {
  @include clearfix;

  width: 1000px;
  margin: 0 auto;
}
.left {
  float: left;
  width: 300px;
}
.right {
  float: left;
  width: 690px;
  margin-left: 10px;
}
</style>
