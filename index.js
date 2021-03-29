const Integer = require('integer');

const upperMask = Integer.MAX_VALUE.shiftRight(32).shiftLeft(32);

/**
 *
 * @param {boolean} left
 * @param {boolean} right
 * @return {boolean}
 */
function implies(left, right) {
  const boolLeft = !!left;
  const boolRight = !!right;
  return (!boolLeft || boolRight);
}

/**
 * Will take the left and right values and perform a bitwise
 * implies operator on them and return the string value.
 * Values are treated as 64-bit integers.
 * @param {*} left
 * @param {*} right
 * @param {number} [radix=10]
 * @returns {string}
 */
function bitwiseImplies(left, right, radix = 10) {
  const intLeft = Integer.fromNumber(parseInt(left), 0);
  const intRight = Integer.fromNumber(parseInt(right), 0);
  const top16Left = intLeft.shiftRight(32);
  const top16Right = intRight.shiftRight(32);
  const topValue = top16Left.not().or(top16Right);
  const bottom16Left = intLeft.and(upperMask);
  const bottom16Right = intRight.and(upperMask);
  const bottomValue = bottom16Left.not().or(bottom16Right);
  return topValue.shiftLeft(32).or(bottomValue)
    .toString(radix);
}


module.exports = {
  implies,
  bitwiseImplies,
};
