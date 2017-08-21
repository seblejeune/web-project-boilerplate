// gulp/tasks/images.js
'use strict';

// Plugins used : 
// gulp-flatten, gulp-image
//
// Tasks : 
// img:copy:dev
// img:copy:preprod ==> launch img:copy with img optimizer

module.exports = function(gulp, $, config) {
	gulp.task('img:copy:dev', 'copy images folder to build folder', function() {
					
		return gulp.src(config.img.src)
			.pipe($.flatten())
			.pipe(gulp.dest(
				config.img.build
			))
			.pipe($.browserSync.stream());
	});

	gulp.task('img:copy:preprod', 'copy images folder to build folder with preprod options', function() {
					
		return gulp.src(config.img.src)
			.pipe($.flatten())
			.pipe($.image(config.img.image.options))
			.pipe(gulp.dest(
				config.img.build
			))
			.pipe($.browserSync.stream());
	});
};