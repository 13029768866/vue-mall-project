<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar v-show="$route.meta.showBottomTab"></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
export default {
  name: 'App',
  components: { TabBar },
  created() {
    this.$store.dispatch('checkUserInfo')
  }
}
</script>

<style scoped lang="stylus">
#app
  width: 100vw
  height: 100vh
  background-color: #f5f5f5
</style>
