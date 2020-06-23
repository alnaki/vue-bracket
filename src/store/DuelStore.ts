import Vue from 'vue'
import Vuex from 'vuex'
import IDuel from '@/models/IDuel'
import IScore from '@/models/IScore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // duels: Array<IDuel>()
    duels: [{
      id: '1',
      duelScores: Array<IScore>()
    },
    {
      id: '2',
      duelScores: Array<IScore>()
    },
    {
      id: '3',
      duelScores: Array<IScore>()
    },
    {
      id: '4',
      duelScores: Array<IScore>()
    },
    {
      id: '5',
      duelScores: Array<IScore>()
    },
    {
      id: '6',
      duelScores: Array<IScore>()
    },
    {
      id: '7',
      duelScores: Array<IScore>()
    },
    {
      id: '8',
      duelScores: Array<IScore>()
    }]
  },
  mutations: {
    initDuels: (state, duels) => {
      state.duels = duels
    },
    addDuel: (state) => (duel: IDuel) => {
      return state.duels.push(duel)
    },
    deleteDuel: (state) => (id: string) => {
      return state.duels.filter(duel => duel.id != id)
    }
  },
  actions: {
  },
  getters: {
    getDuelById: (state) => (id: string) => {
      return state.duels.find(duel => duel.id === id)
    }
  }
})
