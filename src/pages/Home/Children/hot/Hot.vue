<template>
    <div class="hot">
      <!--轮播图-->
      <div class="swiper-container" v-if="homecasual.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(item, idx) in homecasual"
               :key = 'idx'
          >
            <img :src="item.imgurl" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!--热门导航-->
      <hot-nav></hot-nav>
      <!--广告位-->
      <div class="hot_ad">
        <img src="./../../imgs/hot_ad/home_ad.gif" alt="">
      </div>
      <!--拼单商品列表-->
      <hot-shop-list></hot-shop-list>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HotNav from './HotNav'
import HotShopList from './HotShopList'

import  { mapState } from 'vuex'
export default {
  name: 'Hot',
  components: {
    HotNav,
    HotShopList
  },
  computed:{
    ...mapState(['homecasual'])
  },
  watch:{
    homecasual(){
      this.$nextTick(() => {
        // 创建swiper实例
        new Swiper ('.swiper-container', {
          autoplay: true,
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  mounted () {
    // 1、获取轮播图数据
    this.$store.dispatch('reqHomeCasual')

  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .hot
      width 100%
      height 100%
      padding-top: 46px
      background-color: #f5f5f5
      .swiper-slide
        img
          width: 100vw
      .hot_ad
        background-color: #fff
        margin: 8px 0
        padding: 5px
        img
          width: 100vw
</style>
