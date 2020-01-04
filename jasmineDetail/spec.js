
const c = require('./Calc.js')
describe('Leaarn Jasmine', () => {

    let cal = new c.Calculator()
    it('1. add two int values', () => {

        expect(350).toBeCloseTo(350.4, 0); //=> true as expected
        expect(350).toBeCloseTo(350.5, 0); //=> false should be true
        expect(350.5).toBeCloseTo(350.54, 1); //=> true as expected
        expect(350.6).toBeCloseTo(351, 1); //=> false should be true
        // expect(1000).toBeCloseTo(1100, -2); //fail
        // expect(1000).toBeCloseTo(1100, -3);
        //pass
        // expect(0.1 + 0.2).toBeCloseTo(0.3);
        // fails becouse it's 0.30000000000000004

        // expect(cal.add(0.1, 0.3)).toBeCloseTo(0.4)
    })
    // it('2. add two string values', () => {
    //     expect(cal.add('2', '3')).toEqual(23)
    // })
    // it('3. string manipulation', () => {
    //     expect(cal.getMessage()).toBeInstanceOf(String)
    // })
    // it('4. string length to be', () => {
    //     expect(cal.getMessage()).toMatch(/\w{6}/)
    // })
    // it('5. add two int values', () => {
    //     expect(cal.mul(200, 30)).toMatch(/\d{3}/)
    // })
})  