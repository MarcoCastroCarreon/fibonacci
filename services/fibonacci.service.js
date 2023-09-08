const fibonacciRecursive = (n = 0) => {
    if (n <= 0) {
        return 0;
      } else if (n === 1) {
        return 1;
      } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
      }
}

module.exports = {
    fibonacciRecursive
}