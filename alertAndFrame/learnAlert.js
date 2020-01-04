// import { element } from "protractor"

import { browser, element, by } from "protractor"

describe('Auth', () => {
    it('Protractor Auth', async () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://the-internet.herokuapp.com/digest_auth')
        // element(by.linkText('Digest Authentication')).click()
        let ec = browser.ExpectedConditions
        // browser.wait(ec.alertIsPresent(), 5000)
        browser.switchTo().alert().authenticateAs('admin', 'admin');
        console.log(await browser.getTitle());

    })
})



xdescribe('Learn Alert', () => {
    beforeAll(() => {
        console.log('how many ?');
        browser.ignoreSynchronization = true
    })
    beforeEach(() => {
        console.log('where am I?');
        browser.get('http://leafground.com/pages/Alert.html')
        browser.manage().timeouts().implicitlyWait(20)
    })
    xit('Handle Simple alert', () => {
        simpleAlert()
    })
    it('Confirmations alert', () => {
        confirmationAlert()
    })
    it('Prompt alert', () => {
        promptAlert()
    })

})
async function promptAlert() {
    element(by.xpath("//button[text()='Prompt Box']")).click()
    let alert = browser.switchTo().alert()
    alert.sendKeys('Kouhsik')
    let alertText = await alert.getText()
    console.log(alertText)
    alert.accept()

}
function confirmationAlert() {
    element(by.xpath("//button[text()='Confirm Box']")).click()
    let alert = browser.switchTo().alert()
    alert.getText().then((at) => {
        console.log(at)
    })
    alert.accept()
    expect(element(by.id('result')).getText()).toBe('You pressed OK!')
    element(by.xpath("//button[text()='Confirm Box']")).click()
    alert.dismiss()
    expect(element(by.id('result')).getText()).toBe('You pressed Cancel!')
}


function simpleAlert() {
    // browser.get('http://leafground.com/pages/Alert.html')
    element(by.xpath("//button[text()='Alert Box']")).click()
    let alert = browser.switchTo().alert()
    alert.getText().then((at) => {
        console.log(at)
    })
    alert.accept()
}
