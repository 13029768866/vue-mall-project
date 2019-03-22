<template>
    <div class="recommend" v-if="recommend.length > 0">
      <ul class="recommend_comtainer" >
        <li class="recommend_item"
          v-for = '(item,idx) in recommend'
          :key = 'idx'
        >
          <img :src="item.image_url" alt="">
          <h4 class="item_title">{{item.goods_name}}</h4>
          <div class="item_bottom">
            <span class="item_price">￥{{item.normal_price / 100}}</span>
            <span class="item_sales">{{item.sales_tip}}</span>
            <button class="item_btn">找相关</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
export default {
  name: 'Recommend',
  mounted() {
    // 获取推荐页面数据
    this.$store.dispatch('reqRecommend')
  },
  computed:{
    ...mapState(['recommend'])
  }
}
</script>

<style scoped lang="stylus">
.recommend
  box-sizing border-box
  width: 100vw
  height: 110vh
  overflow-x hidden
  overflow-y: scroll
  background-color: #f5f5f5
  &::-webkit-scrollbar
    display: none
  .recommend_comtainer
    display: flex
    justify-content space-between
    flex-wrap wrap
    padding-bottom 50px
    .recommend_item
      width: 49vw
      padding-bottom: 15px
      margin-bottom: 15px
      .item_title
        box-sizing border-box
        width: 49vw
        line-height 20px
        font-size 13px
        font-weight lighter
        overflow hidden
        text-overflow ellipsis
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin 5px 0
        padding 0 5px
      img
        width: 100%
        height: 175px
    .item_bottom
      display flex
      flex-direction row
      align-items center
      padding 0 6px
      .item_price
        flex 2
        color red
        font-weight bolder
        font-size 12px
      .item_sales
        flex 4
        font-size 10px
        color #666666
      .item_btn
        flex 3
        border 1px solid orangered
        height 26px
        border-radius 5px
        font-size 10px
        background-color transparent
        color red




</style>
