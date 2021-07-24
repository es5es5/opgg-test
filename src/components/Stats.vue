<template>
  <section>
    <ul class="tab">
      <li :class="active === 'champions' ? 'active' : ''" @click="active = 'champions'">챔피언 승률</li>
      <li :class="active === 'recent' ? 'active' : ''" @click="active = 'recent'">7일간 랭크 승률</li>
    </ul>
    <ul class="champions_wrap" :class="active === 'champions' ? 'active' : ''" v-show="active === 'champions'">
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

    <ul class="recent_wrap" :class="active === 'recent' ? 'active' : ''" v-show="active === 'recent'">
      <li class="recent" v-for="(item, index) in _recent" :key="index">
        <img :src="item.imageUrl" alt="championImage" class="championImage">
        <div class="name">
          <p>{{ item.name }}</p>
        </div>
        <div class="rate">
          <p>{{ getWinsRate(item.wins, item.losses) }}</p>
        </div>
        <div class="graph">
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
    },
    _recent () {
      return this.$store.getters.getMostInfo.recentWinRate
    }
  },
  data () {
    return {
      active: 'recent'
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

$background: #f2f2f2;
$border: #cdd2d2;
$background-active: #ededed;

.champions_wrap {
  background-color: $background;
  &.active {
    background-color: $background-active;
  }

  .champions {
    @include clearfix;
    padding: 4px 0;
    border: 1px solid $border;
    border-top: 0;

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
}

.recent_wrap {
  background-color: $background;
  &.active {
    background-color: $background-active;
  }

  .recent {
    @include clearfix;
    padding: 4px 0;
    border: 1px solid $border;
    border-top: 0;

    .championImage {
      float: left;
      width: 45px;
      height: 45px;
      margin: 0 10px;
    }

    div {
      float: left;
      margin-top: 16px;
      font-size: 13px;

      &.name {
        text-align: left;
        width: 70px;
        color: #5e5e5e;
      }

      &.rate {
        width: 30px;
        color: #879292;
      }

      &.total {
        width: auto;
      }
    }
  }
}

.tab {
  @include clearfix;
  text-align: center;

  li {
    @include hover;

    float: left;
    width: 150px;
    padding: 15px 0;
    border: 1px solid $border;
    background-color: $background;

    &.active {
      background-color: $background-active;
      border-bottom: 0;
    }
  }

  :first-child {
  }
  :nth-child(2) {
    border-left: 0;
  }
}
</style>
