<template>
  <div class="select_login">
    <div class="bottom">
      <img src="./images/jianlai.jpg" alt="" width="150">
    </div>
    <h4>选择登录方式</h4>
    <router-link to="/login"
      tag="button">手机登录</router-link>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="stylus">
  .select_login
    position: fixed
    left: 0
    top: 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    z-index 1000
    width: 100vw
    height: 100vh
    background-color: #f5f5f5
    button
      width: 80%
      height: 38px
      border-radius 5px
      border none
      margin-top 30px
      font-size 20px
      color #fff
      background-color: purple
    .bottom
      position: fixed
      top: 100px
      left: 50%
      transform translateX(-50%)
</style>
