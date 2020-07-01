<template>
  <v-card max-width="344" class="mx-auto duel">
    <draggable :list="duel.duelScores" group="team">
      <div v-for="(score, index) in duel.duelScores" :key="index">
        <team :team="teamById(score.idTeam)"></team>
      </div>
    </draggable>
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
    }
  }
};
</script>
<style>
.duel {
  margin: 10px;
}
</style>