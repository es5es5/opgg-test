<template>
  <section>
    <ul class="games">
      <li v-for="(game, gameIndex) in _솔랭" :key="gameIndex" :class="game.isWin ? 'win' : 'lose'">
        <div class="_1">
          <p class="gameType">{{ game.gameType }}</p>
          <p class="createDate">{{ getTimeForToday(game.createDate * 1000) }}</p>
          <p class="isWin" :class="game.isWin ? 'win' : 'lose'">{{ game.isWin ? '승리' : '패배'}}</p>
          <p class="gameLength">{{ getPlayTime(game.gameLength) }}</p>
        </div>
        <div class="_2">
          <img :src="game.champion.imageUrl" alt="championImage" class="championImage">
          <ul class="spells">
            <li v-for="(spell, index) in game.spells" :key="`spell_${index}`"><img :src="spell.imageUrl" alt="spellImage" class="spellImage"></li>
          </ul>
          <ul class="peak">
            <li v-for="(peak, index) in game.peak" :key="`peak_${index}`"><img :src="peak" alt="peakImage" class="peakImage"></li>
          </ul>
          <p class="championName">{{ 'championName' }}</p>
        </div>
        <div class="_3">
          <p><span class="kill">{{ game.stats.general.kill }}</span><span class="separator"> / </span><span class="death">{{ game.stats.general.death }}</span><span class="separator"> / </span><span class="assist">{{ game.stats.general.assist }}</span></p>
          <p><span class="kdaString">{{ game.stats.general.kdaString }}</span><span> 평점</span></p>
          <span class="largestMultiKillString">{{ game.stats.general.largestMultiKillString }}</span>
          <span class="opScoreBadge">{{ game.stats.general.opScoreBadge }}</span>
        </div>
        <div class="_4">
          <p class="level">레벨{{ game.champion.level }}</p>
          <p class="cs">{{ game.stats.general.cs }} ({{ game.stats.general.csPerMin }}) CS</p>
          <p class="contributionForKillRate">킬관여 {{ game.stats.general.contributionForKillRate }}</p>
        </div>
        <div class="_5">
          <ul class="items">
            <li v-for="(item, index) in game.items" :key="`item_${index}`">
              <img :src="item.imageUrl" alt="itemImage" class="itemImage">
            </li>
            <li v-for="index in 7 - game.items.length" :key="index">
              <span class="emptyItem" :class="game.isWin ? 'win' : 'lose'"></span>
            </li>
            <li>
              <img :src="require(`@/assets/images/ractangle-${game.isWin ? 'win' : 'lose'}.svg`)" alt="" class="rectangle">
            </li>
          </ul>
        </div>
        <div class="_6">
          <ul class="players">
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Games',
  created () {
  },
  data () {
    return {
      gamesPlayers: [],
      솔랭Games: []
    }
  },
  computed: {
    _솔랭 () {
      return this.$store.getters.getGames솔랭
    },
    _자랭 () {
      return this.$store.getters.getGames자랭
    }
  },
  watch: {
  },
  methods: {
    getSummonerMatchDetail (summonerName, gameId) {
      return new Promise((resolve, reject) => {
        axios.get(
          `https://codingtest.op.gg/api/summoner/${summonerName}/matchDetail/${gameId}`
        ).then(result => {
          resolve(result.data.teams)
        })
      })
    },
    getPlayTime (seconds) {
      let min = String(parseInt(seconds / 60) || 0)
      let sec = String(parseInt(seconds % 60) || 0)
      min = min.length === 1 ? `0${min}` : min
      sec = sec.length === 1 ? `0${sec}` : sec

      return `${min}분 ${sec}초`
    },
  }
}
</script>

<style lang="scss" scoped>
.games {
  > li {
    @include clearfix;
    height: 100px;
    margin-bottom: 8px;
    border: 1px solid #a7a7a7;

    &.win {
      background-color: #b0ceea;
      border-color: #a1b8cd;
    }

    &.lose {
      background-color: #d6b5b2;
      border-color: #c0aba8;
    }

    div {
      @include clearfix;
      float: left;

      &._1 {
        @include clearfix;
        width: 70px;
        margin: 13px 21px 0 13px;
        text-align: center;

        .gameType {
          font-size: 11px;
          font-weight: bold;
          color: #555555;
          margin-bottom: 3px;
        }

        .createDate {
          margin-bottom: 3px;
          font-size: 11px;
          color: 555555;
        }

        .gameLength {
          font-size: 11px;
          color: #555555;
        }

        .isWin {
          display: inline-block;
          width: 27px;
          padding: 6px 0;
          font-size: 11px;
          font-weight: bold;

          &.win {
            color: #2c709b;
            border-top: 1px solid #a1b8cd;
          }
          &.lose {
            color: #d0021b;
            border-top: 1px solid #d0a6a5;
          }
        }
      }
      &._2 {
        margin-top: 15px;
        @include clearfix;
        width: 110px;

        .championImage {
          float: left;
          width: 46px;
          height: 46px;
          margin-right: 6px;
          margin-bottom: 10px;
        }

        .spellImage {
          float: left;
          width: 22px;
          height: 22px;
          margin: 0 4px 2px 0;
        }
        .peakImage {
          float: left;
          width: 22px;
          height: 22px;
          margin: 0 0 2px 0;
          border-radius: 50%;
        }

        .championName {
          text-align: center;
          font-size: 11px;
          color: #555555;
        }
      }
      &._3 {
        margin-top: 30px;
        text-align: center;
        width: 126px;

        .kill {
          font-size: 15px;
          font-weight: bold;
          color: #555e5e;
          font-weight: bold;
        }
        .death {
          font-size: 15px;
          font-weight: bold;
          color: #d0021b;
          font-weight: bold;
        }
        .assist {
          font-size: 15px;
          font-weight: bold;
          color: #555e5e;
          font-weight: bold;
        }
        .separator {
          font-size: 15px;
          color: #948e8d;
          font-weight: normal;
        }
        .kdaString {
          font-weight: bold;
          font-size: 11px;
          color: #333333;

          + span {
            font-weight: bold;
            font-size: 11px;
            color: #555e5e;
          }
        }
        .largestMultiKillString {
        }
      }
      &._4 {
        @include clearfix;
        margin-top: 13px;
        width: 100px;
        text-align: center;

        .level {
          font-size: 11px;
          color: #555e5e;
          margin-bottom: 6px;
        }
        .cs {
          font-size: 11px;
          color: #555e5e;
          margin-bottom: 6px;
        }
        .contributionForKillRate {
          font-size: 11px;
          color: #d0021b
        }
      }
      &._5 {
        @include clearfix;
        margin-top: 15px;
        width: 100px;
        margin-right: 10px;

        .items {
          > li {
            .itemImage {
              float: left;
              margin: 0 2px 2px 0;
              width: 22px;
              height: 22px;
              border-radius: 2px;
            }
            .emptyItem {
              float: left;
              margin: 0 2px 2px 0;
              width: 22px;
              height: 22px;
              border-radius: 2px;

              &.win {
                background-color: #7aa5c3;
              }
              &.lose {
                background-color: #cb9e9a;
              }
            }
            .rectangle {
              width: 22px;
              height: 22px;
            }
          }
        }
      }
      &._6 {
        width: 200px;
      }
    }
  }
}
</style>
