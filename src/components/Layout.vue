<template>
  <div>
    <Header />
    <SummonerProfile />
    <main id="main">
      <div class="summary_wrap">
        <Rank />
      </div>
      <div class="status_wrap">STATUS</div>
    </main>
  </div>
</template>

<script>
import Header from './Header'
import SummonerProfile from './SummonerProfile'
import Rank from './Rank'

export default {
  name: 'MainLayout',
  components: {
    Header,
    SummonerProfile,
    Rank,
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
