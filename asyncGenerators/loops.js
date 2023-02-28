const regularGenerator = function* () {
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

const generatorObj = regularGenerator();
// console.log(generatorObj.next());

//* with a loop
let j = 0;
for (const promise of generatorObj) {
  if (j === 3) {
    break;
  } else {
    console.log(promise.then((val) => console.log(val)));
    j++;
  }
}
