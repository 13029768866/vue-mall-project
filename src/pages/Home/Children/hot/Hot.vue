<template>
    <div class="hot">
      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../imgs/rowing/s1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s2.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s3.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s4.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s5.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s6.png" alt=""></div>
          <div class="swiper-slide"><img src="../../imgs/rowing/s7.png" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <hot-nav></hot-nav>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HotNav from './HotNav'
export default {
  name: 'Hot',
  components: {
    HotNav
  },
  mounted () {
    new Swiper ('.swiper-container', {
      autoplay: true,
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
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
</style>
