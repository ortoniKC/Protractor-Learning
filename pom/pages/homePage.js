const driver = require('protractor')
const myHome = require('./myHomePage.js')
class HomePage {
    constructor() { 
        // driver.browser.getTitle().then((tit) => console.log(tit))
       }

    clickCRMSFA(){
        driver.element(driver.by.linkText('CRM/SFA')).click();
        return new myHome.MyHomePage();

    }
    verifyLoggedInName(user){
        let userName =  driver.element(driver.by.tagName('h2'))
        expect(userName.getText()).toContain(user);
        return this;
    }
}
exports.HomePage = HomePage;