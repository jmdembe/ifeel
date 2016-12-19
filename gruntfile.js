'use strict';

module.exports = function(grunt) {

  grunt.initConfig ({
    clean: ['build/'],

    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            dest: 'build'
          }
        ]
      }
    },
    watch: {
      html: {
        files: ['src/index.html'],
        tasks: ['copy:html']
      },
      sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass']
      }
    },
    sass: {
      styles: {
        files: {
          'build/css/style.css': 'src/sass/main.scss'
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', [ 'clean', 'copy', 'sass' ]);
};
