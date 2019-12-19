const driver = require('protractor')
const home_page = require('./homePage.js')
class LoginPage {
    constructor() {
        // driver.browser.getTitle().then((tit) => console.log(tit))
    }
    enterUserName(userName) {
        driver.element(driver.by.id('username')).sendKeys(userName)
    }
    enterPassword(password) {
        driver.element(driver.by.id('password')).sendKeys(password)
    }
    clickLoginBtn() {
        driver.element(driver.by.className('decorativeSubmit')).click()
        return new home_page.HomePage();
    }
}
exports.LoginPage = LoginPage;