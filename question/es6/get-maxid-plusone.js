/*
  [
    { id: 4, name: 'sugar' },
    { id: 2, name: 'shin' },
    ...
  ]

  上記のようなプロパティをもつオブジェクトを要素にもつ配列を引数にとり、
  `id` の値で一番大きな数値に +1 してその数値を返す

  @param {Array} array
  @returns {Number}
*/

export default function(array) {
  let sortArray = [];
  let maxIdPlusOne;
  let _array = Array.from(array);

  _array.forEach((data, i) => {
    sortArray[i] = data;
  });

  sortArray.sort((a, b) => {
    if (a.id > b.id) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });

  maxIdPlusOne = sortArray[0].id + 1;

  return maxIdPlusOne;
}
