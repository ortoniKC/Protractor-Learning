const driver = require('protractor')

class ViewLeadPage {
    verifyFirstName(fn) {
        expect(driver.element(driver.by.id('viewLead_firstName_sp')).getText())
        .toBe(fn)
        return this;
    }
}
exports.ViewLeadPage = ViewLeadPage;