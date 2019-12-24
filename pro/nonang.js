describe('Non', () => {
    it('Ang', async () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://leafground.com/')
        console.log(await browser.getTitle());
    })
})