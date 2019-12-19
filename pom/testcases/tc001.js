// Login & Verify the user

const st = require("./../testcases/util.js")
const init = new st.SetUp();
const loginPage = require('./../pages/loginPage.js')
describe('TC001', () => {
    beforeEach(() => {
        console.log("In Tc001");
        init.setUp();
    })
    afterEach(()=>{
        init.stop()
    })
    it('Run for DemoSalesManager', () => {
        const login = new loginPage.LoginPage();
        login.enterUserName('DemoSalesManager')
        login.enterPassword('crmsfa')
        let home = login.clickLoginBtn()
        home.verifyLoggedInName("Demo Sales Manager")
        home.clickCRMSFA().clickLogout()
    })
})