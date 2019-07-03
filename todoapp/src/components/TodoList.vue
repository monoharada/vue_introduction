<template lang="pug">
  div
    button(@click="addTodo") ADD
    h5 Todo List
    ul
      li(v-for="(todo,i) in todos" v-bind:key="i")
        | {{todo}}
        button(@click="deleteTodo(i)") DEL
</template>

<script>
export default {
  data() {
    return {
      todos: []
    };
  },
  // props: ["todos"],
  created() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  },
  methods: {
    deleteTodo(i) {
      // this.$emit("delete", i);
      this.todos.splice(i, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    addTodo() {
      this.$router.push("/todos/add");
    }
  }
};
</script>
