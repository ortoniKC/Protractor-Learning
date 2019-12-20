exports.config = {
    framework: 'jasmine',
    diretConnect: true,
    specs: ['./testcases/tc001.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 999999
    },
    params: {
		baseUrl:'http://leaftaps.com/opentaps/control/logout'
	},
    // capabilities: {
    //     'browserName': 'chrome',
    //     'shardTestFiles': true,
    //     maxInstances: 2,
    // }
}