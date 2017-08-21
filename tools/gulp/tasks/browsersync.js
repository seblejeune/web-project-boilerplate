// gulp/tasks/browsersync.js
'use strict';

// Plugins used : 
// browser-sync
//
// Tasks : 
// serve

module.exports = function(gulp, $, config) {
	gulp.task('serve','Launch browser sync server', ['sass:compile', 'html:copy:dev', 'img:copy:dev'], function() {
		$.browserSync.init({
			server: config.path.build
		});

		gulp.watch(config.sass.src, ['sass:compile']);
		gulp.watch(config.img.src, ['img:copy:dev']);
		gulp.watch(config.html.src, ['html:copy:dev']);
		gulp.watch(config.path.build + '*.html').on('change', $.browserSync.reload);
	})
}