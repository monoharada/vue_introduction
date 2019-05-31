var app = new Vue({
  el: '#app',
  data: {
    left: 0,
    right: 0,
    isComputedCalled:false
  },
  methods: {
    setMessage: function () {
      this.isComputedCalled = true
      const that = this
      setTimeout(function () {
        that.isComputedCalled = false
      },1000)
    }
  },
  computed: {
    total: function () {
      this.setMessage()

      return this.left + this.right
    }
  }
})
