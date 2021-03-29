// test/index.js

// Dependancies
const { implies, bitwiseImplies } = require('../');
const chai = require('chai');
const expect = chai.expect;

describe('Implies Tests', () => {
  it('implies', () => {
    expect(implies(true, true)).to.be.equal(true);
    expect(implies(true, false)).to.be.equal(false);
    expect(implies(false, true)).to.be.equal(true);
    expect(implies(false, false)).to.be.equal(true);
  });

  it('bitwiseImplies', () => {
    expect(bitwiseImplies(1, 1)).to.be.equal('-1');
    expect(bitwiseImplies(1232142142142, 234123512332, 16)).to.be.equal('-10800000001');
  });
});
