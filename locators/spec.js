// import { browser, By, element } from "protractor"
// import { protractor } from "protractor/built/ptor";
const driver = require('protractor')
describe('Launch Browser', () => {
    it('first test', async () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(30)
        // To run in non-angular page
        browser.ignoreSynchronization = true;
        browser.sleep(3000)

    })
})