/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


var AllVendorlJsFiles = [
	'./src/main/resources/static/bower_components/jquery/dist/jquery.min.js',
	'./src/main/resources/static/bower_components/angular/angular.min.js',
	'./src/main/resources/static/bower_components/bootstrap/dist/js/bootstrap.min.js',
	'./src/main/resources/static/bower_components/angular-route/angular-route.min.js',
	'./src/main/resources/static/bower_components/angular-ui-router/release/angular-ui-router.min.js'	
];

// create a default task and just log a message
/*
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});
*/

//define the default task and add the watch task to it
gulp.task('default', ['watch']);

//configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('src/main/resources/static/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-vendor-js', function() {
	  return gulp.src(AllVendorlJsFiles)
	    .pipe(concat('vendor.js'))
	    .pipe(gulp.dest('src/main/resources/static/dist'));
	});

gulp.task('build-js', function() {
	  return gulp.src('src/main/resources/static/app/**/*.js')
	    .pipe(concat('script.js'))
	    .pipe(gulp.dest('src/main/resources/static/dist'));
	});

gulp.task('build-js-minified', function() {
	  return gulp.src('src/main/resources/static/app/**/*.js')
	    .pipe(concat('script.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('src/main/resources/static/dist'));
	});

//configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('src/main/resources/static/app/**/*.js', ['jshint','build-js']);
});

//task
gulp.task('build', ['build-js','build-vendor-js']);

gulp.task('build-prod', ['build-js-minified','build-vendor-js']);
