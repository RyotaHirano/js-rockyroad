import assert from 'power-assert';
import func from '../question/find-by';

describe('find-by', () => {

  it('is a function', () => {
    assert.deepEqual(typeof func, 'function', 'find-by.js is a function');
  });

  it('1st argument is immutable', () => {
    const data = [
      {userID: 1, name: 'sugarshin', tags: ['a', 'b']},
      {userID: 3, name: 'abebe', tags: ['c']},
      {userID: 5, name: 'hoge', tags: []}
    ];

    func(data, {});

    const expected = [
      {userID: 1, name: 'sugarshin', tags: ['a', 'b']},
      {userID: 3, name: 'abebe', tags: ['c']},
      {userID: 5, name: 'hoge', tags: []}
    ];

    assert.deepEqual(data, expected, '1st argument is immutable');
  });

  it('case 1', () => {
    const actual = func([
      {userID: 1, name: 'sugarshin', tags: ['a', 'b']},
      {userID: 3, name: 'abebe', tags: ['c']},
      {userID: 5, name: 'hoge', tags: []}
    ], {userID: 3});

    const expected = {userID: 3, name: 'abebe', tags: ['c']};

    assert.deepEqual(actual, expected, 'case 1');
  });

  it('case 2', () => {
    const actual = func([
      {userID: 1, name: 'sugarshin', tags: ['a', 'b']},
      {userID: 3, name: 'abebe', tags: ['c']},
      {userID: 0, name: 'abebe', tags: ['c', 'a']},
      {userID: 5, name: 'hoge', tags: []}
    ], {name: 'abebe', tags: ['c', 'a']});

    const expected = {userID: 0, name: 'abebe', tags: ['c', 'a']};

    assert.deepEqual(actual, expected, 'case 2');
  });

  it('case 3', () => {
    const actual = func([
      {userID: 1, name: 'sugarshin', tags: ['a', 'b']},
      {userID: 3, name: 'abebe', tags: ['c']},
      {userID: 0, name: 'abebe', tags: ['c', 'a']},
      {userID: 5, name: 'hoge', tags: []}
    ], {name: 'abebe', userID: 2});

    const expected = null;

    assert.deepEqual(actual, expected, 'case 3');
  });

});
