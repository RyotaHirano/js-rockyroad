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


  function findBy(array, object) {
    var _array = array.slice();
    var result = {};
    var keys = Object.keys(object);
    var keysCount = keys.length;
    var isHit = 0;

    keys.map(function(key) {
      var target = object[key];
      _array.map(function(data, index) {
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

    for (var r_key in result) {
      if (result.hasOwnProperty(r_key)) {
        if (result[r_key] == keysCount) {
          return _array[r_key];
        }
      }
    }

    return null;
  }

  return findBy(array, object);
}
