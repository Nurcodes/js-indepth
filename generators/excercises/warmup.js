const countTo10 = function* () {
  let i = 0;

  while (i <= 10) {
    yield i;
    i++;
  }
};

const generatorObj = countTo10();

for (const value of generatorObj) {
  console.log(value);
}
