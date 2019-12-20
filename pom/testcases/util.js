const driver = require('protractor')
class SetUp {
    constructor() { }

    async setUp() {
        browser.ignoreSynchronization = true
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(30000)
        await driver.browser.manage().deleteAllCookies()
        browser.get(browser.params.baseUrl)
    }
    stop() {
        browser.close();
    }
}
exports.SetUp = SetUp;