<style scoped>
  .conteiner {
    padding:1.2rem 2%;
  }
  .text {
    padding: 1em;
    border-radius:4px;
    background: #f2f2f2;
    margin-bottom: 1rem;
  }
  .text-error{
    counter-reset: red;
    background: #feeeea;
  }
</style>

<template lang="pug">

 .container
  h1.title Welcome to Vue
  p.text(v-for="message in messages"
          :class="{'text-error':mesage.error}") {{message.text}}
</template>


<script>
export default {
  // el:'#app',
  data() {

    messages: [
      { text: 'This is normal message.', error: false },
      { text: 'This is ERROR message!', error: true },
    ]
  }
}
</script>
