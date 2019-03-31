<template>
    <div class="me">
      <me-top v-if="userInfo.id">

      </me-top>
      <login v-else></login>
    </div>
</template>

<script>
  import Login from '../Login/Login'
  import MeTop from './MeTop'
  import {mapState} from 'vuex'
export default {
  name: 'Me',
  components:{
    Login,
    MeTop
  },
  computed:{
    ...mapState(['userInfo'])
  }
}
</script>

<style scoped lang="stylus">
.me
  background-color: #f5f5f5
</style>
