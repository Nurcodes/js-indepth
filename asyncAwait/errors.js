const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
      reject("There was an error");
    }, ms);
  });
  return timeout;
};

console.log("Starting program"); //1

const catchAsync = async () => {
  const result = await makeTimeout(3000).catch((rejector) => {
    return rejector;
  });
  console.log(result);
};

catchAsync();
console.log("Synchronus code!"); // 3

const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}
console.log(Promise.resolve(p) === asyncReturn(p));

console.log();
