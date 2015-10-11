import assert from 'power-assert';
import func from '../question/get-num-4math-operate';

describe('get-num-4math-operate', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'get-num-4math-operate.js is a function');
  });

  it('case 1', () => {
    const actual = func(0, {
      add: [343, 32, 234, 32],
      sub: [243, 44, 12, 4],
      multi: [4, 12, 4],
      div: [2, 3]
    });

    const expected = 10816;

    assert(actual === expected);
  });

  it('case 2', () => {
    const actual = func(10, {
      multi: [4, 12, 34],
      sub: [8, 44, 4],
      add: 32,
      div: 2
    });

    const expected = 8148;

    assert(actual === expected);
  });

  it('case 3', () => {
    const actual = func(10, {
      div: 11,
      sub: 2
    });

    const expected = -1;

    assert(actual === expected);
  });

});
