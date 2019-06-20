<template lang="pug">
  ul
    li(v-for="todo in todos" v-bind:key="todo.id") {{ todo.text}}
      button(v-on:click="deleteTodo(todo.id)") x
</template>


<script>
export default {
  data() {
    return {
      todos: [
        { id: "1", text: "todo 1" },
        { id: "2", text: "todo 2" },
        { id: "3", text: "todo 3" }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
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
