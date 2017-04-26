var gulp = require('gulp'),
  cssmin = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat')
gulp.task('css', function() {
  gulp.src(["./build/static/css/css.css","./build/static/css/app.css"])
    .pipe(concat('app.min.css'))
    .pipe(cssmin({}))
    .pipe(gulp.dest('./build/static/css/'))
});
