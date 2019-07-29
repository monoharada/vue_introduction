<template lang="pug">
  div
    h3 pageTwo
    router-link(to="/") PageOne
    button(v-on:click="toPageOne()") To PageOne
</template>

<script>
export default {
  methods: {
    toPageOne() {
      this.$router.push('/');
    },
  },
  created(){
    alert("PageTwo created");
  },
  destroyed(){
    alert("PageTwo destroyed");
  }
};
</script>
