'use strict'

const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')



gulp.task('sass', () => {
    return gulp.src(['./assets/scss/**/*.scss', "!./assets/scss/_partials/**/*.scss"])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
})
gulp.task('browserSync', () => {
    browserSync.init({
        server: { baseDir: './'},
        browser: 'firefox',
        port: 4567
    })
});

gulp.task('default', ['browserSync', 'sass'], () => {
    console.log("Iniciando...");

    gulp.watch(['./assets/scss/**/*.scss', './vendor/**/*.scss'], ['sass']);
    gulp.watch(['./assets/css/**/*.css', './assets/scss/**/*.scss', './assets/js/**/*.js', './**/*.html'], browserSync.reload)

});
