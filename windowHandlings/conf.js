const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  framework: 'jasmine',
  directConnect: true,
  specs: ['learnWH.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 999999
  },
  onPrepare: function () {
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