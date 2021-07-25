<template>
  <section>
    <ul class="tab">
      <li :class="active === '전체' ? 'active' : ''" @click="active = '전체'">전체</li>
      <li :class="active === '솔로게임' ? 'active' : ''" @click="active = '솔로게임'">솔로게임</li>
      <li :class="active === '자유랭크' ? 'active' : ''" @click="active = '자유랭크'">자유랭크</li>
    </ul>
    <div class="average">
      <div class="donut_wrap">
        <div class="donutTitle">20전 11승 9패</div>
        <vc-donut
          background="#ededed"
          foreground="grey"
          :size="90"
          unit="px"
          legend-placement="right"
          :thickness="29"
          :sections="[
          {
            value: 9,
            color: '#ee5a52'
          },
          {
            value: 11,
            color: '#1f8ecd'
          }]"
          :total="20"
          :start-angle="0"
          :auto-adjust-text-size="true"
          >
        <p class="donutText">55%</p>
        </vc-donut>
      </div>
      <div class="champions">
        champions
      </div>
      <div class="position">
        position
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Average',
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

  padding: 16px;
  margin-bottom: 16px;

  div {
    float: left;
    margin: 0 16px;

    &.donut_wrap {
      width: 250px;

      .donut {
        text-align: center;
        margin: 0 auto;
      }

      .donutTitle {
        width: 100%;
        text-align: center;
      }

      .donutText {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        color: #555555;
      }
    }
    &:nth-child(2) {
      width: 228px;
    }
    &:nth-child(3) {
      background-color: red;
    }
  }
}
</style>
