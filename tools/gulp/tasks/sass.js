// gulp/tasks/sass.js
'use strict';

// Plugins used : 
// gulp-sass, gulp-plumber, gulp-sourcemaps, gulp-autoprefixer
// gulp-filter
//
// Tasks : 
// sass:compile

module.exports = function(gulp, $, config) {
	gulp.task('sass:compile', 'Compiling sass file to build folder', function() {
					
		return gulp.src(config.sass.src)
			.pipe($.plumber({
				errorHandler: config.error
			}))
			.pipe($.sourcemaps.init())
			.pipe($.sass(
				config.sass.options
			))
			.pipe($.autoprefixer(
				config.sass.autoprefixer
			))
			.pipe($.sourcemaps.write('./_maps'))
			.pipe(gulp.dest(
				config.sass.build
			))
			.pipe($.browserSync.stream());
	});
};