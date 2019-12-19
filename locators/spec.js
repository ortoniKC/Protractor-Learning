// import { browser, By, element } from "protractor"
// import { protractor } from "protractor/built/ptor";
const driver = require('protractor')
describe('Launch Browser', () => {
    it('first test', async () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(30)
        // To run in non-angular page
        browser.ignoreSynchronization = true;
        browser.get('https://dev77004.service-now.com/')
        console.log(await browser.getTitle());
        // browser.refresh()
        driver.browser.switchTo().frame('gsft_main');
        // browser.sleep(10000)
        driver.element(driver.By.id('user_name')).sendKeys('admin')
        driver.element(driver.By.id('user_password')).sendKeys('Leaf@123')
        driver.element(driver.By.id('sysverb_login')).click()
        browser.sleep(5000)
        browser.ignoreSynchronization = !false
        console.log(await browser.getTitle());
        element(by.id('filter')).sendKeys('incident')
        // element(by.xpath("(//div[text()='Create New'])[1]")).click()
        let ec = protractor.ExpectedConditions;
        ec.visibilityOf(element(by.xpath("(//div[text()='Create New'])[1]")),10000)
        element(by.xpath("(//div[text()='Create New'])[1]")).click();

        ec.visibilityOf(element(by.id('incident.short_description')), 10000)
        element(by.id('incident.short_description')).click()


        // expect(browser.getTitle()).toContain('Leaftaps');
        // element(By.id('username')).sendKeys('Demosalesmanager')
        // element(By.id('password')).sendKeys('crmsfa')
        // element(By.className('decorativeSubmit')).click()
        // element(By.linkText('CRM/SFA')).click();
        // element(By.linkText('Create Lead')).click();
        // element(By.id('createLeadForm_companyName')).sendKeys('TestLeaf')
        // element(By.id('createLeadForm_firstName')).sendKeys('Koushik')
        // element(By.id('createLeadForm_lastName')).sendKeys('Chattterjee')
        // element(driver.By.cssContainingText('option', 'Employee')).click();
        browser.sleep(3000)

    })
})

// element(By.model('first')).sendKeys('2')
// // browser.sleep(2000)
// element(By.model('second')).sendKeys('4')
// // browser.sleep(2000)
// element(By.buttonText('Go!')).click();
// // expect

// element(By.className('ng-binding')).getText().then( (txt) => {
//     console.log(txt);
// })