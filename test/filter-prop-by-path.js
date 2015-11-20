import assert from 'power-assert';
import func from '../question/filter-prop-by-path';

describe('filter-prop-by-path', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'filter-prop-by-path.js is a function');
  });

  it('argument is immutable', () => {
    const data = {
      a: {
        b: {
          c: 2,
          f: ''
        },
        e: [5, { f: 33 }]
      },
      d: 3
    };

    func(data, 'a.b');

    const expected = {
      a: {
        b: {
          c: 2,
          f: ''
        },
        e: [5, { f: 33 }]
      },
      d: 3
    };

    assert.deepEqual(data, expected, 'argument is immutable');
  });

  it('case 1', () => {
    const actual = func({
      a: {
        b: {
          c: 2,
          f: ''
        },
        e: [5, '']
      },
      d: 3
    }, 'a.b.c');

    const expected = {
      a: {
        b: {
          f: ''
        },
        e: [5, '']
      },
      d: 3
    };

    assert.deepEqual(actual, expected, 'case 1');
  });

  it('case 2', () => {
    const actual = func({
      a: {
        b: {
          c: 2,
          f: ''
        },
        e: [5, '']
      },
      d: 3
    }, 'a.e[1]');

    const expected = {
      a: {
        b: {
          c: 2,
          f: ''
        },
        e: [5]
      },
      d: 3
    };

    assert.deepEqual(actual, expected, 'case 2');
  });

  it('case 3', () => {
    const actual = func({
      a: {
        b: [
          {
            g: 1,
            j: [2, 3, 5]
          }
        ]
      },
      d: 3
    }, 'a.b[0].g');

    const expected = {
      a: {
        b: [
          {
            j: [2, 3, 5]
          }
        ]
      },
      d: 3
    };

    assert.deepEqual(actual, expected, 'case 3');
  });

});
