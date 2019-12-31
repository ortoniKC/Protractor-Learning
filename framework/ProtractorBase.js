// import { browser, By, by, element } from 'protractor'
class BaseLib {

    type(ele, text) {
        element(ele).sendKeys(text)
    }
    clearAndtype(ele, text) {
        let e = element(ele);
        e.clear()
        e.sendKeys(text)
    }
    acceptAlert() {
        browser.switchTo().alert().accept()
    }
    dismissAlert() {
        browser.switchTo().alert().dismiss()
    }
    typeInAlert(text) {
        let alert = browser.switchTo().alert();
        alert.sendKeys(text)
        alert.accept()
    }
    switchToFrame(indexOrName) {
        browser.switchTo().frame(indexOrName)
    }
    switchToFrame(ele) {
        let el = element(ele)
        browser.switchTo().frame(el)
    }
    async getElementText(ele) {
        return await element(ele).getText()
    }

}
exports.BaseLib = BaseLib