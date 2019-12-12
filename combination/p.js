function arrange(arr) {
  function transform(item) {
    Object.keys(item).forEach(k => {
      item[k] = getMap(item[k]);
      if (typeof item[k] !== 'number') {
        transform(item[k]);
      }
    });
  }
  function getMap(arr) {
    if (arr.length === 1) return arr[0];
    const map = {};
    arr.forEach(v => {
      map[v] = arr.filter(vi => vi !== v);
    });
    return map;
  }
  const result = getMap(arr);
  transform(result);
  return result;
}
const arr = [1, 2, 3, 4];
result = arrange(arr);
console.log(result, '---24--mark2019');