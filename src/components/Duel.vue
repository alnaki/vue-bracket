<template>
  <v-card max-width="344" class="mx-auto duel">
    <draggable :list="duel.duelScores" group="team" @change="log">
      <div v-for="score in duel.duelScores" :key="score.idTeam">
        <team :team="teamById(score.idTeam)"></team>
      </div>
    </draggable>
    <div>{{ error }}</div>
  </v-card>
</template>

<script>
import Team from "./Team.vue";
import store from "@/store/TeamStore";
import draggable from "vuedraggable";

export default {
  name: "Duel",
  components: {
    Team,
    draggable
  },
  props: {
    duel: {
      type: Object,
      required: true
    }
  },
  methods: {
    teamById: function(id) {
      return store.getters.getTeamById(id);
    },
    log: evt => {
      window.console.log(evt);
    }
  },
  computed: {
    error() {
      console.log(this.duel);
      if (this.duel == undefined || this.duel.duelScores.length <= 0)
        return "Duel without players";
      if (this.duel.duelScores.length == 1)
        return "Duel need more than one player";
      // todo: Add if nb player > nbMax
      return null;
    }
  }
};
</script>
<style>
.duel {
  margin: 10px;
}
</style>