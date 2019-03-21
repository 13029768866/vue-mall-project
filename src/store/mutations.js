// 引入常量
import {
  HOME_CASUAL
} from './mutation-types'

// 根据常量提交到state
export default {
  [HOME_CASUAL](state,{homecasual}){
    state.homecasual = homecasual
  }
}
