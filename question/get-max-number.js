/*
  いくつかの number を要素にもつ配列を引数にとり
  それらを結合したときの最大値を返す

  @param {Array} array
  @returns {Number}
*/

var searchIndex = 0;
var nowIsRarge = false;

function whitchRargeValue(p, c) {
  var nextIndex = searchIndex + 1;
  var pFirstValue = parseInt(p.slice(searchIndex, nextIndex));
  var cFirstValue = parseInt(c.slice(searchIndex, nextIndex));

  if (!isNaN(pFirstValue) && !isNaN(cFirstValue)) {
    if (pFirstValue != cFirstValue) {
      if (pFirstValue > cFirstValue) {
        nowIsRarge = true;
      } else {
        nowIsRarge = false;
      }
    } else {
      searchIndex++;
      whitchRargeValue(p, c);
    }
  } else {
    if (!isNaN(pFirstValue)) {
      var pBeforeFirstValue = parseInt(p.slice(searchIndex - 1, nextIndex - 1));
      if (!isNaN(pBeforeFirstValue)) {
        if (pBeforeFirstValue > pFirstValue) {
          nowIsRarge = false;
        } else {
          nowIsRarge = true;
        }
      } else {
        nowIsRarge = true;
      }
    } else {
      var cBeforeFirstValue = parseInt(c.slice(searchIndex - 1, nextIndex - 1));
      if (isNaN(cBeforeFirstValue)) {
        if (cBeforeFirstValue > cFirstValue) {
          nowIsRarge = false;
        } else {
          nowIsRarge = true;
        }
      } else {
        nowIsRarge = true;
      }
    }
  }

  searchIndex = 0;
  return nowIsRarge;
}

export default function(array) {
  var tmpArray = [];
  var _array = array.slice();

  function addArray(value) {
    var pushArray = false;
    var nowRarge = false;
    var nowIndex = 0;

    if (tmpArray.length > 0) {
      var _tmpArray = tmpArray.slice();

      _tmpArray.some(function(data, index) {
        nowIndex = index;
        nowRarge = whitchRargeValue(value, data);
        if (nowRarge) {
          pushArray = true;
          tmpArray.splice(nowIndex, 0, value);
          return true;
        }
      });
    } else {
      if (!pushArray) {
        return tmpArray.push(value);
      }
    }
    if (!pushArray) {
      return tmpArray.push(value);
    }

    return false;
  }

  function getMaxNumber(array) {
    var maxNumber = '';

    _array.forEach(function(value) {
      var strValue = value.toString(10);
      addArray(strValue);
    }, 0);

    tmpArray.forEach(function(data) {
      maxNumber = maxNumber + data + '';
    });

    return parseInt(maxNumber);
  }

  return getMaxNumber(array);
}
