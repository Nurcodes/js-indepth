const values = [
  [1, 2, 3],
  [0, 0, 1],
  [3, 6, 9],
  [0, 1, 2],
];

const hasTwos = values.filter((item) => {
  return item.includes(2) ? true : false;
});
console.log(values);
console.log(hasTwos);
