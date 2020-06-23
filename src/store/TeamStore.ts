import Vue from 'vue'
import Vuex from 'vuex'
import { ITeam } from '@/models/ITeam'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: Array<ITeam>()
  },
  mutations: {
    initTeam: (state, teams: ITeam[]) => {
      state.teams = teams
    },
    addTeam: (state) => (team: ITeam) => {
      return state.teams.push(team)
    },
    deleteTeam: (state) => (id: string) => {
      return state.teams.filter(team => team.id != id)
    }
  },
  actions: {
  }
})
