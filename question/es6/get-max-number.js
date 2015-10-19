/*
  いくつかの number を要素にもつ配列を引数にとり
  それらを結合したときの最大値を返す

  @param {Array} array
  @returns {Number}
*/

let searchIndex = 0;
let nowIsRarge = false;

function whitchRargeValue(p, c) {
  let nextIndex = searchIndex + 1;
  let pFirstValue = parseInt(p.slice(searchIndex, nextIndex));
  let cFirstValue = parseInt(c.slice(searchIndex, nextIndex));

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
      let pBeforeFirstValue = parseInt(p.slice(searchIndex - 1, nextIndex - 1));
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
      let cBeforeFirstValue = parseInt(c.slice(searchIndex - 1, nextIndex - 1));
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
  let tmpArray = [];
  let maxNumber = '';
  let _array = Array.from(array);

  function addArray(value) {
    let pushArray = false;
    let nowRarge = false;
    let nowIndex = 0;

    if (tmpArray.length > 0) {
      let _tmpArray = tmpArray.slice();

      _tmpArray.some((data, index) => {
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
    _array.forEach((value) => {
      let strValue = value.toString(10);
      addArray(strValue);
    }, 0);

    tmpArray.forEach((data) => {
      maxNumber = maxNumber + data + '';
    });

    return parseInt(maxNumber);
  }

  return getMaxNumber(array);
}
