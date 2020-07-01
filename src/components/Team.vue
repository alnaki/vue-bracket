<template>
  <v-list-item>
    <v-list-item-avatar color="grey"></v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="headline">{{ team.name }}</v-list-item-title>
      <!-- <v-list-item-subtitle>{{ team }}</v-list-item-subtitle> -->
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="ts">
import { PropType } from "vue";
import { ITeam } from "../models/ITeam";

export default {
  name: "Team",
  props: {
    team: Object as PropType<ITeam>
  }
};
</script> 