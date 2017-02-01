
//Creates a Selenium client with Webdriverjs
exports.client = require('webdriverjs').remote({
  desiredCapabilities: {
    browserName: 'chrome'
  },
});
