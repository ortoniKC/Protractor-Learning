let SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var HtmlReporter = require("protractor-beautiful-reporter");

require("babel-register")({
  presets: ["es2015"]
});

exports.config = {
  framework: "jasmine",
  diretConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ["conf.js"],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 999999
  },
  params: {
    baseUrl: "http://leaftaps.com/opentaps/control/logout",
    userName: "DemoSalesManager",
    password: "crmsfa"
  },
  capabilities: {
    browserName: "chrome",
    shardTestFiles: !true
    // maxInstances: 2,
    // 'operaOptions': {
    //     'binary': 'C:\\Users\\dell\\AppData\\Local\\Programs\\Opera\\launcher.exe'
    //     // 'args': {
    //     //     'useAutomationExtension': false
    //     // }
    // }
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
