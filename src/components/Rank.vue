<template>
  <section>
    <div class="rank_wrap solo">
      <img v-if="_soloRank.tierRank ? _soloRank.tierRank.imageUrl : false" :src="_soloRank.tierRank.imageUrl" alt="tireImage" class="tireImage">

      <p class="name">{{ _soloRank.tierRank ? _soloRank.tierRank.name : '' }}</p>
      <p class="gameCount"><strong class="position">{{ $store.getters.getMatchList.positions[0].position | positionFilter }} </strong>(총 {{ _soloRank.wins + _soloRank.losses }}게임)</p>
      <p class="tier">{{ _soloRank.tierRank ? _soloRank.tierRank.tierDivision : '' }} {{ _soloRank.tierRank ? _soloRank.tierRank.shortString : '' }}</p>
      <span class="tierRankPoint">{{ _soloRank.tierRank ? _soloRank.tierRank.tierRankPoint : '' }} LP </span><span class="winLose">/ {{ _soloRank.wins }}승 {{ _soloRank.losses }}패</span>
      <p class="winRate">승률 {{ getWinRate(_soloRank.wins, _soloRank.losses) }}</p>
    </div>

    <div class="rank_wrap team">
      <img v-if="_soloRank.tierRank ? _soloRank.tierRank.imageUrl : false" :src="_teamRank.tierRank.imageUrl" alt="tireImage" class="tireImage">

      <p class="name">{{ _teamRank.tierRank ? _teamRank.tierRank.name : '' }}</p>
      <p class="gameCount"><strong class="position">{{ $store.getters.getMatchList.positions[0].position | positionFilter }} </strong>(총 {{ _teamRank.wins + _teamRank.losses }}게임)</p>
      <p class="tier">{{ _teamRank.tierRank ? _teamRank.tierRank.tierDivision : '' }} {{ _teamRank.tierRank ? _teamRank.tierRank.shortString : '' }}</p>
      <span class="tierRankPoint">{{ _teamRank.tierRank ? _teamRank.tierRank.tierRankPoint : '' }} LP </span><span class="winLose">/ {{ _teamRank.wins }}승 {{ _teamRank.losses }}패</span>
      <p class="winRate">승률 {{ getWinRate(_teamRank.wins, _teamRank.losses) }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Rank',
  computed: {
    _soloRank () {
      return this.$store.getters.getSummoner.leagues && this.$store.getters.getSummoner.leagues[0].hasResults ? this.$store.getters.getSummoner.leagues[0] : ''
    },
    _teamRank () {
      return this.$store.getters.getSummoner.leagues && this.$store.getters.getSummoner.leagues[1].hasResults ? this.$store.getters.getSummoner.leagues[1] : ''
    }
  },
  methods: {
    getWinRate (wins, losses) {
      return `${parseInt(wins / (wins + losses) * 100)}%`
    },
  }
}
</script>

<style lang="scss" scoped>
.rank_wrap {
  @include clearfix;
  margin-bottom: 8px;
  padding: 10px;

  border: 1px solid #cdd2d2;
  border-radius: 2px;
  background-color: #f2f2f2;

}
.tireImage {
  float: left;
  width: 104px;
  height: 104px;
}
</style>
