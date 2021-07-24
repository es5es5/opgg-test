<template>
  <div id="SummonerProfile">
    <div class="profileImage_wrap">
      <img :src="_summoner.profileImageUrl" alt="profileImage" class="profileImage">
      <img :src="_summoner.profileBorderImageUrl" alt="borderImage" class="borderImage">
      <span class="levelbox">{{ _summoner.level }}</span>
    </div>
    <div class="profileInfo_wrap">
      <p class="name">{{ _summoner.name }}</p>
      <p>레더 랭킹 <strong>{{ _summoner.ladderRank.rank }}</strong>위 (상위 {{ _summoner.ladderRank.rankPercentOfTop }}%)</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SummonerProfile',
  computed: {
    _summoner () {
      return this.$store.getters.getSummoner
    }
  }
}
</script>

<style lang="scss" scoped>
#SummonerProfile {
  @include clearfix;
  height: 175px;
  border-bottom: 1px solid #d8d8d8;
}

.profileImage_wrap {
  float: left;
  position: relative;
  margin: 6px 20px 25px 20px;
  margin-left: 20px;
  margin-right: 20px;

  .profileImage {
    width: 100px;
    height: 100px;
  }

  .borderImage {
    position: absolute;
    left: -10px;
    top: -10px;
    width: 120px;
    height: 120px;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  .levelbox {
    position: absolute;
    // left: 50%;
    left: calc(50px - 22px);
    bottom: -10px;
    right: 0;
    width: 44px;
    height: 24px;
    padding-top: 3px;
    background: url('../assets/images/bg-levelbox.png');
    background-size: 100%;
    font-size: 14px;
    text-align: center;
    color: #eabd56;
  }
}

</style>
