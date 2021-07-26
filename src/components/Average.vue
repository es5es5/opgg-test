<template>
  <section>
    <ul class="tab">
      <li :class="active === '전체' ? 'active' : ''" @click="active = '전체'">전체</li>
      <li :class="active === '솔로게임' ? 'active' : ''" @click="active = '솔로게임'">솔로게임</li>
      <li :class="active === '자유랭크' ? 'active' : ''" @click="active = '자유랭크'">자유랭크</li>
    </ul>
    <div class="average">
      <div>
        <div class="donut_wrap">
          <div class="donutTitle">{{ _summary.wins + _summary.losses }}전 {{ _summary.wins }}승 {{ _summary.losses }}패</div>
          <vc-donut
            background="#ededed"
            foreground="grey"
            :size="90"
            unit="px"
            legend-placement="right"
            :thickness="29"
            :sections="[
            {
              value: _summary.losses,
              color: '#ee5a52'
            },
            {
              value: _summary.wins,
              color: '#1f8ecd'
            }]"
            :total="20"
            :start-angle="0"
            :auto-adjust-text-size="true"
            >
          <p class="donutText">{{ getWinsRate(_summary.wins, _summary.losses) }}</p>
          </vc-donut>
        </div>
        <div class="kda_wrap">
          <p class="kda">
            <span class="kills">{{ getAvg(_summary.kills, (_summary.wins + _summary.losses), 2) }}</span>
            <span class="separator"> / </span>
            <span class="deaths">{{ getAvg(_summary.deaths, (_summary.wins + _summary.losses), 2) }}</span>
            <span class="separator"> / </span>
            <span class="assists">{{ getAvg(_summary.assists, (_summary.wins + _summary.losses), 2) }}</span>
          </p>
          <p>
            <span class="score">{{ getAvg(_summary.kills + _summary.assists, _summary.deaths, 2) }}:1 </span>
            <span class="contributionForKillRate">({{ getAvg((_summary.wins + _summary.losses), (_summary.kills + _summary.assists), 2) * 100 }}%)</span>
          </p>
        </div>
      </div>
      <div class="champion_wrap">
        <ul class="champion">
          <li v-for="(item, index) in _champions" :key="index">
            <img :src="item.imageUrl" alt="championImage" class="championImage">
            <p class="name">{{ item.name }}</p>
            <p class="score">
              <span class="winLose">{{ getWinsRate(item.wins, item.losses) }} ({{ item.wins }}승 {{ item.losses }}패)</span>
              <span class="averageScore">{{ getAvg(item.kills + item.assists, item.deaths, 2) }}:1 평점</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="positions_wrap">
        <p class="title">선호 포지션 (랭크)</p>
        <ul class="positions">
          <li v-for="(item, index) in _positions" :key="index">
            <img :src="require(`@/assets/images/icon-mostposition-${item.position.toLowerCase() || 'top'}.svg`)" alt="positionImage" class="positionImage">
            <p class="name">{{ item.position | positionFilter }}</p>
            <p class="score">
              <span class="winLose">{{ getWinsRate(item.wins, item.losses) }}</span>
              <span class="averageScore">승률 {{ getWinsRate(item.wins, item.losses) }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Average',
  computed: {
    _summary () {
      return this.$store.getters.getMatchList.summary
    },
    _champions () {
      return this.$store.getters.getMatchList.champions
    },
    _positions () {
      return this.$store.getters.getMatchList.positions
    }
  },
  data () {
    return {
      active: '솔로게임'
    }
  }
}
</script>

<style lang="scss" scoped>
.tab {
  padding: 0 4px;
  font-size: 12px;
  color: #555555;
  border: 1px solid $border;
  border-bottom: transparent;

  li {
    @include hover;

    display: inline-block;
    margin: 0 12px;
    margin-bottom: -1px;
    padding: 8px 0;

    &.active {
      color: #1f8ecd;
      border-bottom: 2px solid #1f8ecd;
    }
  }
}

.average {
  @include clearfix;
  background-color: #ededed;
  border: 1px solid $border;
  margin-bottom: 16px;

  > div {
    @include clearfix;
    float: left;
    height: 160px;
    border-right: 1px solid $border;

    .donut_wrap {
      padding: 16px 24px 23px 24px;
      float: left;

      .donutTitle {
        display: block;
        width: 100%;
        text-align: center;
        color: #666666;
        font-size: 12px;
        margin-bottom: 14px;
      }

      .donutText {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        color: #555555;
      }
    }

    .kda_wrap {
      float: left;
      width: 150px;
      text-align: center;
      padding: 44px 35px 0 20px;

      .kda {
        font-size: 11px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 6px;
      }

      .deaths { color: #c6443e; }

      .separator {
        font-weight: normal;
        color: #999999;
      }

      .score {
        font-size: 16px;
        font-weight: bold;
        color: #2daf7f;
      }

      .contributionForKillRate {
        font-size: 16px;
        color: #c6443e;
      }
    }

    &.champion_wrap {
      width: 231px;
      padding: 10px;

      .champion {
        > li {
          @include clearfix;
          padding: 6px;

          .championImage {
            float: left;
            width: 34px;
            height: 34px;
            margin-right: 8px;
          }

          .name {
            margin-bottom: 3px;
            font-size: 14px;
            color: #333333;
          }

          .score {
            font-weight: bold;
            font-size: 11px;
            color: #333333;

            .winLose {
              display: inline-block;
              width: 87px;
              border-right: 1px solid $border;
            }

            .averageScore {
              padding-left: 6px;
            }
          }
        }
      }
    }

    &.positions_wrap {
      width: 168px;
      padding: 16px;
      border-right: none;

      .title {
        font-size: 12px;
        color: #666666;
        margin-bottom: 10px;
      }

      .positions {
        > li {
          @include clearfix;
          padding: 12px 0 10px 0;

          .positionImage {
            float: left;
            margin-right: 8px;
          }

          .name {
            font-size: 14px;
            color: #333333;
            // margin-bottom: 3px;
          }

          .score {
            font-weight: bold;
            font-size: 11px;
            color: #333333;

            .winLose {
              display: inline-block;
              font-weight: bold;
              color: #1f8ecd;
              width: 36px;
              padding-right: 6px;
              border-right: 1px solid $border;
            }

            .averageScore {
              padding-left: 6px;
            }
          }
        }
      }
    }
  }
}

</style>
