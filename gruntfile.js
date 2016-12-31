module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true
        },
        files: {
          'dist/index.html': 'index.html',   //'destination': 'source'
          'dist/pizza.html': 'pizza.html',
          'dist/project-2048.html': 'project-2048.html',
          'dist/project-mobile.html': 'project-mobile.html',
          'dist/project-webperf.html': 'project-webperf.html'
        }
      }
    },
    uglify: {
      options: {
        manage: false
      },
      my_target: {
        files:  {
          'dist/js/perfmatters.js': ['js/perfmatters.js'],
          'dist/js/main.js': ['js/main.js'],
        }
      }
    },
  });

  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlmin', 'uglify']);
};
