// 创造斐波那契数列
function getFibonacci(n) {
  switch (n) {
    case 0:
      return [];
    case 1:
      return [1];
    case 2:
      return [1, 2];
    default:
      const fibonacci = [1, 2];
      for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      }
      return fibonacci;
  }
}