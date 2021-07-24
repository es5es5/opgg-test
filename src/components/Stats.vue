<template>
  <section>
    <ul class="tab_wrap">
      <li class="tab">챔피언 승률</li>
      <li class="tab">7일간 랭크 승률</li>
    </ul>
    <ul class="champion_wrap">
      <li class="champions" v-for="(item, index) in _champions" :key="index">
        <img :src="item.imageUrl" alt="championImage" class="championImage">
        <div class="name">
          <p>{{ item.name }}</p>
          <p>CS {{ item.cs }} ({{ getAvg(item.cs, item.games) }})</p>
        </div>
        <div class="kda">
          <p>{{ getAvg((item.kills + item.assists), item.deaths, 2) }} : 1 평점</p>
          <p>{{ getAvg(item.kills, item.games) }} / {{ getAvg(item.deaths, item.games) }} / {{ getAvg(item.assists, item.games) }}</p>
        </div>
        <div class="total">
          <p>{{ getWinsRate(item.wins, item.losses) }}</p>
          <p>{{ item.games }}게임</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Stats',
  computed: {
    _champions () {
      return this.$store.getters.getMostInfo.champions
    }
  },
  methods: {
    getAvg (value, target, toFixed) {
      let _toFixed = 1
      if (toFixed) {
        _toFixed = toFixed
      }
      return (value / target).toFixed(_toFixed)
    },
    getWinsRate (wins, losses) {
      return `${parseInt(wins / (wins + losses) * 100)}%`
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin font-top {
  font-size: 13px;
  font-weight: bold;
}
@mixin font-bottom {
  font-size: 11px;
  color: #879292;
}

.champions {
  @include clearfix;
  padding: 4px 0;
  border: 1px solid #cdd2d2;
  border-top: 0;
  background-color: #f2f2f2;

  .championImage {
    float: left;
    width: 45px;
    height: 45px;
    margin: 0 10px;
  }

  div {
    float: left;
    text-align: center;
    margin-top: 10px;

    &.name {
      text-align: left;
      width: 70px;
    }

    &.kda {
      width: 100px;
    }

    &.total {
      width: 60px;
    }

    :first-child {
      @include font-top;
    }

    :nth-child(2) {
      @include font-bottom;
    }

  }
}
</style>
