import { browser, element, by } from "protractor"

describe('Test', () => {

    it('test', async () => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.google.com/')
        let caps = await browser.getCapabilities()
        console.log(Object.keys(caps));
        console.log(Object.values(caps));
        console.log(typeof caps);
    })
    it('Continue from where ypu left', () => {
        // browser.ca
        element(by.name('q')).sendKeys('Kouhsik Chatterjee')
        element(by.name('btnK')).click()
    })
})