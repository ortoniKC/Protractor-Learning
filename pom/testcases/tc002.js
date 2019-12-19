// Login & Verify the user

const st = require("./util.js")
const init = new st.SetUp();
const loginPage = require('../pages/loginPage.js')
xdescribe('TC002', () => {
    beforeEach(() => {
        console.log("In Tc002");
        init.setUp();
    })
    afterEach(()=>{
        init.stop()
    })
    xit('Run for DemoCSR', () => {
        const login = new loginPage.LoginPage();
        login.enterUserName('DemoCSR')
        login.enterPassword('crmsfa')
        let home = login.clickLoginBtn()
        home.verifyLoggedInName("Demo B2B CSR")
        home.clickCRMSFA()
        // .clickLogout();
    })
})

