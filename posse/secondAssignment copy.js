const driver = require('protractor')
describe('Posse', () => {
    it('Launch Posse', () => {
        driver.browser.get('http://posse.com/')
    })
    it(' click on LOG IN', () => {
        driver.element(driver.by.linkText('LOG IN')).click()
    })
    it('Sign in', () => {
        driver.element(driver.by.model('email')).sendKeys('koushik.chatterjee@testleaf.com')
        driver.element(driver.by.model('password')).sendKeys('test@123')
        driver.element(driver.by.buttonText('Sign in')).click()
    })
    it('CLick on Profile', () => {
        driver.element(driver.by.css("a[class*='userLoggedIn']")).click()
    })
    it('Click on My Profile', async () => {
        driver.element(driver.by.linkText('My Profile')).click()
        console.log(await driver.browser.getTitle())
    })
    it('navigate to http://posse.com', () => {
        driver.browser.navigate().to('http://posse.com')

    })
    it('Count the no.of shown Suggested Places', async () => {
        let c = await driver.browser.element.all(driver.by.binding('placeCard.place.name')).count()
        console.log(`Count of suggested placce is ${c}`);
    })
    it('Print all the Suggested Places', () => {
        let sp = driver.browser.element.all(driver.by.binding('placeCard.place.name'))
        sp.each(async (ele, index) => {
            console.log(await ele.getText());
        })

    })
})