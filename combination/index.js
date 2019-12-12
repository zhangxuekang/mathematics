
/**
 * @description 组合算法
 */


function combination(arr, num) {
  const result = [];
  let arrStr = '1'.repeat(num) + '0'.repeat(arr.length - num);
  while (arrStr.includes('10')) {
    result.push(getItem(arrStr));
    const pos = arrStr.indexOf('10');
    arrStr = arrStr.replace('10', '01');
    arrStr =
      [...arrStr.slice(0, pos)].sort((a, b) => b - a).join('') +
      arrStr.slice(pos);
    if (!arrStr.includes('10')) {
      result.push(getItem(arrStr));
    }
  }

  function getItem(arr) {
    const item = [];
    [...arr].forEach((v, i) => {
      if (v === '1') item.push(a[i])
    })
    return item;
  }

  return result;
}

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 2;

// 头脑风暴法
var combo = function(arr, num) {
  var result = [];
  var range = function(r, _arr) {
    if (r.length == num) {
      result.push(r)
    } else {
      let l = r.length;
      for (var i = 0, len = _arr.length - num + l; i <= len; i++) {
        console.log(r);
        range(r.concat(_arr[i]), _arr.slice(i + 1))
      }
    }
  }
  range([], arr);
  return result
}

const result = combo(a, num);
console.log(result, result.length);
