// gulp/tasks/html.js
"use strict";

// Plugins used :
//
// Tasks :
// html:copy:dev

module.exports = function(gulp, $, config) {
  gulp.task("html:copy:dev", "copy images folder to build folder", function() {
    return gulp
      .src(config.html.src)
      .pipe($.flatten())
      .pipe(
		$.inject(
		gulp.src(config.html.inject.css, {
			read: false
		}),
		config.html.inject.options
		)
      )
      .pipe(gulp.dest(config.html.build))
      .pipe($.browserSync.stream());
  });
};
