module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js']
    },
    connect: {
         server: {
          options: {
            port: 9001,
            keepalive: true,
            base: {
              path: '.',
              options: {
                index: 'src/client/index.html',
                maxAge: 300000
              }
            }
          },
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s)
  grunt.registerTask('default', ['connect']);
};
