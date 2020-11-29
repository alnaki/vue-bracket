<template>
  <v-container fluid>
    <team-drawer>
      <bracket-node v-if="bracket.bracketNode" :node="bracket.bracketNode"></bracket-node>
      <!-- todo: Make round here with v-for -->
    </team-drawer>
  </v-container>
</template>

<script lang="ts">
import BracketNode from "./BracketNode.vue";
import TeamDrawer from "./TeamDrawer.vue";
import IBracket from "@/models/IBracket";

import { Prop } from "vue-property-decorator";
import Vue from "vue";
import Component from "vue-class-component";

@Component({ components: { BracketNode, TeamDrawer } })
export default class Bracket extends Vue {
  @Prop() bracket: IBracket;
  hightlightTeamId = -1;

  constructor() {
    super();
    this.bracket = {
      id: "0",
      name: "tournament",
      fathersNode: [],
      bracketNode: null,
      editionMode: false,
      nbTeamMaxByDuel: 2,
      nbTeamWinner: 1
    };
  }

  public highlightTeam(id: number): void {
    this.hightlightTeamId = id;
  }
}
</script>
