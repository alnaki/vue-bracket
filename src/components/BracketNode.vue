<template>
  <v-row>
    <div class="_column">
      <duel :duel="duelById(node.item.id)" />
    </div>
    <div>
      <bracket-node v-for="(child, index) in node.children" :key="index" :node="child"></bracket-node>
    </div>
  </v-row>
</template>

<script lang='ts'>
import { PropType } from "vue";
import IBracketNode from "../models/IBracketNode";
import Duel from "./Duel.vue";
import store from "../store/DuelStore";

export default {
  name: "BracketNode",
  props: {
    node: {
      type: Object as PropType<IBracketNode>
    }
  },
  components: {
    Duel
  },
  methods: {
    duelById: function(id: string) {
      const res = store.getters.getDuelById(id);
      return res;
    }
  }
};
</script>
<style scoped>
._column {
  position: relative;
  margin-left: 50px;
  display: flex;
  align-items: center;
}

.row {
  flex-direction: row-reverse;
}
</style>