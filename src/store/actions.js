// 引入获取数据方法
import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommend
} from '../api'

//  引入mutations-types常量
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  Recommend
} from './mutation-types'

export default {
  // 异步获取参数，commit提交到mutations
  // 首页轮播图
  async reqHomeCasual({commit}){
    const result = await getHomeCasual()
    commit(HOME_CASUAL,{homecasual : result.message.data})
},
  // 首页热门导航
  async reqHomeNav({commit}) {
    const res = await getHomeNav()
    commit(HOME_NAV,{homenav: res.message.data})
  },
  // 首页商品列表
  async reqShopList({commit}) {
    const res = await getHomeShopList()
    commit(HOME_SHOP_LIST,{homeshoplist: res.message.goods_list})
},
// 推荐页面
  async reqRecommend({commit}){
    const res = await getRecommend()
    commit(Recommend, {recommend:res.message.data})
  }
}
