'use strict';

module.exports = function(grunt) {

  grunt.initConfig ({
    clean: ['build/'],

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: [ 'node_modules/**' ]
      },
      source: {
        files: {
          src: ['src/js/**/*.js']
        }
      },
    },
    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: '**/*.html',
            dest: 'build/'
          }
        ]
      },
      img: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: 'img/**/*.*',
            dest: 'build/'
          }
        ]
      },
      vendorjs: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/angular',
            src: [ 'angular.js' ],
            dest: 'build/js/'
          },
          {
            expand: true,
            cwd: 'node_modules/angular-ui-router/release',
            src: [ 'angular-ui-router.js' ],
            dest: 'build/js/'
          }
        ]
      },
    },
    watch: {
      html: {
        files: ['src/index.html', 'src/views/**'],
        tasks: ['copy:html']
      },
      sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass']
      }
    },
    images: {
        files: ['src/img/**'],
        tasks: ['copy:img']
     },
    sass: {
      styles: {
        files: {
          'build/css/style.css': 'src/sass/main.scss'
        }
      }
    },
    concat: {
      js: {
        src: [ 'src/js/ifeel.module.js', 'src/js/**/*.js' ],
        dest: 'build/js/app.js'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', [ 'clean', 'jshint', 'copy', 'concat', 'sass' ]);
};
