// Login & Verify the user
const excel = require('../../utils/DataFromExcel')
const st = require("./../testcases/util.js")
const init = new st.SetUp();
const loginPage = require('./../pages/loginPage.js')


describe('TC001', () => {
    beforeEach(() => {
        init.setUp();
    })
    let ex = new excel.ReadData()
    ex.getData('./data.xlsx', 'Sheet1').forEach((data) => {
        it('Create Lead', () => {
            const login = new loginPage.LoginPage();
            login.enterUserName(data.user)
                .enterPassword(data.pass)
                .clickLoginBtn()
            // .verifyLoggedInName(data.verification)
            // .clickCRMSFA()
            // .clickCreateLead()
            // .enterComName(data.cm)
            // .enterFirstName(data.fn)
            // .enterLastName(data.ln)
            // .clickSubmitBtn()
            // .verifyFirstName(data.fn)
        })
    })

})