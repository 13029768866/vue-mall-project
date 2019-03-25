<template>
    <div class="me">个人中心
      <login></login>
    </div>
</template>

<script>
  import Login from '../Login/Login'
export default {
  name: 'Me',
  components:{
    Login
  }
}
</script>

<style scoped lang="stylus">
.me
  background-color: #f5f5f5
</style>
