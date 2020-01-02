
const driver = require('protractor')
describe('Week 2 day 1', () => {
    beforeAll(() => {
        driver.browser.waitForAngularEnabled(false);
        browser.get("http://leafground.com/pages/Button.html")
    })

    it('Get Positions', async () => {
        let loc = await driver.element(driver.by.id('position')).getLocation()
        console.log(loc);
    })
    it('Get Color', async () => {
        let color = await driver.element(by.buttonText('What color am I?')).getCssValue('background-color')
        console.log(color);

    })
    it('Get Size', async () => {
        let size = await driver.element(by.buttonText('What is my size?'))
            .getSize()
        console.log(size);

    })
})