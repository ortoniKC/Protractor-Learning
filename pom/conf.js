exports.config = {
    framework: 'jasmine',
    diretConnect: true,
    specs: ['./testcases/tc001.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 999999
    },
    // capabilities: {
    //     'browserName': 'chrome',
    //     'shardTestFiles': true,
    //     maxInstances: 2,
    // }
}