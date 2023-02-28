console.log("Program started");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Hello, friend!", error: null });
  }, 5000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
  .then((fulfill) => {
    console.log(fulfill);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("First promise chain complete Ran for 2seconds");
      }, 2000);
    });
  })
  .then((fulfill) => {
    console.log(fulfill);
  });

myPromise
  .then((fulfill) => {
    // going to fullfill the resolved promise the first one
    console.log(myPromise);

    // return a new promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second promise chain complete! Ran for 10seconds");
      }, 10000);
    });
  })
  .then((fulfill) => {
    console.log("Seperate Promise chain from the first one");
    console.log(fulfill);
  });
