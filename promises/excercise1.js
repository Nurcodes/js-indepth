console.log("Program started");
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);

  setTimeout(() => {
    reject();
  }, 2000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
  .then(() => {
    console.log("Program complete");
  })
  .catch(() => {
    console.log("Program failure");
  });
