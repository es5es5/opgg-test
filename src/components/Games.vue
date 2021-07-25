<template>
  <section>
    <ul class="games">
      <li v-for="(game, gameIndex) in _솔랭" :key="gameIndex">
        <div class="_1">
          <p>{{ game.gameType }}</p>
          <p>{{ game.createDate }}</p>
          <p>{{ game.isWin }}</p>
          <p>{{ game.gameLength }}</p>
        </div>
        <div class="_2">
          <img :src="game.champion.imageUrl" alt="championImage" class="championImage">
          <ul class="spells">
            <li v-for="(spell, index) in game.spells" :key="`spell_${index}`"><img :src="spell.imageUrl" alt="spellImage" class="spellImage"></li>
          </ul>
          <ul class="peak">
            <li v-for="(peak, index) in game.peak" :key="`peak_${index}`"><img :src="peak" alt="peakImage" class="peakImage"></li>
          </ul>
          <p>{{ 'game.champion.imageUrl' }}</p>
        </div>
        <div class="_3">
          <p><span class="kill">{{ game.stats.general.kill }}</span><span class="separator">/</span><span class="death">{{ game.stats.general.death }}</span><span class="separator">/</span><span class="assist">{{ game.stats.general.assist }}</span></p>
          <p><span class="kdaString">{{ game.stats.general.kdaString }}</span> 평점</p>
          <span class="largestMultiKillString">{{ game.stats.general.largestMultiKillString }}</span>
          <span class="opScoreBadge">{{ game.stats.general.opScoreBadge }}</span>
        </div>
        <div class="_4">
          <p>레벨 {{ game.champion.level }}</p>
          <p class="cs">{{ game.stats.general.cs }} ({{ game.stats.general.csPerMin }}) CS</p>
          <p class="contributionForKillRate">킬관여 {{ game.stats.general.contributionForKillRate }}</p>
        </div>
        <div class="_5">
          <ul class="items">
            <li v-for="(item, index) in game.items" :key="`item_${index}`">
              <img :src="item.imageUrl" alt="itemImage" class="itemImage">
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
    }
  }
}
</script>

<style lang="scss" scoped>
.games {
  > li {
    @include clearfix;

    div {
      @include clearfix;
      float: left;

      &._1 {
        @include clearfix;
        width: 70px;
      }
      &._2 {
        @include clearfix;
        width: 110px;

        .championImage {
          float: left;
          width: 46px;
          height: 46px;
          margin-right: 6px;
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
      }
      &._3 {
        width: 136px;
      }
      &._4 {
        @include clearfix;
        width: 100px;
      }
      &._5 {
        @include clearfix;
        width: 100px;
        margin-right: 10px;

        .itemImage {
          float: left;
          width: 22px;
          height: 22px;
          margin: 0 2px 2px 0;
        }
      }
      &._6 {
        width: 200px;
      }
    }
  }
}
</style>
