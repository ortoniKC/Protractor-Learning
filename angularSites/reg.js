"use srict"

describe('registeration', () => {
    it('Login', async () => {
        await newReg();
        bank();
    })
})
function bank() {
    browser.manage().timeouts().implicitlyWait(20)
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    element(by.buttonText('Customer Login')).click()
    element(by.cssContainingText('option', 'Albus Dumbledore')).click()
    clickOnBtn('Login');
    clickOnBtn('Deposit');
    element(by.model('amount')).sendKeys('1000')
    element(by.xpath("//button[@class='btn btn-default']")).click()
    let message = element(by.binding('message'));
    message.getText().then(function (a) {
        console.log(a)
    })
    expect(message.getText()).toBe('Deposit Successful');
    element(by.buttonText('Logout')).click()
}

function clickOnBtn(btnText) {
    element(by.buttonText(btnText)).click();
}

async function newReg() {
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login')
    let user = element(by.model('Auth.user.name'))
    let pass = element(by.model('Auth.user.password'))
    let desc = element(by.model('model[options.key]'))
    let loginBtn = element(by.buttonText('Login'))
    user.sendKeys('angular')
    pass.sendKeys('password')
    desc.sendKeys('Testing', protractor.Key.ENTER)
    console.log(await browser.getTitle())
    let home = element(by.tagName('h1'))
    home.getText().then((txt) => {
        console.log(txt)
    })
    expect(home.getText()).not.toBe('home1')
    element(by.linkText('Logout')).click()
    console.log(await browser.getTitle())
}
