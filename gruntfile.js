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
          src: ['src/server/**/*.js']
        }
      },
      test: {
        files: {
          src: ['test/specs/**/*.js']
        }
      }
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
            src: ['angular-ui-router.js'],
            dest: 'build/js/'
          },
          {
            expand: true,
            cwd: 'node_modules/angular-chart.js/dist',
            src: ['angular-chart.js'],
            dest: 'build/js'
          },
          {
            expand: true,
            cwd: 'node_modules/chart.js/dist',
            src: ['Chart.js'],
            dest: 'build/js'
          }
        ]
      },
    },
    watch: {
      html: {
        files: ['src/client/index.html', 'src/client/views/**'],
        tasks: ['copy:html']
      },
      sass: {
        files: ['src/client/sass/**/*.scss'],
        tasks: ['sass']
      },
      images: {
        files: ['src/client/img/**'],
        tasks: ['copy:img']
      },
      normalize: {
        files: ['src/client/css/**'],
        tasks: ['copy:css']
      },
      js: {
        files: ['src/client/js/**/*.js'],
        tasks: ['jshint', 'concat']
      }

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
    karma: {
      options: {
        frameworks: ['mocha', 'chai'],
        client: {
          mocha: {
            ui: 'bdd'
          }
        },
        browsers:['PhantomJS'],
        singleRun: true,
        preprocessors: {
          'src/client/js/**/*.js': ['coverage']
        },
        reporters: ['dots', 'coverage'],
        coverageReporter: {
          type: 'text-summary'
        }
      },
      iFeel: {
        options: {
          files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/chart.js/dist/Chart.js',
            'node_modules/angular-chart.js/dist/angular-chart.js',
            'src/client/js/ifeel.module.js',
            'src/client/js/login.service.js',
            'test/specs/login.service.spec.js',
            'src/client/js/mood.service.js',
            'test/specs/mood.service.spec.js',
            'src/client/js/mood.controller.js',
            'test/specs/mood.controller.spec.js'
          ]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-karma');



  grunt.registerTask('default', [ 'clean', 'jshint', 'copy', 'concat', 'sass' ]);
  grunt.registerTask('test', [ 'karma']);
};
