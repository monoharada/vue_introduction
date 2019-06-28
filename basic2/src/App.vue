<template lang="pug">
  div
    button(@click="onClick()") click
    | {{ clickResult }}

    br
    input(@change="onChange($event)" placeholder="change")
    | {{changeResult}}
    br
    input(@input="onInput($event)" placeholder="input")
    | {{inputResult}}
    br
    input(@keyup="onKeyup($event)" placeholder="keyup")
    | {{ keyupResult}}
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      clickResult: "",
      changeResult: "",
      inputResult: "",
      keyupResult: ""
    };
  },
  methods: {
    onClick() {
      this.clickResult = "clicked";
    },
    onChange(e) {
      this.changeResult = e.target.value;
    },
    onKeyup(e) {
      this.keyupResult = e.target.value;
    },
    onInput(e) {
      this.inputResult = e.target.value;
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
