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

export default function(object, keyPath) {

}
