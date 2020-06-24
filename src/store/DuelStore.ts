import Vue from 'vue'
import Vuex from 'vuex'
import IDuel from '@/models/IDuel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // duels: Array<IDuel>()
    duels: [{
      id: '0',
      duelScores: [
        {
          idTeam: '1',
          score: 5
        },
        {
          idTeam: '2',
          score: 5
        }
      ]
    },
    {
      id: '1',
      duelScores: [
        {
          idTeam: '1',
          score: 5
        },
        {
          idTeam: '2',
          score: 5
        }
      ]
    },
    {
      id: '2',
      duelScores: [
        {
          idTeam: '1',
          score: 5
        },
        {
          idTeam: '2',
          score: 5
        }
      ]
    },
    {
      id: '3',
      duelScores: [
        {
          idTeam: '1',
          score: 5
        },
        {
          idTeam: '2',
          score: 5
        }
      ]
    },
    {
      id: '4',
      duelScores: [
        {
          idTeam: '1',
          score: 5
        },
        {
          idTeam: '2',
          score: 5
        }
      ]
    },
    {
      id: '5',
      duelScores: [
        {
          idTeam: '1',
          score: 5
        },
        {
          idTeam: '2',
          score: 5
        }
      ]
    },
    {
      id: '6',
      duelScores: [
        {
          idTeam: '1',
          score: 5
        },
        {
          idTeam: '2',
          score: 5
        }
      ]
    },
    {
      id: '7',
      duelScores: [
        {
          idTeam: '1',
          score: 5
        },
        {
          idTeam: '2',
          score: 5
        }
      ]
    },
    {
      id: '8',
      duelScores: [
        {
          idTeam: '1',
          score: 5
        }
      ]
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
