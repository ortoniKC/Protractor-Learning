const driver = require('protractor');

describe('Delete', () => {

    xit('Del', async () => {
        driver.browser.manage().timeouts().implicitlyWait(30000)
        driver.browser.get('http://cafetownsend-angular-rails.herokuapp.com/')
        let lists = await driver.element.all(driver.by.repeater('employee in employees'))
        lists.forEach(ele => {
            console.log(ele.getText());
        })

    })
    it('login page', async () => {
        driver.browser.waitForAngularEnabled(!false)
        driver.browser.manage().timeouts().implicitlyWait(20000)
        browser.manage().window().maximize()
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login')
        element(by.model('user.name')).sendKeys('Luke')
        element(by.model('user.password')).sendKeys('Skywalker')
        element(by.buttonText('Login')).click()
        let ec = driver.browser.ExpectedConditions;
        // var create = element(by.linkText('Create'))
        // create.click()
        // element(by.model('selectedEmployee.firstName')).sendKeys('KoushikTest')
        // element(by.model('selectedEmployee.lastName')).sendKeys('chattest')
        // element(by.model('selectedEmployee.startDate')).sendKeys('2011-01-23')
        // element(by.model('selectedEmployee.email')).sendKeys('ko@test.com')
        // element(by.buttonText('Add')).click()
        // driver.element.all(driver.by.repeater('employee in employees')).map(async (ele, i) => {
        //     console.log(await ele.getText());
        // })
        let items = driver.element.all(driver.by.xpath("//ul[@id='employee-list']//li"))
        let c = await items.count();
        // console.log(await items.get(0).getText());   
        for (let i = 0; i < c; i++) {
            console.log(await items.get(i).getText());
            let it = await items.get(0)
            var isClickable = ec.elementToBeClickable(it);
            browser.wait(isClickable, 5000);
            it.click()
            driver.browser.element(driver.by.id('bDelete')).click()
            browser.wait(ec.alertIsPresent(), 5000)
            driver.browser.switchTo().alert().accept()
        }
    })

})