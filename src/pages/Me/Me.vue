<template>
    <div class="me">个人中心

      <div v-if="userInfo.id">
        主面板
      </div>
      <login v-else></login>
    </div>
</template>

<script>
  import Login from '../Login/Login'
  import {mapState} from 'vuex'
export default {
  name: 'Me',
  components:{
    Login
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
