import assert from 'power-assert';
import func from '../question/invert-key-value';

describe('invert-key-value', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'invert-key-value.js is a function');
  });

  it('argument is immutable', () => {
    const data = {
      a: 100,
      b: 10,
      c: 101,
      d: 10
    };

    func(data);

    const expected = {
      a: 100,
      b: 10,
      c: 101,
      d: 10
    };

    assert.deepEqual(data, expected, 'argument is immutable');
  });

  it('case 1', () => {
    const actual = func({
      a: 100,
      b: 10,
      c: 101,
      d: 10
    });

    const expected = {
      10: ['b', 'd'],
      100: ['a'],
      101: ['c']
    };

    assert.deepEqual(actual, expected, 'case 1');
  });

  it('case 2', () => {
    const actual = func({
      a: 100,
      b: 100,
      c: 100,
      d: 100
    });

    const expected = {
      100: ['a', 'b', 'c', 'd']
    };

    assert.deepEqual(actual, expected, 'case 2');
  });

  it('case 3', () => {
    const actual = func({
      value: 0,
      10: 'id',
      total: 100,
      taro: 'name'
    });

    const expected = {
      0: ['value'],
      100: ['total'],
      'id': [10],
      'name': ['taro']
    };

    assert.deepEqual(actual, expected, 'case 3');
  });
});
