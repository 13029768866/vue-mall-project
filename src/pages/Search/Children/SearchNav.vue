<template>
    <div class="search_nav">
      <a class="search_nav_icon" @click.prevent="isShowSearch(true)">
        <img src="../images/search.png" alt="">
        <span>魏振江牛逼</span>
      </a>
    </div>
</template>

<script>
    export default {
        name: "SearchNav",
        props:{
          isShowSearch: Function
        }
    }
</script>

<style scoped lang="stylus" >
  .search_nav
    position: fixed
    display: flex
    width: 100vw
    height: 60px
    justify-content:center
    align-items: center
    background-color: #fff
    border-bottom: 1px solid skyblue
    left: 0
    top: 0
    img
      width: 25px
    .search_nav_icon
      width 90%
      height 70%
      background-color #e8e8e8
      border-radius 10px
      display flex
      justify-content center
      align-items center
      span
        color #aaa
        margin-left 6px
        font-size 18px
        font-weight 400
</style>
