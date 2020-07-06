<template>
  <draggable
    :list="teams"
    :group="{name:'team', pull:'clone'}"
    :clone="cloneTeam"
    @start="closeDrawer()"
    @change="log"
  >
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
    closeDrawer() {
      this.$emit("drawer");
    },
    cloneTeam({ id }) {
      return {
        idTeam: id,
        score: 0
       };
    },
    add: () => {
      this.list.push({ name: "Juan" });
    },
    replace: () => {
      this.list = [{ name: "Edgard" }];
    },
    clone: el => {
      return {
        name: el.name + " cloned"
      };
    },
    log: evt => {
      window.console.log(evt);
    }
  }
};
</script>