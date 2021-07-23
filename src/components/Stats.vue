<template>
  <section>
    <ul class="champion_wrap">
      <li class="champions" v-for="(item, index) in _champions" :key="index">
        <img :src="item.imageUrl" alt="championImage" class="championImage">
        <p class="name">{{ item.name }}</p>
        <p class="cs">CS {{ item.cs }}</p>
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
  }
}
</script>

<style lang="scss" scoped>
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
    margin: 0 15px;
  }
  .name {
    font-size: 13px;
  }
  .cs {
    font-size: 11px;
    color: #879292;
  }
}
</style>
