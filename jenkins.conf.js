//Load environment data
var environmentData = require("./data/environment.data.json");

// Load ts-node to be able to execute TypeScript files with protractor.
require('ts-node').register({
  lazy: true
});
var Reporter = require('./utility/reporter').Reporter;
var ImageComparison = require('./utility/image-comparison').ImageComparison;
var path = require("path");
var moment = require('moment');
var basedReportFolder = `${path.join(process.cwd(), `/${environmentData["report"].folder}`)}`;
var basedImageComparisonFolder = `${path.join(process.cwd(), `/${environmentData["imageComparison"].folder}`)}`;

var init = function (config) {
  config.baseUrl = environmentData["login"].url;
  var serverName = config.baseUrl.split('/').pop().split('.')[0];
  //pass json file name to cucumber
  config.cucumberOpts.format = `json:${basedReportFolder}/json/${serverName}.json`;
  //set parameters
  environmentData["report"] = {"basedReportFolder": basedReportFolder };
  environmentData["imageComparison"] = {"basedImageComparisonFolder": basedImageComparisonFolder };
  config.params = environmentData;
  return config;
}

exports.config = (function () {
  return init({
    ignoreUncaughtExceptions: true,
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    disableChecks: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome',
      acceptInsecureCerts: true,
      chromeOptions: {
        args: [
          '--headless',
          '--disable-infobars',
          '--window-size=1920,1080'
        ],
        prefs: {
          'profile.password_manager_enabled': false,
          'credentials_enable_service': false,
          'password_manager_enabled': false
        }
      },
    },
    SELENIUM_PROMISE_MANAGER: false,
    specs: [
      './features/*.feature'
    ],
    cucumberOpts: {
      strict: true,
      require: ["stepDefinitions/*.ts"],
      tags: ['~@skip']
    },

    onPrepare: function () {
      browser.ignoreSynchronization = true;
      browser.get('/index.php');
      browser.manage().window().maximize();
      Reporter.createDirectory();
      ImageComparison.createDirectory();
    },

    onComplete: function () {
      Reporter.createHTMLReport();
    }
  });
})();
