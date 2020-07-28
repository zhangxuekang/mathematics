/**
 * @description 找出0-number的自然数中的所有质数
 * @date 2019-11-11
 * @param {Number} number 截止的数字
 * @returns Number[]
 */
function findPrimeNumber(number) {
  if (number < 2) {
    return []
  }
  const result = []
  for (let i = 0; i <= number; i++) {
    if (isPrimeNumber(i)) {
      result.push(i)
    }
  }
  console.log(result);
  return result
}

/**
 * @description 判断数字是否是质数
 * @date 2019-11-11
 * @param {*} number
 * @returns Boolean
 */
function isPrimeNumber(number) {
  if (number !== parseInt(number)) {
    return false
  }
  if (number < 3) {
    return number > 1
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

findPrimeNumber(10000)
