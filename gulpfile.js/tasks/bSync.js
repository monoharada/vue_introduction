const
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  config = require('../config');
      





  
gulp.task("browser-sync", done=> {
  browserSync({
    server: {
      baseDir: config.paths.html,
      index: config.index
    }
  });
  gulp.watch([
    config.paths.js + config.dir.js,
    config.paths.html + config.dir.html,
    config.paths.css + config.dir.css],
    gulp.series('reload'));
  done();
      
});
gulp.task('reload', done=> {
  browserSync.reload();
  done();
});