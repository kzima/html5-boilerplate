var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('./less/main.less')
    .pipe(less({errLogToConsole: true}))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['less']);
gulp.task('watch', function() {
  gulp.watch('./less/**/*.less', ['less']);
});
