const driver = require('protractor')
class MyHomePage {
    constructor() { 
    //  driver.browser.getTitle().then((tit) => console.log(tit))
    }
    clickLogout(){
        driver.element(driver.by.linkText('Logout')).click()
    }
}
exports.MyHomePage = MyHomePage;