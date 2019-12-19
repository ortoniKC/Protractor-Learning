exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['spec.js'],
    // multiCapabilities: [
    //     {
    //         'browserName': 'chrome',
    //     }, {
    //         'browserName': 'firefox',
    //     }
    // ],
    'shardTestFiles': true,
    maxInstances: 2,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 999999
    },
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        maxInstances: 2,

    }
}