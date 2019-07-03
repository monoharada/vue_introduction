<template lang="pug">
  div
    h3 My Todo
    router-view
    //- todo-form(@add="addTodo($event)")
    //- todo-list(v-bind:todos="todos",@delete="deleteTodo($event)")
</template>
// <script>
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
// export default {
//   data() {
//     return {
//       todos: []
//     };
//   },
//   created() {
//     this.todos = JSON.parse(localStorage.getItem("todos")) || [];
//   },
//   components: {
//     "todo-form": TodoForm,
//     "todo-list": TodoList
//   }
//   // methods: {
//   //   addTodo(newTodo) {
//   //     this.todos.push(newTodo);
//   //     localStorage.setItem("todos", JSON.stringify(this.todos));
//   //   },
//   //   deleteTodo(i) {
//   //     this.todos.splice(i, 1);
//   //     localStorage.setItem("todos", JSON.stringify(this.todos));
//   //   }
//   // }
// };
//
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
