import Vue from "vue";
import Router from "vue-router";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: TodoList
    },
    {
      path: "/todos/add",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TodoForm
    }
  ]
});
