const driver = require('protractor')
describe('Check for angular', () => {
    it('Login', () => {
        driver.browser.get('https://qa.pr-cor3.arinspect.com/')
        driver.element(driver.by.id('email')).sendKeys('prasanna@yopmail.com')
        driver.element(driver.by.id('password')).sendKeys('Test@123')
        driver.element(driver.by.buttonText('Log In')).click()
    })
})