<template>
  <a class="recommend_item">
    <img :src="item.image_url" alt="">
    <h4 class="item_title">{{item.goods_name}}</h4>
    <div class="item_bottom">
      <span class="item_price">￥{{item.normal_price / 100}}</span>
      <span class="item_sales">{{item.sales_tip}}</span>
      <button class="item_btn" @click="clickCellBtn(item)">加入购物车</button>
    </div>
  </a>
</template>

<script>
    export default {
        name: "ShopList",
        props: {
          item: Object,
          clickCellBtn:{
            type: Function,
            default:()=>{}
          }
        }
    }
</script>

<style scoped lang="stylus">
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
      flex 4
      border 1px solid orangered
      height 26px
      border-radius 5px
      font-size 10px
      background-color transparent
      color red
</style>
