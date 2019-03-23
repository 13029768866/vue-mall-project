<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../images/search.png" alt="" width="25"/>
        <input ref="mySearch" type="search" placeholder="魏振江牛逼"/>
      </div>
      <div class="cancel_btn"
           @click="isShowSearch(false)"
      >取消</div>
    </div>
    <div class="search-content">
      <div class="title">
        <img src="../images/hot.png" alt="" width="25">
        <span>热门搜索</span>
      </div>
      <ul class="search-list">
        <li>面巾纸</li>
        <li>浴巾儿童</li>
        <li>石榴水果</li>
        <li>冰箱保鲜盒</li>
        <li>富豪卷纸</li>
        <li>毛巾浴袍</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchPanel",
        props:{
          isShowSearch: Function
        }
    }
</script>

<style scoped lang="stylus">
  .search-panel
    width 100%
    height 100%
    background-color #fff
    position fixed
    left 0
    top 0
    z-index 1000
    .search-nav
      box-sizing border-box
      width 100%
      height 60px
      border-bottom: 1px solid #ddd
      padding 0 20px
      display flex
      flex-direction row
      align-items center
      justify-content space-between
      .search-input
        display flex
        flex-direction row
        align-items center
        width 80%
        height 38px
        border-radius 5px
        background-color #ededed
        padding 0 10px
        input
          background-color transparent
          width 95%
          height 100%
          padding-left 10px
          color #aaa
          font-size 16px
          outline none
      cancel_btn
        font-size 16px
        color #aaa
    .search-content
      padding 30px 15px
      .title
        display flex
        flex-direction row
        align-items center
        color #aaa
        margin-bottom 10px
      .search-list
        display flex
        flex-direction row
        flex-wrap wrap
        li
          background-color: #ededed
          color #aaa
          margin 5px 15px
          padding 5px 5px
          border-radius 10px
</style>
