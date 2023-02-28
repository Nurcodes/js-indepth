const asyncGenerator = async function* () {
  let i = 0;
  while (1) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
    i++;
  }
};

const asyncIterator = asyncGenerator();

const grabAsync = async () => {
  let j = 0;
  for await (const promise of asyncIterator) {
    if (j === 5) break;
    console.log(promise);
    j++;
  }
};

console.log("Programm starting..");
grabAsync();
console.log("Program finished");
