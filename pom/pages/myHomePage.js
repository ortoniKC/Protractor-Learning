const driver = require('protractor')
const cl = require('./createLead.js')
class MyHomePage {
    constructor() { 
    //  driver.browser.getTitle().then((tit) => console.log(tit))
    }
    clickLogout(){
        driver.element(driver.by.linkText('Logout')).click()
    }
    clickCreateLead(){
        driver.element(driver.by.linkText('Create Lead')).click()
        return new cl.CreateLead();
    }

}
exports.MyHomePage = MyHomePage;