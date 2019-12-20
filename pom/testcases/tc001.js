// Login & Verify the user

const st = require("./../testcases/util.js")
const init = new st.SetUp();
const loginPage = require('./../pages/loginPage.js')
describe('TC001', () => {
    // @BeforeMethod
    beforeEach(() => {
        console.log("In Tc001");
        init.setUp();
    })
    // @AfterMethod
    afterEach(() => {
        init.stop()
    })

    // @Test
    it('Run for DemoSalesManager', () => {
        const login = new loginPage.LoginPage();
        login.enterUserName('DemoSalesManager')
            .enterPassword('crmsfa')
            .clickLoginBtn()
            .verifyLoggedInName("Demo Sales Manager")
            .clickCRMSFA()
            .clickCreateLead()
            .enterComName('TestLeaf')
            .enterFirstName('Koushik')
            .enterLastName('Chatterjee')
            .clickSubmitBtn()
            .verifyFirstName('Chatterjee')
    })
})