<template>
  <div>
    <v-container fluid>
      <v-row align="alignment">
        <round v-for="round in bracket.rounds" :key="round.id" :round="round" />
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import Round from "./Round.vue";
import IBracket from "@/models/IBracket";

export default {
  name: "Bracket",
  components: {
    Round
  },
  props: {
    bracket: {
      type: Object as PropType<IBracket>,
      required: true
    }
  }
};
</script>