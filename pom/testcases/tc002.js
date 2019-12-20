// Login & Verify the user

const st = require("./util.js")
const init = new st.SetUp();
const loginPage = require('../pages/loginPage.js')
describe('TC002', () => {
    beforeEach(() => {
        console.log("In Tc002");
        init.setUp();
    })
    it('Run for DemoCSR', () => {
        const login = new loginPage.LoginPage();
        login.enterUserName(browser.params.userName)
        login.enterPassword(browser.params.password)
        let home = login.clickLoginBtn()
        home.verifyLoggedInName("Demo B2B CSR")
        home.clickCRMSFA()
        // .clickLogout();
    })
})

