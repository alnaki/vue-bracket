<template>
  <v-app>
    <v-content>
      <bracket :bracket='bracket' />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Bracket from './components/Bracket.vue'
import bracketAPI from '@/api/BracketAPI'

export default Vue.extend({
  name: 'App',
  components: {
    Bracket
  },
  data: () => ({
    bracket: {}
  }),
  mounted() {
    bracketAPI().get('1').then(response => this.bracket = response)
  }
});
</script>
