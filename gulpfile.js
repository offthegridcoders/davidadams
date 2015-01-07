var gulp = require('gulp');
var rubysass = require('gulp-ruby-sass');
var scsslint = require('gulp-scss-lint');

gulp.task('default', ['scss-lint', 'rubysass']);

gulp.task('rubysass', function () {
    gulp.src('./scss/*.scss')
        .pipe(rubysass())
        .pipe(gulp.dest('./scss/'));
});

gulp.task('scss-lint', function() {
  gulp.src('./scss/styles/*.scss')
    .pipe(scsslint());
});