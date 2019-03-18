<template>
    <div class="shop_container">
      <ul class="shop_list">
        <li class="shop_list_item">
          <img src="./../../imgs/shop_list/shop_item.png" alt="" width="100vw">
          <h4 class="list_item_title">wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼</h4>
          <div class="list_item_bottom">
            <span class="item_price">￥26.9</span>
            <span class="item_counter">已拼8888件</span>
            <span class="item_user">
              <img src="./../../imgs/shop_list/user1.jpg" alt="">
              <img src="./../../imgs/shop_list/user2.jpg" alt="">
            </span>
            <span class="item_buy">
              <button>
                去拼单 >
              </button>
            </span>
          </div>
        </li>
        <li class="shop_list_item">
          <img src="./../../imgs/shop_list/shop_item.png" alt="" width="100vw">
          <h4 class="list_item_title">wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼</h4>
          <div class="list_item_bottom">
            <span class="item_price">￥26.9</span>
            <span class="item_counter">已拼8888件</span>
            <span class="item_user">
              <img src="./../../imgs/shop_list/user1.jpg" alt="">
              <img src="./../../imgs/shop_list/user2.jpg" alt="">
            </span>
            <span class="item_buy">
              <button>
                去拼单 >
              </button>
            </span>
          </div>
        </li>
        <li class="shop_list_item">
          <img src="./../../imgs/shop_list/shop_item.png" alt="" width="100vw">
          <h4 class="list_item_title">wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼wzj牛逼</h4>
          <div class="list_item_bottom">
            <span class="item_price">￥26.9</span>
            <span class="item_counter">已拼8888件</span>
            <span class="item_user">
              <img src="./../../imgs/shop_list/user1.jpg" alt="">
              <img src="./../../imgs/shop_list/user2.jpg" alt="">
            </span>
            <span class="item_buy">
              <button>
                去拼单 >
              </button>
            </span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HotShopList'
}
</script>

<style scoped lang="stylus">
.shop_container
  margin-bottom: 50px
  background-color: #f5f5f5
  .shop_list
    .shop_list_item
      margin-bottom: 10px
      background-color: #f5f5f5
      >img
        width: 100vw
      .list_item_title
        height: 44px
        line-height:22px
        width: 94vw
        margin-left: 3vw
        overflow hidden
        text-overflow ellipsis
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      .list_item_bottom
        margin: 10px
        display: flex
        justify-content: space-around
        align-items: center
        .item_price
          font-size: 18px
          flex 1
          font-weight: 700
          color red
        .item_counter
          flex 2
          font-size: 12px
          color #ccc
        .item_user
          flex 1
          display: flex
          align-items: center
          img
            width: 30px
            border-radius 50%
          img:nth-child(2)
            margin-left: -8px
        .item_buy
          flex 2
          button
            width: 80%
            height: 34px
            border: none
            display: flex
            align-items: center
            justify-content: center
            background-color: red
            color #fff
            margin-left: 10px
            font-size: 16px
            border-radius 8px
</style>
