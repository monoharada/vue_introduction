<template lang="pug">
  hoge(v-bind:pval="parentValue" v-on:add="addValueParent($event)")
</template>


<script>
import Child from "./components/Child";
export default {
  data() {
    return {
      parentValue: 100
    };
  },
  components: {
    hoge: Child
  },
  methods: {
    addValueParent(value) {
      this.parentValue += value;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
