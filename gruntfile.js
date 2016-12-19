'use strict';

module.exports = function(grunt) {

  grunt.initConfig ({
    sass: {
      styles: {
        files: {
          'build/css/style.css': 'src/sass/main.scss'
        }
      }
    }
  });

grunt.loadNpmTasks('grunt-contrib-sass');
};
