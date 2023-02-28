const randomGenerator = async function* () {
  while (1) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 10));
      }, 1000);
    });
  }
};

const randomIterator = randomGenerator();

const timeStart = Date.now();
async function getNumbers() {
  let i = 0;
  for await (const promise of randomIterator) {
    if (i === 5) break;
    console.log(promise);
    i++;
  }
  const timeEnd = Date.now();
  console.log(`Total elapsed: ${timeEnd - timeStart}`);
}

console.log("Program starting..");
getNumbers();
console.log("Program finished");
