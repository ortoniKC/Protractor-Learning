const driver = require('protractor')
const vl = require('./viewLeadPage')
class CreateLead{
    enterComName(firstName){
        driver.element(driver.by.id('createLeadForm_companyName')).sendKeys(firstName)
        return this;
    }
    enterFirstName(firstName){
        driver.element(driver.by.id('createLeadForm_firstName')).sendKeys(firstName)
        return this;
    }
    enterLastName(firstName){
        driver.element(driver.by.id('createLeadForm_lastName')).sendKeys(firstName)
        return this;
    }
    clickSubmitBtn(){
        driver.element(driver.by.name('submitButton')).click()
        return new vl.ViewLeadPage();
    }
}
exports.CreateLead = CreateLead;