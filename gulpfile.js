var gulp = require('gulp');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');

gulp.task('default', ['scss-lint', 'sass']);

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./scss/'));
});

gulp.task('scss-lint', function() {
  gulp.src('./scss/styles/*.scss')
    .pipe(scsslint());
});