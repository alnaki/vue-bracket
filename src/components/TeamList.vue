<template>
  <draggable :list="teams" group="{ name:'team', pull: 'clone', put: false }" >
    <div v-for="team in teams" :key="team.id">
      <team :team="team" class="px-2"></team>
    </div>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import Team from "./Team.vue";
import store from "../store/TeamStore";

export default {
  name: "TeamList",
  components: {
    draggable,
    Team
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ]
    };
  },
  computed: {
    teams: {
      get() {
        return store.getters.getAll();
      },
      set(value) {
        return store.commit("updateTeams", value);
      }
    }
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>