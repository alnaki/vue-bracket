<template>
  <v-col>
    <duel v-for="duel in round.duels" :key="duel.id" :duel="duel" />
  </v-col>
</template>

<script lang="ts">
import Duel from "./Duel.vue";

export default {
  name: "Round",
  components: {
    Duel
  },
  props: {
    round: {
      type: Object,
    }
  }
};
</script>