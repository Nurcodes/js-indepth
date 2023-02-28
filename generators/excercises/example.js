const start = performance.now();
const memoryUsedBefore = process.memoryUsage().heapUsed;

function* randomAmountFromRange(amount, min, max) {
  let counter = 0;

  while (counter < amount) {
    yield Math.floor(Math.random() * (max - min + 1)) + min;
    counter++;
  }
}

const firstIterator = randomAmountFromRange(3, 10, 20);
const secondIterator = randomAmountFromRange(5, 100, 200);
const thirdIterator = randomAmountFromRange(10, 1000, 2000);

// for (const numbersThirdIterator of thirdIterator) {
//   for (const numbersSecondIterator of secondIterator) {
//     for (const numbersFirstIterator of firstIterator) {
//       console.log(numbersFirstIterator);
//     }

//     console.log(numbersSecondIterator);
//   }
//   console.log(numbersThirdIterator);
// }

// const end = performance.now();
// const memoryUsedAfter = process.memoryUsage().heapUsed;

// console.log(
//   `\nRuntime: ${(end - start).toFixed(1)} ms\nMemory usage: ${(
//     (memoryUsedAfter - memoryUsedBefore) /
//     Math.pow(1024, 2)
//   ).toPrecision(3)} MB`
// );

const iterators = [...firstIterator, ...secondIterator, ...thirdIterator];

for (const number of iterators) {
  console.log(number);
}

const end = performance.now();
const memoryUsedAfter = process.memoryUsage().heapUsed;
console.log(
  `\nRuntime: ${(end - start).toFixed(1)} ms\nMemory usage: ${(
    (memoryUsedAfter - memoryUsedBefore) /
    Math.pow(1024, 2)
  ).toPrecision(3)} MB`
);
