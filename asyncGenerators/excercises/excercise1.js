const randomYieldGenerator = async function* () {
  while (1) {
    yield Math.floor(Math.random() * 2)
      ? new Promise((resolve, reject) => {
          setTimeout(() => resolve("Fast!"), 500);
        })
      : new Promise((resolve, reject) => {
          setTimeout(() => resolve("Slow!"), 3000);
        });
  }
};

const randomYield = randomYieldGenerator();

async function getRandomYield() {
  for await (const promise of randomYield) {
    console.log(promise);
  }

  //* 2 OPTIONS FOR AWAIT OR REGULAR
  // const val = await randomYield.next();
  // console.log(val.value);
}

console.log("Program starting..");
getRandomYield();
console.log("Program finished");
