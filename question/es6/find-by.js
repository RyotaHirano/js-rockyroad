/*
  オブジェクトを要素に持つ配列を受け取り、
  第2引数で渡されたオブジェクトのプロパティと値が
  すべて一致するオブジェクトを返す
  見つからない場合は`null`を返す

  @param {Array} array
  @param {Object} object
  @returns {Object}
*/

export default function(array, object) {
  let _array = Array.from(array);
  let result = {};
  let keys = Object.keys(object);
  let keysCount = keys.length;
  let isHit = 0;

  function findBy(object) {
    keys.forEach((key) => {
      let target = object[key];
      _array.forEach((data, index) => {
        if (target.toString() === data[key].toString()) {
          isHit = 1;
        } else {
          isHit = 0;
        }

        if (isNaN(parseInt(result[index]))) {
          result[index] = 0;
        }
        result[index] = parseInt(result[index]) + isHit;
      });
    });

    for (let r_key in result) {
      if (result.hasOwnProperty(r_key)) {
        if (result[r_key] == keysCount) {
          return _array[r_key];
        }
      }
    }

    return null;
  }

  return findBy(object);
}
