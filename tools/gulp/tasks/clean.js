// gulp/tasks/clean.js
'use strict';

// Plugins used : 
// del
//
// Tasks : 
// clean:build
// clean:prod

module.exports = function(gulp, $, config) {
	gulp.task('clean:build', 'delete build folder', function(){
		return $.del([
			config.path.build
		],
		{
			force: true
		});
	});

	gulp.task('clean:prod', 'delete dist folder', function(){
		return $.del([
			config.path.dist
		],
		{
			force: true
		});
	});
}