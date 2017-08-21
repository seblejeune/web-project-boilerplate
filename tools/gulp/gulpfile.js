// gulpfile.js
'use strict'

// plugins used : 
// gulp, gulp-help, gulp-load-plugins, gulp-load-subtasks

var gulp = require('gulp-help')(require('gulp')),
		config = require('./config.js'),
		sequence = require('run-sequence'),
		$ = require('gulp-load-plugins')({
			pattern: '*',
			rename: {
				'lodash.assign': 'assign'
			}
		});

$.loadSubtasks('./tasks/**/*.js', $, config);

gulp.task('build', 'Main build to generate your build folder with all test sources', function() {
	sequence(
		'clean:build',
		['html:copy:dev', 'img:copy:dev','sass:compile']
	)
})

gulp.task('test', 'Main build to generate your build folder with all test sources', function() {
	sequence(
		'clean:build',
		['img:copy:preprod','sass:compile']
	)
})