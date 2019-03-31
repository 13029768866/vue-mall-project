<template>
    <div class="search">
      <!--搜索导航-->
      <search-nav :isShowSearch = isShowSearch></search-nav>
      <!--联动列表-->
      <div class="shop">
        <!--商品导航-->
        <div class="shop_menu">
          <ul ref="menulist">
            <li
              v-for="(item, idx) in searchgoods"
              :key = 'idx'
              class="menu_item"
              ref="menulist"
              :class="{current: currentIndex === idx}"
              @click="clickLeftItem(idx)"
            >
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
        <!--导航展示-->
        <div class="shop_menu_show">
          <ul ref="shopsList">
            <li class="show_item"
                v-for="(item, idx) in searchgoods"
                :key="idx"

            >
              <div class="show_item_title">
                <h4>{{item.name}}</h4>
                <a href="">查看更多 ></a>
              </div>
              <!--<ul class="phone_type" v-show="item.tag === 'phone'">-->
                <!--<li v-for="(phone,idx) in item.category"-->
                    <!--:key = 'idx'-->
                <!--&gt;-->
                  <!--<img :src="phone.icon" alt="">-->
                <!--</li>-->
              <!--</ul>-->
              <ul class="shop_show_content">
                <li
                    v-for="(item1,idx) in item.items"
                    :key = 'idx'>
                  <img :src="item1.icon" alt="">
                  <span>{{item1.title}}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!--搜索导航模板-->
      <search-panel v-if="isShow"
                    :isShowSearch="isShowSearch"
      ></search-panel>
    </div>
</template>

<script>
  import SearchNav from './Children/SearchNav'
  import SearchPanel from './Children/SearchPanel'
  import { mapState } from 'vuex'
  import BScroll from 'better-scroll'

export default {
  name: 'Search',
  components: {
    SearchNav,
    SearchPanel
  },
  data(){
    return {
      scrollY: 0,     // 右侧滚动区域Y轴实时坐标
      rightLiTops: [], // 所有分类右侧的头部位置
      isShow: false
    }
  },
  methods:{
    // 1、初始化滚动区域
    initBScroll(){
      // 左侧
       this.leftScroll = new BScroll('.shop_menu',{})
       // 右侧
       this.rightScroll = new BScroll('.shop_menu_show',{probeType:3})
      // 监听右侧滚动事件获取scrollY
      this.rightScroll.on('scroll',(pos)=>{
        this.scrollY = Math.abs(pos.y)
        // console.log(this.scrollY);
      })
    },
    // 2、获取右侧区域标题在页面中的位置
    getRightLiTops(){
      let top = 0;
      this.rightLiTops.push(top);
       let liTops= [...this.$refs.shopsList.getElementsByClassName('show_item')]
      liTops.forEach((item,idx) => {
        top += item.clientHeight
        this.rightLiTops.push(top)
      })
      // console.log(this.rightLiTops);
    },
    // 3、左侧点击右侧跳转
    clickLeftItem(idx){
      this.scrollY = this.rightLiTops[idx]
      this.rightScroll.scrollTo(0,-this.scrollY,300)
    },
    // 4、左侧联动
    leftMenuScroll(idx){
      let curEl = this.$refs.menulist[idx]
      this.leftScroll.scrollToElement(curEl,300,0,true)
    },
    isShowSearch(flag){
      this.isShow = flag
    }
  },
  mounted() {
    // 获取搜索页面数据
    this.$store.dispatch('reqSearchGoods')
  },
  computed: {
    ...mapState(['searchgoods']),
    currentIndex(){
      const {scrollY, rightLiTops} = this
      return rightLiTops.findIndex((item,idx)=>{
        this.leftMenuScroll(idx)
        return scrollY >= item && scrollY <  rightLiTops[idx + 1]
      })
    }
  },
  watch: {
    searchgoods(){
      this.$nextTick(()=>{
        this.initBScroll()
        this.getRightLiTops()
      })
    }
  }




}
</script>

<style scoped lang="stylus">
.search
  width: 100vw
  background-color: #f5f5f5
  .shop
    position: absolute
    display: flex
    width: 100vw
    top: 61px
    bottom: 50px
    background-color: #fff
    overflow hidden
    .shop_menu
      width: 80px
      flex 0 0 80px
      background-color: #e0e0e0
      .menu_item
        height: 60px
        background-color: #fafafa
        display: flex
        justify-content: center
        align-items: center
        color #666
        font-weight: 400
      .current
        color #e02e24
        &::before
          content: ''
          background-color: #e02e24
          width: 4px
          height: 30px
          position: absolute
          left: 0

    .shop_menu_show
      flex 1
      background-color: #fff
      .show_item_title
        display: flex
        justify-content: space-between
        align-items: center
        height: 40px
        color #999
        background-color: #e5e5e5
        padding: 0 10px
        a
          color #999
          font-weight: 400
          text-decoration: none
      .shop_show_content
        display: flex
        flex-wrap wrap
        li
          display: flex
          justify-content: center
          align-items: center
          width: 33.3%
          height: 90px
          flex-direction: column
          color #666
          font-weight lighter
          font-size 14px
          img
            width: 60%
            height: 60%
            margin-bottom: 5px
      .phone_type
        width 100%
        display flex
        flex-direction row
        flex-wrap wrap
        border-bottom: 1px solid #e0e0e0
        li
          width 33.3%
          display flex
          justify-content center
          align-items center
          margin 5px 0
          img
            width 70%
</style>
