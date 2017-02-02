
//Creates a Selenium client with Webdriverjs
// To use chrome, change browserName: 'chrome' to use phantom use 'phantomjs'
exports.client = require('webdriverjs').remote({
  desiredCapabilities: {
    browserName: 'chrome'
  },
});
