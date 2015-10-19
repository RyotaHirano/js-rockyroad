/*
  [
    [],
    [[[]]],
    [[]]
    ...
  ]

  多次元配列を引数に受け取り、
  1次元配列に変換した配列の新しい参照を返す

  @param {Array} array
  @returns {Array}
*/

let resultArray = [];

function arrayFlatten(data) {
  if (Array.isArray(data)) {
    flattenDeep(data);
  } else {
    resultArray.push(data);
  }
}

function flattenDeep(array) {
  array.forEach((data) => {
    arrayFlatten(data);
  });

  return resultArray;
}

export default function(array) {
  let _array = Array.from(array);
  return flattenDeep(_array);
}
