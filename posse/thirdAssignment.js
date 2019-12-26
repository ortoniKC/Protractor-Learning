const driver = require('protractor')
var name = "";
var skip = true;
describe('Posse', () => {
    it('Launch Posse', () => {
        driver.browser.get('http://posse.com/')
        driver.browser.manage().window().maximize()
    })
    it(' click on LOG IN', () => {
        driver.element(driver.by.linkText('LOG IN')).click()
    })
    it('Sign in', () => {
        driver.element(driver.by.model('email')).sendKeys('koushik.chatterjee@testleaf.com')
        driver.element(driver.by.model('password')).sendKeys('test@123')
        driver.element(driver.by.buttonText('Sign in')).click()
    })
    it('Mouse hover on 1st Suggested place', async () => {
        let ele = driver.browser.element(driver.by.css('li >div'))
        driver.browser.actions().mouseMove(ele).perform()
    })
    it('Store the text of 1st Suggested place', async () => {
        name = await driver.element(driver.by.binding('placeCard.place.name')).getText()
    })
    // let ec = driver.browser.ExpectedConditions;

    it('Click on Wishlist if is not wishlisted', async () => {
        var expectedColor = 'rgba(51, 51, 51, 1)'
        let firstElement = driver.element(driver.by.xpath("//span[.='Wishlist']"))
        // let firstElement = driver.browser.element.all(driver.by
        //     .xpath("//span[@ng-bind='placeCard.place.name']/following::span[@class='userActionButtonText']")).get(1);
        let color = await firstElement.getCssValue('color')
        console.log("COLOR: " + color);
        if (color == expectedColor) {
            skip = false
            firstElement.click();
        } else skip = true;
        if (skip == false) {
            driver.element(driver.by.css("a[class*='userLoggedIn']")).click()
            driver.element(driver.by.linkText('Wishlist')).click()
            let wishedName = await driver.browser.element(driver.by.binding('placeCard.place.name')).getText()
            expect(name).toBe(wishedName)
            let colo = await driver.element(driver.by.xpath("(//span[@class='userActionButtonText'])[2]")).getCssValue('color')
            console.log(colo);
            expect(driver.browser.element(driver.by.binding('placeCard.placeMetadata.popularityCount')).getText()).toEqual('9')
            // it('Click on Wishlist (in My Profile)', () => {
            // })
            // it('Validate that Stored text is available in the Wishlist', async () => {
            // })

            // it('Also make sure that wishlist text is in blue color', async () => {
            // })
            // it('Print the no.of likes it has(text with in star)', async () => {
            // })
        }
    })

})
