const driver = require('protractor')

describe('Learn pro', () => {
    it('add 2 numbers and print result', async () => {
        driver.browser.get('http://juliemr.github.io/protractor-demo/')
        driver.element(driver.by.model('first')).sendKeys('10')
        driver.element(driver.by.cssContainingText('option', '-')).click()
        driver.element(driver.by.model('second')).sendKeys('10')
        driver.element(driver.by.buttonText('Go!')).click()
        try {
            let txt = await driver.element(driver.by.className('ng-binding')).getText()
            console.log(txt)
        } catch (error) {
            console.log(error)
        }
        expect(element(by.className('ng-binding')).getText()).not.toBe('30')

    })
})