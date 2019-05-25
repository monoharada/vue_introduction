const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  config = require('../config');
      


gulp.task('css', function (done) {
  gulp.src(config.paths.scss + config.dir.scss)
    .pipe(plumber({ errorHandler: notify.onError("Error:<%=error.message %>") }))
    .pipe(sass(config.tasks.css.sassOptions))
    .pipe(gulp.dest(config.paths.css));
  done();
});
