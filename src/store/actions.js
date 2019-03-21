// 引入获取数据方法
import {
  getHomeCasual
} from '../api'

//  引入mutations-types常量
import {
  HOME_CASUAL
} from './mutation-types'

export default {
  // 异步获取参数，commit提交到mutations
  async reqHomeCasual({commit}){
    const result = await getHomeCasual()
    commit(HOME_CASUAL,{homecasual : result.message.data})
}
}
