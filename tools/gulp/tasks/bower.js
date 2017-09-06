// gulp/tasks/bower.js
"use strict";

// Plugins used :
//
// Tasks :
// bower:dev

module.exports = function(gulp, $, config) {
  gulp.task("bower:dev", "Synchronise bower file for dev", function() {
    return gulp.src($.mainBowerFiles({
      paths: {
				bowerDirectory: config.bower.src,
				bowerJson: config.bower.src_json
    }
    }))
      .pipe(gulp.dest(config.bower.build))
      .pipe($.browserSync.stream());
  });
};
