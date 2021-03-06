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

export default function(array) {
  var resultArray = [];

  function arrayFlatten(data) {
  	if (Array.isArray(data)) {
  		flattenDeep(data);
  	} else {
  		resultArray.push(data);
  	}
  }

  function flattenDeep(array) {
  	array.slice().map(function(data) {
  		arrayFlatten(data);
  	});

  	return resultArray;
  }

  return flattenDeep(array);
}
