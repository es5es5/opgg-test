<template>
  <div>
    <Header />
    <Profile />
    <div class="summary_wrap">SUMMARY</div>
    <div class="status_wrap">STATUS</div>
  </div>
</template>

<script>
import Header from './Header'
import Profile from './Profile.vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Profile,
  }
}
</script>

<style>

</style>
