<template lang="pug">
  p hello,{{ name }}
</template>


<style scoped>
h1 {
  color: teal;
}
</style>

<script>
export default {
  data () {
    return {
      name: 'world'
    }
  }
}
</script>