<template lang="pug">
  div
    //- h3 My Todo
    router-link(to="/") Back
    br
    input(v-model="newTodo",placeholder="Input here...")
    button(@click="addTodo()") ADD
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
      // this.$emit("add", this.newTodo);
      this.newTodo = "";
      this.$router.push("/");
    }
  }
};
</script>

