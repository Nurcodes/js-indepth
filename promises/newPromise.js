const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Working on the promise!!");
    resolve("Im done processing the data!!");
  }, 2500);
});

myPromise
  .then((resolvedValue) => {
    console.log("promised seems to be done");
    console.log(resolvedValue);
    return "Passing more info!";
  })
  .then((moreValue) => {
    console.log(moreValue);
    console.log(myPromise);
  });

console.log("Hello");
console.log(myPromise);
