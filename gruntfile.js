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
          src: ['src/client/js/**/*.js']
        }
      },
      server: {
        files: {
          server: ['src/server/**/*.js']
        }
      },
    },
    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'src/client/',
            src: '**/*.html',
            dest: 'build/'
          }
        ]
      },
      img: {
        files: [
          {
            expand: true,
            cwd: 'src/client/',
            src: 'img/**/*.*',
            dest: 'build/'
          }
        ]
      },
      css: {
        files: [
          {
            expand: true,
            cwd: 'src/client',
            src: 'css/**/*.*',
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
        files: ['src/index.html', 'src/client/views/**'],
        tasks: ['copy:html']
      },
      sass: {
        files: ['src/client/sass/**/*.scss'],
        tasks: ['sass']
      }
    },
      images: {
        files: ['src/client/img/**'],
        tasks: ['copy:img']
      },
      normalize: {
        files: ['src/client/css/**'],
        tasks: ['copy:css']
      },
    sass: {
      styles: {
        files: {
          'build/css/style.css': 'src/client/sass/main.scss'
        }
      }
    },
    concat: {
      js: {
        src: [ 'src/client/js/ifeel.module.js', 'src/client/js/**/*.js' ],
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
