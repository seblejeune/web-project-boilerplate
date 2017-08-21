// gulp/config.js
'use strict';

var gutil = require('gulp-util');

const fromRoot = require('../utils/from-root.js');

const buildPath = fromRoot('build/');
const distPath = fromRoot('dist/');
const scssPath = fromRoot('src/scss/');
const imgPath = fromRoot('src/img/');
const htmlPath = fromRoot('src/page/');

module.exports = {
	path: {
		build: buildPath,
		dist: distPath,
		scss: scssPath,
		img: imgPath,
		html: htmlPath
	},
	sass: {
		src: scssPath + '/**/*.{scss,sass}',
		build: buildPath + 'css/',
		options: {
			includePaths: [
				fromRoot('node_modules')
			],
			outputStyle: 'expanded'
		},
		autoprefixer: {
			browsers: 'last 2 versions',
			cascade: false
		}
	},
	img: {
		src: imgPath + '/**/*.{jpg,gif,png,svg}',
		build: buildPath + 'img/',
		image: {
			options: {
				pngquant: true,
				optipng: false,
				zopflipng: true,
				jpegRecompress: false,
				jpegoptim: true,
				mozjpeg: true,
				guetzli: false,
				gifsicle: true,
				svgo: true,
				concurrent: 10
			}
		}
	},
	html: {
		src: htmlPath + '/**/*.html',
		build: buildPath,
	},
	// error handler
	error: function(error) {
			// output an error message
			gutil.log(
					gutil.colors.red(
							'\n\------------------------------\n\Error in plugin (' + gutil.colors.green(error.plugin) + '):\n\ ' + gutil.colors.blue(error.message) + '------------------------------'
					)
			);
			// emit the end event, to properly end the task
			this.emit('end');
	}
}