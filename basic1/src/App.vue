<template lang="pug">
  div
    h3 {{title}}
    ul
      li: a(v-bind:href="url1") vue
      li: a(:href="url2") Vuetify
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      title: "Vue sites",
      url1: "https://vuejs.org/",
      url2: "https://vuetifyjs.com"
    };
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
