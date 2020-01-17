const driver = require('protractor')
const home_page = require('./homePage.js')
class LoginPage {
    constructor() {
        // driver.browser.getTitle().then((tit) => console.log(tit))
    }
    enterUserName(userName) {
        driver.element(driver.by.id('username')).sendKeys(userName)
        return this;
    }
    enterPassword(password) {
        driver.element(driver.by.id('password')).sendKeys(password)
        return this;
    }
    clickLoginBtn() {
        // driver.element(driver.by.className('decorativeSubmit')).click()
        driver.element(driver.by.buttonText('Login')).click()
        return new home_page.HomePage();
    }
}
// module.exports  = new LoginPage();
exports.LoginPage = LoginPage;