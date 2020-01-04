const driver = require('protractor')
describe('Frames & Alet', () => {
    it("W3c Schools", () => {
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)
    })
    var name = "koushik"
    it("Click on Try it Btn", () => {
        let frame = driver.element(by.id("iframeResult"))
        driver.browser.switchTo().frame(frame.getWebElement())
        driver.element(driver.by.buttonText("Try it")).click()
        let alert = driver.browser.switchTo().alert()
        alert.sendKeys(name)
        alert.accept()
    })
    it("Validation", () => {
        let ele = driver.element(driver.by.id('demo'))
        expect(ele.getText()).toContain(name);
    })
})