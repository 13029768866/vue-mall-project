<template>
    <div class="home">
      <ly-tab
              v-model="selectedId"
              :items="items"
              :options="options"
              @change="handleChange"
              class="fix"
      />
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      selectedId: 0,
      items: [
        { label: '热门' },
        { label: '服饰' },
        { label: '鞋包' },
        { label: '母婴' },
        { label: '百货' },
        { label: '食品' },
        { label: '内衣' },
        { label: '男装' },
        { label: '电器' }
      ],
      //  二级路由
      secondRouteUrl: ['/home/hot', '/home/dress', '/home/box', '/home/mbaby', '/home/general', '/home/food', '/home/shirt', '/home/man', '/home/ele'],
      options: {
        activeColor: '#e9232c'
      }
    }
  },
  methods: {
    handleChange (item, idx) {
      this.$router.replace(this.secondRouteUrl[idx])
    }
  }
}
</script>

<style scoped lang="stylus">
.home
  background-color: #f5f5f5
  width: 100vw
  height: 120vh
  overflow-x hidden
  overflow-y scroll
  &::-webkit-scrollbar
    display: none
  .fix
    position: fixed
    top: 0
    left: 0
    z-index 998
</style>
