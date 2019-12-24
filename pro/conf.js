exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['julimer.js'],
    capabilities: {
        'browserName': 'chrome',
        'args': '--headless'
    }
}