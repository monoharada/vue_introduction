const app = new Vue({
  el: '#app',
  data: {
    currentTab: 1,
  },
  methods: {
    toggle(tab) {
      this.currentTab = tab;
    },
  },
});
