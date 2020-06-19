<template>
  <v-card max-width="344" class="mx-auto">
    <div v-for="(score, index) in duel.duelScores" :key="index">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{ score.idTeam }}</v-list-item-title>
          <v-list-item-subtitle>{{ score.score }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-card>
</template>

<script lang="ts">
import { PropType } from "vue";
import IDuel from "../models/IDuel";

export default {
  name: "Duel",
  props: {
    duel: {
      type: Object as PropType<IDuel>,
      required: true
    }
  }
};
</script>