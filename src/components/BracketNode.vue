<template>
  <div class="_row">
    <div class="_column">{{ duelById(node.item.id) }}</div>
    <div>
      <bracket-node v-for="(child, index) in node.children" :key="index" :node="child"></bracket-node>
    </div>
  </div>
</template>

<script lang='ts'>
// import { PropType } from "vue";
import IBracketNode from "../models/IBracketNode";
import store from "../store/DuelStore";

export default {
  name: "BracketNode",
  props: {
    node: Object
    //  as PropType<IBracketNode>
  },
  methods: {
    duelById: function(id: string) {
      const res = store.getters.getDuelById(id);
      return res;
    },
    isSheet: function(node: IBracketNode) {
      return node && node.children && node.children.length > 0;
    }
  }
};
</script>
<style scoped>
._column {
  flex-direction: column;
}

._row {
  /* flex-direction: row-reverse; */
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}
</style>