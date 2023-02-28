const nums = [10, 30, 50, 70, 90]
  .map((item) => item ** 2)
  .filter((item) => item > 1000)
  .reduce((acc, num) => acc + num, 0);
