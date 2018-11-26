import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/stores/state'
import mutations from '@/stores/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions: {

  }
})
