<template>
  <v-list disabled>
    <v-list-item-group color="primary">
      <v-list-item v-for="(item, i) in teams" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.id"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script lang="ts">
import store from "../store/TeamStore";

export default {
  name: "TeamList",
  data: () => ({
    teams: store.getters.getAll()
  })
};
</script>