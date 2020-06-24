import Vue from 'vue'
import Vuex from 'vuex'
import { ITeam } from '@/models/ITeam'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teams: [
      {
        id: "1",
        name: "Jackets"
      },
      {
        id: "2",
        name: "Legs"
      },
      {
        id: "3",
        name: "United"
      },
      {
        id: "4",
        name: "Athletic"
      },
      {
        id: "5",
        name: "Teichois"
      },
      {
        id: "6",
        name: "BDX"
      },
      {
        id: "7",
        name: "Spartiates"
      },
      {
        id: "8",
        name: "Atheniens"
      },
      {
        id: "9",
        name: "Gayz"
      },
      {
        id: "10",
        name: "Broncos"
      },
      {
        id: "11",
        name: "OUPS"
      },
      {
        id: "12",
        name: "Pirates"
      },
      {
        id: "13",
        name: "Donkeys"
      }
    ]
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
  },
  getters: {
    getTeamById: (state) => (id: string) => {
      return state.teams.find(team => team.id === id)
    }
  }
})
