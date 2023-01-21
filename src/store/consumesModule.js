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
    consumersRead(thisStore) { // consumeModule 전체
      axios.get('http://localhost:8081/api/v1/consumes').then((response) => {
        console.log(this);
        console.log(response.data.consumes);
        // thisStore.state.consumes = response.data.consumes;
        thisStore.commit('consumersRead', response.data.consumes)
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}