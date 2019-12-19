const driver = require('protractor')
describe('Learn Actions', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(20)
    })
    xit('Drag & Drop', () => {
        dragAndDrop()
    })
    xit('drag nad drop by', () => {
        dragAndDropBy()
    })
    xit('selectable', () => {
        selectable()
    })
    it('Sortable', async () => {
        sortable()
    })

})

async function sortable() {
    let url = "https://jqueryui.com/sortable/"
    browser.get(url)
    browser.switchTo().frame(0)
    let it1 = element(by.xpath("//li[text()='Item 1']"))
    // let it3 = element(by.xpath("//li[text()='Item 3']"))
    let it5 = element(by.xpath("//li[text()='Item 5']"))
    var x, y;
    // console.log(it5.getLocation());
    await it5.getLocation().then((loc) => {
        console.log(loc.y);
        x = loc.x;
        y = loc.y
    })
    console.log(x + " " + y);
    await driver.browser.actions()
        .dragAndDrop(it1, { x: x, y: y })
        .perform()
    browser.sleep(3000)
}


function selectable() {
    browser.get('https://jqueryui.com/selectable/')
    browser.switchTo().frame(0)
    let it1 = element(by.xpath("//li[text()='Item 1']"))
    let it3 = element(by.xpath("//li[text()='Item 3']"))
    let it5 = element(by.xpath("//li[text()='Item 5']"))
    // element(by.css('body')).sendKeys(protractor.Key.CONTROL)
    driver.browser.actions()
        // .keyDown(driver.protractor.Key.CONTROL)
        .click(it1)
        .click(it3)
        .perform()
    browser.sleep(3000)
}
function dragAndDropBy() {
    browser.get('https://jqueryui.com/draggable/')
    browser.switchTo().frame(0)
    let ele = element(by.id('draggable'))
    driver.browser.actions().dragAndDrop(ele, { x: 150, y: 50 }).perform()
    browser.sleep(4000)
}
function dragAndDrop() {
    browser.get('https://jqueryui.com/droppable/')
    browser.switchTo().frame(0)
    var drag = element(By.id('draggable'))
    var drop = element(By.id('droppable'))
    browser.actions().dragAndDrop(drag, drop).perform()
}
