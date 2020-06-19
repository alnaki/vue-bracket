<template>
  <v-col>
    <duel v-for="duel in round.duels" :key="duel.id" :duel="duel" />
  </v-col>
</template>

<script lang="ts">
import { PropType } from "vue";
import Duel from "./Duel.vue";
import IRound from "../models/IRound";

export default {
  name: "Round",
  components: {
    Duel
  },
  props: {
    round: {
      type: Object as PropType<IRound>,
      required: true
    }
  }
};
</script>