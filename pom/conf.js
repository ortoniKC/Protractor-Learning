let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
  framework: 'jasmine',
  diretConnect: true,
  specs: ['./testcases/tc001.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 999999
  },
  params: {
    baseUrl: 'http://leaftaps.com/opentaps/control/logout'
  },
  onPrepare: function () {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'tmp/screenshots'
    }).getJasmine2Reporter());
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  }
}