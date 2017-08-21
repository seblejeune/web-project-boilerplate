// gulp/tasks/html.js
'use strict';

// Plugins used : 
//
// Tasks : 
// html:copy:dev

module.exports = function(gulp, $, config) {
	gulp.task('html:copy:dev', 'copy images folder to build folder', function() {
					
		return gulp.src(config.html.src)
			.pipe($.flatten())
			.pipe(gulp.dest(
				config.html.build
			))
			.pipe($.browserSync.stream());
	});
};