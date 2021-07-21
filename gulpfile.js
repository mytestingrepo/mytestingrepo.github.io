'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('scss', function () {
	return gulp.src('assets/scss/style.scss')
		.pipe(sass({
            outputStyle: 'compressed',
            precision: 15,
            sourceMap: true
        }).on('error', function (e) {
			this.emit('end');
			console.log('SCSS error', e);
        }))
        .pipe(autoprefixer({
            cascade: false,
            flexbox: true
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('scripts_common', function () {
    return gulp.src(['assets/js/common.js'])
        .pipe(concat('common.js'))
        .pipe(uglify().on('error', function (e) {
            this.emit('end');
            console.error('JS Uglify error - common: ', e);
        }))
        .pipe(gulp.dest('assets/build'));
});

gulp.task('scripts', function () {
    return gulp.src('assets/js/custom/**/*.js')
        .pipe(uglify().on('error', function (e) {
            this.emit('end');
            console.error('JS Uglify error - scripts: ', e);
        }))
        .pipe(gulp.dest('assets/build'));
});

gulp.task('watch', function () {
	gulp.watch('assets/scss/**/*.scss', gulp.series('scss'));
    gulp.watch(['assets/js/lib/*.js', 'assets/js/common.js'], gulp.series('scripts_common'));
    gulp.watch(['assets/js/custom/**/*.js'], gulp.series('scripts'));
});

gulp.task('default', gulp.parallel('scss', 'scripts_common', 'scripts', 'watch'));