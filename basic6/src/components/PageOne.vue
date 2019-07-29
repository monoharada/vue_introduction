<template lang="pug">
  div
    h3 PgaeOne
    router-link(to="/pagetwo") PageTwo
    button(v-on:click="toPageTwo()") To Page Two
</template>

<script>
export default {
  methods: {
    toPageTwo() {
      this.$router.push('/pagetwo');
    },
  },
  created() {
alert("PageOne created");
  },
  destroyed(){
    alert("PageOne destroyed");
  }
};
</script>
