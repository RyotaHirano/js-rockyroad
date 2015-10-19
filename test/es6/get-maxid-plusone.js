import assert from 'power-assert';
import func from '../../question/es6/get-maxid-plusone';

describe('get-maxid-plusone', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'get-maxid-plusone.js is a function');
  });

  it('argument is immutable', () => {
    const data = [
      {
        id: 0,
        name: 'other'
      },
      {
        id: 2,
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
        id: 2,
        name: 'other'
      },
      {
        id: 1,
        name: 'other'
      }
    ];

    assert.deepEqual(data, expected);
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

    const expected = 11;

    assert(actual === expected);
  });

});
