<template>
  <v-sheet class="overflow-hidden" style="position: relative;">
    <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn>
    <slot></slot>
    <v-navigation-drawer
      :mini-variant.sync="mini"
      v-model="drawer"
      absolute
      temporary
      expand-on-hover
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Team list</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <team-list></team-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import TeamList from "./TeamList.vue";
export default {
  name: "TeamDrawer",
  components: {
    TeamList
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  }
};
</script>
<style>
.v-navigation-drawer__content::-webkit-scrollbar {
  display: none;
}
.v-navigation-drawer__content {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>