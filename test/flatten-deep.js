import assert from 'power-assert';
import func from '../question/flatten-deep';

describe('flatten-deep', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'flatten-deep.js is a function');
  });

  it('argument is immutable', () => {
    const data = [
      [[]],
      [],
      [[[]]]
    ];

    func(data);

    const expected = [
      [[]],
      [],
      [[[]]]
    ];

    assert.deepEqual(data, expected, 'argument is immutable');
  });

  it('case 1', () => {
    const actual = func([
      [2[3, 5], ''],
      [4, 5, [7, 8], [[[{}]]], () => {}],
      [1, [[4, false]], true, null]
    ]);

    const expected = [
      2, 3, 5, '',
      4, 5, 7, 8, {}, () => {},
      1, 4, false, true, null
    ];

    assert.deepEqual(actual, expected, 'case 1');
  });

});
