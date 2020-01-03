import { browser } from "protractor";

const driver = require('protractor')
describe("Learn Actions", () => {
  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize()
    browser
      .manage()
      .timeouts()
      .implicitlyWait(20000);
  });
  it('Drag & Drop', () => {
    dragAndDrop()
  })
  it('drag nad drop by', () => {
    dragAndDropBy()
  })

  it('selectable', () => {
    selectable()
  })
  it("Sortable", async () => {
    sortable();
  });
});

async function sortable() {
  let url = "https://jqueryui.com/sortable/";
  browser.get(url);
  browser.switchTo().frame(0);
  let it1 = element(by.xpath("//li[text()='Item 1']"));
  // let it3 = element(by.xpath("//li[text( )='Item 3']"))
  let it5 = element(by.xpath("//li[text()='Item 5']"));
  var x, y;
  // console.log(it5.getLocation());
  it5.getLocation()
    .then(loc => {
      console.log("In then fn: " + loc.y + " " + loc.x);
      x = loc.x;
      y = loc.y;
      // console.log(x + " " + y);
    });
  await browser
    .actions()
    .dragAndDrop(it1, { x: x, y: y })
    .perform();
  browser.sleep(10000);
}

function selectable() {
  browser.get("https://jqueryui.com/selectable/");
  browser.switchTo().frame(0);
  let it1 = element(by.xpath("//li[text()='Item 1']"));
  let it3 = element(by.xpath("//li[text()='Item 3']"));
  let it5 = element(by.xpath("//li[text()='Item 5']"))
  element(by.css('body')).sendKeys("", protractor.Key.CONTROL);
  browser.actions()
    // .keyDown(.protractor.Key.CONTROL)
    .click(it1)
    .click(it3)
    .perform();
  browser.sleep(3000);
}
function dragAndDropBy() {
  driver.browser.get("https://jqueryui.com/draggable/")
  driver.browser.switchTo().frame(0);
  let dra = driver.element(driver.by.id('draggable'))
  driver.browser.actions().dragAndDrop(dra, { x: 100, y: 100 }).perform()
  browser.sleep(3000)
}
function dragAndDrop() {
  browser.get("https://jqueryui.com/droppable/");
  browser.switchTo().frame(0);
  var drag = element(By.id("draggable"));
  var drop = element(By.id("droppable"));
  browser.actions().dragAndDrop(drag, drop).perform()
}
