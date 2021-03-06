import Vue from "vue";
import Router from "vue-router";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
// import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
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
