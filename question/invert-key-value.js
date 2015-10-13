/*
  {
    a: 100,
    b: 10,
    c: 101,
    d: 10
  }

  上記のような、オブジェクトのkeyと値を逆にして新しいオブジェクトを返す。
  上記の場合は、
    {
      10: ['b', 'd'],
      100: ['a'],
      101: ['c']
    }
  というオブジェクトが返る。

  @param {Object} object
  @returns {Object}
*/

export default function(object) {
  var myObj = {};

  function invertKeyValue(object) {

    for (var key in object) {
      if ((object.hasOwnProperty(key))) {
        var myKey = object[key];
        var targetArray = [];
        if (Array.isArray(myObj[myKey])) {
          targetArray = myObj[myKey];
        }
        targetArray.push(key);
        myObj[myKey] = targetArray;
      }
    }

    return myObj;
  }

  return invertKeyValue(object);
}
