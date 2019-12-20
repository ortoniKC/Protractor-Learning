const driver = require('protractor')
describe('Learn Frames', () => {
    it("Frame", async () => {
        driver.browser.ignoreSynchronization = true;
        driver.browser.manage().timeouts().implicitlyWait(30000)
        driver.browser.get('http://leafground.com/pages/frame.html')
        driver.browser.switchTo().frame(0)
        let btn = driver.element(driver.by.id('Click'));
        let txt = await btn.getText()
        console.log(txt);
        btn.click()
        let txt1 = await btn.getText()
        console.log(txt1);
        expect(txt).not.toBe(txt1)
        driver.browser.switchTo().defaultContent()
        let h1 = await driver.browser.element(driver.by.tagName('h1')).getText()
        console.log(h1);
    })

})