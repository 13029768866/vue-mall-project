<template>
    <div class="hot_nav">
      <!--滚动区域-->
      <div class="hot_nav_item">
        <div class="nav_item_content">
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
          <a class="content_item">
            <img src="./../../imgs/nav/nav_icon01.png" alt="">
            <span>限时秒杀</span>
          </a>
        </div>
      </div>
      <!--进度条-->
      <div class="hot_nav_process">
        <div class="hot_nav_content" :style="scrollContentStyle"></div>
      </div>
    </div>
</template>

<script>
let newVar = {
  name: 'HotNav',
  data () {
    return {
      // 获取屏幕长度
      screenWidth: document.documentElement.clientWidth || document.body.clientWidth,
      // 滚动内容长度
      scrollWidth: 720,
      // 滚动条容器长度
      scrollBox: 100,
      // 滚动条内容长度
      scrollContentWidth: 0,
      // 触摸起点
      startX: 0,
      // 触摸终点
      endX: 0,
      // 滚动条移动距离
      scrollMoveWidth: 0
    }
  },
  computed: {
    scrollContentStyle () {
      return {
        width: `${this.scrollContentWidth}px`,
        left: `${this.scrollMoveWidth}px`
      }
    }
  },
  mounted () {
    this.getScrollContentWidth()
    this.listenTouch()
  },
  methods: {
    getScrollContentWidth () {
      const { scrollBox, screenWidth, scrollWidth } = this
      this.scrollContentWidth = scrollBox * (screenWidth / scrollWidth)
    },
    listenTouch () {
      this.$el.addEventListener('touchstart', this.handleTouchStart, false)
      this.$el.addEventListener('touchmove', this.handleTouchMove, false)
      this.$el.addEventListener('touchend', this.handleTouchEnd, false)
    },
    handleTouchStart (event) {
      console.log(event)
      let touch = event.touches[0]
      this.startX = Number(touch.pageX)
      console.log(this.startX)
    },
    handleTouchMove (event) {
      let touch = event.touches[0]
      let contentMoveWidth = Number(touch.pageX) - this.startX
      // console.log(moveWidth)
      this.scrollMoveWidth = -(contentMoveWidth / this.scrollWidth) * this.scrollBox
    },
    handleTouchEnd (event) {

    }
  }
}
export default newVar
</script>

<style scoped lang="stylus">
.hot_nav
  position: relative
  width: 100vw
  height: 180px
  background-color: #fff
  .hot_nav_item
    width: 100vw
    overflow-x scroll
    &::-webkit-scrollbar
      display: none
    .nav_item_content
      width:  200vw
      height: 180px
      display: flex
      flex-wrap wrap
      .content_item
        width: 25vw
        height: 90px
        display: flex
        flex-direction column
        justify-content: center
        align-items: center
        font-size: 14px
        color #666
        img
          width: 40%
          margin-bottom: 5px
  .hot_nav_process
    width: 100px
    height: 2px
    border-radius 2px
    background-color: #ccc
    position: absolute
    left: 50%
    transform translateX(-50%)
    bottom: 2px
    .hot_nav_content
      position: absolute
      height: 2px
      border-radius 2px
      left: 0
      background-color: red
</style>
