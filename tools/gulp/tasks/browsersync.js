// gulp/tasks/browsersync.js
'use strict';

// Plugins used : 
// browser-sync
//
// Tasks : 
// serve

var gulpSequence = require('gulp-sequence')

module.exports = function(gulp, $, config) {
	gulp.task('serve','Launch browser sync server', gulpSequence(['js:copy:dev', 'sass:compile', 'img:copy:dev', 'fontawesome:copy'], 'html:copy:dev', 'bower:dev'), function() {
		$.browserSync.init({
			server: config.path.build
		});

		gulp.watch(config.sass.src, ['sass:compile']);
		gulp.watch(config.bower.src, ['bower:dev']);
		gulp.watch(config.img.src, ['img:copy:dev']);
		gulp.watch(config.js.src, ['js:copy:dev']);
		gulp.watch(config.html.src, ['html:copy:dev']);
		gulp.watch(config.html.src_folder, ['html:copy:dev']);
		gulp.watch(config.path.build).on('change', $.browserSync.reload);
	})
}