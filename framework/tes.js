// import { browser, element, by } from "protractor"

describe('some', () => {
    it('ss', () => {
        browser.waitForAngularEnabled(false)
        browser.get('https://examain.viztek.net/KMHA/login')
        element(by.id('chkHipaaPrivacy')).click()
        browser.sleep(5000)
        
    })
})