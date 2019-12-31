const driver = require('protractor')

describe('Window Handling', () => {
    it('load url', async () => {
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/radio.html")
        driver.element(driver.by.id('yes')).click()
    })
})
describe('Window Handling', () => {
    it('load url', async () => {
        // driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://juliemr.github.io/protractor-demo/")
        let options = driver.element.all(driver.by.options('value for (key, value) in operators'));
        console.log();
        await selectByText(options, "%")
        browser.sleep(1000)
        await selectByText(options, "+")
        browser.sleep(1000)

    })
})

async function selectByText(options, expected) {
    for (let i = 0; i < await options.count(); i++) {
        let text = await options.get(i).getText()
        console.log(text);
        if (text === expected) {
            options.get(i).click()
            break;
        }
    }
}
describe('first test', function () {
    browser.ignoreSynchronization = true;
    it('Trying to learn protractor', function () {
        browser.manage().window().maximize();
        browser.get("https://angular.io/");
        browser.getTitle().then(function (title) {
            console.log('title is: ' + title);
        });
        var wi = element(by.linkText('GET STARTED'));
        //Actions
        browser.sleep(1000)
        driver.browser.actions().sendKeys(wi, protractor.Key.CONTROL)
            .click(wi).perform();

        browser.getAllWindowHandles().then(function (win) {
            console.log(win);
            browser.switchTo().window(win[1]);
            browser.getTitle().then(function (title) {
                console.log('title is: ' + title);
            });
            browser.switchTo().window(win[0]);
            browser.getTitle().then(function (title) {
                console.log('title is: ' + title)

            });
        });
        browser.quit();
    });
});
