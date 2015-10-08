/*
  [
    { id: 4, name: 'sugar' },
    { id: 2, name: 'shin' },
    { id: 7, name: 'shin' },
    ...
  ]

  上記のようなプロパティをもつオブジェクトを要素にもつ配列を引数にとり、
  `id` の値で昇順でオブジェクトをソートした配列の新しい参照を返す

  @param {Array} array
  @returns {Array}
*/

export default function(array) {
  var sortArray = [];

  array.forEach(function(data, i){
    sortArray[i] = data;
  });

  sortArray.sort(function(a, b) {
    if (a.id < b.id) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });

  return sortArray;
}
