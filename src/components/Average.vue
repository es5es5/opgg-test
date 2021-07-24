<template>
  <section>
    <ul class="tab">
      <li :class="active === '전체' ? 'active' : ''" @click="active = '전체'">전체</li>
      <li :class="active === '솔로게임' ? 'active' : ''" @click="active = '솔로게임'">솔로게임</li>
      <li :class="active === '자유랭크' ? 'active' : ''" @click="active = '자유랭크'">자유랭크</li>
    </ul>
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
</style>
