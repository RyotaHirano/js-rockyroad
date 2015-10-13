import assert from 'power-assert';
import func from '../question/concat-keys';

describe('concat-keys', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'concat-keys.js is a function');
  });

  it('argument is immutable', () => {
    const data = [
      {
        animal: 'tiger',
        fruits: 'apple'
      },
      {
        animal: 'flamingo',
        fruits: 'grape'
      },
      {
        animal: 'elephant',
        fruits: 'peath'
      }
    ];

    func(data);

    const expected = [
      {
        animal: 'tiger',
        fruits: 'apple'
      },
      {
        animal: 'flamingo',
        fruits: 'grape'
      },
      {
        animal: 'elephant',
        fruits: 'peath'
      }
    ];

    assert.deepEqual(data, expected, 'argument is immutable');
  });

  it('case 1', () => {
    const actual = func([
      {
        animal: 'tiger',
        fruits: 'apple'
      },
      {
        animal: 'flamingo',
        fruits: 'grape'
      },
      {
        animal: 'elephant',
        fruits: 'peath'
      }
    ]);

    const expected = [
      {
        animal: ['elephant', 'flamingo', 'tiger'],
        fruits: ['apple', 'grape', 'peath']
      }
    ];

    assert.deepEqual(actual, expected, 'case 1');
  });

  it('case 2', () => {
    const actual = func([
      {
        animal: 'dog',
        fruits: 'apple'
      },
      {
        animal: 'cat',
        fruits: 'grape'
      },
      {
        animal: 'dog',
        fruits: 'peath'
      }
    ]);

    const expected = [
      {
        animal: ['cat', 'dog'],
        fruits: ['apple', 'grape', 'peath']
      }
    ];

    assert.deepEqual(actual, expected, 'case 2');
  });

  it('case 3', () => {
    const actual = func([
      {
        animal: 'dog'
      },
      {
        fruits: 'strawberry',
        color: 'red'
      },
      {
        animal: 'dog',
        fruits: 'apple',
        color: 'yellow'
      },
      {
        animal: 'cat',
        fruits: 'banana',
        color: 'yellow'
      }
    ]);

    const expected = [
      {
        animal: ['cat', 'dog'],
        fruits: ['apple', 'banana', 'strawberry'],
        color: ['red', 'yellow']
      }
    ];

    assert.deepEqual(actual, expected, 'case 3');
  });

  it('case 4', () => {
    const actual = func([
      {
        animal: 'dog',
        fruits: {
          red: 'apple',
          yellow: 'banana'
        }
      },
      {
        fruits: 'strawberry'
      },
      {
        animal: 'cat',
        fruits: {
          pink: 'peach'
        },
        color: 'yellow'
      }
    ]);

    const expected = [
      {
        animal: ['cat', 'dog'],
        fruits: ['apple', 'banana', 'peach', 'strawberry'],
        color: ['yellow']
      }
    ];

    assert.deepEqual(actual, expected, 'case 4');
  });

});
