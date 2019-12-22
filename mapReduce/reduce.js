const driver = require('protractor')
describe('Learn Reduce', () => {

    beforeAll(() => { driver.browser.waitForAngularEnabled(false) })
    it('Reduce', async () => {
        driver.browser.get('https://jqueryui.com/selectable/')
        driver.browser.switchTo().frame(0)
        let lists = driver.element(driver.by.id('selectable')).$$('li')
        console.log('count = ' + await lists.count());

        let values = lists.reduce(async (acc, ele) => {
            return acc + await ele.getText() + ', '
        }, 'init value')
        // // console.log('expecting text');
        let values = lists.reduce(function (acc, elem) {
            return elem.getText().then(function (text) {
                return acc + text + ' ';
            });
        }, '');
        console.log(await values);

    })
})