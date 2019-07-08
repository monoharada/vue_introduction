<template lang="pug">
  div
    v-toolbar(dark color="indigo")
      router-link(to="/")
        v-icon arrow_back
      v-toolbar-tile.white-text My todo
    v-text-field(v-model="newTodo",placeholder="Input here")
    v-btn.white-text(dark color="indigo" @click="addTodo()") ADD
</template>

<script>
export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo === "") return;
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      todos.push(this.newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
      this.newYodo = "";
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>


