let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
    framework: 'jasmine',
    diretConnect: true,
    specs: ['./testcases/tc001.js', './testcases/tc002.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 999999
    },
    params: {
        baseUrl: 'http://leaftaps.com/opentaps/control/logout',
        userName: 'DemoSalesManager',
        password: 'crmsfa'

    },
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        maxInstances: 2,
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