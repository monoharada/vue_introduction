const
  gulp = require('gulp'),
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  config = require('../config');
      


gulp.task('pug', done=> {
  gulp.src([config.paths.pug + config.dir.pug, config.paths.pug + config.dir._pug])
    .pipe(plumber({
      errorHandler: notify.onError("Error:<%=error.message %>")
    }))
    .pipe(pug(config.tasks.css.pugOptions))
    .pipe(gulp.dest(config.paths.html));
  done();
});


