const driver = require('protractor')
describe('Window Handling', () => {
    it('Windows switching', async () => {
        driver.browser.ignoreSynchronization = true
        driver.browser.get('http://leafground.com/pages/Window.html')
        driver.element(driver.by.id('home')).click()
        let windows = await driver.browser.getAllWindowHandles()
        console.log(windows.length);
        driver.browser.switchTo().window(windows[1])
        driver.element(driver.by.xpath("(//a[@class='wp-categories-link maxheight'])[1]")).click()
        console.log(await driver.browser.getTitle());
        driver.browser.close();
        driver.browser.switchTo().window(windows[0])
        console.log(await driver.browser.getTitle());
    })
})