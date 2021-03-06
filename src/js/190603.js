const app = new Vue({
  el: '#app',
  data: {
    email: '',
    username: '',
    error: {},
  },
  watch: {
    email(value) {
      if (value === '') {
        this.error.email = 'メールアドレスは必須です。';
      } else {
        this.error.email = '';
      }
    },
    username(value) {
      if (value === '') {
        this.error.username = 'ユーザー名は必須です。';
      } else if (!/[a-zA-Z0-9]+/.test(value)) {
        this.error.username = 'ユーザー名は半角英数のみです。';
      } else {
        this.error.username = '';
      }
    },
  },
});
