<template>
    <div class="recommend" v-if="recommend.length > 0">
      <ul class="recommend_comtainer" >
        <shop-list
          tag = 'li'
          v-for = '(item,idx) in recommend'
          :item = 'item'
          :key = 'idx'
          :clickCellBtn="dealWithCellBtnClick"
        ></shop-list>
      </ul>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import BScroll from 'better-scroll'
  import { Indicator } from 'mint-ui';
  import { addGoodsToCart } from '@/api/index';
  import ShopList from '@/components/ShopList/ShopList'
export default {
  name: 'Recommend',
  components: {
    ShopList
  },
  data(){
    return {
      page: 1,
      count: 20
    }
  },
  computed:{
    ...mapState(['recommend','userInfo'])
  },
  mounted() {
    console.log(Indicator);
    Indicator.open('正在加载中');
    // 获取推荐页面数据
    this.$store.dispatch('reqRecommend',{page:this.page,count: this.count,callback:()=>{
        Indicator.close()
      }})

  },
  methods:{
      initBScroll() {
        this.listScroll = new BScroll('.recommend',{probeType: 3})
        // 监听列表滚动
        this.listScroll.on('touchEnd',(pos)=>{
          // 监听下拉刷新
          if(pos.y >= 50){
            console.log('下拉刷新');
          }
          // 监听上拉加载
          if(this.listScroll.maxScrollY >= pos.y + 20){
            // console.log(this.page);
            // console.log('上拉加载');
            Indicator.open('正在加载中');
            this.$store.dispatch('reqRecommend',{page:this.page,count: this.count,callback:()=>{
                Indicator.close();
              }})
          }
        })
        this.listScroll.on('scrollEnd',()=>{
          this.listScroll.refresh()
        })
      },
      // 商品点击
    async dealWithCellBtnClick(goods){
      console.log(goods);
      // 1. 发送请求
      // user_id, goods_id, goods_name, thumb_url, price
      // console.log(this.userInfo.id);

      let result = await addGoodsToCart(this.userInfo.id, goods.goods_id, goods.goods_name, goods.thumb_url, goods.price);
      console.log(result);
    }
  },

  watch:{
    recommend(){
      this.$nextTick(()=>{
        this.page++
        this.initBScroll()
      })
    }
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
    padding-bottom 100px
</style>
