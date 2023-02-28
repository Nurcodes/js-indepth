const start = performance.now();
const memoryUsedBefore = process.memoryUsage().heapUsed;
const randomAmountFromRandom = function* (amount, min, max) {
  while (amount--) {
    yield Math.floor(Math.random() * (max - min) + min);
  }
};

const generatorRandom = randomAmountFromRandom(3, 10, 20);
const generatorRandom1 = randomAmountFromRandom(5, 100, 200);
const generatorRandom2 = randomAmountFromRandom(10, 1000, 2000);

// for (const randomValue2 of generatorRandom2) {
//   for (const randomValue1 of generatorRandom1) {
//     for (const randomValue of generatorRandom) {
//       console.log(randomValue);
//     }
//     console.log(randomValue1);
//   }
//   console.log(randomValue2);
// }

// const end = performance.now();
// const memoryUsageAfter = process.memoryUsage().heapUsed;

// console.log(
//   `Time elapsed: ${(end - start).toFixed(2)}\nMemory usage: ${(
//     (memoryUsageAfter - memoryUsedBefore) /
//     Math.pow(1024, 2)
//   ).toPrecision(3)}`
// );

const generator = function* (amount) {
  let i = 0;
  while (amount--) {
    yield i;
    i++;
  }
};
const generator2 = function* (amount) {
  let i = 3;
  while (amount--) {
    yield i;
    i++;
  }
};
const generator3 = function* (amount) {
  let i = 8;
  while (amount--) {
    yield i;
    i++;
  }
};

const iterator1 = generator(3);
const iterator2 = generator2(5);
const iterator3 = generator3(8);

for (const val1 of iterator3) {
  for (const val2 of iterator2) {
    for (const val3 of iterator1) {
      console.log(val3);
    }
    console.log(val2);
  }
  console.log(val1);
}
