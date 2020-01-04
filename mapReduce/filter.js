const driver = require('protractor')
import { protractor, element, by } from 'protractor'
describe('Learn FILTER', () => {
    beforeAll(() => { driver.browser.waitForAngularEnabled(false) })
    it('filter', async () => {
        driver.browser.get('https://jqueryui.com/selectable/')
        driver.browser.switchTo().frame(0)
        let items = driver.element(driver.by.id('selectable')).$$('li')
        items.filter(async (ele, index) => {
            console.log(await ele.getText());
            if (await ele.getText() === "Item 4") {
                return ele;
            }
        }).first().click()
    })
})


describe('WEbTable', () => {
    it('Erail', async () => {
        browser.waitForAngularEnabled(false)
        driver.browser.manage().timeouts().implicitlyWait(30000)
        browser.get("https://erail.in/trains-between-stations/ksr-bengaluru-SBC/mgr-chennai-central-suburban-MASS")
        element(by.id('chkSelectDateOnly')).click()
        let table = element(by.css("#divTrainsList > table.DataTable.TrainList.TrainListHeader"))
        let rows = table.all(by.tagName('tr'))
        let rowCount = await rows.count()
        console.log('Rows: ' + rowCount);
        for (let j = 0; j < rowCount; j++) {
            console.log("i value: " + j);
            let cols = rows.get(j).all(by.tagName('td'))
            let text = await cols.get(1).getText();
            console.log(text)
        }
    })
})