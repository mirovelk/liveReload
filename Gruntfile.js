module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jade');



    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dev: {
                options: {
                    require: ['susy', 'breakpoint'],
                    config: 'config.rb',
                },
            },
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false,
                    }
                },
                files: {
                    "build/index.html": ["src/index.jade"],
                },
            },
        },
        watch: {
            html: {
                files: ['src/**/*.jade'],
                tasks: ['jade'],
            },
            sass: {
                files: ['src/sass/**/*.sass'],
                tasks: ['compass'],
            },
            live: {
                files: ['build/index.html', 'build/css/**/*.css'],
                options: {
                    livereload: true
                }
            }
        },
    });


    // Default task(s).
    grunt.registerTask('default', ['watch']);

};
