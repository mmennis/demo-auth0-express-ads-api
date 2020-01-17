process.env.NODE_ENV = 'test';

const chai = require('chai');
let should = chai.should();

describe('Test suite', () => {
    it('should verify a basic test', () => {
        let one = 1; 
        one.should.be.eql(1)
    })
})