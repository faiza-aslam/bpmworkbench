'use strict';

module.exports = function(grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    livereload: 35729
                }
            }
        },
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: ["styles/*.less", "bower_components/bootstrap/less/*.less", "*.html"],
            tasks: ["less", "cssmin"],
            options:{
                livereload: 35729,
                spawn: false
            }
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                /*options: {
                    // Specifies directories to scan for @import directives when parsing. 
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ['bower_components']
                },*/
                files: {
                    // compilation.css  :  source.less
                    "styles/dist/styles.css": "styles/styles.less"
                }
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'styles/dist',
                    src: ['*.css', '!*.min.css'],
                    dest: 'styles/dist',
                    ext: '.min.css'
                }]
            }
        }
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
};