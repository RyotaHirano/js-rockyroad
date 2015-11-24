/*
  'a.b.c' のような文字列をもとに
  オブジェクトの対象プロパティをフィルタリングした新しいオブジェクトを返す

  const o = {
    a: {
      b: {
        c: 2,
        f: ''
      },
      e: [5, '']
    },
    d: 3
  };
  const r = func(o, 'a.b.c');
  console.log(r); // =>
    {
      a: {
        b: {
          f: ''
        },
        e: [5, '']
      },
      d: 3
    }

  @param {Object} object
  @param {String} keyPath
  @returns {Object}
*/

function createCloneObj(obj) {
  let _object = JSON.stringify(obj);
  return _object = JSON.parse(_object);
}

function chkArrayString(data) {
  return (/[[]/.test(data)) ? true : false;
}

function keySeparate(strKey) {
  const keyAry = strKey.split('.');
	let _keyAry = [];
	let index = 0;
	for(let i = 0; i < keyAry.length; i++) {
		let data = keyAry[i];
    if(chkArrayString(data)) {
			//キーが配列
			_keyAry[++index] = data.slice(0, data.indexOf('['));
			_keyAry[++index] = data.slice(data.indexOf('[') + 1, data.indexOf(']'));
    } else {
			_keyAry[++index] = data;
    }
  }
	return _keyAry;
}

function getTargetValue(obj, keys) {
  let _obj = {};
  keys.forEach((key) => {
    if (Object.keys(_obj).length !== 0) {
      obj = _obj;
    }
    _obj = obj[key];
  });
  return _obj;
}

function deleteKeyObj(obj, keys, lastKey) {
  delete getTargetValue(obj, keys)[lastKey];
  return obj;
}

export default function(object, keyPath) {
  let _object = createCloneObj(object);
  const keys = keySeparate(keyPath);
  const lastKey = keys.pop();

  return deleteKeyObj(_object, keys, lastKey);
}
