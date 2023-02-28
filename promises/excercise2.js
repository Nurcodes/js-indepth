console.log("starting program");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Step 1 complete");
  }, 3000);
});

console.log(myPromise);

myPromise
  .then((fulfill) => {
    console.log(fulfill);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Step 2 complete");
      }, 3000);
    });
  })
  .then((success) => {
    console.log(success);
  });
