// gulp/tasks/html.js
"use strict";

// Plugins used :
//
// Tasks :
// html:copy:dev

module.exports = function(gulp, $, config) {
  gulp.task("js:copy:dev", "copy js folder to build folder", function() {
    return gulp.src(config.js.src).pipe(gulp.dest(config.js.build)).pipe($.browserSync.stream());
  });
};
