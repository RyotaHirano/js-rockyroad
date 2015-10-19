/*
  [
    { animal: 'tiger', fruits: 'apple' },
    { animal: 'flamingo', fruits: 'grape' },
    { animal: 'elephant', fruits: 'peach' }
  ]

  上記のような、配列に含まれるオブジェクトのkeyごとに値をまとめた新しい配列を返す。
  また、返す値の各keyに対する配列は昇順でソートする。
  上記の場合は、
  [
    {
      animal: ['elephant', 'flamingo', 'tiger'],
      fruits: ['apple', 'grape', 'peach']
    }
  ]
  という配列が返る。

  @param {Array} array
  @returns {Array}
*/

function isObject(value) {
	return (Object(value) === value && !Array.isArray(value));
}

function getData(obj) {
	let returnArray = [];
	for(let _key in obj) {
		if(obj.hasOwnProperty(_key)) {
			returnArray.push(obj[_key]);
		}
	}

	return returnArray;
}

function pushArray(array, value) {
  if (array.indexOf(value) < 0) {
    array.push(value);
  }
}

export default function(array) {
  let _array = Array.from(array);
  let tmpObject = {};

  function concatKeys() {
  	_array.forEach((data) => {
  		for (let key in data) {
  			let tmpArray = [];
  			let tmpGetArray = [];

  			if (data.hasOwnProperty(key)) {
  				if(Array.isArray(tmpObject[key])) {
  					tmpArray = tmpObject[key];
  				}
  				if (isObject(data[key])){
  					tmpGetArray = getData(data[key]);
  					tmpGetArray.forEach((_data) => {
  						pushArray(tmpArray, _data);
            });
  				} else {
  					pushArray(tmpArray, data[key]);
  				}

  				tmpObject[key] = tmpArray.sort();
  			}
  		}
  	});

  	return [tmpObject];
  }

  return concatKeys();
}
