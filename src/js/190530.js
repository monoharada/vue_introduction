const app = new Vue({
  el: '#app',
  data: {
    rating: 3,
    comment: '',
    error: '',
    submitted: false,
    previewUrl: '',
  },
  methods: {
    onSubmit() {
      this.error = '';
      if (this.comment === '') {
        this.error = 'コメントは必須です。';
        return false;
      }
      // フォームの内容を表示
      this.submitted = true;
    },
    clearForm() {
      this.submitted = false;
      this.rating = 3;
      this.comment = '';
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (!file) {
        return false;
      }
      if (!file.type.match('image.*')) {
        return false;
      }
      const reader = new FileReader();
      const that = this;
      reader.onload = function (e) {
        that.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
});
