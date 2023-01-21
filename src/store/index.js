import { createStore } from 'vuex'
import { consumesModule } from './consumesModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    axiosError(thisStore, error) {
      console.error(error.response || error.message || error)
      alert((error.response && error.response.statusText) || error.message || '알 수 없는 오류가 발생 하였습니다.')
    }
  },
  modules: {
    $consumes: consumesModule
  }
})
