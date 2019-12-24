// import browser from 'protractor'
// const = require('protractor')
describe('Learn Frames', () => {

    it("Frame", async () => {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(30000)
        browser.get('http://leafground.com/pages/frame.html')
        browser.switchTo().frame(0)
        let btn = element(by.id('Click'));
        let txt = await btn.getText()
        console.log(txt);
        btn.click()
        let txt1 = await btn.getText()
        console.log(txt1);
        expect(txt).not.toBe(txt1)
        browser.switchTo().defaultContent()
        let h1 = await browser.element(by.tagName('h1')).getText()
        console.log(h1);
    })

})