<template>
    <ul class="index_tabBar">
      <router-link class="tab-item"
                   to="/home"
                   tag="li"
      >
        <img :src=" $route.path.includes('/home')?tabBarImgArr[0].selected:tabBarImgArr[0].normal" alt="">
        <span>首页</span>
      </router-link>
      <router-link class="tab-item"
                   to="/recommend"
                   tag="li"
      >
        <img :src="$route.path.includes('/recommend' )?tabBarImgArr[1].selected:tabBarImgArr[1].normal" alt="">
        <span>推荐</span>
      </router-link>
      <router-link class="tab-item"
                   to="/search"
                   tag="li"
      >
        <img :src="$route.path.includes('/search')?tabBarImgArr[2].selected:tabBarImgArr[2].normal" alt="">
        <span>搜索</span>
      </router-link>
      <router-link class="tab-item"
                   to="/chat"
                   tag="li"
      >
        <img :src="$route.path.includes('/chat')?tabBarImgArr[3].selected:tabBarImgArr[3].normal" alt="">
        <span>聊天</span>
      </router-link>
      <router-link class="tab-item"
                   to="/me"
                   tag="li"
      >
        <img :src="$route.path.includes('/me')?tabBarImgArr[4].selected:tabBarImgArr[4].normal" alt="">
        <span>个人中心</span>
      </router-link>
    </ul>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      tabBarImgArr: [
        {
          normal: require('@/common/img/icon_home.png'), selected: require('@/common/img/icon_home_selected.png')
        },
        {
          normal: require('@/common/img/icon_intro.png'), selected: require('@/common/img/icon_intro_selected.png')
        },
        {
          normal: require('@/common/img/icon_search.png'), selected: require('@/common/img/icon_search_selected.png')
        },
        {
          normal: require('@/common/img/icon_chat.png'), selected: require('@/common/img/icon_chat_selected.png')
        },
        {
          normal: require('@/common/img/icon_mine.png'), selected: require('@/common/img/icon_mine_selected.png')
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.index_tabBar
  display: flex
  position: fixed
  background-color: #fff
  width: 100vw
  height: 50px
  left: 0
  bottom: 0
  border-top: 1px solid #ccc
  z-index 999
  .tab-item
    display: flex
    flex: 1
    flex-direction column
    justify-content: center
    align-items: center
    font-size: 12px
    color #666
    &.router-link-active
      color red
    img
      width: 30%
      margin-bottom: 3px
</style>
