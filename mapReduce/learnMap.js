const driver = require('protractor')

describe('Map', () => {
    beforeAll(() => { driver.browser.waitForAngularEnabled(false) })
    it('Learn Map', async () => {
        driver.browser.get('https://jqueryui.com/selectable/')
        driver.browser.switchTo().frame(0)
        let items = driver.element(driver.by.id('selectable')).$$('li')
        let mapItems = items.map(async (ele, index) => {
            return {
                index: index,
                text: await ele.getText()
            }
        })
        console.log(await mapItems);
        (await mapItems).forEach(ele => {
            console.log(ele.text);
        })
    })
})