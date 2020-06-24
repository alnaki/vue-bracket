<template>
  <v-app>
    <v-main>
      <bracket :bracket="bracket" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Bracket from "./components/Bracket.vue";
import bracketAPI from "@/api/BracketAPI";

export default Vue.extend({
  name: "App",
  components: {
    Bracket
  },
  data: () => ({
    bracket: {
      id: "1",
      name: "init",
      editionMode: false,
      nbTeamMaxByDuel: 2,
      nbTeamWinner: 1
    }
  }),
  mounted() {
    bracketAPI()
      .get("1")
      .then(response => (this.bracket = response));
  }
});
</script>

<style>
.v-main__wrap {
  flex: initial !important;
}
</style>