// gulp/tasks/fonts.js
'use strict';

// Plugins used : 
//
// Tasks : 
// fontawesome:copy

module.exports = function(gulp, $, config) {
	gulp.task('fontawesome:copy', 'copy images folder to build folder', function() {
					
		return gulp.src(config.fonts.fontawesome.src)
			.pipe($.flatten())
			.pipe(gulp.dest(
				config.fonts.fontawesome.build
			))
	});
};