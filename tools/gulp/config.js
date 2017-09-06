// gulp/config.js
'use strict';

var gutil = require('gulp-util');

const fromRoot = require('../utils/from-root.js');

const nodeModulesPath = fromRoot('node_modules/');
const bowerPath = fromRoot('bower_components/');
const buildPath = fromRoot('build/');
const distPath = fromRoot('dist/');
const scssPath = fromRoot('src/scss/');
const imgPath = fromRoot('src/img/');
const htmlPath = fromRoot('src/pages/');
const fontsPath = fromRoot('src/fonts/');
const jsPath = fromRoot('src/js/');

module.exports = {
	path: {
		build: buildPath,
		dist: distPath,
		scss: scssPath,
		img: imgPath,
		html: htmlPath,
		fonts: fontsPath,
		js: jsPath,
		nodeModules: nodeModulesPath
	},
	vendors: {
		jsLibs: [
			nodeModulesPath + 'jquery/dist/jquery.min.js'
		],
		cssLibs: [
		]
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
		src_folder: htmlPath,
		src: htmlPath + '/**/*.html',
		build: buildPath,
		inject: {
			css: '../../build/css/*.css',
			options: {
					relative: true,
					name: 'build',
					starttag: '<!-- build:css -->',
					endtag: '<!-- endbuild -->',
					removeTags: true
					// more options : https://github.com/klei/gulp-inject#api
			}
		}
	},
	bower: {
		src: bowerPath,
		src_json: fromRoot('bower.json'),
		build: buildPath + 'lib'
	},
	js: {
		src: jsPath + '/**/*.js',
		build: buildPath + 'js/'
	},
	fonts: {
		fontawesome: {
			src: fromRoot('node_modules/') + 'font-awesome-scss/fonts/**/*.*',
			build: buildPath + 'fonts/'
		}
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