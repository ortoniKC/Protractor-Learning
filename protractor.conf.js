let SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var HtmlReporter = require("protractor-beautiful-reporter");

require("babel-register")({
  presets: ["es2015"]
});

exports.config = {
  framework: "jasmine",
  diretConnect: true,
  specs: ["conf.js"],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000
  },
  capabilities: {
    "count": 1,
    "browserName": "chrome",
    "goog:chromeOptions": [
      {
        "debuggerAddress": 'localhost:53721'
      }
    ]

  },
  onPrepare: () => {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: "tmp/screenshots"
      }).getJasmine2Reporter()
    );
    jasmine.getEnv().addReporter(
      new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      })
    );
  }
};
