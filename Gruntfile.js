'use strict';

module.exports = function(grunt) {

	// load all grunt tasks.
	require('load-grunt-tasks')(grunt);
	
	grunt.registerTask('default', 'build');
	
	grunt.registerTask('build', 'Transpile ES6, concat js files, compile less.', [
		// 'babel',
		'concat',
		'less'
	]);

	grunt.initConfig({
	    babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.js'],
                    dest: 'dist/src',
                    ext:'.js'
                }]
            }
        },
		concat: {
			js: {
				src: [
					'src/js/**/*.js',
					'index.js'
				],
				dest: 'dist/app.js'
			}
		},
		jshint: {
			files: ['!dist/**/*.js', 'index.js', 'src/js/**/*.js'],
			options: {
		        // jshintrc: '.jshintrc',
		        ignores: [],
		        additionalSuffixes: ['.js']
		    },	
		},
		less: {
			files: {
				src: [ 'src/less/**/*.less' ],
				dest: 'dist/styles.css',
				ext: '.css'
			}
		},
		watch: {
		  scripts: {
		    files: ['!dist/**/*', 'src/**/*.js', 'src/**/*.less'],
		    tasks: ['build']
		  },
		}
	});
};