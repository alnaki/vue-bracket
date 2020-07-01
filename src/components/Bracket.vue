<template>
  <v-container fluid>
    <team-drawer>
      <bracket-node v-if="bracket.bracketNode" :node="bracket.bracketNode"></bracket-node>
      <!-- todo: Make round here with v-for -->
    </team-drawer>
  </v-container>
</template>

<script lang="ts">
import { PropType } from "vue";
import BracketNode from "./BracketNode.vue";
import TeamDrawer from "./TeamDrawer.vue";
import IBracket from "@/models/IBracket";

export default {
  name: "Bracket",
  components: {
    BracketNode,
    TeamDrawer
  },
  props: {
    bracket: {
      type: Object as PropType<IBracket>,
      required: true
    }
  },
  data() {
    return {
      drawer: null,
    };
  }
};
</script>
