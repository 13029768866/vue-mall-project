// 引入常量
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  Recommend
} from './mutation-types'

// 根据常量提交到state
export default {
  [HOME_CASUAL](state,{homecasual}){
    state.homecasual = homecasual
  },
  [HOME_NAV](state,{homenav}){
    state.homenav = homenav
  },
  [HOME_SHOP_LIST](state,{homeshoplist}){
    state.homeshoplist = homeshoplist
  },
  [Recommend](state,{recommend}){
    state.recommend = recommend
  }
}
