
const c = require('./Calc.js')
describe('Leaarn Jasmine', () => {

    let cal = new c.Calculator()
    xit('add two int values', () => {
        expect(cal.add(2, 3)).toBeCloseTo(4)
    })
    xit('add two string values', () => {
        expect(cal.add('2', '3')).toEqual(23)
    })
    xit('string manipulation', () => {
        expect(cal.getMessage()).toBeInstanceOf(String)
    })
    xit('string length to be', () => {
        expect(cal.getMessage()).toMatch(/\w{6}/)
    })
    it('add two int values', () => {
        expect(cal.mul(200, 30)).toMatch(/\d{3}/)
    })
})  