<template lang="pug">
  div
    v-toolbar(dark color="indigo")
      v-toolbar-tile.white-text My Todo
    v-list
      template(v-for="(todo,i) in todos")
        v-list-tile(v-bind:key="i")
          v-list-tile-content {{todo}}
          v-list-tile-action
            v-btn(flat icon @click="deleteTodo(i)")
              v-icon delete
        v-divider(v-bind:key="i")
    .bottom-right
      v-btn(fab color="indigo" @click="addTodo")
        v-icon(color="white") add
</template>


<script>
export default {
  data() {
    return {
      todos: []
    };
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  },
  methods: {
    deleteTodo(i) {
      this.todos.splice(i, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    addTodo() {
      this.$router.push("/todos/add");
    }
  }
};
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>

