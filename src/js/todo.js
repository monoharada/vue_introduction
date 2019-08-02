const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: [],
  },
  methods: {
    addItem(event) {
      // alert();
      const todo = {
        item: this.newItem,
      };
      this.todos.push(todo);
    },
  },
});
