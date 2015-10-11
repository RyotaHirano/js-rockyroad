import assert from 'power-assert';
import func from '../question/get-max-number';

describe('get-max-number', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'get-max-number.js is a function');
  });

  it('argument is immutable', () => {
    const data = [143, 56, 436, 437, 4];

    func(data);

    const expected = [143, 56, 436, 437, 4];

    assert.deepEqual(data, expected, 'argument is immutable');
  });

  it('case 1', () => {
    const actual = func([2, 35, 23, 8, 8, 52, 4, 14]);

    const expected = 885243523214;

    assert(actual === expected);
  });

  it('case 2', () => {
    const actual = func([4, 25, 92, 0, 1, 9, 970, 7]);

    const expected = 997092742510;

    assert(actual === expected);
  });

  it('case 3', () => {
    const actual = func([6436436643, 6436436642, 6436436642, 8, 67]);

    const expected = 867643643664364364366426436436642;

    assert(actual === expected);
  });

  it('case 4', () => {
    const actual = func([64364365, 6436436642, 6436436642, 8, 67]);

    const expected = 8676436436642643643664264364365;

    assert(actual === expected);
  });

  it('case 5', () => {
    const actual = func([64364367, 6436436642, 6436436642, 8, 67]);

    const expected = 8676436436764364366426436436642;

    assert(actual === expected);
  });

  it('case 6', () => {
    const actual = func([64364366, 6436436642, 6436436642, 8, 67]);

    const expected = 8676436436664364366426436436642;

    assert(actual === expected);
  });

  it('case 7', () => {
    const actual = func([64364366, 6436436672, 6436436642, 8, 67]);

    const expected = 8676436436672643643666436436642;

    assert(actual === expected);
  });

});
