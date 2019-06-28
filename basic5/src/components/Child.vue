<template lang="pug">
  div
    | {{pval}}
    button(@click="addValueChild()") ADD
</template>


<script>
export default {
  props: ["pval"],
  methods: {
    addValueChild() {
      this.$emit("add", 10);
    }
  }
};
</script>

