

let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(concat('style.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
