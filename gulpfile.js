'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var $ = require("gulp-load-plugins")({ lazy: true });


gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000,
	});
});
gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task("styles", function(){
	return gulp
		.src("./src/styles/**.less")
		.pipe($.plumber())
		.pipe($.less())
		.pipe($.autoprefixer({ browsers: ["Firefox > 4", "last 2 versions", "> 1%"]}))
		.pipe($.concat("main.css"))
		.pipe(gulp.dest("./public/styles/"));
});

gulp.task("optimize-css", ["styles"], function(){
	return gulp.src("./public/styles/main.css")
				.pipe($.csso())
				.pipe(gulp.dest("./public/min/"));
});

gulp.task("watch-styles", function(){
	gulp.watch("./src/styles/**.less", ["styles"]);
});