import assert from 'power-assert';
import func from '../../question/es6/ascending-sort-by-id';

describe('ascending-sort-by-id', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'ascending-sort-by-id.js is a function');
  });

  it('argument is immutable', () => {
    const data = [
      {
        id: 0,
        name: 'other'
      },
      {
        id: 4,
        name: 'other'
      },
      {
        id: 1,
        name: 'other'
      }
    ];

    func(data);

    const expected = [
      {
        id: 0,
        name: 'other'
      },
      {
        id: 4,
        name: 'other'
      },
      {
        id: 1,
        name: 'other'
      }
    ];

    assert.deepEqual(data, expected, 'argument is immutable');
  });

  it('case 1', () => {
    const actual = func([
      {
        id: 2,
        name: 'other'
      },
      {
        id: 10,
        name: 'other'
      },
      {
        id: 4,
        name: 'other'
      }
    ]);

    const expected = [
      {
        id: 2,
        name: 'other'
      },
      {
        id: 4,
        name: 'other'
      },
      {
        id: 10,
        name: 'other'
      }
    ];

    assert.deepEqual(actual, expected, 'case 1');
  });

});
