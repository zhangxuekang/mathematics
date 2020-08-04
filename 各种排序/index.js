const arr = [1, 6, 2, 8, 3, 5, 8, 2, 9, 3, 1, 8, 0, 3, 7, 0];

/* 冒泡排序 */
function bubble(arr) {
  const handleArr = arr.slice();
  let isSort = true; // 记录是否已经排好了
  for (let i = 0; i < handleArr.length - 1; i++) {
    for (let j = 0; j < handleArr.length - 1 - i; j++) {
      if (handleArr[j] > handleArr[j + 1]) {
        /* 引入第三变量的常规方式值交换 */
        // const temp = handleArr[j];
        // handleArr[j] = handleArr[j + 1];
        // handleArr[j + 1] = temp;
        /* 使用es6解构的值交换 */
        [handleArr[j], handleArr[j + 1]] = [handleArr[j + 1], handleArr[j]];
        isSort = false;
      }
    }
    if (isSort) {
      break;
    }
  }
  return handleArr;
}
/* 选择排序 */
function selection(arr) {
  const handleArr = arr.slice();
  for (let i = 0; i < handleArr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < handleArr.length; j++) {
      if (handleArr[j] < handleArr[minIndex]) {
        minIndex = j;
      }
    }
    [handleArr[i], handleArr[minIndex]] = [handleArr[minIndex], handleArr[i]];
  }
  return handleArr;
}

console.log(selection(arr), '---18--mark2020');
