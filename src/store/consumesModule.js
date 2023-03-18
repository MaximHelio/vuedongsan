import axios from 'axios';

export const consumesModule = {
  state: {
    consumes: null
  },
  mutations: { //state 전체
    consumersRead(state, consumes) {
      state.consumes = consumes
    }
  },
  actions: {
    async consumersRead(thisStore, query) { // consumeModule 전체
      try {
        const response = await axios.get(`http://localhost:8081/api/v1/consumes?query=${query}`)
        console.log(this)
        console.log(response.data.consumes)
        thisStore.commit('consumersRead', response.data.consumes)
      } catch (error) {
        thisStore.dispatch('axiosError', error)
      }
    }
  }
}