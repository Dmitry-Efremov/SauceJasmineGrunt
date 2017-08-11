module.exports = function (grunt) {

  var browsers = [{
  
    browserName: 'firefox',
    platform: 'WIN7'
  },
  {
    browserName: 'googlechrome',
    platform: 'WIN7'
  }];

  grunt.initConfig({
  
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },

    'saucelabs-jasmine': {

      all: {
        options: {

          // username: 'saucelabs-user-name', // if not provided it'll default to ENV SAUCE_USERNAME (if applicable)
          // key: 'saucelabs-key', // if not provided it'll default to ENV SAUCE_ACCESS_KEY (if applicable)

          urls: [
            'http://127.0.0.1:9999/SpecRunner.html',
            'http://127.0.0.1:9999/SpecRunnerDos.html'
          ],
          browsers: browsers,
          build: "0.1",
          testname: 'jasmine tests',
          throttled: 3,
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },
    watch: {}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('default', ['connect', 'saucelabs-jasmine']);
};