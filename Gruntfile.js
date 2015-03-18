module.exports = function( grunt ) {

	require('load-grunt-tasks')(grunt);

	var appConfig = {
		app: require('./bower.json').appPath || 'app',
		dist: 'dist'
	};

	grunt.initConfig({
        /**
         * Compass
         * ----------------------------------------------------------------
         */
		compass: {
			dist: {
				options: {
					config: 'compass-config.rb'
				}
			}
		},
		watch: {
			files: [
				'app/**/*.js'
				,'app/**/*.scss'
				,'app/**/*.html'
                ,'Gruntfile.js'
			]
			,tasks: [
				'compass',
				'cssmin'
			]
		},
		cssmin: {
		  target: {
		    files: {
		      'app/css/main.min.css': ['app/css/main.css']
		    }
		  }
		},
		serve: {
	        options: {
	            port: 9000
	        }
	    }
	} );

	/**
	 * CUSTOM TASKS
	 * ----------------------------------------------------------------
	 */
	grunt.registerTask('default', function() {
		grunt.task.run([
			"serve",
            "watch"
		]);

	});
	grunt.loadNpmTasks('grunt-serve');
};
