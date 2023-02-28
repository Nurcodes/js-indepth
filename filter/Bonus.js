const nums = [10, 20, 30, 40, 50]
  .map((num) => num * 2)
  .filter((num) => (num > 50 ? true : false));
console.log(nums);
