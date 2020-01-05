import { browser, element, by } from "protractor"

describe('Shadow', () => {
    it('TEst', () => {
        browser.waitForAngularEnabled(false)
        browser.get('https://bugs.chromium.org/p/chromium/issues/list')
        element(by.deepCss('#searchq')).sendKeys('HI')
        // browser.executeScript('document.querySelector("body > div:nth-child(2) > mr-header").shadowRoot.querySelector("mr-search-bar").shadowRoot.querySelector("#searchq").value = "hi"')
        browser.sleep(3000)
    })
})