const driver = require('protractor')
describe('Check for angular', () => {
    it('Login', () => {
        driver.browser.get('https://qa.pr-cor3.arinspect.com/')
        driver.element(driver.by.id('email')).sendKeys('')
        driver.element(driver.by.id('password')).sendKeys('')
        driver.element(driver.by.buttonText('Log In')).click()
    })
})