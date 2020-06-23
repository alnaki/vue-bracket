<template>
  <div>
    <v-container fluid>
      <bracket-node v-if="bracket.bracketNode" :node="bracket.bracketNode"></bracket-node>
    </v-container>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import BracketNode from "./BracketNode.vue";
import IBracket from "@/models/IBracket";

export default {
  name: "Bracket",
  components: {
    BracketNode
  },
  props: {
    bracket: {
      type: Object as PropType<IBracket>,
      required: true
    }
  }
};
</script>