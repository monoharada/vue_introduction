<template lang="pug">
  v-list
    template(v-for="todo in todos")
      v-list-tile(v-bind:key="todo.id")
        v-list-tile-content  {{ todo.text }}
        v-list-tile-action
          v-btn(flat="" icon="" v-on:click="deleteTodo(todo.id)")
            v-icon filter_{{todo.id}}
      v-divider(v-bind:key="todo.id")
</template>


<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, text: "todo 1" },
        { id: 2, text: "todo 2" },
        { id: 3, text: "todo 3" }
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
