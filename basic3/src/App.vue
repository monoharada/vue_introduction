<template lang="pug">
  div
    input(
      v-bind:value="changeResult"
      v-on:change="onChange($event)"
      placeholder="change")
    | {{changeResult}}
    br
    input(
      v-bind:value="inputResult"
      @input="onInput($event)"
      placeholder="input")
    | {{inputResult}}
    br
    input(
      v-bind:value="keyupResult"
      @keyup="onKeyup($event)"
      placeholder="keyup")
    | {{keyupResult}}
    br
    input(
      v-model="vmodelResult"
      placeholder="v-model")
    | {{vmodelResult}}
</template>


<script>
export default {
  data() {
    return {
      changeResult: "change default value",
      inputResult: "input default value",
      keyupResult: "keyup default value",
      vmodelResult: "vmodel default value"
    };
  },
  methods: {
    onChange(e) {
      this.changeResult = e.target.value;
    },
    onInput(e) {
      this.inputResult = e.target.value;
    },
    onKeyup(e) {
      this.keyupResult = e.target.value;
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
