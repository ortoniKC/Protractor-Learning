const driver = require('protractor')
describe('Learn Reduce', () => {
    beforeAll(() => { driver.browser.waitForAngularEnabled(false) })
    it('Reduce', async () => {
        driver.browser.get('https://jqueryui.com/selectable/')
        driver.browser.switchTo().frame(0)
        let items = driver.element(driver.by.id('selectable')).$$('li')
        console.log('count = ' + await items.count());
        // using async and await 
        let values = items.reduce(async (acc, ele) => {
            return acc + await ele.getText() + ', '
        }, '')
        // Using then function
        // let values = lists.reduce(function (acc, elem) {
        //     return elem.getText().then(function (text) {
        //         return acc + text + ' ';
        //     });
        // }, '');
        console.log(await values);

    })
})