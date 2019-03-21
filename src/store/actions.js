import {
  getHomeCasual
} from '../api'

import {
  HOME_CASUAL
} from './mutation-types'

export default {
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message.data})
  }
}
