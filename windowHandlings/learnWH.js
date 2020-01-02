const driver = require('protractor')
describe('Window Handling', () => {


    
    var windows;
    it('load url', async () => {
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('http://leafground.com/pages/Window.html')
    })
    it('Click on home', async () => {
        driver.element(driver.by.id('home')).click()
        windows = await driver.browser.getAllWindowHandles()
        console.log(windows);
        console.log(windows.length);
    })
    it('switch to new window', async () => {
        driver.browser.switchTo().window(windows[1])
        driver.element(driver.by.xpath("(//a[@class='wp-categories-link maxheight'])[1]")).click()
        console.log(await driver.browser.getTitle());
    })
    it('close window', async () => {
        driver.browser.close();
        driver.browser.switchTo().window(windows[0])
        console.log(await driver.browser.getTitle());

    })
})