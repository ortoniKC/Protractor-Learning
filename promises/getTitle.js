const driver = require('protractor')
describe('Promises', ()=>{
    it('Get Title', async ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('https://www.google.com/')

       // What if promise is not handled
        let title = await driver.browser.getTitle()
        console.log(`Title : ${title}`);
        console.log(await driver.element(driver.by.xpath("(//input[@value='Google Search'])[2]")).isEnabled());
        
    })
})
