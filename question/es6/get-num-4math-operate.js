/*
  {
    add: [343, 32, 234, 32],
    sub: [243, 44, 12, 4],
    multi: [4, 12, 4],
    div: [13, 434, 314]
  }

  上記のようなプロパティをもつオブジェクトを第2引数にとり、第1引数で渡された数値に対して、
  プロパティそれぞれに対応する四則演算を、その値である数値、
  または数値が格納された配列それぞれで行いその結果を返す

  小数点以下は切り捨てる

  @param {Number} number
  @param {Object} object
  @returns {Number}
*/

let myNumber = 0;

function getMathResult(property, data) {
  if (Array.isArray(data)) {
    data.forEach((value) => {
      doMath(value, property);
    });
  } else {
    doMath(data, property);
  }
}

function doMath(value, property) {
  switch (property) {
    case 'add':
      myNumber = myNumber + value;
      break;
    case 'sub':
      myNumber = myNumber - value;
      break;
    case 'multi':
      myNumber = myNumber * value;
      break;
    case 'div':
      myNumber = myNumber / value;
      break;
    default:
      break;
  }
}

function getMax4MathOperate(number, object) {
  myNumber = number;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      getMathResult(key, object[key]);
    }
  }

  return Math.floor(myNumber);
}

export default function(number, object) {
  return getMax4MathOperate(number, object);
}
