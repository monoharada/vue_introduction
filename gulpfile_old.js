const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');


// setting:path

const paths = {
    'scss': './src/scss',
    'css':'./public/css',
    'pug': './src/pug/',
    'html': './public/',
    'js':'./dist/js/'
}

// setting :Sass Option
const sassOptions = {
    outoputStyle : 'compressed'
}

// setting :pug Opyions
const pugOptions = {
    pretty: true
}

// sass compile
gulp.task('scss', () => {
    gulp.src(`${paths.scss}*.scss`)
        .pipe(plumber({ errorHandler: notify.onError("Error:<%=error.message %>") }))
        .pipe(sass(sassOptions))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.css))
});

// pug
gulp.task('pug', () => gulp.src([`${paths.pug}**/*.pug`, `!${paths.pug}**/_*.pug`])
    .pipe(plumber({ errorHandler: notify.onError("Error:<%=error.message %>") }))
    .pipe(pug(pugOptions))
    .pipe(gulp.dest(paths.html))
);

// Browser Sync
gulp.task("browser-sync", () => {
    browserSync({
        server: {
            baseDir: paths.html,
            index: "vue-class-style.html"
        }
    });
    gulp.watch([`${paths.js}**/*.js`, `${paths.html}**/*.html`, `${paths.css}**/*.css`], gulp.series('reload'));
});
gulp.task('reload', () => {
    browserSync.reload();
});
const dir = {
    'scss': "**/*.scss",
    'pug': "**/*.pug",
    '_pug': "**/_*.pug"
} 
// watch
gulp.task('watch', () => {
    gulp.watch(`${paths.scss}**/*.scss`, gulp.series('scss'));
    gulp.watch([
        `${paths.scss,dir.scss}`,
        `${paths.pug,dir.pug}`,
        `!${paths.pug,dir._pug}`],
        gulp.parallel('scss', 'pug'));
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));

// // gulp.task('default', () => {
// //     runSequence(
// //         'watch',
// //         'browser-sync'
// //     )
// // });

// gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch'), function () {
//     // タスクの記述
// }));