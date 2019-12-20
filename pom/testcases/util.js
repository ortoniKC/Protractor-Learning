const driver = require('protractor')
class SetUp {
    constructor() { }

    async setUp() {
        browser.ignoreSynchronization = true
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(30000)
        await driver.browser.manage().deleteAllCookies()
        browser.get('http://leaftaps.com/opentaps')
    }
    stop() {
        browser.close();
    }
}
exports.SetUp = SetUp;