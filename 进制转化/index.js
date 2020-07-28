function from10to2(n) {
  let number = n;
  const result = [];
  while (number > 0) {
    const rem = Math.floor(number % 2);
    number = Math.floor(number / 2);
    result.push(rem);
  }
  return result.reverse().join('');
}


