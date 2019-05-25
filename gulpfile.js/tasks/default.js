const
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  config = require('../config'),
  pug = require('./pug');
  scss = require('./css');
const $ = require('./gulp/plugin');



gulp.task('watch', done=> {
  gulp.watch(config.paths.scss + config.dir.scss, gulp.series(scss));
  gulp.watch([
      config.paths.scss + config.dir.scss,
      config.paths.pug,config.dir.pug,
      config.paths.pug,config.dir._pug
    ],
    gulp.parallel('scss', 'pug'));
  done();  
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));
