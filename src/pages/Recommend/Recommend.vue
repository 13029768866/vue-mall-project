<template>
    <div class="recommend" v-if="recommend.length > 0">
      <ul class="recommend_comtainer" >
        <shop-list
          tag = 'li'
          v-for = '(item,idx) in recommend'
          :item = 'item'
          :key = 'idx'
        ></shop-list>
      </ul>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ShopList from '@/components/ShopList/ShopList'
export default {
  name: 'Recommend',
  components: {
    ShopList
  },
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



</style>
