import Vue from 'vue'
import Vuex from 'vuex'
import DuelStore from './DuelStore'
import TeamStore from './TeamStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    duel: DuelStore,
    team: TeamStore
  }
})
